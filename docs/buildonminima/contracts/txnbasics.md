---
sidebar_position: 1
---

# Transaction Basics

At its core Minima keeps track of Coins. That's all it does. Not users, not balances, **coins**. 

## Coins

A coin says - *"You can spend me if you can unlock the script conditions, and when you spend me, you can send the funds in full to other coins".* This is a **transaction**. 

Each coin has an **amount**, **address**, **token id** and **coin id**. The coin address is the **hash of the script**. 

You create a coin when you send funds to a script address, and it can be spent - in full - if the script returns TRUE when run. 

Users only keep track of coins that are relevant to them, and provide an MMR (Merkle Mountain Range) proof of their validity when they spend them. 

:::tip
You can think of a coin as some unit of Smart Value controlled by a Smart Contract (i.e. a script).

A **‘contract’** is the script that locks the funds in a coin and is interchangeable with the word 'script'.
:::

## Transactions

A transaction reallocates value from some coins to other coins. 

A transaction in Minima is a set of **input coins**, a set of **output coins** and a **state variable list from 0-255**. An analogue logic gate - Smart Circuitry. 

A transaction can be **signed** by 1 or more **public keys** (signatures can even be added as state variables if you want oracle style contracts).


## State

Each coin can store the transaction state variables along with its details in an MMR database. These can be referenced in scripts using the PREVSTATE command allowing for a basic memory mechanic. 

A coin remembers the state of the previous transaction it was in. This way, sequences, counters and far more interesting scripts can be achieved.

## Burning Minima

A transaction can 'burn' Minima, when the **sum of the outputs is less than the sum of the inputs**, and this is how the ordering of transactions in the mempool is achieved. This is how precedence is given to transactions. You burn more, you are added sooner, as the coins that are left in the system will be proportionally more. That's the incentive to add them first. 

Unlike other chains - these burnt coins are NOT given to the User who finds the block - which happens randomly when they are mining TxPoW transactions. This is important as it removes the incentive to mine for profit and ergo - centralise consensus.