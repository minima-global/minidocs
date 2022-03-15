---
sidebar_position: 6
---

# Quantum Security

If Minima is truly expected to stand the test of time, it must be Quantum secure from the beginning. Once scaled to millions of nodes, each being complete - constructing and validating - nodes, the consensus critical components of the protocol must be finished, requiring no future changes.
Minima’s approach to Quantum security is two-fold:
## Hashing
Minima uses the **Keccak hash algorithm** with a hash strength of 256, considered to be post-quantum sufficient by the National Institute of Standards and Technology (NIST) see: https://csrc.nist.gov/csrc/media/projects/hash-functions/documents/keccak-slides-at-nist.pdf

Keccak is used for TxPoW mining, block and transaction hashes, proof chains, and signing or verifying data. All of the cryptographic security of Minima is provided by hash functions.

## Signatures
Minima uses Winternitz One Time Signature (WOTS) with a Winternitz parameter of 8. WOTS is a hash based digital signature scheme which is considered quantum resistant. https://eprint.iacr.org/2011/191.pdf

The cost of being Quantum secure is that signatures are at least 10-20x as big as Elliptic Curve Digital Signature Algorithm (ECDSA) used in Bitcoin. A one time use WOTS is 400-800 bytes. Minima signatures are certainly large when compared to normal Bitcoin transactions, but they are not kept forever since almost all data is eventually pruned, so although a bandwidth issue, they are only a temporary storage overhead.