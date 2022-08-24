---
sidebar_position: 10
---
  
# MultiSig MultiCoin

Lets now try a more complex but more powerful exchange contract.

2 users are negotiating the price of a certain amount of tokens or an NFT. 

They do this over a chat app ( MaxSolo/MaxChat ) and send offers backwards and forwards to each other.. All off chain. When they finally agree on a price.. what they would like is to construct a transaction that takes the Tokens and Minima as inputs ( one party does one of each ) and then sends those 'coins' to the correct recipient.

All of this can be checked and validated by each user before either signs the transaction so that the swap itself is atomic, trustless and secure. Either they both get what they want or it doesn't happen. 

These types of offers could be collected together in a pool, or shared with other users, to allow for a completely decentralised exchange dynamic.

Let's go through the steps to construct this transaction.

I have 2 instances of Minima running. I have created an NFT token on one of them.

~~~~
tokencreate name:mynft amount:1 decimals:0
~~~~

Now the other user wishes to buy this off me for 10 Minima.

To remove the need to worry about change the other user creates a 10 Minima coin by using `getaddress` and then sending 10 Minima to his own address. (Normally you wouldn't do this and just send the change back to yourself when constructing the transaction)

~~~~
send amount:10 address:0x0AC281E79A096F046A1FAEF17D268BCF6D5DA604F533F3C64FE84F079C775FCE
~~~~

So we now have 2 coins, 1 on each Instance of Minima, and we want to create a transaction that spends them both and sends them to the other party..

The user who owns the NFT starts by creating a transaction:

~~~~
txncreate id:swap
~~~~

He then gets one of his addresses and adds an output paying him 10 Minima.

~~~~
txnoutput id:swap address:Mx1W5E6AESNJG687D8GZC2JF9DZVVA3WE3TUW9PGWRRRCM32YV1BKMPRR2VY amount:10 tokenid:0x00
~~~~
:::note
Note that I use the Mx.. style address!.. This is a special address format (converted before used - you can't use them in Scripts) that takes the original 0x.. HEX address, hashes it, adds the first 4 bytes of the hash as a checksum to the end and then converts the whole thing to Base32. This way you have basic error checking so you can't input an invalid address and the size remains less than before.
:::
He then finds his NFT ( 'coins' is the same as 'coins relevant:true')

~~~~
coins
~~~~

And adds the coin as an input.. Note the use of `scriptmmr`!

:::note
This next part may require you to export & import the coin proof. Read the [**Pruning**](/docs/buildonminima/txntutorial/pruning)
section to learn more.
:::

~~~~
txninput id:swap coinid:0x5869DDC397979D9529AD92658C0FACC183D94F3E23F7E8028E02B183DE2FAB8B scriptmmr:true
~~~~

This adds the coin and the script and MMR proof. But it is not yet signed.. Since the transaction is not yet complete.

Export the transaction and let the other user import it. We have not signed it so the transaction is still small.. We can just copy paste the data without going via a file..

~~~~
txnexport id:swap
~~~~

Now the other user imports it.. Again just using the data.. This works well over RPC but the command line has a limit - which is why you would use files for larger signed transactions.

~~~~
txnimport data:0x0000000473776170000101000000205869DDC397979D9529AD92658C0FACC183D94F3 E23F7E8028E02B183DE2FAB8B000000204BECB914994CE42E94209D0DD4EECAA19262DE6 B502EF9FC6347C416BC19EC4F2C01010000002002C30D6CD58E0230481C0A5075E40A837E DEA7331F7423BA4AE80731562318840100010000000001080000020BCF0001000100000020586 9DDC397979D9529AD92658C0FACC183D94F3E23F7E8028E02B183DE2FAB8B0000000B5245 5455524E205452554500012C2C0101000000107B226E616D65223A226D796E6674227D00020B CF000101000000208DA0C0DEC62C8DAA07703706A214E2418C86070EF166F8EBDBB202D4D DB71A8900000020322B8CA772F3819076A21860A6F4B71FFA87270FBE9273096F7B65862AFC 2BA500010A00000001000100010000000001000000010000010000000100000000010000010000 0101000000205869DDC397979D9529AD92658C0FACC183D94F3E23F7E8028E02B183DE2FAB 8B000000204BECB914994CE42E94209D0DD4EECAA19262DE6B502EF9FC6347C416BC19EC 4F2C01010000002002C30D6CD58E0230481C0A5075E40A837EDEA7331F7423BA4AE8073156 2318840100010000000001080000020BCF00010001000000205869DDC397979D9529AD92658C 0FACC183D94F3E23F7E8028E02B183DE2FAB8B0000000B52455455524E205452554500012C2 C0101000000107B226E616D65223A226D796E6674227D00020BCF0100020BF40001010000000 0208C518BEDACB2720EB9D72C0CB7B1C4E856CA1A3977F162374B0D48C1B1B99B602C141 18427B3B4A05BC8A8A4DE8459867FE8B78917FF0001010000005352455455524E205349474E4 5444259283078463836333245313141344632423445374339454544463838314338444434394538 344544383146323034303539343537324345443746393837333539314441412900000100
~~~~

Gets an address for himself.. And adds an output sending the NFT to himself.

~~~~
txnoutput id:swap address:Mx3H6YQPJT9UW2UYAWFZSD2635WWPREEUABBFWY2UYH4Y1BFQZJ91W8JK3SJ amount:1 tokenid:0x02C30D6CD58E0230481C0A5075E40A837EDEA7331F7423BA4AE8073156231884
~~~~

And finally adds the 10 Minima input.. Which he finds with coins again..

~~~~
txninput id:swap coinid:0x84352ECF59CAC79103C07254B5158AF8560DE68F609A346154FA812F0051A scriptmmr:true
~~~~

OK - almost there.. We need to sign it now..

~~~~
txnsign id:swap publickey:auto
~~~~

NOW - export that.. via a file.. The signature makes it too large for command line copy paste..

~~~~
txnexport id:swap file:swap.txn
~~~~

Back on the other instance of Minima.. Import the Txn..

~~~~
txnimport file:swap.txn
~~~~

NOW - CHECK the transaction is as you would want it.. And sign it..

~~~~
txnsign id:swap publickey:auto
~~~~

And.. finally - post it..

~~~~
txnpost id:swap
~~~~

.. And like that - It's done.

You just performed a trustless atomic secure token swap! Well done..

It may seem slow and clunky to type this all in by hand but this entire exchange of contracts would take less than a second when automated.

This procedure allows for truly secure peer 2 peer exchanges to take place and can be used as a base unit for many other interesting products, such as a DEX, trading pit, liquidity pools etc etc.. With all the negotiation / order book management done off chain.
