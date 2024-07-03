---
sidebar_position: 8
---

# Background service

## Overview

`service.js` is the background service script for MiniDapps running on a Minima node. 

It acts as the backend engine that handles various operations and tasks, even when the MiniDapp user interface is closed. The `mds.js` library provides the necessary functions and APIs that service.js uses to interact with Minima.

Using service.js and mds.js you can, for example, load other necessary JavaScript files, handle and respond to Minima events from the node and interact with the MiniDapp's SQL database.

## Initialisation

MDS must be initialized to start receiving Minima events. Use `MDS.init` with a callback function to handle incoming messages. Note that service.js runs synchronously.

#### Example

```javascript
MDS.init(function(msg) {
    // Handle different events
    if (msg.event === "inited") {
        MDS.log("MDS has been initialised.");
    } else if (msg.event === "NEWBALANCE") {
        MDS.log("New balance: " + JSON.stringify(msg.data));
    } // Add other event handlers as needed
});
```

## Loading Scripts

To load additional JavaScript files within `service.js`, use the `MDS.load` function. This ensures that all necessary dependencies are available before executing any operations that depend on them.

#### Example

```javascript
// Load required files
MDS.load('./js/jslib.js');
MDS.load('./js/sql.js');
```

## Handling Events

`service.js` can handle various events triggered by Minima. These include on-chain, Maxima and periodic events.

#### Available Events

- **inited**: MDS has been initialised.
- **NEWBALANCE**: The balance of the node has changed.
- **NEWBLOCK**: A new block has been added to the chain.
- **MINING**: Mining has started or ended.
- **MINIMALOG**: A new log message is available.
- **MAXIMA**: A Maxima message has been received.
- **MDS_TIMER_1HOUR**: A one-hour timer.
- **MDS_TIMER_10SECONDS**: A 10-second timer.
- **MDS_SHUTDOWN**: The MiniDapp system is about to be shut down.

For the full list of events, see the [Events](/docs/buildonminima/dapps/events) page.

#### Example

```javascript
MDS.init(function(msg) {
    switch (msg.event) {
        case "inited":
            MDS.log("MDS has been initialised.");
            break;
        case "NEWBALANCE":
            MDS.log("New balance: " + JSON.stringify(msg.data));
            break;
        case "NEWBLOCK":
            MDS.log("New block: " + JSON.stringify(msg.data));
            break;
        case "MINING":
            MDS.log("Mining status: " + JSON.stringify(msg.data));
            break;
        case "MINIMALOG":
            MDS.log("Log message: " + JSON.stringify(msg.data));
            break;
        case "MAXIMA":
            MDS.log("Maxima message: " + JSON.stringify(msg.data));
            break;
        case "MDS_TIMER_1HOUR":
            MDS.log("One-hour timer event.");
            break;
        case "MDS_TIMER_10SECONDS":
            MDS.log("10-second timer event.");
            break;
        case "MDS_SHUTDOWN":
            MDS.log("System shutdown message received.");
            break;
    }
});
```

## Using the MDS API

### Command Line Commands

Run Minima commands using `MDS.cmd`.

```javascript
MDS.cmd("status", function(response) {
    MDS.log("Minima status: " + JSON.stringify(response));
});
```

### SQL Commands

Run SQL commands on the MiniDAPP's SQL Database using `MDS.sql`.

```javascript
MDS.sql("SELECT * FROM mytable", function(response) {
    MDS.log("SQL response: " + JSON.stringify(response));
});
```

### Notifications

Send notifications to the user with `MDS.notify` and cancel them with `MDS.notifycancel`.

```javascript
MDS.notify("This is a notification message.");
MDS.notifycancel();
```

### File Operations

Perform file operations like saving, loading, and deleting files using `MDS.file`.

```javascript
// Save text to a file
MDS.file.save("example.txt", "Hello, Minima!", function(response) {
    MDS.log("File save response: " + JSON.stringify(response));
});

// Load text from a file
MDS.file.load("example.txt", function(response) {
    MDS.log("File load response: " + JSON.stringify(response));
});

// Delete a file
MDS.file.delete("example.txt", function(response) {
    MDS.log("File delete response: " + JSON.stringify(response));
});
```

### Network Operations

Make HTTP GET and POST requests using `MDS.net`.

```javascript
// Make a GET request
MDS.net.GET("https://api.example.com/data", function(response) {
    MDS.log("GET response: " + JSON.stringify(response));
});

// Make a POST request
MDS.net.POST("https://api.example.com/data", "key=value", function(response) {
    MDS.log("POST response: " + JSON.stringify(response));
});
```

### Key-Value Store

Store and retrieve key-value pairs using `MDS.keypair`.

```javascript
// Set a key-value pair
MDS.keypair.set("mykey", "myvalue", function(response) {
    MDS.log("Key set response: " + JSON.stringify(response));
});

// Get a value by key
MDS.keypair.get("mykey", function(response) {
    MDS.log("Key get response: " + JSON.stringify(response));
});
```

### Communication

Send messages to other MiniDAPPs or the same service using `MDS.comms`.

```javascript
// Broadcast a message to all MiniDAPPs
MDS.comms.broadcast("This is a broadcast message.", function(response) {
    MDS.log("Broadcast response: " + JSON.stringify(response));
});

// Send a private message to the same MiniDAPP
MDS.comms.solo("This is a private message.", function(response) {
    MDS.log("Solo message response: " + JSON.stringify(response));
});
```

### Utility Functions

#### Form Parameters

Retrieve GET parameters from the URL.

```javascript
const uid = MDS.form.getParams("uid");
MDS.log("UID: " + uid);
```

#### Hex and Base64 Conversion

Convert between hex and base64 encoding.

```javascript
const base64 = MDS.util.hexToBase64("48656c6c6f");
MDS.log("Base64: " + base64);

const hex = MDS.util.base64ToHex("SGVsbG8=");
MDS.log("Hex: " + hex);
```

#### State Variables

Retrieve a state variable given the coin and port.

```javascript
const stateData = MDS.util.getStateVariable(coin, port);
MDS.log("State data: " + stateData);
```


## Synchronous Nature of `service.js`

`service.js` is synchronous, meaning that tasks and functions in `service.js` are executed one after the other, in sequence. Each task must complete before the next one begins. 

However, some tasks will take time to complete, like fetching data from a server, reading a file, or performing complex calculations. If `service.js` had to wait for each of these tasks to finish before moving on to the next one, it could slow down significantly.

### Asynchronous Functions and Callbacks

To handle tasks that take time without blocking the rest of the code, you can use asynchronous functions. These functions allow `service.js` to start a task and then move on to other tasks while waiting for the first one to complete. When the task finishes, a callback function is used to handle the result.

A callback is a function that you pass into another function as an argument, which is then executed when the task completes. This way, `service.js` can continue running other code while waiting for long-running tasks to finish.

#### Callback Example:

```javascript
// Example of synchronous code (blocking)
MDS.sql("SELECT * FROM mytable", function(response) {
    MDS.log("SQL response: " + JSON.stringify(response));
    MDS.notify("Data fetched");
});
MDS.log("This log appears after the SQL command completes."); // This will run after the SQL command completes

// Example of asynchronous code (non-blocking)
MDS.file.load("example.txt", function(response) {
    MDS.log("File load response: " + JSON.stringify(response));
    // This callback runs when the file load is complete
});
MDS.log("This log appears immediately, not waiting for the file load."); // This runs immediately
```


#### Why Use Callbacks?

1. **Efficiency**: `service.js` can handle multiple tasks simultaneously, improving performance.
2. **Responsiveness**: The application remains responsive, especially when dealing with tasks that take time, like network requests or file operations.
3. **Scalability**: Easier to manage complex workflows without blocking other tasks.



## Basic Example of service.js

Below is a basic example of a `service.js` file that performs various operations and logs events using `MDS.log`.

```javascript

// Load required scripts
MDS.load('dapplib.js');

// Are we logging data
var logs = false;

// Main message handler
MDS.init(function(msg) {
    if (msg.event == "inited") {
        // initialise the database
        createDB(function(msg) {
            MDS.log("SQL DB inited");
        });

        // Get Maxima user details
        MDS.cmd("maxima", function(msg) {
            var publicKey = msg.response.publickey;
            var username = msg.response.name;
            MDS.log("Maxima user details: " + publicKey + " - " + username);
        });
    }

    if (msg.event == "MDS_TIMER_1HOUR") {
        // Perform hourly tasks
        performHourlyTasks();
    }

    if (msg.event == "MAXIMA") {
        // Handle Maxima messages
        handleMaximaMessage(msg.data);
    }
});

function createDB(callback) {
    MDS.sql("CREATE TABLE IF NOT EXISTS 'tablename' (id bigint auto_increment, block varchar(256) NOT NULL, hash varchar(256) NOT NULL, timestamp TIMESTAMP NOT NULL)", function(response) {
        callback(response);
    });
}

function performHourlyTasks() {
    MDS.log("Performing hourly tasks...");
    // Add hourly tasks logic here
}

function handleMaximaMessage(data) {
    MDS.log("Handling Maxima message: " + JSON.stringify(data));
    // Add Maxima message handling logic here
}
```