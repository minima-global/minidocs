---
sidebar_position: 12
---

# Run an archive node

Archive nodes serve an important function of being able to recover any Minima user if they lose access to their node or require a re-sync to the chain.

A standard Minima node is constantly pruning the chain and only holds the latest 2 months of archive blocks for the purpose of sharing missing recent blocks with other nodes that are rejoining the network after some time offline.

An archive node does not prune blocks after 2 months and can therefore be used to re-sync another node from the genesis block.

:::important
An archive node can only be used to re-sync users who created their nodes after your archive node was created. If you wish to be able to recover *any* Minima user, you must perform a chain re-sync from an archive node that holds the entire blockchain since genesis.
:::

## Use cases 

Archive nodes can be for personal use or public use.

<!-- There are two methods for using an archive node for recovery purposes:

1. Exporting the archive data from the node to a file (recommended)

2. Connecting to the archive node remotely using its ip address and port number minima is running on e.g. 100.100.100.100:9001

A returning user has two options for re-syncing from an Archive node:

- **Chain re-sync:** to be used when the user still has access to their node but is on the wrong chain or is unable to catch up to the latest tip block as a result of being offline for too long. <br/>
In the case of a chain re-sync, the user's node will not be wiped, only re-synced to the latest tip block.

- **Seed re-sync:** to be used if a user has lost access to their node or device completely; they can restore access to their funds by doing a seed re-sync from a newly created node. Their 24 word Seed Phrase is required.

:::warning
A Seed re-sync should only ever be used as a last resort in the case a user has no valid backup to restore.
::: -->

> **Personal Archive Node**
> 
> A user running a node on a mobile device may choose to run an Archive node locally on their laptop/desktop at home in case they lose their phone and do not have a valid backup of their node stored elsewhere. In this case, the user would always have the latest proofs for their coins on their own Archive node and they can recover their phone wallet to a new device without relying on any other Minima user.

> **Public Archive Node**
> 
> A user can choose to run an archive node for the purpose of helping other Minima users recover their wallet. By exporting their archive data to a file, another user can import the archive file and recover their wallet.
If the archive node is on a server with a static external IP address, other users can also use the ip:port of the archive node to recover their wallet by remotely connecting to the archive node. 

To learn more about archive nodes, please see the [archive nodes](/docs/learn/minima/aboutarchivenodes) page.

## System requirements

Anyone can run an archive node from Android, desktop or server.

### Minimum hardware requirements

The following assumes that only Minima is running on the server, you should consider increasing the RAM and storage depending on the requirements for other software you install e.g. virus protection etc

**Processing:** 2 CPU <br/>
**Memory:** 4GB RAM<br/>
**Storage:** 5GB*

*This may change over time.

### Ports

If running an archive node on a desktop, no port forwarding is required.

If running a public archive node on a server, open inbound connections on port 9001 (or the main custom Minima port you have chosen). 


## Starting an archive node

When you start an archive node, you will start storing the archive data from that point onwards, therefore you can only re-sync coins for users that are created after this point.

It is possible to run an archive node that stores all blocks since the Genesis block by doing a chain re-sync from another archive node that already has all blocks.


### Manual archive node (desktop)
To start a Minima archive node manually, add the `-archive` parameter to the start up command. 

If you have an existing node that you wish to change to an archive node, first take a backup of your existing node, then `quit` your node from the Terminal and restart the same node, adding in the `-archive` parameter on the start up line. 

:::important
If you used the `-data` parameter to specify a data folder when starting your existing node, you must make sure you start the archive node using the same data folder you chose originally.
:::

#### Examples 

#### Windows
```
java -jar C:\Users\INSERTUSERNAME\Downloads\minima.jar -mdsenable -archive
```
#### Mac
```
sudo java -jar /Users/INSERTUSERNAME/Downloads/minima.jar -mdsenable -archive
```
#### Linux
```
sudo java -jar /home/INSERTUSERNAME/minima.jar -mdsenable -archive
```

### Docker archive node

To start a Minima archive node container, you need to add the `-e minima_archive=true` environment variable to the start up command. 

If you originally started your node without the `-e minima_archive=true` environment variable, you can either:
- start a new separate container for your archive node,
- backup your existing node, the restore it to a new archive container you create, 
- backup your existing node, then stop and remove your existing Minima container and start a new Minima container including `-e minima_archive=true`, using the **SAME** data folder as your old node e.g. minimadocker9001 or minimadocker8001

#### Examples: Starting a new archive node

#### Linux VPS
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_server=true -e minima_archive=true -v ~/minimadockerarchive:/home/minima/data -p 7001-7003:9001-9003 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest
```
#### Windows
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_archive=true -v C:\Users\INSERTUSERNAME\minimadockerarchive:/home/minima/data -p 7001-7003:9001-9003 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest
```
#### Mac
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_archive=true -v ~/minimadockerarchive:/home/minima/data -p 7001-7003:9001-9003 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest
```
#### Linux desktop
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_archive=true -v ~/minimadockerarchive:/home/minima/data -p 7001-7003:9001-9003 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest
```


## Check your archive data

From the Terminal MiniDapp or Docker CLI, you can check the integrity of your archive data by running the command:

This checks your archive data for missing or broken blocks and tells you the first block you can sync users from. If there is an error, you will need to re-sync from another archive node.

```
archive action:integrity
```

<details>
<summary> Example output </summary>

```
archive action:integrity
{
  "command":"archive",
  "params":{
    "action":"integrity"
  },
  "status":true,
  "pending":false,
  "response":{
    "message":"Archive integrity check completed",
    "start":1,
    "blocks":6443,
    "cascade":true,
    "errors":0,
    "recommend":"Your ArchiveDB is correct and has no errors."
  }
}
```

</details>
