---
sidebar_position: 11
---

# MAST Contracts

MAST stands for **M**erkelized **A**bstract **S**yntax **T**ree. It is a technique that not only allows for very large scripts to be used, it also greatly increases privacy. 

Instead of providing the entire script - you can MAST sections of it and only present the information required for the path of execution. 

It involves making hash trees of values, providing the root of the tree, the leaf node and accompanying proof. The proof grows as log(n) for n - standard binary hash tree.

In other words.. You have this script :

~~~~
IF SIGNEDBY(0xFF) THEN
//RUN SOME CODE - CODEBLOCK 1
ELSEIF @BLOCK GT 100 THEN
//RUN SOME OTHER CODE - CODEBLOCK 2
ENDIF
~~~~

If `codeblock1` is run then you never need to know what was in `codeblock2`. That code is never executed. These blocks of code could be large, very large. This way you reduce the amount of data needed to be sent with the transaction, decreasing size and increasing privacy. The code could be MegaBytes in size.. all that matters is that the path of execution through the code is below the Minima KISSVM limit. **Currently this is set to 512 operations.**
:::note
Since a MAST block is a hash tree of different values.. The leaf nodes of the tree are the allowed values.. so you can have *millions* of possible script blocks, all accessed via a different merkle proof to root. 
:::
Say you wanted to have a 1 of 10,000 multisig. You could not add 10,000 public keys to a script - as it would make the transaction too large to send over the network. But - each leaf node could be a different `SIGNEDBY` code block, and you would present that code with the correct proof to be allowed to spend that coin. 

Or.. perhaps you could use this technique to check for valid game states - tic tac toe would require 3<sup>9</sup> possible final states.. and when you play the game you provide the winning state (a leaf node + proof) which is checked in the script. (More on that later.. )

The way you would package this up is:

~~~~
IF SIGNEDBY(0xFF) THEN
MAST 0x72BE56DFD48B785139A72512FEAAC7E339B8F48132E9B9340A248EFC00F4A5DA
ELSEIF @BLOCK GT 100 THEN
MAST 0xFA1B16685F09FA56581614AC55E731697C46926392129F3A6BF8FA5EE202A251
ENDIF
~~~~

Then you provide the script proof for the particular MAST block. You can have MAST blocks inside other MAST blocks of course.
Let's now go through a complete example. Let's create a MAST block..

~~~~
mmrcreate nodes:["RETURN TRUE","RETURN FALSE"]
~~~~

This will create an MMR tree, with 2 leaf nodes. You can check the proofs with the data provided by `mmrcreate`..

~~~~
mmrproof data:"RETURN TRUE" proof:0x00000101000000002068073D52B5CE60A854BA2AA42CFB2E27D9FADFC9C4F7EA52F E48E58F604EBEC7 root:0x0E321692DA8996A833F88EC8A73F3AA8A5E949AD12FF48207130C7AE6F9DC115
~~~~

The root value is the value you give MAST. The above returns true.. but you could also use :

~~~~
mmrproof data:"RETURN FALSE" proof:0x00000101010000002072BE56DFD48B785139A72512FEAAC7E339B8F48132E9B9340A2 48EFC00F4A5DA root:0x0E321692DA8996A833F88EC8A73F3AA8A5E949AD12FF48207130C7AE6F9DC115
~~~~

This will also return true. What is important to note is that BOTH have the same root. It is the merkle proof that is different for both.

So how to check this in a script..

~~~~
runscript script:"MAST 0x0E321692DA8996A833F88EC8A73F3AA8A5E949AD12FF48207130C7AE6F9DC115" extrascripts:{"RETURN TRUE":"0x00000101000000002068073D52B5CE60A854BA2AA42CFB2E27D9FADFC9C4F7EA5 2FE48E58F604EBEC7"}
~~~~

You could create interesting scripts with multiple ways of them being executed.. You can even use these merkelized proofs as state variables and check them yourself in script.
In this case..

~~~~
runscript script:"LET script=[RETURN TRUE] LET proof=0x00000101000000002068073D52B5CE60A854BA2AA42CFB2E27D9FADFC9C4F7EA52F E48E58F604EBEC7 LET root=0x0E321692DA8996A833F88EC8A73F3AA8A5E949AD12FF48207130C7AE6F9DC115 ASSERT PROOF(script proof root) EXEC script"
~~~~

`PROOF` takes the same arguments as `mmrproof`. 

You could put those variables as state variables and have a generic contract that can run ANY of the leaf node scripts you create in your tree.. like so:

~~~~
runscript script:"LET script=STATE(0) LET proof=STATE(1) ASSERT PROOF(script proof 0x0E321692DA8996A833F88EC8A73F3AA8A5E949AD12FF48207130C7AE6F9DC115) EXEC script" state:{"0":"[RETURN TRUE]",  "1":"0x00000101000000002068073D52B5CE60A854BA2AA42CFB2E27D9FADFC9C4F7EA52FE 48E58F604EBEC7"}
~~~~

You would still want a signature - or put that as a requirement in the leaf node script.

When adding extra scripts to a custom txn you can use `txnscript`. Here is an example.

First let's calculate the simplest MAST script

~~~~
scripts action:clean script:"RETURN TRUE"
~~~~

This will return the clean version.. And the address: 

~~~~
0x72BE56DFD48B785139A72512FEAAC7E339B8F48132E9B9340A248EFC00F4A5DA
~~~~

Now send funds to it.

~~~~
send amount:1 address:0x459C3CE5EDDF8E78F901A7289981640A8A3A83E2B95558435BFEBBD674CF8D50
~~~~

Now wait for those to clear. You can use `coins relevant:true` to see your coins AND to get the CoinID.

Now construct a txn..

~~~~
txncreate id:txnmast
~~~~

~~~~
txninput id:txnmast coinid:0xB2F2E123F6A1E00E956390B3BEDAF48CB475279CD73EC7D4BD2E0D56823A09A3
~~~~

Your coinid will be different.. 

~~~~
txnoutput id:txnmast address:0xFF amount:1
~~~~

And now we should have a simple txn.

Try and post it.

~~~~
txnpost id:txnmast auto:true
~~~~

We use `auto:true` which is the same as `txnbasics`.
It FAILS!.. On the console it will print..

~~~~
'Script FAIL 0 MAST 0x72BE56DFD48B785139A72512FEAAC7E339B8F48132E9B9340A248EFC00F4A5DA'
~~~~

This is because it does not know how to handle the MAST script.. You need to add the scripts that MAST uses. You can clear all the witness data with:

~~~~
txnclear id:txnmast
~~~~

Now add the details about that script:

~~~~
txnscript id:txnmast scripts:{"RETURN TRUE":""}
~~~~

The JSON holds the script and the proof. If it is a single script, and not one created with mmrcreate, just leave the proof blank. If it is an mmrcreate script, copy the proof in.

Now the transaction knows what that MAST script is.. So try and post it again..

And this time it WORKS!
