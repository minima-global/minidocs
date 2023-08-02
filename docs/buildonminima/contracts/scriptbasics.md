---
sidebar_position: 2
---

# Scripting Basics

Minima has its own, Turing Complete, scripting language for creating Smart Contracts - **KISS VM**. 

Minima, like Bitcoin, uses the [UTxO model](/docs/learn/minima/coreconcepts#utxo-model) so writing smart contracts on Minima is quite different to writing them on an Account based model like Ethereum. 

Every UTxO (i.e. coin) for Minima, custom tokens or NFTs is associated with a Minima script - a contract - which can either return **TRUE** or **FALSE** when used in a transaction. 

The default is return FALSE, so all scripts must explicitly return TRUE for the transaction to be valid.

The default script for a coin is 

```
RETURN SIGNEDBY(0xFFEE67F7C..)
```

where `0xFFEE67F7C..` is the public key of the owner of the coin.

This default script will only return TRUE when a transaction attempting to spend this coin has been signed by the coin's owner.

Each user tracks the coins that 
- exist at addresses they possess 
- have a public key or address they possess in the transaction STATE or PREVSTATE (an existing coin's state).

When using any coin as an input to a transaction, the transaction will only be valid if the coin's script and the [token script](/docs/buildonminima/contracts/tokenscripts) both return TRUE, at which point the amount in the coin can be spent in full.

Contracts are inherently compatible with Layer 2. 

:::tip good to know
- Minima scripts are case sensitive.

- A script can run for 1024 instructions. An instruction is 1 operation or function.

- Maximum stack depth : 64 

- Maximum number of function parameters : 32

- Maximum size of String or HEX value : 64kb

- Maximum bit shift for HEX : 256
:::