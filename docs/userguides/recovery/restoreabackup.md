---
sidebar_position: 3
---
# Restoring your backup

## From the Security MiniDapp

![dappmenu](/img/app/security.png#width10)

### Using a recent backup 

A recent backup should be within 1-2 weeks for Android or up to 4-6 weeks on desktop/server.

1. Open the Security MiniDapp
2. Select **Restore from backup**
3. Choose a backup. If you previously uploaded a backup or enabled auto backups, you may select an internal backup. Alternatively, upload an external backup from your file storage. 
4. Enter the password used when generating the backup.
5. Optionally, enter the IP:Port or URL of an archive node - this will be used to sync the latest blocks since the backup was taken. If you leave this blank, the backup will need time to resync to the chain after restoring.
6. Select **Restore** and wait for the restore to finish.

**Please be patient and do not attempt to use any other MiniDapps whilst this is in progress.**

Once complete the node will shutdown and on restarting the node your wallet will be restored.

### Using an old backup

If your backup is older than 1-2 weeks for Android or 4-6 weeks on desktop/server, use the following method.

1. Open the Security MiniDapp
2. Select **Archive reset**
3. Select **Restore a backup**
4. Upload an archive file. If you do not have one, you can visit our [Discord server](https://discord.com/invite/minima) to get one or go to https://spartacusrex.com/archive and download the latest file.
5. Upload your backup and enter the password used when generating the backup 
6. Select **Restore** 
7. Wait for the restore to finish, this can take a long time. 

**Please be patient and do not attempt to use any other MiniDapps whilst this is in progress.**

Once complete the node will shutdown and on restarting the node your wallet will be restored.

## From the Terminal (advanced)

<details>
<summary> Expand for details </summary>

There are 3 options for restoring a backup:

**restore** : For backups less than 1 month old, restore the backup and use the network to catch up to the chain.
**restoresync** : For backups older than 1 month, restore the backup and use an archive host to sync the latest blocks.
**reset** : For backups older than 1 month, restore the backup and use an archive file to resync ALL blocks from genesis.

If you locked your node before taking the backup that you are now restoring, your private keys will still be encrypted after restoring. 

If successful, you will need to restart your node for the restore to take effect.

**restore**

```
restore file: password:
```

**file:** the name of the backup to restore, e.g. mybackup.bak

**password:** (optional) the password of the backup. Can be left blank if restoring a non password protected backup.

**restoresync**

```
restoresync file: password: host:
```

**file:**
    Specify the filename or local path of the backup to restore

**password:** (optional)
    The password of the backup. Can be left blank if restoring a non password protected backup.

**host:** (optional)
    ip:port of the archive node to sync from.


**reset**

```
reset archivefile:archiveexport-jul23.gz action:restore file:backup-jul23.bak password:Longsecurepassword456
```

**archivefile:**
    Specify the the archive gzip file. Should be recently exported from an archive node.

**file:**
    Specify the filename or local path of the backup to restore

**password:** (optional)
    (optional) the password of the backup. Can be left blank if restoring a non password protected backup. 

</details>
