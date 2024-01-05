---
sidebar_position: 4
---

# mds.js library

The MiniDapp System library mds.js provides access to an MDS object that enables useful functionality when building MiniDapps.

The latest mds.js can be downloaded from GitHub [here](https://raw.githubusercontent.com/minima-global/Minima/master/mds/mds.js)

The following functions exist on the MDS object.  

## General functions

### init

Minima Startup - with the callback function used for all Minima messages

```
init : function(callback)
```

Before being able to use the Minima API and run any commands, `MDS.init` must be run.

`MDS.init` takes one parameter, the callback function which returns a response object in JSON format.

That would look something like this:

```
MDS.init(function(event){});
```


### log

Log some data with a timestamp in a consistent manner to the console.

```
log : function(output)

```
`log` is a simple helper function that will output to the browser's console a time stamped message of your choice. This is useful for debugging.

**Example:**

```
MDS.log("this is a time stamped message");
```


### notify

Notify the User - on Phone it pops up in status bar. On desktop appears in Logs.

```
notify : function(output)
```

### notifycancel

Cancel this MiniDAPPs notification
```
notifycancel : function()
```

### cmd

Runs a function on the Minima Command Line - takes the same format as Minima

Minima Terminal commands can be executed within JavaScript functions. 

`MDS.cmd` takes two parameters, the name of the command to run and the callback function which returns a response object in JSON format.

```
MDS.cmd(minimaCommand,callback)
```

**Example:**   

```
MDS.cmd("balance", function(res){
console.log(res);
{
/**
  "command":"balance",
  "status":true,
  "response":[{
    "token":"Minima",
    "tokenid":"0x00",
    "confirmed":"0",
    "unconfirmed":"1000000000",
    "sendable":"0",
    "coins":"1",
    "total":"1000000000"
  }]
}
*/
});
```

For the full list of terminal commands, run `help` from the Minima Command Line, or see [Terminal commands](/docs/userg/terminal_commands).


### sql

Runs a SQL command on this MiniDAPPs SQL Database.

```
sql : function(command, callback)
```

An instance of a MySQL database is available for every MiniDapp.  You can create tables, insert, delete and query as you would any database using `MDS.sql`.

Under the hood is the H2 Java database engine, where you can do normal CRUD operations as you would.  There may be some minor differences between MySQL and MySQL with H2.  Read more [here](https://www.h2database.com/html/main.html).

`MDS.sql` takes two parameters, the query string and a callback function.

**Examples:**
```
MDS.sql(sqlQuery, callback);
```
```
MDS.sql("CREATE TABLE IF NOT EXISTS CUSTOMTABLE values(...)", function(res));
```
```
MDS.sql("INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...)", function(res));
```
```
MDS.sql("CREATE TABLE IF NOT EXISTS MESSAGES...", function(res));
```



### dapplink

Get a link to a different Dapp. READ dapps can only get READ DAPPS. WRITE can get all dapps.

```
dapplink : function(dappname, callback)
```

## Network functions

### net.GET

Make a GET request
```
GET : function(url, callback)
```

### net.POST

Make a POST request

```
POST : function(url, data, callback)
```

## Keypair functions

Simple GET and SET key value pairs that are saved persistently.

### get

GET a value

```
get : function(key, callback)
```

### set

SET a value

```
set : function(key, value, callback)
```

## Comms functions

Send a message to ALL minidapps or JUST your own service.js

### comms.broadcast

PUBLIC message broadcast to ALL (callback is optional)

```
broadcast : function(msg, callback)
```

### comms.solo

PRIVATE message send just to this MiniDAPP (callback is optional)

```
solo : function(msg, callback)
```


## File functions

### file.list

List file in a folder .. start at

```
list : function(folder, callback)
```

### file.save

Save text - can be text, a JSON in string format or hex encoded data

```
save : function(filename, text, callback)
```

### file.savebinary

Save Binary Data - supply as a HEX string

```
savebinary : function(filename, hexdata, callback)
```

### file.load

Load text - can be text, a JSON in string format or hex encoded data

```
load : function(filename, callback)
```

### file.loadbinary 

Load Binary data - returns the HEX data

```
loadbinary : function(filename, callback)
```
### file.delete

Delete a file

```
delete : function(filename, callback)
```

### file.getpath

Get the full path - if you want to run a command on the file / import a txn / unsigned txn etc

```
getpath : function(filename, callback)
```

### file.makedir

Make a directory

```
makedir : function(filename, callback)
```

### file.copy

Copy a file

```
copy : function(filename, newfilename, callback)
```

### file.move

Move a file

```
move : function(filename, newfilename, callback)
```

### file.download

Download a File from the InterWeb - Will be put in Downloads folder

```
download : function(url, callback)
```			

### file.copytoweb

Copy a file to your web folder

```
copytoweb : function(file, webfile, callback)
```

## Form functions

Handles form submissions. Function for GET parameters.

### form.getParams

Return the GET parameter by scraping the location. Allows you to retrieve parameters from your url.

```
getParams : function(parameterName)
```

## Utility functions

### util.hexToBase64

Convert HEX to Base 64 - removes the 0x if necessary

```
hexToBase64(hexstring)
```

### util.base64ToHex

Convert Base64 to HEX	

```
base64ToHex(str)
```

### util.base64ToArrayBuffer

Convert Base64 to a Uint8Array - useful for Blobs

```
base64ToArrayBuffer(base64)
```


### util.getStateVariable

Return a state variable given the coin

```
getStateVariable(coin,port)
```


