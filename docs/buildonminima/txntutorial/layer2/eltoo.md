---
sidebar_position: 4
---

# ELTOO Channel

You should read the ELTOO whitepaper, which I reference in the Minima whitepaper, before diving in here. 

Essentially what ELTOO does is allow you to have a sequence number, which we will store as a state variable, and then a special contract that can be run as long as it has a higher sequence number (but not allow lower older sequence numbers). 

Each phase has 2 possible transactions that can be executed, an **update transaction** that moves you onto the next number in the sequence - the next phase - and a **settlement transaction** that ends the sequence and pays out.

First let's make sure we have all the components required.

1. We need to be able to create a transaction with a coin that has not been posted on chain yet.
2. We need a 'floating coin' that can be attached to multiple different existing coins as long as it has the same address, amount and tokenid - but different coinid.
