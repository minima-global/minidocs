---
sidebar_position: 4
---

# Token/NFT scripts

Each custom token or NFT has a separate script that must also return TRUE when attempting to spend a UTxO. 

Minima has a token address of `0x00` and a token script of `RETURN TRUE`.

Custom tokens/NFTs by default have **RETURN TRUE** as their token script. 

This token structure is added to any transaction using that token so every user can check whether the token should be allowed to be spent.

For instance this could be a script for a "make sure 1% is sent to this address for a charity" token:

```
RETURN VERIFYOUT(@INPUT CHARITY_ADDRESS @AMOUNT*0.01 @TOKENID) 
```

or a counter mechanism that checks a counter has been incremented:

```
RETURN STATE(99) EQ INC(PREVSTATE(99))
```

**Both the Token script and coin address script must return TRUE for the transaction to be valid.**

