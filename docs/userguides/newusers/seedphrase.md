---
sidebar_position: 2
---
# Your seed phrase

Keeping your wallet secure involves 

1. Keeping the device your node is running on secure.
2. Writing down your seed phrase **immediately after starting your node.**
3. Locking your node with a password. See [Locking your node](/docs/userguides/walletsecurity/lockingyourwallet).
4. Backing up your node. See [Backing up your node](/docs/userguides/walletsecurity/backingupyourwallet).

Your seed phrase will be required to restore your wallet= if you lose access to your node and do not have a backup. It can be found in the Security MiniDapp.

![dappmenu](/img/app/security.png#width10)

## How to find your seed phrase

1. Open the **Security** MiniDapp and ensure your node is not locked
2. Select **Manage Seed Phrase** 
3. Select **Show Seed Phrase**
4. Grab a pen and paper and write down your Seed Phrase in the order specified  

**Write down your seed phrase carefully, in the _correct order_ and store it in a safe place offline.**

It is also possible to view your seed phrase by running the `vault` command using the RPC client or Docker CLI.

:::important Tips for keeping your seed phrase safe:
1. **DON'T** take a screenshot of your seed phrase 
2. **DON'T** copy and paste your seed phrase to/from a mobile or computer which is connected to the internet
3. **DO** use a metal plate to record your seed phrase and store it somewhere safe
5. **DO** Make 2 copies of your seed phrase and give one to a trusted relative or store in a second location
6. For large amounts, consider signing your transactions offline. To do this you will need to run a node on an offline device and one node on an online device. See [Cold Storage Solution](/docs/userguides/walletsecurity/coldstoragesetup).
:::
