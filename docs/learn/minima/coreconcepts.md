---
sidebar_position: 1
---

# Core Concepts

## UTxO Model
Minima uses the UTxO (Unspent Transaction Output) Model, like Bitcoin. A Transaction Output is a specific amount of Minima, identifiable through a unique ID called a **Coin ID**. Each Transaction Output can be considered analogous to a physical coin in that they can represent different amounts of currency and must be spent in whole.

The Minima blockchain keeps track of the UTxO set on the network and who can spend them. The UTxO set circulating in the network fluctuates as users spend coins and create new ones as outputs from transactions. The sum of the value of all the UTxOs in the network will equal at most 1 billion Minima.
One or more UTxOs are used as inputs into transactions and one or more new UTxOs will be created as outputs.


*The example below shows a transaction of 30 Minima from Bob to Alice. A UTxO worth 50 Minima is used as an input and two new UTxOs are created as outputs - one worth 30 Minima which is sent to the recipient and one of 20 Minima which is returned to the sender as change. Just like change is received when physical coins are spent.*


![Core Concepts](/img/learn/coreConceptsLm.svg#gh-light-mode-only)![Core Concepts](/img/learn/coreConceptsDm.svg#gh-dark-mode-only)

## Transaction Proof-of-Work (TxPoW)
Minima requires users to provide work, in the form of hashing, to ‘mine’ their own transactions, this is **TxPoW**.

Once a user has contributed a small amount of work (~1 second of hashing) they have contributed enough for their transaction to be sent around the network. 
:::note
**There are no financial rewards for mining your transactions** e.g. block rewards or collection of fees, the reward is simply being able to broadcast a (valid) transaction to the network.
:::
Transactions are held in **TxPoW units**, which are propagated around the network and may or may not become blocks. TxPoW units contain a user’s transaction and the hashes of other unconfirmed transactions known to the user’s node. TxPoW units become blocks if they, by chance, meet the level of difficulty required to become a block. 

**This ensures that all users can contribute to the construction of the chain** and is in contrast to Bitcoin where users rely on other dedicated 'miners' with specific hardware to provide PoW and propagate their transactions on their behalf.

## The Burn
The Burn is a small cost (fee) which is incurred when sending transactions on the Minima network during times of high demand. This cost, denominated in Minima, is ‘burned’ i.e. removed from Minima's hard-capped supply, making Minima a deflationary currency as the overall circulating supply slowly decreases over time. 

The burn serves multiple purposes:
- **A strong incentive to propagate and process a transaction:** All users in the network will benefit from the decrease in supply as coins that are left become more scarce and therefore more valuable.
- **A method for ordering transactions and regulating on-chain traffic:** Similar to the fee model on other blockchains, the burn serves as a selection method for deciding which unconfirmed transactions will be added to a block. The higher the burn amount in a transaction, the more likely it is that a transaction will be added to a block. 
- **A mechanism for spam prevention by making Denial-of-Service (DoS) attacks expensive:** The burn may be high during periods of heavy traffic or spam and, as it rises, traffic will decrease, self-regulating the system. The burn can be nil or very low when traffic is at manageable levels as the total amount is not important, only the relative burn amount in comparison to other transactions.

While some blockchains have implemented burns that require a central entity to actively buy back and burn coins or tokens (for example by sending them to an inaccessible address, effectively destroying them); others have a burn directly integrated into the protocol. 

In Minima, the ability to burn coins is directly coded into the protocol, meaning it does not rely on any entity, but rather is enforced by the network as a function of demand for block space. 

## MMR (Merkle Mountain Range) Database 
To ensure that all users of the network can contribute to the construction of the chain, the chain needs to be small enough to run on a mobile device. This would not be possible if the entire history of the chain was required as this would be too much of an overhead for a mobile device. Therefore the blockchain must be constantly reduced in size to meet this requirement. This is known as **pruning**.<br/>
The impact of pruning means that the full transaction history of the chain is not kept (except on Archive nodes), therefore a storage mechanism is required to keep track of coins that were created in blocks that have since been pruned. **This is the role of the MMR database.**<br/>
Hence, users must keep track of their spent and unspent coins/TxOs (transaction outputs) independently of the chain. Each coin is stored as a leaf node in a tree structure (a **Merkle hash-sum tree**). Then, using a collection of nodes in this tree, a proof path can be created from the coin to a peak of the tree, proving the existence of a coin even if the block that it was created in has been pruned. <br/>
All users only keep the parts of the MMR tree required to create the proofs for their own coins, which is a tiny amount of data compared to all the coins in the network. Users are also required to store the peaks and the root of the tree so that they can validate a Coin Proof that is presented to them by another user. <br/>
When a user wishes to spend their coins, they must provide the up-to-date, valid proof that it is unspent. Any other node in the network can verify this proof by calculating the peaks and root hash of the MMR tree from the proof and ensuring it matches their own values for the peak and root hash. 
