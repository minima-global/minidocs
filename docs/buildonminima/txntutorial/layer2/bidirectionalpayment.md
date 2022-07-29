---
sidebar_position: 3
---

  
# Bi-Directional Channel

We want to start up a two way payment channel with someone. So I can send them Minima and they can send coins back to me.

If we use the technique we have just demonstrated then what would happen?

Two (or more) people set up a MultiSig where they send 10 Minima each to the contract. They create a new transaction every time there is an update.

1. User1 sends User2 - 3 Minima. They create a new fully signed transaction that pays User1 - 7 Minima and User2 - 13 Minima.
2. User2 sends User1 - 1 Minima. They create a new fully signed transaction that pays User1 - 8 Minima and User2 - 12 Minima.
3. And so on..
4. When they are finished they post the latest transaction and both collect their funds.

Again - although this seems like it is working.. It is not.

1. The timelock part of the contract is more complicated. If one side does nothing for 30 days, how do both parties recover their initial 10 Minima funds? It is not as simple as one person spending the funds, trusting that person, what forces them to send back the correct amount to both parties?
2. As before what stops someone posting an earlier transaction - one where they were receiving more funds than they are by the end ? Both parties now have a valid signed transaction whereas before only one party had the complete transaction.

1 - Can be fixed by creating a valid fully signed transaction spending the MultiSig coin BEFORE it is even posted on chain.

So as before the 2 players create the MultiSig contract. Then they use a 10 Minima coin each and send 20 Minma to this script in a single transaction. But they do not sign it and they do not post it.

~~~~
RETURN MULTISIG(2 0xMyKey 0xTheirKey)
~~~~

There is no timelock on this contract. Both parties must sign for the coin to be spent.
:::info
Now - some Minima low level info. All transactions reference the coins they use as inputs by their CoinID. This is a globally unique 32 byte value that each coin has. You can construct the coinid for an output coin by hashing the Transaction Hash + The Output number of the coin in the transaction. This means you can know the coinid of a coin before it is posted on chain. This means you can construct a transaction that spends a coin that does not exist yet!
:::
And this is exactly what we do here.. The 2 parties create a transaction that spends the as-yet-unposted coin, and pays 10 Minima back to both, and they both sign that. Now both parties have a valid fully signed transaction that could be used to spend the MultiSig coin, once it is on chain. Then they both sign the initial transaction and post the full 20 Minima on chain to the MultiSig contract. If one of them should disappear and become unresponsive the other has a transaction that sends all the funds back to them. (This trick will be used more later on.. )

2 - Unfortunately the previous pre-made spend transaction still does nothing to prevent either user sending the transaction in the sequence where they have the most. In fact.. It makes matters worse, since if by the end one of the Users has less than 10 Minima he can use the initial transaction to send the original funds back to everyone, and collect their initial 10 Minima.

What we need is some way of ordering the transactions so that only the latest transaction is recognised as the valid one. Some way of ensuring that the latest transaction in the sequence will always be the final outcome of the financial relationship..

Enter ELTOO.
