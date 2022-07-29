---
sidebar_position: 3
---

# MultiSig Contract

You have funds, and you want them to be spent ONLY if Multiple parties agree.

Let's go through the full steps required to run a simple 2 of 2 multisig on chain via the Minima commands.

You would run 2 versions of Minima, to simulate both users, still on a private network.

As before - Start node 1 ( if not already started )
```
java -jar minima.jar -data minidata1 -test -nop2p -genesis
```
Now - Start node 2
~~~~
java -jar minima.jar -data minidata2 -test -nop2p -clean -port 10001 -connect 127.0.0.1:9001
~~~~

*-clean* wipes previous data so you don't have to use it if you want to keep your old files<br/>
The second node needs a separate data folder, a different port, and is told to connect to version 1 on the default port 9001.<br/>
Now you have 2 versions of Minima running on a private test network. You can send minima back and forth to each other.<br/>
Next both users will need a public key.. Run this on both. The output will show you a public key

Node 1:
~~~~
getaddress
~~~~
On my setup the Public key (use your output here): 
~~~~
0x1539C2B974C1589C6AB3C734AA41D8E7D999759EFE057B047B200E836BA5268A
~~~~
Node 2:
~~~~
getaddress
~~~~
On my setup the Public key : 
~~~~
0xAD25E1E40605A68AFE357ECF83E51FE27EC10013851AE95889A00C695D5B9402
~~~~
Let's talk about `getaddress` vs `newaddress`. <br/>

Minima creates 64 default keys for you to use as change addresses or to accept money or create tokens etc etc.. to keep the number of proof checks to a minimum (these are checked in every block to see if any coins are relevant to you).

This also means that backup and restore operations know which addresses to look out for easily - so even if you do a new transaction your previous restore file will know the keys of the change address you use. 

Unless you really need a SINGLE address that is not used for anything else - use `getaddress`. <br/>
To create a brand new address, that will not be used for anything else - then use `newaddress`.

Now that you have both the public keys.. You can create the multisig contract. You must add the script to BOTH nodes, so they know how to spend the coin.
~~~~
RETURN SIGNEDBY(0x1539C2B974C1589C6AB3C734AA41D8E7D999759EFE057B047B200E836BA526 8A) AND SIGNEDBY(0xAD25E1E40605A68AFE357ECF83E51FE27EC10013851AE95889A00C695D5B94 02)
~~~~
In Minima when you send funds to an address the script is not revealed. It is only added to the transaction when you wish to spend the coin, as an input.<br/>

So on both you need to run
~~~~
newscript track:true script:"RETURN SIGNEDBY(0x1539C2B974C1589C6AB3C734AA41D8E7D999759EFE057B047B200E836BA526 8A) AND SIGNEDBY(0xAD25E1E40605A68AFE357ECF83E51FE27EC10013851AE95889A00C695D5B94 02)"
~~~~
This will tell you the address.. In this case: 
~~~~
0x7C6EB00C850E4E95743C6D6A181489D1215F53D39AE9702C42069C9F09DF378C
~~~~
You will note `track`. This tells your node to track all instances of this address. The default is true. <br/>
Sometimes you will add scripts you need to spend but you do not wish to track all occurrences (an exchange contract for instance)<br/>
Minima will automatically track any coin that has an address you track, or an address you track or public key you own in the state variables.<br/>
We now have both nodes able to understand the script. Let's send some funds to it.<br/>

On Node 1 - the genesis node..
~~~~
send amount:10 address:0x7C6EB00C850E4E95743C6D6A181489D1215F53D39AE9702C42069C9F09DF378C
~~~~
Now both nodes should show a new coin!
When you try `balance` you will see the confirmed coins and sendable coins. Confirmed are the coins you are tracking.. Sendable are the coins with simple addresses you can use with the send function. It takes 3 blocks for a coin to go from unconfirmed to confirmed.

Now lets construct a transaction that uses this input.

~~~~
txncreate id:multisig
~~~~

This creates a custom transaction.
Now we need to find the coin to add as input

~~~~
coins relevant:true
~~~~

You could just use `coins` here on its own and it defaults to 'coins **relevant:true**.<br/>
This will display all the coins you are tracking. You can search for any coin using this function but we are only interested in our coins for now.<br/>
Copy the coinid.. For the coin with the address and amount 10. Then add it to your transaction. This will be the same on both nodes.

~~~~
txninput id:multisig coinid:0x9EAD12B53C8B595BFAFA636BC844AB51E3BF3B4B463DFF6D983FA236B3AEB49F
~~~~

Your coinid will be different. You should now see a transaction with 1 input. You can check the txn with :

~~~~
txncheck id:multisig
~~~~

And list them with

~~~~
txnlist
~~~~

Now - let’s add an output
1 to be sent to 0xFF (or whatever - you could create a newaddress on one of your nodes) and 9 to be sent back to the multisig as change. Remember that all transactions spend all the inputs so change outputs are required.

~~~~
txnoutput id:multisig address:0xFF amount:1
~~~~

~~~~
txnoutput id:multisig address:0x7C6EB00C850E4E95743C6D6A181489D1215F53D39AE9702C42069C9F09DF378C
amount:9
~~~~

Now - we have an almost complete transaction.. BUT it needs both nodes to sign it.
So - on this node.. Where you are constructing the transaction..

~~~~
keys
~~~~

This will show all your public keys. Pick the Public Key you used to make the multisig and run:

~~~~
txnsign id:multisig publickey:0x1539C2B974C1589C6AB3C734AA41D8E7D999759EFE057B047B200E836BA5268A
~~~~

You now have a partially signed transaction. You need to export it, to a file, and send the data to the other node to sign..

~~~~
txnexport id:multisig file:mymultisig.txn
~~~~

Now on the *other* node.. You can change the id if you wish..

~~~~
txnimport file:mymultisig.txn
~~~~

Now you should have the transaction on the other node.. Sign it with the other key..

~~~~
txnsign id:multisig publickey:0xAD25E1E40605A68AFE357ECF83E51FE27EC10013851AE95889A00C695D5B9402
~~~~

And NOW - you should have a correctly signed transaction.. by both parties.. Just needs the correct MMR proofs and scripts.. Which is done with..

~~~~
txnbasics id:multisig
~~~~

The reason this is not done immediately when you add an input.. Is that you may be posting this transaction weeks or months after it is created and will need up to date proofs
And now - we can attempt to publish the transaction

~~~~
txnpost id:multisig
~~~~

IF everything has gone to plan - you will post that transaction and you will see the coins appear on both sides!
