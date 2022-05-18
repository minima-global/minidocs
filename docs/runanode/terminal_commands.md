---
sidebar_position: 7
---

# Terminal Commands


The following commands can be run directly from a Minima Terminal: 

[] are required<br />
() are optional<br />
 ; can be used to chain multiple commands<br />

 ```
"status ":"(clean:true) - Show general status for Minima and clean RAM",
"printtree ":"(depth:) (cascade:true|false) - Print a tree representation of the blockchain. Depth default 32, Cascade false.",
"trace ":"[enable:true|false] (filter:) - Show the message stacks of the internal Minima Engine with optional filter string",
"automine ":"[enable:true|false|single] - Simulate traffic",
"hashtest ":"(amount:) - Check the speed of hashing of this device. Defaults to 1 million hashes",
"txpow ":"[txpowid:txpowid] - Search for a specific TxPoW",
"coins ":"(relevant:true) (sendable:true) (coinid:) (amount:) (address:) (tokenid:) - Search for coins",
"tokens ":"List all tokens on the chain",
"keys ":"(private:true|false) (import:) - Get a list of all your public keys and addresses, show private keys or import",
"newaddress ":"Create a new address or public key",
"send ":"[address:] [amount:] (tokenid:) (state:{}) - Send Minima or Tokens to an address",
"balance ":"Show your total balance of Minima and tokens",
"tokencreate ":"[name:] [amount:] (decimals:) (script:) (state:{}) - Create a token. 'name' can be a JSON Object",
"hash ":"[data:] (type:keccak|sha2|sha3)- Hash the data - default KECCAK",
"scripts ":"[action:list|clean|addscript] (script:) (track:true|false) - Create a new custom script to track or list all scripts",
"runscript ":"[script:] (clean:true|false) (state:{}) (prevstate:{}) (globals:{}) (signatures:[]) (extrascripts:{}) - Run a script with the defined parameters",
"tutorial ":"Show a tutorial for Minima scrtipting",
"mmrcreate ":"[nodes:[]] - Create an MMR Tree of data. Nodes can be STRING / HEX",
"mmrproof ":"[data:] [proof:] [root:] - Check an MMR proof",
"coinimport ":"[data:] - Import a coin, and keep tracking it",
"coinexport ":"[coinid:] - Export a coin",
"cointrack ":"[enable:true|false] [coinid:] - Track or untrack a coin",
"sign ":"[publickey:] [data:] - Sign the data with the publickey",
"verify ":"[publickey:] [data:] [signature:] - Verify a signature",
"txnlist ":"List current custom transactions",
"txncreate ":"[id:] - Create a transaction",
"txndelete ":"[id:] - Delete this custom transaction",
"txncheck ":"[id:] - Show details about the transaction",
"txninput ":"[id:] [coinid:] (floating:true|false) - Add a coin as an input to a transaction",
"txnoutput ":"[id:] [amount:] [address:] (tokenid:) (storestate:) (floating:true|false) - Create a transaction output",
"txnstate ":"[id:] [port:] [value:] (keeper:) - Add a state variable",
"txnscript ":"[id:] [scripts:{}] - Add scripts to a txn",
"txnsign ":"[id:] [publickey:0x..|auto] - Sign a transaction",
"txnclear ":"[id:] - Clear the Witness data",
"txnpost ":"[id:] - Post a transaction",
"txnimport ":"[file:] (id:) - Import a transaction. Optionally specify the ID",
"txnexport ":"[id:] [file:] - Export a transaction to a file",
"network ":"Show network status",
"maxima ":"[action:info|send|sethost] (to:) (application:) (data:) (logs:true|false) - Check your Maxima details, send a message / data, enable logs",
"message ":"(uid:uid) [data:message] - Send a message over the network to one of your direct peers",
"connect ":"[host:ip:port] - Connect to a network Minima instance",
"disconnect ":"[uid:uid] - Disconnect from a connected or connecting host",
"rpc ":"[enable:true|false] - Enable and disable RPC on port 9002 (default is off)",
"webhooks ":"(action:list|add|remove|clear) (hook:url) - Add a web hook that is called with Minima events as they happen",
"sshtunnel ":"[enable:true|false] (user: password: host: remoteport:) - Create an SSH Tunnel for Minima to have an external IP",
"backup ":"(file:) - Backup the entire system. Uses a timestamped name by default",
"restore ":"[file:] - Restore the entire system.",
"incentivecash ":"(uid:) - Show your rewards or specify your UserID for the Incentive Cash program",
"quit ":"Shutdown Minima"
```