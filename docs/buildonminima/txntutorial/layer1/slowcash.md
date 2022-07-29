---
sidebar_position: 6
---

# SlowCash
This simple contract allows you to send funds to a contract that only allows a certain amount to be withdrawn over a period of time. There are more complex variants.

~~~~
IF SIGNEDBY ( 0xColdKey) THEN RETURN TRUE
ELSEIF SIGNEDBY( 0xHotKey ) AND SIGNEDBY( 0x2ndKey) THEN RETURN TRUE
ENDIF
IF @COINAGE LT 10000 THEN RETURN FALSE ENDIF
ASSERT SIGNEDBY ( 0xOwnerPublicKey ) AND VERIFYOUT(@INPUT @ADDRESS @AMOUNT*0.9 @TOKENID TRUE)
~~~~

This allows the owner to withdraw 10% every 10000 blocks, forever. It never stops.
