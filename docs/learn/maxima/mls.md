---
sidebar_position: 4
---
# Maxima Location Service

Your Maxima Location Service (MLS) is a randomly selected server-based node that ensures your Contacts always have your most recent Contact Address. Your contacts periodically request your current Maxima contact address from your MLS, allowing them to always reach you. 

When your Contact Address changes, your MLS host is updated and your online Contacts are informed of your new MLS and current Contact Address, ensuring you always remain connected. 

For enhanced privacy, your node connects to a new MLS host every 12 hours. To ensure a smooth changeover, for 12 hours after moving to a new MLS host, your node continues to share your latest Contact Address with your previous MLS as well, in case any of your Contacts have been offline for longer than 12 hours.  

This ensures that if you remove a contact, they will not be able to use the MLS they hold for you for much longer, to request your contact address.

The outcome is that, provided you and your Contact are online at least once in a 24-hour period, you will be able to communicate with eachother over Maxima. 


## Static MLS

You may wish to become your own MLS or use another unchanging MLS to ensure a more stable with your contacts.

You can set up your own MLS by running another Minima node on a server that is open on the main Minima port (default port 9001).

By running your own MLS, your online Contacts will always remain connected to you via your server node, instead of using a randomly selected server node that could go offline and changes every 12 hours.

To set your own static MLS host, from your server-based Minima node, find its `P2P identity` using the `maxima` command via the Minima Terminal. 

**Server node - example output:**
```
maxima
{
  "command":"maxima",
  "status":true,
  "pending":false,
  "response":{
    "logs":true,
    "name":"mlsnode",
    "publickey":"0x30819F300D06092A864886F70D010101050003818D00308189028181009570D2AB5CB494803D700ECA81D183140B3C3D255558864917592B40FD48BBE9F583FCBCF1E45DD353DCC74044F6013C86092AF453797003CECEDCFF3CB1690111F8C49B1C80CF994C0C8E1E78C1F45E67B4C4544A13BAC03F45F4B2004B6FB6E694583CC3BBDC38C2CC2518E054D7D810F84E0E59F233CECF21AFBDCFBA0A110203010001",
    "staticmls":false,
    "mls":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G1JG4Q2698U35U5QFQZUYM1QF5R9RC1ZHQKF0D5Z1UCAEVNE862R2B1FCN5N1E27AHNBEMZUWWCY986UF25DNNVZ4N8PHBV76W52BDFCDKBYAPYDAVN3E49RDTQ4JFFSJHKHZQ5F33Q32N5WRCHSCDTGCQ24ZNQQAM8QYW9B7TDMC7R37BD4UTNU04YT9PTYVQ99YJF1SPATJWS10608005NVBJB9@94.131.105.228:9001",
    "localidentity":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@172.21.144.1:7001",
    "p2pidentity":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001",
    "contact":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G19DCGVJUKP4Y93Z8NBZE5YAVMTHBZHQ4E4JR04P3J4QJHYWNVFEP5Y1TU7DAJ7WK54KFEHCKNAAZPAV5GAW1GN85JGZHDQCNTE07QZJ43KAY01Y7DHHSG57VBE9NYS4QKTJ2BHS6GUA1AWNT6PZC3VFZV49NGCA48800C49T8TD7J03FASUM3H13QHA7VSFRKA3D0T2RWU9H34106080075P6AZ4@194.163.178.243:9001",
    "poll":0
  }
}
```

On the node that you wish to use to communicate with your Contacts, set your static MLS using: 
```
maxextra action:staticmls host:INSERTP2PIDENTITY
```

**Phone/Desktop/Server node requiring a static mls - example output:**

```
maxextra action:staticmls host:MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001
{
  "command":"maxextra",
  "params":{
    "action":"staticmls",
    "host":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001"
  },
  "status":true,
  "pending":false,
  "response":{
    "staticmls":true,
    "mls":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001"
  }
}
```

:::note
This will not prevent your Contact Address from changing, it only ensures that your Contacts can always rely on your static MLS to provide your latest Contact Address.
::: 

To subsequently stop using a static mls and return to using a random host, use

```
maxextra action:staticmls host:clear
```

## Permanent Addresses

For certain use cases, where it's necessary to be **publicly contactable by someone who is not a Contact**, it's possible to create a **permanent address** for your node by adding your Maxima Public Key to your static MLS node. 

Once configured, sharing a permanent address publicly enables any user to always be able to find the current Contact Address of your node, so they will always be able to contact you. 

To enable a permanent address for your node, you must set your static MLS node to accept requests for *anyone* (not just contacts) to get your current Contact Address by setting the Maxima Public Key of your node as "permanent" on your static MLS node. 

### Setting up a Permanent Address:

**On the node you wish to use for communication** which you have already configured to use a static MLS, find your Maxima Public Key using the `maxima` command from your Terminal MiniDapp.

Example output:

```
maxima
{
  "command":"maxima",
  "status":true,
  "pending":false,
  "response":{
    "logs":false,
    "name":"yourname",
    "publickey":"0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001",
    "staticmls":true,
    "mls":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001"
    "localidentity":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G13YGKSTHJVZ77NAUBFHV1KPS0MHUZNSCFZQB3V2GN9AKFP12CB9SST1FY5DCN2FMM6MS5PB5RA6WQUM7UGQ9RMH1Q8ECU0YJAA6V271GR1HH7B84J1RT81W2QBWMWJSHRV0A2YVK91MYM6JQVAYSZF22P5U8SJSGTJTEZTS39V19B3KTQHVW9SR4J1T1BW1P6ZBF9K82QGQTBS10608004J5DQZ0@172.29.224.0:9001",
    "p2pidentity":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G13YGKSTHJVZ77NAUBFHV1KPS0MHUZNSCFZQB3V2GN9AKFP12CB9SST1FY5DCN2FMM6MS5PB5RA6WQUM7UGQ9RMH1Q8ECU0YJAA6V271GR1HH7B84J1RT81W2QBWMWJSHRV0A2YVK91MYM6JQVAYSZF22P5U8SJSGTJTEZTS39V19B3KTQHVW9SR4J1T1BW1P6ZBF9K82QGQTBS10608004J5DQZ0@165.0.49.73:9001",
    "contact":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G1FSDCR470HWPNA11N8DN9W2B15VYTRQS6WATHZ975GT1CVPMGDM439HHRUCMBRF3DJASTD8NPVW5EYV26HCGC2EB3N6JNPZF8QM4Q6Q393M049YQ0YB9CSE04Q4JCASWHQA54MMWWD8QARMUJGE1FAHKPF7CF7E87F0QCAU9PBVHT37AEB3MPAW9BGY6672NW12SHMVCS05JGK10608007RWBNFH@91.107.240.131:9001",
    "poll":0
  }
}
```

Copy your Public Key, then **on the static MLS node** enter the command:

```
maxextra action:addpermanent publickey:INSERTPUBKEY
```

Example:

```
maxextra action:addpermanent publickey:0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001
{
  "command":"maxextra",
  "params":{
    "action":"addpermanent",
    "publickey":"0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001"
  },
  "status":true,
  "pending":false,
  "response":"Added Permanent Maxima ID : 0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001"
}
```

Now the node you are using for communication will be have a Permanent Address in the format 

**MAX#**yourPubKey**#**staticMLSAddress

Example Permanent Address:
```
MAX#0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001#MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001
```

This Permanent Address can now be shared with others, for example on a public site.

Anyone wishing to contact you over Maxima can get your current Contact Address using: 

```
maxextra action:getaddress maxaddress:MAX#yourPubKey#staticMLSAddress
```

Example

```
maxextra action:getaddress maxaddress:MAX#0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001#MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001
```

The `address` from the returned output is the current contact address of your node that they can use send you a message using: 

```
maxima action:send application:none message:0xff contact:INSERTADDRESS
```

:::note Preventing unauthorized contacts
Having a Permanent Address means anyone else on the network can add you as a Contact without your consent. See [Disabling Contacts](#disabling-contacts) to learn how to disable contacts. 
:::

:::note Limiting contacts
Maintaining connectivity with each contact involves providing Tx-PoW to help secure the blockchain, therefore the number of Contacts added to a node cannot be unlimited. **The more contacts your node has, the higher the computational overhead to maintain them.**
:::

### Disabling contacts

To prevent anyone from adding you as a Contact when using a Permanent Address, **from the node you are using for communication,** enter the following in your Terminal MiniDapp:

```
maxextra action:allowallcontacts enable:false
```

This will allow anyone to find your current Contact address using your Permanent address and will allow them to send messages to your node, but will reject any requests to add you as a Contact. 

### Whitelisting contacts

Specific nodes can be whitelisted by allowing the Maxima Public Key of the node you wish to be contacts with.

Once allowed, this node will be authorized to add you as a contact and, vice versa, you may add this node as a contact provided they have not disabled contacts.

```
maxextra action:addallowed publickey:INSERTPUBLICKEY
```

## Additional Help
For additional help, please use the help command from the Terminal:

```
help command:maxextra
```






