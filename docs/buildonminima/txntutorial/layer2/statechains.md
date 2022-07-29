---
sidebar_position: 8
---

# State Chains

State Chains are similar to a normal ELTOO channel with a couple of differences.

1. The State Chain is run by a single entity, and it is the co-signer of any ELTOO Channel, with an additional User.

2. When the User wishes to give the Coin, which is in the ELTOO channel, to someone, they give them the Private Key of the Public Key that is used as one half of the MultiSig. A new Update and Settlement transaction is created that pays out the coin to the NEW user - a new address.

3. You can only give the WHOLE coin to another user. This works well for NFTs.

4. So every settlement transaction simply assigns the funds to a different new address controlled by the current owner.

5. When a User is given the coin the old user signs a chain of transfers. So that there is a 'State Chain' that defines who had and who was given the Coin.

6. This means any previous User + the State Chain entity can in theory write themselves a new update and settlement and take the funds - so trust is required in the state chain entity.

7. Neither the State Chain entity nor the User ever have BOTH the keys required to update the channel.

8. It is impossible to take the Coin without it being known. Since the State Chain defines who should have it. So any attempt to steal the funds is 'known'.

9. The State Chain entity does not need to know 'who' the coin is being given to. All it promises is to create a new Update and Settlement transaction when the current owner wishes it - by signing with a public key, and that a new owner can be set with a
new public key when the current owner wishes it.

Yes - the trust assumptions are different to a normal ELTOO transaction - but what is really powerful about State Chains is that unlike a normal ELTOO channel - users can be onboarded onto this Layer 2 protocol WITHOUT having to do an on chain transaction.

What you are doing is sending the 'coin' itself (or NFT) to layer 2 and then any user can be involved, since all you do is share the Private Key.
