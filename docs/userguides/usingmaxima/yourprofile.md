---
sidebar_position: 1
---

# Your profile

Maxima allows you to communicate with friends and family and other Minima node runners, peer-to-peer. Simply set up your profile add some contacts to get started. 

There are several [MiniDapps](https://minidapps.minima.global/) that use Maxima:

1. MaxContacts: Set your profile and add, remove and manage your contacts.
2. MaxSolo: A one to one chat application
3. Chatter: A decentralised social media platform


## Setting your Maxima Profile

Your Maxima Profile is the name that your Maxima contacts will see once you are connected with eachother. It will be shown when posting messages in MaxSolo or Chatter.

1. Open the **MaxContacts** MiniDapp
2. Go to the **Profile** page and select **Edit Display Name** 

![profile](/img/maxima/profile.png#width40)

3. Set your display name which will be seen by your contacts

That's it!


### Setting your Maxima Profile (Terminal)

1. Open the Minima Terminal MiniDapp or the Command Line interface where Minima is running
2. Enter the following command, adding your name on the end

**Example**
```
maxima action:setname name:Alice
```
You should see an output similar to below:
```
{
  "command":"maxima",
  "params":{
    "action":"setname",
    "name":"Alice"
  },
  "status":true,
  "response":{
    "name":"Alice"
  }
}
```

