---
sidebar_position: 4
---

# TxPoW Units (Blocks)

Before a transaction can be posted to the network, it must be added to a **TxPoW unit** with other essential data and ‘mined’.
During the TxPoW creation process, in addition to the main transaction, unconfirmed transactions in the mempool will also be added to the body of the TxPoW unit, serving to further propagate mempool transactions to known peers.

After being mined, a TxPoW unit will be propagated to the network either as a block if it meets the network block difficulty level, or as a basic TxPoW unit which serves only to propagate known unconfirmed transactions. This ensures block creation is a ‘chance’ encounter.

A node can carry out several activities with a TxPoW unit depending on the situation:
### Generate
When a user wishes to send a transaction, or is required to send a **Pulse** to the network, their node will generate (construct) a TxPoW unit containing their transaction and the hashes of other unconfirmed transactions it knows about in the **mempool**. TxPoW units are analogous to compact blocks in Bitcoin.
### Mine 
Before a node can propagate its TxPoW unit to the network, it must mine the TxPoW unit by cycling through different **nonces** (numbers), adding the nonce to the TxPoW header and hashing the result. Once the resulting hash meets the level of difficulty required by the network (~10 seconds work), they can propagate their TxPoW unit to other nodes in the network. 

blue box
**Note:** The **transaction difficulty** sets the minimum amount of work a node must provide before their TxPoW can be propagated across the network (~10 seconds work).This ensures the network has received the transactions in their TxPoW unit, **however this does not automatically mean that their transactions are in a block.** 
TxPoW units only become blocks if, by chance, the **block difficulty** is met in the process of meeting the transaction difficulty. 
### Check 
When a node receives a TxPoW unit from another node on the network, it must check it to ensure its validity before processing and forwarding it on to its peers.
### Process
When the node has checked that a TxPoW unit is valid, it will process it, adding to the chain if it meets the required difficulty level to become a block.

Diagram: The structure of a TxPoW Unit

| TxPoW ID |
| :------------ |
| **Header**<br />Nonce (nonce)<br />TimeMilli (timemilli)<br />Block Number (block)<br />Block Difficulty (blkdiff)<br />Cascade Levels (cascadelevels)<br />Parent Blocks  (superparents)<br />MMR Root (mmr)<br />MMR Total (total)<br />Magic (magic)<br />Body Hash (txbodyhash) | 
| **Body**<br />Random Number (prng)<br />Txn Difficulty (txndiff)<br />A Transaction (txn)<br />A Witness (witness)<br />Burn Txn (burntxn)<br />Burn Witness (burnwitness)<br />Txn List (txnlist) |


## Header

|      Header Field    | Description | 
| -------------------- | -------------------- |
| Nonce | The final nonce (number) that was included in the TxPoW header so that, when hashed, the required difficulty was achieved. 
| TimeMilli | Time this TxPoW was created in milliseconds since the epoch of 1970-01-01T00:00:00Z |
| Block Number | Block height to be used if this TxPoW unit becomes a block |
| Block Difficulty | The Difficulty required for this unit to be considered a valid block |
| Cascade Levels | The maximum number of levels in the Cascade (32) |
| Super Parents | Pointer to its immediate previous block and to the most recent block at each Super level. Used for cascading. |
| MMR Root | The root hash of the MMR (to prove coins existed using a proof and header) |
| MMR Total | The sum of all coins in the system (using a hash sum tree, the total amount of Minima is known every block removing the possibility of inflation bugs) |
| Magic | Chain parameters - the magic numbers: desiredmaxtxpow, desiredmaxtxn, desiredmintxpowwork, maxtxpow,maxtxn,mintxpowwork |
| TxBodyHash | The hash of the TxPoW body |


## Body

| Body Field | Description |
| -------------------- | -------------------- |
| Random Number | A Random number so that everyone is working on a different TxPoW in the pulse | 
| Txn Difficulty | The Difficulty required for this unit to be a valid TxPoW unit. The value that all users try to achieve when cycling through nonce values. |
| A Transaction | Transaction ID for the main transaction. UTxO (coin) inputs, outputs, state variables, linkhash and |
| A Witness | Signature Proofs, MMR Proofs (pointing to a valid unspent MMR entry in the past 24 hours for each input coin used in the txn), Script Proofs (for the various P2SH addresses used) |
| Burn Txn | Inputs, outputs, state variables, linkhash and transaction ID for the Burn transaction paying for the transaction the user is trying to send. Can be empty. |
| Burn Witness | The Witness data for the Burn. Signatures, MMR Proofs and scripts. Can be empty. |
| Txn List | List of the hashes of mempool transactions to propagate. These will become confirmed if this TxPoW unit becomes a block. Only the hash of transactions are added since transactions have already been sent across the network. |

