---
sidebar_position: 1
---

# Start a Testnet 

Here we will go through and explain how to create some basic transactions that use custom scripts. This will show how to use the Minima commands to construct, sign and post transactions. To test scripts and play with different transactions or constructions it is recommended that you use a private chain. Then none of your funds are at risk!

Once you start Minima in this way you will have your own private chain, you will be sent the genesis Minima with 1 billion coins to spend, and you can enter commands directly into the console. 

At its core, Minima is a Java application, so first make sure you have Java installed. Download from [here](https://www.java.com/en/download/).

You will need the latest release of the minima.jar file which can be downloaded from GitHub [here](https://github.com/minima-global/Minima/releases)

We will be using a server or desktop command line interface (CLI) to start Minima.

## 1. Start the genesis node 

1. Create a new folder and copy the minima.jar into that folder. We will run everything from there.
2. Copy the path to the file and from the command line, `cd` into that folder
3. Enter the following command

**Node 1:**

```
java -jar minima.jar -data minidata1 -basefolder minidata1 -genesis -test -nop2p -mdsenable -mdspassword [INSERT NODE1 PASSWORD]
```

- Replace placeholder `[INSERT NODE1 PASSWORD]` with a custom password for your node 1

This will start a node on the default ports of 9001-5. 

Check your balance with `balance`.

## 2. Start the second node 

We create a second node to test transactions between two nodes, note that we will need to:

- remove the `-genesis` parameter,
- change the data and base folders, 
- add the `-port` parameter to start it on a different port, 
- add the `-connect 127.0.0.1:9001` parameter to connect this node to the genesis node.

**Node 2:**

1. Open a new command line window and enter the following command

```
java -jar minima.jar -data minidata2 -basefolder minidata2 -test -nop2p -mdsenable -mdspassword [INSERT NODE2 PASSWORD] -port 10001 -connect 127.0.0.1:9001
```

- Replace placeholder `[INSERT NODE2 PASSWORD]` with a custom password for your node 2
- Optionally set a port of your choice, we use 10001 here

**You should now have two nodes up and running that are connected to eachother! **

## Restarting the nodes

You can shutdown the nodes by running `quit` from the command line window. 

To **restart** the same node from where you left off, re run the command for either node above **removing the `-genesis` parameter for node 1.**

To **delete** the data and start a new clean nodes, re run the command for each node adding the `-clean` parameter. 

**ALL DATA WILL BE LOST AND A NEW SEED PHRASE WILL BE GENERATED.**

## Start up Parameters

#### Start up parameters used

<details>
<summary>Expand to see the parameters used</summary>

- `-data [foldername/path]` : the data folder where all the config files for this node are stored. Default is a hidden .minima folder under the user's home directory. If you want to specify a folder not in the user's home directory, you must use the complete path.<br/>
- `-basefolder [foldername/path]` : specify a default file creation / backup / restore folder. Default is the user's home directory. Can be the same as the data folder provided.<br/>
- `-genesis` : delete all old data and start the node from the genesis block<br/>
- `-nop2p` : Disable the automatic P2P system<br/>
- `-test` : this uses test settings which have a faster blocktime and only keep a shorter chain in memory. If you are compiling Minima yourself you can edit these to your needs.<br/>
- `-mdsenable` : start the MiniDapp system
- `-mdspassword` : set the password to login to the MiniDapp system
- `-port` : set the starting port
- `-connect [ip:port]` : Disable the automatic P2P system and create your own network by manually connecting to this list of host:port

</details>

#### Optional start up parameters

<details>
<summary>Expand to see full list of start up parameters</summary>

The following start up parameters can optionally be specified when starting your node. 

To add/remove parameters after a node has been started, you must `quit` the node and restart it, adding/removing the required parameters. 

`[]` square brackets indicate where an input is required, **the brackets should not be included.**

#### General
- `-clean` : CAREFUL! Clears existing data, starts a new fresh node. All coins will be lost.<br/>
- `-port [port]` : specify the initial port for Minima to use. Range used will be the specified port +4. Default is 9001-9005.<br/>
- `-host [ipaddress]` : specify the host IP<br/>
- `-dbpassword [yourdbpassword]` : Main Wallet / SQL AES password - MUST be specified on first launch. **CANNOT be changed later.** <br/>
- `-allowallip` : Allow all IPs for Maxima / Networking. Local IPs won't be allowed otherwise.<br/>
- `-archive` : Run an Archive node - store all archive data / the cascade to allow for resyncs from this node<br/>
- `-daemon` : Run in daemon mode with no stdin input (if running Minima as a background service)<br/>
- `-isclient` : Tells the P2P System that this node can't accept incoming connections<br/>
- `-server` : Use Server settings - this node can accept incoming connections<br/>
- `-desktop` : Use Desktop settings - this node can't accept incoming connections<br/>

#### Folders
- `-data [foldername/path]` : the data folder where all the config files for this node are stored. Default is a hidden .minima folder under the user's home directory. If you want to specify a folder not in the user's home directory, you must use the complete path. <br/>
- `-basefolder [foldername/path]` : specify a default file creation / backup / restore folder. Default is the user's home directory. Can be the same as the `data` folder provided.<br/>

#### MiniDapp System (mds)
- `-mdsenable` : enable the MiniDapp System (default port 9003)<br/>
- `-mdspassword [yourmdspassword]` : specify the mds login password <br/>
- `-mdsinit [foldername/path]` : specify a folder of miniDAPPs<br/>
- `-mdswrite [minidapp]` : give an initial miniDAPP WRITE access <br/>

#### RPC
- `-rpcenable` : enable remote procedure call<br/>
- `-rpcssl` : use Self Signed SSL cert to run RPC<br/>
- `-rpcpassword [yourrpcpassword]` : set Basic Auth password for RPC calls ( Use with SSL / stunnel ). Only secure if used with SSL.<br/>
- `-rpcclrf` : use CRLF at the end of the RPC headers (NodeJS)<br/>

#### Test nodes
- `-genesis` : delete all old data and start the node from the genesis block<br/>
- `-test` : this uses test settings which have a faster blocktime and only keep a shorter chain in memory. If you are compiling Minima yourself you can edit these to your needs.<br/>
- `-connect [ip:port,ip:port]` : Disable the automatic P2P system and create your own network by manually connecting to this list of host:port<br/>
- `-nop2p` : Disable the automatic P2P system<br/>
- `-noconnect` : Stops the P2P system from connecting to other nodes until it has been connected to<br/>
- `-nosyncibd` : Do not sync IBD (for testing)<br/>

#### Mobile
- `-mobile` : Sets this device to a mobile device - used for metrics only<br/>
- `-limitbandwidth` : Limit the amount sent for archive sync<br/>
- `-noshutdownhook` : Do not use the shutdown hook (Android)<br/>

#### Debugging
- `-p2p-log-level-info` : Set the P2P log level to info<br/>
- `-p2p-log-level-debug` : Set the P2P log level to debug

#### Help
- `-showparams` : Show relevant startup params on launch<br/>
- `-help` : print help for the start up parameters

</details>


