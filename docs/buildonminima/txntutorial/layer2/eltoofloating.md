---
sidebar_position: 6
---

  
# ELTOO Floating Coin
A floating coin is one that can be attached to any existing coin, as long as it has the same address, amount and tokenid, irrespective of the coinid.

Use a previous address and send funds to it..

~~~~
send amount:2 address:0x921FC56E2948CCC51DB46525E459F1DB7331C65CC0E830FBC0E63CF273C6B592
~~~~

You will now have a coin that can be used as a floating input. Use `coins relevant:true` to see the details. <br/>
In the coin details `floating` will be set to true.

Create a floating transaction that spends this coin..

~~~~
txncreate id:floattxn
~~~~

~~~~
txnoutput id:floattxn address:0xFF amount:2
~~~~

And this is the special bit, when defining an input coin use the `floating` param. You could specify the coin using a coinid or with coindata (from a custom transaction) - but you can just specify the address, amount and tokenid, since it is a floating coin.

~~~~
txninput id:floattxn floating:true amount:2 address:0x921FC56E2948CCC51DB46525E459F1DB7331C65CC0E830FBC0E63CF273C6B592
~~~~

Now - you will see that in your custom transaction the coinid for that input is `0x01`. This means it is special. It is not specified. It does not matter which coin you use - as long as address, amount and tokenid are the same.

Sign it to complete the transaction

~~~~
txnsign id:floattxn publickey:auto
~~~~

Infact let's SPEND the old coin and output it to the same address.

In my `coins relevant:true` I have only 2 coins.. The 2 minima floating one and the big one (left over from the billion). Importantly the floating 2 Minima coin is the latest - so it will be picked up first.

So - if you do (using the same address and amount)

~~~~
send amount:2 address:0x09B9782AA11B0B1F3D658016E2FD1E120DC0619A7BCD4F4DA6A4D79F0C6A5783
~~~~

It will spend that coin, and create another coin - with a different coinid, but with the same address, amount and tokenid, still floating.

~~~~
coins relevant:true
~~~~

This will show the new coin with different coinid.

We can now post the floating transaction we made, with a coin that has already been spent, and it will still work as it uses the NEW coin we just created.

~~~~
txnpost id:floattxn auto:true
~~~~

**BOOM.** You just spent a floating coin..
