---
sidebar_position: 5
---

# M of N MultiSig
An M of N signature is a threshold signature. It requires a certain number of people in a pool to sign. Minima has a function just for that. So if you need 2 of 3 to sign.. 

You can use..
~~~~
RETURN MULTISIG ( 2 0xFirstKey 0x2ndKey 0x3rdKey )
~~~~
In fact our first 2 of 2 multisig could have just been
~~~~
RETURN MULTISIG ( 2 0xFirstKey 0x2ndKey )
~~~~
