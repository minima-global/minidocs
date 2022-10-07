---
sidebar_position: 4
---

# TxPoW Units & Blocks

The **TxPoW unit** is the main building block of the Minima Blockchain. <br/>
Transactions are included in TxPoW units which have the potential to become blocks added to the chain.


## TxPoW Units

Before a transaction can be posted to the network, it must be added to a **TxPoW unit** with other essential data and a small amount of ‘work’ must be done i.e. it must be ‘mined’.

During the TxPoW creation process, in addition to the main transaction, unconfirmed transactions in the mempool will also be added to the body of the TxPoW unit, serving to further propagate mempool transactions to known peers.

After being mined, a TxPoW unit will be propagated to the network either as a block if it meets the network block difficulty level, or as a basic TxPoW unit which serves only to propagate known unconfirmed transactions. This ensures block creation is a ‘chance’ encounter.

A node can carry out several activities with a TxPoW unit depending on the situation:

**Generate:** When a user wishes to send a transaction, or is required to send a **Pulse** to the network, their node will generate (construct) a TxPoW unit containing their transaction and the hashes of other unconfirmed transactions it knows about in the **mempool**. TxPoW units are analogous to compact blocks in Bitcoin [(see Constructing TxPoW Units).](/docs/learn/minima/miningconsensus#constructing-txpow-units)

**Mine:** Before a node can propagate its TxPoW unit to the network, it must mine the TxPoW unit by cycling through different **nonces** (numbers), adding the nonce to the TxPoW header and hashing the result. Once the resulting hash meets the level of difficulty required by the network (~1 second work), they can propagate their TxPoW unit to other nodes in the network.

:::note Note
The **transaction difficulty** sets the minimum amount of work a node must provide before their TxPoW can be propagated across the network (~1 second work).This ensures the network has received the transactions in their TxPoW unit, **however this does not automatically mean that their transactions are in a block.** 

TxPoW units only become blocks if, by chance, the **block difficulty target** is met in the process of meeting the transaction difficulty target. 
:::

**Check:** When a node receives a TxPoW unit from another node on the network, it must check it to ensure its validity before processing and forwarding it on to its peers.

**Process:** When the node has checked that a TxPoW unit is valid, it will process it, creating a **TxBlock** and adding it to the chain as a node in the **TxPoW tree** if it meets the required difficulty level to become a block.

Diagram: The structure of a TxPoW Unit

| **TxPoW ID (Hash[Header])** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
| :-------------------------		 |
| **Header**<br />*Nonce*<br />*ChainID*<br />*TimeMilli*<br />*Block Number*<br />*Block Difficulty*<br />		*Cascade Levels*	<br />*Parent Blocks*<br />*MMR Root*<br />*MMR Total*<br />*Magic*<br />*Body Hash* | 
| **Body**<br />*Random Number*<br />*Txn Difficulty*<br />*A Transaction*<br />*A Witness*<br />*Burn Txn*<br />*Burn Witness*<br />*Txn List* |


**Header**

| Header Field | Description | Size/Format |
| :------------| :-----------| :-----------|
| **Nonce** | The final nonce (number) that was included in the TxPoW header so that, when hashed, the required difficulty was achieved. | MiniNumber |
| **Chain ID** | The Chain ID - This defines the rules this block was made under, MUST be 0x01 | MiniData |
| **TimeMilli** | Time this TxPoW was created in milliseconds since the epoch of 1970-01-01T00:00:00Z | MiniNumber |
| **Block Number** | Block height to be used if this TxPoW unit becomes a block | MiniNumber |
| **Block Difficulty** | The Difficulty required for this unit to be considered a valid block | MiniData |
| **Cascade Levels** | The maximum number of levels in the Cascade (32) | MiniData array |
| **Super Parents** | Pointer to its immediate previous block and to the most recent block at each Super level. Used for cascading. | MiniData List |
| **MMR Root** | The root hash of the MMR (to prove coins existed using a proof and TxPoW header) | MiniData |
| **MMR Total** |  The sum of all coins in the system (using a hash sum tree, the total amount of Minima is known every block removing the possibility of inflation bugs) | MiniNumber |
| **Magic** | Chain parameters - the magic numbers: CurrentMaxTxPoWSize,CurrentMaxTxnPerBlock,CurrentMinTxPoWWork,CurrentMaxKISSVMOps | Magic |
| **TxBodyHash** | The hash of the TxPoW body | MiniData |

**Body**

| Body Field | Description | Type |
| :------------| :-----------| :-----------|
| **Random Number** | A Random number so that everyone is working on a different TxPoW in the pulse  | MiniData |
| **Txn Difficulty** | The Difficulty required for this unit to be a valid TxPoW unit. The value that all users try to achieve when cycling through nonce values. | MiniData |
| **Transaction** | Transaction ID for the main transaction. UTxO (coin) inputs, outputs, state variables, linkhash | Transaction| 
| **Witness** | Signature Proofs&#59;Coin Proofs (pointing to a valid unspent MMR entry in the past 24 hours for each input coin used in the txn); Script Proofs (for the various P2SH addresses used) | Witness |
| **Burn Txn** | Inputs, outputs, state variables and linkhash for the Burn transaction paying for the transaction the user is trying to send. Can be empty. | Transaction |
| **Burn Witness** | The Witness data for the Burn. Signatures, MMR Proofs and scripts. Can be empty. | Witness |
| **Txn List** | List of the hashes of mempool transactions to propagate. These will become confirmed if this TxPoW unit becomes a block. Only the hash of transactions are added since transactions have already been sent across the network. | MiniData array |

The default maximum size of a TxPoW unit is 64MB.

### Witness
A Witness provides three proofs that prove a transaction is valid. Each proof is stored in an MMR tree. It has the following attributes:

| Witness Attribute | Description | Type |
| :------------| :-----------| :-----------|
| **SignatureProofs** | The MMR Proofs for the Signatures | ArrayList&#60;Signature&#62; | 
| **CoinProofs** | The MMR Proofs that each input Coin is valid and unspent | ArrayList&#60;CoinProof&#62; |
| **ScriptProofs** | The MMR Proofs for Scripts used in the transactions | ArrayList&#60;ScriptProof&#62; |

## TxBlocks (Blocks)
TxBlocks are TxPoW that become blocks and get added to the blockchain. TxBlocks can also be referred to as SyncBlocks as they are required for syncing when a new user joins (or existing users rejoin) the network.

They include the following details:

| TxBlock Attribute | Description | Type |
| :------------| :-----------| :-----------|
| **TxPoW** | The TxPoW object that became this block | TxPoW |
| **Previous Peaks** | The MMR Peaks from the previous block | ArrayList&#60;MMREntry&#62; |
| **Spent Coins** | The CoinProofs of all the input (spent) coins, unspent as of the last block | ArrayList&#60;CoinProof&#62; |
| **New Coins** | A list of all the newly created coins | ArrayList&#60;Coin&#62; |