---
sidebar_position: 13
---

# Coin Flip

And finally, here is a full example of a 'game' that can be played via smart contracts. It is a coin toss. 

2 users flip a coin and heads one wins tails the other wins. The randomness is added to the system by both players picking a random number and committing to it via the hash. Thereby forcing them not to change it when either shows the preimage of that hash. So both players pick a random number, those numbers are hashed, and if the first byte of the final hash is less than 128 Player 1 wins else Player 2 wins. 

This game is very very simple but more complex games with more participants can be written in a similar fashion.

:::note
Importantly - this is running on Layer 1. This is running on chain. So it is slow and expensive. <br/>
This is not where you would play this game. You want to be running it on Layer 2 - which is instant and free. You want to be off chain. You don't want to be on Layer 1 - you want to be on Layer 2, and this is where the true power of the UTXO model (Unspent Transaction Outputs) coupled with the ELTOO framework really shines. <br/>
Because this simple game can be 'lifted' off layer 1 and played out on layer 2. In fact any sequence of transactions between a group of users can be lifted off layer 1 and onto layer 2.
:::

More on that later. For now - let's see the script:

You would need an application to manage this sequence, and keep track of where you were, checking the chain for responses and firing off the next required transaction in the sequence. Originally, way back when, I had a web app that did just that over RPC with the Minima node.

A MiniDAPP called CoinFlip - for those that remember.

~~~~
/*
COIN FLIP SCRIPT
Funky little script.. with comments. 

Each 'Round' is another transaction. 

The State Variables are:
0 - Round Number

PLAYER 1 puts his details in state 1-3:
1 - Payout address
2 - Cancel / Last Resort key
3 - Hash of random number

PLAYER 2 adds his details:
4 - Last Resort key
5 - Hash of random number

Then player 1 reveals:
6 - Preimage of 3

Then player 2 reveals and pays out (wins 95% or takes back 5% - incentive to finish game):
7 - Preimage of 5

If Player 1 or 2 do not reveal or pay out in a time limit
the other player gets everything as a last resort.. 
*/

/*-----------SCRIPT------------*/

/* What state are we at */
LET round = STATE ( 0 )
LET prevround = PREVSTATE ( 0 )

/* Make sure we are 1 round ahead of before */ 
ASSERT round EQ INC ( prevround )

/* PLAYER 2 Joins OR Player 1 Cancels */ 
IF round EQ 1 THEN

    /* Player 1 can still cancel at this stage */
    IF SIGNEDBY ( PREVSTATE ( 2 ) ) THEN RETURN TRUE ENDIF

    /* Make sure all the details are kept */ 
    ASSERT SAMESTATE ( 1 3 )

    /* This round someone accepts.. check double the money*/
    RETURN VERIFYOUT ( @INPUT @ADDRESS ( @AMOUNT * 2 ) @TOKENID TRUE )

/* PLAYER 1 REVEALS HIS HAND */ 
ELSEIF round EQ 2 THEN

    /* If player 1 does NOT reveal.. in time limit (here 20 mins).. player 2 gets everything */
    IF @COINAGE GT 64 AND SIGNEDBY ( PREVSTATE ( 4 ) ) THEN RETURN TRUE ENDIF

    /* make sure all the details of both players are kept.. */ 
    ASSERT SAMESTATE ( 1 5 )

    /* Now check that the preimage of player 1 is correct */ 
    LET ponehash = STATE ( 3 )
    LET preimage = STATE ( 6 )
    ASSERT KECCAK ( preimage ) EQ ponehash

    /* OK - He has shown his random number.. continue */
    RETURN VERIFYOUT ( @INPUT @ADDRESS @AMOUNT @TOKENID TRUE )

/* PLAYER 2 REVEALS AND PAYS OUT */ 
ELSEIF round EQ 3 THEN

    /* If player 2 does NOT reveal.. in time limit (here 20 mins).. player 1 gets everything */
    IF @COINAGE GT 64 AND SIGNEDBY ( PREVSTATE ( 2 ) ) THEN RETURN TRUE ENDIF

    /* make sure all the details of both players are kept.. */ 
    ASSERT SAMESTATE ( 1 6 )

    /* Now check that the preimage of player 2 is correct */ 
    LET ptwohash = STATE ( 5 )
    LET ptwopreimage = STATE ( 7 )
    ASSERT KECCAK ( ptwopreimage ) EQ ptwohash

    /* OK - lets see who wins..! */
    LET ponepreimage = STATE ( 6 )
    LET rand = KECCAK ( CONCAT( ponepreimage ptwopreimage ) )

    /* GET THE FIRST BYTE*/
    LET val = NUMBER ( SUBSET ( 0 1 rand ) )
    IF ( val LT 128 ) THEN LET winner = 1 ELSE LET winner = 2 ENDIF

    /* Calculate the Payout for each */
    LET paywinner = @AMOUNT * 0.95 LET payloser = @AMOUNT - paywinner

    /* Check that State 8 states the correct winner.. for future easy lookup */ 
    ASSERT STATE ( 8 ) EQ winner
    ASSERT STATE ( 9 ) EQ paywinner

    /* Now check the payout! */
    LET poneaddress = STATE ( 1 ) 
    IF winner EQ 1 THEN
        ASSERT VERIFYOUT ( @INPUT poneaddress paywinner @TOKENID TRUE ) 
    ELSE
        ASSERT VERIFYOUT ( @INPUT poneaddress payloser @TOKENID TRUE ) 
    ENDIF

    /* And finally check the signature - MUST sign as otherwise someone else could claim */ 
    RETURN SIGNEDBY ( PREVSTATE ( 4 ) )

ENDIF
~~~~

That's quite a long script.. You could MAST the sections in each round to reduce the size you needed to post on chain.

Essentially the game starts when Player 1 sends some coins to this Contract with the initial 4 state variables defined, 0-3. Then player 2 responds, by spending the coin, adding more state variables, and copying the previous ones so that the memory is intact. And so on..

You can follow the logic through, with each round incrementing the state(0) value, so the script knows which section to run. The state is verified in the `ASSERT round EQ INC ( prevround )` ensuring that every transaction in the sequence MUST increase the state(0) / round number by one.

Next - we get exciting.. we go Layer 2.. we go ELTOO.
