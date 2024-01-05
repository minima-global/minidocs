---
sidebar_position: 5
---

# Linux VPS (Docker)

We will be using Docker software to make running a Minima node simple. If you prefer not to use Docker, you can create a script to run [Minima as a service](/docs/runanode/selectplatform/linuxvpsservice).

:::note What is Docker?
Docker is an open-source software platform that simplifies the process of running, testing and managing applications. 
It uses the operating system of the computer on which it’s installed to provide an independent computing environment for an application to run on.
::: 

## Setup your Firewall 

**If using Docker to run your node on a VPS, you must not rely on UFW as your firewall, Docker will overwrite UFW firewall rules. You must use your VPS provider's firewall manager.**

After configuring your firewall, you should check they are enforced as expected. 

For more information, see [System Requirements.](/docs/runanode/systemrequirements#recommended-firewall-settings-vps-users)

## Start a new Minima node

1. Log on as a non root user with sudo (admin) rights and add a new minima user, set a password and leave the remaining fields as default : 
```
sudo adduser minima
```
**Please make a note of the password you set for the minima user, you may have to login as this user later. **

![VPS_adduser](/img/runanode/docker_vps_8adduser.png#width50)

2. Confirm the new user with `y`
3. Give sudo (admin) permissions to the minima user: 
```
sudo usermod -aG sudo minima
```

![VPS_adduser2](/img/runanode/docker_vps_9giveuserperms.png#width50)

4. Switch to minima user: 
```
su - minima
```
![VPS_loginnewuser](/img/runanode/docker_vps_10loginasnewuser.png#width50)


5. Download the docker install script:  
```
sudo curl -fsSL https://get.docker.com/ -o get-docker.sh
```
![VPS_getdocker](/img/runanode/docker_vps_11getdocker.png)

6. Give the script permissions and run the installer for docker - this will take a few minutes to finish: 
```
sudo chmod +x ./get-docker.sh && ./get-docker.sh
```
![VPS_installdocker](/img/runanode/docker_vps_12installdocker.png)

7. Add the minima user to the Docker group: 
```
sudo usermod -aG docker $USER
```
8. Exit back to original user: 
```
exit
```
9. Switch to  minima user to refresh the groups: 
```
su - minima
```
![VPS_switchuser](/img/runanode/docker_vps_14switchuser.png#width50)

10. Start the container for your node:

:::important SET YOUR PASSWORD
Set your password below to at least 12 characters using alphanumeric characters and symbols.
:::

```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_server=true -v ~/minimadocker9001:/home/minima/data -p 9001:9001 -p 127.0.0.1:9003:9003 --restart unless-stopped --name minima9001 minimaglobal/minima:latest
```

<details><summary>What do all the parameters mean?</summary>
-d: daemon mode, Minima will run in the background <br/><br/>
-e minima_mdspassword=IN$ERTPA$$WORD : sets the password to login to your node.<br/><br/>
-e minima_desktop=true : sets your node type as a desktop node that does not receive incoming connections <br/><br/>
-v ~/minimadocker9001:/home/minima/data : creates a local folder called minimadocker9001 in your home directory and maps it to the /home/minima/data directory in Docker. The minimadocker9001 folder is where the Minima database and is also where your backups will be stored.<br/><br/>
-p 9001-9003:9001-9003 : the port number mapping from your desktop to the Docker container<br/><br/>
--restart unless-stopped : ensures your container automatically restarts unless you stop it<br/><br/>
--name minima9001 : sets the name of your Minima container to minima9001<br/><br/>
minimaglobal/minima:latest : specifies the Minima docker image<br/><br/>
</details>

<details><summary>Optional additional startup parameters</summary>

The following start up parameters can optionally be specified when starting your Docker node. 

To add/remove parameters after a node has been started, you must stop and remove your **minima9001** Docker container, then start it again, adding/removing the required parameters in front of **-v ~/minimadocker9001:/home/minima/data**.
As long as you use the same minimadocker8001 folder, your previous node will be preserved but will use different parameters.

#### General
- `-e minima_clean=true` : CAREFUL! Clears existing data, starts a new fresh node. All coins will be lost.<br/>
- `-e minima_host=ipaddress` : specify the host IP<br/>
- `-e minima_dbpassword=yourdbpassword` : Main Wallet / SQL AES password - MUST be specified on first launch. **CANNOT be changed later.** <br/>
- `-e minima_allowallip=true` : Allow all IPs for Maxima / Networking. Local IPs won't be allowed otherwise.<br/>
- `-e minima_archive=true` : Run an Archive node - store all archive data / the cascade to allow for resyncs from this node<br/>
- `-e minima_isclient=true` : Tells the P2P System that this node can't accept incoming connections<br/>
- `-e minima_server=true` : Use Server settings - this node can accept incoming connections<br/>
- `-e minima_desktop=true` : Use Desktop settings - this node can't accept incoming connections<br/>
- `-e minima_connect=ip:port` : Disable the automatic P2P system and create your own network by manually connecting to this list of host:port<br/>

#### MiniDapp System (mds)
- `-e minima_mdsenable=true/false` : enable the MiniDapp System (default port 9003). Enabled by default.<br/>
- `-e minima_mdspassword=yourmdspassword` : specify the mds login password <br/>

#### RPC
- `-e minima_rpcenable=true/false` : enable remote procedure call. Enabled by default.<br/>
- `-e minima_rpcssl=true` : use Self Signed SSL cert to run RPC<br/>
- `-e minima_rpcpassword=yourrpcpassword` : set Basic Auth password for RPC calls ( Use with SSL / stunnel ). Only secure if used with SSL.<br/>
- `-e minima_rpcclrf=true` : use CRLF at the end of the RPC headers (NodeJS)<br/>

#### Help
- `-e minima_showparams=true` : Show relevant startup params on launch<br/>
- `-e minima_help=true` : print help for the start up parameters

</details>

![VPS_startminima](/img/runanode/docker_vps_15startminima.png)

11. Ensure Docker starts up automatically when the server starts 

```
sudo systemctl enable docker.service
```
```
sudo systemctl enable containerd.service
```

Congratulations! Your Node is up and running. Continue to [install the Watchtower](#automate-updates-with-watchtower) to automatically update Minima. 

## Automate updates with Watchtower

1. Start a Watchtower container to **automatically update Minima when a new version is available.**
```
docker run -d --restart unless-stopped --name watchtower -e WATCHTOWER_CLEANUP=true -e WATCHTOWER_TIMEOUT=60s -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower
```
Every 24 hours, the Watchtower will check whether there is a new version of Minima and will update if so. 

![VPS_startwatchtower](/img/runanode/docker_vps_16startwatchtower.png)

2. Check that Minima and the Watchtower containers are running
```
docker ps -a
```
This will show all running and stopped (Exited) containers. 

Next, access your MiniDapp hub and secure your node.

## Login to your node

The first time accessing your MiniDapp hub, you may need to pass through the security warning - see below - as the MiniDapp system uses self-signed certificates.

1. Go to **https://YourServerIP:9003/** in your web browser

Click on **Advanced**, then **Proceed**. Or in Google Chrome, you may have to click anywhere on the page and type `thisisunsafe` to proceed. Details for other browsers can be found [**here**](https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/).<br/>

![mds_login](/img/runanode/mds_login.png#width50)

2. Enter your password to login, if you don't remember, you can check [here](#how-to-check-your-login-password).

You will see your MiniDapp hub!

## Secure your node 

Before using your node for the first time, you must:

1. Write down your Seed Phrase
2. Take a backup
3. Lock your wallet (optional)

Please visit the User guides section to learn how. 


## FAQ 

### Useful Docker commands

The following commands can be run from your server command line, logged in as the minima user. 

View the logs: `docker logs minima9001`<br/>

Stop Minima: `docker stop minima9001`<br/>

Remove your Minima container: `docker rm minima9001`<br/>

Start the Minima container: `docker start minima9001`<br/>

Restart the Minima container: `docker restart minima9001`<br/>

List all containers (Running and stopped): `docker ps -a`<br/>

List containers (Running only): `docker ps`<br/>

Stop containers listed: `docker stop minima9001 minima8001 minima7001`<br/>

Remove listed containers: `docker rm minima9001 minima8001 minima7001`<br/>

Help: `docker --help`<br/>

------
<!-- 
### How to check the Status of your node
1. Log on to your MiniDapp hub and open the Minima Terminal minidapp.

2. Run the `status` command to see the latest status of your node including version, last block and chain details.

![VPS_dockerterminal](/img/runanode/docker_vps_terminalstatus.png)

:::info checking your node is in sync
Having a recent block time is not a guarantee that you are on the right chain. <br/>
Consider cross checking your latest block with another node or checking the `samechain` response of your Maxima Contacts by running the `maxcontacts` command.
:::

:::warning 
If the time shown is significantly behind, you should restart your node to resync to the chain. <br/> 
If you have been offline for a long time or do not have a recent backup you may need to perform a [**chain resync**](/docs/runanode/restorefunds#from-desktopserver-using-the-terminal) from an Archive node.
:::
------ -->
<!-- 
### How to take a backup of your node

Before backing up your node, consider encrypting your private keys. For more information, see [Vault](/docs/userguides/securefunds#vault).

1. Login to your Minima Hub at https://yourserverIP:9003/
2. Open the Terminal MiniDapp
3. Enter the `backup` command with a password containing **uppercase and lowercase letters and numbers only**

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
Your backups will go to the **minimadocker9001** folder in your home directory.

:::note backup parameters
**password:** set a password for your backup **lowercase letters and numbers only**, this will be required when restoring it

**file:** (optional) backup name 

**auto:** (optional) **true** or **false**. Will set the backup to repeat every 24 hours. 
::: -->
<!-- 

### How to restore your node from a backup

Your backup must be in the **minimadocker9001** folder in your home directory (as specified at start up).

1. Login to your Minima Hub 
2. Open the Terminal MiniDapp
3. Enter the `restore` or `restoresync` command, completing the parameters

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
 -->


### How to check your login password

1. Logon to your server as the **minima** user
2. Access your docker container 

```
docker exec -it minima9001 /bin/bash
```

3. Edit the minima.config file
```
nano minima.config
```

4. Scroll to the bottom of the file and add a new line, insert `rpcenable=true`. 

Example:
```
data=/home/minima/data/.minima/
mdsenable=true
basefolder=/home/minima/data/
daemon=true
rpcenable=true
```

5. Hold the ctrl+x buttons together to exit
6. Save the file by selecting `y`, then press Enter
7. Exit the container by typing 
```
exit
```
8. Restart the container
```
docker restart minima9001
```

9. Now you can access your node's Terminal using

```
docker exec -it minima9001 minima
```

![VPS_dockerterminal](/img/runanode/docker_vps_terminal.png)

The `mds` command will show details about the MiniDapp System (MDS) including your password and the MiniDapps installed on your node.

10. Type `mds` to see your password

![VPS_dockerterminal](/img/runanode/docker_vps_terminalmds.png)

:::note 
RPC will be disabled the next time your docker container is updated to a new version, to enable RPC permanently, see [How to enable RPC (advanced users)](#how-to-enable-rpc-advanced-users) 
:::

**Useful commands:**<br/>
`status` - see the status of your node including version and chain details<br/>
`help` - show all commands

------

### How to change your login password

To change the password to login to your MiniDapp System (MDS), you must stop and remove your **minima9001** container and restart it with a different password. 

1. Stop the **minima9001** container
```
docker stop minima9001
```
2. Remove the **minima9001** container
```
docker rm minima9001
```

3. Repeat step 10 from [Start your node](#start-your-node), with a different password.  **Your password should be at least 12 characters using alphanumeric characters and symbols.**

:::important
Deleting the container will not delete the `minimadocker9001` data folder so your coins will be safe during this process.

When starting the new container, you must use the same `minimadocker9001` folder to ensure your coins and data are restored.
:::


-------


### How to start a second node in Docker

To run a second node in Docker, you can create another container using different port numbers, file path and name. 

1. To create a node on port 8001:

```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_server=true -v ~/minimadocker8001:/home/minima/data -p 8001-9003:9001-9003 --restart unless-stopped --name minima8001 minimaglobal/minima:latest
```

To login to your node, go to https://YourServerIP:8003/ 

------

### How to start a test node as a developer

To create a private test node from Genesis on ports 10001-10003, use the following start up command.

```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_server=true -e minima_genesis=true -e minima_test=true -e minima_nop2p=true -v ~/minimadocker10001_dev:/home/minima/data -p 10001-10003:9001-9003 --restart unless-stopped --name minima10001_dev minimaglobal/minima:latest
```
<details><summary> Test parameters </summary>
The additional test parameters used are:

`-p 10001-10003:9001-9003` : Local ports 10001-10003 will be forwarded to 9001-9003 on Docker. <br/>
You can change 10001-10003 to another set of unused ports however the Docker ports must remain as 9001-9003.

`-e minima_genesis=true` : Start a node from the Genesis block<br/>

`-e minima_test=true` : Use test parameters e.g. blocks are automined and block times are faster<br/>

`-e minima_nop2p=true` : Do not start the p2p system<br/>
</details>

### How to enable RPC (advanced users)

:::warning
Only enable RPC if you understand the risks and have appropriate firewalls in place to prevent unauthorised access to your node!
:::

If enabling RPC by opening the 9005 port, use the following additional parameters and set an RPC password for connecting over RPC on the start up line. You will only be able to use RPC commands if SSH'd into the server.

```
-e minima_rpcpassword=INSERTRPCPASSWORD -p 9001-9003:9001-9003 -p 127.0.0.1:9005:9005
```

Example:
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_rpcpassword=INSERTRPCPASSWORD -e minima_server=true -v ~/minimadocker9001:/home/minima/data -p 9001-9003:9001-9003 -p 127.0.0.1:9005:9005 --restart unless-stopped --name minima9001 minimaglobal/minima:latest
```

On a second node running on ports 8001-8005, this would be: 
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_rpcpassword=INSERTRPCPASSWORD -e minima_server=true -v ~/minimadocker8001:/home/minima/data -p 8001-9003:9001-9003 -p 127.0.0.1:8005:9005 --restart unless-stopped --name minima8001 minimaglobal/minima:latest
```

#### RPC commands

By default Minima is installed on ports 9001-9005. The default RPC port is 9005.
 
You can send commands to your Minima node using curl to the RPC port. 

To install curl:
`sudo apt install curl` then `y`

For improved formatting:
`sudo apt install jq` then `y`

Example: 

To check the status of your Minima node when logged on to the server:

```
curl -k -u minima:INSERTRPCPASSWORD 127.0.0.1:9005/status | jq
```

You will see the current block and other information about your node. 

To show the full list of commands:
```
curl -k -u minima:INSERTRPCPASSWORD 127.0.0.1:9005/help | jq
```

However, if you wish to check your node from an external computer, you must use SSH with each command. <br/>
```
ssh root@YourServerIP curl -k -u minima:INSERTRPCPASSWORD 127.0.0.1:9005/status
```

Each request will also require your server password.

#### Using the Docker CLI

To use your Docker CLI, you must add your RPC password:

```
docker exec -it minima9001 minima -password YOURRPCPASSWORD
```

<!-- :::warning
If you have other applications on your server other than Minima - please review your existing firewall settings before proceeding.
:::

To install a firewall and secure your node:

1. ssh into your server as non root user with sudo (admin) rights

2. Install Uncomplicated Firewall (ufw)<br/>
`sudo apt-get install ufw`

3. Then immediately disable it, to first configure it<br/>
`sudo ufw disable`

4. Allow incoming/outgoing connections as default<br/>
`sudo ufw default allow`

5. Deny incoming connections to your RPC ports - 9005 (and other RPC if you have multiple nodes)<br/>
`sudo ufw deny in 9005`<br/>
`sudo ufw deny in 8005` (optional)<br/>

6. Ensure ssh is allowed<br/>
`sudo ufw allow ssh`

7. Enable the firewall<br/>
`sudo ufw enable`

8. Confirm<br/>
`y` <br/>

Your firewall is now configured. -->


<!-- 
#### Using SSL to secure your RPC

**If you have enabled RPC, you must take steps to protect your server from external access.**
 -->


------

### How to remove a node

:::important
**Removing a node without taking a backup will delete all your coins! Only remove a node if you have taken a backup or are running a test node.**
:::

To remove a Docker node:
1. Login as the minima user to your server
2. Stop then delete the **minima9001** container
```
docker stop minima9001
docker rm minima9001
```
4. Delete the minimadocker9001 folder from your home directory by running
```
sudo rm -rf minimadocker9001
```

----------------

### Need help?

See [Using MiniDapps](/docs/userguides/usingminidapps) for more information or find us in [Discord](https://discord.gg/minima) or [Telegram](https://t.me/Minima_Global).


