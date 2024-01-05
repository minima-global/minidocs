---
sidebar_position: 1
---
# Lock your wallet

Locking your wallet ensures that if someone gets access to your node, your seed phrase is not visible and your coins cannot be spent. Your seed phrase and private keys will be encrypted with the password you set.

You will able to receive funds as normal but will need to unlock your node when transacting. You can unlock your node at any time with the same password.

## From the Security MiniDapp

![dappmenu](/img/app/security.png#width10)

1. Ensure you have **taken note of your seed phrase** and are storing it somewhere safe.
2. Open the Security MiniDapp and select **Lock private keys**
3. Enter the same password twice

:::important
Your password should be over 12 characters and can use alphanumeric characters and the symbols provided. Do not use spaces.

**It is NOT POSSIBLE to view/change this password once you have set it**, so make sure you write it down and store it somewhere secure - treat it in the same way that you would your seed phrase!

**If you forget it, you will need to [restore from an Archive node](/docs/userguides/recovery/importseed) using your 24 word seed phrase.**
:::

<details><summary> How to lock/unlock your node using the command line </summary>

#### To lock your wallet using commands (advanced)

 1. Open the Terminal MiniDapp (or start your RPC client)
 2. Run the `vault` command
 
```
vault action:passwordlock password:123@bcXYZM1n1m@
```

Example:
```
 vault action:passwordlock password:123@bcXYZM1n1m@
 {
  "command":"vault",
  "params":{
    "action":"passwordlock",
    "password":"123@bcXYZM1n1m@"
  },
  "status":true,
  "pending":false,
  "response":"All private keys wiped! Stored encrypted in UserDB"
}
```
 
Your seed phrase is now encrypted and password protected.


#### To unlock your node using commands:

```
vault action:passwordunlock password:123@bcXYZM1n1m@
```

Example:
```
vault action:passwordunlock password:123@bcXYZM1n1m@
{
  "command":"vault",
  "params":{
    "action":"passwordunlock",
    "password":"123@bcXYZM1n1m@"
  },
  "status":true,
  "pending":false,
  "response":"All private keys restored!"
}
```

Your seed phrase will be decrypted and your funds will no longer be password protected.

#### Transacting with a password locked node

You may transact directly from the Terminal MiniDapp using the `send` function with the password parameter.

Example:
```
send password:123@bcXYZM1n1m@ amount:5 address:MxG082FFHWG31QANAY66W2HK8CVGBRB3Z5RVTARY7T3Q75CGHB1A6CZH0B1KNDU
```

This will sign and then execute the transaction, only unlocking the node for that single transaction. Once complete, the node will be locked again automatically.

The above solution is more secure than an unprotected node but the wallet is still effectively hot as it is connected to the internet and should not be used to store large amounts of funds.
</details>