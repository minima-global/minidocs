---
sidebar_position: 2
---

# System Requirements

Minima is a lightweight blockchain that can be run on any Android device (version 9 or above), general purpose computer or server (VPS).

There is no minimum amount of Minima coins required to run a node.

The following information is for Server or Desktop users.

## Minimum hardware requirement

**Processing:** 2 CPU <br/>
**Memory:** 2GB RAM<br/>
**Storage:** 2GB*

*High MiniDapp usage may require higher availability of Storage

GPU is not necessary

## Ports used
By default, Minima uses ports **9001-9005**, although an alternate 5-port range can be chosen by specifying a different main port on start up e.g. 8001.

If specifying a different main port e.g. 8001, the port range used will be the next consecutive 4 ports. e.g 8001-8005.

**9001 TCP** (main port): The main Minima port, for peer-to-peer communication over Minima and Maxima

**9002 TCP** (or main port +1): Not currently used

**9003 TCP** (or main port +2): MiniDapp System (MDS) Web Server

**9004 TCP** (or main port +3): MiniDapp System (MDS) Command server 

**9005 TCP** (or main port +4) : JSON-RPC over HTTP

Desktop nodes are not required to configure any port forwarding to use Minima.

### Inbound connections on server nodes:

**9001**: Server nodes should accept inbound connections on port 9001 (or other specified main port). 
If this port is open, your node will be able to receive incoming connections, acting as a relay node. 
If your inbound connection is closed, your node will only make outgoing connections.

**9002**: Closed 

**9003**: Must be open to use the MiniDapp System (MDS) outside of the server, otherwise can be closed to inbound connections.

**9004**: Must be open to use the MiniDapp System (MDS) outside of the server, otherwise can be closed to inbound connections. 

**9005**: The RPC Port must **ALWAYS be closed** to inbound connections


