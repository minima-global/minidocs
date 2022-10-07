---
sidebar_position: 5
---


# The Blockchain
## Overview
The Minima blockchain is structured to be compact and ‘lightweight’, it is therefore heavily pruned to meet this requirement. The chain itself is a TxPoW Tree containing TxBlocks.

The **TxPoW Tree** is the main blockchain consisting of the most recent TxBlocks.

The **Cascading chain** is an unbroken chain of the headers of so called ‘Super Blocks’, designed to record and prove, in an immutable way, the total cumulative Proof-of-Work input into the network without having to keep a record of all individual blocks. Blocks are added to the Cascading chain on a periodic basis and the root of the TxPoW Tree always remains connected to the tip of the Cascading chain.

Diagram: Cascading Chain + TxPoW tree (Blockchain)
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

The TxPoW tree is the main blockchain and has a **root** - the start of the chain, **tip** - end of the chain, **blocks** (tree nodes) and **length** (number of blocks).<br />
The root of the TxPoW tree meets the tip of the Cascade.

Branching in the tree can occur if multiple blocks with the same height (block number) are found simultaneously. Branching is a natural occurrence and will resolve over time as a heavier branch continues to be built on.

## The Cascading Chain

The Cascading Chain is a component of the Minima Protocol designed to record and prove, in an immutable way, the total cumulative Proof-of-Work input into the network without having to keep a record of all individual blocks. 

By identifying multiple levels of difficulty over and above the required block difficulty, so-called ‘Super Blocks’ emerge which, by chance, provide orders of magnitude more PoW to the network than the typical (Level 0) block. The Cascading Chain uses ‘Levels’ to store these Super Blocks as a representation of the Proof-of-Work input into the network, allowing for heavy pruning of Level 0 blocks, without losing any PoW.

The Cascading Chain provides an objective proof of the current ‘heaviest’, and hence valid, chain.

Proof-of-Work is provided, in the form of electric energy, by all users running the Minima Protocol through the process of hashing. A users device must perform a, pre-determined, minimum amount of hashing each time a user:

1. Mines their transaction before forwarding to peers
2. Mines a ‘Pulse’ TxPoW before forwarding to peers

### Attributes of the Cascading Chain: 

1. The Cascading Chain consists of 32 levels (0-31), with a maximum of 128 blocks at each level.
2. The Cascading Chain grows logarithmically, as each level is twice as difficult to achieve as the previous level.
3. Over time, the cumulative sum of the PoW (the ‘weight’) recorded in the Cascading Chain will tend towards the weight of the chain that would have existed had no blocks been pruned.
4. The Cascading Chain is unbroken. Each block in the Cascade references its previous super parent block in the Cascade.
5. At 100 block intervals, the heaviest chain (consisting of all levels in the Cascade and the heaviest branch) is processed and the Cascading Chain is updated. 

### Definitions:

**Block Difficulty Target:** A system set parameter influencing the average number of hashes required for the network to mine a block every 50 seconds (or as close to). The higher the difficulty, the more PoW (energy) required to mine a block.

**Cascade Levels:** The Cascading Chain consists of 32 levels, where each level consists of blocks which, by chance, exceeded the block difficulty target of the previous level by a factor of 2.
e.g. A block in level 3 of the Cascading Chain achieved twice the difficulty of a block in level 2.

**The Cascade:** The chronological, unbroken chain of blocks consisting of a maximum of 128 blocks at each level. The block at the root of the Cascade (after Genesis) will be the block which satisfies both 1) the earliest timestamp and 2) the highest (most difficult) level.
The Cascade does not include the TxPoW tree and has no branches.

**Super Block:** Any block which achieves the difficulty required to take a position on the Cascade.

**Current level:** The level representing how deep in the Cascading Chain a particular Super Block is currently positioned.

**Super Level:** Also the Maximum Level. The level representing the furthest depth a Super Block could reach on the Cascade (determined at random by the difficulty level achieved during the process of mining the TxPoW unit).

**Base Weight:** A block’s base weight is equal to its difficulty value. This is the average number of hashes that would be required to meet this Block’s difficulty target.  

**Current Weight:** The base weight multiplied by a factor dependant on the level in the Cascade the block is currently positioned in, such that Current Weight = Base weight * 2 <sup>Current level no.</sup>.

**Branch:** The main chain (TxPoW Tree) starts at the tip of the Cascade and consists of the most recent 1024 blocks which have not yet been committed to the Cascade. If, due to network latency, two blocks with the same block number are found, there may be multiple branches off the main chain.

**Diagram of the Cascading Chain at a point in time**

**Note:** *this diagram illustrates a Cascade and Main chain with test parameters (only 2 blocks at each level). In practice there are a maximum of 128 blocks at each level.*

Diagram: Cascading Chain and Main chain 

![The Blockchain](/img/blockchain/cascadingChain2Lm.svg#gh-light-mode-only)![The Blockchain](/img/blockchain/cascadingChain2Dm.svg#gh-dark-mode-only)

The corresponding Cascading Chain in the Minima Terminal. Actual output of **printtree cascade:true** (using Test parameters of 2 blocks at each level and a default weight of 1000)

```
    "command":"printtree", 
    "status":true, 
    "message":"Printed to stdout"
}
printtree
[5/7] 0x0000436C769OD35E6C42FD5FAD92AD86E3397F2FASAAD5DAD50AF6721F0962EB@ 2 weight:32000.00
[4/5] 0x000184FC2C1674CA3F1822A74BDA265898428337867F9CEC17A30F10F90F886F@ 5 weight:16000.00 
[4/9] 0x00001218A849EB1C092202O77563AE57125AF1A490444437157B450O5587E088@ 30 weight:16000.00 
[3/4] 0x0003304740533814A703ASE06O79DA3EFED964Al79085144O3FBFE1ED389473E@ 70 weight:8000.000 
[3/3] 0x000548332F9278833812CD8508760A8436188847F4FAO8BF5C3O19626F55872C@ 71 weight:8000.000 
[2/5] 0x000144F2E92068E6EOCDD361A942CEAB9DD25AC9E0ADD3966O66ACF99FBCBO2E@ 73 weight:4000.000 
[2/2] 0x000Al40O6O789CF6DA6652F7185FC99E0791E3FF423A028928DC34C4065O81DA@ 76 weight:4000.000 
[1/2] 0x000O4O62539C98O51845207CBF486BFCF9EC1333700684A3A285FEE2EOBA3CFE@ 90 weight:2000.000 
[1/1] 0x0019BCD30CDC83704188816388O36DA11C7ClE0BACSE72E62AD286736AD0E6SB@ 92 weight:2000.000 
[0/1] 0x001880031AC428632321O43BE43FFF6988284A9108540877OAC418O2OO739101@ 95 weight:1000.000 
[0/1] 0x001833219F9048291BDAC6634151788878499579C091DS7870Fl8AO87CS83A84@ 96 weight:1000.000
----
97 [0/1] 0x0018488783BFD4FA8F6AEADS8E7063857858E3023O951O0C51885867124F2F6O txns:0 weight:1000.000/16000.000
--> 98 [0/0] 0x0024C76EBC2FOFF381196O177E94B9DCCF0O72590A3E0A07O4CB958ABCS33FFC txns:0 weight:1000.000/15000.000 
    --> 99 [0/0] 0x003B8CF257AAFEA852ASECF329F07863EB7ED4C2AA0A1820EBBC11EEEAB271DD txns:0 weight:1000.000/14000.000
        --> 100 [0/0] 0x0038A2F83Al3O0EOF293A688281C42A0C94F13377F1958E9580863933EBOA089 txns:0 weight:1000.000/13000.000 
            --> 101 [0/0] 0x002CB758E57E6805E3432FDFAB45OFCFDE40A700BCB17COA8204FD3995989D02 txns:0 weight:1000.000/12000.000
                --> 102 [0/2] 0x00087C8559EE3571E3939DECD5774F82698618704F5149513265CC4C230AF21F txns:0 weight:1000.000/11000.000 
                    --> 103 [0/2] 0x0009FC18DE1881A20107288640A362828O814F310E026896338F0O87A13AEC3E txns:0 weight:1000.000/10000.000
                        --> 104 [0/2] 0x000CC2CA1224EFCF33EE158192468AF1F105C4CEA561EE146EA9206O880318O7 txns:0 weight:1000.000/9000.000 
                            --> 105 [0/0] 0x0024763333OEO6AA30AC7440F131583823E955F7F49ACC8468844FC590047656 txns:0 weight:1000.000/8000.000
                                --> 106 [0/0] 0x003E9FOC22C8F2CF3EEOC51AFAC8477E4C082OCC66C5800221688A9ED9A15F14 txns:0 weight:1000.000/7000.000 
                                    --> 107 [0/0] 0x002F36839O85OEB0C21E0F06A8863E27FC60554A7702O2688A06BD4C9EBB6448 txns:0 weight:1000.000/6000.000
                                        --> 108 [0/1] 0x00118C1FDE884615937AS68788456995F3781736015OO53C04A5204F113E7472 txns:0 weight:1000.000/5000.000
                                            --> 109 [0/0] 0x003CA183OO2013808BEOCS086O818702O7ClC44BFA035463A7SE99366FFS63EE txns:0 weight:1000.000/4000.000
                                                --> 110 [0/0] 0x0031562088O8A2CB774681A29C7OA08C5549677828E3OF2AA138B2A2C23FDA98 txns:0 weight:1000.000/3000.000
                                                    --> 111 [0/0] 0x0025OO5O3O20AE21OO1O83A7EAC2C3O18780376AFFO4373333E428452SEDD310 txns:0 weight:1000.000/2000.000    
                                                        --> 112 [0/1] 0x001088A86OFC123879BFC98484ESOE385748104A277E878E9C26DCD9AS3FSBE7 txns:0 weight:1000.000/1000.000
Cascade Weight :94000.000 
Chain Weight :16000.000 
Total Weight :110000.000
```

In the minima terminal, a block in the **Cascade** (top section) has the following format:<br />
- **[L<sub>Curr</sub> , L<sub>max</sub>]** *TxPowID **@** blocknumber* **weight:** *weight of block at L<sub>Curr</sub> **@** timestamp*

Where:<br />
- **L<sub>Curr</sub>** is the level in the Cascade that the Super Block is currently positioned i.e. its **Current Level**<br />
- **L<sub>max</sub>** is the maximum level in the Cascade that the Super Block can reach i.e. its **Super Level** <br />
- **TxPowID:** the hash of the Super Block<br />
- **blocknumber:** the number (height) of the Super Block<br />
- **weight:** The Super Block’s weight at its current position i.e. its **Current Weight**

**Example:**

`[1/4] 0x0000001062CF82B7735998368D982BD0DAC6B158D596507F6A4FF46E40F946F0 @ 118598 weight:2.654886E+7 @ Tue Jan 25 23:18:32 GMT 2022`

Whereas a **(level 0) block on the chain** has the following format:<br /> 
*blocknumber* **[0 , L<sub>max</sub>]** TxPowID **txns:** number of txns in the block **weight:** *block weight at L<sub>0</sub>/Total weight **@** timestamp*<br />

Where:
- **Total weight** is the sum of the weights of the current block and all its child blocks<br />

**Example:**

`119839 [0/0] 0x0000012767305A327C2F1B4E8F729B64AACFEFA932443156604E7B6EC845BA3C txns:0 weight:1.412993E+7/1.412993E+7 @ Wed Jan 26 16:24:40 GMT 2022`

### Attributes 1-3:
> *The Cascading Chain consists of 32 levels (0-31), with a maximum of 128 blocks at each level.* <br/>

> *The Cascading Chain grows logarithmically, as each level is twice as difficult to achieve as the previous level.*<br/>

> *Over time, the cumulative sum of the PoW (the ‘weight’) recorded in the Cascading Chain will tend towards the weight of the chain that would have existed had no blocks been pruned.*

**Difficulty levels in the Cascading chain** 

**Level 0** is the actual block difficulty. Set to 1 block every 50 seconds,<br />
**Level 1** is 2x harder than Level 0<br />
**Level 2** is 4x harder than Level 0<br />
**Level 3** is 8x harder than Level 0<br />
up to Level 31…<br />
such that **Level L is 2<sup>L</sup> harder than Level 0**

Given that each level in the Cascading Chain consists of blocks which are twice as difficult to find as blocks in the previous level, it gets exponentially harder to find a block as the levels increase. 

We can calculate the probabilities of finding a block of each level as follows:

Let a block at level L be denoted as B<sub>L</sub>(x) where L are the levels {0,...,31} and x is the block number (height), then the probability of finding a block at each level is:

**Level 0:** P(B<sub>0</sub>(x))  = 1/(2<sup>0</sup>) = 1<br />
**Level 1:** P(B<sub>1</sub>(x)) = 1/(2<sup>1</sup>) = 1/2   i.e. the probability of finding a level 1 block is 1 in 2<br />
**Level 2:** P(B<sub>2</sub>(x)) = 1/(2<sup>2</sup>) = 1/4   i.e. the probability of finding a level 2 block is 1 in 4<br />
**Level 3:** P(B<sub>3</sub>(x)) = 1/(2<sup>3</sup>) = 1/8   i.e. the probability of finding a level 3 block is 1 in 8<br />
**Level 4:** P(B<sub>4</sub>(x)) = 1/(2<sup>4</sup>) = 1/16   i.e. the probability of finding a level 4 block is 1 in 16<br />
up to Level 31…<br />
such that **Level L: P(B<sub>L</sub>(x)) = 1/(2<sup>L</sup>)** 

Probability of finding a block at each level, plotted on a linear chart: 

![The Blockchain](/img/blockchain/blockChart1Lm.svg#gh-light-mode-only)![The Blockchain](/img/blockchain/blockChart1Dm.svg#gh-dark-mode-only)

Probability of finding a block at each level, plotted on a (base 2) logarithmic chart: 

![The Blockchain](/img/blockchain/blockChart2Lm.svg#gh-light-mode-only)![The Blockchain](/img/blockchain/blockChart2Dm.svg#gh-dark-mode-only)

Relating this to block times means that, on average, it would take the network twice as long to find a level L+1 Super Block compared to a level L Super Block. Therefore, on average, we would expect the amount of time taken to find a block to double with each incremental level.<br />

Expected Super Block times:<br />
**Level 0:** every 50 seconds (set by the network block difficulty)<br /> 
**Level 1:** every 100 seconds (i.e. 50&#42;2<sup>1</sup> or 50&#42;2) (equivalent to finding 2 level 0 blocks)<br />
**Level 2:** every 200 seconds (i.e. 50&#42;2<sup>2</sup> or 50&#42;4) (equivalent to finding 4 level 0 blocks)<br />
**Level 3:** every 400 seconds (i.e. 50&#42;2<sup>3</sup> or 50&#42;8) (equivalent to finding 8 level 0 blocks)<br />
**Level 4:** every 800 seconds (i.e. 50&#42;2<sup>4</sup> or 50&#42;16) (equivalent to finding 16 level 0 blocks)<br />
up to Level 31…<br /> 
such that the **average time taken to find a Level L Super Block = 50&#42;2<sup>L</sup> seconds.**

Hence, on average, <br />

For Levels 0-31:
- One Level L block would contribute the same difficulty (PoW) to the chain as 2<sup>L</sup> Level 0 blocks, e.g. One Level 4 Super Block provides the PoW of sixteen Level 0 blocks.<br />

For Levels 0-30:
- There are half as many Level L+1 Super Blocks as Level L
- The sum of the difficulty of Level L+1 Super Blocks =The sum of the difficulty of Level L Super Blocks

### Attribute 4:

>*The Cascading Chain is unbroken. Each block in the Cascade references its previous super parent block in the Cascade.*

In every block, there exists a header which contains a reference (hash) to a parent at every existing Super level in the Cascade.

**Note:** this header is created at the time the block is created and before it has been mined, therefore the maximum level of each new block is unknown when the references to its Super Parents are created.

Each new block in the chain **B<sub>0</sub>(n)** *where n = latest block number* contains a reference to the following set of blocks:

- **Its previous block:** B<sub>0</sub>(n-1)
- **Its set of Super Parents {B<sub>s</sub>(x<sub>max</sub>)}** where <br />
    **x<sub>max</sub>** is the highest block number (most recent) at any Super level<br />
    **s** is the Super level of the block **B(x<sub>max</sub>)**<br />

In other words, when there are multiple blocks at any Super level L, a new block will only reference the most recent level L Super Parent in its header.

The resulting output is that all super blocks in the Cascade will have an immutable link to:
1. Their immediate previous block in the Cascade
2. Previous super blocks in the Cascade which have different maximum levels to their immediate previous super parent.

**Terminal output showing Super Parent references**

Minima command: **txpow txpowid:**[insertTxPoWID]

The above command will show for the given block, the full details of the TxPoW including its Super Parents.<br />
*Example (cropped) showing 5 Super Parents of this block at levels 4, 11, 14, 16, 18 and the genesis block.*

```
txpow txpowid:Ox0000001062CF8287735998368D9828D0DAC6B158D596507F6A41F46E40F946F0 
{ 
    "command":"txpow", 
    "params":{ 
        "txpowid":"Ox0000001062CF8287735998368D982BDODAC6B158D596507F6A4FF46E40F946F0" 
    }, 
    "status":true,
    "response":{ 
        "txpowid":"Ox0000001062CF8287735998368D982BDODAC6B158D596507F6A4FF46E40F946F0",
        "isblock":true,
        "istransaction":false, 
        "superblock":4, 
        "size":553, 
        "header":{ 
            "block":"118598", 
            "blkdiff":"Ox01438D45457A6D43AC2268F797C34CEASCFE6AC11986A25821D63DE6806A", 
            "cascadelevels":32,
            "superparents":[{ 
                "difficulty":4, 
                "count":5, 
                "parent":"Ox0000000F93468B23600B57E89C9C2090A37B8FAA032AE74C7C9992CB4E820249"
            },
            { 
                "difficulty":11, 
                "count":7, 
                "parent":"Ox0000000028270485D5F55ABEF34A05E4E4CC8ADC18E8B5C6D9235AD7A2C25AF9" 
            }, 
            {
                "difficulty":14,
                count":3,
                "parent":"Ox00000000035747E54BDA4A1C8FBA709AAFD2488D81FCDOC91E5D14E0F54E459D" 
            },
            { 
                "difficulty":16, 
                "count":2, 
                "parent":"Ox00000000015221E3EDB4A9829E8803FC38BD486908CE4E6D58FC6D869AC78D5D" 
            },
            {
                "difficulty":18, 
                "count":2, 
                "parent":"Ox000000000EBCC7F23E55ECAFB3DE7A1CAOC39SDED61909138734A2D69COBE6B79"
            },
            {
                "difficulty":31, 
                "count":13, 
                "parent":"0x00"
            }],
            "magic":{ 
                "desiredmaxtxpow":"32000",
                "desiredmaxtxn":"100",
                "desiredmintxpowwork":"Ox4189374BC6A7EF9DB22DOE5604189374BC6A7EF9DB22DOE5604189374BC6A7", 
                "maxtxpow":"32000",
                "maxtxn":"100",
                "mintxpowwork":"Ox4189374BC6A7EF9DB22DOE5604189374BC6A7EF9DB22DOE5604189374BC6A7" 
            }, 
            "mmr":"Ox775AE23EF568860A616B0F72676F14127F45FA47C817CO39DOAD86C2C394C940",
            "total":"1000000000",
            "nonce":"0.00000000000000000000000000000000000000026881",
            "timemilli":"1643152712051",
            "date":"Tue Jan 25 23:18:32 GMT 2022" 
        }, 
        "hasbody":true, 
        "body":{ 
            "prng":"OxA22FCEF273268981308F81ED4CAD7FF7E806F62139630C5A4C252F38544448BD50",
            "txndiff":"Ox068DB8BAC71003295E9E1B089A027525460AA64C2F8378442339COEBEDFA43",
            "txn":{
                "inputs":[], 
```
### Attribute 5:

>*At 100 block intervals, the heaviest chain (consisting of all levels in the Cascade and the heaviest branch in the TxPoW Tree) is processed and the Cascading Chain is updated. *

Once the main chain (heaviest branch) reaches 1124 (1024 + 100) blocks in length, the cascading process begins.

The new Cascade will include a subset of blocks from the existing (previous) Cascade and all of the first 100 blocks from the main chain i.e. the 100 blocks closest to the tip of the existing Cascade. Once added to the Cascade, these first 100 blocks will be pruned from the main chain, leaving 1024 blocks unpruned.

The 101st block in the main chain will become the new root of the TxPoW Tree whose parent will be the tip of the new Cascade. 

Before these 100 blocks are pruned, the new root block’s MMR Set is updated with entries for all the CoinProofs from these blocks for unspent coins that the node is tracking. Therefore CoinProofs are not lost once the blocks are pruned. 

The Cascading process is as follows:
  
1. **Level 0:** Working backwards through the first 100 blocks in the main chain, each block is checked to see if it meets the difficulty of a Level 0 block. By definition, all blocks are Level 0 so these 100 blocks are all added to Level 0 in the new Cascade. 28 Level 0 blocks from the previous Cascade will remain in Level 0 of the new Cascade, filling the 128 spaces at this level.

2. **Level 1:** After 128 blocks have been added to Level 0 of the Cascade, continuing to work backwards through the remaining Level 0 blocks in the previous Cascade, these will only be kept and added to Level 1 in the new Cascade if they meet the difficulty required to be a Level 1 Super Block or above, otherwise they are pruned.

3. **Level 2:** Once, and if, 128 Super Blocks have been added to Level 1, the next Super Blocks must meet the Level 2 difficulty to remain in the Cascade, otherwise they are pruned. 

4. **Level 3:** Continuing to work backwards through Super Blocks the previous Cascade, the next 128 blocks added to the Cascade must meet the difficulty required for at least Level 3, otherwise they are pruned. 

5. The process continues until all blocks in the chain have been processed.

This results in a new Cascading Chain and the remaining (most recent) 1024 blocks kept, in full, on the main chain.

The weight of the Super Blocks on the Cascade are also recalculated as follows:

A Super Block’s Current Weight (CW) is its ‘Base Weight’ (BW) multiplied by a factor proportional to the current level the Super Block is positioned (irrespective of its maximum Super Level):

**CW of Super Blocks on Level 0** = BW&#42;2<sup>0</sup> *i.e.  Base weight&#42;1*<br />
**CW of Super Blocks on Level 1** = BW&#42;2<sup>1</sup> *i.e.  Base weight&#42;2)*<br />
**CW of Super Blocks on Level 2** = BW&#42;2<sup>2</sup> *i.e.  Base weight&#42;4*<br />
**CW of Super Blocks on Level 3** = BW&#42;2<sup>3</sup> *i.e.  Base weight&#42;8*<br />
**CW of Super Blocks on Level 4** = BW&#42;2<sup>4</sup> *i.e.  Base weight&#42;16*<br />
up to Level 31…<br /> 
such that **CW(B<sub>L</sub>(x)) = BW&#42;2<sup>L</sup>**, where L is the current level a Super Block is positioned on.


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
