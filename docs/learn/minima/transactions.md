---
sidebar_position: 2
---

# Transactions


### Transaction Lifecycle
The following diagram explains the basic process from a Transaction to [TxPoW unit](/docs/learn/minima/txpowunits) to Block.

![Transactions](/img/learn/transactionLifecycleSimpleLm.svg#gh-light-mode-only)![Core Concepts](/img/learn/transactionLifecycleSimpleDm.svg#gh-dark-mode-only)

## Transaction Outputs
All transactions create new UTxOs (coins) as outputs, each coin is identifiable with a unique CoinID and consists of
1. a specific amount of Minima and 
2. a script that determines the conditions required to spend the coin. This script is executed when a user attempts to spend the coin in a transaction and must return a value of TRUE to be spendable. [(see Scripting)](/docs/learn/minima/scripting)

Each coin has the following attributes:

| Coin Attribute | Description | Type |
| -------------- | ----------- | ------------- |
| **CoinID** | The globally unique identifier for a coin. The coin id of a new UTxO is hash(first input coin in txn &#124; output_num_in_txn)| 64 byte hash (MiniData)|
| **Amount** | The amount of 'Minima'. Even custom token transactions are just amounts of coloured Minima ([see Coloured Coins](/docs/learn/minima/colouredcoins))| MiniNumber|
| **Address** | The hash of a script. If no custom script is provided,the script will simply be RETURN(SIGNEDBY([PublicKey of coin owner]) i.e. the  transaction must be signed by the coin owner before it can be spent. All addresses are P2SH (Pay to Script Hash).| 64 byte hash (MiniData)|
| **Token ID** | The Token ID. Minima is 0x00. Everything else has a full 64 byte hash. Tokens are created by colouring Minima.| 64 byte hash (MiniData)|
| **Token** | Token Details ([see Coloured Coins](/docs/learn/minima/colouredcoins)) |  |
| **Floating** | True or False. Set when you create a transaction. If True, the Coin ID is ignored so that any valid coin that has the same amount, address and Token ID can be used. | Boolean |
| **Store State** | True or False, depending on whether the state is stored for this coin | Boolean |
| **State** | The state variables (0-255) of the transaction this coin was created in. You can access this data from scripts. | Integer |
| **MMR Entry** | The MMR database entry number for this coin | MMREntryNumber |
| **Spent** | True or False, depending on whether this coin has been spent or not. | Boolean |
| **Created** | The block number this coin was created in. | Integer |

Example coin details:

```
coins relevant:true
{
  "command":"coins",
  "params":{
    "relevant":"true"
  },
  "status":true,
  "response":[{
    "coinid":"0xB76A17B0444D40A90697FCC7EFFFB1917F7B4AC7FD70D7E70323DC560B6A3CF2",
    "amount":"98",
    "address":"0x0B00C23C8B4DFBDEC76FEE908ADF1BD396A5E92DCC826D3ADD26E4140CFA1DC0",
    "tokenid":"0x00",
    "token":null,
    "floating":false,
    "storestate":true,
    "state":[],
    "mmrentry":"439",
    "spent":false,
    "created":"167764"
  }]
}
```
## Transaction Inputs
Transaction inputs are coins (UTxOs) that will be spent in the transaction, identified by the Coin ID. One or more coins may be required depending on the value of the coins owned by the user and the amount they wish to spend. 

> *For example if a user wishes to spend 100 Minima but they only have two coins worth 40 and 90 Minima, they must use both coins as inputs to the transaction and receive change of 30 as a new coin.*

:::note 
When using a wallet application, the wallet will automatically choose which coins to use as inputs, however when constructing transactions manually, relevant coins must be selected to ensure the sum of the inputs is greater than or equal to the sum of the outputs. 
:::

## Transaction Structure

All transactions will have a list of inputs, outputs, state variables, a link hash and a Transaction ID.

To send a transaction, a user must construct it using one or more of their unspent coins as inputs and defining the outputs required.  <br/>
:::tip
The Burn output must be considered when constructing transactions, as this will affect the priority that a transaction has over others in the mempool.
:::
**Inputs:**
* **Unspent coins:** One or more unspent coins (UTxOs) covering the amount that should be spent

**Outputs: **
* **Amounts to send:** One or more amounts with recipient's address specified. New coins will be created for these outputs.
* **Burn:** The amount of Minima to burn with this transaction (optional).
* **Change:** If the total value of the input coins is greater than the value of the outputs (including the Burn), the change output must be defined as the difference to be returned to the user's address. A new coin will be created for this output.

:::note
If a change output is not defined, any difference between the inputs and outputs will be burned, removing that amount from circulation
:::
:::note
Transactions can be constructed in isolation but must be added into a TxPoW unit before it can be mined and propagated across the network.
:::

### State Variables
Transactions also include State Variables for storing public data and previous transaction states to retrieve information for scripts. 0-255 variables are allowed. [(see Scripting)](/docs/learn/minima/scripting)

### Link Hash 

Used to link a Burn amount to a main transaction. The Link Hash in a Burn transaction is the transaction ID of the main transaction it relates to. This means that the burn transaction can only be spent with the transaction it is linked to.  For main transactions, it is set to a default of 0x00.

**Main transaction structure**

| **Transaction ID:** *Hash(Transaction object)* |
| :-----------------------------------------|
| *Inputs* <br /> *Outputs*<br />*State Variables (0-255)*<br />*Linkhash (0x00)* |

**Burn transaction structure**

| **Transaction ID:** *Hash(Transaction object)* |
| :---------------------------------------- |
| *Inputs (matching the main txn)*<br />*Output (amount to burn)*<br />*State Variables (matching the main txn)*<br />*Linkhash (main txn ID)* |


## Transaction Validity

For a transaction to be valid:
1. The sum of inputs must be greater than or equal to the sum of the outputs for each Token ID
2. All inputs and outputs must be valid Minima amounts (between 0-1 billion)
3. All inputs must have unique coin IDs 
4. It must have no more than 256 state variables 

When checking the validity of transactions, the *monotonicity* is checked to determine whether a transaction needs to be checked more than once. 

Scripts of **Monotonic** transactions only need to be checked once i.e. they are either valid or not e.g. a simple RETURN(SIGNEDBY(..))

Scripts of **Non Monotonic** transactions need to be checked multiple times. Any script in a transaction that references global variables @BLKNUM, @BLKDIFF or @INBLKNUM is not monotonic as its validity will change depending on these variables. 




