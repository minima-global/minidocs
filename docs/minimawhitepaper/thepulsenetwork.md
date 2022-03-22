---
sidebar_position: 5
---

# The Pulse Network

Both Minima and Maxima require users to perform a small amount of PoW when sending messages. The more messages, the more PoW. The more PoW, the more secure the network. But what if a user is not sending any messages? Can that user also help to secure the network? What if sending a message is time-critical, and there must be no delay before sending it – say a high-frequency trader? Maxima addresses both these concerns by repurposing existing technology, allowing users to do the work beforehand, and then present that work as proof when sending messages.

Most network protocols have a PING message. This is a message network peers periodically send to check the health and status of their peers. Network nodes send a PING message and peers reply, to show they are functioning correctly. But in a crypto network like Minima far more information on the health and status of a node can be transmitted in a PING message. Add some PoW to a PING message, and you create a Pulse.

Every 10 minutes every Minima user creates a valid Tx-PoW message, with its current correct block details, but leaves the transaction blank. Performs 10 seconds of work. Then sends this message to each of its peers. If the message is not a valid Tx-PoW message, the peer is kicked off the network. If a peer does not send a Pulse message every 10 minutes, the peer is kicked off the network. If the Tx-PoW message is also a block, on average 1 Tx-PoW message every 50 seconds, that is then forwarded on to the rest of the network

This has many benefits :
 
- Shares the peers’ current mempool - the list of transactions it knows about not in the current longest chain. Any discrepancies can be resolved and missing transactions passed on. Peer data synchronisation.
- Shows the peer is a functioning Minima node, has a working network connection, is a valid router for network messages and can help secure the network.
- Adds to the overall PoW security of the network.
- This is all off-chain. Only the immediate peers check the Pulse message and only a block is forwarded on to the rest of the network.
 
As the requirements to send a Pulse message are so small, should a peer not be able to send a Pulse message, there must be something wrong, so there is no point wasting resources. When they fix themselves, they can come back online, and rejoin the network. Those thinking they will not pay the PoW, will just be kicked off the network.
        	
Minima has a Pulse. No zombies allowed (nodes with no Pulse).

