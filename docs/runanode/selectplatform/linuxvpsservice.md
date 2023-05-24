---
sidebar_position: 3
---

# Linux VPS (as a Service)

Installing Minima as a Service is an alternative to using Docker, however this method will NOT auto-update so you will need to manually update your node when a new version becomes available.

Once your node is set up, you will be able to use Minima's decentralized applications.

The following instructions assume your server is **new with no existing installations.**

## Set up your Firewall 

By default Minima is installed on ports 9001-9005. Only ports 9001,9003,9004 need to be open to use Minima and the MiniDapp system. 

**The RPC Port (default 9005) must never be opened to incoming connections**

:::warning custom ports
If you install Minima on custom ports, ensure the correct ports are open/closed.
:::

For more information, see [System Requirements.](/docs/runanode/systemrequirements)

For help on setting up a firewall, see [Recommended Firewall settings](/docs/runanode/systemrequirements#recommended-firewall-settings-vps-users)

## Setup Minima as a Service

1. As a user with sudo priviledges (or the root user), install the following:
```
sudo apt install update
```
```
sudo apt install git
```
```
sudo apt-get install jq
```
```
sudo apt-get install openjdk-11-jre -y
```
```
sudo apt-get install wget
```
```
sudo apt-get install tmux
```
2. Create a minima user

```
sudo adduser minima
```

3. Set a password for the user and confirm it, leave all other settings blank by pressing enter, then `y` to confirm: 

4. Still as your user (or root user), set up the journal logs service:

```
sudo tee <<EOF >/dev/null /etc/systemd/journald.conf
Storage=persistent
EOF
```

5. Restart the service 

```
sudo systemctl restart systemd-journald
```

6. Create the Minima service by entering the following:


```
sudo tee <<EOF >/dev/null /etc/systemd/system/minima.service
[Unit]
Description=minima
[Service]
User=minima
Type=simple
ExecStart=/usr/bin/java -Xmx2G -jar /home/minima/minima.jar -mdsenable -mdspassword yourpasswordhere -daemon -rpcenable -basefolder /home/minima -data /home/minima/.minima
Restart=always
RestartSec=100
[Install]
WantedBy=multi-user.target

EOF
```
:::note Start up parameters
Note the parameters used in this script:

**-mdsenable** : (Optional) Enables the MiniDapp System (MDS) 

**-mdspassword yourpasswordhere** : (Optional) The password to access your MiniDapp System at https://yourserverip:9003<br/>
***You must only use a-z, A-Z and 0-9 for this password, no symbols.***

**-daemon** : Runs Minima as a background service 

**-rpcenable** : (Optional) Enables RPC so you can use the RPC client<br/>
***IF ENABLED YOU MUST ENSURE YOUR RPC PORT IS CLOSED TO INCOMING CONNECTIONS OR YOUR FUNDS WILL BE AT RISK. See [recommended firewall settings](/docs/runanode/systemrequirements#recommended-firewall-settings)***.

**-basefolder /home/minima** : The folder where files exported from your node will be stored

**-data /home/minima/.minima** : The hidden data folder for your node - THIS MUST NOT BE REMOVED 

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

7. Switch to the minima user

```
sudo su minima
```
8. Go to the home directory

```
cd /home/minima
```

9. Download the minima jar file from Github

```
wget https://github.com/minima-global/Minima/raw/master/jar/minima.jar
```
10. Exit back to your user (or the root user)

11. Reload the services

```
sudo systemctl daemon-reload
```
12. Enable the minima service
```
sudo systemctl enable minima
```
13. Start the minima service

```
sudo systemctl start minima
```
14. View the logs
```
sudo journalctl -u minima -f
```

## Setup the RPC client 

If you included the `-rpcenable` parameter above, then you can set up the RPC Client to interact with your node as follows:

1. Create a file

```
nano minima
```

2. Paste in this text

```
#!/bin/sh

#Start the Minima RPC Client 
java -cp /home/minima/minima.jar org.minima.utils.MinimaRPCClient
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

You can run any Minima commands here. To see a list of all commands, type `help`.

To see detailed help for any command, use `help command:`.

6. To exit the Terminal, use ctrl-`c`  or type `exit`

**Do not type `quit` as this will shutdown your node.**

Continue to secure your node.

## Secure your node 

Before using your node for the first time, you must:

1. Write down your Seed Phrase
2. Take a backup
3. Set a Vault password to encrypt your Keys (optional)

Please visit the [Secure your Node](/docs/runanode/securefunds) page to learn how. 

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

#check status

curl 127.0.0.1:9005/status | jq

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

## Access your MiniDapp hub

The first time accessing your MiniDapp hub, you may need to pass through the security warning - see below - as the MiniDapp system currently uses self-signed certificates.

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

### How to check your MiniDapp System password
If you cannot access MDS for any reason, you can use the RPC Client to interact with your node, for example to check your status, balance, MDS password or to create a backup.

The `mds` command will show details about the MiniDapp System (MDS) including your password and the MiniDapps installed on your node.

1. Log on to your server as the minima user (if not already logged in)
2. Start the Minima Terminal by running the command
```
./minima
``` 
3. Type `mds` to see your password

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

### Interacting with Minima

If you have enabled RPC, you can run the Minima RPC Terminal using:
```
./minima
```
From here, you can run any Minima command.




