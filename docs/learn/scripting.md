---
sidebar_position: 12
---

# Scripting
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
scripts action:newscript track:true script:"RETURN SIGNEDBY(0x1539C2B974C1589C6AB3C734AA41D8E7D999759EFE057B047B200E836BA5268A) AND SIGNEDBY(0xAD25E1E40605A68AFE357ECF83E51FE27EC10013851AE95889A00C695D5B9402)" 
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

## Grammar
```
ADDRESS     ::= ADDRESS ( BLOCK )
BLOCK       ::= STATEMENT_1 STATEMENT_2 ... STATEMENT_n
STATEMENT   ::= LET VARIABLE = EXPRESSION |
                LET ( EXPRESSION_1 EXPRESSION_2 ... EXPRESSION_n ) = EXPRESSION |
                IF EXPRESSION THEN BLOCK [ELSEIF EXPRESSION THEN BLOCK]* [ELSE BLOCK] ENDIF |
                WHILE EXPRESSION DO BLOCK ENDWHILE |
                EXEC EXPRESSION |
                MAST EXPRESSION |
                ASSERT EXPRESSION |
                RETURN EXPRESSION
EXPRESSION  ::= RELATION
RELATION    ::= LOGIC AND LOGIC  | LOGIC OR LOGIC  |
                LOGIC XOR LOGIC  | LOGIC NAND LOGIC |
                LOGIC NOR LOGIC  | LOGIC NXOR LOGIC | LOGIC
LOGIC       ::= OPERATION EQ OPERATION  | OPERATION NEQ OPERATION  |
                OPERATION GT OPERATION  | OPERATION GTE OPERATION  |
                OPERATION LT OPERATION  | OPERATION LTE OPERATION  | OPERATION
OPERATION   ::= ADDSUB & ADDSUB | ADDSUB | ADDSUB | ADDSUB ^ ADDSUB | ADDSUB
ADDSUB      ::= MULDIV + MULDIV | MULDIV - MULDIV | MULDIV % MULDIV |
                MULDIV << MULDIV | MULDIV >> MULDIV | MULDIV
MULDIV      ::= PRIME * PRIME | PRIME / PRIME | PRIME
PRIME       ::= NOT PRIME |  NEG PRIME | NOT BASEUNIT | NEG BASEUNIT | BASEUNIT
BASEUNIT    ::= VARIABLE | VALUE | -NUMBER | GLOBAL | FUNCTION | ( EXPRESSION )
VARIABLE    ::= [a-z]+
VALUE       ::= NUMBER | HEX | STRING | BOOLEAN
NUMBER      ::= ^[0-9]+(\\\\.[0-9]+)?
HEX         ::= 0x[0-9a-fA-F]+
STRING      ::= [UTF8_String]
BOOLEAN     ::= TRUE | FALSE
FALSE       ::= 0
TRUE        ::= NOT FALSE
GLOBAL      ::= @BLOCK | @INBLOCK | @BLOCKDIFF | @INPUT |
                @AMOUNT | @ADDRESS | @TOKENID | @COINID |
                @SCRIPT | @TOTIN | @TOTOUT
FUNCTION    ::= FUNC ( EXPRESSION_1 EXPRESSION_2 .. EXPRESSION_n )
FUNC        ::= CONCAT | LEN | REV | SUBSET | GET | OVERWRITE |
                CLEAN | UTF8 | REPLACE | SUBSTR |
                BOOL | HEX | NUMBER | STRING | ADDRESS |
                ABS | CEIL | FLOOR | MIN | MAX | INC | DEC | SIGDIG | POW |
                BITSET | BITGET | BITCOUNT | PROOF | KECCAK | SHA2 | SHA3 |
                SIGNEDBY | MULTISIG | CHECKSIG |
```

## Globals
```
@BLOCK       : Block number this transaction is in
@INBLOCK     : Block number when this output was created
@BLOCKDIFF   : Difference between @BLOCK and INBLOCK
@INPUT       : Input number in the transaction
@COINID      : CoinID of this input
@AMOUNT      : Amount of this input
@ADDRESS     : Address of this input
@TOKENID     : TokenID of this input
@SCRIPT      : Script for this input
@TOTIN       : Total number of inputs for this transaction
@TOTOUT      : Total number of outputs for this transaction
```

## Functions
```
CONACT ( HEX_1 HEX_2 ... HEX_n )
Concatenate the HEX values.

LEN ( HEX|SCRIPT )
Length of the data

REV ( HEX )
Reverse the data

SUBSET ( HEX NUMBER NUMBER )
Return the HEX subset of the data - start - length

OVERWRITE ( HEX NUMBER HEX NUMBER NUMBER)
Copy bytes from the first HEX and pos to the second HEX and pos, length the last NUMBER

GET ( NUMBER NUMBER .. NUMBER )
Return the array value set with LET ( EXPRESSION EXPRESSION .. EXPRESSION )

ADDRESS ( STRING )
Return the address of the script

REPLACE ( STRING STRING STRING )
Replace in 1st string all occurrence of 2nd string with 3rd

SUBSTR ( STRING NUMBER NUMBER )
Get the substring

CLEAN ( STRING )
Return a CLEAN version of the script

UTF8 ( HEX )
Convert the HEX value of a script value to a string

BOOL ( VALUE )
Convert to TRUE or FALSE value

HEX ( SCRIPT )
Convert SCRIPT to HEX

NUMBER ( HEX )
Convert HEX to NUMBER

STRING ( HEX )
Convert a HEX value to SCRIPT

ABS ( NUMBER )
Return the absolute value of a number

CEIL ( NUMBER )
Return the number rounded up

FLOOR ( NUMBER )
Return the number rounded down

MIN ( NUMBER NUMBER )
Return the minimum value of the 2 numbers

MAX ( NUMBER NUMBER )
Return the maximum value of the 2 numbers

INC ( NUMBER )
Increment a number

DEC ( NUMBER )
Decrement a number

POW ( NUMBER NUMBER )
Returns the power of N of a number. N must be a whole number.

SIGDIG ( NUMBER NUMBER )
Set the significant digits of the number

BITSET ( HEX NUMBER BOOLEAN )
Set the value of the BIT at that Position to 0 or 1

BITGET ( HEX NUMBER )
Get the BOOLEAN value of the bit at the position.

BITCOUNT ( HEX )
Count the number of bits set in a HEX value

PROOF ( HEX HEX HEX )
Check the data, mmr proof, and root match. Same as mmrproof on Minima.

KECCAK ( HEX|STRING )
Returns the KECCAK value of the HEX value.

SHA2 ( HEX|STRING )
Returns the SHA2 value of the HEX value.

SHA3 ( HEX|STRING )
Returns the SHA3 value of the HEX value.

SIGNEDBY ( HEX )
Returns true if the transaction is signed by this public key

MULTISIG ( NUMBER HEX1 HEX2 .. HEXn )
Returns true if the transaction is signed by N of the public keys

CHECKSIG ( HEX HEX HEX)
Check public key, data and signature

GETOUTADDR ( NUMBER )
Return the HEX address of the specified output

GETOUTAMT ( NUMBER )
Return the amount of the specified output

GETOUTTOK ( NUMBER )
Return the token id of the specified output

VERIFYOUT ( NUMBER HEX NUMBER HEX )
Verify the specified output has the specified address, amount and tokenid

GETINADDR ( NUMBER )
Return the HEX address of the specified input

GETINAMT ( NUMBER )
Return the amount of the specified input

GETINTOK ( NUMBER )
Return the token id of the specified input

VERIFYIN ( NUMBER HEX NUMBER HEX)
Verify the specified input has the specified address, amount and tokenid

STATE ( NUMBER )
Return the state value for the given number

PREVSTATE ( NUMBER )
Return the state value stored in the MMR data in the initial transaction this input was created. Allows for a state to be maintained from 1 spend to the next

SAMESTATE ( NUMBER NUMBER )
Return TRUE if the previous state and current state are the same for the start and end positions
```

## Examples
```
LET thing = 23
LET ( 12 2 ) = 45.345
LET ( 0 0 1 ) = 0xFF
LET ( 3 ( thing + 1 ) ) = [ RETURN TRUE ]

--

RETURN SIGNEDBY ( 0x12345.. )

--

IF SIGNEDBY ( 0x123456.. ) AND SIGNEDBY ( 0x987654.. ) THEN
   RETURN TRUE
ELSE IF @BLKNUM GT 198765 AND SIGNEDBY ( 0x12345.. ) THEN
   RETURN TRUE
ENDIF

--

LET x = STATE ( 23 )
LET shax = KECCAK ( x )
IF shax EQ 0x6785456.. AND SIGNEDBY ( 0x12345.. ) THEN
  RETURN TRUE
ENDIF

--

EXEC [ RETURN TRUE ]

--

MAST 0xA6657D2133E29B0A343871CAE44224BBA6BB87A972A5247A38A45D3D2065F7E4

--

ASSERT STATE ( 0 ) EQ INC ( PREVSTATE ( 0 ) )

"
}
```

## Terminal Commands

The following commands can be run directly from a Minima Terminal: 

 ; can be used to chain multiple commands<br />
parameter values in **bold** indicate default value

| Command | Required Parameters | Optional Parameters | Description |
| :-------- | :--- | :------------ | :----------- |
| backup | |**file:** <br/>**complete:**true \| **false**  |Backup your node. Uses a timestamped name by default |
| balance | |**address:**Mx.. \| 0x.. <br/> **confirmations:**  |Show your total balance of Minima coins and custom tokens. <br/> **address** - 0x or Mx address to filter by <br/>**confirmations** - number of blocks required for coins to be considered confirmed in your balance |
| burn | | |View number of burn txns and min/median/max/avg Burn metrics for latest 1, 10 and 50 blocks |
| coinexport |**coinid:** | |Export a coin and its proof |
| coinimport |**data:** |**track:** **true** \| false |Import a coin and its MMR proof and keep tracking it |
| coins | |**relevant:** **true** \| false <br/>**sendable:**true \| **false**<br/> **coinid:** <br/>**amount:** <br/>**address:** <br/> **tokenid:**  |Search for coins in the tree. Optional filters. |
| cointrack |**enable:** **true** \| false <br/>**coinid:**  | |Track or untrack the MMR proof for a coin |
| connect |**host:** | |Connect to a network Minima instance using ip:port |
| consolidate |**tokenid:** |**coinage:**3 |Merge multiple coins (UTxOs) into one coins by sending them back to yourself.<br/> **coinage** - set a minimum coinage in blocks, default 3 blocks |
| disconnect |**uid:** | |Disconnect from a connected or connecting host. Use network command to find peer UID. |
| getaddress | | |Get one of your default Minima addresses |
| hash |**data:** |**type:**keccak \| sha2 \| sha3 |Hash the data <br/> **type:** the hashing algorithm |
| hashtest | |**amount:**1000000 |Check the speed of hashing of this device. Option to set the number of hashes. Default 1 million hashes |
| help | | |Show Help. |
| incentivecash | |**uid:** |Show your rewards or specify your Incentive ID for the Incentive Program |
| keys | |**action:list** \| new |Get a list of all your public keys or create a new key |
| maxcontacts |**action:list** \| mls \| add \| remove \| search |**contact:** <br/>**id:** <br/>**publickey:**  |Manage your Maxima contacts. Refresh contacts using the mls service. Add by Contact address, remove by id, search by id or publickey. |
| maxima |**action:info** \| setname \| hosts \| send \| refresh |**name:** <br/>**id:** \| **to:** \| **publickey:** <br/>**application:** <br/>**data:** <br/>**logs:**true \| **false**  |Check your Maxima details (info), <br/>set your name (setname), <br/>view your Maxima hosts (hosts), <br/>send a message (HEX data) (data) to given maxima contact id (id)/full address/public key, provide host:port (application), <br/>enable/disable logs |
| mds | |**action:list** \| install \| uninstall <br/>**file:** <br/>**uid:**  |MiniDAPP System management. List all MiniDapps, install by MiniDAPP file path, uninstall by MiniDAPP uid - can be found in the minidapp URL |
| message |**uid:** |**data:**message |Send a network message to one or all of your direct Minima peers. Use network command to find peer UID. NOT a Maxima command. |
| mmrcreate |**nodes:**[" ",...] | |Create an MMR Tree of data. JSON array of leaf nodes, nodes can be STRING / HEX <br/> e.g. mmrcreate nodes:["RETURN TRUE","RETURN FALSE"] |
| mmrproof |**data:** <br/>**proof:** <br/>**root:**  | |Check an MMR proof. <br/>**data** - Leaf node data, data can be STRING / HEX <br/> **proof** - mmr proof for data (from mmrcreate output)<br/>**root** - mmr root for data  (from mmrcreate output) <br/>e.g. mmrproof data:"RETURN TRUE" proof:0x… root:0x… |
| network | |**action:list** \| restart |Show network connections or restart |
| newaddress | | |Create a new address that will not be not used for anything else (not a default change address) |
| newscript |**script:** |**track:true** \| false |Add a new custom script <br/> **track** - keep track of on chain activity with this script |
| printtree | |**depth:**32 <br/>**cascade:**true \| **false** |Print a tree representation of the blockchain. <br/> **depth** - number of blocks <br/> **cascade** - Print the Cascading chain |
| quit | | |Shutdown Minima |
| restore |**file:** | |Restore the entire system. |
| rpc |**enable:**true \| false | |Enable and disable RPC on port 9002 |
| runscript |**script:** |**clean:true** \| false <br/>**state:**{"port":"value",..} <br/>**prevstate:**{"port":"value",..} <br/>**globals:**{"@GLOBALVAR":"value",...} <br/>**signatures:**[" ",...] <br/>**extrascripts:**{"script":"scriptproof",...}  |Run a script with the defined parameters<br/>**clean** - clean the script<br/>**state** - JSON Object, state variable values for the script<br/>**prevstate** - JSON Object, previous state variables values for the script <br/> **globals** -  JSON Object, global variable values for the script e.g. globals:{"@BLOCK":"101"} signatures: JSON Array <br/> **extrascripts** - JSON Object |
| scripts | |**address:** |Search scripts<br/>**address** - script address |
| send |**address:**Mx.. \| 0x..<br/>**amount:** |**tokenid:** <br/>**state:**{"port":"value"} <br/>**burn:** <br/>**split:**  |Send Minima or Tokens to an address. <br/>Options to add state variable as a JSON object, set a burn amount for the txn or split inputs to a chosen number of new coins |
| sign |**publickey:** <br/>**data:**  | |Sign the HEX data with the publickey |
| status | |**clean:**true \| **false** |Show general status for Minima and optionally clean RAM |
| tokencreate |**name:** <br/>**amount:** |**decimals:**8 <br/>**script:** <br/>**state:**{"port":"value",..} <br/>**signtoken:** <br/>**webvalidate:** <br/>**burn:**  |Create a custom token (coloured Minima Coins)<br/>**name** - can be a STRING or JSON Object<br/>**decimals** - specify how many decimal places the token will have (default 8, max 16)<br/>**script** - add a custom script that must return TRUE when spending the token,<br/>**state variables** - JSON object <br/>**signtoken** - provide a public key to sign the token with,<br/>**webvalidate** - provide a URL storing the tokenID for validation purposes<br/>**burn** - amount to burn in the tokencreate txn |
| tokens | |**tokenid:** |List tokens on the chain. Option to filter by token id |
| tokenvalidate |**tokenid:** | |Validate the signature and web link in a token. Web link must contain token ID. |
| trace |**enable:**true \| **false** |**filter:**STRING |Show the message stacks of the internal Minima Engine with optional filter string |
| tutorial | | |Show the complete Grammar for Minima KISSVM scripting |
| txnbasics |**id:** | |Automatically set the MMR proofs and scripts for a txn |
| txncheck |**id:** | |Show details about the transaction |
| txnclear |**id:** | |Clear ALL the Witness data |
| txncreate |**id:** | |Create a transaction |
| txndelete |**id:** | |Delete this custom transaction |
| txnexport |**id:** |**file:** |Export a transaction as HEX or to a file |
| txnimport | |**id:** <br/> **file:** <br/>**data:**  |Import a transaction as a file or HEX data. Optionally specify the txn id |
| txninput |**id:** |**coinid:** <br/>**coindata:** <br/>**floating:**true \| false <br/>**address:** <br/>**amount:**<br/>**tokenid:** <br/>**scriptmmr:true** \| false  |Add a coin as an input to a transaction. Option to specify a coin using a Coin ID or exported coin data. Floating flag indicates an eltoo txn. If no coin is specified, the address (of a script), amount and token ID can be specified to create a new coin. Script MMR flag indicates whether to add script and coin proofs, default TRUE |
| txnlist | | |List current custom transactions |
| txnoutput |**id:** <br/>**amount:** <br/>**address:**  |**tokenid:** <br/>**storestate:true** \| false  |Create a transaction output. Specify txn id, output amount and recipient address. Option to specify custom token ID, default is 0x00 (Minima), store state variables flag, default TRUE |
| txnpost |**id:** |**auto:true** \| false <br/>**burn:**  |Post a transaction. Option to automatically set the Scripts and MMR. Optional Burn amount for the transaction |
| txnscript |**id:** <br/>**scripts:**{}  | |Add scripts to a txn. Specify txn id and JSON list of scripts with optional proof. {""script"":""proof""} with optional proof value for MAST scripts created with mmrcreate E.g. txnscript id:txnmast scripts:{""RETURN TRUE"":""""} |
| txnsign |**id:** <br/>**publickey:**0x.. \| auto  | |Sign a transaction. Specify txn id. Can use auto parameter for publickey if all coin inputs are simple, otherwise specify the correct publickey |
| txnstate |**id:** <br/>**port:** <br/>**value:**  | |Add a state variable. Specify txn id, state variable port number and state variable value. |
| txpow |**txpowid:** |**block:** <br/> **address:**Mx.. \| 0x.. |Search for a specific TxPoW. Option to specify block number or address |
| vault |**action:**seed \| lock \| unlock |**seed:** |BE CAREFUL. Show base seed, lock to wipe your private keys, unlock to restore your private keys |
| verify |**publickey:** <br/>**data:** <br/>**signature:**  | |Verify a signature with the HEX data and public key |
| webhooks | |**action:list** \| add \| remove \| clear <br/>**hook:**url  |Add a web hook URL that is called with Minima events as they happen |