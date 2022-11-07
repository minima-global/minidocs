---
sidebar_position: 2
---

# Linux VPS

We will be using Docker software to make running a Minima node simple.

Once your node is set up, you will be able to use Minima's decentralized applications.

:::note What is Docker?
Docker is an open-source software platform that simplifies the process of running, testing and managing applications. 
It uses the operating system of the computer on which it’s installed to provide an independent computing environment for an application to run on.
::: 

## How to start a new Minima node

### Remove nodes installed using the old script
If you have been running a node using the install script provided, please remove these nodes.

1. Logon to your server as the root user

![VPS_login](/img/runanode/docker_vps_1login.png#width50?raw=true)

:::tip Check running nodes
To check which nodes you currently have running, use the command `systemctl list-units --type=service`. 
:::

![VPS_checknodes](/img/runanode/docker_vps_2checkoldnodes.png#width50)

2. To remove nodes which were installed using our install script, run the uninstall script below (all one line).

>```wget -O minima_remove.sh https://raw.githubusercontent.com/minima-global/Minima/master/scripts/minima_remove.sh && chmod +x minima_remove.sh && sudo ./minima_remove.sh -p 9001 -x```

![VPS_removenodes](/img/runanode/docker_vps_3removeoldnodes.png)

:::tip Multiple nodes?
 If you started multiple nodes, run the uninstall script for each node changing the port number each time.
:::


3. Remove all existing folders: 
```
rm -rf /home/minima/
```
![VPS_removefolder](/img/runanode/docker_vps_5removefolder.png#width50)

4. Delete the existing minima user: 
```
userdel minima
```
:::note
If there is an *“unable to delete minima user, minima user using process xxxxxxx”* error, please reboot the server, log back in as root  then do `userdel minima` immediately on login.
:::

![VPS_removeuser](/img/runanode/docker_vps_6removeuser.png#width50)

### Start a new Minima node
1. Log on as the root user and add a new minima user, set a password and leave the remaining fields as default : 
```
adduser minima
```
**Please make a note of the password you set for the minima user, you may have to login as this user later. **

![VPS_adduser](/img/runanode/docker_vps_8adduser.png#width50)

2. Confirm the new user with `y`
3. Give sudo (admin) permissions to the minima user: 
```
usermod -aG sudo minima
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
8. Exit back to root user: 
```
exit
```
9. Switch to  minima user to refresh the groups: 
```
su - minima
```
![VPS_switchuser](/img/runanode/docker_vps_14switchuser.png#width50)

10. Start your node:

:::important SET YOUR PASSWORD
**Make sure to change the password below from `123` to a secure password using lowercase letters and numbers only of your choice. This will be the password to access your Minidapp Hub.**
:::

>```docker run -d -e minima_mdspassword=123 -e minima_server=true -v ~/minimadocker9001:/home/minima/data -p 9001-9004:9001-9004 --restart unless-stopped --name minima9001 minimaglobal/minima:latest```

:::note What do all the parameters mean?

- `-d`: daemon mode, Minima will run in the background
- `-e minima_mdspassword=123` : sets the password for your MiniDapp system to 123. **YOU MUST USE A LONG SECURE PASSWORD USING LOWERCASE LETTERS AND NUMBERS ONLY**
- `-e minima_server = true` : sets your node type as a server node that receives incoming connections
- `-v ~/minimadocker9001:/home/minima/data` : creates a local folder called **minimadocker9001** in your home directory and maps it to the **/home/minima/data** directory in Docker. The **minimadocker9001** folder is where the Minima database and is also where your backups will be stored.
- `-p 9001-9004:9001-9004` : the port number mapping from your server to the Docker container
- `--restart unless-stopped` : ensures your container automatically restarts unless you stop it
- `--name minima9001` : sets the name of your Minima container to minima9001
- `minimaglobal/minima:latest` : specifies where to pull the Minima code from
:::

![VPS_startminima](/img/runanode/docker_vps_15startminima.png)

Congratulations! Your Node is up and running. Continue to Install the Watchtower to automatically update Minima. 

## How to automate updates with Watchtower

1. Start a Watchtower container to **automatically update Minima when a new version is available.**
```
docker run -d --restart unless-stopped --name watchtower -e WATCHTOWER_CLEANUP=true -e WATCHTOWER_TIMEOUT=60s -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower
```
Every 24 hours, the Watchtower will check whether there is a new version of Minima and will update if so. 

![VPS_startwatchtower](/img/runanode/docker_vps_16startwatchtower.png)

2. Ensure Docker starts up automatically when the server starts 

```
sudo systemctl enable docker.service
```
```
sudo systemctl enable containerd.service
```

3. Check Minima and the Watchtower containers are running
```
docker ps
```

Next, access your MiniDapp hub and **[setup your Incentive Program account](#set-up-your-incentive-program-account)** to start earning Rewards.


## Set up your Incentive Program account 

The first time accessing your MiniDapp hub, you may need to pass through the security warning - see below - as the MiniDapp system currently uses self-signed certificates.

1. Go to **https://YourServerIP:9003/** in your web browser

Click on **Advanced**, then **Proceed**. Or in Google Chrome, you may have to click anywhere on the page and type `thisisunsafe` to proceed. Details for other browsers can be found [**here**](https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/).<br/>

You will see your MiniDapp System (MDS) login page. 

![mds_login](/img/runanode/mds_login.png#width50)

3. Enter your password to login, if you don't remember, you can check [here](#how-to-check-your-minima-hub-password).

4. You will see your MiniDapp hub!

5. Open the Incentive Program minidapp

![mds_IP](/img/runanode/IP_minidapp.png#width50)

6. Follow the instructions to login to the Incentive Program website and **copy your Incentive ID**

7. Paste your Incentive ID into the field provided and click **Update**

![mds_IP](/img/runanode/IP_updateid.png#width50)

8. Check the Rewards page to check your balance!

![mds_IP](/img/runanode/IP_checkrewards.png#width50)

## FAQ 

### Useful Docker commands

The following commands can be run from your server command line. 

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

### How to check your Minima hub password
You can use the Docker CLI/Terminal to interact with your node, for example to check your status, balance, password, incentive program setup or to create a backup.

1. Log on to your server as the minima user (if not already logged in)
2. Start the Minima Terminal by running the command
```
docker exec -it minima9001 minima
``` 
![VPS_dockerterminal](/img/runanode/docker_vps_terminal.png)


3. Type `mds` to see your password

![VPS_dockerterminal](/img/runanode/docker_vps_terminalmds.png)


**Useful commands:**<br/>
`status` - see the status of your node<br/>
`incentivecash` - check your Incentive Program balance<br/>
`incentivecash uid:` - setup your Incentive Program account by connecting your Incentive ID<br/>
`help` - show all commands

### How to check the status of your node
To check the status of your node, you can either use the Minima Terminal via Docker (shown above) or log on to your MiniDapp hub and open the Minima Terminal minidapp.

With the Minima Terminal open, run the `status` command to see the latest status of your node including version, last block and chain details.

![VPS_dockerterminal](/img/runanode/docker_vps_terminalstatus.png)


### How to take a backup of your node

1. Login to your Minima Hub at https://yourserverIP:9003/
2. Open the Terminal MiniDapp
3. Enter the `backup` command, completing the parameters

```
backup password: file: auto: complete:
```
:::note backup parameters
**password:** set a password **lowercase letters and numbers only** for your backup, this will be required when restoring it

**file:** (optional) backup name 

**auto:** (optional) **true** or **false**. Will set the backup to repeat every 24 hours.

**complete:** (optional) **true** or **false**. A complete backup includes the Archive database. Please allow more time for a complete backup to finish. 
:::

Your backup will go to the **minimadocker9001** folder in your home directory.

### How to restore your node from a backup

Your backup must be in the **minimadocker9001** folder in your home directory (as specified at start up).

1. Login to your Minima Hub 
2. Open the Terminal MiniDapp
3. Enter the `restore` command, completing the parameters

```
restore file: password:
```
:::note restore parameters
**password:** (optional) the password of the backup 

**file:** (optional) backup name, with or without file path
:::

If successful, you will need to log out/log in from your Minima hub for the restore to take effect.

### How to start a test node as a developer
To create a private test node from Genesis on ports 10001-10004, use the following start up command:

> ```docker run -d -e minima_mdspassword=123 -e minima_server=true -e minima_genesis=true -e minima_test=true -e minima_nop2p=true -v ~/minimadocker10001_dev:/home/minima/data -p 10001-10004:9001-9004 --restart unless-stopped --name minima10001_dev minimaglobal/minima:latest```

:::note test parameters
The additional test parameters used are:

`-p 10001-10004:9001-9004` : Local ports 10001-10004 will be forwarded to 9001-9004 on Docker. <br/>
You can change 10001-10004 to another set of unused ports however the Docker ports must remain as 9001-9004.

`-e minima_genesis=true` : Start a node from the Genesis block<br/>

`-e minima_test=true` : Use test parameters e.g. blocks are automined and block times are faster<br/>

`-e minima_nop2p=true` : Do not start the p2p system<br/>
:::

### How to enable RPC (advanced users)
:::warning
You should only enable RPC if you have correct [firewalls](/docs/runanode/selectplatform/linux_vps#using-a-firewall-to-secure-your-rpc-port) in place blocking access to the Minima RPC port, 9005.<br/>
If you have multiple Minima nodes you will need to block all RPC ports (base port +4).
:::

To enable RPC, replace `-p 9001-9004:9001-9004` with `-p 9001-9005:9001-9005` when starting your node. <br/> 

On a second node, this would be: `-p 8001-8005:9001-9005`.

Example:
>```docker run -d -e minima_mdspassword=123 -e minima_server=true -v ~/minimadocker9001:/home/minima/data -p 9001-9005:9001-9005 --restart unless-stopped --name minima9001 minimaglobal/minima:latest```


#### RPC commands

By default Minima is installed on ports 9001-9005. The default RPC port is 9005.
 
You can send commands to your Minima node using curl to the RPC port. 

To install curl:
`sudo apt install curl` then `y`

For improved formatting:
`sudo apt install jq` then `y`

Example: To check the status of your Minima node when logged on to the server:

`curl 127.0.0.1:9005/status | jq`

You will see the current block and other information about your node. 

`curl 127.0.0.1:9005/incentivecash | jq` - shows your incentive cash balance<br/>
`curl 127.0.0.1:9005/help | jq` - shows the full list of commands<br/>

#### Using a firewall to secure your RPC port 

**If you have enabled RPC, you must take steps to protect your server from external access.**

:::warning
If you have other applications on your server other than Minima - please review your existing firewall settings before proceeding.
:::

To install a firewall and secure your node:

1. ssh into your server as root

2. Install Uncomplicated Firewall (ufw)<br/>
`apt-get install ufw`

3. Then immediately disable it, to first configure it<br/>
`ufw disable`

4. Allow incoming/outgoing connections as default<br/>
`ufw default allow`

5. Deny incoming connections to your RPC ports - 9005 (and other RPC if you have multiple nodes)<br/>
`ufw deny in 9005`<br/>
`ufw deny in 8005` (optional)<br/>

6. Ensure ssh is allowed<br/>
`ufw allow ssh`

7. Enable the firewall<br/>
`ufw enable`

8. Confirm<br/>
`y` <br/>

Your firewall is now configured.

You will still be able to send rpc commands directly from your server using curl <br/>
e.g.  `curl 127.0.01:9005/status | jq`

However, if you wish to check your node from an external computer, you must use SSH with each command. <br/>
e.g. `ssh  root@YourServerIP curl 127.0.0.1:9005/status`

If you have jq installed on your computer (for improved formatting)<br/>
`ssh  root@YourServerIP curl 127.0.0.1:9005/status | jq`

Each request will require your server password.

Lock it down.


### How to remove a node
:::important
**Removing a node without taking a backup will delete all your coins! Only remove a node if you have taken a backup or are running a test node.**
:::

To remove a Docker node:
1. Open Docker
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

## Next Steps

Once your node running, see [How to use MiniDapps](/docs/runanode/usingminidapps) to start testing!

Thank you for participating and contributing to our Testnet.

Learn more:<br/>

[What are MiniDapps?](/docs/learn/minidapps/minidappsintro) <br/>
[Download the latest MiniDapps](https://minidapps.minima.global/) <br/>


