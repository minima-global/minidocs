---
sidebar_position: 6
---

# React MiniDapp

In this tutorial, we will build a MiniDapp using React.

## Pre-requisites
- Node.js https://nodejs.org/en/download/
- A Code Editor, we recommend Visual Studio code https://code.visualstudio.com/ 
- A running Minima node
- Download the boilerplate provided [here](https://github.com/minima-global/innovation-challenge/blob/main/Resources/create-minima-app.zip?raw=true)

## Getting Started with Create Minima App

This boilerplate has been created with `Create React App`. You can use this boilerplate to build Minima MiniDapps. <br/>
To create your application, open the folder in your code editor and edit the files in the `/src` folder. <br/>
If you need some guidance, please follow the [Balance tutorial](/docs/buildonminima/dapptutorial/reactminidapp#balance-tutorial) below.

## How to build and install your app

To build your app, please run the following command in the `create-minima-app` directory: <br/>
`npm i` and then run `npm run build`. <br/>
Once the app has been built, you can run `npm run zip` to create a MiniDapp.mds.zip file in the `/minidapp` folder.

### Installing on a Desktop node

Login to your MiniDapp Hub by going to `https://localhost:9003` (default MDS port) and log in. You must log in using a password that you can retrieve by running `mds` in the Minima Terminal. <br/>
Once you are logged in, scroll to the bottom and click `Choose file`, locate your zip file and click the `install` button and your app should be installed. Click `Back to MDS Hub` and you should now see your app in the list. Click on your app to open it.

### Installing on Android

Either connect to your Android node using the Desktop connect feature and continue to install the MiniDapp as above, or transfer your app to your phone's storage and open the Minima app. <br/>
Click on the `+` button on the bottom right of the screen. Locate and select the zip file on your phone and you should be taken back to the app list. You should now see your app in the list. Tap on your app to open it.

## Do I have to reinstall after every change?

No, we have a solution that allows you to get around the issue to take advantage of `Create React App`'s automatic reloading on file changes.

- Ensure you have installed the app using the instructions above on desktop
- Duplicate the `.env.example` file and rename it to `.env` (this is your project root)
- Configure the environment values, you can leave everything default unless you are running Minima on a custom port. If connecting to a phone node, change the IP address to that as shown in the Health section of your Minima app.
- Open your MiniDapp on Desktop
- Your url will look something like: `https://localhost:9003/{APP_ID}/index.html?uid=YOUR_UID`
- Copy the value at the end where YOUR_UID is in the URL e.g. `0xD497A626EF65C24417D4F7AE0CC48289BCB1062FB9763D47A20326984E099299`
- Replace `REACT_APP_DEBUG_UID` in the env file with the uid you copied
- Run `npm run start`
- Edit `/src/App.jsx` and the browser window will automatically reload and should be connected to Minima


## Balance Tutorial

### Showing the balance with the Create Minima App

Let's dive into a short tutorial that will show you how to show the balance of your wallet in the app. 

Open `/src/App.jsx`, this is the main application file. The first thing we have to do is call the MDS `balance` command. The full list of commands can be found [here](/docs/runanode/terminal_commands)

The first step is to create a new component file, lets call it `Balance.jsx` in the `/src` folder.

```jsx
import React from 'react';

const Balance = () => {
  return <div>Balance</div>
}

export default Balance;
```

Now let's import this component in our `App.jsx`. <br/>
We need to add `import Balance from './Balance';` and `<Balance />` in the return, feel free to put it anywhere you like, we have just put it after the `<p>` tag.

```jsx
import { useEffect } from "react";
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
        <p>
          Edit <code>src/App.js</code>.
        </p>
        <Balance />
      </section>
    </div>
  );
}

export default App;
```

You should now see `Balance` printed in the browser window. 

Now let's go back to the `/src/Balance.jsx` and add:

``` jsx
const getBalance = React.useCallback(() => {
  window.MDS.cmd('balance', function (balance) {
    console.log(balance.response);
  })
}, []);
```

Our file should look like this now:

```jsx
import React from 'react';

const Balance = () => {
  const getBalance = React.useCallback(() => {
    window.MDS.cmd('balance', function (balance) {
      console.log(balance.response);
    })
  }, []);

  return <div>Balance</div>
}

export default Balance;
```

> `React.useCallback` ensures the function is not re-run unless one of the dependencies change, you can read more about it in the React documentation: https://reactjs.org/docs/hooks-reference.html#usecallback

To run our function we need to add a `useEffect`, this is a function that is called when the component is rendered to the screen.

```jsx
React.useEffect(() => {
  getBalance();
}, [getBalance]);
```

Our file should look like this now:

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

  return <div>Balance</div>
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

> `React.useState` allows us to create a value that will cause React to re-render when the value changes. <br/>
> We can use `setBalance` in this case to change the value of `balance`.

Our file should now look like this:

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

  return <div>Balance</div>
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

  return <div>Balance</div>
}

export default Balance;
```

Now we can use the getter to print the value to the screen:

```jsx
return <div>Balance: {balance}</div>
```

Our file should now look like this:

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

  return <div>Balance: {balance}</div>
}

export default Balance;
```

And that's it! 

Feel free to look at the rest of the Minima documentation and start building. <br/>
We also advise looking at the React documentation which can be found here: https://beta.reactjs.org/