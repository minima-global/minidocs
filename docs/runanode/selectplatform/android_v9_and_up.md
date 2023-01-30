---
sidebar_position: 1
---

# Android (v9 and above)

## Installing Minima

1. Uninstall any previous versions of the Minima App 
2. Install the Minima App on your Android device from the [Google Play store](https://play.google.com/store/apps/details?id=com.minima.android&hl=en&gl=US)
3. Set your Google Play store settings to enable [auto-update](https://support.google.com/googleplay/answer/113412?hl=en) for the Minima app. 
3. Open the Minima App and allow the battery settings for Minima to run in the background

**Congratulations - your node is now installed & running!**

You will see your MiniDapps on the Home screen, the latest MiniDapp versions can be found in the **DAPP Store** to download & install.

:::info Don't have a Google Play account?
The Android apk can also be downloaded directly from Github [here.](https://github.com/minima-global/Minima/blob/master/jar/minima-0.103.28.apk?raw=true) <br/>
*Latest version: 103.28, Last updated: 19th December 2022*
:::


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
If you have been offline for a long time, you may need to restore your node from a backup.
:::

3. Check your node's full status by selecting **Full Status** from the menu in the top right.

## Setting up your Incentive Account

:::info THE INCENTIVE PROGRAM IS NOW CLOSED
The Incentive Rewards Program is now closed to new users.

Existing users will continue to earn, however all Rewards due for 2023 will be received in March (prior to Token distribution) instead of daily.

From Mainnet version 1.0 and above, you do not need to have your Incentive ID connected to your node.
 
As long as have completed and passed the Proof of Person verification process, you will be able to claim your Total Rewards balance to a Mainnet node of your choice (including Rewards for Jan 1st until TGE) once the Payout process begins.

Please refer to the [Testnet Status](/docs/runanode/testnetstatus/) page for the latest information.
:::

<!-- :::info Previous users
If you had an account prior to 6th December 2021, you must reset your password [here.](https://incentive.minima.global/account/forgot-password) Please check your junk mail for the reset password email.
::: -->
<!-- 
1. From the Home screen in the Minima app, open the **Incentive Program** MiniDapp
2. Click on the 3 dots in the top right and select **Open in Browser**
3. Follow the link to the Incentive Program website to log in

![Login](/img/runanode/android_1.png#width50)

4. From the menu in the top right, go to the **Incentive ID** page and copy your Incentive ID

![Node ID](/img/runanode/android_2.png#width50)

5. Return to the app and paste your ID into the box on the Incentive ID page, click **Update** 

![Node ID](/img/runanode/android_5.png#width50)

**Your Incentive Program account is now connected to your node!**

To see your Rewards balance, select **Rewards** from the menu.<br/>

You can also check your Reward balance from the Terminal MiniDapp using the `incentivecash` command.

![Console](/img/runanode/android_3.png#width50)
![Console](/img/runanode/android_4.png#width50)

:::tip Rewards
For every day your node is connected to the network, you will receive 1 Reward.
::: -->

## FAQ

### How to view your 24 word seed phrase
1. From the **Backup/Restore** page, click **Archive Node**
2. Click on the **i** icon in the top right

**Tips for keeping your seed phrase safe:**
- Never take a screenshot, copy and paste or type your seed phrase on a device which is connected to the internet
- Never store your seedphrase on a device which is connected to the internet
- Engrave your seed phrase onto a metal plate and store it somewhere safe
- Make 2 copies of your seed phrase and give one to a trusted relative or store in a second secure location in case you lose access

### How to backup your node

Before backing up your node, consider encrypting your private keys. For more information, see [Vault](/docs/runanode/securefunds#vault).

1. From the Backup/Restore page, click **Backup**
2. Enter a **password** for the backup (using A-Z, a-z, 0-9 characters only, **no symbols**)

Your password will be required if you restore this backup at a later date, **it cannot be changed or recovered** so you must remember it!

3. A backup file will be created and you will be prompted to **choose a location** to save it.

**Store your backups somewhere secure.**

### How to restore your node from a backup

1. From the **Backup/Restore** page, click **Restore**
2. Enter the password you entered when creating the backup you are restoring
3. You will be prompted to **choose a backup** from your device that you have previously taken
4. Your node will then shutdown - **reopen the app** to reconnect to your restored node
5. Wait a few minutes for your node to resync before using it - check your tip block is in sync

## Next Steps

Once your node running, you can contribute to our Testnet by testing our decentralized applications - **MiniDapps.** 

Learn more about MiniDapps [here](/docs/learn/minidapps/minidappsintro) <br/>

The latest MiniDapps are available to download from the **DAPP Store** screen in the app. For guidance on installing and using MiniDapps, please visit the **Help** section in the app. 




