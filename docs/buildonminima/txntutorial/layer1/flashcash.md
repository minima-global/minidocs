---
sidebar_position: 9
---
 

# Flash Cash
Flash loans - where you borrow a coin for a single transaction - allow for many arbitrage possibilities.. 

If you want to allow people to use your coins as a flash loan.. 

How about sending your funds to this address:

~~~~
IF SIGNEDBY( PREVSTATE(1) ) THEN RETURN TRUE ENDIF
ASSERT SAMESTATE ( 1 1 )
RETURN VERIFYOUT( @INPUT @ADDRESS @AMOUNT*1.01 @TOKENID TRUE )
~~~~

Again this is a generic contract, so users can spot them on chain - it doesn’t have to be of course you could specify your public key - and have a unique address - but defeats the point as you want users to know this address.

When sending funds to this contract, place your public key as state variable 1..

**This says:**<br/>
The owner - `PREVSTATE(1)` - can cancel at any time..<br/>
Or you can spend this coin if you send the same Tokens / Minima to the same address with 1% more.. ( AND make sure state 1 == prevstate 1 )

Simple.

You could even specify the 1% increase as a state variable ( `@AMOUNT*PREVSTATE(2)` ), to make it 0.1% or whatever you would like. Coupled with the exchange contracts, users can borrow coins when they see an opportunity and use them to construct a transaction, as long as they give you back all your coins + 1%, in the same transaction.
