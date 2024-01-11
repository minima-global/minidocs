---
sidebar_position: 2
---
# Backup your wallet

Using a backup is the fastest and most convenient way to restore your wallet if you lose access to your node. 

**If you lose your device and do not have a valid backup, you will need to restore your wallet by [importing your seed phrase](/docs/userguides/recovery/importseed).**

:::warning unlocked backups
If your node is not locked, your backups will contain your unencrypted seed phrase. Backups of unlocked nodes must be kept as safe as your seed phrase!
:::

If your node is locked, your seed phrase will remain encrypted in the backup file.

![dappmenu](/img/app/security.png#width10)

### How to take a backup

1. Open the **Security** MiniDapp and select **Backup node**.
2. Set a **password** for the backup that will be required if you need to restore it.
3. A backup file will be created and you will be prompted to download and **choose a location** to save it.

:::important
**Please note:**
Your password will be required if you restore this backup at a later date, **it cannot be changed or recovered** so you must remember it!

Once you have saved your backup file, we recommend you store it off the device.
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


<details>
<summary> How to backup your node using the command line </summary>

#### From the Terminal (advanced)

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

