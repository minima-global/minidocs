---
sidebar_position: 10
---

# Log Messages

The logs for your node are an audit of the recent events and processes occurring on your node. 

It is useful to understand some of the most commonly shown logs for troubleshooting purposes.

Detailed logs can be turned on for scripts, mining, maxima, blocks, networking and ibd (initial blockchain download) using the `logs` command.

**Example:**

```
logs scripts:true
```

## Minima connection logs 

<details> <summary> Connected attempt success to ... </summary>


**Details:** Your node has successfully connected to another node at the specified host:port.

**Log Level:** Info

**Action required?:** No 
</details>

<details> <summary> [+] Connected to the blockchain Initial Block Download received. size:x bytes blocks:x </summary>

**Details:** Your node has received an IBD (Initial Blockchain Download) after connecting to another node. If your node is not up to date with the top block in the chain, you will receive the blocks your node is missing.

**Log Level:** Info

**Action required?:** No
</details>

## Chain logs
<details> <summary>
Your chain tip is up to date - no TxBlocks accepted - only FULL TxPoW
</summary>

**Details:** Your top block is up to date so your node does not need to accept archive blocks.

**Log Level:** Info

**Action required?:** No
</details>

<details> <summary>
Warning : Chain tip hasn't changed in 180 seconds 0x.. x
</summary>

**Details:** Your top block has not changed in 3 minutes. Top block txpowid and block number is provided.

**Log Level:** Info

**Action required?:** Maybe, although it is normal to see this message several times in a day.

**Suggested action:** Check to see if your node is showing other log messages that suggest you are not connected to the network, this could be a lot of disconnecting/could not connect messages. If so, check your internet connection and if running a node on a server, check that your firewall is not blocking connections on port 9001.


</details>

<details> <summary>
[!] No Crossover found whilst syncing with new node. They are on a different chain. Please check you are on the correct chain.. disconnecting from ...
</summary>

**Details:** No intersection of blocks was found with a new connection so either you or they are on the wrong chain. Your node will disconnect from them.

**Log Level:** Warning

**Action required?:** Maybe

**Suggested action:** Check to see if your node is showing other log messages that suggest you are on the wrong chain, e.g. CONNECTED TO HEAVIER CHAIN / failed block check / We are Too old to sync new user! / Invalid TxPoW Superparents

</details>

<details> <summary> [!] CONNECTED TO HEAVIER CHAIN.. from ... </summary>

**Details:** You connected to a node that in on a heavier chain. The client uid of the other node is provided.

**Log Level:** Warning

**Action required?:** Yes - if the message persists

**Suggested action:** If the message persists, then attempt the following steps to re-sync your chain:

1. Restart your node and allow 10-15 minutes for your node to attempt to re-sync
2. If your node is too far behind the top block, you will need to perform a chain re-sync using an archive node or archive file. This can be done from the Security MiniDapp or using one of the following commands `archive action:import file:` / `reset archivefile: action:chainsync` / `archive action:resync host:`

</details>

<details> <summary> We are Too old to sync new user! greetroot:x mytip:x </summary>

**Details:** You connected to a new node but are too far behind so cannot provide any blocks to sync the user. The `greetroot` is the user's root block of their chain, `mytip` is your top block.

**Log Level:** Warning

**Action required?:** Yes - if the message persists

**Suggested action:** If the message persists, then attempt the following steps to re-sync your chain:

1. Restart your node and allow 10-15 minutes for your node to attempt to re-sync
2. If your node is too far behind the top block, you will need to perform a chain re-sync using an archive node or archive file. This can be done from the Security MiniDapp or using one of the following commands `archive action:import file:` / `reset archivefile: action:chainsync` / `archive action:resync host:`

</details>

<details> <summary> [!] Failed block check @ x txpowid:x root:x tip:x </summary>

**Details:** Your node could not complete the block check

**Log Level:** Warning

**Action required?:** Yes - if the message persists

**Suggested action:** If the message persists, then attempt the following steps to re-sync your chain:

1. Restart your node and allow 10-15 minutes for your node to attempt to re-sync
2. If your node is too far behind the top block, you will need to perform a chain re-sync using an archive node or archive file. This can be done from the Security MiniDapp or using one of the following commands `archive action:import file:` / `reset archivefile: action:chainsync` / `archive action:resync host:`

</details>

 

<details> <summary> Invalid TxPoW Super Parents </summary>

**Details:** The TxPoW being validated does not have valid Super Parents in the cascade.

**Log Level:** Warning

**Action required?:** Yes - if the message persists, this suggests there is an error with your cascade.

**Suggested action:** If the message persists, then attempt the following steps to re-sync your chain:

1. Restart your node and allow 10-15 minutes for your node to attempt to re-sync
2. If your node is too far behind the top block, you will need to perform a chain re-sync using an archive node or archive file. This can be done from the Security MiniDapp or using one of the following commands `archive action:import file:` / `reset archivefile: action:chainsync` / `archive action:resync host:`

</details>

<details> <summary> [!] Received IBD with cascade even though we have one.. from </summary>

**Details:** You connected to a node which sent you a cascade

**Log Level:** Warning

**Action required?:** No
</details>

## Maxima logs

<details> <summary>
MAXIMA NEW connection : ...
</summary>

**Details:** You have connected to and added this node as a new Maxima Host.

**Level:** Info

**Action required?:** No

</details>

<details> <summary>
MAXIMA EXISTING connection
</summary>

**Details:** You have connected to a node which is one of your existing Maxima Hosts.

**Level:** Info

**Action required?:** No

</details>

<details> <summary>
MAXIMA Check if connected : ...
</summary>

**Details:** Before sending a message to one of your Maxima hosts, the connection is checked.

**Level:** Info

**Action required?:** No


</details>

<details> <summary> TIMED Maxima connect as no chain yet.. </summary>

**Details:** The node does not have any blocks yet so will not attempt to connect to a Maxima host. Will reattempt in 10 seconds.

**Level:** Info

**Action required?:** Maybe, if it persists.

**Suggested action:**  If the message persists, this suggests your node has no connections and has no chain. Check your internet connection and ensure your node is not running with the `-nop2p` or `-noconnect` parameter. If using a VPN, ensure the connection is not being blocked.

</details>

<details> <summary> MAXIMA disconnecting from 185.103.110.69:9001 reconnecting to random host </summary>

**Details:** A connection could not be established with the host and a new connection will be made.

**Level:** Info

**Action required?:** No

</details>



## Script logs 

<details> <summary>
Script FAIL input:x ...
</summary>

**Details:** A transaction being validated contained a coin with a script that failed to return TRUE. The input coin index and failed script is provided.

**Level:** Error

**Action required?:** No, if the transaction is not yours. Yes, if you posted the transaction.

**Action:** If the transaction is yours, 
- turn on additional logs for scripts by running `logs scripts:true` in the Terminal, then repost the same transaction to see which instruction caused the script to fail,
- ensure that the conditions specified for spending the coin in the contract have been met. The transaction will not complete and will need to be reposted.

</details>

<details> <summary>
Token Script FAIL input:x ...
</summary>

**Details:** A transaction being validated contained a custom token with a token script that failed to return TRUE. The input coin index and failed script is provided.

**Level:** Error

**Action required?:** **No** - if the transaction is not yours. **Yes** - if you posted the transaction.

**Suggested action:** If the transaction is yours, 
- turn on additional logs for scripts by running `logs scripts:true` in the Terminal, then repost the same transaction to see which instruction caused the script to fail,
- ensure that the conditions specified for spending the custom token in the contract have been met. The transaction will not complete and will need to be reposted.

</details>

<details> <summary>
Error Monotonic TxPoW failed script check from Client: ... 
</summary>

**Details:** Your node received a txpow that contained a monotonic transaction with a script that failed to return TRUE. The client uid and txpowid is provided. If a monotonic transaction fails, it will always fail as it does not depend on any varying state e.g. block time. The txpow will not be forwarded to peer nodes.

**Level:** Error

**Action required?:** No

</details>

<details> <summary>
NON-Monotonic TxPoW failed script check from Client ...
</summary>

**Details:** Your node received a txpow that contained a non-monotonic transaction with a script that failed to return TRUE. The client uid and txpowid is provided. The validity of non-monotonic transactions depends on varying conditions e.g. block time, so may pass successfully at a later point in time. The txpow will not be forwarded to peer nodes.

**Level:** Error

**Action required?:** No

</details>

