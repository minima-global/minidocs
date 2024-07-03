---
sidebar_position: 3
---

# System requirements

Minima is a lightweight blockchain that can be run on any Android device (version 9 or above), general purpose computer or server (VPS).

There is no minimum amount of Minima coins required to run a node.

The following information is for Server or Desktop users.

## Minimum hardware requirement

The following requirements are separate to any specs required for non Minima related processes. GPU is not necessary.

### Standard full node

**Processing:** 2 CPU (4 if using Docker) <br/>
**Memory:** 2GB RAM (4GB if using Docker) <br/>
**Storage:** 2GB (4GB if using Docker)*

*High MiniDapp usage may require higher availability of Storage


### Archive node

**Processing:** 2 CPU (4 CPU if using Docker) <br/>
**Memory:** 4GB RAM <br/>
**Storage:** 5GB*

*This may change over time.

### Mega node

**Processing:** 2 CPU <br/>
**Memory:** 8GB RAM<br/>
**Storage:** 5GB

We do not recommend running a Mega node from an Android device as the RAM consumption is considerably higher than a standard node.

The Mega node **must be online** constantly to remain in sync with the chain. Downtime of less than 24 hours is acceptable.


## Ports used
By default, Minima reserves ports **9001-9005**, although an alternate 5-port range can be chosen by specifying a different main port on start up e.g. 8001.

If specifying a different main port e.g. 8001, the port range used will be the next consecutive 4 ports. e.g 8001-8005.

**9001 TCP** (main port): The main Minima port, for peer-to-peer communication over Minima and Maxima

**9002 TCP** (or main port +1): Not currently used

**9003 TCP** (or main port +2): MiniDapp System (MDS) Web Server

**9004 TCP** (or main port +3): No longer used after v 1.0.37

**9005 TCP** (or main port +4) : JSON-RPC over HTTP

Desktop nodes are not required to configure any port forwarding to use Minima.


### Recommended Firewall settings (VPS users)

:::warning docker users
If using **Docker** to run your node on a VPS, you **must not rely on UFW** as your firewall, Docker will overwrite UFW firewall rules. You must use your VPS provider's firewall manager.
:::

After configuring your firewall, you should check they are enforced as expected. 

#### Ingress

All inbound connections should be denied by default.

**22 tcp** : allow all 

Allows ssh access to the server, optionally only allow this from your home IP address.

**9001 tcp**: allow all 

:::note 9001 - Relay nodes
Allowing inbound connections on port 9001 will ensure your node acts as a relay node. Relay nodes are the backbone of the Minima peer-to-peer network that faciliate the transmission of transactions and blocks across the network and support the network to scale. 
If your inbound connection is closed, your node will only make outgoing connections and will not act as a relay node.
:::

**9003 tcp**: 
- if enabling the MiniDapp system, **allow only from your home IP address** 
- if running Minima headlessly, **deny inbound connections**

:::important 9003 - MiniDapp Port
If your home IP is dynamic, you will need to maintain this firewall rule to your latest IP. If you choose to allow inbound connections from anywhere, your login screen will be public facing, so your login password (mdspassword) must be long and secure, using a combination of lowercase, uppercase letters numbers and symbols.
:::

**9002 tcp (not in use)**: deny all

**9004 tcp (not in use)**: deny all 

**9005 tcp (RPC port)**: 
- deny all, or 
- if you want to `curl` into the node remotely, ensure this is **only allowed inbound from your home IP address**. **You should only do this if you are an advanced user and understand the risks!**

**Opening port 9005 is __extremely risky__ as it exposes your node and seed phrase if you have not [set a secure password for RPC access](/docs/runanode/selectplatform/linuxvpsservice#rpc-client-setup).**

<!-- 
<details>
<summary> UFW setup - NOT FOR DOCKER USERS </summary>

Assuming a new server with nothing else installed and that Minima will be installed on the default ports 9001-9005:

As a user with sudo privileges:

1. Install Uncomplicated Firewall (ufw)

```
sudo apt install ufw
```

2. Run the following commands individually:

This will disable the firewall, deny incoming connections, accept outgoing connections and allow incoming connections from ports 9001-9004 (the default Minima ports)

```
sudo ufw disable
```
```
sudo ufw default deny incoming
```
```
sudo ufw default allow outgoing
```
```
sudo ufw allow ssh
```

3. Allow inbound connections to 9001 from anywhere
```
sudo ufw allow in 9001
```

4. Allow inbound connections to your MiniDapp system only from your home IP address (replace xx.xx.xx.xx with your home ip)
*Note that most home IP addresses are not fixed and if your router is reset, this IP address can change, so you may have to redo this rule at a later date.*

You can find your home IP address by going to [ipchicken](https://ipchicken.com/) when connected to your home wifi network.

```
sudo ufw allow from xx.xx.xx.xx to any port 9003
```
```
sudo ufw allow from xx.xx.xx.xx to any port 9004
```


or to allow connections to your MiniDapp system from anywhere. **This will expose your login screen publicly.**

```
sudo ufw allow in 9003
```
```
sudo ufw allow in 9004
```

5. Enable the firewall
```
sudo ufw enable
```
```
y
```

**MAKE SURE YOU HAVE NOT SKIPPED THE `ufw allow ssh` STEP, OR YOU WILL BE LOCKED OUT OF YOUR SERVER!**

:::warning custom ports
If you install Minima on custom ports, ensure the correct ports are open/closed.
:::

For more information about ufw, see [here.](https://wiki.debian.org/Uncomplicated%20Firewall%20%28ufw%29)

</details> -->