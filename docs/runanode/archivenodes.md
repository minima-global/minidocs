---
sidebar_position: 9
---

# Archive Nodes

*Only available from Mainnet (v1.0) onwards*

Archive nodes store all **syncblocks** from after the Archive node is started. 

Syncblocks contain a record of the Proof-of-Work (PoW) and MMR proofs for coins from each past block - transactions details and custom scripts are not stored - and can be used to re-sync any node to the correct, heaviest chain.

## Purpose 

Archive nodes with a static external IP can be used to re-sync users who have lost access to their node or been offline for too long and are therefore unable to sync to the chain tip block with the IBD (Initial Blockchain Download) data alone.

You may also choose run a local Archive node for your own purposes (in addition to your normal node) in the case you ever need to re-sync another of your own nodes.

An Archive node re-sync can either be:

- **A Chain Re-sync:** if a user still has access to their node but is on the wrong chain or is unable to catch up to the latest tip block as a result of being offline for too long. <br/>
In the case of a chain re-sync, the user's node will not be wiped, only re-synced to the latest tip block.

- **A Seed Re-sync:** if a user has lost access to their node or device completely, they can restore access to their funds from a newly created node. Their 24 word Seed Phrase is required.

:::warning
A Seed Re-sync should only ever be used as a last resort in the case a user has no valid backup to restore.
:::

> **Example A - Personal Archive Node**
> 
> A user running a node on a mobile device may choose to run an Archive node locally on their laptop/desktop at home in case they lose their phone and do not have a valid backup of their node stored elsewhere.

> **Example B - Archive Node as a service**
> 
> A user with a server with a static external IP can run an Archive node and share the IP:Port of their Archive node with other users who require a chain or Seed Re-sync.


## System Requirements

Anyone can run an Archive node from a desktop or server.


### Minimum Hardware Requirements

**Processing:** 2 CPU <br/>
**Memory:** 2GB RAM<br/>
**Storage:** 5GB*

*This may change over time.

### Ports

Archive nodes wishing to run as a service must be open to inbound connections on port 9001 (or the main custom port you have chosen).


## Starting an Archive Node

When you start an Archive node, you will start storing the archive data from that point onwards, therefore you can only re-sync coins for users that are created after this point.

It is possible to run an Archive node from the Genesis block if you either start your Archive node within 2 months of the Genesis block or by doing a Chain Re-sync from your Archive node off an Archive node that was started at Genesis.


### Manual desktop node 
To start a Minima Archive node manually, you need to add the `-archive` parameter to the start up command. 

If you have an existing node that you wish to change to an archive node, you can `quit` your current node from the Terminal and restart the same node, adding in the archive parameter on the start up line.<br/>


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

:::important
If you used the `-data` parameter to specify a data folder when starting your existing node, you must make sure you start the Archive node using the same data folder you chose originally.
:::

### Docker

To start a Minima Archive node container, you need to add the `-e minima_archive=true` environment variable to the start up command. 

If you originally started your node without the `-e minima_archive=true` environment variable, you can stop and remove your Minima container (this will not delete your minimadocker9001 data folder), then start a new Minima container including `-e minima_archive=true` in the start up line. 

:::important
You must make sure you start the new container using the same data folder you chose when originally starting the node e.g. minimadocker9001
:::

#### Examples

#### Linux VPS
```
docker run -d -e minima_mdspassword=123 -e minima_server=true -e minima_archive=true -v ~/minimadocker9001:/home/minima/data -p 9001-9004:9001-9004 --restart unless-stopped --name minima9001 minimaglobal/minima:latest
```
#### Windows
```
docker run -d -e minima_mdspassword=123 -e minima_desktop=true -e minima_archive=true -v C:\Users\INSERTUSERNAME\minimadocker9001:/home/minima/data -p 9001-9004:9001-9004 --restart unless-stopped --name minima9001 minimaglobal/minima:latest
```
#### Mac
```
docker run -d -e minima_mdspassword=123 -e minima_desktop=true -e minima_archive=true -v ~/minimadocker8001:/home/minima/data -p 8001-8004:9001-9004 --restart unless-stopped --name minima8001 minimaglobal/minima:latest
```
#### Linux desktop
```
docker run -d -e minima_mdspassword=123 -e minima_desktop=true -e minima_archive=true -v ~/minimadocker9001:/home/minima/data -p 9001-9004:9001-9004 --restart unless-stopped --name minima9001 minimaglobal/minima:latest
```


## How to check your Archive data

From the Terminal MiniDapp or Docker CLI, you can check the integrity of your Archive data by running the command:

```
archive action:integrity
```
Example
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

This checks your archive data for missing or broken blocks.

If there is an error, you will need to re-sync from another archive node.
