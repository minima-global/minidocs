---
sidebar_position: 7
---

# Troubleshooting

You will find some of our most commonly asked questions and issues below. <br/>
If you are unable to resolve your issue, please reach out in our [Discord](https://discord.gg/ZQaUXPape5) or [Telegram](https://t.me/Minima_Global) channel and a Team member will be happy to help. 

## Minima Terminal Log Messages

The following log messages are for developer information purposes only and **do not indicate anything wrong with your node.**
**There is no need to open a support ticket for any of the following messages:**

**[-] WARNING : Failed to set my ip. Secrets do not match - could be a delay.**<br/>
The initial IP request returned after another request was sent. 

**[-] Too many outgoing connections, disconnecting**<br/>
The number of outward connections of a node is greater than the maximum peer-to-peer connections allowed, resulting in a disconnection. This is normal behaviour as your node connects and disconnects from other peers in the network.

**[!] No Crossover found whilst syncing with new node. They are on a different chain. Please check you are on the correct chain.. disconnecting from** <br/>
You are connected to a peer that is on a different chain to you. 
Restart your node by navigating to the terminal and typing **quit**. This will force Minima to resync to the network in case you are on a different chain. 

**INFO : No recent message (5 mins)**<br/>
Your node has not received any messages in 5 minutes from a connected peer. Your node will attempt to disconnect and reconnect to the peer.

**No Archive blocks found to match New User..**<br/>
A new peer connected to your node and your node was unable to find any blocks required to sync the new user to the blockchain.

**Warning : Attempting to connect to already connected host** <br/>
A connection already exists between your node and another peer.

**INFO: 7MNPC9FSACLN5 connection failed - no more reconnect attempts**<br/>
Your node has tried connecting to the same peer more than the maximum number of reconnect attempts and will no longer attempt to connect.

**Error null client on Greeting NIOMessage..** <br/>
You received a greeting message from a peer who has a null client UID. The peer likely dropped off the network.

**Warning : Chain tip hasn't changed in 180 seconds** <br/>
Your node has not updated its chain in 180 seconds.

**Invalid TxPoW block with millitime LESS than median** <br/>
Your node received a block from a peer with a timestamp less than the calculated median time.The TxPoW will be ignored. 

**Invalid TxPoW block with millitime MORE than median + 2 hrs** <br/>
Your node received a block from a peer with a timestamp more than 2 hours ahead of the calculated median time. The TxPoW will be ignored.

<br/>

The following log messages may indicate a problem with your node, please open a support ticket in our Discord server:

**[-] WARNING : No Known peers ( -clean + delay )** <br/>
Repeated messages indicates that there is some problem with your node’s ability to connect to peers.


## Incentive Rewards

### My verification or reset email has not yet arrived
Apologies, our email provider is experiencing some technical difficulties which are causing some outbound emails to be delayed. We are working with them to resolve this—if you have not had your email within 3 hours please open a ticket in the support channel in our Discord server. 

### When I try to register I see 'Registration Error'

Does your telephone Country Code start with +38? If so, please type 380 in the Country Code field and remove the initial 0 from the Phone Number field. This will solve your issue.

Additionally, check to see if a verification email has arrived - if you have double-clicked then you may receive this error.

### Red Incentive ID Light (Android)
If the Incentive ID light on your mobile device is red, it is likely you have not entered your Incentive ID, or you have entered it incorrectly, please follow the troubleshooting steps provided in the app. <br/>
Incentive IDs should be copied and pasted into the box in the Incentive Program page or through the Terminal. Incentive IDs have the format *xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx* and there should be no additional characters or spaces at the beginning or end. <br/>
If none of the steps resolve the issue, please open a ticket in the support channel in our Discord server. 

### Missed Daily Incentive Rewards
Provided your node is online, your node will ping us every 8 hours. Provided we receive a ping from your node once a day, you will receive a daily Reward. <br/>
It is your responsibility to ensure that your node (and the nodes of those people you invite) is online as much as possible. If you miss rewards due to your node being offline, there is nothing we can do to compensate you. <br/>
If you believe your node has been online constantly and that you have still missed rewards, please open a ticket in the support channel in our Discord server so we can investigate.

### Missed Invite Rewards
Provided your node and your invitee’s node is online, you will receive a daily Reward for each individual who joins the Incentive Program with your invite code (0.1 per invite per day). 
Your invitee must have used your code when they signed up to the Incentive Program. <br/>
It is your responsibility to ensure that your node (and the nodes of those people you invite) is online as much as possible. If you miss rewards due to your node or your invitee’s node being offline, there is nothing we can do to compensate you. <br/>
If you believe your node has been online constantly and that you have still missed rewards, please open a ticket in the support channel in our Discord server so we can investigate.

## General

### Red Node Status Light (Android)
If the Node Status light on your mobile device is red, please follow the steps provided in the app. If none of the steps resolve the issue, please open a ticket in the support channel in our Discord server. 

### Battery Drain
Minima requires access to run as a background service to continuously validate and construct the blockchain. Minima has been designed to run with minimal impact as possible on a device’s battery, however some battery usage is required to contribute Proof-of-Work to the chain. During testnet we are constantly monitoring battery usage on different devices and optimising performance. If you experience severe or unacceptable battery drain, please open a ticket in the support channel in our Discord server. 

For further assistance, you can contact a Team member in Discord or Telegram community channels

- [Discord](https://discord.gg/ZQaUXPape5)
- [Telegram](https://t.me/Minima_Global) 







