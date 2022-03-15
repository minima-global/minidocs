---
sidebar_position: 2
---

# Core Concepts

## UTxO Model
Minima uses the UTxO (Unspent Transaction Output) Model, like Bitcoin. A Transaction Output is a specific amount of Minima, identifiable through a unique ID called a coin ID. Each Transaction Output can be considered analogous to a physical coin in that they can represent different amounts of currency and must be spent in whole. 

The Minima blockchain keeps track of the UTxO set on the network and who can spend them. The UTxO set circulating in the network fluctuates as users spend coins and create new ones as outputs from transactions. The sum of the value of all the UTxOs in the network will equal at most 1 billion Minima.

One or more UTxOs are used as inputs into transactions and one or more new UTxOs will be created as outputs.

The example below shows a transaction of 30 Minima from Bob to Alice. A UTxO worth 50 Minima is used as an input and two new UTxOs are created as outputs - one worth 30 Minima which is sent to the recipient and one of 20 Minima which is returned to the sender as change. Just like change is received when physical coins are spent.

![Core Concepts](/img/learn/coreConceptsLm.svg#gh-light-mode-only)![Core Concepts](/img/learn/coreConceptsDm.svg#gh-dark-mode-only)

## MMR (Merkle Mountain Range) Database 
As the blockchain is constantly pruned, users must keep track of their spent and unspent TxOs (transaction outputs)independently of the chain. Each TxO has a proof that forms part of a hash sum tree and these are stored in the user’s MMR database. 
When a user wishes to spend their coins, they must provide the up to date valid proofs that it is unspent.

## Transaction Proof-of-Work (TxPoW)
Another core concept in Minima is **TxPoW** - Transaction Proof of Work. Minima requires users to provide work, in the form of computing power, to ‘mine’ their own transactions. Once a user has contributed a small amount of work (~10 seconds) their transaction will be propagated around the network. This is in contrast to Bitcoin where users rely on miners with specific hardware to provide PoW and propagate their transactions on their behalf.

Transactions are held in **TxPoW units**, which may or may not become blocks. TxPoW units contain a user’s transaction and the hashes of other unconfirmed transactions known to the user’s node. TxPoW units become blocks if they, by chance, meet the level of difficulty required to become a block. 

## The Burn
The Burn is a small cost (fee) which is incurred when sending transactions on the Minima network during times of high demand. This cost, denominated in Minima, is ‘burned’ i.e. removed from Minima's hard-capped supply, making Minima a deflationary currency as the overall circulating supply slowly decreases over time. 

The burn serves multiple purposes:
- **A strong incentive to propagate and process a transaction:** All users in the network will benefit from the decrease in supply as coins that are left become  more scarce and therefore more valuable.
- **A method for ordering transactions and regulating on-chain traffic:** Similar to the fee model on other blockchains, the burn serves as a selection method for deciding which unconfirmed transactions will be added to a block. The higher the burn amount in a transaction, the more likely it is that a transaction will be added to a block. 
- **A mechanism for spam prevention by making Denial-of-Service (DoS) attacks expensive:** The burn may be high during periods of heavy traffic or spam and, as it rises, traffic will decrease, self-regulating the system. The burn can be nil or very low when traffic is at manageable levels as the total amount is not important, only the relative burn amount in comparison to other transactions.

