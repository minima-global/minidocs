---
sidebar_position: 1
---

# Android

## Installing Minima

1. Install the Minima App on your Android device from the [Google Play store](https://play.google.com/store/apps/details?id=com.minima.android&hl=en&gl=US)
2. Set your Google Play store settings to enable [auto-update](https://support.google.com/googleplay/answer/113412?hl=en) for the Minima app. 

:::note Don't have a Google Play account?
The latest Android apk file can also be downloaded directly from Github [here.](https://github.com/minima-global/Minima/tree/master/jar) <br/>
:::

3. Open the Minima App and allow the battery settings for Minima to run in the background

**Congratulations - your node is now installed & running!** Continue to [secure your node](#secure-your-node).
<details><summary> <strong> Huawei,Redmi,ZTE Battery settings</strong> </summary>

Please check the battery settings for the Minima app and ensure that **"Manage Automatically"** is **disabled**. This will ensure that Minima remains in sync and running in the background.<br/>
The settings should be set as shown below.<br/>
![android_battery](/img/runanode/batterysetting.png#width30)

</details>
<details><summary> <strong> OPPO Battery settings </strong> </summary>

OPPO have a strict background policy which means that even if Minima is allowed to run in the background, it may be force closed if there are too many apps with this permission.

To ensure that Minima continues to run as expected, please ensure that you have fewer than 5 apps on your phone (including Minima) that are allowed to run in the background.

</details>

## Secure your node 

Before using your node for the first time, you should:

1. Write down your seed phrase
2. Lock your node with a password 
3. Take a backup and set up auto-backups

This is all done within the **Security MiniDapp.**

![security](/img/app/security.png#width10)

### How to view your 24 word seed phrase

1. Open the **Security** MiniDapp
2. Select **Manage Seed Phrase**
3. Ensure your node is unlocked
4. Select **Show seed phrase**
5. Grab a pen and paper and write down your Seed Phrase in the order specified  

:::tip **Tips for keeping your seed phrase safe:**
- Never take a screenshot, copy and paste or type your seed phrase on a device which is connected to the internet
- Never store your seed phrase on a device which is connected to the internet
- Engrave your seed phrase onto a metal plate and store it somewhere safe
- Make 2 copies of your seed phrase and give one to a trusted relative or store in a second secure location in case you lose access
:::

### How to lock your node

Locking your node encrypts your private keys with a password so that no transactions can be made without a password. 

You will still be able to receive funds as usual.

You can unlock your node at any time with the same password.

**To lock your node:**
 
1. Ensure you have **taken note of your seed phrase** and are storing it somewhere safe.
2. Open the Security MiniDapp
3. Select **Lock private keys**
4. Enter the same password twice

:::important
Your password should be over 12 characters and can use alphanumeric characters and the symbols provided. Do not use spaces.

**It is NOT POSSIBLE to view/change this password once you have set it**, so make sure you write it down and store it somewhere secure - treat it in the same way that you would your seed phrase!

**If you forget it, you will need to [restore from an Archive node](/docs/runanode/restorefunds#how-to-perform-a-seed-re-sync) using your 24 word seed phrase.**
:::


### How to backup your node

Before backing up your node, consider [locking your node](#how-to-lock-your-node). 

1. Open the **Security** MiniDapp
2. Select **Backup node**
3. Enter a **password** for the backup (your password should be at least 12 characters and can use alphanumeric characters and the symbols provided. Do not use spaces.)
4. A backup file will be created and you will be prompted to download and **choose a location** to save it.

:::important
**Please note:**
Your password will be required if you restore this backup at a later date, **it cannot be changed or recovered** so you must remember it!

Once you have saved your backup file, we recommend you send it to a USB drive to keep it secure.
:::

### How to restore your node from a backup

1. Open the **Security** MiniDapp
2. Select **Archive Reset**
3. Select **Restore a Backup**
4. Upload an archive export file from an archive node

If you do not have a file, visit our Discord server or choose to restore without a file. 

*If you choose to restore without a file, your backup must have been on the correct top block when the backup was taken.*

5. Upload the backup you wish to restore
6. Enter the password you used when creating the backup you are restoring
7. Start the restore process, this will take some time to re-sync the chain, please be patient


### How to unlock your node:

1. Open the Security MiniDapp
2. Select **Unlock private keys**
3. Enter the password you used to lock your node

Your private keys will be decrypted and you will be able to view your seed phrase and send funds without entering a password.

## How to check the Status of your node

![dappmenu](/img/app/HealthIcon.png#width10)

From the **Health** MiniDapp, you can:

1. Check your **version** number
2. Check your latest block and block time
3. Check your node's full status


## Using MiniDapps

Once your node running, you can use Minima's decentralized applications - **MiniDapps.** 

MiniDapps are simply zip files containing a web application that interacts with Minima. 

Learn more about MiniDapps [here](/docs/learn/minidapps/minidappsintro) <br/>

### Installing MiniDapps

MiniDapps can be shared or downloaded from our MiniDapp Store. Once downloaded onto your device, they can be installed onto your node. 

#### To download a MiniDapp:

1. Open the Dapp Store MiniDapp

![dappmenu](/img/app/dappstore.png#width30)

<!-- 2. Select **Minima Global** to open the official Minima DAPP Store 

![dapppage](/img/app/dappstorepage.png#width40) -->

2. Find the MiniDapp you would like to download and tap **Get**. 

The MiniDapp will be downloaded to your phone's Downloads folder.

<!-- ![downloaddapp](/img/app/getdapp.png#width40) -->

#### Installing a MiniDapp

1. Return to the Home page and click on the **+** icon in the top right

![homepage](/img/app/installdapp.png#width30)

2. You will be taken to your phone's file storage, navigate to your **Downloads folder** and select the MiniDapp you just downloaded

![downloads](/img/app/downloads.png#width30)

3. The MiniDapp will be installed onto your node, tap on it to open it! 

### To update a MiniDapp

MiniDapps do not automatically update when a new version is released to the DAPP store, this gives you the flexibility to decide which version of a MiniDapp you wish to use and ensures that MiniDapp distribution is not centralized. 
:::note
When a new version of a MiniDapp becomes available, it is generally best practice to **update** a MiniDapp instead of installing the new one and deleting the old one, as each MiniDapp contains it's own data which is lost when deleting a MiniDapp.

By updating a MiniDapp, all data will be transferred automatically to the new MiniDapp, preventing loss of data. 

**On-chain data will not be lost** as a result of deleting a MiniDapp, this means that deleting the Wallet MiniDapp for example, will not result in any loss of coins.
:::

To update a MiniDapp to a new version:

1. First download the new version of the MiniDapp you wish to update from the DAPP Store (see steps 1-2 above)

2. Return to the Home page of the app and **long press** on the MiniDapp you wish to update

3. Select **Update**

![longpress](/img/app/updatedapp.png#width30)

4. Find the MiniDapp you just downloaded in your phone's Downloads folder and select it

5. Your MiniDapp will be updated to the new version!

### To delete a MiniDapp

Deleting a MiniDapp will also remove any data stored in that MiniDapp's database. On chain data will not be lost.

To delete a MiniDapp:

1. From the Home page of the app, **long press** on the MiniDapp you wish to delete

2. Select **Delete MiniDapp** to uninstall it from your node

![longpress](/img/app/deletedapp.png#width30)


### Setting MiniDapp permissions 

Read and write permissions control whether a MiniDapp requires your approval when:
- executing transactions
- backing up,  restoring or resyncing your node 
- locking or unlocking your node
- accessing your seed phrase

All MiniDapps by default have **read** permissions when installed. 

:::warning
**Do not give any MiniDapp Write permissions unless you trust the source. **
:::

#### To change the level of access for a MiniDapp:

1. Long press on the MiniDapp

2. Select **Read mode** or **Write mode** 

![longpress](/img/app/longpress.png#width30)


### Accepting/Denying pending actions

When using MiniDapps with **read** permission, you will need to approve any attempts to access your wallet e.g. when sending funds

A Pending action will be triggered which must be approved from the **Pending MiniDapp**.

#### To approve or deny a Pending action:

1. Open the Pending MiniDapp

![longpress](/img/app/newpending.png#width30)

2. Review the command and either Approve or Deny it.

![longpress](/img/app/approvecommand.png#width30)

3. Confirm the approval 

![longpress](/img/app/pendingapproved.png#width30)






