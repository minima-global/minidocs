---
sidebar_position: 7
---

# React MiniDapp

In this tutorial, we will build a MiniDapp using React.

## Pre-requisites
- Node.js https://nodejs.org/en/download/
- A Code Editor, we recommend Visual Studio code https://code.visualstudio.com/ 
- A running Minima node
- Download the create-react-minidapp boilerplate [here](https://github.com/minima-global/awesome-minima/tree/main/boilerplates/react/create-react-minidapp)
- Download the latest mds.js file [here](https://github.com/minima-global/Minima/blob/master/mds/mds.js)

## Getting Started with Create Minima App

This boilerplate has been created with `Create React App`. You can use this boilerplate to build Minima MiniDapps.

To create your application, unzip and the open the folder in your code editor. We will edit the files in the `/src` folder.

If you need some guidance, please follow the [Balance tutorial](/docs/buildonminima/dapptutorial/reactminidapp#balance-tutorial) below.

## How to build and install your app

To build your app, open the Terminal and run the following commands in the `create-minima-app` directory:

```
npm i
``` 
and then run 
```
npm run build
```

Once the app has been built, you can run the following to create a **my-minima-app.mds.zip** file in the `/minidapp` folder. This is the zipped minidapp that can be installed onto a node.

```
npm run zip
```

### Installing on a Desktop node

1. Login to Minima by going to `https://localhost:9003` (9003 is the default MiniDapp System port). Use the password you set when starting the node or run `mds` in the Minima Terminal to check the password.

2. Once logged in, click on the `+` in the top right, locate your **my-minima-app.mds.zip** zip file and click the `install` button. Your app should be installed. 

3. Click on your app to open it.

### Installing on Android

Either connect to your Android node using the Desktop connect feature and continue to install the MiniDapp as above, or transfer your app to your phone's storage and open the Minima app.

1. Click on the `+` button at the top right of the screen. 

2. Locate and select the zip file on your phone and tap install. 

You should now see your app in the list. Tap on your app to open it.

## Do I have to reinstall after every change?

No, we have a solution that allows you to get around the issue to take advantage of `Create React App`'s automatic reloading on file changes.

1. Ensure you have installed the app using the instructions above on desktop

2. Duplicate the `.env.example` file and rename it to `.env` (this is your project root)

3. Configure the environment values, you can leave everything default unless you are running Minima on a custom port. If connecting to a phone node, change the IP address to that as shown in Settings > Desktop Connect in your Minima app.

4. Open your MiniDapp on Desktop, your url will look something like: `https://127.0.0.1:9003/{APP_ID}/index.html?uid=YOUR_UID`

5. Copy the value at the end where YOUR_UID is in the URL e.g. `0xD497A626EF65C24417D4F7AE0CC48289BCB1062FB9763D47A20326984E099299`

6. Replace `REACT_APP_DEBUG_UID` in the env file with the uid you copied

7. Ensure the following code is included in **mds.js**

**mds.js:**

```
// env overrides
if (window.DEBUG) {
   host = window.DEBUG_HOST;
   port = Math.floor(window.DEBUG_PORT);
   MDS.minidappuid = window.DEBUG_UID;
}
```
the above code should be added directly below this existing code
```
//HARD SET if debug mode - running from a file
if(MDS.DEBUG_HOST != null){
	MDS.log("DEBUG Settings Found..");
	host=MDS.DEBUG_HOST;
	port=MDS.DEBUG_PORT;	
}
```

8. From the Terminal, run `npm run start`

9. Edit `/src/App.jsx` and the browser window will automatically reload and should be connected to Minima



## Balance Tutorial

### Showing the balance with the Create Minima App

Let's dive into a short tutorial that will show you how to show the balance of your wallet in the app. 

Open `/src/App.jsx`, this is the main application file. 

The first thing we have to do is call the MDS `balance` command. The full list of commands can be found [here](/docs/userguides/usingyournode/terminal_commands).

The first step is to create a new component file, lets call it `Balance.jsx` in the `/src` folder.

**Balance.jsx:**

```jsx
import React from 'react';

const Balance = () => {
  return <div>Balance Tutorial</div>
}

export default Balance;
```

Now let's import this component in our `App.jsx`.

We need to add `import Balance from './Balance';` and `<Balance />` in the return, feel free to put it anywhere you like, we have just put it after the `<p>` tag.

**App.jsx:**

```jsx
import React, { useEffect } from 'react';
import minimaLogo from './minima_logo.png';
import './App.css';
import Balance from './Balance';

function App() {
  useEffect(() => {
      window.MDS.init();
  }, []);

  return (
    <div className="App">
      <section className="container">
        <img src={minimaLogo} className="logo" alt="logo" />
        <Balance />
      </section>
    </div>
  );
}

export default App;
```

You should now see `Balance Tutorial` printed in the browser window. 

Now let's go back to the `/src/Balance.jsx` and add the following inside `const Balance`:

``` jsx
const getBalance = React.useCallback(() => {
  //run the balance command
  window.MDS.cmd('balance', function (balance) {
    console.log(balance.response);
  })
}, []);
```

Our file should now look like this:

**Balance.jsx:**

```jsx
import React from 'react';

const Balance = () => {
  const getBalance = React.useCallback(() => {
    window.MDS.cmd('balance', function (balance) {
      console.log(balance.response);
    })
  }, []);

  return <div>Balance Tutorial</div>
}

export default Balance;
```

:::note
`React.useCallback` ensures the function is not re-run unless one of the dependencies change, you can read more about it in the React documentation: https://react.dev/reference/react/useCallback
:::

To run our function we need to add a `useEffect`, this is a function that is called when the component is rendered to the screen.

```jsx
React.useEffect(() => {
  getBalance();
}, [getBalance]);
```

Our file should now look like this:

**Balance.jsx:**

```jsx
import React from 'react';

const Balance = () => {
  const getBalance = React.useCallback(() => {
    window.MDS.cmd('balance', function (balance) {
      console.log(balance.response);
    })
  }, []);

  React.useEffect(() => {
    getBalance();
  }, [getBalance]);

  return <div>Balance Tutorial</div>
}

export default Balance;


```

Now go to the browser and open the developer tools, open the `Console` tab and reload the page to refresh the logs. You should see an array being printed to the logs.

```
[{
  coins: "1",
  confirmed: "100",
  sendable: "100",
  token: "Minima",
  tokenid: "0x00",
  total: "1000000000",
  unconfirmed: "0"
}]
```

Now we need to update our component so that we can store the balance for it to show up on the screen, we can use `React.useState` for this.

```jsx
const [balance, setBalance] = React.useState(null);
```
:::note
 `React.useState` allows us to create a value that will cause React to re-render when the value changes. <br/>
 We can use `setBalance` in this case to change the value of `balance`.
:::
Our file should now look like this:

**Balance.jsx:**

```jsx
import React from 'react';

const Balance = () => {
  const [balance, setBalance] = React.useState(null);

  const getBalance = React.useCallback(() => {
    window.MDS.cmd('balance', function (balance) {
      console.log(balance.response);
    })
  }, []);

  React.useEffect(() => {
    getBalance();
  }, [getBalance]);

  return <div>Balance Tutorial</div>
}

export default Balance;
```

Now let's remove the `console.log` and use the setter that we have just created

```jsx
const getBalance = React.useCallback(() => {
  window.MDS.cmd('balance', function (balance) {
    if (balance.response) {
      const minimaToken = balance.response.find(token => token.token === 'Minima');
      setBalance(minimaToken.confirmed);
    }
  })
}, []);
```

Our file should now look like this:

**Balance.jsx:**

```jsx
import React from 'react';

const Balance = () => {
  const [balance, setBalance] = React.useState(null);

  const getBalance = React.useCallback(() => {
    window.MDS.cmd('balance', function (balance) {
      if (balance.response) {
        const minimaToken = balance.response.find(token => token.token === 'Minima');
        setBalance(minimaToken.confirmed);
      }
    })
  }, []);

  React.useEffect(() => {
    getBalance();
  }, [getBalance]);

  return <div>Balance Tutorial</div>
}

export default Balance;
```

Now we can use the getter to print the value to the screen:

```jsx
return <div>Balance Tutorial <br/> Your confirmed balance is: {balance}</div>
```

Our file should now look like this:

**Balance.jsx:**

```jsx
import React from 'react';

const Balance = () => {
  const [balance, setBalance] = React.useState(null);

  const getBalance = React.useCallback(() => {
    window.MDS.cmd('balance', function (balance) {
      if (balance.response) {
        const minimaToken = balance.response.find(token => token.token === 'Minima');
        setBalance(minimaToken.confirmed);
      }
    })
  }, []);

  React.useEffect(() => {
    getBalance();
  }, [getBalance]);

  return <div>Balance Tutorial <br/> Your confirmed balance is: {balance}</div>
}

export default Balance;
```

And that's it! 

Feel free to look at the rest of the Minima documentation and start building.
  
We also advise looking at the React documentation which can be found here: https://react.dev/reference/react