---
sidebar_position: 1
---

# Android (v9 and above)

## Installing Minima

1. Uninstall any previous versions of the Minima App 
2. Install the Minima App on your Android device from the [Google Play store](https://play.google.com/store/apps/details?id=com.minima.android&hl=en&gl=US)
3. Set your Google Play store settings to enable [auto-update](https://support.google.com/googleplay/answer/113412?hl=en) for the Minima app. 

:::note Don't have a Google Play account?
The latest Android apk file can also be downloaded directly from Github [here.](https://github.com/minima-global/Minima/tree/master/jar) <br/>
:::

4. Open the Minima App and allow the battery settings for Minima to run in the background

**Congratulations - your node is now installed & running!** Continue to [secure your node](#secure-your-node).

:::warning Huawei/Redmi/ZTE Battery settings
Please check the battery settings for the Minima app and ensure that **"Manage Automatically"** is **disabled**. This will ensure that Minima remains in sync and running in the background.<br/>
The settings should be set as shown below.<br/>
![android_battery](/img/runanode/batterysetting.png#width40)
:::

## Secure your node 

Before using your node for the first time, you must:

1. Write down your Seed Phrase
2. Take a backup
3. Set a Vault password to encrypt your Keys (optional)

### How to view your 24 word seed phrase
1. From the Home page, open the menu in the top left
2. Open the **Vault** page
3. Press the three vertical dots in the top right 
4. Select **Seed Phrase** 
5. Grab a pen and paper and write down your Seed Phrase in the order specified  

**Tips for keeping your seed phrase safe:**
- Never take a screenshot, copy and paste or type your seed phrase on a device which is connected to the internet
- Never store your seedphrase on a device which is connected to the internet
- Engrave your seed phrase onto a metal plate and store it somewhere safe
- Make 2 copies of your seed phrase and give one to a trusted relative or store in a second secure location in case you lose access

### How to backup your node

Before backing up your node, consider encrypting your private keys. For more information, see [Vault](/docs/runanode/securefunds#vault).

1. From the Backup/Restore page, click **MAKE A BACKUP**
2. Enter a **password** for the backup (using A-Z, a-z, 0-9 characters only, **no symbols**)
3. A backup file will be created and you will be prompted to **choose a location** to save it.

**Please note:**
- Your password will be required if you restore this backup at a later date, **it cannot be changed or recovered** so you must remember it!
- Once you have saved your backup file, we recommend you send it to a USB drive to keep it secure and then remove it from your Android device 


### How to restore your node from a backup

1. From the **Backup/Restore** page, click **RESTORE FROM A BACKUP**
2. Enter the password you entered when creating the backup you are restoring
3. You will be prompted to **choose a backup** from your device that you have previously taken
4. Your node will then shutdown - **reopen the app** to reconnect to your restored node
5. Wait a few minutes for your node to resync before using it - check your tip block is in sync


### How to encrypt your Private Keys

Encrypting your private keys involves setting a Vault password so that you will not be able to spend funds without first decrypting your keys or by inserting your Vault password.

You will still be able to receive funds as usual.

You can decrypt your keys at any time with the same Vault password you used to encrypt them.

:::important Vault password
Your Vault password should use A-Z, a-z and 0-9 characters ONLY, do NOT use symbols. <br/>
This password should be different to the password you use to access your MiniDapp system.

**It is NOT POSSIBLE to view/change this password once you have set it**, so make sure you write it down and store it somewhere secure - treat it in the same way that you would your seed phrase!
:::

**To encrypt your private keys:**
> 
> 1. Ensure you have **taken note of your seed phrase** and are storing it somewhere safe.
> 2. Go to the `Vault` page in the app
> 3. Click on **Encrypt Private Keys**
> 4. Enter the same password twice **(using A-Z, a-z, 0-9 characters only, **no symbols**)**
> 
> **If you forget it, you will need to restore from an Archive node using your 24 word seed phrase.**

**To decrypt your keys:**
> 1. Go to the `Vault` page in the app
> 2. Click on **Decrypt Private Keys**
> 2. Enter the password you used to encrypt your keys
> 
> Your keys will be decrypted and you will be able to view your seed phrase and send funds without entering a password.

## How to check the Status of your node

From the **Health** page in the app, you can:

1. Check your **version** number
2. Check your latest block time (**Time**) and latest block number (**Block**), this is your tip block and the time of that block, **Time** should be within a few minutes of the current time.

:::info checking your node is in sync
Having a recent block time is not a guarantee that you are on the right chain. <br/>
Consider cross checking your latest block with another node or ensuring the 'Chain' colour of your Maxima Contacts on the **Contacts** page are green.
:::

:::warning 
If the time shown is significantly behind, you should restart your node to resync to the chain. <br/> 
If you have been offline for a long time or do not have a recent backup you may need to perform a [**chain resync**](/docs/runanode/restorefunds#how-to-perform-a-chain-re-sync) from an Archive node.
:::

3. Check your node's full status by selecting **Full Status** from the menu in the top right.

## Using MiniDapps

Once your node running, you can use Minima's decentralized applications - **MiniDapps.** 

Learn more about MiniDapps [here](/docs/learn/minidapps/minidappsintro) <br/>

### Installing MiniDapps

To install a new MiniDapp:

1. From the menu on the home page, select **DAPP Store**

![dappmenu](/img/app/dappstoremenu.png#width40)

2. Select **Minima Global** to open the official Minima DAPP Store 

![dapppage](/img/app/dappstorepage.png#width40)

3. Select the MiniDapp you would like to download, click **OK**. The MiniDapp will be downloaded to your phone's Downloads folder.

![downloaddapp](/img/app/downloaddapp.png#width40)

4. Return to the Home page and click on the **+** icon in the bottom right

![homepage](/img/app/homepage.png#width40)

5. You will be taken to your phone's file storage, navigate to your **Downloads folder** and select the MiniDapp you just downloaded

![downloads](/img/app/downloads.png#width40)

6. The MiniDapp will be installed onto your node, tap on it to open it! 

![afterinstall](/img/app/afterdappinstall.png#width40)

### Updating MiniDapps

MiniDapps do not automatically update when a new version is released to the DAPP store, this gives you the flexibility to decide which version of a MiniDapp you wish to use and ensures that MiniDapp distribution is not centralized. 
:::note
When a new version of a MiniDapp becomes available, it is generally best practice to **update** a MiniDapp instead of installing the new one and deleting the old one, as each MiniDapp contains it's own data which is lost when deleting a MiniDapp.

By updating a MiniDapp, all data will be transferred automatically to the new MiniDapp, preventing loss of data. 

**On-chain data will not be lost** as a result of deleting a MiniDapp, this means that deleting the Wallet MiniDapp for example, will not result in any loss of coins.
:::
To update a MiniDapp to a new version:

1. First download the new version of the MiniDapp you wish to update from the DAPP Store (see steps 1-3 above)

2. Return to the Home page of the app and **long press** on the MiniDapp you wish to update

![longpress](/img/app/longpressdapp.png#width40)

3. Select **Update**

4. Find the MiniDapp you just downloaded in your phone's Downloads folder and select it

5. Your MiniDapp will be updated to the new version!

### Deleting a MiniDapp

Deleting a MiniDapp will also remove any data stored in that MiniDapp's database. On chain data will not be lost.

To delete a MiniDapp:

1. From the Home page of the app, **long press** on the MiniDapp you wish to delete

2. Select **Delete**

3. The MiniDapp will be uninstalled from your node.


### MiniDapp permissions 

All MiniDapps by default have **READ** access to your wallet when installed. This means that when attempting to access your wallet, a pending action will be triggered which must be accepted from the pending actions clock icon in the top right of the Home page.

**You should not set any MiniDapp to have WRITE access to your wallet unless you trust the source of the MiniDapp. **

### Setting READ/WRITE permissions

To change the level of access for a MiniDapp:

1. Long press on the MiniDapp from the Home page

2. Select **Permissions**

![longpress](/img/app/longpressdapp.png#width40)

3. Select READ or WRITE 

![longpress](/img/app/readwritedapp.png#width40)

### Accepting/Denying pending actions

When using MiniDapps with READ permission, you will need to accept any requests to access your wallet e.g. when sending funds

A Pending action will be triggered and a red notification icon will be shown on the Pending actions icon.

![longpress](/img/app/pending.png#width40)

To accept/deny a Pending action. click on the Pending actions icon, then long press on the action and select **Accept/Deny**.
When accepting, wait a few seconds for the command to run and return the output status.

![longpress](/img/app/acceptpending.png#width40)



## Further information 

Guidance can also be found in the **Help** section of the app. 




