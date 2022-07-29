---
sidebar_position: 1
---

# Basic signed contract

The most common contract in Minima is one that returns TRUE if signed by a single public key. 

When you use the `send` or `getaddress` functionality this is the address that is automatically created either to receive the funds or the change address. 

You can view your current default addresses with `keys` and your custom scripts with `scripts`. 

If you need help with the parameters - use `help`

A default address in Minima: `RETURN SIGNEDBY(0xFFEE67F7C..)`
