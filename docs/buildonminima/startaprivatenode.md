---
sidebar_position: 1
---

# Start a Private Node

For development purposes, it can be useful to run one or more private test nodes stimulating network traffic. Starting these nodes from Genesis will also give you 1 billion coins to test transactions with. 

To start a private node from genesis:

**Node 1:**

```
java -jar minima.jar -data minidata1 -basefolder minidata1 -test -nop2p -genesis
```

This will start a node on the default ports of 9001-5. 


To create a second node to test transactions between two nodes

**Node 2:**

```
java -jar minima.jar -data minidata2 -basefolder minidata2 -test -nop2p -clean -port 10001 -connect 127.0.0.1:9001
```

If you need to quit Minima and wish to restart it without deleting old data, use:

**Node 1:**

```
java -jar minima.jar -data minidata1 -basefolder minidata1 -test -nop2p
```
**Node 2:**
```
java -jar minima.jar -data minidata2 -basefolder minidata2 -test -nop2p -connect 127.0.0.1:9001
```
:::note Parameters used

- **`-data [foldername/path]`** : the data folder where all the config files for this node are stored. Default is a hidden .minima folder under the user's home directory. If you want to specify a folder not in the user's home directory, you must use the complete path.<br/>
- **`-basefolder [foldername/path]`** : specify a default file creation / backup / restore folder. Default is the user's home directory. Can be the same as the data folder provided.<br/>
- **`-nop2p`** : Disable the automatic P2P system<br/>
- **`-test`** : uses test parameters e.g. faster block times<br/>
- **`-genesis`** : start the node from the genesis block (automatically uses -clean)<br/>
- **`-connect [ip:port]`** : Disable the automatic P2P system and create your own network by manually connecting to this list of host:port<br/>
:::

#### Optional start up parameters

<details><summary>Expand to see full list of start up parameters</summary>

The following start up parameters can optionally be specified when starting your node. 

To add/remove parameters after a node has been started, you must `quit` the node and restart it, adding/removing the required parameters. 

`[]` square brackets indicate where an input is required, **the brackets should not be included.**

#### General
- `-clean` : CAREFUL! Clears existing data, starts a new fresh node. All coins will be lost.<br/>
- `-port [port]` : specify the initial port for Minima to use. Range used will be the specified port +4. Default is 9001-9005.<br/>
- `-host [ipaddress]` : specify the host IP<br/>
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
- `-genesis` : start the node from the genesis block (automatically uses -clean)<br/>
- `-test` : uses test parameters e.g. faster block times<br/>
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