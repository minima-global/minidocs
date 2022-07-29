---
sidebar_position: 2
---

# Uni-Directional Channel

I want to pay someone 1 Minima a day, everyday, for 30 days. How could I do this without using normal on chain transactions?

Well - one way could be:

1. Ask the recipient for their address
2. On day 1 create a valid signed transaction paying them 1 Minima - but don't post it on chain. Just give it to them.
3. On day 2 create another valid signed transaction paying them 2 Minima - but don't post it on chain. Just give it to them. They discard the old transaction, and keep the newer one paying them more..
4. Keep doing this for 30 days
5. On the last day the recipient posts the last transaction and collects their 30 Minima.

There we go, 30 transactions, off chain, with only one transaction actually going on chain at the end of our financial relationship.

BUT - although this *seems* to work, an element of 'Trust' is required. The recipient can check the transaction is valid when they get it - but there is nothing to stop me spending the coins I use in the transactions, late at night on the 29th day, thus invalidating their transaction. I effectively run off with my money. And now the transaction they have is worthless - as they can't post it. The coins are spent.

If they are a friend, someone I know, I would not do this - wouldn't do it anyway.. BUT can we remove the element of Trust altogether so that I can't do that ? Of course we can.. and we use a trick we learnt earlier with our TimeLock and MultiSig contracts.

Here is the timelock multisig contract we could use:<br/>
My Public Key is: `0xMyKey`<br/>
Their Public Key is: `0xTheirKey`<br/>

~~~~
IF @COINAGE GT (35*1728) AND SIGNEDBY(0xMyKey) THEN RETURN TRUE ENDIF RETURN MULTISIG(2 0xMyKey 0xTheirKey)
~~~~

1. Create this MultiSig contract with the recipient, with a time lock - that allows me to collect the funds in 35 days. ( There are 1728 blocks in a day )
2. I send 30 Minima to that address. I have now locked those coins up for ~35 days and the only other way of accessing them is if BOTH of us sign.
3. On day 1 create a valid transaction spending this 30 Minima coin and send 1 Minima to the recipient and the remaining 29 Minima back to me. I sign it. Then give this partially signed transaction to the recipient. They sign it - but **DON'T** give it back to me. They now have a valid fully signed transaction that they can post at any time and collect 1 Minima.
4. On day 2 create a valid transaction spending this 30 Minima coin and send 2 Minima to the recipient and the remaining 28 Minima back to me. I sign it. Then give this partially signed transaction to the recipient. They sign it - but **DON'T** give it back to me. They now have a valid fully signed transaction that they can post at any time and collect 2 Minima.
5. Keep doing this for 30 days.
6. On the last day the recipient posts the latest valid transaction and collects 30 Minima.

Now - we have a system where I cannot spend the funds before the recipient collects his money. This is trustless and secure. If the recipient doesn't collect the funds within 35 days then I can collect the money and send the 30 Minima back to myself. This is why the timelock has to be more than 30 days.

Even better - 1 transaction per day is used as a convenience. I could be paying him by the hour or by the minute. 

None of this is posted on chain until the final transaction so we are only limited by the speed at which we can create newly signed transactions and swap them. You could even do real time payments by the second.

One way payments have their uses, but far more useful, are two way.
