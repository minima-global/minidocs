---
sidebar_position: 11
---

# Configuration

## Base Types

Minima uses the following custom Base types:

| Type | Description | Size (bytes) |
| :---------- | :--------- | :---------- |
| MiniByte | Integer, Byte or Boolean | 1 |
| MiniData | A Hex or Base 32 hash | 4 bytes (length) + Data length in bytes (Max 256MB) |
| MiniNumber | A decimal number with maximum 20 digits in front of the decimal and 44 digits after | 1 byte (scale) + 1 byte (data length) + Data length in bytes |
| MiniString | UTF-8 String | MiniData representation of a UTF-8 string |

## General Parameters

| Parameter | Type | Default Value | Description |
| :-------- | :--- | :------------ | :----------- |
| IS_MOBILE | boolean | FALSE | Is this node running on mobile? Mainly for metrics |
| IS_ACCEPTING_IN_LINKS | boolean | TRUE | Can the node accept incoming connections? |
| PRIVATE_NETWORK | boolean | FALSE | Is this a private network? If TRUE, don't connect to any users. |
| AUTOMINE | boolean | FALSE | Are we automining a TxPoW every block? |
| GENESIS | boolean | FALSE | Are we creating the genesis block? |
| CLEAN | boolean | FALSE | Are we wiping previous data? |
| DATA_FOLDER | string | userhome\.minima | Where the database files are stored. This is set at startup. |
| MINIMA_HOST | string | 127.0.0.1 | The Host IP |
| IS_HOST_SET | boolean | FALSE | Is the HOST set from command line? |
| MINIMA_PORT | int | 9001 | The main Minima port |
| RPC_PORT | int | 9005 | The Minima RPC port | 
| TEST_PARAMS | boolean | FALSE | Test Params or Main Params | 
| P2P_ENABLED | boolean | TRUE | Is the P2P System Enabled? | 
| P2P_ROOTNODE | string | | Host and IP of the first P2P node | 
| CONNECT_LIST | string | | Manual list of Minima nodes to connect to | 
| NUMBER_DAYS_SQLTXPOWDB | long | 3 | How many days to keep the TxPoW in the SQL DB |
| NUMBER_HOURS_RAMTXPOWDB | long | 1 | How many hours to keep the TxPOW in the RAM mempool |
| NUMBER_DAYS_ARCHIVE | long | 90 | How many days do you archive the TxBlocks to resync users |
| USER_PULSE_FREQ | long | 100&#42;60&#42;10 | Number of seconds before sending a pulse message - every 10 minutes |

## Global Parameters

| Parameter | Type | Default Value | Description |
| :-------- | :--- | :------------ | :----------- |
| MINIMA_VERSION | string | | The client version of Minima |
| MINIMA_BLOCK_SPEED | MiniNumber | 0.02 | Speed in blocks per second 0.02 = 50 second block time
| MINIMA_BLOCKS_SPEED_CALC | MiniNumber | 256 | The number of blocks back to consider when checking speed and difficulty | 
| MINIMA_CONFIRM_DEPTH | MiniNumber | 3 | The number of blocks deep before a block is considered confirmed |
| MINIMA_CASCADE_FREQUENCY | MiniNumber | 100 | How often (in blocks) the chain is Cascaded |
| MINIMA_CASCADE_START_DEPTH | MiniNumber | 1024 | Depth of heaviest chain before we cascade |
| MINIMA_CASCADE_LEVEL_NODES | int | 128 | Number of blocks at each cascade level |
| MINIMA_CASCADE_LEVELS | int | 32 | The number of Cascade levels | 
| MINIMA_MMR_PROOF_HISTORY | MiniNumber | 256 | Max Proof History - how far back to use a proof of coin. If there is a re-organization of more than this the proof will be invalid. | 
| MEDIAN_BLOCK_CALC | int | 32 | The MEDIAN time block is taken from this many blocks back. When calculating the Difficulty of a block (both from the tip and the previous block). This smooths out the time fluctuations for different blocks and removes incorrect times. |










