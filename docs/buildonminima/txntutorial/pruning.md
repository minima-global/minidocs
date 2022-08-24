---
sidebar_position: 3
---

# Pruning

To ensure all users on the Minima network can run a Complete node, both validating all transactions and helping in the construction of the chain, all users only keep track of coins and tokens that are relevant to them. 

All the coin data is stored in an MMR database, a type of hash tree, and when a User wishes to spend a coin they add a proof of its existence to the transaction. This means when using multiple User coins in a single transaction each user may not have all the coin data required.

To assist in this Minima provides useful functions. `coinimport` and `coinexport` allow a User to share coin proofs with other users ( this does not allow the spending of a coin - just the knowledge of its existence ), and `tokens tokenid: action:export` and `tokens tokenid: action:import data:` allows the sharing of token data.

If the coin / token data is recent, in the last 24 hours, then each User will already have all the required data, so this will only apply for older coins.

Let's say you have a coin with coinid : `0x99ADECBF2579801921017F81F523D396AA2ED125BF8DE7244045F86C7F7B56E0`
(Coin IDs can be found by running `coins relevant:true`)

To export this coin, so another node can import and now know about this coin:

```
coinexport coinid:0x99ADECBF2579801921017F81F523D396AA2ED125BF8DE7244045F86C7F7B56E0
```
The command `response` is the coin `data` required to be imported by another user.

Then the other node can import this proof by using:
```
coinimport data:0x0000002099ADECBF2579801921017F81F523D396AA2ED125BF8DE7244045F86C7F7B56E000000020E5A95D8CDDA0A66A9EB5180479254B23FFBA427EF20603A83F66F95179D8257D00010A000000010001000100000000010A00000200D30001000000020130000100
```

A similar set of functions can be run to export and then import token details:

To export a token: `tokens tokenid: action:export`

To import a token: `tokens tokenid: action:import data:`
