---
sidebar_position: 9
---

# Archive Nodes

*Only available from Mainnet (v1.0) onwards*

## Overview

All Minima nodes have a **txpow database** and an **archive database**.

The **txpow database** contains full blocks, which includes complete information about all transactions; the latest MMR proofs for all coins spent or created in the block; and the Proof-of-Work expended for the block. 
It only contains most recent blocks from the unpruned section of the chain which is approximately the last 24 hours worth.

The **archive database** contains the last 2 months of **syncblocks**, which do not include transaction details but do hold all the MMR proofs for coins spent or created in the block as well as the Proof-of-Work. Syncblocks older than 2 months are not stored.

When a connection is made between two nodes, they exchange **Initial Blockchain Download** (IBD) **data** which can consist of full blocks and syncblocks, depending on how far behind the tip block the other user is.

For a returning user who has been offline for too long or has lost access to their node - meaning they no longer hold up-to-date proofs for their own coins - the syncblocks available from regular peers during the IBD process may not be sufficient to re-sync the user.

**Archive nodes** store **all** the **syncblocks** from after the Archive node is started, no pruning is done after 2 months. Therefore, they can be used to re-sync any returning user, providing them with the most recent proofs for their coins. 

## Use cases 

Archive nodes with a static external IP can be used to re-sync users who have lost access to their node or been offline for too long and are therefore unable to sync to the chain tip block with the IBD data alone.

You may also choose run a local Archive node for your own purposes, in addition to a non-archive node, in the case you ever need to re-sync

A returning user has two options for re-syncing from an Archive node:

- **Chain re-sync:** to be used when the user still has access to their node but is on the wrong chain or is unable to catch up to the latest tip block as a result of being offline for too long. <br/>
In the case of a chain re-sync, the user's node will not be wiped, only re-synced to the latest tip block.

- **Seed re-sync:** to be used if a user has lost access to their node or device completely; they can restore access to their funds by doing a seed re-sync from a newly created node. Their 24 word Seed Phrase is required.

:::warning
A Seed re-sync should only ever be used as a last resort in the case a user has no valid backup to restore.
:::

> **Example A - Personal Archive Node**
> 
> A user running a node on a mobile device may choose to run an Archive node locally on their laptop/desktop at home in case they lose their phone and do not have a valid backup of their node stored elsewhere. In this case, the user would always have the latest proofs for their coins on their own Archive node that they could use to re-sync to a new device. 

> **Example B - Archive Node as a service**
> 
> A user with a server with a static external IP can run an Archive node and share the IP:Port of their Archive node with other users who require a chain or seed re-sync. The user requiring the re-sync would use the initiate the chain or seed re-sync from their new/exising node.


## System Requirements

Anyone can run an Archive node from a desktop or server.


### Minimum Hardware Requirements

**Processing:** 2 CPU <br/>
**Memory:** 2GB RAM<br/>
**Storage:** 5GB*

*This may change over time.

### Ports

Archive nodes wishing to run as a service must be open to inbound connections on port 9001 (or the main custom Minima port you have chosen).


## Starting an Archive Node

When you start an Archive node, you will start storing the archive data from that point onwards, therefore you can only re-sync coins for users that are created after this point.

It is possible to run an Archive node from the Genesis block if you either start your Archive node within 2 months of the Genesis block or by doing a chain re-sync for your Archive node off an Archive node that was started at Genesis.


### Manual Archive node (desktop)
To start a Minima Archive node manually, you need to add the `-archive` parameter to the start up command. 

If you have an existing node that you wish to change to an Archive node, you can `quit` your current node from the Terminal and restart the same node, adding in the archive parameter on the start up line.<br/> It is always a good idea to take a backup of your node before stopping it. 


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

### Docker Archive node

To start a Minima Archive node container, you need to add the `-e minima_archive=true` environment variable to the start up command. 

If you originally started your node without the `-e minima_archive=true` environment variable, you can either:
- start a new separate container for your Archive node,
- backup your existing node, the restore it to a new archive container you create, 
- backup your existing node, then stop and remove your existing Minima container and start a new Minima container including `-e minima_archive=true`, using the **SAME** data folder as your old node e.g. minimadocker9001 or minimadocker8001

#### Examples: Starting a new Archive node

#### Linux VPS
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_server=true -e minima_archive=true -v ~/minimadockerarchive:/home/minima/data -p 7001-7004:9001-9004 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest
```
#### Windows
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_archive=true -v C:\Users\INSERTUSERNAME\minimadockerarchive:/home/minima/data -p 7001-7004:9001-9004 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest
```
#### Mac
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_archive=true -v ~/minimadockerarchive:/home/minima/data -p 7001-7004:9001-9004 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest
```
#### Linux desktop
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_archive=true -v ~/minimadockerarchive:/home/minima/data -p 7001-7004:9001-9004 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest
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

If there is an error, you will need to re-sync from another Archive node.


## MySQL Archive Exports
 
It is possible to export your node's archive database to an external MySQL database for offline storage. 

Using a MySQL database to hold a backup of your archive db means you can:
- export the data from MySQL database to an SQL file;
- import the SQL file to another MySQL database;
- perform a chain or seed re-sync from the MySQL database for any Minima node (if made publicly available)

In this setup, we will be using Docker desktop to run a Minima Archive node container and a MySQL database container which will hold the archive db data. 

### Prerequisites

- An existing Archive node running in Docker

### Minima - MySQL setup

1. Install MySQL Workbench from the [official website](https://dev.mysql.com/downloads/workbench/), selecting the Operating System relevant to you

2. Open your Terminal/Command Line interface
 
3. Setup a Docker network, this will allow you to connect your node to your MySQL database that we will create in the next step

```
docker network create -d bridge minimanetwork
```

Now you should see **minimanetwork** listed if you run 

```
docker network ls
```

4. Start a MySQL database as a Docker container

You will need to set your own values for the following parameters:
- MYSQL_ROOT_PASSWORD : create a root password
- MYSQL_DATABASE : create a name for the archive database
- MYSQL_USER : create a user for the archive database
- MYSQL_PASSWORD : create a password for the MYSQL_USER

```
docker run -d -p 3307:3306  -e MYSQL_ROOT_PASSWORD=yourrootpassword -e MYSQL_DATABASE=archivedb -e MYSQL_USER=archiveuser -e MYSQL_PASSWORD=youruserpassword --restart unless-stopped --network=minimanetwork --label=com.centurylinklabs.watchtower.enable=false --name minimysql mysql:8.0
```

This will create a Docker container called **minimySQL** which runs your MySQL database called **archivedb**.

It will run on your port 3307 (mapped to 3306 in Docker); create the user specified and give them access to the database; connect the MySQL db to the **minimanetwork** Docker network; and disable Watchtower updates for the container. 


5. Connect your Minima Archive node container to the **minimanetwork** Docker network

```
docker network connect minimanetwork minimaarchive
```

You should now see your **minimysql** and **minimaarchive** containers in the same network if you run:
```
docker network inspect minimanetwork
```
Output:
```
docker network inspect minimanetwork
[
    {
        "Name": "minimanetwork",
...
        },
        "ConfigOnly": false,
        "Containers": {
            "182c4041ad365669b365ee6e0691e5488596ab1e974b791bba1306c74643bd03": {
                "Name": "minimadev",
...""
            },
            "38906df591a5ba642e755509e8c162e114b6dd56abc2ec2e76a0c673f5187b09": {
                "Name": "minimysql",
...
```

6. Open MySQL Workbench and create a new connection with the following parameters

**Connection name:** minimaarchive<br/>
**Hostname:** 127.0.0.1 (or your public IP if running on a server)<br/>
**Port:** 3307<br/>
**Username:** root<br/>
**Password:** Click on “Store in Vault” and enter the root password you used in step 4 above. <br/>


![sql](/img/archivenode/A.AddConnection.png) 

![sql](/img/archivenode/B.CreateConnection.png) 

7. Click Test Connection, then OK.

This will setup a connection to the MySQL database running in Docker.

### How to sync the archive data to MySQL

To sync your Minima archive database to your MySQL data:

1. Open Minima Docker CLI or Minima Terminal MiniDapp

2. Run the command

```
mysql host:minimysql database:archivedb user:archiveuser password:youruserpassword action:info
```
Example output:
```
{
  "command":"mysql",
  "params":{
    "host":"minimysql",
    "database":"archivedb",
    "user":"archiveuser",
    "password":"youruserpassword",
    "action":"info"
  },
  "status":true,
  "pending":false,
  "response":{
    "archive":{
      "archivestart":1,
      "archiveend":72106,
      "archivetotal":72105
    },
    "mysql":{
      "mysqlstart":-1,
      "mysqlend":-1,
      "mysqltotal":0
    }
  }
}
```

In the above example, the Minima archive db contains 72105 blocks and the mysql has 0 blocks, as expected.

:::important before syncing
Before running an update, you must check your node is on the correct tip block. Run the `status` command to check your tip block is up to date.
:::

To update the MySQL database with the Minima archive data:

```
mysql host:minimysql database:archivedb user:archiveuser password:youruserpassword action:update
```
Wait for the sync to finish

Example output:
```
{
  "command":"mysql",
  "params":{
    "host":"minimysql",
    "database":"archivedb",
    "user":"archiveuser",
    "password":"youruserpassword",
    "action":"update"
  },
  "status":true,
  "pending":false,
  "response":{
    "archive":{
      "archivestart":1,
      "archiveend":72206,
      "archivetotal":72205
    },
    "mysql":{
      "mysqlstart":1,
      "mysqlend":72206,
      "mysqltotal":72205
    }
  }
}
```

Future updates will be incremental, only syncing the new blocks that are not already in the MySQL database.

To check the integrity of the data: 

```
mysql host:minimysql database:archivedb user:archiveuser password:youruserpassword action:integrity
```

This will ensure there are no missing blocks in the MySQL database.

### Exporting from MySQL Workbench

To Export the archive data from MySQL to a file:

1. Open MySQL workbench

2. Double click on **minimaarchive** to open the database

3. From the **Administration** tab, select **Data Export** (also available from the Server dropdown menu)

![sql](/img/archivenode/F.AdminExportData.png#width50) 

4. Check the box for **archivedb** and check the boxes for **cascadedata** and **syncblock** 

5. Under Export Options, select **Export to self-contained file** and **Include Create Schema**. Optionally change the file path.

![sql](/img/archivenode/G.DataExportSelection.png) 

6. Click **Start Export**

The exported file will be unzipped, you should zip the exported file to reduce your storage requirement. 

This file can be imported to MySQL if required.

### Restoring from MySQL Workbench

If a user has been offline for too long and cannot resync to the chain from the IBD alone, or has lost access to their node, they can connect to a MySQL database to perform a chain or seed resync, provided it is publicly accessible.

This is an alternative option to re-syncing from an Archive node.

As with Archive nodes, there are two options when using a MySQL database to re-sync your a node:

- **Chain re-sync:** If a user has been offline for too long and their node is not on the correct tip block, they can re-sync to the latest block by performing a [chain re-sync](#to-perform-a-chain-re-sync) from a MySQL database. **The node will NOT be wiped during this process.**

- **Seed re-sync:** If a user does not have a valid backup or has lost access to their node, they can restore access to their coins by performing a [seed re-sync](#to-perform-a-seed-re-sync) from a MySQL database using their 24 word seed phrase. **The node will first be wiped before the re-sync begins.**

#### To perform a chain re-sync

1. On the node requiring a re-sync, connect to the MySQL archive database

```
mysql host:127.0.0.1:3307 database:archivedb user:archiveuser password:youruserpassword action:info
```

2. To start the chain re-sync, run

```
mysql host:mysqlhost:port database:archivedb user:archiveuser password:youruserpassword action:resync
```

Your coins will remain safe throughout this process. Once complete, you will be on the correct tip block.

#### To perform a seed re-sync

1. On the node requiring a re-sync, connect to check the MySQL archive database

```
mysql host:127.0.0.1:3307 database:archivedb user:archiveuser password:youruserpassword action:info
```

2. To start the seed re-sync, run

```
mysql host:mysqlhost:port database:archivedb user:archiveuser password:youruserpassword action:resync phrase:\"24 WORDS HERE\"
```

Optionally set the number of keys and keyuses relevant to you. If not specified, the defaults are keys:80 and keyuses:1000

```
mysql host:mysqlhost:port database:archivedb user:archiveuser password:youruserpassword action:resync phrase:\"24 WORDS HERE\" keys:90 keyuses:2000
```



### How to check the coins for an address

It is possible to check the archive and display all spent and unspent coins for a chosen address using

```
mysql host:127.0.0.1:3307 database:archivedb user:archiveuser password:youruserpassword action:addresscheck address:0x79...
```


