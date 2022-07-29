---
sidebar_position: 1
---

# Start

Here we will go through and explain how to create some basic transactions that use custom scripts. This will show how to use the Minima commands to construct, sign and post transactions. To test scripts and play with different transactions or constructions it is recommended that you use a private chain. Then none of your funds are at risk!

First create a new folder and copy the [minima.jar](https://github.com/minima-global/Minima/raw/master/jar/minima.jar) into that folder. We will run everything from there.

From the command line cd into that folder.

To start a private chain:

```
java -jar minima.jar -data minidata1 -test -nop2p -genesis
```

These parameters mean: <br/>
`-data` : the data folder where all the files for this minima node are stored. If you want to specify a folder not in this directory you must use the complete path. If unspecified the default data directory is ~/.minima<br/>
`-test` : this uses test settings which have a faster blocktime and only keep a shorter chain in memory. If you are compiling Minima yourself you can edit these to your needs.<br/>
`-nop2p` : do not try and connect to other nodes in the p2p network<br/>
`-genesis` : delete all old data and create a new genesis block<br/>

Once you start Minima in this way you will have your own private chain, you will be sent the genesis Minima to spend, and you can enter commands directly into the console. Check your balance with ‘balance’.

If you need to quit Minima and wish to restart it without deleting old data use :
```
java -jar minima.jar -data minidata1 -test -nop2p
```

