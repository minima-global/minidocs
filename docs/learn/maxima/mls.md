---
sidebar_position: 4
---
# Maxima Location Service

Your Maxima Location Service (MLS) host is a randomly selected Minima node running on a server that ensures your Contacts always have your most recent contact address to reach you.

Your MLS ensures that, although your contact address expires periodically, you will remain connected to your contacts provided you connect to the network at least once in a 24-hour period. 

![MaximaContacts](/img/maxima/MaximaContactsLM.svg#gh-light-mode-only-width50)![MaximaContacts](/img/maxima/MaximaContactsDM.svg#gh-dark-mode-only-width50)

*where C1, C2, C3 represent contacts*


When your contact address changes, your MLS host is informed and your online contacts are updated with your new address. 

For enhanced privacy, your node connects to a new MLS host every 12 hours. To ensure a smooth changeover, for 12 hours after moving to a new MLS host, your node remains connected with your previous MLS in case any of your contacts have been offline for longer than 12 hours. 

This ensures that if you remove a contact, they will not be able to re-add you after a maximum of 12 hours.

## Static MLS

A static MLS is a dedicated, single server node that manages the connection to your contacts instead of relying on random nodes on the network. It can ensure a more stable connection with your contacts.

To learn how to set a static MLS, see [setting your static MLS](/docs/userguides/usingmaxima/advancedoptions#setting-your-static-mls).


## Permanent Addresses

Permanent addresses can be configured if a non-expiring contact address is required, allowing new users to add you or message you at any time without having to provide them with your latest contact address.

To enable a permanent address for your node, see [setting up a permanent address](/docs/userguides/usingmaxima/advancedoptions#setting-up-a-permanent-address).







