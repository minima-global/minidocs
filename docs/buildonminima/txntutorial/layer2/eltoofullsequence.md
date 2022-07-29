---
sidebar_position: 7
---
# Full ELTOO Sequence

We now have all the pieces required to attempt a complete ELTOO transaction sequence. What we can do is create a payment channel between 2 users and update that with bi-directional payments, in a way that does not allow either User to change the expected outcome.

This is the ELTOO contract required by Minima

~~~~
LET st=STATE(99)
LET ps=PREVSTATE(99)

IF st EQ ps AND @COINAGE GT 256 AND MULTISIG(2 0xUser1Settle 0xUser2Settle) THEN
    RETURN TRUE
ELSEIF st GT ps AND MULTISIG(2 0xUser1Update 0xUser2Update) THEN
    RETURN TRUE 
ENDIF
~~~~

The Public keys used by the users are `0xUser1Settle` and `0xUser2Settle`, and `0xUser1Update` and `0xUser2Update`.

The sequence number is stored in state variable 99.

You will note the settlement clause can only be attached to a single output with the exact state sequence number. The update clause can be used as long as it has a higher sequence number - and both use floating coins.

How this works (pls read the ELTOO whitepaper to follow more closely):

1. User1 and User2 wish to open a payment channel with 10 Minima each.
2. They start by creating a setup transaction that sends funds to a simple 2of2 multisig worth 20 Minima - the Funding transaction - but do not sign and publish it.
3. They create a **trigger** transaction that spends the Funding transaction and sends the funds to the ELTOO contract,, with state variable 99 equal to 0. This will effectively start the final settlement sequence - since the @COINAGE timeout is now on chain
4. They create the first **settlement** transaction that spends the trigger transaction, with state variable 99 set to 0, and sends 10 Minima back to each user.
5. They sign and share the trigger and initial settlement transaction, and do the same with the funding transaction, and finally publish the Funding transaction.
6. Now - they both have a valid transaction spending the Funding transaction to create the trigger transaction, and both have an initial settlement transaction spending THAT to give them the money back. Phew.. stay with me.
7. Currently ONLY the Funding transaction has been published.
8. Both users can create new update transactions, and their corresponding settlement transactions, that allocate different amounts of the 20 Minima to each user.
9. An Update transaction simply spends their ELTOO coin, and sends the funds back to the same ELTOO coin but with a higher sequence number - in this case state 99.
10. Every Update transaction has a settlement transaction that spends it. And can append ONLY it.
11. So if User1 wants to pay User2 1 Minima - they create a new update transaction with an incremental sequence number, that spends the current ELTOO output and pays to the same ELTOO output, and a new settlement transaction paying 9 Minima to User1 and 11 Minima to User2, with the exact current sequence number as a state variable. They create the settlement FIRST - then the update (so the update can't be posted without a valid settlement).
12. This continues indefinitely for as long and as fast as the Users want ( there could be more than 2 users of course )
13. When they want to close the channel - they publish the trigger transaction, then the latest update transaction, and then the latest settlement transaction.
14. IF one of the users publishes an earlier Update transaction, by mistake or maliciously, no problem.. the other user can publish their latest Update transaction on top of that one, because of the @COINAGE timeout - and because they all use floating coins!
15. And finally - as a nice optimisation - since all parties have a valid trigger, update and settlement transaction, there is no need to actually publish them all on chain - is there ? The final outcome is the outputs of the final settlement transactions, so the parties can negotiate a new transaction, that spends the original funding transaction, instead of the trigger transaction, and pays everyone what they are owed..

So in conclusion - the whole process only requires 1 transaction to start the channel, and 1 to close it. But - and this is important - you can run a sequence.. and NOT close at the end. Just use it again when you need to.

'Re-balancing' channels allows for the amounts currently owed to each user to be changed so that the channel need not be closed.

So if Alice and Bob have a channel, but currently ALL the funds are being sent to Bob, how can Alice continue to use it, and continue to send Bob funds?

Alice and Bob both have channels with Claire.. Alice pays Claire, Claire pays Bob, and Bob pays ( rebalances ) Alice. At the end of this trick everyone still has the same total amount of funds, but the channels have been re-balanced. You would use HTLC contracts to perform this.. Which work just as well off chain as on.

Running this from the command line can be quite.. extensive.. But if we simplify this a bit.. and change it to a single signature.. We can play with the transaction script in different scenarios..

So in this simplified - just to play - version..

`0xFF` is the settlement key <br/>
`0xEE` is the update key

The script we use is:

~~~~
LET st=STATE(99)
LET ps=PREVSTATE(99)

IF st EQ ps AND @COINAGE GT 20 AND SIGNEDBY(0xFF) THEN
    RETURN TRUE
ELSEIF st GT ps AND SIGNEDBY(0xEE) THEN
    RETURN TRUE 
ENDIF
~~~~

So - we are assuming the users sign correctly..

We can now run..

~~~~
runscript script:"LET st=STATE(99) LET ps=PREVSTATE(99) IF st EQ ps AND @COINAGE GT 20 AND SIGNEDBY(0xFF) THEN RETURN TRUE ELSEIF st GT ps AND SIGNEDBY(0xEE) THEN RETURN TRUE ENDIF" globals:{"@COINAGE":"23"} state:{"99":"0"} prevstate:{"99":"0"} signatures:["0xFF"]
~~~~

..and at least play with various scenarios. This variant returns TRUE.