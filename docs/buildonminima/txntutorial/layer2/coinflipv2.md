---
sidebar_position: 9
---

# Coin Flip v2

And now - how does this relate to our original slow clunky expensive coin flip game?

Well - the CoinFlip game is just a sequence of rounds. Just like an ELTOO sequence. So we start an ELTOO channel with 1 Minima from each player - as normal. 

Then the settlement transaction of each update, pays out to the CoinFlip script, with the latest updated state variables.. It's really that simple. 

If at any stage either User stops cooperating or becomes unresponsive, no problem, the latest transactions are posted and the game continues on chain. With both parties knowing that this is the case, there is no reason not to finish the game off chain.

And so the Players can play Coin Flip instantly and for free, as many times as their channel will allow before either closing the game or rebalancing, to fight another day.

Coin Flip itself is not a very complicated nor a very interesting game.. but it shows the basics of a possible structure required for any round based game. 

This is also not limited to 2 individuals either - there is nothing to stop more participants entering the ELTOO contract. The maximum size of the transaction coupled with the signatures is the limiting factor here.

On one side you could be writing far more complex scripts that checked chess or poker dice, and on the other you could be writing House buying contract sequences that require different parties to sign at different times, with non-refundable deposits after a certain point etc etc..

Most importantly is that you can play out different ELTOO 'scenarios' without always having to do an on-chain transaction to start or finish. 

Once you have an open channel you can run through any sequence as often as your channel amounts will allow - by always agreeing on the final state at the end, without the need for arbitration on Layer 1. 

Layer 1 arbitration should only happen when one party is forced due to technical issues to become unresponsive - otherwise there seems little point to not cooperating since the final outcome is the same.
