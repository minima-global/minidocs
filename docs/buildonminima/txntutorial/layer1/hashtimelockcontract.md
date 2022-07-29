---
sidebar_position: 7
---

# Hashed Time Lock Contract

A VERY powerful variant on the time lock contract and the backbone and basis of the lightning network. This is a contract that has both a time lock and a hash lock. This means you can spend it at a certain time IF you know a secret. The preimage of a hash..

Let’s say you own the coin. And your public key is 0xFF.

The other party you are sending the coin to is 0xEE

~~~~
IF @BLOCK GT 1000 AND SIGNEDBY(0xFF) THEN RETURN TRUE
ENDIF
RETURN ( SIGNEDBY(0xEE) AND KECCAK(STATE(1)) EQ 0x546FCD56E.. )
~~~~

**What this does:**<br/>
You can cancel the contract after block 1000 ( you could use @COINAGE ) - but until then only the 0xEE user can claim the funds if they know the secret. They need to know the secret to claim before that.

Also - you will note we have used a state variable!.. This is where the value of the preimage is put.

You could use this to perform an atomic cross chain exchange, The same contract would be written by the other party, using the same hash, on a different chain. Then you collect on the other chain, since you know the secret, show the preimage and they can then collect on Minima. Minima also has SHA2 and SHA3 as hash functions for this very purpose.

You can use the 'hash' function to hash the data.

~~~~
hash data:0xFFEEDD
~~~~

And use that in your scripts..

One thing of note here..

If you were to use a String for the preimage, so:

~~~~
hash data:"this is my secret"
~~~~

You would get 

~~~~
0x1D63D6377EA45E6A5F410FCCED3066B80CA9FB391C346E74948FBB27C7617908
~~~~

as the hash of the data - the byte representation of the string. Also - this is the KECCAK hash, and you would probably want to use SHA2 or SHA3 for cross chain antics as that is what BTC and ETH support.

Now to add this as a state variable you would need to enclose it in square brackets.

So..

~~~~
runscript script:"LET preimage=STATE(0) RETURN KECCAK(preimage) EQ 0x1D63D6377EA45E6A5F410FCCED3066B80CA9FB391C346E74948FBB27C7617908" state:{"0":"[this is my secret]"}
~~~~

This is because Strings in KISSVM are enclosed in square brackets.. Not quotes - ".

Another already widely used case is in the Lightning Network on Bitcoin. HTLC contracts work just as well off chain as on chain.. You can set up cascading HTLC contracts that allow for payments to hop through multiple parties.

For instance - imagine I have a channel with Bob and Bob has one with Alice. I want to pay Alice. I create an HTLC payment to Bob locked for 12 hours if he knows a secret that only I know. He then creates the same HTLC payment to Alice, locked for 6 hours. I then reveal the secret - give it to Alice, and she collects the payment from Bob. Bob now also knows the secret and collects his payment from me. 

This can be used in larger groups with more hops, so instead of only being able to pay people you know.. You can pay people who know people who know people you know. A much larger set - in fact at 6 hops you should theoretically be able to pay anyone in the network.
