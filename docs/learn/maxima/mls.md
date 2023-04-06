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
    "name":"yourname",
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




