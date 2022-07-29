---
sidebar_position: 1
---

# Start a Private Node

For development purposes, it can be useful to run one or more private test nodes stimulating network traffic. Starting these nodes from Genesis will also give you 1 billion coins to test transactions with. 

To start a private node from genesis:

**Node 1:**

```
java -jar minima.jar -data minidata1 -test -nop2p -genesis
```

This will start a node on the default ports of 9001-5. 


To create a second node to test transactions between two nodes

**Node 2:**

```
java -jar minima.jar -data minidata2 -test -nop2p -clean -port 10001 -connect 127.0.0.1:9001
```

If you need to quit Minima and wish to restart it without deleting old data use:

```
java -jar minima.jar -data minidata1 -test -nop2p
```

## Available start up parameters

Optional start up parameters:<br/>

`-rpcenable` : enable remote procedure call<br/>
`-mdsenable` : enable the MiniDapp System (mds)<br/>
`-clean` : clears existing data, all coins will be lost <br/>
`-data` : specify a path and folder name for the config files<br/>
`-port` : specify the initial port for Minima to use<br/>
`-host` : Specify the host IP<br/>


To create a private node:<br/>

`-genesis` : start the node from the genesis block (automatically uses -clean and -private)<br/>
`-private` : start a private node<br/>
`-test` : uses test parameters e.g. faster block times (automatically uses -private)<br/>
`-connect` : Disable the p2p and manually connect to this list of host:port<br/>
`-nop2p` : Disable the automatic P2P system<br/>