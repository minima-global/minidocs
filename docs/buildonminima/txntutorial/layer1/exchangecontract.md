---
sidebar_position: 8
---

  
# Exchange Contract

Lets create a simple Layer 1 exchange contract for Minima and some tokens. Minima allows you to create tokens very easily - and tokens can have their own script. When sending a token the address script AND token script must return TRUE.

For now let’s first create a simple token

~~~~
tokencreate name:mytoken amount:1000
~~~~

This will create a token with a globally unique tokenid.

Use `balance` and you will see it there.

Now create yourself a `newaddress`, we will use the public key and address.

Use your key from before (or create a new one).. what does this script do..

~~~~
IF SIGNEDBY(0xTheOwnerPublicKey) THEN RETURN TRUE ENDIF RETURN VERIFYOUT( @INPUT 0xYouAddress 10 0x00 TRUE )
~~~~

This contract says, the owner can cancel at any time, by signing with their key OR you can spend it if you send 10 Minima `( tokenid 0x00 )` to `0xYourAddress` at the opposite output in the transaction.
`ASSERT` will do nothing if the expression is TRUE but RETURN FALSE if the expression is FALSE.

`VERIFYOUT` checks that an output exists of a certain address , amount and tokenid - at a certain position, and if you are keeping the state. 

By using `@INPUT` you know the opposite output must be the desired one and multiple exchange contracts can take place in a single transaction.

You would need to add this as a script as before. But it’s not so useful as it is specific to you..

A better contract would be..

~~~~
IF SIGNEDBY( PREVSTATE(0) ) THEN RETURN TRUE ENDIF
ASSERT VERIFYOUT( @INPUT PREVSTATE(1) PREVSTATE(2) PREVSTATE(3) TRUE ) RETURN TRUE
~~~~

This contract is generic, the values would be entered as state variables in the initial transaction, you can set state variables in `send`, when you send some tokens/ Minima to the address, and it allows you to specify how much of what token you want sent to a specific address.

You can find it's address with:

~~~~
scripts action:clean script:"IF SIGNEDBY( PREVSTATE(0) THEN RETURN TRUE ENDIF ASSERT VERIFYOUT( @INPUT PREVSTATE(1) PREVSTATE(2) PREVSTATE(3) TRUE ) RETURN TRUE"
~~~~

In this case this is:

~~~~
0xBB696A834B6FD91F62A28C9BDCF3754C77F03AFFFEE4EBA3A7485FDC8FD2F3C9
~~~~

You can easily send funds with the state variables using the send function.

~~~~
send amount:1 address:0x39AC9C96DBC9E4A108E6EBB795003A53F11258BC47EECF0C03275C500CB8DDA1 state:{"0":"0xOwnerKey","1":"0xOwnerAddress","2":"0xDesiredAmount","3":"0xDesiredToken"}
~~~~

`clean` takes your script and formats it correctly for use on Minima. You can use lowercase and spaces and these will all be removed / fixed.
