---
sidebar_position: 10
---

# Storage-less MMR UTXO

In the old world, every user kept track of every account in a big book (or database). Every user had a copy of this book. Whenever a user wanted to send a transaction, every user checked the transaction was valid, by checking the inputs were valid in the big book and updating the books’ pages as necessary. The more transactions, the bigger the book.

In the new world, each user has a specific page in the book, with all their account details. That page is ripped out of the book and given to that user. Each user rips out their own page. Every user only keeps their own page and the spine of the whole book. Whenever a user wants to send a transaction, they add a copy of their page, which verifiably fits the spine, so that users can check if the transaction is valid, update the page, and update the spine ready for the next transaction. Now users only store their own transactions, and a cryptographic spine no thicker than a single page. Orders of magnitude less data.

Minima does not have a database (or big book) that stores all the Unspent Transaction Outputs, instead, utilising Peter Todds’ MMR[[4]](/docs/learn/minimawhitepaper/specialthanksto) storage-less Proof DB. It allows for an almost limitless amount of provable data to be added and updated in a particular hash tree. It’s a little bit like a SQL database with INSERT and UPDATE, but no SELECT or DELETE. The trick is that if you have data in the database, and are listening to all the additions and updates, you can always prove what data you know, your version of SELECT. Data proves it exists with a Merkle proof to the root of the MMR hash tree.  

Each user keeps track of their own coins, rather than miners or even all users keeping track of all the coins. This is an infinitesimally small amount of data in comparison to an entire blockchain. But - each user must stay up to date with the blockchain. By doing so they can keep track of the Merkle proofs required to prove their coins not only exist but are unspent. This proof changes with every addition or update to the MMR. Should a user not keep track of his coins, they would not be lost, but he would need a third party to help recover them. He would need to find either an archive node that stores everything – for the purposes of selling the data in this exact scenario, or have previously set up a friend or chat group to keep track of extra coins (coin-proofs pose no security issues), and have them rediscover the individual MMR proofs for their coins.

Minima goes MMR real-time. Each block commits to the current MMR state for that block. Each user sends his transactions with a recent MMR proof, to prove the transaction is valid. Users can check these details with their latest MMR database, and update as necessary when a block is accepted. This process will need to be made very fast. The MMR database stores multiple overlapping MMR states, one for each block, and it needs to be able to prune and un-prune MMR data and derive proofs quickly for multiple changing states. Fun.


