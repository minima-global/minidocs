---
sidebar_position: 4
---

# MMR Database

As the blockchain is heavily pruned, users must store proof that their coins (UTxOs) are unspent. This is the role of the MMR database. The MMR (Merkle Mountain Range) proof db is a hash sum tree containing the proofs for all coins, spent (STxOs) or unspent (UTxOs) in the system.

Users do not store the whole MMR for all the coins in the system, as this would be too burdensome, rather they only store the paths to their own coins which must be provided when a user wishes to spend their coins.

The tree is **append-only** and is updated with each new block as coins are spent and created. When a coin is **spent**, the Spent state of the coin changes from false to true and the MMR Proof for the coin is **updated**.

When a new coin is **created** (as an output to a transaction), a new leaf node is added to the tree for the new, unspent coin, creating new peaks and a new root hash.

Therefore, for a user to prove the validity of their coins (i.e. that they are unspent), a user must remain up to date with the chain to ensure they hold the most up to date coin proofs.

When a user wishes to spend their coins, they must prove their coins are unspent by providing:

1. The MMR Root hash from the most recent block
2. The proof path to the entry of the coin 

A node receiving the proofs will check the coins are valid by summing the hashes provided and ensuring it matches the Merkle root they possess themselves.
*Diagram: A complete Merkle Mountain Range (MMR) with three peaks and root*

![Minima](/img/learn/mMRDatabaseLm.svg#gh-light-mode-only)![Minima](/img/learn/mMRDatabaseDm.svg#gh-dark-mode-only)

- A brief overview: https://github.com/opentimestamps/opentimestamps-server/blob/master/doc/merkle-mountain-range.md
- Detailed overview: https://petertodd.org/2016/delayed-txo-commitments
