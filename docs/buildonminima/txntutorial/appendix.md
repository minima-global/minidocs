---
sidebar_position: 8
---

# Appendix

Here is a breakdown of the simple and complete KISSVM language.

## Grammar


| Grammar | Description |
| :--- | :------------------------------- |
| ADDRESS | ADDRESS ( BLOCK ) |
| BLOCK | STATEMENT_1 STATEMENT_2 ... STATEMENT_n |
| STATEMENT | LET VARIABLE = EXPRESSION **\|** <br/> LET ( EXPRESSION_1 EXPRESSION_2 ... EXPRESSION_n ) = EXPRESSION **\|**<br/> IF EXPRESSION THEN BLOCK [ELSEIF EXPRESSION THEN BLOCK]* [ELSE BLOCK] ENDIF **\|**<br/> WHILE EXPRESSION DO BLOCK ENDWHILE **\|**<br/> EXEC EXPRESSION **\|** <br/>MAST EXPRESSION **\|** <br/>ASSERT EXPRESSION **\|** <br/>RETURN EXPRESSION |
| EXPRESSION | RELATION |
| RELATION |  LOGIC AND LOGIC  **\|**  LOGIC OR LOGIC  **\|** <br/> LOGIC XOR LOGIC  **\|**  LOGIC NAND LOGIC **\|**<br/> LOGIC NOR LOGIC  **\|** LOGIC NXOR LOGIC **\|** LOGIC<br/>
| LOGIC | OPERATION EQ OPERATION  **\|** OPERATION NEQ OPERATION  **\|** <br/>OPERATION GT OPERATION  **\|** OPERATION GTE OPERATION  **\|** <br/>OPERATION LT OPERATION  **\|** OPERATION LTE OPERATION  **\|** OPERATION |
| OPERATION | ADDSUB & ADDSUB **\|** <br/>ADDSUB \| ADDSUB **\|** <br/> ADDSUB ^ ADDSUB **\|** <br/> ADDSUB |
| ADDSUB | MULDIV + MULDIV **\|** <br/> MULDIV - MULDIV **\|** <br/> MULDIV % MULDIV **\|**<br/> MULDIV &lt;&lt; MULDIV **\|** <br/> MULDIV >> MULDIV **\|** <br/>MULDIV |
| MULDIV | PRIME * PRIME **\|**<br/> PRIME / PRIME **\|** <br/>PRIME |
| PRIME | NOT PRIME **\|**  <br/>NEG PRIME **\|** <br/> ~PRIME **\|**<br/> BASEUNIT |
| BASEUNIT | VARIABLE **\|** VALUE **\|** -NUMBER **\|** GLOBAL **\|** FUNCTION **\|** ( EXPRESSION ) |
| VARIABLE | [a-z]+ |
| VALUE | NUMBER **\|** HEX **\|** STRING **\|** BOOLEAN |
| NUMBER | ^[0-9]+(\\.[0-9]+)? |
| HEX | 0x[0-9a-fA-F]+ |
| STRING | [UTF8_String] |
| BOOLEAN | TRUE **\|** FALSE |
| FALSE | 0 |
| TRUE | NOT FALSE |
| GLOBAL | @BLOCK **\|** @BLOCKMILLI **\|** @CREATED **\|** @COINAGE **\|** @INPUT **\|**<br/> @AMOUNT **\|** @ADDRESS **\|** @TOKENID **\|** @COINID **\|** <br/> @SCRIPT **\|** @TOTIN **\|** @TOTOUT |
| FUNCTION | FUNC ( EXPRESSION_1 EXPRESSION_2 .. EXPRESSION_n ) |
| FUNC | CONCAT **\|** LEN **\|** REV **\|** SUBSET **\|** GET **\|** EXISTS **\|** OVERWRITE **\|** <br/> REPLACE **\|** SUBSTR **\|** ADDRESS **\|** SETLEN **\|** <br/> BOOL **\|** HEX **\|** NUMBER **\|** STRING **\|** UTF8 **\|** ASCII **\|**   <br/> ABS **\|** CEIL **\|** FLOOR **\|** MIN **\|** MAX **\|** INC **\|** DEC **\|** SIGDIG **\|** POW **\|** SQRT **\|**<br/> BITSET **\|** BITGET **\|** BITCOUNT **\|** PROOF **\|** SHA2 **\|** SHA3 **\|** <br/> SIGNEDBY **\|** MULTISIG **\|** CHECKSIG **\|** <br/>  FUNCTION **\|** SUMINPUT **\|** SUMOUTPUT **\|** <br/> GETOUTADDR **\|** GETOUTAMT **\|** GETOUTTOK **\|** GETOUTKEEPSTATE **\|** VERIFYOUT **\|** <br/>  GETINADDR **\|** GETINAMT **\|** GETINTOK **\|** GETINID **\|** VERIFYIN **\|** <br/> STATE **\|** PREVSTATE **\|** SAMESTATE |


## Globals

| Global | Description |
| --- | --- |
| @BLOCK | the current block number | 
| @BLOCKMILLI | the current block time in milliseconds since Jan 1 1970 |
| @CREATED | the block this coin was created in |
| @COINAGE | the difference in @BLOCK and @CREATED |
| @INPUT | Input index of a coin used in the transaction. First input coin has an index of 0. |
| @COINID | the coinid |
| @AMOUNT | the amount |
| @ADDRESS | the address |
| @TOKENID | the tokenid |
| @SCRIPT | the script of this coin |
| @TOTIN | the total number of input coins |
| @TOTOUT | the total number of output coins |
 
## Functions

| Function | Description |
| --- | --- |
| CONCAT ( HEX_1 HEX_2 ... HEX_n ) | Concatenate the HEX values. | 
| LEN ( HEX / SCRIPT ) | Length of the data |
| REV ( HEX ) | Reverse the data |
| SUBSET ( HEX NUMBER NUMBER ) | Return the HEX subset of the data - start - length |
| OVERWRITE ( HEX NUMBER HEX NUMBER NUMBER) | Copy bytes from the first HEX and pos to the second HEX and pos, length the last NUMBER |
| GET ( NUMBER NUMBER .. NUMBER ) | Return the array value set with LET ( EXPRESSION EXPRESSION .. EXPRESSION )1 |
| EXISTS ( NUMBER NUMBER .. NUMBER ) | Does the array value exists |
| ADDRESS ( STRING ) | Return the address of the script |
| REPLACE ( STRING STRING STRING ) | Replace in 1st string all occurrence of 2nd string with 3rd |
| SUBSTR ( NUMBER NUMBER STRING) | Get the substring |
| CLEAN ( STRING ) | Return a CLEAN version of the script |
| UTF8 ( HEX ) | Convert the HEX value to a UTF8 string |
| ASCII ( HEX ) | Convert the HEX value to an ASCII string |
| BOOL ( VALUE ) | Convert to TRUE or FALSE value |
| HEX ( SCRIPT ) | Convert SCRIPT to HEX |
| NUMBER ( HEX ) | Convert HEX to NUMBER |
| STRING ( HEX ) | Convert a HEX value to SCRIPT |
| ABS ( NUMBER ) | Convert SCRIPT to HEX |
| NUMBER ( HEX ) | Return the absolute value of a number |
| CEIL ( NUMBER ) | Return the number rounded up |
| FLOOR ( NUMBER ) | Return the number rounded down |
| MIN ( NUMBER NUMBER ) | Return the minimum value of the 2 numbers |
| MAX ( NUMBER NUMBER ) | Return the maximum value of the 2 numbers |
| INC ( NUMBER ) | Increment a number |
| DEC ( NUMBER ) | Decrement a number |
| POW ( NUMBER NUMBER ) | Returns the power of N of a number. N must be a whole number. |
| SIGDIG ( NUMBER NUMBER ) | Set the significant digits of the number |
| BITSET ( HEX NUMBER BOOLEAN ) | Set the value of the BIT at that Position to 0 or 1 |
| BITGET ( HEX NUMBER ) | Get the BOOLEAN value of the bit at the position. |
| BITCOUNT ( HEX ) | Count the number of bits set in a HEX value |
| PROOF ( HEX HEX HEX ) | Check the data, mmr proof, and root match. Same as mmrproof on Minima. |
| KECCAK ( HEX \| STRING ) | Returns the KECCAK value of the HEX value. |
| SHA2 ( HEX \| STRING ) | Returns the SHA2 value of the HEX value. |
| SHA3 ( HEX \| STRING ) | Returns the SHA3 value of the HEX value. |
| SIGNEDBY ( HEX ) | Returns true if the transaction is signed by this public key |
| MULTISIG ( NUMBER HEX1 HEX2 .. HEXn ) | Returns true if the transaction is signed by N of the public keys |
| CHECKSIG ( HEX HEX HEX) | Check public key, data and signature |
| GETOUTADDR ( NUMBER ) | Return the HEX address of the specified output |
| GETOUTAMT ( NUMBER ) | Return the amount of the specified output |
| GETOUTTOK ( NUMBER ) | Return the token id of the specified output |
| GETOUTKEEPSTATE ( NUMBER ) | Is the output keeping the state |
| VERIFYOUT ( NUMBER HEX NUMBER HEX BOOL ) | Verify the output has the specified address, amount, tokenid and keepstate |
| GETINADDR ( NUMBER ) | Return the HEX address of the specified input |
| GETINAMT ( NUMBER ) | Return the amount of the specified input |
| GETINTOK ( NUMBER ) | Return the token id of the specified input |
| VERIFYIN ( NUMBER HEX NUMBER HEX ) | Verify the input has the specified address, amount and tokenid |
| STATE ( NUMBER ) | Return the state value for the given number |
| PREVSTATE ( NUMBER ) | Return the state value stored in the coin MMR data - when the coin was created. |
| SAMESTATE ( NUMBER NUMBER ) | Return TRUE if the previous state and current state are the same for the start and end positions |
| SUMINPUTS ( HEX ) | Sum the input values of this token type |
| SUMOUTPUTS ( HEX ) | Sum the output values of this token type |
| FUNCTION ( STRING VALUE1 VALUE2.. VALUEn ) | Generic Function. Run the script after replacing $1, $2.. $n in the script with the provided parameters and use the variable 'returnvalue' as the returned result. |
