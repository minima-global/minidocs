---
sidebar_position: 3
---

# Linux VPS (as a Service)

Installing Minima as a background process with SystemD is an alternative to using Docker.

SystemD is a daemon server that enables applications to run as background processes. 

Once your node is set up, you will be able to use Minima's decentralized applications.

The following instructions assume your server is using **Debian OS with no existing installations.**

For more information, see [System Requirements.](/docs/runanode/systemrequirements)


## Initial firewall setup

Before starting, please ensure your server firewall rules:

- do not allow any inbound (Ingress) traffic from anywhere (we will change this later)
- allow ssh connections (inbound on port 22)

You may use the default Firewall manager for your server or alternatively use Uncomplicated Firewall (UFW). 

If you wish to use UFW, expand the instructions below:

<details><summary> UFW initial setup instructions</summary>

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
```
sudo ufw allow ssh
```
```
sudo ufw enable
```
```
y
```
**MAKE SURE YOU HAVE NOT SKIPPED THE `ufw allow ssh` STEP, OR YOU WILL BE LOCKED OUR OF YOUR SERVER!**

</details>

After installing Minima, you will finish setting up the Firewall rules.

## Setup Minima as a background process

1. As a user with sudo priviledges, install the following:
```
sudo apt update -y
```
```
sudo apt upgrade -y
```
```
sudo apt install git -y
```
```
sudo apt install jq -y
```
```
sudo apt install openjdk-11-jre -y
```
```
sudo apt install wget -y
```

2. Create a minima user

```
sudo adduser minima
```

3. Set a password for the user and confirm it, leave all other settings blank by pressing enter, then `y` to confirm: 

4. Still as your user, set up the journal logs service:

```
sudo tee <<EOF >/dev/null /etc/systemd/journald.conf
Storage=persistent
EOF
```

5. Restart the service 

```
sudo systemctl restart systemd-journald
```

6. Create the Minima systemd file:

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

7. Edit the file to change the password, use the arrow keys to go to `yourpasswordhere` and set a secure password of **at least 12 characters using a-z, A-Z and 0-9 characters only.** 

```
sudo nano /etc/systemd/system/minima.service
```

8. Press `ctrl-X` then `Y` then press enter to save

9. Switch to the minima user and go to the home directory

```
sudo su minima
```
```
cd /home/minima
```

11. Download the minima jar file from Github

```
wget https://github.com/minima-global/Minima/raw/master/jar/minima.jar
```
12. Exit back to your user
```
exit
```

13. Reload the services

```
sudo systemctl daemon-reload
```
14. Enable and start the minima service
```
sudo systemctl enable minima
```
```
sudo systemctl start minima
```
15. View the logs to see your node starting up
```
sudo journalctl -u minima -f
```
(Ctrl+C will exit the log stream)

Congratulations, your node is now running!

:::note
Your node will **not** auto-update so you will need to [update your node](#updating-your-node) when a new version becomes available.
:::

You must now finish setting up your firewall rules.


## Finish firewall setup 

By default, Minima uses ports 9001-9005. 

- Port 9001 should be open to inbound (ingress) traffic from anywhere. This allows any other Minima node to initiate a connection to your node.
- Port 9002 should remain **closed** to inbound traffic (currently not used)
- Ports 9003 and 9004 should only be opened to your home IP address for accessing Minima and the MiniDapp system. 
- Port 9005 should remain **closed** - this is the RPC port which can be used to communicate with your node!

:::warning custom ports
If you install Minima on custom ports, ensure the correct ports are open/closed.
:::

As a user with sudo privileges:

1. Allow inbound connections to 9001 from anywhere
```
sudo ufw allow in 9001
```

2. Allow inbound connections to your MiniDapp system only from your home IP address (replace xx.xx.xx.xx with your home ip)
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

3. Enable the firewall
```
sudo ufw enable
```
```
y
```


You are now ready to use Minima!


## Access your MiniDapp hub

The first time accessing your MiniDapp hub, you may need to pass through the security warning as the MiniDapp system uses self-signed certificates.

1. Go to **https://YourServerIP:9003/** in your web browser

Click on **Advanced**, then **Proceed**. Or in Google Chrome, you may have to click anywhere on the page and type `thisisunsafe` to proceed. Details for other browsers can be found [**here**](https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/).<br/>

:::info trouble accessing MDS?
If you are having trouble accessing https://YourServerIP:9003/, please first go to https://YourServerIP:9004/ and accept the security warning. Then return to https://YourServerIP:9003/.
:::

You will see your MiniDapp System (MDS) login page. 

![mds_login](/img/runanode/mds_login.png#width50)

3. Enter your password to login, if you don't remember, you can check [here](#how-to-check-your-minidapp-system-password).

4. You will see your MiniDapp hub!

------
## Secure your node 

Before using your node for the first time, you should:

1. Write down your Seed Phrase
2. Take a backup
3. Lock your node to encrypt your private keys

Please visit the [Secure your Node](/docs/runanode/securefunds) page to learn how. 

-------

### How to check the Status of your node

To check the status of your node, you can either use the Minima RPC Client or log on to your MiniDapp hub and open the Minima Terminal minidapp.

With the Minima Terminal open, run the `status` command to see the latest status of your node including version, last block and chain details.

![VPS_dockerterminal](/img/runanode/docker_vps_terminalstatus.png)

:::info checking your node is in sync
Having a recent block time is not a guarantee that you are on the right chain. <br/>
Consider cross checking your latest block with another node or checking the `samechain` response of your Maxima Contacts by running the `maxcontacts` command.
:::

:::warning 
If the time shown is significantly behind, you should restart your node to resync to the chain. <br/> 
If you have been offline for a long time or do not have a recent backup you may need to perform a [**chain resync**](/docs/runanode/restorefunds#from-desktopserver-using-the-terminal) from an Archive node.
:::
------

### How to take a backup of your node

Before backing up your node, consider encrypting your private keys. For more information, see [Vault](/docs/runanode/securefunds#vault).

1. Start the Minima RPC Client or login to your Minima Hub at https://yourserverIP:9003/ and open the Terminal MiniDapp
2. Enter the `backup` command with a password containing **uppercase, lowercase letters and numbers only**

```
backup password: 
```
:::warning
This password cannot be retrieved at a later date, so remember it or write it down somewhere secure.
:::

####  Auto backups
You can create automatic backups every 24 hours however these backups cannot be password protected so we recommend encrypting your private keys before enabling auto backups.

```
backup auto:true
```
Your backups will go to the base directory you specified in your Minima service script (/home/minima)

:::note backup parameters
**password:** set a password for your backup **uppercase, lowercase letters and numbers only**, this will be required when restoring it

**file:** (optional) backup name 

**auto:** (optional) **true** or **false**. Will set the backup to repeat every 24 hours. 
:::

------

### How to restore your node from a backup

Your backup must be in your minima base folder (the /home/minima directory or as specified at start up).

1. Start the Minima RPC Client or login to your Minima Hub at https://yourserverIP:9003/ and open the Terminal MiniDapp
2. Enter the `restore` or `restoresync` command, completing the parameters

The `restore` command will restore your backup and then attempt to catch up to the top block by syncing from your peers. If your backup is older than 1 month, we recommend using `restoresync` instead. 
```
restore file: password:
```

The `restoresync` command will restore your backup and then attempt to catch up to the top block by syncing from a default archive node. If your backup is not recent, `restoresync` may be more effective for ensuring your node returns to the top block.

```
restoresync file: password:
```
:::note restore parameters
**file:** the name of the backup to restore, e.g. mybackup.bak

**password:** (optional) the password of the backup. Can be left blank if restoring an auto backup or non password protected backup.
:::

If successful, you will need to log out/log in from your Minima hub for the restore to take effect.

:::warning
If you encrypted your private keys before taking the backup that you are now restoring, your private keys will still be encrypted and you will be required to decrypt them or enter your Vault password when sending funds
::: 

-------

### How to check your MiniDapp System password

If you forgot the password you set in step 7 above, you can check the password you set in the minima.service file.

1. Log on to your server 
2. Run
```
sudo nano /etc/systemd/system/minima.service
``` 
The -mdspassword parameter is your login password. 

----------

## Updating your node

Your node will not update to new versions of Minima automatically. 

You can check the version of your node by running the `status` command from the RPC Client. (See [how to check the status of your node](#how-to-check-the-status-of-your-node).)

To create a script that you can run everytime you wish to update your node:

1. Login as your user with sudo privileges

2. Create the update script

```
nano updateminimajar.sh
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

------

## Setup the RPC client (Advanced users)

If you wish to interact with your node using RPC, you must enable RPC for your node:

1. Log on to your server 
2. Stop and disable Minima
```
sudo systemctl stop minima
```
```
sudo systemctl disable minima
```
3. Run
```
sudo nano /etc/systemd/system/minima.service
``` 
3. Edit the start up line to include the following parameters

```
-rpcenable -rpcpassword yourrpcpassword -rpcssl
```

set a long password of **at least 12 character using a-z, A-Z and 0-9 characters only.**

**Example**
```
...
ExecStart=/usr/bin/java -jar /home/minima/minima.jar -rpcenable -rpcpassword yourrpcpassword -rpcssl -mdsenable -mdspassword yourpasswordhere -daemon -basefolder /home/minima -data /home/minima/.minima
...
```

4. Press `ctrl+x`, then `y` then Enter to save and exit

5. Reload the daemon and start Minima
```
sudo systemctl daemon-reload
```
```
sudo systemctl enable minima
```
```
sudo systemctl start minima
```
6. Check the logs to ensure it has started up
```
sudo journalctl -u minima -f
```
then `ctrl+c` to exit the logs

7. Create a file

```
nano minima
```

2. Paste in this text and change the password to your password

```
#!/bin/sh

#Start the Minima RPC Client 
java -cp /home/minima/minima.jar org.minima.utils.MinimaRPCClient -password yourrpcpassword -host https://127.0.0.1:9005
```

3. Write the file using ctrl-`x` then confirm with `y`

4. Give the right permissions

```
sudo chmod +x ./minima
```

5. Run the script to start the RPC Client Terminal

```
./minima
```

![RPCClient](/img/runanode/rpcclient.png)

You can run any Minima commands here. 

Type `block` then enter to return your top block. `status` will return details about your node. 

Type `help` to see a list of all commands

Type `help command:` to see detailed help for any command.

6. To exit the Terminal, type `exit`

**Do not type `quit` as this will shutdown your node.**


------


## Useful Commands

### Server commands
`sudo journalctl -u minima -f` : Show the Minima logs<br/>
ctrl-`c` : Exits the Minima logs (Minima will continue to run in the background)<br/>
`sudo ps -fC java` : Shows all running Java processes<br/>
`sudo systemctl status minima` - Check the status of the Minima background service<br/>
`sudo systemctl stop minima` - Stop the Minima service<br/>
`sudo systemctl disable minima` - Disable the Minima service<br/>
`sudo systemctl enable minima` - Enable the Minima service <br/>
`sudo systemctl start minima` - Start the Minima service<br/>


### Optional start up parameters

<details><summary>Expand to see full list of start up parameters</summary>

The parameters used in this script:

**-mdsenable** : (Optional) Enables the MiniDapp System (MDS) 

**-mdspassword yourpasswordhere** : (Optional) The password to access your MiniDapp System at https://yourserverip:9003<br/>
***You must only use a-z, A-Z and 0-9 for this password, no symbols.***

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


