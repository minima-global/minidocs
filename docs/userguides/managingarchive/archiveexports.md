---
sidebar_position: 1
---

# Archive file exports

If running an archive node, you can export your archive data to a file that can be used for recovering a node from the Security MiniDapp or using the [reset](/docs/userguides/usingyournode/terminal_commands#backup) command to either chain re-sync, import seed phrase or restore a backup with chain re-sync.

To export your archive data to a file:

1. Open the Security MiniDapp

![security](/img/app/security.png#width10)

2. Select **Archive reset**
3. Select **Archive export**, then **Export archive file**
4. Wait for the file to be generated

Once the file generation is complete you can download it to share with others. You can also **Browse internal archives** to download, share or use.

Alternatively to export from the Terminal, run:

```
archive action:export file:archiveexport-ddmmyy.raw.dat
```

:::important
An archive node can only be used to re-sync users who created their nodes after your archive node was created. If you wish to be able to recover *any* Minima user, you must perform a chain re-sync from an archive node that holds the entire blockchain since genesis.
:::