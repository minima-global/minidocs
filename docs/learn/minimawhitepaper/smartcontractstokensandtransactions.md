---
sidebar_position: 11
---

# Smart Contracts, Tokens and Transactions

Minima operates a validatory network, like Bitcoin, rather than a computational network, like Ethereum[[18]](/docs/learn/minimawhitepaper/specialthanksto). Computational networks require far greater resources to operate than validatory networks. In fact, the computational resources required far exceed those available to the majority of network participants, hence these networks centralize around larger more powerful nodes. Minima must allow everyone to run a Complete node.
	
- Validation is the minimum amount of useful computation.
- Logic can be computed off-chain and validated on-chain.
- Everyone computing or validating everything does not scale.
- Everyone validating a manageable amount on-chain to enable near-limitless capacity off-chain does scale.

Unlike Bitcoin, Minima natively supports Tokens. Unlike Ethereum, no efficiency is sacrificed when processing tokens. As far as the network is concerned, token transactions are the same as Minima transactions, are stored in the MMR Proof DB and do not increase storage requirements. You prove their existence like you prove your Minima holdings. Tokens can be created by colouring a certain fractional amount of Minima. All scripts applicable to Minima are equally applicable to Tokens.

Transactions on Minima are similar to Bitcoin transactions, yet upgraded in functionality and power. They include a list of inputs, a list of outputs, and some data registers for storing custom data. The sum of the outputs must be less than or equal to the sum of the inputs. Each input has an Address, Amount, TokenID, CoinID and can have various user-defined parameters. Each address is actually a Smart Contract, represented as the hash of a Minima Script. This entire transaction can then be signed by 1 or more Public Keys. When sending a transaction, a user adds the MMR proofs showing that the inputs exist and are unspent, spends ~10 seconds mining, before sending the complete Tx-PoW message across the network. Each transaction is a self contained cryptographic unit that can be verified independently with just the recent MMR root hash found in memory. Very fast and efficient.   

Minima uses a simple yet powerful scripting language. A script will return TRUE or FALSE as to whether an output can or cannot be spent. An empty script returns FALSE.


A standard transaction:
```
RETURN SIGNEDBY ( 0xEFDC56DCA87F )
```

An HTLC (Hashed Time Locked Contract) :
```
IF @BLOCK GT 102453 AND SIGNEDBY ( 0xEFDC56DCA87F ) THEN
                RETURN TRUE
ELSEIF SIGNEDBY ( 0x12345678 ) AND SHA3 ( STATE(0) ) EQ 0x87654321 THEN
                RETURN TRUE
ENDIF
```
 
Many powerful functions including :
 
- **MAST** – Merklized Abstract Syntax Tree, large scripts with short execution paths..
- **VERIFYOUTPUT** – check transaction Outputs, Covenants..
- **VERIFYINPUT** –  check input data, complex multi-token scripts, Dividend payouts..
- **ADDRESS** –  create scripts in script. Recursive Covenants, Vault addresses..
- **CHECKSIG** – check a signature in script, Oracles..
- **PROOF** – Efficient Merkle proof checking..
        	
Minima also includes simple state variables per transaction, accessible to input scripts, so that a sequence of transactions can occur whilst keeping track of changing variables. This allows for more complex ‘stateful’ smart contracts, like Ethereum, whilst maintaining and even increasing the speed and efficiency of Bitcoins’ UTXO model transactions. 
