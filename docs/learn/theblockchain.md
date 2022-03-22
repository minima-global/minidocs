---
sidebar_position: 5
---


# The Blockchain
## Overview
The Minima blockchain is structured to be compact and ‘lightweight’, it is therefore heavily pruned to meet this requirement. The chain itself is a TxPoW Tree containing TxBlocks.

**The TxPoW** Tree is the main blockchain consisting of the most recent TxBlocks.

The **TxPoW Tree** is the main blockchain consisting of the most recent TxBlocks.
The **Cascading chain** is an unbroken chain of the headers of so called ‘super blocks’, designed to record and prove, in an immutable way, the total cumulative Proof-of-Work input into the network without having to keep a record of all individual blocks. Blocks are added to the Cascading chain on a periodic basis and the root of the TxPoW Tree always remains connected to the tip of the Cascading chain.

Cascading Chain + TxPoW tree (Blockchain)
![The Blockchain](/img/blockchain/cascadingChain1Lm.svg#gh-light-mode-only)![The Blockchain](/img/blockchain/cascadingChain1Dm.svg#gh-dark-mode-only)

## TxPoW Tree Node

If a TxPoW unit becomes a block (TxBlock), it will be added to the blockchain and become a node in the TxPoW tree. The TxPoW Tree Node provides the structure required to hold the TxBlock in the tree. 

Every TxPoW Tree Node has the following attributes:

| TxPoW Tree Node Attribute | Description | Type/Size |
| :------------------------ | :---------- | :-------- |
| TxBlock | A syncblock representing this node | TxBlock |
| MMR Set | The MMR (with blocktime, entry number, and entries) can be constructed from the TxBlock | MMR | 
| Coins | ALL The Coins - both spent and unspent | ArrayList&#60;Coins&#62; |
| RelevantMMRCoins | The Coins that are relevant to THIS USER | ArrayList&#60;MMREntryNumber&#62; |

## TxPoW Tree

The TxPoW tree is the main blockchain and has a **root** - the start of the chain, **tip** - end of the chain, **blocks** (nodes) and **length** (number of blocks).
The root of the TxPoW tree meets the tip of the Cascade.

Branching in the tree can occur if multiple blocks with the same height (block number) are found simultaneously. Branching is a natural occurrence and will resolve over time as a heavier branch continues to be built on.

## The Cascading Chain

The Cascading Chain is a component of the Minima Protocol designed to record and prove, in an immutable way, the total cumulative Proof-of-Work input into the network without having to keep a record of all individual blocks. 

By identifying multiple levels of difficulty over and above the required block difficulty, so-called ‘Super Blocks’ emerge which, by chance, provide orders of magnitude more PoW to the network than the typical (Level 0) block. The Cascading Chain uses ‘Levels’ to store these Super Blocks as a representation of the Proof-of-Work input into the network, allowing for heavy pruning of Level 0 blocks, without losing any PoW.

The Cascading Chain provides an objective proof of the current ‘heaviest’, and hence valid, chain.

Proof-of-Work is provided, in the form of electric energy, by all users running the Minima Protocol through the process of hashing. A users device must perform a, pre-determined, minimum amount of hashing each time a user:

1. Mines their transactions (Tx-PoW) before propagating across the network
2. Mines a  ‘Pulse’ TxPoW before across the network

### Attributes of the Cascading Chain: 

1. The Cascading Chain consists of 32 levels (0-31), with a maximum of 128 blocks at each level.
2. The Cascading Chain grows logarithmically, as each level is twice as difficult to achieve as the previous level.
3. Over time, the cumulative sum of the PoW (the ‘weight’) recorded in the Cascading Chain will tend towards the weight of the chain that would have existed had no blocks been pruned.
4. The Cascading Chain is unbroken. Each block in the Cascade references its previous (parent) block in the Cascade.
5. At 100 block intervals, the heaviest chain (consisting of all levels in the Cascade and the heaviest branch) is processed and the Cascading Chain is updated. 

### Definitions:

**Target Difficulty:** A system set parameter influencing the number of hashes required for the network to mine a block every 50 seconds (or as close to). The higher the difficulty, the more PoW (energy) required to mine a block.

**Levels:** The Cascading Chain consists of 32 levels, where each level consists of blocks which, by chance, exceeded the difficulty target met by the blocks in the previous level by a factor of 2.
e.g. A block in level 3 of the Cascading Chain achieved twice the difficulty of a block in level 2.

**The Cascade:** The chronological, unbroken chain of blocks consisting of a maximum of 128 blocks at each level. The block at the root of the Cascade (after Genesis) will be the block which satisfies both 1) the earliest timestamp and 2) the highest (most difficult) level.
The Cascade does not include the TxPoW tree and has no branches.

**Super Block:** Any block which achieves the difficulty required to take a position on the Cascade.

**Current level:** The level representing how deep in the Cascading Chain a particular Super Block is currently positioned.

**Super Level:** Also the Maximum Level. The level representing the furthest depth a Super Block could reach on the Cascade. (Determined at random by the amount of PoW used to mine the block.)

**Base Weight:** A block’s base weight is equal to the difficulty value. This also represents the average number of hashes that would be required to meet this Block target value. 

**Current Weight:** The base weight multiplied by a factor dependant on the current level the block is positioned in, such that Current Weight = Base weight * 2 <sup>Current level no.</sup>.

**Branch:** The main chain (TxPoW Tree) starts at the tip of the Cascade and consists of the most recent 1024 blocks which have not yet been committed to the cascade. If, by chance, two blocks with the same block number are found, there may be multiple branches off the main chain.

**A diagram of the Cascading Chain at a point in time**
**Note:** this diagram demonstrates a Cascade with test parameters (only 2 blocks at each level). In reality there are a maximum of 128 blocks at each level.

Diagram: Cascading Chain and Main chain 

![The Blockchain](/img/blockchain/cascadingChain2Lm.svg#gh-light-mode-only)![The Blockchain](/img/blockchain/cascadingChain2Dm.svg#gh-dark-mode-only)

**Appendix 1)** *shows the corresponding Cascading Chain in the Minima Terminal*
**Appendix 2)** *explains the Minima Terminal components of a block in the Cascading Chain and in the Main Chain*

## Attributes:
1. The Cascading Chain consists of 32 levels (0-31), with a maximum of 128 blocks at each level.
2. The Cascading Chain grows logarithmically, as each level is twice as difficult to achieve as the previous level.
3. Over time, the cumulative sum of the PoW (the ‘weight’) recorded in the Cascading Chain will tend towards the weight of the chain that would have existed had no blocks been pruned.

### Difficulty levels in the Cascading chain 

**Level 0** is the actual block difficulty. Set to 1 block every 50 seconds,<br />
**Level 1** is 2x harder than Level 0<br />
**Level 2** is 4x harder than Level 0<br />
**Level 3** is 8x harder than Level 0<br />
Up to Level 31…<br />
so that **Level L is 2^L harder than Level 0**

Given that each level in the Cascading Chain consists of blocks which are twice as difficult to find as blocks in the previous level, it gets exponentially harder to find a block as you increase the levels. 

We can calculate the probabilities of finding a block of each level as follows:

Let a block at level L be denoted as B<sub>L</sub>(x) where L are the levels {0,...,31} and x is the block number (height), then the probability of finding a block at each level:

**Level 0:** P(B<sub>0</sub>(x))  = 1/(2<sup>0</sup>) = 1<br />
**Level 1:** P(B<sub>1</sub>(x)) = 1/(2<sup>1</sup>) = 1/2   Read: the probability of finding a level 1 block is 1 in 2<br />
**Level 2:** P(B<sub>2</sub>(x)) = 1/(2<sup>2</sup>) = 1/4   Read: the probability of finding a level 2 block is 1 in 4<br />
**Level 3:** P(B<sub>3</sub>(x)) = 1/(2<sup>3</sup>) = 1/8   Read: the probability of finding a level 3 block is 1 in 8<br />
**Level 4:** P(B<sub>4</sub>(x)) = 1/(2<sup>4</sup>) = 1/16   Read: the probability of finding a level 4 block is 1 in 16<br />
etc…to Level 31<br />

Such that **Level L: P(B<sub>L</sub>(x)) = 1/(2<sup>L</sup>)** 

Probability of finding a block at each level, plotted on a linear chart: 

![The Blockchain](/img/blockchain/blockChart1Lm.svg#gh-light-mode-only)![The Blockchain](/img/blockchain/blockChart1Dm.svg#gh-dark-mode-only)

Probability of finding a block at each level, plotted on a (base 2) logarithmic chart: 

![The Blockchain](/img/blockchain/blockChart2Lm.svg#gh-light-mode-only)![The Blockchain](/img/blockchain/blockChart2Dm.svg#gh-dark-mode-only)

Relating this to block times, this means, on average, it would take twice as long to find a block of level L+1 compared to level L.
Therefore, on average, we would expect the amount of time taken to find a block to double with each incremental level.

**Level 0:** every 50 seconds (set by the difficulty level)<br /> 
**Level 1:** every 100 seconds (i.e. 50*2<sup>1</sup> or 50*2) (equivalent to finding 2 level 0 blocks)<br />
**Level 2:** every 200 seconds (i.e. 50*2<sup>2</sup> or 50*4) (equivalent to finding 4 level 0 blocks)<br />
**Level 3:** every 400 seconds (i.e. 50*2<sup>3</sup> or 50*8) (equivalent to finding 8 level 0 blocks)<br />
**Level 4:** every 800 seconds (i.e. 50*2<sup>4</sup> or 50*16) (equivalent to finding 16 level 0 blocks)<br />
Etc..<br /> 
Such that the **average time taken to find a Level L Super Block = 50*2<sup>L</sup>**

Hence, on average, 

For Levels 0-31: 
- One Level L block would contribute the same difficulty (PoW) to the chain as 2<sup>L</sup> Level 0 blocks, e.g. One Level 4 Super Block provides the PoW of sixteen Level 0 blocks.
For Levels 0-30: 
- There are half as many Level L+1 Super Blocks as Level L
- The sum of the difficulty of Level L+1 Super Blocks =The sum of the difficulty of Level L Super Blocks

## Attribute:

4. The Cascading Chain is unbroken. Each block in the Cascade references its previous (parent) block in the Cascade.

In every block, there exists a header which contains a reference (hash) to all its parents at every existing Super level in the cascade.

**Note:** this header is created at the time the block is created and before it has been mined, therefore the maximum level of each new block is unknown when the references to its Super Parents are created.

Each new block **B<sub>0</sub>(n)** *where n = latest block number* contains a reference to the following set of blocks:

- **Its previous block:** B<sub>0</sub>(n-1)
- **Its set of Super Parents:**
    The set {B<sub>s</sub>(x<sub>max</sub>)} where
    x<sub>max</sub> is the highest block number (most recent) at any Super level
    s is the Super level of the block B(x<sub>max</sub>)

In other words:
1. When there are multiple blocks at any Super level, the Super Parent referenced in the block header will be the most recent one.
2. A block can only have as many Super Parents as there are levels that exist in the cascade

The resulting output is that, should a new block achieve a difficulty high enough to become part of the Cascade, it will have an immutable link to:
1. Its immediate previous block in the cascade (in terms of block number)
2. Any other previous blocks in the cascade which have different maximum levels to 1).

**Appendix 2.** shows Super Parent references using the Minima Terminal command **txpow**

## Attribute:

5. At 100 block intervals, the heaviest chain (consisting of all levels in the Cascade and the heaviest branch) is processed and the Cascading Chain is updated. 

Once the heaviest branch reaches 1124 (1024 + 100) blocks in length, the cascading process begins.

The cascading process is as follows:

1. The new Cascade will be a subset of blocks from
    - the existing Cascade and 
    - the first (earliest timestamped) 100 blocks from the heaviest branch
    A new chain is created from a + b which is processed from **tip to root**. Let’s define this as the **HC (heaviest chain)**.
    Note: The remaining (most recent) 1024 blocks are kept, in full, on the main chain.

2. **Level 0:** Starting from the tip of the HC, each block is checked to see whether it meets the difficulty required for Level 0. By definition, all blocks meet this difficulty so the 100 blocks at the tip of the HC are pushed onto Level 0 of the Cascading Chain. There are still 28 spaces remaining to be filled on Level 0 so 28 more blocks from the HC will remain on Level 0.

3. **Level 1:** After 128 blocks have been added to Level 0 of the Cascade, we move up to Level 1 on the Cascade. Successive blocks will only be added to Level 1 in the Cascade if they meet the difficulty required for Level 1 or above, otherwise they are pruned. Once, and if, 128 blocks have been added to Level 1, we move up to Level 2 in the Cascade.

4. **Level 2:** The next blocks being checked will only be added to the new Cascade if they meet the difficulty required Level 2 or above, otherwise they are pruned. 

5. **Level 3:** Working up the chain, the next 128 blocks added to the Cascade must meet the difficulty required for at least Level 3, otherwise they are pruned. 

6. The process continues until all blocks in the chain have been processed.

This results in a new Cascading Chain.

The weight of the Super Blocks on the Cascade are also recalculated as follows:

A Super Block’s Current Weight (CW) is its ‘Base Weight’ (BW) multiplied by a factor proportional to the current level the Super Block is positioned (irrespective of its maximum Super Level):

CW of Super Blocks on Level 0= BW*2<sup>0</sup> (i.e.  Base weight*1)
CW of Super Blocks on Level 1 = BW*2<sup>1</sup> (i.e.  Base weight*2)
CW of Super Blocks on Level 2 = BW*2<sup>2</sup> (i.e.  Base weight*4)
CW of Super Blocks on Level 3 = BW*2<sup>3</sup>(i.e.  Base weight*8)
CW of Super Blocks on Level 4 = BW*2<sup>4</sup> (i.e.  Base weight*16)
etc… 
Such that CW(B<sub>L</sub>(x)) = BW*2<sup>L</sup> 
Where L is the current level a Super Block is positioned on.


**Example:** if a block has a base weight of 1000, and it currently sits at Level 4, the block would weigh 1000*2<sup>4</sup> =16000

<!-- The **TxPoW tree** is the main blockchain and has a **root** - the start of the chain, **tip** - end of the chain, **blocks** (nodes) and **length** (number of blocks).
The root of the chain meets the tip of the Cascade.

If a TxPoW unit becomes a block, it will have a static **base weight** equal to its difficulty and a **total weight** equal to its base weight plus the sum of the weights of its children. 

- **Base weight** = Difficulty (i.e. number of hashes it took to mine the block)
- **Total weight** = Base weight + Sum(Base weight of all children) 

By default, all blocks in the chain are Level 0 blocks.

Branching in the tree can occur if multiple blocks with the same height (block number) are found simultaneously. Branching is a natural occurrence and will resolve over time as a heavier branch continues to be built on. -->

<!-- ## The Cascading Chain
[The Cascading Chain](https://docs.google.com/document/d/1Or8-8Zq2AO6qaRqMq0dUb-5LaGF5SNf3tZyiSNfF-x4/edit) -->

<!-- ## Ghost algorithm 
The GHOST (Greedy Heaviest Observed SubTree) protocol is used by Minima nodes to come to consensus on which chain is the valid one when multiple branches are established. Branching occurs naturally when two blocks with the same number (block height) are found simultaneously. 

Rather than using the simple ‘Longest chain’ rule, where the valid chain is considered to be the one with the most number of blocks in it, GHOST considers the ‘heaviest’ chain to be the valid one. The ‘heaviest’ chain is the branch which has had the most Proof-of-Work put into it.

The faster the block time, the more likely it is that two blocks of the same number (height) will be found. If a simple ‘Longest chain’ rule applies, fast block times can reduce the security of the network if an attacker is able to secretly build a longer chain.

GHOST was originally proposed as an alternative to Longest Chain by Sompolinsky and Zohar in the paper [Secure High-Rate Transaction Processing in Bitcoin](http://www.avivz.net/pubs/15/btc_ghost.pdf). 

Diagram illustrating the the main chain according to GHOST:

![Minima](/img/learn/theBlockchainLm.svg#gh-light-mode-only)![Minima](/img/learn/theBlockchainDm.svg#gh-dark-mode-only)

*A block tree in which the longest chain and the chain selected by GHOST differ. An attacker's chain is able to switch the longest chain, but not the one selected by GHOST.* -->
