---
sidebar_position: 5
---


# The Blockchain
## Overview
The Minima blockchain is structured to be compact and ‘lightweight’, it is therefore heavily pruned to meet this requirement. The chain itself is a tree of TxPoW blocks which hold transactions. 

As the **TxPow tree** is pruned periodically, the headers from the ‘heaviest’ blocks (blocks with the highest difficulty by chance) are added into a ‘Cascading’ chain. The root of the TxPow tree always remains connected to the tip of the Cascading chain.

The TxPoW tree is the main blockchain, a chain of the most recent TxPoW units that met the difficulty required to become a block. 
The **Cascading chain** is an unbroken chain of the headers of so called ‘super blocks’, designed to record and prove, in an immutable way, the total cumulative Proof-of-Work input into the network without having to keep a record of all individual blocks. Blocks are added to the Cascading chain on a periodic basis.

## TxPoW Tree
The **TxPoW tree** is the main blockchain and has a **root** - the start of the chain, **tip** - end of the chain, **blocks** (nodes) and **length** (number of blocks).
The root of the chain meets the tip of the Cascade.

If a TxPoW unit becomes a block, it will have a static **base weight** equal to its difficulty and a **total weight** equal to its base weight plus the sum of the weights of its children. 

- **Base weight** = Difficulty (i.e. number of hashes it took to mine the block)
- **Total weight** = Base weight + Sum(Base weight of all children) 

By default, all blocks in the chain are Level 0 blocks.

Branching in the tree can occur if multiple blocks with the same height (block number) are found simultaneously. Branching is a natural occurrence and will resolve over time as a heavier branch continues to be built on.

<!-- ## The Cascading Chain
[The Cascading Chain](https://docs.google.com/document/d/1Or8-8Zq2AO6qaRqMq0dUb-5LaGF5SNf3tZyiSNfF-x4/edit) -->

## Ghost algorithm 
The GHOST (Greedy Heaviest Observed SubTree) protocol is used by Minima nodes to come to consensus on which chain is the valid one when multiple branches are established. Branching occurs naturally when two blocks with the same number (block height) are found simultaneously. 

Rather than using the simple ‘Longest chain’ rule, where the valid chain is considered to be the one with the most number of blocks in it, GHOST considers the ‘heaviest’ chain to be the valid one. The ‘heaviest’ chain is the branch which has had the most Proof-of-Work put into it.

The faster the block time, the more likely it is that two blocks of the same number (height) will be found. If a simple ‘Longest chain’ rule applies, fast block times can reduce the security of the network if an attacker is able to secretly build a longer chain.

GHOST was originally proposed as an alternative to Longest Chain by Sompolinsky and Zohar in the paper [Secure High-Rate Transaction Processing in Bitcoin](http://www.avivz.net/pubs/15/btc_ghost.pdf). 

Diagram illustrating the the main chain according to GHOST:

![Minima](/img/learn/theBlockchainLm.svg#gh-light-mode-only)![Minima](/img/learn/theBlockchainDm.svg#gh-dark-mode-only)

*A block tree in which the longest chain and the chain selected by GHOST differ. An attacker's chain is able to switch the longest chain, but not the one selected by GHOST.*
