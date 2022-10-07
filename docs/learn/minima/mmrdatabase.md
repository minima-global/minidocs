---
sidebar_position: 3
---

# MMR Database

## Overview

As the blockchain is heavily pruned, users must store proof that their coins are unspent. This is the role of the Merkle Mountain Range (MMR) Proof database. The MMR is a **hash sum tree** containing the proofs for all Transaction Outputs (TxOs) i.e. coins in the system.
Note: these coins may be Spent Transaction Outputs (STxOs) or Unspent Transaction Outputs (UTxOs). 

The tree is **append-only** and is updated as coins are spent and created. For each new UTxO created from a transaction output, a new leaf node is created in the MMR. Coins are hashed in pairs, building up the largest **binary tree** possible until a new tree is required. As new trees are required, they start to look like a range of mountains - giving the MMR its name.

When the total number of leaf nodes (Coins/TxOs) are not equal to *2 <sup>n</sup> where n = int{*0,...,256*}*, there will be multiple trees of different heights, creating multiple peak nodes as shown below.

*Diagram: Merkle Mountain Range (MMR) with 11 coins (green) and three peaks (blue)*

![MMR Database](/img/learn/mMRDatabase1Lm.svg#gh-light-mode-only)![MMR Database](/img/learn/mMRDatabase1Dm.svg#gh-dark-mode-only)

To create a single MMR tree, the peaks must be collected (or ‘bagged’) starting from left to right. Until a single root hash is found.

*Diagram: A complete Merkle Mountain Range (MMR) with three peaks and root*

![MMR Database](/img/learn/mMRDatabase2Lm.svg#gh-light-mode-only)![MMR Database](/img/learn/mMRDatabase2Dm.svg#gh-dark-mode-only)

Each node in the tree will have a globally unique reference to it by combining the row/level it is in and its entry number on the row. Using a hash table to track entries, each node can be identified through a reference [R,E] where R is the row number and E is the Entry number. 

*Diagram: A complete MMR with hash table references [row, entry number]*

![MMR Database](/img/learn/mMRDatabase3Lm.svg#gh-light-mode-only)![MMR Database](/img/learn/mMRDatabase3Dm.svg#gh-dark-mode-only)

*For example, the second coin with entry number 1 will have a reference in the hash table of [0,1] (Row 0, Entry 1).*

The maximum possible number of rows in the MMR is set to 256, using the MAXROWS parameter. With each two new coins, a new parent node is added, therefore the maximum number of coins in the MMR would result in a perfect binary tree with one peak and 2<sup>256</sup> coins.

**2<sup>256</sup> is the maximum number of coins (UTxOs) that can ever exist in Minima.** 

:::note &nbsp;
*Using the default parameters of 256 transactions per block, 50 second block times and assuming 3 UTxOs per transaction, it would take*

*5,737,098,536,063,750,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000 years to fill the MMR.*
:::

However, users do not store the complete MMR for all the coins in the system, as this would be too burdensome, rather they only store the entries relevant to their own coins which must be provided as CoinProofs in the Transaction Witness when they wish to spend their coins.

:::tip &nbsp;
The MMR can be thought of as a book, where all users keep a copy of the spine (root and peaks) and their own page in the book (their CoinProofs). When a user wishes to spend their coins, they provide their page and the spine. Provided their page fits the spine and the spine matches that of the other nodes in the network, the user’s coins can be proved to be valid. 
:::

## MMR Data

Each node in the MMR has unique MMR Data consisting of a hash and a value, defined as follows:

| MMRData Object | Leaf Nodes - TxOs (Row 0) | Parent Nodes (inc Peaks & Root) | Type |
| :-------------- | :------------------------- | :------------------------------- | :---- |
| **Data (Hash)** | Hash(coin object)<br />The coin could be spent or unspent. | Hash[<br />Hash(left child data object),<br />Hash(right child data object),value object] | MiniData (32 byte hash) |
| Value | Minima Value of coin, if<br /> unspent,<br />Or 0, if spent | Sum of the value of child nodes | MiniNumber |

*Diagram: Example MMR Data for two coins and a parent node in the MMR.*

![MMR Database](/img/learn/mMRDatabase4Lm.svg#gh-light-mode-only)![MMR Database](/img/learn/mMRDatabase4Dm.svg#gh-dark-mode-only)

Each entry in an MMR is defined by its attributes:

| MMREntry Attribute | Description | Type |
| :----------------- | ----------- | ---- |
| **Row** | The hash table row representing its level in the tree (where coins are Level 0) | String |
| **Entry Number** | The index of the Entry on a specific row from left to right, starting from 0 | MMREntryNumber |
| **Data** | The MMR data (Hash and Value) of the entry | MMRData |

## Proofs

When a user wishes to spend their coins, they must provide proof that their coins are unspent by providing a **CoinProof** for each coin they wish to spend. **A CoinProof is a list of Proof Chunks** that any other node can use to independently verify that someone else’s coin exists and is unspent, without having to store the proofs for every coin in the network.

Given a CoinProof, any node verifying a transaction can calculate the path (i.e. the intermediate parent hashes), from another user's coin to a peak in the MMR. If the calculated peak hash matches the peak hash from their own MMR, the CoinProof is valid, otherwise the CoinProof and transaction are not valid.

**Proof Chunks** consist of the MMR Data (hash and value) for an MMR entry and a True/False flag indicating whether it is a left sibling or not. 
 
*Diagram: Example CoinProof for coin 7 (coin to peak)*

![MMR Database](/img/learn/mMRDatabase5Lm.svg#gh-light-mode-only)![MMR Database](/img/learn/mMRDatabase5Dm.svg#gh-dark-mode-only)

The CoinProof for coin 7 consists of the coin and the yellow Proof Chunks, i.e. entries **{[0,6],[0,7],[1,2],[2,0]}** , so that:
- Hashing [0,6] with [0,7] calculates parent [1,3]
- Hashing [1,2] with [1,3] calculates parent [2,1]
- Hashing [2,0] with [2,1] calculates peak [3,0]

Any node receiving this CoinProof is able to calculate the parents and the peak node, and by comparing it to their own peaks, proving that Coin 7 is valid.

## MMR Sets

When a coin is **spent**, the Spent flag of the coin changes from false to true, changing the hash of the coin.

When a new coin is **created** (as an output to a transaction), a new coin is added as a leaf node to the tree.

In both cases, the intermediate parent nodes, peaks and root will need to be calculated for the new hash of the coin. Therefore the CoinProofs for all coins in the system change with each new block and it is therefore essential for users to keep up to date with the latest block. 

Each block contains an **MMR Set** containing updated and new MMR Entries for all the spent and new coins of the main transaction in the block. 

Each block has its own set of MMR entries with the following attributes: 

| MMR Attribute | Description | Type |
| :------------ | :---------- | :--- |
| **Block Time** | The blocktime for the MMR set | MiniNumber |
| **Elen** | How many entries in this MMR set | MiniNumber |
| **Entry Number** | The latest entry number | MMREntryNumber |
| **Set Entries** | The **hash table** elements for all the MMR Entries in this set.<br />HashTable<0,1> is the entry on Row 0, Entry index 1 | Enumeration of MMR Entries |

## Traversing the MMR

Starting from any node in the MMR, we can navigate through it as follows:

| Operation | Row Operation | Entry Number Operation |
| :-------- | :------------ | :--------------------- |
| Right Sibling | - | Add 1 |
| Left Sibling | - | Minus 1 |
| Parent | Add 1 | Divide by 2, Round down to nearest integer |
| Left Child | Minus 1 | Multiply by 2 |
| Right Child | Minus 1 | Multiply by 2, Add 1 |

Separate MMRs are also used to store Signature Proofs and Script Proofs.