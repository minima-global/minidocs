---
sidebar_position: 2
---

# Time lock contract

A time lock contract is a script that can only be spent after a certain amount of time - in this case a certain block - has passed.<br/>
So the script for that would be: `RETURN (SIGNEDBY(0xFFEE67F7C..) AND @BLOCK GT 100)`

This script will return TRUE if the transaction is signed by the correct public key and the blocktime is over 100. The @ symbol represents ‘Global’ variables that are set automatically and represent variables related to the transaction itself, the coin, and the current state of the blockchain, that you can then access in your scripts.

**Global Variables**

`@BLOCK` - the current block number<br/>
`@BLOCKMILLI` - the current block time in milliseconds since Jan 1 1970<br/>
`@CREATED` - the block this coin was created in<br/>
`@COINAGE` - the difference in @BLOCK and @CREATED.<br/>
`@INPUT` - Input index of a coin used in the transaction. First input coin has an index of 0.<br/>
`@COINID` - the coinid<br/>
`@AMOUNT` - the amount<br/>
`@ADDRESS` - the address<br/>
`@TOKENID` - the tokenid<br/>
`@SCRIPT` - the script of this coin<br/>
`@TOTIN`- the total number of input coins<br/>
`@TOTOUT` - the total number of output coins<br/>


You can test your scripts without sending them on chain using the ‘runscript‘ function. This allows you to set all the variables and globals as you see fit.

```
runscript script:"RETURN SIGNEDBY(0xFF) AND @BLOCK GT 100" globals:{"@BLOCK":"101"} signatures:["0xFF"]
```

You can use lowercase when entering the scripts and it will be ‘cleaned’ for you into the correct format.

Now let's attempt another very useful contract, one that requires 2 signatures from different parties to be valid.