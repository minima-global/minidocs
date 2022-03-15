---
sidebar_position: 8
---

# Smart Contracts
Minima has its own,Turing Complete, scripting language for creating Smart Contracts. 

Minima, like Bitcoin, uses the UTxO model so writing smart contracts on Minima is quite different to writing them on an Account based model like Ethereum. 
A Minima script (contract) returns TRUE or FALSE. The default is return FALSE, so all scripts must explicitly RETURN TRUE for the transaction to be valid.

A script can run for 512 instructions. An instruction is 1 operation or function.

The process to create a basic Smart Contract is as follows:

1. Write a script that will return TRUE when the funds should be spendable
2. Create the script, determining the **address** of the script. The address is the hash of the script. 
3. Send funds to the script address and set the state variables, this will lock the funds in a coin.
4. Add the coin as an input to a transaction. A transaction in Minima is a set of input coins, a set of output coins and a state variable list from 0-255. Each ‘coin’ has an *amount, address (script hash), tokenid and coinid*. 
5. The transaction will only be valid when the script in the input coin returns TRUE, at which point the amount in the coin can be spent - in full.

A ‘contract’ is the script that locks the funds in a coin and is interchangeable with the word script.

A transaction can be signed by 1 or more public keys - and Signatures can even be added as state variables if you want oracle style contracts. Minima script is case sensitive.

The addition of the state variables in the MMR Proof DB, allow for complex scripts with knowledge of their past to be created. A simple state mechanic for transactional history rather than a global state for ALL transactions.

Each user tracks the coins to an address they possess and all coins that have a public key or address they possess in the STATE or PREVSTATE.

Minima transactions are scriptable Logic Gates, with analogue inputs and outputs, a simple yet powerful control language, and a previous history state mechanic.

Contracts are inherently compatible with Layer 2. 

The scripting language supports SHA2-256 to allow cross-chain hash lock contracts with legacy chains.

Types of Contracts possible:
- Basic Signed 
- Time Lock 
- Multi-sig 
- Complex multi-sig 
- M of N multi-sig 
- Hashed Time Lock (including cross-chain)
- Exchange
- FlashCash
- MAST 

Example multi-sig contract: 
```
scripts action:newscript track:true script:"RETURN SIGNEDBY(0x1539C2B974C1589C6AB3C734AA41D8E7D999759EFE057B047B200E836BA526 8A) AND SIGNEDBY(0xAD25E1E40605A68AFE357ECF83E51FE27EC10013851AE95889A00C695D5B94 02)" 
```

## Token Scripts

Each token has a separate script that must also return TRUE when attempting to spend a UTxO. For instance this could be 'make sure 1% is sent to this address, for a charity coin, 
```
RETURN VERIFYOUT(@INPUT CHARITY_ADDRESS @AMOUNT*0.01 @TOKENID) 
```
or a counter mechanism that checks a counter has been incremented:
```
RETURN STATE(99) EQ INC(PREVSTATE(99))
```
**Both the address script and the Token script must return TRUE.**

A token by default has RETURN TRUE as it's script. This token structure is added to any transaction wishing to use that token so every user can know how many, what scripts, name etc of the Token is correct and valid. 
