---
sidebar_position: 9
---

# A Cascading Chain

The power of hashing ensures that an unbroken chain of blocks cannot be altered in any way. The power of hashing also ensures that sometimes someone will find a very high difficulty PoW when looking for a much lower one. If you take this into account pre-PoW you can construct block headers that reference multiple block parents at different levels of difficulty. Instead of having 2 difficulty values for a user to mine in the Tx-PoW, the Transaction Difficulty set to 10 seconds of work on average, and the Block Difficulty set to 1 block every 10 seconds, let us add 1 more difficulty, the Super Block Difficulty set to twice the current block difficulty...

Every block references its direct parent and the last Super Block. Now a Tx-PoW has 3 possible levels, Transaction, Block and Super Block. If the Block hash difficulty is high enough it becomes a Super Block (which is also a valid block). Eventually, all blocks and data are discarded and only a chain of Super Block headers is kept as a long term store of the total PoW in the chain. Now instead of only 1 Super Block Level, let us use 256. 1 for each bit in a 32-byte hash. Each level twice the difficulty of the level below. These are the only difficulty values for each block, each linking back to it’s Super Block Level parent.

The proof chain grows logarithmically, so that an almost limitless amount of PoW can be stored in a finite chain of headers, since every level stores blocks that are twice as difficult as the level below. Thus, an exponentially shorter unbroken chain of more PoWerful blocks is kept in place of a longer unbroken chain of less PoWerful ones. Due to the nature of randomised hash mining, the sum of the Tx-PoW difficulty of the higher-level blocks will on average equal the sum of the Tx-PoW difficulty of the lower level blocks.

The cascading chain allows each user to keep the total cumulative PoW without requiring the storage of every block. Only certain lucky blocks are kept, all of which reference each other, to keep a short unbroken chain of ever-increasing total PoW.

Almost all blocks and transactions are pruned. Pruning has no effect on the security of the user doing-the-pruning. Once a transaction has been checked by a user, that transaction need never be checked again, a simple reference will suffice. Blocks are kept for a certain period of time, a week would be fine, before being pruned. This way any user that logs on to the network can always catch up a weeks' worth of blocks. So as long as a user logs on to the network once a week he can validate every transaction on layer 1 and run a Complete node, full validating and full TxPoW mining, without needing increasing amounts of storage.

For a new user, who has no previous history of the chain and no coins, Nakamoto Consensus can objectively and independently tell which chain is the current valid chain - the Cascading Chain with the most PoW.

