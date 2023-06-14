---
sidebar_position: 5
---

# Linux Desktop

We will be using Docker software to make running a Minima node simple.

Once your node is set up, you will be able to use Minima's decentralized applications.

:::note What is Docker?
Docker is an open-source software platform that simplifies the process of running, testing and managing applications. 
It uses the operating system of the computer on which it’s installed to provide an independent computing environment for an application to run on.
::: 

## Start a new Minima node

### Remove existing nodes

Before starting, stop any existing nodes you started manually by typing `quit` into the Terminal where the Minima logs are running.

### Start a new Minima node using Docker
1. Download and run the Docker installer from [here](https://docs.docker.com/desktop/install/linux-install/). Please check your system requirements.
2. Once installed, open Docker
3. Click on the **settings** icon, and select **Start Docker Desktop when you log in**

![Windows_dockerstartup](/img/runanode/docker_desktopstartup.png)


4. Click **Apply & Restart**
5. Open the Linux Terminal
6. Copy and paste the following into the Terminal 

:::important SET YOUR PASSWORD
Make sure to set the password below to a long password using A-Z, a-z and 0-9 characters only.<br/>
This will be the password to access your Minidapp Hub.
:::
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -v ~/minimadocker9001:/home/minima/data -p 9001-9004:9001-9004 --restart unless-stopped --name minima9001 minimaglobal/minima:latest
```

:::note What do all the parameters mean?

- `-d`: daemon mode, Minima will run in the background
- `-e minima_mdspassword=INSERTPASSWORD` : sets the password for your MiniDapp system. **YOU MUST USE A SECURE PASSWORD USING UPPERCASE, LOWERCASE LETTERS AND NUMBERS ONLY**
- `-e minima_desktop=true` : sets your node type as a desktop node that does not receive incoming connections 
- `-v ~/minimadocker9001:/home/minima/data` : creates a local folder called **minimadocker9001** in your home directory and maps it to the **/home/minima/data** directory in Docker. The **minimadocker9001** folder is where the Minima database and is also where your backups will be stored.
- `-p 9001-9004:9001-9004` : the port number mapping from your desktop to the Docker container
- `--restart unless-stopped` : ensures your container automatically restarts unless you stop it
- `--name minima9001` : sets the name of your Minima container to minima9001
- `minimaglobal/minima:latest` : specifies where to pull the Minima code from
:::

#### Optional start up parameters

<details><summary>Expand to see full list of start up parameters</summary>

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

7. Press the **Enter** key to run the command and start your node. 

8. You will notice a container in Docker called **minima9001**, this is running your Minima node.

![Windows_dockercontainer](/img/runanode/docker_desktopcontainerwindows.png)

9. Click on **minima9001** to check the logs and ensure your node has started up

![Windows_dockerlogs](/img/runanode/docker_desktoplogs.png)


**Congratulations - your node is now installed & running!**

To ensure your node updates automatically when a new version of Minima is released, continue to start a Watchtower container.

## Automate updates with Watchtower
:::note What is a Watchtower container?
Once set up, a Watchtower container enables automatic updates of your Minima node when a new version is released. 
It will pull down the latest Minima version and restart with the same parameters you initially specified.
:::

Create the Watchtower container by pasting the following command into the Linux Terminal.

```
docker run -d --restart unless-stopped --name watchtower -e WATCHTOWER_CLEANUP=true -e WATCHTOWER_TIMEOUT=60s -e WATCHTOWER_POLL_INTERVAL=28800 -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower
```
Press the **Enter** key to run the command and start the Watchtower. 

You will see the Watchtower in Docker.

![Desktop_dockerwatchtower](/img/runanode/docker_desktopwatchtowerwindows.png)

Every 8 hours, the Watchtower will check whether there is a new version of Minima and will update if so. 

Continue to secure your node.

## Secure your node 

Before using your node for the first time, you must:

1. Write down your Seed Phrase
2. Take a backup
3. Set a Vault password to encrypt your Keys (optional)

Please visit the [Secure your Node](/docs/runanode/securefunds) page to learn how. 

## Access your MiniDapp hub

The first time accessing your MiniDapp hub, you may need to pass through the security warning - see below - as the MiniDapp system currently uses self-signed certificates.

1. Go to **https://127.0.0.1:9003/** in your web browser

Click on **Advanced**, then **Proceed**. Or in Google Chrome, you may have to click anywhere on the page and type `thisisunsafe` to proceed. Details for other browsers can be found [**here**](https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/).<br/>

You will see your MiniDapp System (MDS) login page. 

![mds_login](/img/runanode/mds_login.png#width50)

3. Enter your password to login, if you don't remember, you can check [here](#how-to-check-your-minidapp-system-password).

4. You will see your MiniDapp hub!

## FAQ 

### How to check the Status of your node
You can use the Docker CLI/Terminal to interact with your node, for example to check your status, balance, password, incentive program setup or to create a backup.

1. From the Containers screen, click on **minima9001**, you will see the logs
2. Click on **CLI** or **Terminal** (depending on the version)
3. Type `minima` and press Enter, you will see the Minima Terminal appear
4. Type `status` to see the latest status of your node including version, last block and chain details.

Check `block` and `time`, this is your tip block and the time of that block, `time` should be within a few minutes of the current time.

![Desktop_dockerlogs](/img/runanode/docker_desktopterminalstatusmac.png)

:::info checking your node is in sync
Having a recent block time is not a guarantee that you are on the right chain. <br/>
Consider cross checking your latest block with another node or checking the `samechain` response of your Maxima Contacts by running the `maxcontacts` command.
:::

:::warning 
If the time shown is significantly behind, you should restart your node to resync to the chain. <br/> 
If you have been offline for a long time or do not have a recent backup you may need to perform a [**chain resync**](/docs/runanode/restorefunds#from-desktopserver-using-the-terminal) from an Archive node.
:::

**Other useful commands:**<br/>
`mds` - find the password for your node<br/>
`help` - show all commands

------

### How to check your MiniDapp System password

To check your MiniDapp system password, you will need to temporarily enable RPC (Remote Procedure Call) to access your node via the Docker Terminal, without logging into the MiniDapp hub. 

1. In Docker desktop, click on the **minima9001** container and select the **Terminal** tab, type

```
/bin/bash
```
and press Enter

2. Open and edit the minima.config file
```
nano minima.config
```
![Desktop_dockerlogs](/img/runanode/docker_desktopbinbash.png)

3. Scroll to the bottom of the file and add a new line, insert `rpcenable=true`. 

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
8. Restart the container using the Restart icon in the top right 

9. Once running again, from the Terminal tab type `minima` and press Enter, you will see the Minima Terminal appear
10. Type `mds`

![Desktop_dockerlogs](/img/runanode/docker_desktopterminal.png)

:::note 
RPC will be disabled the next time your docker container is updated to a new version.
:::

**Other useful commands:**<br/>
`status` - see the status of your node including version and chain details<br/>
`help` - show all commands

------

### How to change your MiniDapp System password

To change the password to login to your MiniDapp System (MDS), you must stop and remove your **minima9001** container and restart it with a different password. 

1. From the Containers screen, stop the **minima9001** container
2. Remove the **minima9001** container

![Desktop_dockerremovecontainer](/img/runanode/docker_desktopremovecontainer.png)

3. Repeat step 6 and 7 from [Start a new Minima node using Docker](#start-a-new-minima-node-using-docker), with a different password.  **Your password should be long using A-Z, a-z, 0-9 only.**

:::important
Deleting the container will not delete the `minimadocker9001` data folder so your coins will be safe during this process.

When starting the new container, you must use the same `minimadocker9001` folder to ensure your coins and data are restored.
:::

-------


### How to take a backup of your node

Before backing up your node, consider encrypting your private keys. For more information, see [Vault](/docs/runanode/securefunds#vault).

1. Login to your Minima Hub 
2. Open the Terminal MiniDapp
3. Enter the `backup` command with a password containing **uppercase and lowercase letters and numbers only**

```
backup password: 
```

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

:::

------

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

:::note parameters
**file:** the name of the backup to restore, e.g. mybackup.bak

**password:** (optional) the password of the backup. Can be left blank if restoring an auto backup or non password protected backup.
:::

If successful, you will need to log out/log in from your Minima hub for the restore to take effect.

:::warning
If you encrypted your private keys before taking the backup that you are now restoring, your private keys will still be encrypted and you will be required to decrypt them or enter your Vault password when sending funds
::: 

------

### How to start a second node in Docker

To run a second node in Docker, you can create another container using different port numbers, file path and name. 

1. To create a node on port 8001:

>docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -v ~/**minimadocker8001**:/home/minima/data -p **8001-8004**:9001-9004 --restart unless-stopped --name **minima8001** minimaglobal/minima:latest

2. To access your MiniDapps on the second node, go to https://127.0.0.1:8003/ (8003 instead of 9003) and repeat the steps in [Access your MiniDapp hub](#access-your-minidapp-hub).

-------

### How to start a test node as a developer
To create a private test node from Genesis, use the following start up command:

> ```docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_genesis=true -e minima_test=true -e minima_nop2p=true -v ~/minimadocker10001_dev:/home/minima/data -p 10001-10004:9001-9004 --restart unless-stopped --name minima10001_dev minimaglobal/minima:latest```
:::note test parameters
The additional test parameters used are:

`-e minima_genesis=true` : Start a node from the Genesis block<br/>
`-e minima_test=true` : Use test parameters e.g. blocks are automined and block times are faster<br/>
`-e minima_nop2p=true` : Do not start the p2p system<br/>

:::


------

### How to remove a node
:::important
**Removing a node without taking a backup will delete all your coins! Only remove a node if you have taken a backup or are running a test node.**
:::

To remove a Docker node:
1. Open Docker
2. Stop the **minima9001** container
3. Delete the container

![Desktop_dockerlogs](/img/runanode/docker_desktopremove.png)

This will not remove the  **minimadocker9001** folder from your home directory, so if you subsequently create a new container with the same name, the same folder will be reused. 

To start a clean node (and lose your balance) you must provide a new name for the folder in the start up command or delete this folder from your Home directory.

----------------

## Next Steps

Once your node running, see [Using MiniDapps](/docs/runanode/usingminidapps) to start using Minima's decentralized applications!

### Stay up to date

Check out our [MiniDapp store](https://minidapps.minima.global/) to stay up to date with the latest MiniDapps.

### Need help?

See [Using MiniDapps](/docs/runanode/usingminidapps) for more information or find us in [Discord](https://discord.gg/minima) or [Telegram](https://t.me/Minima_Global).
