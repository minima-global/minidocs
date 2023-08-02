---
sidebar_position: 5
---

# Events

Minima Events can be listened for, so that users can be notified when specific on-chain events occur.

The following events exist:

`inited`: MDS has been initialised.

`NEWBALANCE`: The balance of the node has changed. 

`NEWBLOCK`: The chain tip has changed (i.e. a new block has been added to the chain). JSON data returned: The TxPoW object of the last block is returned as a JSON Object.

`MINING`: Mining has started or ended. 
JSON data returned: The TxPoW Object, true (if started)/false (if ended).

`MINIMALOG`: A new log message is available

`MAXIMA` : A Maxima message has been received.

`MDS_TIMER_1HOUR` : A one hour timer.

`MDS_TIMER_10SECONDS` : A 10 second timer.

`MDS_SHUTDOWN` : A message which is sent when the MiniDapp system is about to be shutdown. Shuts down 2 seconds after the message is posted.



**Example:**

```
MDS.init(function(msg) {

// inited means Minima API is ready to be used
Switch(msg.event)
case: "inited":

// do Minima dependent initializations

break;
case "newblock":
console.log(msg);
// newblock message data

break;
case:"mining":
// mining messages
console.log(msg);
// mining message data

break;
case:"newbalance":
console.log(msg);
// newbalance msg data

...
            }
```

