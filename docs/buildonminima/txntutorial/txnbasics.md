---
sidebar_position: 2
---

# Transaction Basics

At its core Minima keeps track of Coins. That's all it does. Not users, not balances, Coins. 

A coin says - you can spend me if you can unlock the script conditions, and when you spend me, you can send the funds in part or in full to other coins. This is a transaction. 

A transaction reallocates value from some coins to other coins. You can think of a coin as some unit of Smart Value controlled by Smart Contracts.

A transaction in Minima is a set of input coins, a set of output coins and a state variable list from 0-255. An analogue logic gate - Smart Circuitry. 

Each coin has an amount, address, token id and coin id. 

The address is the hash of a script. You send funds to an address that can be spent - in full - if the script returns TRUE when run. 

A ‘contract’ is the script that locks the funds in a coin and is interchangeable with the word 'script'. A transaction can be signed by 1 or more public keys - and Signatures can even be added as state variables if you want oracle style contracts. 

Minima script is case sensitive.

Users only keep track of coins that are relevant to them, and provide an MMR (Merkle Mountain Range) proof of their validity when they spend them. 

Each coin can, and by default does, store the state variables along with its details in an MMR database. These can be referenced in scripts using the PREVSTATE command allowing for a basic memory mechanic. A coin remembers the state of the previous transaction it was in. This way sequences, counters and far more interesting scripts can be achieved.

A transaction can 'burn' Minima, when the sum of the outputs is less than the sum of the inputs, and this is how the ordering of transactions in the mempool is achieved. This is how precedence is given to transactions. You burn more, you are added sooner, as the coins that are left in the system will be proportionally more. That's the incentive to add them first. 

Unlike other chains - these burnt coins are NOT given to the User who finds the block - which happens randomly when they are mining TxPoW transactions. This is important as it removes the incentive to mine for profit and ergo - centralise consensus.