---
sidebar_position: 9
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
@INPUT       : Input index of a coin used in the transaction. First input coin has an index of 0.
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

