---
sidebar_position: 7
---

# HashCash and Burn

Adam Backs’ HashCash[[9]](/docs/learn/minimawhitepaper/specialthanksto) was the first weaponized version of PoW. A Denial-of-Service (DoS) counter-measure first deployed to prevent email spam. Sending millions of emails ‘costs’ nothing – hardware, processing, bandwidth, etc. A lone computer sitting on the internet can send millions of emails in almost no time, constantly. HashCash enforced that a PoW payment was included whenever an email was sent. To a single user sending emails every few minutes, this was utterly negligible, a background process that hummed for a few seconds after you press the ‘Send’ button. But to the spam-machine sitting on the internet trying to send millions of emails, this would require millions of seconds of work, an impossible task.
        	
Negligible PoW stops DoS. Negligible PoW does not stop DDoS.

This email attack is a DoS attack because there is only one machine sending the spam. A DDoS attack, a Distributed DoS attack, is when multiple machines are used. A 50,000 strong bot-net of mobile phones, could each send a message every few seconds. A million messages is now only a few minutes of distributed work.
To prevent a distributed spam attack on layer 1 of a decentralized P2P blockchain network a small amount of PoW per message is not enough. Small amounts of PoW, to the individual users, are effectively free. Yes, they pay in power usage on their mobile phone, there is a time delay, but you do not notice it. You do not feel it. To prevent a DDoS attack we need something that is not ‘free’ to users.

On miner-centric chains, this is the fee (which serves multiple purposes). The fee must be paid for a transaction to be valid. 1 million messages now require ‘1 million fees’. The cost of the attack is now prohibitive – since the attacker must pay this, the bot-net only provides PoW. Should the attacker persist nonetheless, there is an ongoing and non-negligible cost to the attack, that cannot be sustained indefinitely.

On Minima this is the Burn (which also serves multiple purposes). A Burn, when the outputs of a transaction sum to less than the inputs, is equivalent to paying every other user a very small fee. Since ‘burning’ reduces the total number of Minima in circulation, since all coins are created at genesis, those coins that are left are more scarce and therefore more valuable. Unlike fees, the Burn has no minimum. There is no requirement for the total Burn to be large, and able to support the mining industry, that in turn secures the chain. The burn may be high during periods of heavy traffic or spam, and as it rises, traffic will decrease, and the system will self-regulate. The burn can be very low when traffic is at manageable levels as the total amount is not important, only the relative burn amounts in comparison to other transactions.

The Burn in Minima serves multiple purposes:
 
- A strong incentive to propagate and process a transaction.
- A method for ordering transactions and regulating on-chain traffic.
- A mechanism for spam prevention by making DDoS attacks expensive.
 
HashCash is totally decentralized. Each user can independently perform the required PoW, by mining their own email, and every other user can independently verify the proof. No third parties are consulted, no miners are paid. Minima is the same, but users mine transactions instead of emails.

Constructively, from the maelstrom of transactions fired across the Minima network, a single time-ordered interlocking chain of blocks emerges revealing the complete transaction history.

Minima Consensus is driven by HashCash and Burn.
