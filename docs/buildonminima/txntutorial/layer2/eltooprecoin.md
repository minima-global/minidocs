---
sidebar_position: 5
---

# ELTOO Pre-Coin Txn

Creating a transaction that spends an as yet created coin is not as tricky as it sounds.

Create 2 new addresses and send some funds to the first.

~~~~
newaddress;newaddress
~~~~
Note that you can chain functions with **;**

~~~~
send amount:1 address:0x0BD4C2C80609CA63CAF5B004037E6F4F1A4A56F97904B6C1B791802C2F13E504
~~~~

Now create transaction spending that input.. sending 1 Minima to the other new output..

~~~~
txncreate id:pretxn
~~~~

~~~~
txnoutput id:pretxn amount:1 address:0x01C0771C94D680E2E6CADA900D28061223E383EAF9646CA7F045209907D81DA7
~~~~

To find the input coin use:

~~~~
coins relevant:true
~~~~

~~~~
txninput id:pretxn coinid:0x2156B370A764DFB7D25B8A2F71305B9BECAE6A804E076A0333DF0645C2449CB3
~~~~

You should now have an unsigned transaction with 1 Minima coin input and 1 Minima coin output.

You can sign it automagically - since the inputs are 'simple' with
~~~~
txnsign id:pretxn publickey:auto
~~~~

Now we have a fully valid transaction but have not posted it yet.

Let's create a transaction that spends the output. This is important as the signatures will be dependent on the coinid used in the previous transaction, so any changes will mean they will be invalid.

~~~~
txncreate id:posttxn
~~~~

You will see that when you do 'txnlist'.. the last piece of data in the JSON is 'outputcoindata'. This is a HEX representation of the coin outputs and can be used as an input to another transaction - with the correct CoinID. Copy that and use it like so..

~~~~
txninput id:posttxn coindata:0x0000002015B0B62181547D83C563D8B1925B53655A2A8F7FF8B1F7479FB202829B 89838200000001FF0001060000000100000100010000000001000000010000010000
~~~~

And add an output to 0xFF.. Just for giggles.

~~~~
txnoutput id:posttxn address:0xFF amount:1
~~~~

Sign the post transaction..

~~~~
txnsign id:posttxn publickey:auto
~~~~

We now have a transaction that cannot be changed, as the signatures would be invalid, using a coin that does not currently exist.
Let's post the FIRST 'pretxn'

~~~~
txnpost id:pretxn auto:true
~~~~

You will need to wait for it to confirm. Use 'balance' to see. 

And once you have all the funds - the change and the coin you just sent - let's post the second 'post' transaction.
~~~~
txnpost id:posttxn auto:true
~~~~

If all went well - that should all work and the final result is 1 Minima sent to 0xFF!..

**Well Done!**

You may have to delete old transactions, using txndelete, if you don't need them anymore..

~~~~
txndelete id:pretxn;txndelete id:posttxn
~~~~

The next ability we will look at is a 'floating' coin.
