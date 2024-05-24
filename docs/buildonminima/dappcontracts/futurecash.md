---
sidebar_position: 1
---

# Future Cash

## About

Future cash is a simple **time-lock** contract.

The Future Cash smart contract holds Minima, custom tokens, or NFTs until a certain block height, after which only the recipient is able to claim the tokens from the contract.

The recipient is the wallet owner that will be able to claim the tokens once the specified block height has passed. This can be different to the user who initially sent the funds to the contract.  

## Use Cases

- **Savings** - to lock away **your own** funds, preventing you from spending them until your chosen date.
- **Savings for others** - to lock away savings for **others** e.g. kids, only allowing access once a certain amount of time has passed.
- **Proof of inaccessibility** - Lock away project funds to prove they are inaccessible for a certain amount of time.

## Smart Contract


This contract will return `TRUE` if 2 conditions are met when attempting to spend this coin in a transaction:
1. The current block is greater than or equal to state variable `1` of the locked coin - `PREVSTATE(1)` **OR** the age of the locked coin (in blocks) is greater than or equal to state variable `4` of the locked coin - `PREVSTATE(4)`.

 **AND**

2. The input and output coins at the equivalent index of the transaction - `VERIFYOUT` - have the same values for `PREVSTATE(2)` (owner's address), amount, and tokenid. This ensures that the coin is being sent in whole from the contract to its rightful owner.  `FALSE` indicates that the coin state - the PREVSTATEs - are not stored in the coins that are created from the transaction.


```jsx
RETURN (@BLOCK GTE PREVSTATE(1) OR @COINAGE GTE PREVSTATE(4)) AND VERIFYOUT(@INPUT PREVSTATE(2) @AMOUNT @TOKENID FALSE)
```

## Globals & State Variables used

`@` Represents a global variable

`STATE` represents a state variable given at the time the transaction is constructed. Once the transaction has confirmed and the coins are locked in the contract, the state variables are stored in the coin and become the `PREVSTATE` values.

| State Variable | Description |
| --- | --- |
| 1 | The end block height. After this block, the funds will be available to claim from the contract |
| 2 | The owner's 0x wallet address |
| 3 | Contract end time in milli chosen by the user who locked the funds (i.e. sent the funds to the contract) |
| 4 | How many blocks are required to have passed before they become available to claim (calculated). |

```jsx
@BLOCK - The current block height at the time the transaction is attempted
PREVSTATE(1) - The end block height. After this block, the funds will be available to claim from the contract

@COINAGE - How many blocks deep is the coin
PREVSTATE(4) - How many blocks are required to have passed before they become available to claim.

@INPUT - Input number of the coin in the transaction
PREVSTATE(2) - The owner's 0x wallet address
@AMOUNT - Amount of the coin being used as an input to the transaction
@TOKENID - TokenID of the coin being used as an input to the transaction

PREVSTATE(3) - Contract end time in milli chosen by the user who locked the funds (i.e. sent the funds to the contract) 
```

## Contract address

The hash of the contract is: 

0x address: `0xEA8823992AB3CEBBA855D68006F0D05B0C4838FE55885375837D90F98954FA13`<br/>
Mx address: `MxG087AH0HPWAYJPQTQGYEMG03F1K2R1H43HVWYH19NB0RTW3SZWY7Q2F79810N`

<!-- This can be verified by running  -->

Sending Minima or custom tokens to this address will lock them in the Future Cash smart contract and will be unsendable until all contract conditions are met. 

## Sending coins to the contract

To send coins to the Future Cash contract, we can use the `send` command, providing the following parameters:

- `password:` - the node password if locked
- `amount:` - the total amount to send to the Future cash contract
- `address:` - the Future Cash contract address
- `tokenid:` - the tokenid of the token being sent to the contract. Default 0x00 for Minima
- `state:` - list of state variables as defined above
- `burn:` - optional amount of Minima to burn with the transaction

```tsx
send password:
amount: 
address:
tokenid:
state:
burn:
```

## Example

Example send command to lock a coin in the Future cash contract

```jsx
send amount:2 
address:MxG087AH0HPWAYJPQTQGYEMG03F1K2R1H43HVWYH19NB0RTW3SZWY7Q2F79810N
state:{"1":"696347","2":"0x3DC92CD49CA6513AFF6180E49F287B0C8CDF78076CDF05FE6E00E66EFF6CA479","3":"1708390800000","4":"535"}
```

Example coin locked in Future cash contract

```jsx
"coinid":"0xC67DB6138B578FF734D6D68CC7D6C97F7F17A5B96E4D00215390B54F93F5CF8B",
    "amount":"2",
    "address":"0xEA8823992AB3CEBBA855D68006F0D05B0C4838FE55885375837D90F98954FA13",
    "miniaddress":"MxG087AH0HPWAYJPQTQGYEMG03F1K2R1H43HVWYH19NB0RTW3SZWY7Q2F79810N",
    "tokenid":"0x00",
    "token":null,
    "storestate":true,
    "state":[{
      "port":1,
      "type":2,
      "data":"696347"
    },
    {
      "port":2,
      "type":1,
      "data":"0x3DC92CD49CA6513AFF6180E49F287B0C8CDF78076CDF05FE6E00E66EFF6CA479"
    },
    {
      "port":3,
      "type":2,
      "data":"1708390800000"
    },
    {
      "port":4,
      "type":2,
      "data":"535"
    }],
    "spent":false,
    "mmrentry":"512828",
    "created":"695816"
  },
```

## Source code

https://github.com/minima-global/fcash