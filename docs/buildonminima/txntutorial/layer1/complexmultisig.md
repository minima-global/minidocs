---
sidebar_position: 4
---


# More Complex MultiSig


The previous example has 2 signatures and 2 parties. But you can use a more complex script to give more power to the users.

You could use 2 keys for one party, and 1 key for the second. 1 of the keys is cold and buried in the ground. 1 of the keys is hot - on your computer. And the second party is a co-signer. 

Something like:

~~~~
IF SIGNEDBY ( 0xColdKey) THEN RETURN TRUE
ELSEIF SIGNEDBY( 0xHotKey ) AND SIGNEDBY( 0x2ndKey) THEN RETURN TRUE
ENDIF
~~~~

Why? This contract says: If you sign with the cold key ( the ROOT key ) you can spend me. Otherwise both you and the co-signer must sign. 

You could make a bank or trusted person a cosigner, and so to access the funds a hacker would need to hack BOTH of you. Just one of you is not enough. 

Much more secure. The cold key is NEVER on a connected computer unless one of you is hacked, and then you use that to move the funds - in an emergency.
