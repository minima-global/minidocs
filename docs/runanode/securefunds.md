---
sidebar_position: 7
---

# Secure your node

Keeping your funds secure involves 

1. Keeping the device your node is running on secure
2. Writing down your [seed phrase](#write-down-your-seed-phrase)
3. [Locking your node](#lock-your-node) with a password
4. [Backing up](#backup-your-node) your node

**Before starting your node,** ensure your device is not accessible by anyone other than you and if running on a desktop or server, ensure you have configured your ports correctly.

**Immediately after starting your node,** write down your 24 word seed phrase and store it somewhere offline and safe. 

The following functionality can be found in the Security MiniDapp.

![dappmenu](/img/app/security.png#width10)


## Write down your seed phrase

<!-- **To view your 24 word Seed Phrase (Android)**
1. From the menu on the Home page, select **Vault**
2. Click on the 3 dots in the top right and select **Seed Phrase**

**To view your 24 word Seed Phrase (using the Terminal)**
1. Login to your MiniDapp system
2. Open the Terminal MiniDapp
2. Type `vault` and press Enter
3. Accept the pending command (if required) -->

Your seed phrase will be required to restore your funds if you lose access to your node and do not have a backup.

To view your 24 word seed phrase:

1. Open the **Security** MiniDapp
2. Select **Manage Seed Phrase**
3. Ensure your node is unlocked
4. Select **Show seed phrase**
5. Grab a pen and paper and write down your Seed Phrase in the order specified  

**Write down your seed phrase carefully, in the _correct order_ and store it in a safe place offline.**

It is also possible to view your seed phrase by running the `vault` command using the RPC client or Docker CLI.

:::important Tips for keeping your seed phrase safe:
1. **DON'T** take a screenshot of your seed phrase 
2. **DON'T** copy and paste your seed phrase to/from a mobile or computer which is connected to the internet
3. **DO** use a metal plate to record your seed phrase and store it somewhere safe
5. **DO** Make 2 copies of your seed phrase and give one to a trusted relative or store in a second location
6. For large amounts, consider signing your transactions offline. To do this you will need to run a node on an offline device and one node on an online device. See [Cold Storage Solution](#cold-storage-solution).
:::


## Lock your node

Locking your node ensures that if someone gets access to your node, your seed phrase is not accessible and your coins cannot be spent. Your seed phrase and private keys will be encrypted with the password you set.

You will able to receive funds as normal but will need to unlock your node when transacting.

You can unlock your node at any time with the same password.

**To lock your node:**
 
1. Ensure you have **taken note of your seed phrase** and are storing it somewhere safe.
2. Open the Security MiniDapp and select **Lock private keys**
3. Enter the same password twice

:::important
Your password should be over 12 characters and can use alphanumeric characters and the symbols provided. Do not use spaces.

**It is NOT POSSIBLE to view/change this password once you have set it**, so make sure you write it down and store it somewhere secure - treat it in the same way that you would your seed phrase!

**If you forget it, you will need to [restore from an Archive node](/docs/runanode/restorefunds#how-to-perform-a-seed-re-sync) using your 24 word seed phrase.**
:::

<details><summary> How to lock/unlock your node using the command line </summary>

#### To lock your node using commands:

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

## Backup your node

Using a backup is the fastest and most convenient way to restore your funds if you lose access to your node. 
If you lose your device and do not have a valid backup, you will need to import your seed phrase.

:::warning unlocked backups
If your node is not locked, your backups will contain your seed phrase. Backups of unlocked nodes must be kept as safe as your seed phrase!
:::

If your node is locked, your seed phrase will remain encrypted in the backup. If you restore a locked backup your node will remain locked after restoring. 


### How to take a backup

1. Open the **Security** MiniDapp and select **Backup node**
2. Set a **password** for the backup that will be required if you need to restore it (your password should be at least 12 characters and can use alphanumeric characters and the symbols provided. Do not use spaces.)
3. A backup file will be created and you will be prompted to download and **choose a location** to save it.

:::important
**Please note:**
Your password will be required if you restore this backup at a later date, **it cannot be changed or recovered** so you must remember it!

Once you have saved your backup file, we recommend you send it to a USB drive to keep it secure.
:::

### How to enable auto backups

1. Open the **Security** MiniDapp and select **Backup node**
2. Enable auto backups
3. Set a password for the auto backups. You must remember or write down this password as it cannot be recovered once set. 

Backups will be taken every 24 hours. The latest 14 backups will be kept on the node. You should periodically download these backups and store them on a different device to your node.

#### Points to remember 
- Take regular backups
- Consider locking your node before taking a backup - when restoring the backup, the node will remain locked
- The password used to lock the node can be different to the password used for a backup
- Regularly download your backups and store them on a different device to your node


<details><summary> How to backup your node using the command line </summary>

#### To backup node using commands:



```
backup password: (optional) file: (optional) auto: (optional)
```

:::note backup parameters
**password:** set a long secure password for your backup, this will be required when restoring it

**file:** backup name / path

**auto:** **true** or **false**. Will set the backup to repeat every 24 hours.

:::

Setting `auto:true` will backup your node every 24 hours however these backups cannot be password protected so we recommend locking your node first. To password protect your auto backups, you must use the Security minidapp.

</details>

<!-- ## Multi-sig coin

Multi-signature coins are coins that require a subset of given 

You can create a multi-sig coin to secure Minima, custom tokens or NFTs. -->



## Cold Storage Solution

We recommend this method if storing a large amount of Minima.

Minima transactions require recent coin proofs of your funds and up-to-date data from the chain. This requires a node to be online as much as possible. 

However, to create a truly secure solution it is imperative that the private keys are NEVER online EVER. This can be achieved by using an offline device to sign your transactions.

This setup involves: 
1. Creating your node for the first time on an offline device, 
2. wiping your private keys from the node,
3. backing up and restoring the keyless backup to an online device,
4. restoring the private keys to the offline device 
5. locking the node with a password - this prevents you needing to input the seed phrase to unlock and sign your transactions.

You will be able to see your wallet addresses and receive funds as normal on the online device.

To transact:
1. Create your transactions on your online device
2. Export the transaction and transfer it to the offline device
3. Sign the transaction on your offline device, providing the password used to lock the node
4. Export the signed transaction and transfer it to the online device
5. Post your transaction on your online device

### Setup

You will need a USB key and 2 devices:

> **Device 1: Offline node**<br/>
> No internet connection/bluetooth/nearby sharing should be enabled. This device will hold your private keys and will be used to sign your transactions offline. 

>**Device 2: Online node**<br/>
> Connected to the internet, this node will not hold any private keys and will only be able to send a transaction that has been signed by the offline device.
This device will keep track of your coins and can be used to receive funds as usual.


#### On Device 1 - The offline node

1. Set up device 1 so that it can start a Minima node. 
- Android: download the latest app
- Docker: ensure you have docker installed 
- Manual on desktop: ensure you have java installed and the minima.jar downloaded

2. Turn off the internet connection/bluetooth/nearby sharing and disable the WiFi, this device should never be connected to the internet again.

3. Start a new Minima node. Your private keys will be generated but as it is not connected to the internet, it will NOT connect to the chain.

4. Using the command line interface where the Minima logs are running or the Docker Terminal, run the `vault` command to view your 24-word seed phrase and the seed itself. 
If using a phone as your offline device, you can also go to the **Vault** page and view your seed from the menu there.

Example:
```
vault
{
  "command": "vault",
  "status": true,
  "pending": false,
  "response": {
    "phrase": "PENALTY MEAN FEDERAL SENSE AGREE SCALE EXHAUST ARROW HUB DAY VELVET AISLE LATIN NATURE CHEF GAUGE DARING REFUSE TINY REMIND MOMENT VINTAGE POLE ELEGANT",
    "seed": "0x64D1F2256C1C810A0AE273A397AC14C92335A234BFFBE259D9297CCF4F559F4B",
    "locked": false
  }
}
```
:::important 24 word seed phrase
It is essential to keep your 24 word seed phrase safe.
You can recover your node with just those words. Anyone with access to your words can steal your coins!
:::

5. Write down the 24 word seed phrase and store it somewhere secure. You do not need to write down the 0x seed but you will need this in the next step.

6. Wipe the private keys from the node by running the following command:

```
vault action:wipekeys seed:0x..
```

Example:
```
vault action:wipekeys seed:0x64D1F2256C1C810A0AE273A397AC14C92335A234BFFBE259D9297CCF4F559F4B
{
  "command": "vault",
  "params": {
    "action": "lock",
    "seed": "0x64D1F2256C1C810A0AE273A397AC14C92335A234BFFBE259D9297CCF4F559F4B"
  },
  "status": true,
  "pending": false,
  "response": "All private keys wiped!"
}
```

**Your node no longer has the keys, not even encrypted in your UserDB. They are fully wiped.**

You can only restore your keys with your 24 words using 
```
vault action:restorekeys phrase:"24 WORD SEED PHRASE HERE"
```

7. Backup the wiped node. You will restore to your online node later. <br/>
*Optionally also set a password for the backup using A-Z, a-z and 0-9 characters only, no symbols*

```
backup file:nokeysbackup.bak password:...
```

8. Restore your private keys to the offline node
```
vault action:restorekeys phrase:"YOUR 24 WORDS HERE"
```

9. Password lock your keys with a long, secure password - this will encrypt your private keys which can be decrypted for the purpose of signing transactions when required. This ensures you do not have to use the 24 words again, which can be kept somewhere safe and not touched again. 

:::warning 
The only time you should access your 24 words is if you lose your offline device! In this situation you can restore your wiped backup to a new offline device.
:::

```
vault action:passwordlock password:setvaultpassword confirm:setvaultpassword
```


#### On Device 2 - The online node

1. Start a new node on an online device - your device 2

2. Restore the wiped backup to this online node, entering the password from the backup if you set one:

```
restore file:nokeysbackup.bak password:...
```

3. The node will shutdown, restart it to access your restored node.

This online node is now the same node as the one on the offline device, however it will be able to connect to the blockchain. 

The online node can be used as normal to receive funds but cannot send any funds, it is essentially read only.

To send funds from your wallet, you will need to use both devices.

### Transacting

To make a transaction when using the Cold Storage solution, there are 5 steps. You will need to use the Terminal MiniDapp,Docker Terminal, or your desktop Command Line where Minima is running:

1. On the online node, use the `sendnosign` command to create a transaction file, sending the amount you wish to send to your chosen recipient's address
2. Transfer the unsigned transaction file to the offline device
3. On the offline node, use the `sendsign` command to sign the transaction with your private keys
4. Transfer the signed transaction file to the online device
5. On the online device, use the `sendpost` command to post the signed transaction

#### Walk-through

1. On your online node, create a transaction using `sendnosign`.

:::tip
`sendnosign` works exactly like the traditional `send` function but instead of sending, will export an unsigned transaction (.txn) file which needs to be transferred to your offline device for signing with your private keys.

For additional help, use `help command:sendnosign` or `help command:send`.
:::

Example output: (sending 1 Minima to the chosen address)
```
sendnosign amount:1 address:MxG0843TSJZ6U35CZSSR2D17G4TE9M68JVT4KUNR4TBQ6H9TRBFZYH23D50TRSH
{
  "command":"sendnosign",
  "params":{
    "amount":"1",
    "address":"MxG0843TSJZ6U35CZSSR2D17G4TE9M68JVT4KUNR4TBQ6H9TRBFZYH23D50TRSH"
  },
  "status":true,
  "pending":false,
  "response":{
    "txpow":"/home/minima/data/unsignedtransaction-1672851796504.txn"
  }
}
```

2. Find the file in your Minima base folder and transfer the transaction file to your offline node via a USB key.

3. To sign the transaction file, use `sendsign` inserting the name of the .txn file and your Vault password that you used in step 9 above to encrypt (passwordlock) your keys. This will decrypt your keys, sign the transaction and automatically re-encrypt them with the same password.

```
sendsign file:... password:yourvaultpassword
```

This will export a .txn file containing your signed transaction.

Example output:
```
sendsign file:/home/minima/data/unsignedtransaction-1672851796504.txn password:yourvaultpassword
{
  "command":"sendsign",
  "params":{
    "file":"/home/minima/data/unsignedtransaction-1672851796504.txn"
    "password":"yourvaultpassword"
  },
  "status":true,
  "pending":false,
  "response":{
    "txpow":"/home/minima/data/signedtransaction-1672852113421.txn"
  }
}
```

>Alternatively, you can unlock your node first using:
>
>```
>vault action:passwordunlock password:yourvaultpassword
>```
>
>then use
>
>```
sendsign file:... 
``` 
>then, re-lock your node
>```
vault action:passwordlock password:yourvaultpassword confirm:yourvaultpassword
```

4. Transfer the signed transaction file back to your online node using a USB key, ensuring it is in your node's basefolder. 

5. Broadcast the transaction to the Minima network with `sendpost file:` function.

Example output:
```
sendpost file:/home/minima/data/signedtransaction-1672852113421.txn
{
  "command":"sendpost",
  "params":{
    "file":"/home/minima/data/signedtransaction-1672852113421.txn"
  },
  "status":true,
  "pending":false,
  "response":{
    "txpow":{
      "txpowid":"0xB41C5F1D68E33410337D0A98EFF5C937F1B9189C46F0BB3F82271B017BFF07F3",
…
```

That's it. You can also view the signed or unsigned transaction at any time using `sendview file:`

Example output:
```
sendview file:/home/minima/data/signedtransaction-1672852113421.txn
{
  "command":"sendview",
  "params":{
    "file":"/home/minima/data/signedtransaction-1672852113421.txn"
  },
  "status":true,
  "pending":false,
  "response":{
    "txpow":{
      "txpowid":"0xB41C5F1D68E33410337D0A98EFF5C937F1B9189C46F0BB3F82271B017BFF07F3",
      "isblock":false,
      "istransaction":false,
      "superblock":-1…
```





