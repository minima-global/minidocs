---
sidebar_position: 9
---

# Archive Nodes

*Only available from v1.0 onwards*

Archive nodes store the records of all the PoW and MMR data (proofs) for coins since the Archive node is started. 

Externally available Archive nodes (with a static external IP) can be used to provide a service of resyncing users to the chain who have lost access to their node or been offline for too long, causing them to be out of sync with the chain.

You may also run an Archive node for your own purposes (in addition to your normal node) in the case you ever need to restore your funds.

> **Example A - Personal Archive Node**
> 
> A user running a node on a mobile device may choose to run an Archive node on their laptop at home in case they ever lose  their phone and can't find a valid backup of their node. 

> **Example B - Archive Node as a service**
> 
> A user with a server with a static external IP can run an Archive node and share the IP:Port of their node with other users who require restoring their node (in the case they have no backup or lose access to their node).

:::note
Archive nodes do NOT store transaction history, or custom scripts.
:::

## System Requirements

Anyone can run an Archive node from a desktop or server.


### Minimum Hardware Requirements

**Processing:** 2 CPU <br/>
**Memory:** 2GB RAM<br/>
**Storage:** 5GB*

*This may change over time

### Ports

Archive nodes wishing to run as a service must be open to inbound connections on port 9001 (or the main custom port you have chosen).


## Starting an Archive Node

When you start an Archive node, you will start storing the archive data from that point onwards, therefore you can only resync coins for users that are created after this point.

It is possible to run an Archive node from Genesis if you start your Archive node within 2 months of the Genesis block or by syncing your Archive node from another Archive node.


### Manual node 
Add the `-archive` parameter to the start up command. 

### Docker
Add `-e minima_archive=true` to the start up command.

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

If there is an error, you will need to resync from another archive node.
