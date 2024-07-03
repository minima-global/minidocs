---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run a Mega node (NEW)

A Mega node is similar to an Archive node in that that it can recover any Minima user that has lost access to their node or requires a re-sync to the chain.

A Mega node does **not** also have to be an archive node although the two can be run together on the same node. 

## What does it do?

A Mega node stores **all unspent** coins with their proofs, this differs to a standard node which only stores the coins (and proofs) that are relevant to the user. 

A Mega node can:
1. Re-sync another Minima node to the correct top block
2. Restore another Minima node from a seed phrase
3. Restore another Minima node from a backup (.bak file) no matter how old the backup is

The Mega node **is not able** to spend the coins it stores as it does not have the owner's private keys. 

The Mega node **does not** get access to the recovering user's seed phrase or backup file at any point.

### Use cases

Mega nodes can be for personal use or public use.

#### Personal Mega Node

**Purpose:** Personal recovery without relying on any third party

*For example, if you run a node on a mobile device, you can run a separate Mega node on your laptop/desktop at home in case you lose your phone. In this situation, you could restore your mobile node from your Mega MMR node by using the seed phrase or a backup taken from the mobile node. 
To recover a node from your personal Mega node, both nodes must be on the same WiFi and you will need the local IP address of the Mega node.*

#### Public Mega Node (server based)

**Purpose:** To assist other users in recovering their node

*By running a Mega node on a server with a static public IP address, other users can use the ip:port of your Mega node to recover their node remotely.* 
<!-- 
To learn more about archive nodes, please see the [archive nodes](/docs/learn/minima/aboutarchivenodes) page. -->


## System requirements

The following requirements are separate to any specs required for non Minima related processes.

**Processing:** 2 CPU <br/>
**Memory:** 8GB RAM<br/>
**Storage:** 5GB

We do not recommend running a Mega node from an Android device as the RAM consumption is considerably higher than a standard node.

The Mega node **must be online** constantly to remain in sync with the chain. Downtime of less than 24 hours is acceptable.

### Ports

If running a Mega node on a desktop for personal use, no port forwarding is required.

If running a Mega node on a server for public use, open inbound/outbound connections on port 9001 (or the main custom Minima port you have chosen). 


## How to start a Mega node

:::important Changing from Standard to Mega node
If you have an existing node that you wish to change to a Mega node, first take a backup of your existing node, then stop the node, add the `-megammr` start up parameter and restart the node.

If you used the `-data` parameter to specify a data folder when starting your existing node, make sure you start the Mega node using the same data folder you chose originally.
:::

### 1. Start (or update) a node 

Start (or update) a node in the same way as as a normal node, adding the `-megammr` startup parameter. See examples below.

<Tabs
  defaultValue="cli"
  values={[
    {label: 'Command Line', value: 'cli'},
    {label: 'JNLP (Windows/Mac)', value: 'jnlp'},
    {label: 'Docker', value: 'docker'},
  ]}>

<TabItem value="cli">

Start a node as per the Run a Node section for [desktop command line](/docs/runanode/selectplatform/manualnode) or [Linux VPS](/docs/runanode/selectplatform/linuxvpsservice).

When providing the start up parameters, include `-megammr` as shown below

```
java -jar [path to minima.jar] -mdsenable -mdspassword YOURSECUREPASSWORD -megammr
```

</TabItem>
<TabItem value="jnlp">

1. Start a node as per the Run a Node section for [Windows](/docs/runanode/selectplatform/windows) or [Mac](/docs/runanode/selectplatform/mac).
2. Once running, on the Settings tab, under **Advanced Params**, tick the "Use custom parameters" box
3. Enter `-megammr`
4. Close the window and restart the node by relaunching the JNLP

</TabItem>
<TabItem value="docker">

Start a node as per the Run a Node section for [Docker desktop](/docs/runanode/selectplatform/dockerdesktop) or [Linux VPS (Docker)](/docs/runanode/selectplatform/linux_vps). However, when starting the container, add the following environment variable to the start up command:

`-e minima_megammr=true`

If you already have other Minima containers running, you can start a separate Mega node by changing the port 

e.g. `-p 6001-6003:9001-9003`

#### Docker - Linux VPS
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_server=true -e minima_megammr=true -v ~/megaminimadocker:/home/minima/data -p 9001-9003:9001-9003 --restart unless-stopped --name megaminima minimaglobal/minima:latest
```

#### Docker desktop - Windows
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_megammr=true -v C:\Users\INSERTUSERNAME\megaminimadocker:/home/minima/data -p 9001-9003:9001-9003 --restart unless-stopped --name megaminima minimaglobal/minima:latest
```

#### Docker desktop - Mac/Linux
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_megammr=true -v ~/megaminimadocker:/home/minima/data -p 9001-9003:9001-9003 --restart unless-stopped --name megaminima minimaglobal/minima:latest
```

</TabItem>
</Tabs>


### 2. Chain sync or import historical data

A Mega node should be backfilled with the chain history so that the node has a complete database of all the coins since the blockchain started.

You can either:

1. [Chain resync](/docs/userguides/recovery/chainresync) the Mega node from an Archive node, or

2. Import a MegaMMR `.mmr` file shared from another Mega node runner by running the following command from the Minima Terminal, RPC Client or Terminal MiniDapp. 

Daily .mmr exports can be found [here](https://spartacusrex.com/megaarchive/). 

The .mmr file must have been generated no longer than 1 week ago.

**Mega MMR import**

```
megammr action:import file:[PathToFile]/megammr.mmr
```


## Additional help

For additional information, you can use the Minima commands:

`help command:megammr`

`help command:megammrsync`

<!-- <details>
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

</details> -->
