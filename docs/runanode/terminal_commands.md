---
sidebar_position: 6
---

# Terminal Commands

The following commands can be run directly from a Minima Terminal: 

These can also be viewed by typing `help` into the Minima Terminal. 

 ; can be used to chain multiple commands<br />
parameter values in **bold** indicate default value

| Command | Required Parameters | Optional Parameters | Description |
| :-------- | :--- | :------------ | :----------- |
| backup | |**password:** <br/>**file:** <br/>**auto:** <br/>**complete:**true \| **false** |Backup your node. Uses a timestamped name by default. Option to set a password and set the file name/path. <br/> Complete true will include the archive database. <br/> Auto true will schedule a default backup every 24 hours.|
| balance | |**address:**Mx.. \| 0x.. <br/> **confirmations:**  |Show your total balance of Minima coins and custom tokens. <br/> **address** - 0x or Mx address to filter by <br/>**confirmations** - number of blocks required for coins to be considered confirmed in your balance |
| burn | | |View number of burn txns and min/median/max/avg Burn metrics for latest 1, 10 and 50 blocks |
| coinexport |**coinid:** | |Export a coin and its proof |
| coinimport |**data:** |**track:** **true** \| false |Import a coin and its MMR proof and keep tracking it |
| coins | |**relevant:** **true** \| false <br/>**sendable:**true \| **false**<br/> **coinid:** <br/>**amount:** <br/>**address:** <br/> **tokenid:**  |Search for coins in the tree. Optional filters. |
| cointrack |**enable:** **true** \| false <br/>**coinid:**  | |Track or untrack the MMR proof for a coin |
| connect |**host:** | |Connect to a network Minima instance using ip:port |
| consolidate |**tokenid:** |**coinage:3**<br/>**maxcoins:**<br/>**maxsigs:**<br/>**burn:**<br/>**debug:**true \| **false**<br/>**dryrun:**true \| **false** |Merge multiple coins (UTxOs) into one coins by sending them back to yourself.<br/> **coinage** - set a minimum coin age in blocks, default 3 blocks  <br/>**maxcoins** - maximum number of coins to consolidate <br/> **maxsigs** - maximum number of signatures for the txn <br/>**burn** - the amount to burn in the txn  <br/> **debug** - true will provide additional logs <br/> **dryrun** - true will simulate the command without executing|
| disconnect |**uid:** | |Disconnect from a connected or connecting host. Use network command to find peer UID. |
| getaddress | | |Get one of your default Minima addresses |
| hash |**data:** |**type:**keccak \| sha2 \| sha3 |Hash the data <br/> **type:** the hashing algorithm |
| hashtest | |**amount:**1000000 |Check the speed of hashing of this device. Option to set the number of hashes. Default 1 million hashes |
| help | | |Show Help. |
| incentivecash | |**uid:** |Show your rewards or specify your Incentive ID for the Incentive Program |
| keys | |**action:list** \| new |Get a list of all your public keys or create a new key |
| maxcontacts |**action:list** \| mls \| add \| remove \| search |**contact:** <br/>**id:** <br/>**publickey:**  |Manage your Maxima contacts. Refresh contacts using the mls service. Add by Contact address, remove by id, search by id or publickey. |
| maxima |**action:info** \| setname \| hosts \| send \| refresh |**name:** <br/>**id:** \| **to:** \| **publickey:** <br/>**application:** <br/>**data:** <br/>**logs:**true \| **false** <br/> **poll**:true \| **false**  |**action** - Check your Maxima details (info), <br/>set your name (setname), <br/>view your Maxima hosts (hosts), <br/>send a message (send), refresh maxima (refresh). <br/> **name** - (setname) set your name **id/to/publickey** - (send) send to given maxima contact id (id)/full address/public key <br/>**application** - (send) provide host:port,<br/> **data** - (send) The HEX data for the message to send<br/>**logs** - enable/disable logs<br/>**poll** - poll messages to perform multiple sends quickly  |
| mds | |**action:list** \| install \| uninstall \| pending \| accept \| deny \| permission <br/>**file:** <br/>**uid:** <br/> **trust:read** \| write | MiniDapp System management. <br/> Actions:<br/> **list**: lists all MiniDapps, their uid and details, <br/>**install:** install a MiniDAPP (requires *file* - file path to minidapp),<br/> **uninstall:** uninstall a MiniDAPP (requires minidapp *uid*)<br/> **pending:** show all pending commands, <br/> **accept:** accept a pending command (requires pending command *uid*),<br/>**deny:** deny a pending command (requires pending command *uid*), <br/>**permission:** set the permission for a minidapp (requires minidapp *uid* and *trust*)|
| message |**uid:** |**data:**message |Send a network message to one or all of your direct Minima peers. Use network command to find peer UID. NOT a Maxima command. |
| mmrcreate |**nodes:**[" ",...] | |Create an MMR Tree of data. JSON array of leaf nodes, nodes can be STRING / HEX <br/> e.g. mmrcreate nodes:["RETURN TRUE","RETURN FALSE"] |
| mmrproof |**data:** <br/>**proof:** <br/>**root:**  | |Check an MMR proof. <br/>**data** - Leaf node data, data can be STRING / HEX <br/> **proof** - mmr proof for data (from mmrcreate output)<br/>**root** - mmr root for data  (from mmrcreate output) <br/>e.g. mmrproof data:"RETURN TRUE" proof:0x… root:0x… |
| network | |**action:list** \| restart |Show network connections or restart |
| newaddress | | |Create a new address that will not be not used for anything else (not a default change address) |
| newscript |**script:** <br/> **track:true** \| false| |Add a new custom script <br/> **track** - keep track of on chain activity with this script |
| printtree | |**depth:**32 <br/>**cascade:**true \| **false** |Print a tree representation of the blockchain. <br/> **depth** - number of blocks <br/> **cascade** - Print the Cascading chain |
| quit | | |Shutdown Minima |
| restore |**file:** | |Restore the entire system. |
| rpc |**enable:**true \| false | |Enable and disable RPC on port 9005 |
| runscript |**script:** |**clean:true** \| false <br/>**state:**{"port":"value",..} <br/>**prevstate:**{"port":"value",..} <br/>**globals:**{"@GLOBALVAR":"value",...} <br/>**signatures:**[" ",...] <br/>**extrascripts:**{"script":"scriptproof",...}  |Run a script with the defined parameters<br/>**clean** - clean the script<br/>**state** - JSON Object, state variable values for the script<br/>**prevstate** - JSON Object, previous state variables values for the script <br/> **globals** -  JSON Object, global variable values for the script e.g. globals:{"@BLOCK":"101"} signatures: JSON Array <br/> **extrascripts** - JSON Object |
| scripts | |**address:** |Search scripts<br/>**address** - script address |
| send | |**address:**Mx.. \| 0x..<br/>**amount:** <br/>**multi:**["address1:amount","address2:amount"]<br/>**tokenid:** <br/>**state:**{"port":"value"} <br/>**burn:** <br/>**split:**<br/>**debug:**true \| **false**<br/>**dryrun:**true \| **false** |Send Minima or Tokens to an address. <br/>Options to send to multiple addresses; add state variable as a JSON object; set a burn amount for the txn or split inputs to a chosen number of new coins.<br/> Debug true will provide additional logs. <br/> Dryrun true will simulate the command without executing. |
| sendpoll |  | **action:** add \| list \| remove <br/> uid:| Can be used in the same way as the `send` function. The send command is added to a list and polls every 30 seconds until complete. Useful when wanting to send many transactions that require waiting on coins to be returned |
| sign |**publickey:** <br/>**data:**  | |Sign the HEX data with the publickey |
| status | |**clean:**true \| **false** |Show general status for Minima and optionally clean RAM |
| tokencreate |**name:** <br/>**amount:** |**decimals:**8 <br/>**script:** <br/>**state:**{"port":"value",..} <br/>**signtoken:** <br/>**webvalidate:** <br/>**burn:**  |Create a custom token (coloured Minima Coins)<br/>**name** - can be a STRING or JSON Object<br/>**decimals** - specify how many decimal places the token will have (default 8, max 16)<br/>**script** - add a custom script that must return TRUE when spending the token,<br/>**state variables** - JSON object <br/>**signtoken** - provide a public key to sign the token with,<br/>**webvalidate** - provide a URL storing the tokenID for validation purposes<br/>**burn** - amount to burn in the tokencreate txn |
| tokens | |**tokenid:** |List tokens on the chain. Option to filter by token id |
| tokenvalidate |**tokenid:** | |Validate the signature and web link in a token. Web link must contain token ID. |
| trace |**enable:**true \| **false** |**filter:**STRING |Show the message stacks of the internal Minima Engine with optional filter string |
| tutorial | | |Show the complete Grammar for Minima KISSVM scripting |
| txnbasics |**id:** | |Automatically set the MMR proofs and scripts for a txn |
| txncheck |**id:** | |Show details about the transaction |
| txnclear |**id:** | |Clear ALL the Witness data |
| txncreate |**id:** | |Create a transaction |
| txndelete |**id:** | |Delete this custom transaction |
| txnexport |**id:** |**file:** |Export a transaction as HEX or to a file |
| txnimport | |**id:** <br/> **file:** <br/>**data:**  |Import a transaction as a file or HEX data. Optionally specify the txn id |
| txninput |**id:** |**coinid:** <br/>**coindata:** <br/>**floating:**true \| false <br/>**address:** <br/>**amount:**<br/>**tokenid:** <br/>**scriptmmr:true** \| false  |Add a selected coin as an input to a transaction.<br/> **coinid** - use an existing coin by referencing its coin id. <br/> **coindata** - Alternatively specify a coin using exported coin data. <br/>**floating** - true flag indicates an eltoo txn. <br/> **address** - If no coin is specified, the address (of a script), **amount** and **token ID** can be specified to create a new coin. <br/> **scriptmmr** - true flag adds script and coin proofs, default TRUE |
| txnlist | | |List current custom transactions |
| txnoutput |**id:** <br/>**amount:** <br/>**address:**  |**tokenid:** <br/>**storestate:true** \| false  |Create a transaction output. Specify txn id, output amount and recipient address. Option to specify custom token ID, default is 0x00 (Minima), store state variables flag, default TRUE |
| txnpost |**id:** |**auto:**true \| **false** <br/>**burn:**  |Post a transaction. Option to automatically set the Scripts and MMR. Optional Burn amount for the transaction |
| txnscript |**id:** <br/>**scripts:**{}  | |Add scripts to a txn. Specify txn id and JSON list of scripts with optional proof. {""script"":""proof""} with optional proof value for MAST scripts created with mmrcreate E.g. txnscript id:txnmast scripts:{""RETURN TRUE"":""""} |
| txnsign |**id:** <br/>**publickey:**0x.. \| auto  | |Sign a transaction. Specify txn id. Can use auto parameter for publickey if all coin inputs are simple, otherwise specify the correct publickey |
| txnstate |**id:** <br/>**port:** <br/>**value:**  | |Add a state variable. Specify txn id, state variable port number and state variable value. |
| txpow |**txpowid:** |**block:** <br/> **address:**Mx.. \| 0x.. |Search for a specific TxPoW. Option to specify block number or address |
| vault |**action:**seed \| lock \| unlock |**seed:** |BE CAREFUL. Show base seed, lock to wipe your private keys, unlock to restore your private keys |
| verify |**publickey:** <br/>**data:** <br/>**signature:**  | |Verify a signature with the HEX data and public key |
| webhooks | |**action:list** \| add \| remove \| clear <br/>**hook:**url  |Add a web hook URL that is called with Minima events as they happen |