---
sidebar_position: 12
---

# Quantum Secure

Quantum security is not an issue right now. But it will be in the future. If you want to remove the need for protocol developers because the protocol is advanced enough to take care of itself, and should not require any Hard Forks ever (there are no Soft Forks on Minima as all users are also miners), you need to use Quantum Secure algorithms.

Minima uses the KECCAK hash algorithm for Tx-PoW mining, block and transaction hashes, proof chains, and signing or verifying data. All of the cryptographic security of Minima is provided by hash functions. The scripting language supports SHA2-256 to allow cross-chain hash lock contracts with legacy chains. The signing algorithm is the Winternitz One Time Signature scheme (WOTS). You can build hash trees of valid public keys, and process them in MiniScript, so that you can sign multiple times with the same root public key – the Merkle Signature Scheme[[13]](/docs/minimawhitepaper/specialthanksto).

Quantum security comes at a price. The signatures are at least 10-20x as big as ECDSA, used in Bitcoin. A one time use WOTS is 400-800 bytes. Minima signatures are certainly large when compared to normal Bitcoin transactions, but they are not kept forever since almost all data is eventually pruned, so although a bandwidth issue, they are only a temporary storage overhead.



