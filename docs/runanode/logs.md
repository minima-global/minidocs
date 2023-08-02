---
sidebar_position: 10
---

# Log Messages

The logs for your node are an audit of the recent events and processes occurring on your node. 

It is useful to understand some of the most commonly shown logs for troubleshooting purposes.

## Minima connection logs 

```
Connected attempt success to ... 
```

**Details:** Your node has successfully connected to another node at the specified host:port.

**Log Level:** Info

**Action required?:** No

-------------- 

```
[+] Connected to the blockchain Initial Block Download received. size:5 bytes blocks:0
```

**Details:** Your node has received an IBD (Initial Blockchain Download) after connecting to another node. If your node is not up to date with the top block in the chain, you will receive the blocks your node is missing.

**Log Level:** Info

**Action required?:** No

-------------- 

## Maxima logs

```
MAXIMA NEW connection : ...
```

**Details:** You have connected to and added this node as a new Maxima Host.

**Level:** Info

**Action required?:** No

-------------- 

```
MAXIMA EXISTING connection
```

**Details:** You have connected to a node which is one of your existing Maxima Hosts.

**Level:** Info

**Action required?:** No

-------------- 

```
MAXIMA Check if connected : ...
```

**Details:** Before sending a message to one of your Maxima hosts, the connection is checked.

**Level:** Info

**Action required?:** No


-------------- 

```
TIMED Maxima connect as no chain yet.. 
```

**Details:** The node does not have any blocks yet so will not attempt to connect to a Maxima host. Will reattempt in 10 seconds.

**Level:** Info

**Action required?:** No

-------------- 

```
MAXIMA disconnecting from 185.103.110.69:9001 reconnecting to random host
```
**Details:** A connection could not be established with the host and a new connection will be made.

**Level:** Info

**Action required?:** No

-------------- 