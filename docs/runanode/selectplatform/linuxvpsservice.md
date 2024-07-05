---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Linux VPS (systemd service)

Running a node on a server and allowing inbound connections on port 9001 will ensure your node acts as a **relay node**.

Relay nodes are the backbone of the Minima peer-to-peer network that faciliate the transmission of transactions and blocks across the network and support the network to scale. 

Installing Minima as a background process with SystemD is an alternative to using Docker. SystemD is a daemon server that enables applications to run as background processes. 

The following instructions assume your server is using **Debian OS with no existing installations.**

For more information, see [System Requirements.](/docs/runanode/systemrequirements)


## Firewall setup

Before starting, please ensure your server firewall rules:

- do not allow any inbound (Ingress) traffic from anywhere. 
- allow ssh connections (inbound on port 22)

Once your node is running, you should open port 9001 from anywhere and, if you are enabling minidapps, 9003 from your home IP.

We highly recommend using the default Firewall manager for your server. Alternatively to use Uncomplicated Firewall (UFW), see the instructions below.

<Tabs
  defaultValue="custom"
  values={[
    {label: 'Custom Firewall', value: 'custom'},
    {label: 'UFW', value: 'ufw'},
  ]}>

<TabItem value="custom">

After configuring your firewall, you should check they are enforced as expected. 

#### Ingress

All inbound connections except for SSH should be **denied by default.**

- Inbound connections from **all IPs** can be **allowed** for 

  - **9001 tcp**: Allowing inbound connections on port 9001 ensures your node acts as a relay node. Relay nodes are the backbone of the Minima peer-to-peer network that faciliate the transmission of transactions and blocks across the network and support the network to scale. 
If your inbound connection is closed, your node will only make outgoing connections and will not act as a relay node.

- Inbound connections from **all IPs** should be **denied** to:

  - **9003 tcp** : if not enabling the MiniDapp system (i.e. you are using Minima headlessly)
  - **9002 tcp** : Port not in use
  - **9004 tcp** : Port not in use
  - **9005 tcp**: RPC Port

- Inbound connections from your **HOME IP** can be **allowed** for 

  - **22 tcp** : Allows SSH access to the server, we recommend only allowing this from your home IP address but ensure that you can update this if your home IP dynamically changes, otherwise you could be locked out.

  - **9003 tcp**: if you intend to enable the MiniDapp system. If your home IP is dynamic, you will need to maintain this firewall rule to your latest IP. If you choose to allow inbound connections from anywhere, your login screen will be public facing, so your login password (mdspassword) must be long and secure, using a combination of lowercase, uppercase letters numbers and symbols.

  - **9005 tcp**: RPC Port - ADVANCED USERS ONLY! 

**Opening port 9005 is __extremely risky__ as it exposes your node and seed phrase if you have not [set a secure password for RPC access](/docs/runanode/selectplatform/linuxvpsservice#rpc-client-setup).**

To `curl` into the node remotely, ensure this is **only allowed inbound from your home IP address**. **You should only do this if you are an advanced user and understand the risks!**

</TabItem>

<TabItem value="ufw"> 

:::warning docker users
If using **Docker** to run your node on a VPS, you **must not rely on UFW** as your firewall, Docker will overwrite UFW firewall rules. You must use your VPS provider's firewall manager.
:::

As a user with sudo privileges:

1. Install Uncomplicated Firewall (ufw)

```
sudo apt install ufw
```

2. Run the following commands individually:

This will disable the firewall, deny incoming connections, accept outgoing connections, allow ssh and enable the firewall.

```
sudo ufw disable
```
```
sudo ufw default deny incoming
```
```
sudo ufw default allow outgoing
```
**DO NOT SKIP THE FOLLOWING STEP, OR YOU WILL BE LOCKED OUT OF YOUR SERVER!**
```
sudo ufw allow ssh
```


3. Allow inbound connections to 9001 from anywhere
```
sudo ufw allow in 9001
```

4. Allow inbound connections to your MiniDapp system only from your home IP address (replace xx.xx.xx.xx with your home ip)

*Note that most home IP addresses are not fixed and change, so you may have to redo this rule at a later date. You can find your home IP address by going to [ipchicken](https://ipchicken.com/) when connected to your home wifi network.*

```
sudo ufw allow from xx.xx.xx.xx to any port 9003
```


or to allow connections to your MiniDapp system from anywhere. **This will expose your login screen publicly.**

```
sudo ufw allow in 9003
```

5. Enable the firewall
```
sudo ufw enable
```
```
y
```

For more information see [here](https://wiki.debian.org/Uncomplicated%20Firewall%20%28ufw%29)

</TabItem>
</Tabs>


## Setup Minima as a systemd service


### 1. Server installations

<Tabs
  defaultValue="debian"
  values={[
    {label: 'Debian/Ubuntu', value: 'debian'},
    {label: 'CentOS/RedHat', value: 'centos'},
  ]}>

<TabItem value="debian">

#### Debian or Ubuntu

As a user with sudo privileges, install the following:

   ```bash
   sudo apt update -y
   sudo apt upgrade -y
   sudo apt install jq -y
   sudo apt install default-jdk -y
   sudo apt install wget -y
   ```

   - `sudo apt update -y`: Updates the package list to the latest version.
   - `sudo apt upgrade -y`: Upgrades all the installed packages to their latest versions.
   - `sudo apt install jq -y`: Installs `jq`, a lightweight and flexible command-line JSON processor.
   - `sudo apt install default-jdk -y`: Installs the default Java Development Kit (JDK).
   - `sudo apt install wget -y`: Installs `wget`, a utility for non-interactive download of files from the web.

</TabItem>

<TabItem value="centos">

#### CentOS or RedHat

As a user with sudo privileges, install the following:
    
    sudo yum update -y
    sudo yum install jq -y
    sudo yum install java-1.8.0-openjdk-devel -y
    sudo yum install wget nano -y
    

   - `sudo yum update -y`: Updates the package list to the latest version.
   - `sudo yum install jq -y`: Installs `jq`, a lightweight and flexible command-line JSON processor.
   - `sudo yum install java-1.8.0-openjdk-devel -y`: Installs the Java Development Kit (JDK) version 1.8.0.
   - `sudo yum install wget -y`: Installs `wget`, a utility for non-interactive download of files from the web.
   
</TabItem>
</Tabs>

--------------------

### 2. Minima node setup


<Tabs
  defaultValue="mds"
  values={[
    {label: 'With MiniDapps', value: 'mds'},
    {label: 'Headless (no MiniDapps)', value: 'nomds'},
  ]}>

<TabItem value="mds">

1. Create a minima user

```
sudo adduser minima
```

2. Set a password for the user and confirm it, leave all other settings blank by pressing enter, then `y` to confirm. **Make sure to remember this user's password!** 

3. Still as your user, set up the journal logs service:

```
sudo tee <<EOF >/dev/null /etc/systemd/journald.conf
Storage=persistent
EOF
```

4. Restart the service 

```
sudo systemctl restart systemd-journald
```

5. Create the Minima systemd file:

:::important password options
Edit the file to change the password, use the arrow keys to go to `yourpasswordhere` and set a secure password of over 12 characters using a-z, A-Z, 0-9 and !@#=?+><,.-_'()/ symbols only. <br/>
Alternatively, if you would like a random login password generated for you, remove `-mdspassword yourpasswordhere` completely, then [setup the RPC client](#setup-the-rpc-client) to find it. 
:::

```
sudo tee <<EOF >/dev/null /etc/systemd/system/minima.service
[Unit]
Description=minima
[Service]
User=minima
Type=simple
ExecStart=/usr/bin/java -jar /home/minima/minima.jar -mdsenable -mdspassword yourpasswordhere -daemon -basefolder /home/minima -data /home/minima/.minima
Restart=always
RestartSec=100
[Install]
WantedBy=multi-user.target
EOF
```

To reopen the file if required:
```
sudo nano /etc/systemd/system/minima.service
```

use `ctrl-X` then `Y` then press enter to save changes.

6. Switch to the minima user and go to the home directory

```
sudo su minima
```
```
cd /home/minima
```

7. Download the minima jar file from Github

```
wget https://github.com/minima-global/Minima/raw/master/jar/minima.jar
```
8. Exit back to your user
```
exit
```

9. Reload the services

```
sudo systemctl daemon-reload
```
10. Enable and start the minima service
```
sudo systemctl enable minima
```
```
sudo systemctl start minima
```
11. View the logs to see your node starting up
```
sudo journalctl -u minima -f
```
(Ctrl+C will exit the log stream)

**Congratulations, your node is now running!**

:::note Headless interaction with Minima
To interact with your node headlessly, bypassing the MiniDapp system, you can setup the RPC client as below. Otherwise, skip to [preparing for future releases](/docs/runanode/selectplatform/linuxvpsservice#3-prepare-for-future-releases)
:::


#### RPC client setup

You can interact with your node headlessly by setting up the RPC client for your node: 

1. Log on to your server then stop and disable Minima
```
sudo systemctl stop minima
```
```
sudo systemctl disable minima
```
2. Edit the Minima service file
```
sudo nano /etc/systemd/system/minima.service
``` 
3. Edit the start up line to include the following parameters to enable RPC

```
-rpcenable -rpcpassword yourrpcpassword -rpcssl
```

***Enter a password over 12 characters using a-z, A-Z, 0-9 and !@#=?+><,.-_'()/ symbols only.***

**Example**
```
...
ExecStart=/usr/bin/java -jar /home/minima/minima.jar -rpcenable -rpcpassword yourrpcpassword -rpcssl -mdsenable -mdspassword yourpasswordhere -daemon -basefolder /home/minima -data /home/minima/.minima
...
```

Press `ctrl+x`, then `y` then Enter to save and exit

4. Reload the daemon and start Minima
```
sudo systemctl daemon-reload
```
```
sudo systemctl enable minima
```
```
sudo systemctl start minima
```
5. Check the logs to ensure it has started up
```
sudo journalctl -u minima -f
```
then `ctrl+c` to exit the logs

6. Create a file and paste in the script below, ensuring that you **change the password**

```
sudo nano minima
```

```
#!/bin/sh

#Start the Minima RPC Client 
java -cp /home/minima/minima.jar org.minima.utils.MinimaRPCClient -password yourrpcpassword -host https://127.0.0.1:9005
```

Write the file using ctrl-`x` then confirm with `y`

7. Give the right permissions

```
sudo chmod +x ./minima
```

8. Run the script to start the RPC Client Terminal

```
./minima
```

![RPCClient](/img/runanode/rpcclient.png)

You can run any Minima commands here. 

Type `block` then enter to return your top block. `status` will return details about your node. 

Type `help` to see a list of all commands

Type `help command:` to see detailed help for any command.

12. To exit the Terminal, type `exit`

**Do not type `quit` as this will shutdown your node.**


**You are now ready to use Minima!**


</TabItem>

<TabItem value="nomds">

1. Create a minima user

```
sudo adduser minima
```

2. Set a password for the user and confirm it, leave all other settings blank by pressing enter, then `y` to confirm. **Make sure to remember this user's password!** 

3. Still as your user, set up the journal logs service:

```
sudo tee <<EOF >/dev/null /etc/systemd/journald.conf
Storage=persistent
EOF
```

4. Restart the service 

```
sudo systemctl restart systemd-journald
```

5. Create the Minima systemd file:


```
sudo tee <<EOF >/dev/null /etc/systemd/system/minima.service
[Unit]
Description=minima
[Service]
User=minima
Type=simple
ExecStart=/usr/bin/java -jar /home/minima/minima.jar -rpcenable -rpcpassword INSERTRPCPASSWORD -rpcssl -daemon -basefolder /home/minima -data /home/minima/.minima
Restart=always
RestartSec=100
[Install]
WantedBy=multi-user.target
EOF
```

To reopen the file if required:
```
sudo nano /etc/systemd/system/minima.service
```

use `ctrl-X` then `Y` then press enter to save changes.

6. Switch to the minima user and go to the home directory

```
sudo su minima
```
```
cd /home/minima
```

7. Download the minima jar file from Github

```
wget https://github.com/minima-global/Minima/raw/master/jar/minima.jar
```
8. Exit back to your user
```
exit
```

9. Reload the services

```
sudo systemctl daemon-reload
```
10. Enable and start the minima service
```
sudo systemctl enable minima
```
```
sudo systemctl start minima
```
11. View the logs to see your node starting up
```
sudo journalctl -u minima -f
```
(Ctrl+C will exit the log stream)

**Congratulations, your node is now running!**

Now that your node is running, you can setup the RPC client to interact with your node headlessly.

#### RPC Client setup

1. Create a file and paste in the script below, ensuring that you **change the password**<br/>
***Enter a password over 12 characters using a-z, A-Z, 0-9 and !@#=?+><,.-_'()/ symbols only.***

```
sudo nano minima
```

```
#!/bin/sh

#Start the Minima RPC Client 
java -cp /home/minima/minima.jar org.minima.utils.MinimaRPCClient -password yourrpcpassword -host https://127.0.0.1:9005
```

Write the file using ctrl-`x` then confirm with `y`

2. Give the right permissions

```
sudo chmod +x ./minima
```

3. Run the script to start the RPC Client Terminal

```
./minima
```

![RPCClient](/img/runanode/rpcclient.png)

You can run any Minima commands here. 

Type `block` then enter to return your top block. `status` will return details about your node. 

Type `help` to see a list of all commands and `help command:` to see detailed help for any command.

12. To exit the Terminal, type `exit`

**Do not type `quit` as this will shutdown your node.**


</TabItem>

</Tabs>

:::note prepare for future releases
Your node will **not** auto-update so [prepare for future releases](#3-prepare-for-future-releases) to make updating easy.
:::

------------------


### 3. Prepare for future releases

Your node will not update to new versions of Minima automatically. 

You can check the version of your node by running the `status` command from the RPC Client. See [How to use the RPC client](/docs/runanode/selectplatform/linuxvpsservice#using-the-rpc-client).

To create a script that you can run everytime you wish to update your node:

1. Login as your user with sudo privileges

2. Create the update script

```
sudo nano updateminimajar.sh
```

3. Paste in the script:
```
#!/bin/sh

#stop and disable service
sudo systemctl stop minima
sudo systemctl disable minima

#remove old minima.jar from your home folder (if it exists)

rm minima.jar

#get latest jar

wget https://github.com/minima-global/Minima/raw/master/jar/minima.jar 

#change name minima.jar in minima user to minima.jar_old

sudo mv /home/minima/minima.jar /home/minima/minima.jar_old

#move the new jar to minima folder

sudo mv minima.jar /home/minima/minima.jar

#reenable and start minima service

sudo systemctl daemon-reload
sudo systemctl enable minima
sudo systemctl start minima

sudo journalctl -u minima -f
```

4. Save the script:

ctrl-`x` then `y` then press Enter

5. Give permissions to the script

```
sudo chmod +x ./updateminimajar.sh
```

6. Run the script

```
./updateminimajar.sh
```

You will see the logs showing using the updated version. 

7. To exit the logs, use ctrl-`c`

For future updates, you simply need to run the script (steps 6 and 7).

------------------

### Useful Server commands
`sudo journalctl -u minima -f` : Show the Minima logs<br/>
ctrl-`c` : Exits the Minima logs (Minima will continue to run in the background)<br/>
`sudo ps -fC java` : Shows all running Java processes<br/>
`sudo systemctl status minima` - Check the status of the Minima background service<br/>
`sudo systemctl stop minima` - Stop the Minima service<br/>
`sudo systemctl disable minima` - Disable the Minima service<br/>
`sudo systemctl enable minima` - Enable the Minima service <br/>
`sudo systemctl start minima` - Start the Minima service<br/>


----------------

## First steps

### 1. Login to your node

The first time accessing your MiniDapp hub, you may need to pass through the security warning as the MiniDapp system uses self-signed certificates. Learn how [here](https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/).

Go to **https://YourServerIP:9003/** in your web browser, you will see your login screen. 

Enter your password to login. This is the `-mdspassword` parameter you set in the minima.service file.

![mds_login](/img/runanode/mds_login.png#width50)

<details>
<summary> How to check your login password</summary>

If you forgot the password you set in step 7 above, you can check the password you set in the minima.service file.

1. Log on to your server 
2. Run
```
sudo nano /etc/systemd/system/minima.service
``` 
The `-mdspassword` parameter is your login password. 


If you chose not set a password in the minima.service file, set up the RPC client below and then run the `mds` command to find your password to login.
</details>

### 2. Connect to the network

The first time you install Minima, you will need to 

1. Connect to the network
2. Write down your seed phrase

Please refer to the [user guides](/docs/userguides/newusers/jointhenetwork) to learn how.


------


## Advanced

### Optional start up parameters

<details>
<summary>Expand to see full list of start up parameters</summary>

The parameters used in this script:

**-mdsenable** : (Optional) Enables the MiniDapp System (MDS) 

**-mdspassword yourpasswordhere** : (Optional) The password to access your MiniDapp System at https://yourserverip:9003<br/>
***Enter a password over 12 characters using a-z, A-Z, 0-9 and !@#=?+><,.-_'()/ symbols only.***

**-daemon** : Runs Minima as a background service 

**-rpcenable** : (Optional) Enables RPC so you can use the RPC client<br/>
***IF ENABLED YOU MUST ENSURE YOUR RPC PORT IS CLOSED TO INCOMING CONNECTIONS OR YOUR FUNDS WILL BE AT RISK. See [recommended firewall settings](/docs/runanode/systemrequirements#recommended-firewall-settings)***.

**-basefolder /home/minima** : The folder where files exported from your node will be stored

**-data /home/minima/.minima** : The hidden data folder for your node - THIS MUST NOT BE REMOVED 
The following start up parameters can optionally be specified when starting your node. 

To add/remove parameters after a node has been started, you must `quit` the node and restart it, adding/removing the required parameters. 

Additional optional parameters:

`[]` square brackets indicate where an input is required, **the brackets should not be included.**

#### General
- `-clean` : CAREFUL! Clears existing data, starts a new fresh node. All coins will be lost.<br/>
- `-port [port]` : specify the initial port for Minima to use. Range used will be the specified port +4. Default is 9001-9005.<br/>
- `-host [ipaddress]` : specify the host IP<br/>
- `-dbpassword` : Main Wallet / SQL AES password - MUST be specified on first launch. **CANNOT be changed later.** <br/>
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

### Interacting headlessly 

#### Using the RPC client

The best way to interact with the node headlessly is to [enable the RPC client](/docs/runanode/selectplatform/linuxvpsservice#rpc-client-setup).

Once enabled, to start the RPC client when logged on to the server, enter:

```
./minima
```

You will see the Minima terminal header appear. 

To check the status of your node, enter `status` command, or type `help` to see the full list of commands. 


#### Using cURL over RPC
 
You can send commands to your Minima node using cURL to the RPC port. 

<Tabs
  defaultValue="debian"
  values={[
    {label: 'Debian/Ubuntu', value: 'debian'},
    {label: 'CentOS/RedHat', value: 'centos'},
  ]}>

<TabItem value="debian">

Install cURL and jq for improved formatting
```
sudo apt install curl jq -y
```
</TabItem>

<TabItem value="centos">

Install cURL and jq for improved formatting
```
sudo yum install curl jq -y
```

</TabItem>
</Tabs>

#### cURL Examples: 

To interact with your node locally (whilst logged onto the server):

```
curl -k -u minima:[yourRPCpasswordhere] serverip:9005/status
```

To interact from an external computer, use SSH with each command, logging in with the minima user:

```
ssh minima@YourServerIP curl -k -u minima:[yourRPCpasswordhere] serverip:9005/status
```


To use commands that require spaces, use `%20` instead:

```
ssh minima@YourServerIP curl -k -u minima:[yourpasswordhere] serverip:9005/backup%20password:insertpassword%20file:insertpathtobackup\backupname.bak | jq
```


