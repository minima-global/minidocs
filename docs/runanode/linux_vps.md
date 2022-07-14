---
sidebar_position: 6
---

# Linux VPS

## How to download and install Minima on your Linux Server/Desktop (Debian OS including Ubuntu)

If you have not run Minima before, please ensure you have the latest version of Java installed on the server https://java.com/en/

1. Log in as the root user. (You may need to create a secure connection to your server using PuTTY, Terminal or a similar tool)

2. Open the Command prompt, ensure you are in the root directory

3. From the root directory, please run the following script:

```
wget -O minima_setup.sh https://raw.githubusercontent.com/minima-global/Minima/master/scripts/minima_setup.sh && chmod +x minima_setup.sh && sudo ./minima_setup.sh -p 9001
```

4. Wait for Minima to start, the service will restart during this process and can take up to 30 minutes to complete.

**Congratulations - your node is now installed & running! **

**Running multiple nodes on one server?**<br/> 
You can specify different port numbers on the end to do this, for example (using 9121): 
```
wget -O minima_setup.sh https://raw.githubusercontent.com/minima-global/Minima/master/scripts/minima_setup.sh && chmod +x minima_setup.sh && sudo ./minima_setup.sh -p 9121
```


___ 
## How to set up your Incentive Program account to receive rewards

1. Go to https://incentive.minima.global/ - 

:::info Previous users
If you had an account prior to 6th December 2021, you will need to reset your password using the Forgot Password button (this is because encrypted passwords could not be migrated to the new system.) 
You can set your new password to be the same as your old one. 
https://incentive.minima.global/account/forgot-password
Please check your junk mail for the reset password email.
:::

:::info New users
After you have registered, simply login to your account
:::

2. Once the Minima is running, connect your Incentive Program account to your node by copying YOUR OWN Node ID from the Incentive Program website above and typing the following directly into the command line: 

```
sudo apt install curl
curl 127.0.0.1:9002/incentivecash%20uid:xxx-xxx-xxx-xxx-xxx
```

Example:
```
curl 127.0.0.1:9002/incentivecash%20uid:00F3E50D-5A52-444B-8F1A-0DA72D6CAA84
```

You should receive a return status of true and see your previous reward (if any) including missed rewards (if any).<br/>
**Your Incentive Program account is now connected to your node!**

If you have multiple nodes on one server, you will need to change the port number in the curl command to update the second node using the port number after -r
For example:

```
curl 127.0.0.1:9122/incentivecash%20uid:xxx-xxx-xxx-xxx-xxx
```

3. Your node will then ping us so we know it's running. 

4. For every day your node pings us, we will add 1 Minima to your DAILY REWARDS. 

5. To check your rewards, type **curl 127.0.0.1:9002/incentivecash** into the command line. 


```
incentivecash
{
  "command":"incentivecash",
  "status":true,
  "response":{
    "uid":"731ae11b-b602-4dea-8564-7cb4edbe07b7",
    "details":{
      "lastPing":"2022-03-14T17:28:38.709Z",
      "inviteCode":"BAEPAAD0",
      "rewards":{
        "dailyRewards":60,
        "previousRewards":100.0,
        "communityRewards":50.0,
        "inviterRewards":10.0
      }
    }
  }
}
```
:::tip Last Ping
This is the last date and time your node sent a PING message. Pings are sent at random each day. For every day your node pings us, we will add 1 Minima to your rewards.
:::

:::note Note 
There will temporarily be no MiniHub or MiniDapps - based on community feedback we are working hard to improve the MiniDapp system for a future release! 
:::


## Useful Commands

```
ctrl-c : Exits the Minima logs (Minima will continue to run in the background)
journalctl -u minima_9001 -f : Show the Minima logs
sudo ps -fC java : Shows all running Java processes

sudo apt install curl : allows you to use curl commands to interact with minima
Then y (for Yes)

sudo apt install jq : allows you to use jq to make the output look readable
Then y (for Yes)

Stopping/starting Minima (Service must be called minima.service)
sudo systemctl status minima_9001 : Show the status of the Minima service
sudo systemctl stop minima_9001 : Stop the Minima service
sudo systemctl disable minima_9001 : Disable the Minima service
sudo systemctl enable minima_9001 : Enable the Minima service 
sudo systemctl start minima_9001 : Start the Minima service

Interacting with Minima
curl 127.0.0.1:9002/status | jq : shows the status of your Minima node
curl 127.0.0.1:9002/incentivecash | jq : shows your incentive cash balance
curl 127.0.0.1:9002/help | jq : shows the full list of commands
```
For a full list of Minima Terminal Commands see [Terminal Commands.](/docs/runanode/terminal_commands)



## How to use MiniDapps

To learn more about MiniDapps, please see the [About MiniDapps](/docs/learn/minidapps/minidappsintro) section.


### Accessing the MiniDapp Hub
1. Go to to https://127.0.0.1:9003/ or https://localhost:9003/ from your server's web browser or https://YourServerIP:9003/ from a remote computer
2. You may be shown a security certificate warning, to which you can click on Advanced, then Proceed. This may be different depending on the browser and OS you are using.
3. You will see your login page, to get your password return to the Command Line and enter 

```
curl 127.0.0.1:9002/mds
```
You should see an output similar to below:

```
mds
{
  "command":"mds",
  "status":true,
  "response":{
    "password":"1SV0-F0WN-K367",
    "minidapps":[]
  }
}
```
3. Copy and Paste your password into the field and click **Enter**
4. You will see your MiniDapp hub!

### Installing MiniDapps
1. Download and save the MiniDapps you wish to use from [here.](https://github.com/minima-global/Minima/tree/master/mds/store/files)
2. Open the Command Line interface where Minima is running
3. Enter the following command, adding the file path to your saved Minidapp on the end<br/>


```
curl 127.0.0.1:9002/mds%20action:install%20file:/pathtofile
```

**Example for the Terminal MiniDapp:**<br/>

```
curl 127.0.0.1:9002/mds%20action:install%20file:/home/downloads/Terminal.mds.zip
```

You should see an output similar to below:

```
{
  "command":"mds",
  "params":{
    "action":"install",
    "file":"/home/user/downloads/Terminal.mds.zip"
  },
  "status":true,
  "response":{
    "installed":{
      "uid":"0xD0F8543C5A64099287021EDDC13A5773",
      "name":"Terminal",
      "icon":"favicon.ico",
      "version":"1.91",
      "description":"Terminal CLI for Minima"
    }
  }
}
```

:::note Note
To use the Wallet MiniDapp, you will need Testnet Minima coins. Please visit the Discord server to request Testnet Minima coins.
:::

### Uninstalling MiniDapps
1. From the Command Line where Minima is running, type 
```
curl 127.0.0.1:9002/mds
```
You should see an output similar to below:

```
mds
{
  "command":"mds",
  "status":true,
  "response":{
    "password":"1SV0-F0WN-K367",
    "minidapps":[{
      "uid":"0xFE2750C4186CF82FB4E91D5FEA21839F",
      "conf":{
        "name":"Wallet",
        "icon":"minimaWallet.png",
        "version":"0.1.5",
        "description":"Official Minima Wallet"
      }
    }]
  }
}
```
3. Copy the **UID** for the MiniDapp you wish to uninstall
4. Enter the following command, pasting the MiniDapp UID on the end:
```
curl 127.0.0.1:9002/mds%20action:uninstall%20uid:
```
**Example** 
```
curl 127.0.0.1:9002/mds%20action:uninstall%20uid:0xFE2750C4186CF82FB4E91D5FEA21839F
```

## How to set up Maxima (to use the MaxSolo MiniDapp)

To learn more about Maxima, please see the [About Maxima](/docs/learn/maxima/maximaintro) section. <br/>

Before the MaxSolo MiniDapp to chat with friends, you must:

1. Be running a Minima node
2. Set your Maxima Profile Name
3. Create your Contacts by adding the Contact Address of your friends **or** sending your own Contact Address to your friends
4. Have the MaxSolo MiniDapp installed 

:::note
Only one person needs to create the connection, you will then both be connected to each other.
:::

:::note 
Contact Addresses change periodically for privacy reasons.<br/>
When creating Contacts, you must ensure that you are using a recent Contact Address from your friend.
:::

The following commands should all be run from the Command Line interface where Minima is running. 

### Setting your Maxima Profile

Your Maxima Profile is the name that your Maxima Contacts will see once you are connected with eachother.

1. Open the Command Line interface where Minima is running
2. Enter the following command, adding your name on the end:

**Example**
```
curl 127.0.0.1:9002/maxima%20action:setname%20name:Alice
```
You should see an output similar to below:
```
{
  "command":"maxima",
  "params":{
    "action":"setname",
    "name":"Alice"
  },
  "status":true,
  "response":{
    "name":"Alice"
  }
}
```

### Finding and sharing your Contact Address

You may want to find your own Contact Address to share with your friends. <br/>
By sharing your Contact Address with friends, they can add you as one of their Maxima Contacts enabling you to chat in the MaxSolo MiniDapp. 

1. Open the Command Line interface where Minima is running
2. Enter the following command
```
maxima
```

You should see an output similar to below:
```
{
  "command":"maxima",
  "status":true,
  "response":{
    "logs":false,
    "name":"Alice",
    "publickey":"0x30819F300D06092A864886F70D010101050003818D00308189028181009645EF9BB7B4A3E98B87C6C68C072903EE4379DA8DF18AE8082B879A60147043977114E00AA3AE2BBDE380D356352E62D5FBCCB916C4F9EC27AC18D24B7A41F4ED26D63AD21578C421E0D303D7815253EF3EA6CB9410B1F439E8528FC0DDC99724F42937D756B4439ABDCDB485000DE42F16861957761EEB88F44AEA391D65EB0203010001",
    "localidentity":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G15W5TUDRFD53T65ZFHM6HG3WW0VE8DSTY3FHHBK0GAS7J9G18S23WTZH9Z0AKEN2NFF3G39YCD9ECBAVNJ5P2R2FJR17YGCD4WRQ87QEQ9MM7B91AU6447GD60UNG5957RPUKR5P845HUGSUGKKFZ3ESJ5P4UGKJFYQMMH1PYFEDMW2G03F45SB8C6ANEZFEN27K9BY3W7B5TC10608005FCUPAE@192.168.0.33:9001",
    "contact":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G15AU3QK5NKMR3NW3YCM4EZ99JMFQ5ZPK7ZC5CREZDC52W2NSRQWSJP8DHNC9DR2AP517RVET05JTW89BM1F6FBK2QN3YQ7CVJDARRBHY3Y08FQ99JSNW68D50KVD02UQKK8BJKMHAUAGG3JBCEFBDZGYBPMJJRQAYQSYDH7KR19M2J4P9ZASNEP1240J7SUZB0MCK0DBWB34WS10608007M53YUH@78.141.235.153:9001"
  }
}
```
3. Copy the **"contact:"** address (from the last line) **including the IP address** and share it with your friends (via a platform of your choice). <br/>
**Ensure your friend adds your Contact Address within 10 minutes of receiving it.**

### Adding a new Maxima Contact

1. Ask your friend to send you their Contact Address
2. Copy it
3. Open the Command Line interface where Minima is running
4. Enter the following command, pasting their Contact Address on the end

```
curl 127.0.0.1:9002/maxcontacts%20action:add%20contact:
```
**Example**
```
curl 127.0.0.1:9002/maxcontacts%20action:add%20contact:MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G15AU3QK5NKMR3NW3YCM4EZ99JMFQ5ZPK7ZC5CREZDC52W2NSRQWSJP8DHNC9DR2AP517RVET05JTW89BM1F6FBK2QN3YQ7CVJDARRBHY3Y08FQ99JSNW68D50KVD02UQKK8BJKMHAUAGG3JBCEFBDZGYBPMJJRQAYQSYDH7KR19M2J4P9ZASNEP1240J7SUZB0MCK0DBWB34WS10608007M53YUH@78.141.235.153:9001
```
You should see an output similar to below:
```
{
  "command":"maxcontacts",
  "params":{
    "action":"add",
    "contact":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G15AU3QK5NKMR3NW3YCM4EZ99JMFQ5ZPK7ZC5CREZDC52W2NSRQWSJP8DHNC9DR2AP517RVET05JTW89BM1F6FBK2QN3YQ7CVJDARRBHY3Y08FQ99JSNW68D50KVD02UQKK8BJKMHAUAGG3JBCEFBDZGYBPMJJRQAYQSYDH7KR19M2J4P9ZASNEP1240J7SUZB0MCK0DBWB34WS10608007M53YUH@78.141.235.153:9001"
  },
  "status":true,
  "response":{
    "maxima":{
      "from":"0x30819F300D06092A864886F70D010101050003818D00308189028181009645EF9BB7B4A3E98B87C6C68C072903EE4379DA8DF18AE8082B879A60147043977114E00AA3AE2BBDE380D356352E62D5FBCCB916C4F9EC27AC18D24B7A41F4ED26D63AD21578C421E0D303D7815253EF3EA6CB9410B1F439E8528FC0DDC99724F42937D756B4439ABDCDB485000DE42F16861957761EEB88F44AEA391D65EB0203010001",
      "to":"0x30819F300D06092A864886F70D010101050003818D0030818902818100955E1EA85BD2DB1DE43AB2C4761299D9FA2E3343E18566DD86B0A290AFCDEA5C9E50D8DD896EC4AC9427DFDDD0167D9212BB05E67AE82D5C75D1D9F9B55BDAE351D4087E9299F2F2321A5053ED00BDAA510B9D2D15795080E6B639EB6E2155E6D39EF4AAEB956C4F4D853614C994E15CBBB21110133F3D8582CCA01AB92C64970203010001",
      "time":"Thu Jun 30 14:09:08 BST 2022",
      "timemilli":1656594548748,
      "random":"0x71B501272FE27F565973998A284DD2FBAC83BE56F9D3BBFC9D6DF4608085BE2E",
      "application":"**maxima_contact_ctrl**",
      "data":"0x7B2264656C657465223A66616C73652C22696E74726F223A747275652C227075626C69636B6579223A223078333038313946333030443036303932413836343838364637304430313031303130353030303338313844303033303831383930323831383130303936343545463942423742344133453938423837433643363843303732393033454534333739444138444631384145383038324238373941363031343730343339373731313445303041413341453242424445333830443335363335324536324435464243434239313643344639454332374143313844323442374134314634454432364436334144323135373843343231453044333033443738313532353345463345413643423934313042314634333945383532384643304444433939373234463432393337443735364234343339414244434442343835303030444534324631363836313935373736314545423838463434414541333931443635454230323033303130303031222C2261646472657373223A224D7847313848474736464A3033383631345938435734365553364732303831304B30303730434430305A38333238324736304731355231345631355348315455383852363239533946444B35324A354E42453336315148383644374E454B30555659344D4643354B38334631464E455433473933483544455957574E35444E4A3135574D4356384A535230463753573641594555304659524134365A3939484D4355305A4E50433333473643325652344859354A5943514A524D59514744525050545148563756414A4447593839545455315736574833563936514A4A33315A43514D4A4E47514A364D313054434A553544344637364634464D4D545A474459533130363038303036314738454B47403137382E3137302E33392E39363A39303031222C226E616D65223A22416C696365222C226D696E696D6161646472657373223A224D784730383642503256534D5932554B544D54554E4845545746395A4D55553433364253374E445648343043573552535639504655454A574641434B573352222C22746F70626C6F636B223A223635333134222C22636865636B626C6F636B223A223635323634222C22636865636B68617368223A22307830303030303037443745453931393431314532314544373242453830384433313441314537363435313138444638443432354239384530374136443841393730227D",
      "msgid":"0xD900B339DE228141302C9759B39639517C4933C4B518A33255715E0D8F60C740",
      "delivered":true
    }
  }
}
```
5. Return to your MiniDapp Home page 
6. Open the MaxSolo MiniDapp to start a conversation with your new Contact!


### Checking the connection to your Contacts

You must be properly connected to your contacts to successfully send messages using the MaxSolo MiniDapp. 

To check you are connected:
1. Open the Command Line interface where Minima is running
2. Enter the following command

```
curl 127.0.0.1:9002/maxcontacts
```

You should see an output similar to below, for each contact, ensure the **samechain** parameter is **true**. If it is false, you need to re-add your contact.
```
{
  "command":"maxcontacts",
  "status":true,
  "response":{
    "contacts":[{
      "id":1,
      "publickey":"0x30819F300D06092A864886F70D010101050003818D00308189028181008F2B6054A85102087C7E43A3A06026804FE28723265C97CB8A6B3262BC54E0FDF6CE37854654A87841260D8814F3286555FEEAF00BA039C5822C101C60C3410AC2AEC91ABC823C4A829CF2EF13208A717F5DE86932B057356AECE8AC34AA3D0FE090C1ACD8ED583F820E3F566CFA907AA3FA5B53C0498C75BC3989F9D6B57FC90203010001",
      "currentaddress":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G1KHEJ2RCN1FDE843E66DP0E3DF43Q6QWAM5GJ4RU1A555CNR0SA5UR1YCBJ4P0PA3BYBFNGM41FRRH0GM91KANT3JD7KR32Z03WNFD4BK1JG7SCDZHEDG8F6U1MUFR35UJPWN755VDSCH97GNP9TMFFWJ5A42RK57Z6H2D097S2RH4MS3MNRJBNE1Z1B9TTU4SVM1H4FSH876C10608007FDQQ94@31.125.188.214:5001",
      "myaddress":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G15R14V15SH1TU88R629S9FDK52J5NBE361QH86D7NEK0UVY4MFC5K83F1FNET3G93H5DEYWWN5DNJ15WMCV8JSR0F7SW6AYEU0FYRA46Z99HMCU0ZNPC33G6C2VR4HY5JYCQJRMYQGDRPPTQHV7VAJDGY89TTU1W6WH3V96QJJ31ZCQMJNGQJ6M10TCJU5D4F76F4FMMTZGDYS106080061G8EKG@178.170.39.96:9001",
      "lastseen":1656174927269,
      "date":"Sat Jun 25 17:35:27 BST 2022",
      "extradata":{
        "name":"Bob",
        "minimaaddress":"MxG086JH4F7R41CNEW5ZJA4VVBET0H66AQZPC3UJ42SFPBYAC999U7EVBNTARKC",
        "topblock":"30664",
        "checkblock":"30614",
        "checkhash":"0x000000259DF90A73F54A36C28FC38009DA30D99F2D6E05E824BD6ED5C3191A62"
      },
      "chaintip":"65319",
      "samechain":true
    },
```
