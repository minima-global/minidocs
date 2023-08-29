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
    console.log(msg);
    // inited means Minima API is ready to be used
    switch(msg.event) {
      case "inited":
        // do Minima dependent initializations
        break;
      case "NEWBLOCK":
        // new block message event
        console.log(msg);
        // new block message data
        console.log(msg.data);
        break;
      case "MINING":
        // mining message event
        console.log(msg);
        // mining message data
        console.log(msg.data);
        break;
      case "NEWBALANCE":
        // new balance message event
        console.log(msg);
        // there is no data for a new balance event, but you can
        // call MDS.cmd('balance') to retrieve the balance changes
        MDS.cmd('balance', function (msg) {
          console.log(msg.response);
        });
    }
});
```

