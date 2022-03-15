---
sidebar_position: 7
---

# Tokens (Coloured Coins)

Minima is the native coin for the Minima blockchain. Each UTxO is defined as a coin and therefore a coin can be worth any amount of Minima. 
Minima supports custom tokens (including NFTs) natively. Tokens are **Coloured coins**. Coloured coins are tiny fractions of Minima which represent the supply of a custom token or NFT.

Custom tokens are specified by the following characteristics:

| Attribute | Description |
|---|----|
| TokenID | Created after all the details are set, by hashing the coinid and total amount. Each TokenID is globally unique |
| Token Name/Description | A String description that can be just a name or a full JSON. |
| CoinID | The CoinID used when creating the token initially |
| Total | The total number of these tokens |
| Decimals | The number of decimal places to use for the token |
| Script | The token script |
| Total Amount | The total amount of Minima coloured to be this token. Since Minima uses 44 decimal places, if you colour 1E-33 (0.000000000000000000000000000000001) Minima, that is 1000 tokens with 8 decimal places. i.e. 0.00000000000000000000000000000000**1000.00000000** |
| Scale | The scale of the Token vs the amount. In the example above, the scale is 36 |


NFTs are simply custom tokens with no decimal places i.e. they can only be spent whole.