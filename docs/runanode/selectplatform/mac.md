---
sidebar_position: 4
---

# Mac

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
1. Download Docker for Mac from [here](https://www.docker.com/products/docker-desktop/) and run the installer.
2. Once installed, open Docker
3. Click on the **settings** icon, and select **Start Docker Desktop when you log in**

![Windows_dockerstartup](/img/runanode/docker_desktopstartup.png#width50)


4. Click **Apply & Restart**
5. Open the Mac Terminal app from the Utilities folder in Applications
6. Copy and paste the following into the Terminal 

:::important SET YOUR PASSWORD
Make sure to set the password below to a long password using a-z and 0-9 characters only.<br/>
This will be the password to access your Minidapp Hub.
:::
```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -v ~/minimadocker8001:/home/minima/data -p 8001-8004:9001-9004 --restart unless-stopped --name minima8001 minimaglobal/minima:latest
```

:::note What do all the parameters mean?

- `-d`: daemon mode, Minima will run in the background
- `-e minima_mdspassword=INSERTPASSWORD` : sets the password for your MiniDapp system. **YOU MUST USE A SECURE PASSWORD TO PROTECT YOUR NODE**
- `-e minima_desktop=true` : sets your node type as a desktop node that does not receive incoming connections 
- `-v ~/minimadocker8001:/home/minima/data` : creates a local folder called **minimadocker8001** in your home directory and maps it to the **/home/minima/data** directory in Docker. The **minimadocker8001** folder is where the Minima database and is also where your backups will be stored.
- `-p 8001-8004:9001-9004` : the port number mapping from your desktop to the Docker container
- `--restart unless-stopped` : ensures your container automatically restarts unless you stop it
- `--name minima8001` : sets the name of your Minima container to minima8001
- `minimaglobal/minima:latest` : specifies where to pull the Minima code from
:::

#### Optional start up parameters

<details><summary>Expand to see full list of start up parameters</summary>

The following start up parameters can optionally be specified when starting your Docker node. 

To add/remove parameters after a node has been started, you must stop and remove your **minima8001** Docker container, then start it again, adding/removing the required parameters in front of **-v ~/minimadocker8001:/home/minima/data**.
As long as you use the same minimadocker8001 folder, your previous node will be preserved but will use different parameters.

#### General
- `-e minima_clean=true` : CAREFUL! Clears existing data, starts a new fresh node. All coins will be lost.<br/>
- `-e minima_host=ipaddress` : specify the host IP<br/>
- `-e minima_allowallip=true` : Allow all IPs for Maxima / Networking. Local IPs won't be allowed otherwise.<br/>
- `-e minima_archive=true` : Run an Archive node - store all archive data / the cascade to allow for resyncs from this node<br/>
- `-e minima_isclient=true` : Tells the P2P System that this node can't accept incoming connections<br/>
- `-e minima_server=true` : Use Server settings - this node can accept incoming connections<br/>
- `-e minima_desktop=true` : Use Desktop settings - this node can't accept incoming connections<br/>

#### MiniDapp System (mds)
- `-e minima_mdsenable=true/false` : enable the MiniDapp System. Enabled by default.<br/>
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

8. You will notice a container in Docker called **minima8001**, this is running your Minima node.

![Windows_dockercontainer](/img/runanode/docker_desktopcontainermac.png)

9. Click on **minima8001** to check the logs and ensure your node has started up

![Windows_dockerlogs](/img/runanode/docker_desktoplogsmac.png)


**Congratulations - your node is now installed & running!**

To ensure your node updates automatically when a new version of Minima is released, continue to start a Watchtower container.

## Automate updates with Watchtower
:::note What is a Watchtower container?
Once set up, a Watchtower container enables automatic updates of your Minima node when a new version is released. 
It will pull down the latest Minima version and restart with the same parameters you initially specified.
:::

Create the Watchtower container by pasting the following command into the Mac Terminal.

```
docker run -d --restart unless-stopped --name watchtower -e WATCHTOWER_CLEANUP=true -e WATCHTOWER_TIMEOUT=60s -e WATCHTOWER_POLL_INTERVAL=28800 -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower
```
Press the **Enter** key to run the command and start the Watchtower. 

You will see the Watchtower in Docker.

![Desktop_dockerwatchtower](/img/runanode/docker_desktopwatchtowermac.png)

Every 8 hours, the Watchtower will check whether there is a new version of Minima and will update if so. 

Continue to access your MiniDapp hub.

## Access your MiniDapp hub

The first time accessing your MiniDapp hub, you may need to pass through the security warning - see below - as the MiniDapp system currently uses self-signed certificates.

1. In Safari, go to **https://127.0.0.1:8004/**, click on **Show Details** then **Visit this website**
2. Go to **https://127.0.0.1:8003/** and repeat, you should see the MiniDapp System login page
3. Close **https://127.0.0.1:8004/**<br/><br/>
**Server**

Details for other browsers can be found [**here**](https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/).<br/>

You will see your MiniDapp System (MDS) login page.   

![mds_login](/img/runanode/mds_login.png#width50)

3. Enter your password to login, if you don't remember, you can check [here](#how-to-check-your-minima-hub-password).

4. You will see your MiniDapp hub!

## FAQ 

### How to check the Status of your node
You can use the Docker CLI/Terminal to interact with your node, for example to check your status, balance, password, incentive program setup or to create a backup.

The `status` command will show details of your node including version, last block and chain details.

1. From the Containers screen, click on **minima8001**, you will see the logs
2. Click on **CLI** or **Terminal** (depending on the version)
3. Type `minima` and press Enter, you will see the Minima Terminal appear
4. Type `status` and press Enter

Check `block` and `time`, this is your tip block and the time of that block, `time` should be within a few minutes of the current time.

![Desktop_dockerlogs](/img/runanode/docker_desktopterminalstatusmac.png)

:::info checking your node is in sync
Having a recent block time is not a guarantee that you are on the right chain. <br/>
Consider cross checking your latest block with another node or checking the `samechain` response of your Maxima Contacts by running the `maxcontacts` command.
:::

:::warning 
If the time shown is significantly behind, you should restart your node to resync to the chain. <br/> 
If you have been offline for a long time or do not have a recent backup you may need to perform a [**chain resync**](/docs/runanode/restorefunds#how-to-perform-a-chain-re-sync) from an Archive node.
:::

**Other useful commands:**<br/>
`mds` - find the password for your node<br/>
`help` - show all commands

------

### How to check your MiniDapp System password
You can use the Docker CLI/Terminal to interact with your node, for example to check your status, balance, password, incentive program setup or to create a backup.

The `mds` command will show details about the MiniDapp System (MDS) including your password and the MiniDapps installed on your node.

1. From the Containers screen, click on **minima8001** to view the logs
2. Click on **CLI** or **Terminal** (depending on the version)
3. Type `minima` and press Enter, you will see the Minima Terminal appear
4. Type `mds`

![Desktop_dockerlogs](/img/runanode/docker_desktopterminalmdsmac.png)

**Useful commands:**<br/>
`status` - see the status of your node including version and chain details<br/>
`help` - show all commands

------

### How to change your MiniDapp System password

To change the password to login to your MiniDapp System (MDS), you must stop and remove your **minima9001** container and restart it with a different password. 

1. From the Containers screen, stop the **minima8001** container
2. Remove the **minima8001** container

![Desktop_dockerremovecontainer](/img/runanode/docker_desktopremovecontainermac.png)

3. Repeat step 6 and 7 from [Start a new Minima node using Docker](#start-a-new-minima-node-using-docker), with a different password.  **Your password should be long using a-z, 0-9 only.**

:::important
Deleting the container will not delete the `minimadocker8001` data folder so your coins will be safe during this process.

When starting the new container, you must use the same `minimadocker8001` folder to ensure your coins and data are restored.
:::

------

### How to take a backup of your node

Before backing up your node, consider encrypting your private keys. For more information, see [Vault](/docs/runanode/securefunds#vault).

1. Login to your Minima Hub 
2. Open the Terminal MiniDapp
3. Enter the `backup` command with a password containing **lowercase letters and numbers only**

```
backup password: 
```

####  Auto backups
You can create automatic backups every 24 hours however these backups cannot be password protected so we recommend encrypting your private keys before enabling auto backups.
```
backup auto:true
```
Your backups will go to the **minimadocker8001** folder in your home directory.

:::note backup parameters
**password:** set a password for your backup **lowercase letters and numbers only**, this will be required when restoring it

**file:** (optional) backup name 

**auto:** (optional) **true** or **false**. Will set the backup to repeat every 24 hours.
:::

------

### How to restore your node from a backup

Your backup must be in the **minimadocker8001** folder in your home directory (as specified at start up).

1. Login to your Minima Hub 
2. Open the Terminal MiniDapp
3. Enter the `restore` command, completing the parameters

```
restore file: password:
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

### How to start a second node in Docker
To run a second node in Docker, you can create another container using different port numbers, file path and name. 

1. To create a node on port 7001:

>docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -v ~/**minimadocker7001**:/home/minima/data -p **7001-7004**:9001-9004 --restart unless-stopped --name **minima7001** minimaglobal/minima:latest

2. To access your MiniDapps on the second node, go to https://127.0.0.1:7003/ (7003 instead of 8003) and repeat the steps in [Access your MiniDapp hub](#access-your-minidapp-hub).

------

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
2. Stop the **minima8001** container
3. Delete the container

![Desktop_dockerlogs](/img/runanode/docker_desktopremove.png)

4. Delete the minimadocker8001 folder from your home directory.

----------------

## Next Steps

Once your node running, see [Using MiniDapps](/docs/runanode/usingminidapps) to start using Minima's decentralized applications!

### Stay up to date

Check out our [MiniDapp store](https://minidapps.minima.global/) to stay up to date with the latest MiniDapps.

### Need help?

See [Using MiniDapps](/docs/runanode/usingminidapps) for more information or find us in [Discord](https://discord.gg/minima) or [Telegram](https://t.me/Minima_Global).

