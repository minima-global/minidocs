---
sidebar_position: 2
---

# Vestr

## About

Vestr is a smart contract that releases coins to a wallet in equal amounts at specified time intervals e.g. daily, weekly, monthly over a set period of time - a vesting contract.

## Use Cases

- **Vesting contracts for investors** - to lock away **investor coins** according to a vesting schedule, to be released equally over a certain time period.
- **Pocket money** - to lock away a set amount of coins, releasing them at a predefined schedule.
- **Proof of inaccessibility** - to lock away project funds to prove they are only released at certain intervals. (This is known as TVL, this increases a project’s liability)

## Smart Contract

Below is the Vestr smart contract. The hash of this script is the address that coins can be sent to, along with defined state variables, to create the vesting contract.

`@` Represents a global variable

`PREVSTATE` represents the state variables stored in the coin that is locked in the Vestr contract

`STATE` represents a state variable given at the time the transaction is constructed

```jsx
  LET unlockaddress = PREVSTATE(0) // withdrawing address of contract
  LET totallockedamount = PREVSTATE(1) // the original total amount locked
  LET startblock = PREVSTATE(2) // the starting block of the contract
  LET finalblock = PREVSTATE(3) // the final block of the contract
  LET minblockwait = PREVSTATE(4) // the minimum block time we must wait between each collection

  ASSERT SAMESTATE(0 8) // Ensure that all state variables are the same transaction to transaction

  ASSERT PREVSTATE(199) EQ STATE(199) // Make sure that state variables 199 -> 199 are the same

  // If current block time greater than the final then allow collection for all
  IF @BLOCK GTE finalblock THEN
    IF VERIFYOUT (@INPUT unlockaddress @AMOUNT @TOKENID false) THEN RETURN TRUE ENDIF
  ENDIF

  // If current block less than the starting block then reject execution
  IF @BLOCK LT startblock THEN RETURN FALSE ENDIF

  // If the coin's age is less than the minimum block time wait then reject execution
  IF @COINAGE LT minblockwait THEN RETURN FALSE ENDIF

	// calculate the total duration of the contract  
  LET totalduration = finalblock - startblock

  // If the total duration is less than zero then that means the contract has finished
  // now allow them to collect the full amount
  IF totalduration LTE 0 THEN 
    LET blockamount = @AMOUNT 
  ELSE
  // otherwise make it so they can collect a partial according to the duration
    LET blockamount = SIGDIG(2 (totallockedamount / totalduration))
  ENDIF

  // We use SIGDIG(2 (amount)) which returns us the amount to 2 significant digits
  // this will evade mis-calculations and ignores the less significant digits
  // in the total amount they can collect
  // this is done because sometimes as they are constructing the contract
  // the block time recorded in this contract vs real time changes
  // and so this will error the contract

  // Let's calculate how much they can collect on this block
  LET owedamounttime = @BLOCK - startblock
  LET owedamountminima = owedamounttime * blockamount
  LET alreadycollected = totallockedamount - @AMOUNT
  LET cancollect = SIGDIG(2 (owedamountminima - alreadycollected))

  // If the cancollect amount is less than 0 then reject
  IF cancollect LTE 0 THEN RETURN FALSE ENDIF

  // If the cancollect is greater than the coin amount then let them collect all
  IF cancollect GT @AMOUNT THEN LET cancollect = @AMOUNT ENDIF

  // Let's verify all the outputs are valid
  LET payout = GETOUTAMT(@INPUT)

  IF GETOUTADDR(@INPUT) NEQ unlockaddress THEN RETURN FALSE ENDIF //If the output coin is not being sent to the unlock address, return FALSE
  IF GETOUTTOK(@INPUT) NEQ @TOKENID THEN RETURN FALSE ENDIF //If the output coin does not match the tokenid of the input, return FALSE
  IF payout GT cancollect THEN RETURN FALSE ENDIF //If the amount to payout is greater than the amount available to collect, return FALSE
  IF GETOUTKEEPSTATE(@INPUT) NEQ FALSE THEN RETURN FALSE ENDIF //If the output coin does not have a storestate value of FALSE, return FALSE

  LET change = @AMOUNT - payout

  // If there is no change then ignore check
  IF change LTE 0 THEN RETURN TRUE ENDIF

  // Now verify that the opposing output is true
  RETURN VERIFYOUT(@INPUT+1 @ADDRESS change @TOKENID TRUE)
```

## State Variables

The following state variables must be provided with the transaction

| State Variable | Description |
| --- | --- |
| 0 | Collector’s address |
| 1 | Locking up amount |
| 2 | Start contract block height |
| 3 | End contract block height |
| 4 | Minimum time user must wait between collections (Blocks) |
| 5 | Current time (unix) |
| 6 | Starting block (unix) |
| 7 | Grace period (unix) (This is state variable 4 but in unix) |
| 8 | End block (unix) |
| 199 | Unique Identifier for Contract |

## Contract Address

0x address: `0x3C432D5099AB27EA901079EF54D9A97AB4DB3BD1CFFF670296C31B7C83C1C8BE` <br/>
Mx address: `MxG081S8CMY16DB4VY9043PTTADJABQMJDJNKEFVTJG55M33DU87GE8NQKDQ4CM`


## Calculations

```jsx
// This is a smart contract script written just to use the
// checkMaths Minima command to do the calculation for us using KISSVM Math
// This will ensure precision

  LET totallockedamount=PREVSTATE(1) 
  LET startblock=PREVSTATE(2) 
  LET finalblock=PREVSTATE(3) 
  LET minblockwait=PREVSTATE(4) 
  LET mustwaitblocks="0"
  LET mustwait= (@BLOCK - @COINAGE) GT "0" AND minblockwait GT (@BLOCK - @COINAGE)
  LET contractexpired = @BLOCK GTE finalblock
  IF mustwait EQ TRUE THEN LET mustwaitblocks=minblockwait - (@BLOCK - @COINAGE) ENDIF
  
  LET coinsage=@COINAGE  
  LET cliffed=@BLOCK LT startblock 
  LET totalduration=finalblock-startblock 
  IF totalduration LTE 0 THEN LET blockamount=@AMOUNT ELSE LET blockamount=SIGDIG(2 (totallockedamount/totalduration)) ENDIF 
  LET owedamounttime=@BLOCK-startblock 
  LET owedamountminima=owedamounttime*blockamount 
  LET alreadycollected=totallockedamount-@AMOUNT 
  LET cancollect=SIGDIG(2 (owedamountminima - alreadycollected)) 
  IF cancollect GT @AMOUNT THEN LET cancollect=@AMOUNT ENDIF 
  LET change=@AMOUNT-cancollect LET totalsum = change + cancollect LET totalinput = @AMOUNT
  
  IF contractexpired EQ TRUE THEN LET mustwait=FALSE ENDIF
  IF contractexpired EQ TRUE THEN LET cancollect=@AMOUNT ENDIF
```

We then use the `runscript` method to calculate this for us, this **only** runs the calculation

```jsx
// you add the script we mentioned above, the previous state variables (stored in the coin) as if it was the actual coin, and we add the globals that the contract requires, e.g @BLOCK
// This contract requires globals: @AMOUNT, @BLOCK, @COINAGE 
runscript script:"theAboveScript" prevstate:addAllPreviousState globals:addAllGlobals
```

## Sending coins to the contract

To send coins to the Vestr contract, we can use the `send` command, providing the following parameters:

- `debug:false` - debug logs off
- `password:` - the node password if locked
- `amount:` - the total amount to send to the Vestr contract
- `address:` - the Vestr contract address
- `tokenid:` - the tokenid of the token being sent to the contract. Default 0x00 for Minima
- `state:` - list of state variables as defined above
- `burn:` - optional amount of Minima to burn

```tsx
send debug:false 
password: 
amount: 
address: 
tokenid: 
state:{"0":"address","1":"amount","2":"startContractBlockHeight", "3":"endContractBlockHeight","4":"minimumTimeUserMustWaitToCollectAgain","5":"currenttime","6":"startblockunixtime","7":"graceperiodunix","8":"endblockunixtime", "199":"contractuid"
burn:
```

## Example

Example coin locked in Vestr contract

```jsx
 {
    "coinid":"0x8102204B758D6B3FBD755B3B599042FB78D34936F0D0F22FD380719033A42CFD",
    "amount":"450",
    "address":"0x3C432D5099AB27EA901079EF54D9A97AB4DB3BD1CFFF670296C31B7C83C1C8BE",
    "miniaddress":"MxG081S8CMY16DB4VY9043PTTADJABQMJDJNKEFVTJG55M33DU87GE8NQKDQ4CM",
    "tokenid":"0x00",
    "token":null,
    "storestate":true,
    "state":[{
      "port":0,
      "type":1,
      "data":"0x73555898D7E4DD6C1B45864A61C952DB3F05FBA300BDDB381A2F219E999F7061"
    },
    {
      "port":1,
      "type":2,
      "data":"450"
    },
    {
      "port":2,
      "type":2,
      "data":"507343"
    },
    {
      "port":3,
      "type":2,
      "data":"2373583"
    },
    {
      "port":4,
      "type":2,
      "data":"311040"
    },
    {
      "port":5,
      "type":2,
      "data":"1698927118376"
    },
    {
      "port":6,
      "type":2,
      "data":"1698927118376"
    },
    {
      "port":7,
      "type":2,
      "data":"4320"
    },
    {
      "port":8,
      "type":2,
      "data":"1793621518376"
    },
    {
      "port":199,
      "type":1,
      "data":"0x155E60B2D962F22EBC578742C80BA4BD144B4C676FAA05738AF239A802C63DF2"
    }],
    "spent":false,
    "mmrentry":"444191",
    "created":"507345"
  }
```

## Source code

https://github.com/minima-global/vestr/