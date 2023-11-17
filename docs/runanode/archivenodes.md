---
sidebar_position: 12
---

# Run an archive node

*Only available from Mainnet (v1.0) onwards*

To learn more about archive nodes, please see the [archive nodes](/docs/learn/minima/aboutarchivenodes) page.

## System Requirements

Anyone can run an archive node from Android, desktop or server.


### Minimum Hardware Requirements

The following assumes that only Minima is running on the server, you should consider increasing the RAM and storage depending on the requirements for other software you install e.g. virus protection etc

**Processing:** 2 CPU <br/>
**Memory:** 4GB RAM<br/>
**Storage:** 5GB*

*This may change over time.

### Ports

Archive nodes wishing to run as a service must be open to inbound connections on port 9001 (or the main custom Minima port you have chosen).


## Starting an archive Node

When you start an archive node, you will start storing the archive data from that point onwards, therefore you can only re-sync coins for users that are created after this point.

It is possible to run an archive node from the Genesis block if you either start your archive node within 2 months of the Genesis block or by doing a chain re-sync for your archive node off an archive node that was started at Genesis.


### Manual archive node (desktop)
To start a Minima archive node manually, you need to add the `-archive` parameter to the start up command. 

If you have an existing node that you wish to change to an archive node, you can `quit` your current node from the Terminal and restart the same node, adding in the archive parameter on the start up line.<br/> It is always a good idea to take a backup of your node before stopping it. 


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
If you used the `-data` parameter to specify a data folder when starting your existing node, you must make sure you start the archive node using the same data folder you chose originally.
:::

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

This checks your archive data for missing or broken blocks and tells you the first block you can sync from. If there is an error, you will need to re-sync from another archive node.

```
archive action:integrity
```

<details> <summary> Example output </summary>

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

## Export your archive data to a file

You can export your archive data to a .gzip file that can be used for resyncing a node with the [reset](/docs/runanode/terminal_commands#backup) command (to either chain re-sync, import seed phrase or restore a backup with chain re-sync).

```
archive action:export file:archiveexport-ddmmyy.gzip
```

## MySQL workbench exports
 
It is possible to export your node's archive blocks to an external MySQL database for storage. 

Using a MySQL database to hold a backup of your archive data means you can:
- update the MySQL db with the archive blocks from your node
- chain or seed re-sync directly from the MySQL database for any Minima node (if made publicly available);
- export the archive blocks from MySQL to a .dat or .gzip file to be shared for re-syncing purposes;
- execute SQL queries on all coins since the Genesis block (NEW for v 1.0.39);
- export the tables from MySQL to a SQL file;
- import the SQL file to another MySQL database

This setup uses two Docker containers
1. a Minima archive node 
2. a MySQL database to hold the archive blocks and coins

The archive database in MySQL will contain 3 tables:
1. cascadedata - if your archive node does not start at the genesis block, there may be cascade data
2. syncblocks - the archive blocks
3. coins (NEW v1.0.39) - a coins table of all coins in the archive blocks

### Prerequisites

- An existing archive node running in Docker

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


5. Connect your Minima archive node container to the **minimanetwork** Docker network

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

### Update MySQL

To update the MySQL tables with the archive blocks from your node:

1. Open Minima Docker CLI or Minima Terminal MiniDapp

2. Optional - run the command `mysql action:info` with your login details to check the current status 

```
mysql action:info host:minimysql database:archivedb user:archiveuser password:youruserpassword
```

<details> <summary> Example output </summary>

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

</details>



:::important before updating
Before running an update, you must check your node is on the correct tip block. Run the `status` command to check your tip block is up to date.
:::

3. Update the MySQL database with the Minima archive data and wait for it to finish

```
mysql action:update host:minimysql database:archivedb user:archiveuser password:youruserpassword
```

<details> <summary> Example output </summary>

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
</details>

Future updates will be incremental, only syncing the new blocks that are not already in the MySQL database.

### Check the integrity

To check that there are no missing blocks in the MySQL database, you can run:

```
mysql action:integrity host:minimysql database:archivedb user:archiveuser password:youruserpassword
```

### Export to an archive file

#### .dat file export

From v1.0.39 onwards, this raw **.dat** export can be used by users to archive reset their node via the Security minidapp or with the [reset](/docs/runanode/terminal_commands) command. This is the recommended method.

Optionally omit the `file` parameter to use an autogenerated file name. 

```
mysql action:rawexport file:archiveexport.raw.dat host:minimysql database:archivedb user:archiveuser password:youruserpassword
```

#### .gzip file export 

This .gzip export can be used by users to archive reset their node via the Security minidapp or with the [reset](/docs/runanode/terminal_commands) command.

```
mysql  action:h2export file:archiveexport.gzip host:minimysql database:archivedb user:archiveuser password:youruserpassword
```

### Resync from MySQL

If a user has been offline for too long and cannot resync to the chain from the IBD alone, or has lost access to their node, they can connect to a MySQL database to perform a chain or seed resync, provided it is publicly accessible.

This is an alternative option to re-syncing from an archive node.

As with archive nodes, there are two options when using a MySQL database to re-sync your a node:

- **Chain re-sync:** If a user has been offline for too long and their node is not on the correct tip block, they can re-sync to the latest block by performing a [chain re-sync](#to-perform-a-chain-re-sync) from a MySQL database. **The node will NOT be wiped during this process.**

- **Seed re-sync:** If a user does not have a valid backup or has lost access to their node, they can restore access to their coins by performing a [seed re-sync](#to-perform-a-seed-re-sync) from a MySQL database using their 24 word seed phrase. **The node will first be wiped before the re-sync begins.**

#### To perform a chain re-sync

1. On the node requiring a re-sync, check the connection to the MySQL database, changing the ip:port as required

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
### Check an address history

To check the unspent and spent coins for an address, run 

```
mysql host:127.0.0.1:3307 database:archivedb user:archiveuser password:youruserpassword action:addresscheck address:0x79...
```

### Create a coins table

To create a table in your MySQL archive database for all spent and unspent coins, you can use the `mysqlcoins` command. 

The coins table will be populated from the syncblock table, so this must be populated first. You can then run any SQL command against it to query the coins. 

:::note
The coins database is large and will take a while to populate, optionally you can create a second database in mysql workbench to keep the coinsdb separate to your existing archivedb.
:::

To populate the coins table, you can choose to specify the number of coins to update in one go by using the `maxcoins` parameter. To update the table will all the coins, remove the `maxcoins` parameter.

The example below adds the first 100 coins to the database. Next time, it will start from where it left off. 

**From any node**
```
mysqlcoins action:update maxcoins:100 host:127.0.0.1:3307 database:archivedb user:archiveuser password:youruserpassword 
```

**From docker**
```
mysqlcoins action:update maxcoins:100 host:minimysql database:archivedb user:archiveuser password:youruserpassword 
```

### Query the coins table

To search for all coins at an address or with the address in a state variable:

```
mysqlcoins action:search address: host:minimysql database:archivedb user:archiveuser password:youruserpassword 
```

To run a WHERE query on the coins table, string data MUST be in single quotes and you can use multiple parameters.

```
mysqlcoins action:search where: host:minimysql database:archivedb user:archiveuser password:youruserpassword 
```

To run a full SQL query on the coins table:

```
mysqlcoins action:search query: host:minimysql database:archivedb user:archiveuser password:youruserpassword 
```

For full help, use `help command:mysqlcoins` or see [here](/docs/runanode/terminal_commands).

### Export the tables from MySQL

To Export the archive data from MySQL to a file:

1. Open MySQL workbench

2. Double click on **minimaarchive** to open the database

3. From the **Administration** tab, select **Data Export** (also available from the Server dropdown menu)

![sql](/img/archivenode/F.AdminExportData.png#width50) 

4. Check the box for **archivedb** and check the boxes for **cascadedata** and **syncblock** 

:::warning
We do not recommend exporting the coins table as this will be very large.
:::

5. Under Export Options, select **Export to self-contained file** and **Include Create Schema**. Optionally change the file path.

![sql](/img/archivenode/G.DataExportSelection.png) 

6. Click **Start Export**

The exported file will be unzipped, you should zip the exported file to reduce your storage requirement. 

This file can be imported to MySQL if required.