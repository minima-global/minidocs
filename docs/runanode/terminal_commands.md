---
sidebar_position: 10
---

# Terminal Commands

The following commands can be run directly from a Minima Terminal. They can also be viewed by typing `help` into the Minima Terminal.

For detailed help, use `help command:` followed by the command.

 ; can be used to chain multiple commands<br />

## General

<details><summary><strong>balance</strong><br></br>Show your total balance of Minima and tokens.</summary>

**address:** (optional)
    Show the balance for a specific 0x or Mx address.

**tokenid:** (optional)
    Show the balance for a specific tokenid. Minima is 0x00.

**confirmations:** (optional)
    Set the number of block confirmations required before a coin is considered confirmed in your balance. Default is 3.

**Examples:**

*balance*

*balance tokenid:0xFED5.. confirmations:10*

*balance address:0xFF..*
</details>


<details><summary><strong>block</strong><br></br>Return the top block</summary>

**Examples:**
*block*
</details>

<details><summary><strong>checkaddress</strong><br></br>Check the validity of an address and whether it belongs to your node.</summary>

**address:**<br></br>
    The 0x or Mx address to check.

**Examples:**

*checkaddress address:0xFED...*
</details>

<details><summary><strong>coincheck</strong><br></br>Check a coin exists and is valid. Can only check unspent coins.</summary>

Returns the coin details and whether the MMR proof is valid.

**data:**<br></br>
    The data of a coin. Can be found using the 'coinexport' command.

**Examples:**

*coincheck data:0x00000..*
</details>

<details><summary><strong>coinexport</strong><br></br>Export a coin including its MMR proof.</summary>

A coin can then be imported and tracked on another node using the 'coinimport' command.

This does not allow the spending of a coin - just the knowledge of its existence.

**coinid:**<br></br>
    The id of a coin. Can be found using the 'coins' command.

**Examples:**

*coinexport coinid:0xCD34..*
</details>

<details><summary><strong>coinimport</strong><br></br>Import a coin including its MMR proof.</summary>

Optionally you can track the coin to add it to your relevant coins list and know when it becomes spent.

Importing does not allow the spending of a coin - just the knowledge of its existence.

**data:**<br></br>
    The data of a coin. Can be found using the 'coinexport' command.

**track:** (optional)<br></br>
    true or false, true will create an MMR entry for the coin and add it to your relevant coins.

**Examples:**

*coinimport data:0x00000..*
</details>


<details><summary><strong>cointrack</strong><br></br>Track or untrack a coin.</summary>

Track a coin to keep its MMR proof up-to-date and know when it becomes spent. Stop tracking to remove it from your relevant coins list.

**enable:**
    true or false, true will add the coin to your relevant coins, false will remove it from your relevant coins.

**coinid:**
    The id of a coin. Can be found using the 'coins' command.

**Examples:**

*cointrack enable:true coinid:0xCD34..*
</details>

<details><summary><strong>consolidate</strong><br></br> Consolidate multiple coins (UTxOs) into one by sending them back to yourself.</summary>

Must have at least 3 coins.

Useful to prevent having many coins of tiny value and to manage the number of coins you are tracking. Optionally set the minimum coin age (in blocks), maximum number of coins, and maximum number of signatures for the transaction.

**tokenid:**<br></br>
    The tokenid for Minima or custom token to consolidate coins for. Minima is 0x00.

**coinage:** (optional)<br></br>
    The minimum number of blocks deep (confirmations) a coin needs to be. Default is 3.

**maxcoins:** (optional)<br></br>
    The maximum number of coins to consolidate. Minimum 3, up to 20. Coins are first sorted by value (smallest first) before adding to the transaction.

**maxsigs:** (optional)<br></br>
    The maximum number of signatures for the transaction, up to 5. Coins are then sorted by address to minimize the number of signatures required.

**burn:** (optional)<br></br>
    Amount of Minima to burn with the transaction.

**debug:** (optional)<br></br>
    true or false, true will print more detailed logs.

**dryrun:** (optional)<br></br>
    true or false, true will simulate the consolidate transaction but not execute it.

**Examples:**

*consolidate tokenid:0x00*

*consolidate tokenid:0x77.. coinage:10*

*consolidate tokenid:0x00 maxcoins:5*

*consolidate tokenid:0x00 coinage:10 maxcoins:8 burn:1*

*consolidate tokenid:0x00 coinage:10 maxcoins:8 maxsigs:3 burn:1 dryrun:true*

</details>


<details><summary><strong>getaddress</strong><br></br>Returns an existing default Minima address to receive funds, use as a change address etc.</summary>

Each address can be used securely 262144 (64^3) times.

Then you can wipe the private keys from your online node using the 'vault' command.

**Examples:**
*getaddress*
</details>

<details><summary><strong>hashtest</strong><br></br>Check the speed of hashing of this device.</summary>

Defaults to 1 million hashes.

Returns the time taken in milliseconds and speed in megahashes/second.

E.g. A speed of 0.5 MH/s indicates 500000 hashes per second.

**amount:** (optional)<br></br>
    Number of hashes to execute.

**Examples:**

*hashtest*
</details>

<details><summary><strong>history</strong><br></br>Return all TxPoW relevant to you.</summary>

**max:** (optional)<br></br>
    Maximum number of TxPoW to retrieve.

**Examples:**

*history*

*history max:20*
</details>

<details>  <summary><strong>keys</strong><br></br>Get a list of all your public keys or create a new key.</summary>

Each public key can be used for signing securely 262144 (64^3) times.

**action:** (optional)<br></br>
&ensp; **list** : List your existing public keys. The default.<br></br>
&ensp; **checkkeys** : Checks if your Public and Private keys are correct.<br></br>
&ensp; **new** : Create a new key pair.<br></br>

**publickey:** (optional)<br></br>
Search for a specific public key.

**Examples:**

*keys*

*keys action:list*

*keys action:checkkeys*

*keys action:list publickey:0xFFEE56..*

*keys action:new*
</details>


<details><summary><strong>newaddress</strong><br></br>Create a new address that will not be not used for anything else (not one of the 64 default change address).</summary>

Can be used for a specific use case or for improved privacy.

**Examples:**

*newaddress*

</details>

<details><summary><strong>printmmr</strong><br></br>Print the MMR set of the tip block and the total number of entries in the MMR. </summary>

Returns the tip block number, latest entrynumber and latest set of MMR entries.

For each entry, details of its row, entry number, data and value of all new and updated MMR entries for the tip block.

Row 1 represents the leaf nodes, entry 0 represents the first entry on a row.

**Examples:**

*printmmr*
</details>

<details>
  <summary><strong>printtree</strong><br></br>Print a tree representation of the blockchain.</summary>

Default depth 32 blocks, can be increased to see more of the txpow tree.

**depth:** (optional)<br></br>
Number of blocks back from the tip to show in the txpow tree.

**cascade:** (optional)<br></br>
true or false, true shows the cascade.

**Examples:**

*printtree*

*printtree depth:500*

*printtree cascade:true*
</details>

<details><summary><strong>quit</strong><br></br>Shutdown Minima safely. </summary>

Ensure you have a backup before shutting down.

**Examples:**

*quit*

*quit compact:true*
</details>

<details>
  <summary><strong>status</strong><br></br>Show the general status for Minima and your node. Optionally clean the RAM.</summary>

Prints details for general status, memory used, chain info, stored txpow units, network connections, p2p connections and traffic.

**clean:** (optional)<br></br>
true only, clear the RAM.

**Examples:**

*status*

*status clean:true*
</details>

<details>
  <summary><strong>tokencreate</strong><br></br>Create (mint) custom tokens or NFTs.</summary>

You must have some sendable Minima in your wallet as tokens are 'colored coins', a fraction of 1 Minima.

**name:**<br></br>
The name of the token. Can be a string or JSON Object.

**amount:**<br></br>
The amount of total supply to create for the token. Between 1 and 1 Trillion.

**decimals:** (optional)<br></br>
The number of decimal places for the token. Default is 8, maximum 16.
To create NFTs, use 0.

**script:** (optional)<br></br>
Add a custom script that must return 'TRUE' when spending any coin of this token.<br></br>
Both the token script and coin script must return 'TRUE' for a coin to be sendable.

**state:** (optional)<br></br>
List of state variables, if adding a script. A JSON object in the format {\"port\":\"value\",..}

**signtoken:** (optional)<br></br>
Provide a public key to sign the token with. Useful for proving you are the creator of the token/NFT.

**webvalidate:** (optional)<br></br>
Provide a URL to a publicly viewable .txt file you are hosting which stores the tokenid for validation purposes.<br></br>
Create the file in advance and get the tokenid after the token has been minted.

**burn:** (optional)<br></br>
Amount to burn with the tokencreate minting transaction.

**Examples:**

*tokencreate name:newtoken amount:1000000*

*tokencreate amount:10 name:{"name":"newcoin","link":"http:mysite.com","description":"A very cool token"}*

*tokencreate name:mynft amount:10 decimals:0 webvalidate:https://www.mysite.com/nftvalidation.txt signtoken:0xFF.. burn:0.1*

*tokencreate name:charitycoin amount:1000 script:"ASSERT VERIFYOUT(@TOTOUT-1 0xMyAddress 1 0x00 TRUE)"*
</details>

<details>
  <summary><strong>tokenvalidate</strong><br></br>Validate the signature and webvalidate link in a token.</summary>

**tokenid:**<br></br>
The tokenid of the custom token/NFT to validate.

**Examples:**

*tokenvalidate tokenid:0xFED5..*
</details>


<details>
  <summary><strong>trace</strong><br></br>Show the message stacks of the internal Minima Engine with optional filter string.</summary>

**enable:**<br></br>
true or false, true to enable or false to disable.

**filter:** (optional)<br></br>
A case-sensitive string to filter the messages by.

**Examples:**

*trace enable:true*

*trace enable:true filter:MAIN*

*trace enable:true filter:MINER*

*trace enable:true filter:MDS*

*trace enable:true filter:NOTIFYMANAGER*

*trace enable:true filter:TXPOWPROCESSOR*

*trace enable:false*
</details>


## Backup

<details><summary><strong>archive</strong><br></br>Perform a chain or seed re-sync from an archive node.</summary>

A chain re-sync will put your node on the correct chain so you are in sync with the latest tip block.

Use a chain re-sync if your node has been offline for too long and cannot catchup. Seed Phrase is not required.

A seed re-sync will wipe the wallet and re-generate your keys from your seed phrase. Your coins will be restored.

Only use a seed re-sync if you have lost your node and do not have a backup.

You can also check the integrity of your archive db.

**action:** <br></br>
 &ensp;   **resync** : do a resync. If you wish to perform a chain re-sync only, do not provide your 24 word seed phrase.<br></br>
 &ensp;   **integrity** : on an Archive node, check the integrity of your Archive db. No host required.

**host:** (optional)<br></br>
    ip:port of the archive node to sync from or check the integrity of.<br></br>
    Use 'auto' to connect to a default archive node.

**phrase:** (optional)<br></br>
    Your 24 word seed phrase in double quotes, to perform a seed re-sync. Use with action:resync.<br></br>
    This will wipe the wallet of this node. You do NOT have to do this if you still have access to your wallet. 
    In this case, just do a re-sync without 'phrase' to get on the correct chain.

**keys:** (optional)<br></br>
    Number of keys to create if you need to do a seed re-sync. Default is 64.

**keyuses:** (optional)<br></br>
    How many times at most you used your keys..<br></br>
    Every time you re-sync with seed phrase this needs to be higher as Minima Signatures are stateful.<br></br>
    Defaults to 1000 - the max is 262144 for normal keys.

**Examples:**

*archive action:resync host:89.98.89.98:8888*

*archive action:resync host:auto phrase:\"YOUR 24 WORD SEED PHRASE\"*

*archive action:resync host:89.98.89.98:8888 phrase:\"YOUR 24 WORD SEED PHRASE\" keys:90 keyuses:2000*

*archive action:integrity*
</details>

<details><summary><strong>backup</strong><br></br>Backup your node. Uses a timestamped name by default.</summary>

**password:** (optional)<br></br>
    Set a password using letters and numbers only.

**file:** (optional)<br></br>
    Specify a filename ending in .bak, optionally include a local path for the backup.
    Default location for a backup is the Minima data folder.

**auto:** (optional)<br></br>
    true or false, true will schedule a non-password protected backup every 24 hours.

**maxhistory:** (optional)<br></br>
    Max relevant TxPoW to add - your history.

**Examples:**

*backup password:Longsecurepassword456*

*backup password:Longsecurepassword456 confirm:Longsecurepassword456*

*backup password:Longsecurepassword456 file:my-backup-01-Jan-22.bak maxhistory:100*

*backup auto:true*

</details>

<details><summary><strong>mysql</strong><br></br>Export the archive data of your node to a MySQL database.</summary>

The MySQL db can be used to perform a chain re-sync to put users on the correct chain, or a seed re-sync to restore access to lost funds, using the 24 word seed phrase.

Can also be used to query an address for its history of spent and unspent coins.

**host:**<br></br>
    The ip:port (or name of Docker container) running the MySQL db.

**database:**<br></br>
    name of the MySQL db being used to store the archive db data.

**user:**<br></br>
    MySQL user to login to as.

**password:**<br></br>
    MySQL password for the user provided.

**action:**<br></br>
 &ensp;    **info** : Show the blocks stored in the archive db and compare to the MySQL db.<br></br>
 &ensp;    **integrity** : Check the block order and block parents are correct in the MySQL db.<br></br>
 &ensp;    **update** : Update the MySQL db with the latest syncblocks from the node's archive db.<br></br>
 &ensp;    **addresscheck** : Check the history of all the spent and unspent coins from an address.<br></br>
 &ensp;    **autobackup** : Automatically save archive data to MySQL DB. Use with enable.<br></br>
 &ensp;    **resync** : Perform a chain or seed re-sync from the specified MySQL db. Will shutdown the node so you must restart it once complete.<br></br>
&ensp;   **wipe** :  Be careful. Wipe the MySQL db.<br></br>

**phrase:** (optional)<br></br>
     Use with action:resync. The BIP39 seed phrase of the node to re-sync.<br></br>
     If provided, the node will be wiped and re-synced.<br></br>
     If not provided, the node will be re-synced to the chain and will not be wiped.

**keys:** (optional)<br></br>
    If the seed phrase is provided, optionally set the number of keys to create.
    Default is 80.

**keyuses:** (optional)<br></br>
    If the seed phrase is provided, optionally set the number of previous uses for each key created.<br></br>
    Default is 1000.

**address:** (optional)<br></br>
    Use with action:checkaddress. The address to check the history of spent and unspent coins for.

**enable:** (optional)<br></br>
    Use with action:autobackup. Automatically save data to MySQL archive DB.

**Examples:**

*mysql host:mysqlhost:port database:archivedb user:archiveuser password:archivepassword action:info*

*mysql host:dockermysql database:archivedb user:archiveuser password:archivepassword action:info*

*mysql host:mysqlhost:port database:archivedb user:archiveuser password:archivepassword action:integrity*

*mysql host:mysqlhost:port database:archivedb user:archiveuser password:archivepassword action:update*

*mysql host:mysqlhost:port database:archivedb user:archiveuser password:archivepassword action:addresscheck address:MxG08..*

*mysql host:mysqlhost:port database:archivedb user:archiveuser password:archivepassword action:resync*

*mysql host:mysqlhost:port database:archivedb user:archiveuser password:archivepassword action:resync phrase:"24 WORDS HERE" keys:90 keyuses:2000*

</details>


<details><summary><strong>restore</strong><br></br>Restore your node from a backup.</summary>

You MUST wait until all your original keys are created before this is allowed.

**file:** <br></br>
    Specify the filename or local path of the backup to restore

**password:** (optional)<br></br>
    Enter the password of the backup

**Examples:**

*restore file:my-full-backup-01-Jan-22 password:Longsecurepassword456*
</details>

<details><summary><strong>restoresync</strong><br></br>Restore the entire system AND perform an archive chain sync. Use when the backup is old.</summary>

The node will be restored and an archive chain sync will commence from the last block in the backup.

You MUST wait until all your original keys are created before this is allowed.

**file:** <br></br>
    Specify the filename or local path of the backup to restore

**password:** (optional)<br></br>
    Enter the password of the backup

**keyuses: (optional**)<br></br>
    Increment (not set) the number of key uses per key.

**Examples:**

*restoresync file:my-full-backup-01-Jan-22 password:Longsecurepassword456*

*restoresync file:my-full-backup-01-Jan-22 password:Longsecurepassword456 keyuses:1000*
</details>


<details><summary><strong>vault</strong><br></br> View, encrypt/decrypt or wipe/restore your seed phrase and private keys.</summary>

 DO NOT SHARE YOUR SEED PHRASE WITH ANYONE.

 BE CAREFUL. ENSURE YOU HAVE A BACKUP AND SECURE RECORD OF YOUR PASSPHRASE BEFORE LOCKING.

You must have your passphrase to unlock your private keys.

**action:** (optional)<br></br>
&ensp;     **seed** : Show your seed phrase. The default.<br></br>
&ensp;    **wipekeys** : Wipe your private keys - keep the public.<br></br>
&ensp;    **restorekeys** : Restore your private keys.<br></br>
&ensp;    **passwordlock** : Lock your node by password encrypting private keys.<br></br>
&ensp;    **passwordunlock** : Unlock your node to reinstating your private keys.<br></br>

**seed:** (optional)<br></br>
    Enter your seed to lock your node. This will delete your private keys.

**phrase:** (optional)<br></br>
    Enter your passphrase in double quotes to restore your node. This will reinstate your private keys.

**Examples:**

*vault*

*vault action:wipekeys seed:0xDD4E..*

*vault action:restorekeys phrase:\"SPRAY LAMP..\"*

*vault action:passwordlock password:your_password*

*vault action:passwordlock password:your_password confirm:your_password*

*vault action:passwordunlock password:your_password*

</details>


## MiniDapp System

<details>
  <summary><strong>mds</strong><br></br>MiniDAPP System management.</summary>

Install, update or uninstall MiniDapps and set their permissions to READ/WRITE. Default permission is READ.

DO NOT give WRITE permissions to MiniDapps you do not trust!
Accept/deny pending commands from MiniDapps with READ permissions.

**action:** (optional)<br></br>
&ensp; **list** : List your installed MiniDapps. Default parameter.<br></br>
&ensp; **install** : Install a new MiniDapp and optionally set its permission. Must specify 'file'.<br></br>
&ensp; **update** : Update and replace an existing MiniDapp. Must specify MiniDapp 'uid' and 'file' of new MiniDapp.<br></br>
&ensp; **uninstall** : Uninstall a MiniDapp. Must specify MiniDapp 'uid'.<br></br>
&ensp; **pending** : List all pending commands waiting to be accepted or denied.<br></br>
&ensp; **accept** : Accept a pending command. Must specify 'uid' of the pending command.<br></br>
&ensp; **deny** : Deny a pending command. Must specify 'uid' of the pending command.<br></br>
&ensp; **permission** : Set permission for a MiniDapp to READ or WRITE. Must specify existing MiniDapp 'uid' and 'trust'.

**file:** (optional)<br></br>
The file name of the MiniDapp to install. Can either be in the Minima folder or specify the file path.

**uid** (optional)<br></br>
The uid of the MiniDapp to update, uninstall.

**trust:** (optional)<br></br>
The ip:port to send a message to. Use with 'action:send'.

**Examples:**

*mds*

*mds action:list*

*mds action:install file:wallet_1.0.mds.zip*

*mds action:install file:/Users/MyUser/Downloads/wallet_1.0.mds.zip trust:write*

*mds action:update uid:0xABA3.. file:wallet_2.0.mds.zip*

*mds action:uninstall uid:0xABA3..*

*mds action:pending*

*mds action:accept uid:0xCDF6..*

*mds action:deny uid:0xCDF6..*

*mds action:permission uid:0xABA3.. trust:write*
</details>

<details><summary><strong>checkmode</strong><br></br>Show if a MiniDAPP is READ or WRITE mode</summary>

**Examples:**

*checkmode*
</details>

<details><summary><strong>checkpending</strong><br></br>Show if a pending transaction UID is in the pending list</summary>

**Examples:**

*checkpending uid:0xFF..*
</details>

## Network

<details>
  <summary><strong>connect</strong><br></br>Connect to a network Minima instance.</summary>

Connect to another node to join the main network or to create a private test network.

Set your own host using the -host parameter at start up.

**host:**<br></br>
The external ip:port of the node to connect to.

**Examples:**

*connect host:94.0.239.117:9001*
</details>

<details>
  <summary><strong>disconnect</strong><br></br>Disconnect from a connected or connecting host.</summary>

Optionally disconnect from all hosts.

**uid:**<br></br>
Use 'all' to disconnect from all hosts or enter the uid of the host to disconnect from.<br></br>
uid can be found from the 'network' command.

**Examples:**

*disconnect uid:CVNPMLPOCQ0HQ*

*disconnect uid:all*
</details>

<details>
  <summary><strong>message</strong><br></br>Send a message to one or all of your direct peers.</summary>

**data:**
The message as a string.

**uid:** (optional)
Leave blank to send a message to all peers or enter the uid of the peer to send the message to.
uid can be found from the 'network' command.

**Examples:**

*message data:"hello" uid:CVNPMLPOCQ0HQ*
</details>


<details>
  <summary><strong>network</strong><br></br>Show network status or reset traffic counter.</summary>

**action:** (optional)<br></br>
&ensp;    **list** : List the direct peers you are connected to. The default.<br></br>
&ensp;    **reset** : Restart the traffic counter from 0.<br></br>
&ensp;    **recalculateip** : Reset your IP - when you move to a different WiFi.

**Examples:**

*network*

*network action:list*

*network action:reset*

*network action:recalculateip*
</details>

<details>
  <summary><strong>peers</strong><br></br>Prints the peers list this node has. P2P must be enabled.</summary>

**action:** (optional)<br></br>
&ensp;    **list** : List your peers. The default.<br></br>
&ensp;    **addpeers** : Add a list of new peers.

**peerslist:** (optional)<br></br>
    JSON array of new peers [ip:port,ip:port,..]

**Examples:**

*peers*

*peers action:list*

*peers action:addpeers peerslist:["31.125.188.214:9001","94.0.239.117:9001"]*
</details>

<details><summary><strong>ping</strong><br></br>Ping a host and get back Minima Node info.</summary>

**Examples:**

*ping host:*
</details>

<details>
  <summary><strong>rpc</strong><br></br>Enable and disable RPC on port 9005 (default is off).</summary>

**enable:**<br></br>
    true or false, true to enable rpc or false to disable.

**ssl:**<br></br>
    true or false, true to enable Self signed SSL - you can use stunnel yourself.

**password:**<br></br>
    the Basic Auth password used in headers - ONLY secure if used with SSL.

**Examples:**

*rpc enable:true*

*rpc enable:true ssl:true password:minima*

*rpc enable:true password:minima*

*rpc enable:false*
</details>

<details>
  <summary><strong>webhooks</strong><br></br>Add a web hook that is called with Minima events as they happen.</summary>

**action:** (optional)<br></br>
&ensp;    **list** : List your existing webhooks. The default.<br></br>
&ensp;    **add** : Add a new webhook.<br></br>
&ensp;    **remove** : Remove an existing webhook.<br></br>
&ensp;    **clear** : Clear the existing webhooks.

**hook:** (optional)<br></br>
    A URL, must be a POST endpoint.

**filter:** (optional)<br></br>
    Filters which events get posted.

**Examples:**

*webhooks action:list*

*webhooks action:add hook:http://127.0.0.1/myapi.php*

*webhooks action:remove hook:http://127.0.0.1/myapi.php*

*webhooks action:add hook:http://127.0.0.1/myapi.php filter:MINING*

*webhooks action:clear*
</details>


## Maxima

<details>
  <summary><strong>maxcontacts</strong><br></br>Manage your Maxima contacts. List, refresh, add, remove or search contacts.</summary>

**action:**<br></br>
&ensp;    **list** : List your Maxima contacts to see their id, address details, MLS and if they are on the same chain.<br></br>
&ensp;    **add** : Add a new contact. Use with the 'contact' parameter.<br></br>
&ensp;    **remove** : Remove a Maxima contact. Will also remove you from their contacts. Use with the 'id' parameter.<br></br>
&ensp;    **search** : Search for a contact. Use with the 'id' or 'publickey' parameter.

**contact:** (optional)<br></br>
    The Maxima contact address of another node. Can be found using the 'maxima' command.

**id:** (optional)<br></br>
    The id of an existing contact to remove or search for.

**publickey:** (optional)<br></br>
    The Maxima public key of an existing contact to remove or search for.

**Examples:**

*maxcontacts*

*maxcontacts action:list*

*maxcontacts action:add contact:MxG18H..*

*maxcontacts action:remove id:1*

*maxcontacts action:search publickey:0x3081..*
</details>

<details>
  <summary><strong>maxcreate</strong><br></br>Create a 128 bit RSA public and private key. </summary>

You can use them with maxsign and maxverify.

**Examples:**

*maxcreate*
</details>

<details>
  <summary><strong>maxextra</strong><br></br>Perform extra functions on Maxima.</summary>

**action:**<br></br>
&ensp; **staticmls** : Set an unchanging Maxima Location Service (mls) host for yourself.<br></br>
&ensp; **addpermanent** : On your static mls node, add your Maxima public key to allow 'getaddress' requests from anyone.<br></br>
&ensp; **removepermanent** : On your static mls node, remove your Maxima public key to stop allowing 'getaddress' requests.<br></br>
&ensp; **listpermanent** : On your static mls node, list all public keys currently allowing public requests for their contact address.<br></br>
&ensp; **clearpermanent** : On your static mls node, remove ALL public keys currently allowing requests for their contact address.<br></br>
&ensp; **getaddress** : Request the current contact address of a permanently accessible user from their static mls host.<br></br>
&ensp; **mlsinfo** : List info about users using you as their mls and the public keys of their contacts.<br></br>
&ensp; **allowallcontacts** : If you have shared your permanent maxaddress, you can disable/enable users adding you as a contact.<br></br>
&ensp; **addallowed** : If 'allowallcontacts' is disabled, you can authorize specific users to add you as a contact. Stored in RAM.<br></br>
&ensp; **listallowed** : List all the public keys which are allowed to add you as a Maxima contact.<br></br>
&ensp; **clearallowed** : Remove the public keys of ALL users which are allowed to add you as a Maxima contact.

**publickey:** (optional)<br></br>
 The Maxima public key of the user who wants to share their permanent maxaddress to be publicly contactable over Maxima.<br></br>
 Or the Maxima public key of a user who is allowed to add you as a contact.

**maxaddress:** (optional)<br></br>
 Used with 'action:getaddress' to get the contact address of a user using their permanent maxaddress.<br></br>
 Their maxaddress must be in the format MAX#pubkey#staticmls, with their public key and static mls host address.

**enable:** (optional)<br></br>
 true or false, use with 'action:allowallcontacts' to enable or disable all new contacts.

**host:** (optional)<br></br>
 The 'p2pidentity' of a server node which is always online. Use with 'action:staticmls' to set the host of your static mls.

**Examples:**

*maxextra action:staticmls host:Mx...@34.190.784.3:9001*

*maxextra action:staticmls host:clear*

*maxextra action:addpermanent publickey:0x3081..*

*maxextra action:removepermanent publickey:0x3081..*

*maxextra action:listpermanent*

*maxextra action:clearpermanent*

*maxextra action:getaddress maxaddress:MAX#0x3081..#Mx..@34.190.784.3:9001*

*maxextra action:mlsinfo*

*maxextra action:allowallcontacts enable:false*

*maxextra action:addallowed publickey:0x2451..*

*maxextra action:listallowed*

*maxextra action:clearallowed*
</details>

<details>
  <summary><strong>maxima</strong><br></br>Check your Maxima details, send a message/data.</summary>

**action:**<br></br>
&ensp; **info** : Show your Maxima details - name, publickey, staticmls, mls, local identity, and contact address.<br></br>
&ensp; **setname** : Set your Maxima name so your contacts recognize you. Default 'noname'.<br></br>
&ensp; **hosts** : List your Maxima hosts and see their Maxima public key, contact address, last seen time, and if you are connected.<br></br>
&ensp; **send** : Send a message to a contact. Must specify 'id|to|publickey', 'application', and 'data' parameters.<br></br>
&ensp; **sendall** : Send a message to ALL your contacts. Must specify 'application' and 'data' parameters.<br></br>
&ensp; **refresh** : Refresh your contacts by sending them a network message.v

**name:** (optional)<br></br>
 Set your name. Use with 'action:setname'.

**id | to | publickey:** (optional)<br></br>
 The id, contact address, or public key of the recipient of the message. Use with 'action:send'.

**application:** (optional)<br></br>
 A string that identifies which application should process the message. Use with 'action:send'.

**data:** (optional)<br></br>
 The data to send. Can be HEX or a JSON object. Use with 'action:send'.

**poll:** (optional)<br></br>
 true or false, true will poll the send action until successful. Use with 'action:send'.

**delay:** (optional)<br></br>
 Only used with poll or with sendall. Delay sending the message by this many milliseconds.

**Examples:**

*maxima action:info*

*maxima action:setname name:myname*

*maxima action:hosts*

*maxima action:send id:1 application:appname data:0xFED5..*

*maxima action:send to:MxG18H.. application:appname data:0xFED5..*

*maxima action:send publickey:0xCD34.. application:ip:port data:0xFED5.. poll:true*

*maxima action:refresh*
</details>


<details>
  <summary><strong>maxsign</strong><br></br>Sign a piece of data with your Maxima ID.</summary>

Returns the signature of the data, signed with your Maxima private key or the specified key.

**data:** <br></br>
The 0x HEX data to sign.

**privatekey:** (optional) <br></br>
The 0x HEX data of the private key from maxcreate. Uses your Maxima ID otherwise.

**Examples:**

*maxsign data:0xCD34..*

*maxsign data:0xCD34.. privatekey:0x30819..*
</details>


<details>
  <summary><strong>maxverify</strong><br></br>Verify data with a Maxima public key. Returns valid true or false.</summary>

**data:** <br></br>
The 0x HEX data to verify the signature for.

**publickey:** <br></br>
The Maxima public key of the signer.

**signature:** <br></br>
The signature of the data.

**Examples:**

*maxverify data:0xCD34.. publickey:0xFED5 signature:0x4827..*   
</details>


## Scripts


<details>
  <summary><strong>newscript</strong><br></br>Add a new custom script.</summary>

Track ALL coins with this script address or just ones with state variables relevant to you.

**script:** <br></br>
The script to add to your node. Your node will then know about coins with this script address.

**trackall:** <br></br>
true or false, true will track all coins with this script address. false will only track coins with this script address that are relevant to you.

**clean: ** (optional) <br></br>
true or false, true will clean the script to its minimal correct representation. Default is false.

**Examples:**

*newscript trackall:true script:"RETURN SIGNEDBY(0x1539..) AND SIGNEDBY(0xAD25..)"*

*newscript trackall:false script:"RETURN (@BLOCK GTE PREVSTATE(1) OR @COINAGE GTE PREVSTATE(4)) AND VERIFYOUT(@INPUT PREVSTATE(2) @AMOUNT @TOKENID FALSE)"*
</details>



<details>
  <summary><strong>removescript</strong><br></br>Remove a custom script.</summary>

 BE CAREFUL not to remove a script you need.

**address:** <br></br>
The address of the script.    

**Examples:**

*removescript address:0xFFE678768CDE..*

*removescript address:MxFFE678768CDE..*

</details>


<details>
  <summary><strong>runscript</strong><br></br>Test run a script with predefined parameters without executing on chain.</summary>

Scripts will be auto cleaned for you.

**script:** <br></br> The script to run, surrounded by double quotes.

**state:** (optional) <br></br> State variable values to use when running the script. JSON object in the format {0:value,1:value,..}.

**prevstate:** (optional) <br></br> The previous state variable values (for the input coin) to use when running the script. JSON object in the format {0:value,1:value,..}.

**globals:** (optional) <br></br> The Global variable values to use when running the script. JSON object in the format {@GLOBAL:value,..}.

**signatures:** (optional) <br></br>The signatures required for the script. JSON array.

**extrascripts:** (optional) <br></br>Extra scripts required for MAST contracts. JSON object in the format {script:proof,..}.

**Examples:**

*runscript script:"RETURN SIGNEDBY(0xFF..) AND @BLOCK GT 100" globals:{"@BLOCK":"101"} signatures:["0xFF"]*

*runscript script:"LET st=STATE(99) LET ps=PREVSTATE(99) IF st EQ ps AND @COINAGE GT 20 AND SIGNEDBY(0xFF) THEN RETURN TRUE ELSEIF st GT ps AND SIGNEDBY(0xEE) THEN RETURN TRUE ENDIF" globals:{"@COINAGE":"23"} state:{"99":"0"} prevstate:{"99":"0"} signatures:["0xFF"]*

*runscript script:"MAST 0x0E3.." extrascripts:{"RETURN TRUE":"0x000.."}*
</details>


<details>
  <summary><strong>scripts</strong><br></br>List all scripts or search for a script / basic address your node is tracking.</summary>

**address:** (optional)<br></br> Script address or basic address to search for. Can be 0x or Mx address.

**Examples:**

*scripts*

*scripts address:0xFED5..*

*scripts address:MxG087..*
</details>

<details>
  <summary><strong>tutorial</strong><br></br>Show the complete Grammar for Minima KISSVM scripting.</summary>
</details>



## Search

<details><summary><strong>coins</strong><br></br>Search for coins that are relevant to you or in the unpruned chain.</summary>

**relevant:** (optional)<br></br>
   true or false, true will only return coins you are tracking. <br></br>
   false will search all coins in the unpruned chain. <br></br>
   Default is false unless no other parameters are provided.

**sendable:** (optional)<br></br>
   true only, filter out coins that are not sendable, they might be locked in a contract.<br></br>
   Default is to return sendable and unsendable coins.

**coinid:** (optional)<br></br>
   A coinid, to search for a single coin.

**amount:** (optional)<br></br>
   The coin value to search for.

**address:** (optional)<br></br>
   Address of a coin to search for, could be a script address. Can be a 0x or Mx address.

**tokenid:** (optional)<br></br>
   A tokenid, to search for coins of a specific token. Minima is 0x00.

**checkmempool:** (optional)<br></br>
   Check if the coin is in the mempool.

**coinage:** (optional)<br></br>
   How old does the coin have to be.

**order:** (optional)<br></br>
   Order asc or desc (Ascending or Descending).

**Examples:**

*coins*

*coins relevant:true sendable:true*

*coins relevant:true amount:10*

*coins coinid:0xEECD7..*

*coins relevant:true tokenid:0xFED5..*

*coins relevant:true address:0xCEF6.. tokenid:0x00*

*coins relevant:true address:MxABC9..*

</details>


<details><summary><strong>history</strong><br></br>Return all TxPoW relevant to you.</summary>

**max:** (optional)<br></br>
    Maximum number of TxPoW to retrieve.

**Examples:**

*history max:20*

</details>


<details><summary><strong>keys</strong><br></br>Get a list of all your public keys or create a new key.</summary>

Each public key can be used for signing securely 262144 (64^3) times.

**action:** (optional)<br></br>
&ensp; **list** : List your existing public keys. The default.<br></br>
&ensp; **checkkeys** : Checks if your Public and Private keys are correct.<br></br>
&ensp; **new** : Create a new key pair.

**publickey:** (optional)<br></br>
Search for a specific public key.

**Examples:**

*keys*

*keys action:list*

*keys action:checkkeys*

*keys action:list publickey:0xFFEE56..*

*keys action:new*

</details>

<details><summary><strong>tokens</strong><br></br>List all tokens in the unpruned chain.</summary>

Optionally import or export tokens to share token data.

**tokenid:** (optional)<br></br>
&ensp;The tokenid of the token to search for or export.

**action:** (optional)<br></br>
&ensp;**import** : List your existing public keys.<br></br>
&ensp;**export** : Create a new key.

**data:** (optional)<br></br>
&ensp;The data of the token to import, generated from the export.

**Examples:**

*tokens*

*tokens tokenid:0xFED5..*

*tokens action:export tokenid:0xFED5..*

*tokens action:import data:0x000..*

</details>
<details><summary><strong>txpow</strong><br></br> Search for a specific TxPoW in the unpruned chain or your mempool.</summary>

Search by txpowid, block or 0x / Mx address.

**txpowid:** (optional)<br></br>
    txpowid of the TxPoW to search for.

**block:** (optional)<br></br>
    Block number to search in. Must be in the unpruned chain.

**address:** (optional)<br></br>
    0x or Mx address. Search for TxPoWs containing this specific address.

**max:** (optional)<br></br>
    Max relevant TxPoW to retrieve.

**Examples:**

*txpow txpowid:0x000..*

*txpow block:200*

*txpow address:0xCEF6..*

</details>

## Send

<details><summary><strong>multisig</strong><br></br> Create a multisig coin that can only be used in a txn signed by root OR n of m given public keys.</summary>

Provide your Vault password to temporarily decrypt the private keys when creating the coin or signing a transaction.

**action:**<br></br> 
&ensp;**create** : create a new multisig coin.<br></br> 
&ensp;**getkey** : returns one of your default public keys to be provided when creating the coin.<br></br> 
&ensp;**list** : lists all existing multisig coins.<br></br> 
&ensp;**spend** : creates an unsigned transaction (.txn) file to spend a specified amount of a multisig coin.<br></br> 
&ensp;**sign** : signs a multisig transaction (.txn) file with the relevant public keys and outputs a new signed file.<br></br> 
&ensp;**post** : posts the transaction to the network, must be signed as required by the contract before posting.<br></br> 
&ensp;**view** : view the details of a multisig transaction file.

**id:** (optional)<br></br> 
    Create a multisig coin with an id or list by id. Should be unique. This cannot be retrieved later.
    The id is hashed and stored as state variable 0.

**amount:** (optional)<br></br> 
    The amount to lock in the multisig coin or the amount to spend.

**publickeys:** (optional)<br></br> 
    The full list of public keys that can sign the multisig transaction, in the format ["pubkey1",..,"pubkeym"]

**root:** (optional)<br></br> 
    A root public key which can spend the coin without passing the required signature threshold.

**required:** (optional)<br></br> 
    The minimum number of public keys from the list required to sign a txn which spends from the multisig.

**coinid:** (optional)<br></br> 
    The coinid of the multisig coin to spend. Alternatively, use the id.

**address:** (optional)<br></br> 
    The address to send the specified amount to.

**file:** (optional)<br></br> 
    The transaction (.txn) file to create, sign or post.

**password:** (optional)<br></br> 
    Vault password to decrypt the private keys. Use with action:create and action:sign if the node is password locked.
    Keys will be re-encrypted after.

**Examples:**

*multisig action:create id:2of3multisig amount:100 publickeys:["0xFED5..","0xABD6..","0xFD8B.."] required:2 password:your_password*

*multisig action:create id:3of3multisigroot amount:100 publickeys:["0xFED5..","0xABD6..","0xFD8B.."] required:3 root:0xFFE..*

*multisig action:list*

*multisig action:list id:2of3multisig*

*multisig action:spend id:3of3multisigroot amount:5 address:0xFF..*

*multisig action:spend coinid:0x17EA.. amount:5 address:0xFF.. file:multisig.txn*

*multisig action:sign file:multispend_1673351592845.txn*

*multisig action:sign file:multisig.txn password:your_password*

*multisig action:view file:multisig.txn*

*multisig action:post file:signed_multispend_1673351592845.txn*

*multisig action:post file:signed_multisig.txn*

</details>

<details><summary><strong>send</strong><br></br> Send Minima or custom tokens to a wallet or custom script address.</summary>

Optionally, send to multiple addresses in one transaction; split UTxOs; add state variables or include a burn.

**address:** (optional)<br></br> 
    A Minima 0x or Mx wallet address or custom script address. Must also specify amount.

**amount:** (optional)<br></br> 
    The amount of Minima or custom tokens to send to the specified address.

**multi:** (optional)<br></br> 
    JSON Array listing addresses and amounts to send in one transaction.
    Takes the format ["address:amount","address2:amount2",..], with each set in double quotes.

**tokenid:** (optional)<br></br> 
    If sending a custom token, you must specify its tokenid. Defaults to Minima (0x00).

**state:** (optional)<br></br> 
    List of state variables, if sending coins to a script. A JSON object in the format {"port":"value",..}

**burn:** (optional)<br></br> 
    The amount of Minima to burn with this transaction.

**password:** (optional)<br></br> 
    If your Wallet is password locked, you can unlock it for this one transaction - then relock it.

**split:** (optional)<br></br> 
    You can set the number of coins the recipient will receive, between 1 and 20. Default is 1.<br></br> 
    The amount being sent will be split into multiple coins of equal value.<br></br> 
    You can split your own coins by sending to your own address.<br></br> 
    Useful if you want to send multiple transactions without waiting for change to be confirmed.

**coinage:** (optional)
    How old must the coins be in blocks.

**debug:** (optional)
    true or false, true will print more detailed logs.

**dryrun:** (optional)
    true or false, true will simulate the send transaction but not execute it.

**mine:** (optional)
    true or false - should you mine the transaction immediately.

**Examples:**

*send address:0xFF.. amount:10*

*send address:0xFF.. amount:10 tokenid:0xFED5.. burn:0.1*

*send address:0xFF.. amount:10 split:5 burn:0.1*

*send multi:["0xFF..:10","0xEE..:10","0xDD..:10"] split:20*

*send amount:1 address:0xFF.. state:{"0":"0xEE..","1":"0xDD.."}*

</details>

<details><summary><strong>sendpoll</strong><br></br> Send function that adds 'send' commands to a list and polls every 30 seconds until the return status is 'true'.</summary>

**action:** (optional)<br></br>
&ensp;**list** : list all the 'send' commands in the polling list.<br></br>
&ensp;**remove** : remove a 'send' command from the polling list.

**uid:** (optional)<br></br>
    The uid of a 'send' command you wish to remove from the polling list. Use with action:remove.

**Examples:**

*sendpoll address:0xFF.. amount:10*

*sendpoll address:0xFF.. amount:10 tokenid:0xFED5.. burn:0.1*

*sendpoll action:list*

*sendpoll action:remove uid:0x..*

</details>

<details><summary><strong>sendnosign</strong><br></br> Create a txn but don't sign it.</summary>

Constructs and outputs an unsigned transaction to a file in the base folder. 

The output .txn file can then be imported to an offline node for signing. Must be done from an online node as the MMR proofs for the input coins are added. 

Useful when the keys on an online node are wiped or password locked.

**address:** (optional)<br></br> 
    A Minima 0x or Mx wallet address or custom script address. Must also specify amount.

**amount:** (optional)<br></br> 
    The amount of Minima or custom tokens to send to the specified address.

**multi:** (optional)<br></br> 
    JSON Array listing addresses and amounts to send in one transaction. Takes the format [address:amount,address2:amount2,..], with each set in double quotes.

**tokenid:** (optional)<br></br> 
    If sending a custom token, you must specify its tokenid. Defaults to Minima (0x00).

**state:** (optional)<br></br> 
    List of state variables, if sending coins to a script. A JSON object in the format {\"port\":\"value\",..}

**burn:** (optional)<br></br> 
    The amount of Minima to burn with this transaction.

**split:** (optional)<br></br> 
    Set the number of coins the recipient will receive, between 1 and 20. Default is 1. The amount being sent will be split into multiple coins of equal value. You can split your own coins by sending to your own address. Useful if you want to send multiple transactions without waiting for change to be confirmed.

**file:** (optional)<br></br> 
    Specify the file to output, otherwise default chosen.

**debug:** (optional)<br></br> 
    true or false, true will print more detailed logs.

**Examples:**

*sendnosign address:0xFF.. amount:10*

*sendnosign address:0xFF.. amount:10 tokenid:0xFED5.. burn:0.1*

*sendnosign address:0xFF.. amount:10 split:5 burn:0.1*

*sendnosign multi:["0xFF..:10","0xEE..:10","0xDD..:10"] split:20*

*sendnosign amount:1 address:0xFF.. state:{\"0\":\"0xEE..\",\"1\":\"0xDD..\"}*

</details>

<details>
  <summary><strong>sendsign</strong><br></br>Sign a transaction previously created by the 'sendnosign' command, by specifying its .txn file.</summary>

Optionally, if the node is Vault password locked, provide the Vault password to decrypt the keys for signing. 

The keys will be automatically re-encrypted after signing. 

Can be signed on an offline node, then posted from an online node.

**file:** <br></br> Name of the unsigned transaction (.txn) file to sign, located in the node's base folder. If not in the base folder, specify the full file path.

**password:** <br></br>The Vault password, if the node is password locked.

**Examples:**

*sendsign file:unsignedtransaction-1674907380057.txn*

*sendsign file:C:\\Users\\unsignedtransaction-1674907380057.txn password:your_vaultpassword*
</details>


<details>
  <summary><strong>sendview</strong><br></br>View a transaction (signed or unsigned).</summary>

View the details of a transaction created by the 'sendnosign' command by specifying its .txn file.

**file:** <br></br> Name of the transaction (.txn) file to view, located in the node's base folder. If not in the base folder, specify the full file path.

**Examples:**

*sendview file:unsignedtransaction-1674907380057.txn*

*sendview file:C:\\Users\\signedtransaction-1674907380057.txn*
</details>


<details>
  <summary><strong>sendpost</strong><br></br>Post a transaction previously created and signed using the 'sendnosign' and 'sendsign' commands.</summary>

Post a transaction that was created and signed using the 'sendnosign' and 'sendsign' commands. 

Must be posted from an online node within approximately 24 hours of creation to ensure MMR proofs are valid.

**file:** <br></br> Name of the signed transaction (.txn) file to post, located in the node's base folder. If not in the base folder, specify the full file path.

**Examples:**

*sendpost file:signedtransaction-1674907380057.txn*

*sendpost file:C:\Users\signedtransaction-1674907380057.txn*
</details>


## Signatures
<details><summary><strong>sign</strong><br></br> Sign the data with the publickey.</summary>

Returns the signature of the data, signed with the corresponding private key.

**data:**<br></br>
    The 0x HEX data to sign.

**Examples:**

*sign data:0xCD34..*

</details>


<details><summary><strong>verify</strong><br></br> Verify a signature.</summary>

Returns valid true or false.

**data:**<br></br>
    The 0x HEX data to verify the signature for.

**publickey:**<br></br>
    The public key of the signer.

**signature:**<br></br>
    The signature of the data.

**Examples:**

*verify data:0xCD34.. publickey:0xFED5 signature:0x4827..*

</details>

## Transactions

<details><summary><strong>burn</strong><br></br>View the latest Burn metrics</summary>

View the number of burn transactions and the maximum, median, average and minimum burn metrics for the last 1, 10 and 50 blocks.

Use as an indicator for an appropriate burn amount for transactions. 

**Examples:**

*burn*

</details>


<details>
  <summary><strong>logs</strong><br></br>Enable detailed logs for script errors or mining activity.</summary>

Enable detailed logs for script errors, mining activity, Maxima, network messages, blocks, or IBD processing.

**scripts:** (optional) <br></br>true or false. Setting it to true turns on detailed logs for script errors.

**mining:** (optional) <br></br>true or false. Setting it to true turns on detailed logs for mining start/end activity.

**maxima:** (optional) <br></br>true or false. Setting it to true turns on detailed logs for Maxima.

**networking:** (optional) <br></br>true or false. Setting it to true turns on detailed logs for Network Messages.

**blocks:** (optional) <br></br>true or false. Setting it to true turns on detailed logs for Blocks.

**ibd:** (optional) <br></br>true or false. Setting it to true turns on detailed logs for IBD processing.

**Examples:**

*logs scripts:true*

*logs scripts:false mining:true*
</details>


<details>
  <summary><strong>txnbasics</strong><br></br>Automatically set the MMR proofs and scripts for a transaction.</summary>

Only run this command when a transaction is ready to be posted.

**id:** <br></br> The ID of the transaction.

**Examples:**

*txnbasics id:simpletxn*
</details>

<details>
  <summary><strong>txncheck</strong><br></br>Show details about the transaction.</summary>

Verify whether the inputs, outputs, signatures, proofs, and scripts are valid.

**id:** (optional) <br></br> The ID of the transaction to check.

**Examples:**

*txncheck id:multisig*
</details>


<details>
  <summary><strong>txnclear</strong><br></br>Clear ALL the Witness data for a transaction.</summary>

Clears signatures, mmr proofs and script proofs.

**id:** <br></br> The ID of the transaction to clear.

**Examples:**

*txnclear id:multisig*
</details>

<details>
  <summary><strong>txncreate</strong><br></br>Create a custom transaction.</summary>

The first step before defining the inputs and outputs.

**id:** <br></br>Create an ID for the transaction.

**Examples:**

*txncreate id:multisig*
</details>


<details>
  <summary><strong>txndelete</strong><br></br>Delete a previously created custom transaction.</summary>

**id:** <br></br>The ID of the transaction to delete.

**Examples:**

*txndelete id:multisig*
</details>

<details>
  <summary><strong>txnexport</strong><br></br>Export a transaction as HEX or to a file.</summary>

**id:** <br></br>The ID of the transaction to export.

**file:** (optional) <br></br>File name/path to export the transaction to, must use the .txn extension.

**Examples:**

*txnexport id:simpletxn*

*txnexport id:multisig file:multisig.txn*
</details>


<details>
  <summary><strong>txnimport</strong><br></br>Import a transaction from previously exported HEX data or a .txn file.</summary>

**id:** (optional) <br></br>Choose an ID for the transaction you are importing.

**file:** (optional) <br></br>File name/path to the previously exported .txn file.

**data:** (optional) <br></br>HEX data of the previously exported transaction.

**Examples:**

*txnimport data:0x0000..*

*txnimport id:simpletxn data:0x0000..*

*txnimport id:multisig file:multisig.txn*
</details>

<details>
  <summary><strong>txninput</strong><br></br>Add a coin as an input to a transaction.</summary>

**id:** <br></br>The id of the transaction to add an input to.

**coinid:**  (optional) <br></br> The id of the coin to add as an input.

**coindata:**  (optional) <br></br> The data of the coin to add, instead of coinid. Can be from the 'coinexport' command or 'outputcoindata' from another transaction.

**floating:**  (optional) <br></br> true or false, true will add an unspecified, floating ELTOO coin as an input. If true, also specify address, amount, tokenid. If false, specify a coinid or coindata.

**address:**  (optional) <br></br> Coin address to use for the floating input. Can be 0x or Mx address.

**amount:**  (optional) <br></br> Amount of a coin for the floating input.

**tokenid:**  (optional) <br></br> tokenid of a coin for the floating input.

**scriptmmr:**  (optional) <br></br> true or false, true will add the scripts and MMR proof for the coin.

**Examples:**

*txninput id:simpletxn coinid:0xD0BF..*

*txninput id:multisig coinid:0xD0BF.. scriptmmr:true*

*txninput id:posttxn coindata:0x000..*

*txninput id:eltootxn floating:true address:0xFED5.. amount:10 tokenid:0x00*
</details>

<details>
  <summary><strong>txnlist</strong><br></br>List your custom transactions. Includes previously posted transactions.</summary>

**id:** (optional) <br></br>The id of a single transaction to list.

**Examples:**

*txnlist*

*txnlist id:multisig*
</details>

<details>
  <summary><strong>txnoutput</strong><br></br>Create a transaction output.</summary>

This will create a new coin (UTxO).

If the sum of inputs > outputs, the difference will be burned unless change to the sender is defined as an output.

**id:**  <br></br> The id of the transaction to add an output to.

**amount:**  <br></br> The amount for the output. To send to the specified address.

**address:** Address of the recipient/script to send the output to. Can be 0x or Mx address.

**tokenid:**  (optional) <br></br> tokenid of the output. Default is Minima (0x00).

**storestate:**  (optional) <br></br> true or false, true will keep the state variables of the transaction in the newly created output coin. Default is true.

**Examples:**

*txnoutput id:simpletxn amount:10 address:0xFED5..*

*txnoutput id:multisig amount:10 address:0xFED5.. tokenid:0xCEF5.. storestate:false*

*txnoutput id:eltootxn amount:10 address:0xFED5..*
</details>

<details>
  <summary><strong>txnscript</strong><br></br>Add scripts to a transaction.</summary>

**id:** <br></br>The id of the transaction.

**scripts:** <br></br>JSON holds the script and the proof in the format {script:proof}

If it is a single script, and not one created with mmrcreate, leave the proof blank.

If it is an mmrcreate script, include the proof.

**Examples:**

*txnscript id:txnmast scripts:{"RETURN TRUE":""}*

*txnscript id:txnmast scripts:{"RETURN TRUE":"0x000.."}*
</details>

<details>
  <summary><strong>txnsign</strong><br></br>Sign a transaction.</summary>

**id:**  <br></br> The id of the transaction to sign.

**publickey:**  <br></br> The public key specified in a custom script, or 'auto' for transactions with simple inputs.

**txnpostauto:**  (optional) <br></br> Do you want to post this transaction. Use the same values as you would for txnpost auto (sort MMR and Scripts).

**txnpostburn:**  (optional) <br></br> If you also post this transaction, do you want to add a burn transaction.

**txnpostmine:**  (optional) <br></br> If you also post this transaction, do you want to mine it immediately.

**txndelete:**  (optional) <br></br> true or false - delete this txn after signing AND posting.

**Examples:**

*txnsign id:simpletxn publickey:auto*

*txnsign id:simpletxn publickey:auto password:your_password*

*txnsign id:multisig publickey:0xFD8B..*

*txnsign id:simpletxn publickey:auto txnpostauto:true*
</details>

<details>
  <summary><strong>txnstate</strong><br></br>Add a state variable to a transaction.</summary>

**id:** <br></br> The id of the transaction.

**port:** <br></br>Port number of the state variable, from 0-255.

**value:** <br></br>Value for the state variable.

**Examples:**

*txnstate id:multisig port:0 value:0xFED5..*

*txnstate id:multisig port:1 value:100*

*txnstate id:multisig port:1 value:"string"*
</details>
