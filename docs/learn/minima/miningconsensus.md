---
sidebar_position: 6
---

# Mining and Consensus

## Magic Numbers

The Magic numbers provide a mechanism for future-proofing the network. As technology improves over time, increasing the storage and processing capacity on mobile devices, the Magic numbers allow Minima to adapt or grow simultaneously. 

There are two sets of four variables that define the network, for each variable there is the **Current** network value and the user’s **Desired** value. The Current value dictates the network at that point in time, the value that the whole network is currently working to. Desired values can be specified by users to reflect the capability of their node.
Note: Desired values must take a value that is at least half of the corresponding Current value, and not more than double the corresponding Current value. 

**The Current Magic numbers are recalculated every block** by taking a heavily weighted average of 16383:1 in favour of the Current network value over the node’s Desired value. Provided the entire network agrees on a new desired value, over a period of approximately 50 days, the Current Magic value will converge to the Desired value.  

| Magic Number | Description | Default Value | Type |
| :-------------- | :------------------------- | :------------------------------- | :---- |
| **CurrentMaxTxPoWSize** | The maximum size of a TxPoW unit in bytes. | The default and minimum TxPoW size is 64KB | MiniNumber |
| **CurrentMaxKISSVMOps** | The maximum number of KISS VM operations in a TxPoW (script complexity) | The default and minimum is 1024 | MiniNumber |
| **CurrentMaxTxnPerBlock** | The maximum number of transactions per block | The default and minimum transactions per TxPoW unit is 256 | MiniNumber |
| **CurrentMinTxPoWWork** | The target value for the hash of a TxPoW header, that must be met before for a TxPoW unit to be sent across the network | The minimum is equivalent to 1 million hashes/second | MiniNumber |

## Difficulty

Difficulty is a dynamic value which determines how hard it is to mine a TxPoW unit. <br/>
The difficulty value is used to calculate a target value which the hash value of the TxPoW header (the TxPoW ID) needs to be less than. 

```math 
Target Value = Max Value/Difficulty Value

Where 
Max value (represented in Hex) = FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
 
Max value (represented in Decimal) = 1.15792089237316E+77
```
In Minima, there are multiple difficulty levels:

Diagram: Basic representation of the different difficulty levels, where transaction target is the easiest to achieve (not to scale)

![Mining and Consensus](/img/learn/difficultyLm.svg#gh-light-mode-only)![Mining and Consensus](/img/learn/difficultyDm.svg#gh-dark-mode-only)
:::note
The higher the difficulty, the lower the target value, the harder it is to achieve.
:::

## Transaction (TxPoW) Difficulty

The default and minimum difficulty value is 1 million, meaning that a device with a hash rate of 1m hashes/second will need to perform 1 second of ‘work’ before the target is met and their TxPoW can be propagated across the network, entering the mempool of unconfirmed transactions. 

```math 
The default and easiest TxPoW Target = Max Value/1,000,000

Target represented in Hex = 0x10C6F7A0B5ED853E638E9803F452E932EB00EAD38965A800000000000000

Target represented in Decimal = 1.15792089237316E+71
```
This is the magic number **CurrentMinTxPoWWork.** <br />

The actual transaction difficulty for a node considers the achievable hash rate of the node and is equal to the higher value of 1 million or the device’s hash rate in hashes/second, so that each device performs roughly 1 second of ‘work’ to ‘mine’ their transaction (TxPoW unit).


## Block Difficulty

The purpose of the block difficulty level is to regulate the frequency at which blocks are found on the network ensuring block intervals remain as close to 50 seconds as possible. TxPoW units only require the minimum amount of work before they are sent across the network, however these TxPoW units can become blocks and get added to the chain if, by chance, the TxPoW ID hash is also less than the network block difficulty target. 

The block target is much lower (harder) than the transaction target, and fluctuates with the number of nodes on the network and their hash rate, so that 50 block intervals are maintained.

If block times deviate from 50 second intervals, the difficulty will be adjusted proportionally, by a maximum of 10% up or down.

The block difficulty will always be at least as hard as the transaction difficulty.

**Adjusting the block difficulty:**<br />
> **Example 1: Block times too slow**<br />
If the time interval between blocks slows down to 1 block every 54 seconds, the current block difficulty will be decreased by a factor of 50/54 = 0.926. <br/>
*This lower difficulty increases the block target value, making it easier for nodes to achieve and acting to speed up the interval between blocks.*

>**Example 2: Block times too fast** <br/>
If the time interval between blocks speeds up to 1 block every 45 seconds, the current speed ratio (required block time/actual chain speed) is 50/44 = 1.25, however since this is over 10%, the block difficulty will only be increased by the maximum 1.1. <br/>
*This higher difficulty decreases the block target value, making it harder for nodes to achieve and acting to slow down the interval between blocks.*

Once the transaction (not block) difficulty target has been met, the mining process finishes. 
If the block difficulty target has by chance also been achieved, then the TxPoW unit will become a block and be added to the main chain.  

## Superblock Difficulty
[(see Cascading Chain)](/docs/learn/minima/theblockchain#the-cascading-chain)

## Block Weight
A block’s base weight is equal to the difficulty value that was required for it to become a block. This also represents the average number of hashes that would be required to meet this block target value.

For a specific block: <br/>
`Base Weight = Max Target Value/Block Target Value`

*Note that this is not the actual weight, which would be the actual number of hashes it took to find a value less than the target.*

If the actual weight, by chance, exceeds its base weight by at least a factor of 2, the block will be considered a Super Block [(see Cascading Chain)](/docs/learn/minima/theblockchain#the-cascading-chain).

## Constructing TxPoW Units 

TxPoW units are created after a transaction and its witness has been created. Once created, the TxPoW will be ‘mined’ and propagated across the network.

The following Terminal commands will result in creation of a TxPoW unit:<br/>
**send** - send a transaction <br/>
**tokencreate** - create a custom token<br/>
**txnpost** - posting a manually constructed transaction<br/>

A TxPoW unit is constructed as follows: <br/>

**1. Create the TxPoW**

Set details
* Block height (if this TxPoW becomes a block)
* Timemilli (the node’s current time)
* Main transaction & Witness (the transaction the user is sending)
* Burn transaction & Witness 
* Calculate & set the magic numbers

**2. Set the Cascade Super Parents**

If the current tip block is Super Level i, this TxPoW will have:  <br/>
**Super Parents for Levels 0-i:** Current tip block <br/>
**Super Parents for Levels i-31:** same Super Parents as the current tip

**3. Set the Transaction difficulty**

The Hex value that the hash of the TxPoW must be less than to be valid, is set based on the hash rate of the node. It must be no easier than the Magic number **CurrentMinTxPoWWork.**

```
Minimum TxPoW hash = Max Value / user’s hash rate

If
 Minimum TxPoW hash > CurrentMinTxPoWWork i.e. if the Minimum TxPoW hash is easier than CurrentMinTxPoWWork
then
 Minimum TxPoW hash = CurrentMinTxPoWWork
```
**4. Calculate Chain Speed and Block Difficulty**

Using the latest 256 blocks in the main chain, the average time and block difficulty for each block is calculated and the block difficulty target is adjusted proportionally by a maximum of 10% up or down.

`Initial Start Position = tip block, Initial End Position = tip - 256 `

The two blocks with the median time from the 32 blocks prior to the initial start and initial end positions are determined. Those blocks become the final start and end positions to calculate the current Chain Speed and Block Difficulty. 
Using the median smooths out any anomalies in the system time of nodes on the network. 

```
Chain speed (secs) = Avg time interval per block between the final start and end position 

Speed Ratio = Required block speed (50 secs)/Chain speed  

Average block difficulty = Avg difficulty for blocks between the start and end position 
```
Then,
```
New block difficulty = Avg block difficulty * Speed Ratio
(if 0.9 <= Speed Ratio <= 1.1)

or
New block difficulty = Avg block difficulty * 0.9
(if Speed Ratio < 0.9)

or
New block difficulty = Avg block difficulty * 1.1
(if Speed Ratio > 1.1)

or
New block difficulty = CurrentMinTxPoWWork 
(if Avg block difficulty * Speed Ratio < CurrentMinTxPoWWork and 0.9 <= Speed Ratio <= 1.1)
```
i.e. the Magic number **CurrentMinTxPoWWork** is used as a lower bound for the block difficulty



**5. Order Mempool Transactions**

Sort the unconfirmed mempool TxPoW units by the amount they burn.

**6. Check Mempool Transactions**

Cycle through the mempool transactions checking the following:
* Coins are not already added to this TxPoW
* Transaction size is less than or equal to the magic number **CurrentMaxTxPoWSize**
* Transaction difficulty must be harder than or equal to the magic number **CurrentMinTxPoWWork**
* MMR Proofs are valid
* Script Proofs are valid

**7. Add valid Mempool TxPoWs**

Create a list of valid mempool transactions, including the maximum allowed by the magic number **CurrentMaxTxnPerBlock**. This list is added to the body of the TxPoW unit. Invalid TxPoW are removed from the mempool. <br/>

:::note
Only the TxPoW IDs of mempool transactions are added to this list. <br/>
:::

**8. Calculate hashes for main and burn transactions**

Calculate the hash of the main transaction and the burn transaction, add these to the TxPoW body.
These are required for creating the Coin IDs of the transaction outputs and the MMR.

**9. Construct the MMR**

Construct an updated MMR set with proofs for the newly created coins (UTxOs). 
Calculate the new MMR root hash and the root value.

**10. Add the MMR Root data**

Add the MMR root hash and value (sum of all coins in the network) to the TxPoW header.

**The TxPoW generation process is complete and is ready to be 'mined' before being sent on to peer nodes for propagation across the network. **


## Mining TxPoW units
Once a new TxPoW unit has been created, it must be ‘mined’ before a node can send it on to its peers.<br/>

Mining is the process of repeatedly hashing the TxPoW header, each time with a different number (known as the nonce value) set in the header. By changing the nonce each time, the header data changes, resulting in a different hash. <br/> 
This process is repeated until the resulting hash is less than the transaction difficulty target. Once this is achieved, the required difficulty level has been met and the TxPoW has enough ‘Proof of Work’ to be propagated to other nodes in the network. 
:::note
A node does not consider the block difficulty target during the mining process. <br/> 
Only after a TxPoW has been mined, is it evaluated to see if it will become a block - if the TxPoW ID hash is also, by chance, lower than the block difficulty target. 
:::
A TxPoW unit is ‘mined’ as follows:

**1. Calculate TxPoW body hash**

Hash the TxPoW body and set in it the TxPoW header

**2. Set the initial nonce value**

Set the start nonce value in the TxPoW header

**3. Hash - Check - Set**

The TxPoW header is hashed, if it does not satisfy the transaction difficulty, the nonce is incremented by 1 and the process repeats.

Once the hashed TxPoW header satisfies the transaction difficulty, the final nonce value is set in the TxPoW header

**4. Calculate the TxPoW ID & Size**

The hash of the TxPoW header is the TxPoW ID.
If it also meets the block difficulty target, its Block weight and Super Level are also calculated.

**Once the mining process has ended, the node will continue to validate, process and send the TxPoW ID across the network.**


## Validating TxPoW units
Once a user has successfully mined a TxPoW unit or when they have received a TxPoW unit from a peer, it must be validated before propagating to peers. 

The potential outcomes from this check are:<br/>
**Outcome 1:** The TxPoW is invalid - disconnect from the client who sent it and discard the TxPoW.<br/>
**Outcome 2:** The TxPoW is not fully valid - some check(s) did not pass but it could be valid at a future time. Remain connected to the client, keep and attempt to process the TxPoW but do not send it on to peers.<br/>
**Outcome 3:** The TxPoW is fully valid - remain connected to the client, keep and attempt to process the TxPoW but do not send it on to peers.

Validating a TxPoW unit includes checking:

* Does it already exist in the TxPoW database? <br/>
*- if false, request it from the peer*

* Does it  have a block number before the root of the TxPoW Tree? <br/>
*- if true, outcome 1. <br/> - Reason:  this TxPoW is before the Cascade tip*

* Is the block difficulty at most 10% below the tip block?<br/>
*- if false, outcome 1. <br/> - Reason:  the block difficulty is too low*

* Does the Chain ID match the Chain ID of the current network? <br/>
*- if false, outcome 1. <br/> - Reason:  the Chain ID is wrong*

* Does it meet basic transaction checks?<br/>
*- if false, outcome 1. <br/> - Reason:  the TxPoW fails basic checks (see Basic TxPoW Checks)*

* Are the signatures valid?<br/>
*- if false, outcome 1. <br/> - Reason: the signatures are invalid*

* Are the coin and token scripts valid?<br/>
*- if false & if the transaction is monotonic, outcome 1 but remain connected. <br/> - Reason: monotonic TxPoWs will always be invalid if they fail script checks*<br/><br/>
*- if false & if the transaction is non-monotonic, outcome 2. <br/> - Reason: non-monotonic transactions are not fully valid at this point in time but are still processed in case they rely on a certain block time to be valid*

* If the TxPoW is a block, does it have a timestamp less than 2 hours in the future?<br/>
*- if false, outcome 2. <br/> - Reason: the TxPoW is over 2 hours in the future but not discarded as could be something wrong with internal clock*

* Does it use any coins as transaction inputs that are also currently in the mempool?<br/>
*- if true, outcome 2. <br/> - Reason: the same coins are used in another transaction but the TxPoW is not discarded as it could be valid in another branch*

* Do the CoinProofs for the main and burn transactions pass the MMR checks?<br/>
*- if false, outcome 2. <br/> - Reason: MMR proofs are not valid, but the TxPoW is not discarded as they could be valid in another branch*

* Did it take longer than 1 second to process?<br/>
*- if true, outcome 2. <br/> - Reason: the message took a long time to process*

Fully Valid and not Fully Valid TxPoWs are then added to the TxPoW database. Only a Fully Valid TxPoW is then forwarded onto the node’s peers.<br/>
If a received TxPoW unit is a block, all the mempool TxPoW in the block’s *txn list* as well as the parent block must exist in the TxPoW database before it can be added to the TxPoW Tree. If the node is missing any, these are requested from peer nodes before processing.

**Basic TxPoW checks:**<br/>
The Basic TxPoW checks ensure the main transaction and its burn transaction are valid. 

The basic checks are:

* The Chain ID must be valid

For main transaction and burn transaction: 
* The Link Hash connecting the main and burn transaction must be valid
* Check if the transaction is empty, empty transactions are valid (e.g. a Pulse TxPoW)
* Transaction inputs & outputs are valid
* Must be at least one input
* The number of MMR proofs must be correct

For all coins in the main transaction:
* No coins can be used more than once
* If a custom token is being spent, the Token ID must match the Token ID in the coin and in the MMR Proof
* CoinProof details must match the Coin details (amount, address & Token ID)
* The Coin ID of non-floating coins must match the Coin ID in the CoinProof
* The Coin must not be spent
* The Coin must have script proofs 

## Processing TxPoW & Assembling the Chain

The final step, once a TxPoW passes all the validation checks, is to push it to the end of a process stack so that it can be added to the TxPoW tree in the correct order.

The node will process the stack, attempting to add any TxPoW units that are blocks to the end of the chain.
A block’s parent must exist in the tree before it can be added. If the parent does not exist in the tree yet, the node may not have had all its transactions when it first attempted to process it. Since last attempting to process the parent, the node should have received any missing transactions from its peers so it is searched for in the TxPoW database and, if found, added to the process stack to be processed before the child.

If the parent block is already in the tree, the TxPoW is processed by first ensuring that all mempool transactions in the *txn list* of the TxPoW body exist in the user’s TxPoW database. <br/>
- If there are any missing, the TxPoW cannot be processed any further. <br/>
- If there are none missing, the TxPoW will go through final checks before becoming a TxBlock. <br/>

A **TxBlock** includes the TxPoW and adds the MMR peaks; a list of CoinProofs for all the coins that will become spent; and a list of the new coins that will be created from all the transactions in the block. [(see TxBlocks)](/docs/learn/minima/txpowunits#txblocks-blocks)

Once the TxBlock has been created, a structure is required to attach the block to the TxPoW tree, this is the role of a TxPoW Tree Node. It adds further relevant information to the TxBlock i.e. the MMR set; a list of all the spent and newly created coins; and a list of all the MMR entry numbers of any coins in any of the transactions that are relevant to the user (i.e. coins they are tracking). [(see TxPoW Tree Nodes)](/docs/learn/minima/theblockchain#txpow-tree-node)

A child node is then added to its parent in the tree and the tree is **recalculated**.

**Recalculating** the tree involves:
* Calculating the weight of all blocks in the tree
* Selecting the heaviest branch as the main chain [(see Selecting the main chain)](/docs/learn/minima/miningconsensus#selecting-the-main-chain-ghost)
* Cascading the chain if the heaviest branch has reached the required length [(see Cascading Chain - Attribute 5)](/docs/learn/minima/theblockchain#attribute-5)
* Setting transactions in the main chain so they cannot be added to a new TxPoW

The TxPoW database is then checked to see if there are any children for this new block as these can then be added to the process stack for processing. 

This process continues until either the process stack is empty or contains TxPoWs with transactions not yet received by the user.

## Selecting the main chain (GHOST)
The TxPoW Tree consists of a main chain and branches which occur naturally due to network latency. All nodes in the network must only consider one chain to be the valid one at any point in time - the main chain. The tip of the main chain becomes the parent block that a node will attempt to build on when generating a TxPoW unit.

Minima uses the **GHOST (Greedy Heaviest Observed SubTree)** protocol to ensure that nodes can come to consensus on which chain to use as the main chain. GHOST dictates that the ‘heaviest’ branch should be the main chain. The ‘heaviest’ branch is the branch which has had the most Proof-of-Work put into it and may not necessarily be the longest chain.

An alternative to GHOST is the simple ‘Longest chain’ rule, where the valid chain is considered the one with the most number of blocks in it, however by using GHOST and considering the ‘weight’ of blocks rather than simply the number of blocks, the chain is more resilient to attack and allows for faster block times. 

The weight of a block is equal to the sum of the base weights of its children, where the base weight = the block difficulty [(see Difficulty)](/docs/learn/minima/miningconsensus#difficulty), so where there are siblings in the tree that create two branches, their parent block will have a total weight of the sum of the siblings.

The process of selecting the main chain (i.e. recalculating the tree) occurs after receiving and processing a TxPoW unit (whether or not it is a block). During this process, the weight of all blocks in the TxPoW tree (main chain and branches) are evaluated and the heaviest branch is set as the main chain. All transactions in the blocks of this chain are then considered as ‘truth’ and the node continues to build from the tip of this chain. This may mean some transactions are returned to the mempool and must be added to a new TxPoW unit before being confirmed.

Diagram illustrating the main chain according to GHOST. <br/>
The longest chain could more easily be achieved by an attacker in secret, however with the majority of the network constructing on the heaviest chain, the attacker's secret chain would not change the main chain.

**Cascading Chain & TxPoW Tree showing main chain according to GHOST (with Block numbers)**

![Mining and Consensus](/img/learn/miningConsensus1Lm.svg#gh-light-mode-only)![Mining and Consensus](/img/learn/miningConsensus1Dm.svg#gh-dark-mode-only)

**Cascading Chain & TxPoW Tree showing main chain according to GHOST (with Block weight = 1)**

![Mining and Consensus](/img/learn/miningConsensus2Lm.svg#gh-light-mode-only)![Mining and Consensus](/img/learn/miningConsensus2Dm.svg#gh-dark-mode-only)

:::note
A block weight of 1 is for illustrative purposes only, actual block weights vary depending on the block difficulty of the network. [(see Block Weight)](/docs/learn/minima/miningconsensus#block-weight)
:::

:::tip
GHOST was originally proposed as an alternative to Longest Chain by Sompolinsky and Zohar in the paper *Secure High-Rate Transaction Processing in Bitcoin.* 
:::