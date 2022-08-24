---
sidebar_position: 6
---

# Tokens

Minima natively supports Tokens. Tokens on Minima are created using coloured coins. So we take fractional amounts of Minima and 'colour' them so that they get a unique and individual TokenID. 

Tokens can be used inplace of Minima in any of the transactions we have been talking about earlier and in all the Layer 2 ELTOO protocols as well. They are treated in the same way as Minima itself, and can be used in smart contracts just like Minima, they just have a different TokenID.

Start with:

~~~~
tokencreate name:mycoin amount:1000
~~~~

This constructs a special transaction, and will convert a fractional amount of Minima into a Token. You can see this with `balance`.

~~~~
.. {
},
"tokenid":"0x0C5EEB946E8C18B610AFA1D9A9F7EB05688E21A72608D5F43C925D1D6804A16E ",
"confirmed":"1000", "unconfirmed":"0", "sendable":"1000", "total":1000
}] }
~~~~

And if you use `tokens`

~~~~
.. {
},
"coinid":"0x8C8DB5BA960C8AC2CD3BD314BDBC280E941C2D45469C7685083D19387024CA54 ",
"total":"1000",
"decimals":8,
"script":"RETURN TRUE", "totalamount":"0.000000000000000000000000000000001", "scale":36,
"tokenid":"0x0C5EEB946E8C18B610AFA1D9A9F7EB05688E21A72608D5F43C925D1D6804A16E "
}] }
~~~~

The Token details tell you how many tokens there are in total, the number of decimal places - which defaults to 8, the Script for the token, and the total amount of Minima used to create the token. 

The total amount of Minima * the scale is the actual Token Amount. The TokenID is always globally unique.

The `name` is just a string so it can be populated by a JSON and is by default - if you only specify a single word name. Then you can embed description, icons, links to external websites etc etc..

You can send them to anyone using the same `send` command by constructing custom transactions. Simply specify the tokenid.

~~~~
send address:0xFF amount:1 tokenid:0x0C5EEB946E8C18B610AFA1D9A9F7EB05688E21A72608D5F43C925D1D6804A16E
~~~~

This will create a more descriptive token..

~~~~
tokencreate amount:10 name:{"name":"newcoin","link":"http:mysite.com","description":"A very cool token"}
~~~~

You can specify the number of decimals.. Which in actuality changes the scale so no decimal places are possible, and easily create non-fungible tokens.

~~~~
tokencreate name:mynft amount:10 decimals:0
~~~~

And now you cannot send fractional amounts of the token. Only whole numbers - good for tickets. Trying to send 1.5 as the amount will fail. If you create a token and specify `amount:1 decimals:0` you would have an 'NFT'.. 1 unit, non-divisible.

Tokens can have scripts. A token script is `RETURN TRUE` by default. Whenever you try and spend a token the address script AND the token script must return TRUE. That's all it does.

You can use this to have a counter, or to make sure a payment is made whenever the token is used, or to keep track of certain state variables and ensure they remain, or any other reason you can think of.

For instance.. If you set this as the script in a token..

~~~~
tokencreate name:charitycoin amount:1000 script:"ASSERT VERIFYOUT(@TOTOUT-1 0xMyAddress 1 0x00 TRUE )"
~~~~

You would be saying - make sure that in every transaction this token is used, the last output is 1 Minima sent to `0xMyAddress`. Trying to 'send' it as normal will fail - see the error. You will need to construct a custom transaction that does just that.. and then it will work.
