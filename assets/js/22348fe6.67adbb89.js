"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8184],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7299:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},s="Transactions",c={unversionedId:"learn/minima/transactions",id:"learn/minima/transactions",title:"Transactions",description:"Transaction Lifecycle",source:"@site/docs/learn/minima/transactions.md",sourceDirName:"learn/minima",slug:"/learn/minima/transactions",permalink:"/docs/learn/minima/transactions",editUrl:"https://github.com/minima-global/minidocs/docs/learn/minima/transactions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/docs/learn/minima/coreconcepts"},next:{title:"MMR Database",permalink:"/docs/learn/minima/mmrdatabase"}},u={},p=[{value:"Transaction Lifecycle",id:"transaction-lifecycle",level:3},{value:"Structure",id:"structure",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3},{value:"State Variables",id:"state-variables",level:3},{value:"Link Hash",id:"link-hash",level:3},{value:"Transaction ID",id:"transaction-id",level:3},{value:"Burn Transactions",id:"burn-transactions",level:2},{value:"Transaction Validity",id:"transaction-validity",level:2}],m={toc:p};function d(t){var e=t.components,l=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transactions"},"Transactions"),(0,i.kt)("h3",{id:"transaction-lifecycle"},"Transaction Lifecycle"),(0,i.kt)("p",null,"The following diagram explains the basic process from a Transaction to ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/minima/txpowunits"},"TxPoW unit")," to Block."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Transactions",src:n(9267).Z+"#gh-light-mode-only",width:"829",height:"1793"}),(0,i.kt)("img",{loading:"lazy",alt:"Core Concepts",src:n(4650).Z+"#gh-dark-mode-only",width:"829",height:"1793"})),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("p",null,"All transactions have the following structure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inputs"),(0,i.kt)("li",{parentName:"ul"},"Outputs"),(0,i.kt)("li",{parentName:"ul"},"State variables"),(0,i.kt)("li",{parentName:"ul"},"Link hash"),(0,i.kt)("li",{parentName:"ul"},"Transaction ID")),(0,i.kt)("h3",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"Transaction inputs are coins (UTxOs) that will be spent in the transaction, identified by the Coin ID. One or more coins may be required depending on the value of the coins owned by the user and the amount they wish to spend. "),(0,i.kt)("p",null,"Example:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"If a user wishes to spend 100 Minima but they only have two coins worth 40 and 90 Minima, they must use both coins as inputs to the transaction and receive change of 30 as a new coin."))),(0,i.kt)("p",null,"Each coin is identifiable with a unique CoinID has the following attributes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Coin Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"CoinID")),(0,i.kt)("td",{parentName:"tr",align:null},"The globally unique identifier for a coin. The coin id of a new UTxO is hash(first input coin in txn ","|"," output_num_in_txn)"),(0,i.kt)("td",{parentName:"tr",align:null},"64 byte hash (MiniData)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Amount")),(0,i.kt)("td",{parentName:"tr",align:null},"The amount of 'Minima'. Even custom token transactions are just amounts of coloured Minima (",(0,i.kt)("a",{parentName:"td",href:"/docs/learn/minima/colouredcoins"},"see Coloured Coins"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"MiniNumber")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Address")),(0,i.kt)("td",{parentName:"tr",align:null},"The hash of a script. If no custom script is provided,the script will simply be RETURN(SIGNEDBY(","[PublicKey of coin owner]",") i.e. the  transaction must be signed by the coin owner before it can be spent. All addresses are P2SH (Pay to Script Hash)."),(0,i.kt)("td",{parentName:"tr",align:null},"64 byte hash (MiniData)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Token ID")),(0,i.kt)("td",{parentName:"tr",align:null},"The Token ID. Minima is 0x00. Everything else has a full 64 byte hash. Tokens are created by colouring Minima."),(0,i.kt)("td",{parentName:"tr",align:null},"64 byte hash (MiniData)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Token")),(0,i.kt)("td",{parentName:"tr",align:null},"Token Details (",(0,i.kt)("a",{parentName:"td",href:"/docs/learn/minima/colouredcoins"},"see Coloured Coins"),")"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Floating")),(0,i.kt)("td",{parentName:"tr",align:null},"True or False. Set when you create a transaction. If True, the Coin ID is ignored so that any valid coin that has the same amount, address and Token ID can be used."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Store State")),(0,i.kt)("td",{parentName:"tr",align:null},"True or False, depending on whether the state is stored for this coin"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"State")),(0,i.kt)("td",{parentName:"tr",align:null},"The state variables (0-255) of the transaction this coin was created in. You can access this data from scripts."),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"MMR Entry")),(0,i.kt)("td",{parentName:"tr",align:null},"The MMR database entry number for this coin"),(0,i.kt)("td",{parentName:"tr",align:null},"MMREntryNumber")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Spent")),(0,i.kt)("td",{parentName:"tr",align:null},"True or False, depending on whether this coin has been spent or not."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Created")),(0,i.kt)("td",{parentName:"tr",align:null},"The block number this coin was created in."),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")))),(0,i.kt)("p",null,"Example coin details:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'coins relevant:true\n{\n  "command":"coins",\n  "params":{\n    "relevant":"true"\n  },\n  "status":true,\n  "response":[{\n    "coinid":"0xB76A17B0444D40A90697FCC7EFFFB1917F7B4AC7FD70D7E70323DC560B6A3CF2",\n    "amount":"98",\n    "address":"0x0B00C23C8B4DFBDEC76FEE908ADF1BD396A5E92DCC826D3ADD26E4140CFA1DC0",\n    "tokenid":"0x00",\n    "token":null,\n    "floating":false,\n    "storestate":true,\n    "state":[],\n    "mmrentry":"439",\n    "spent":false,\n    "created":"167764"\n  }]\n}\n')),(0,i.kt)("h3",{id:"outputs"},"Outputs"),(0,i.kt)("p",null,"Transaction outputs are new coins (UTxOs) created as a result of a transaction and include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Amount to send to recipients:")," One or more amounts with recipients' addresses specified."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Change to the sender:")," When the amount being sent is less than the value of the coin inputs, change needs to be returned to the sender's address.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"burn")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Any difference between inputs and outputs will be burned, reducing the circulating supply of Minima."))),(0,i.kt)("h3",{id:"state-variables"},"State Variables"),(0,i.kt)("p",null,"Transactions include State Variables for storing public data and previous transaction states to retrieve information for scripts. "),(0,i.kt)("p",null,"256 state variables are allowed per transaction, ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/minima/scripting"},"(see Scripting)"),"."),(0,i.kt)("h3",{id:"link-hash"},"Link Hash"),(0,i.kt)("p",null,"Each transaction has an associated Burn transaction, which may or may not have a value. "),(0,i.kt)("p",null,"A burn transaction uses the transaction ID of the transaction it relates to, as its link hash."),(0,i.kt)("p",null,"This ensures the burn transaction can only be spent with the transaction it is linked to.  "),(0,i.kt)("p",null,"For main transactions, the link hash is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0x00"),"."),(0,i.kt)("h3",{id:"transaction-id"},"Transaction ID"),(0,i.kt)("p",null,"The transaction ID is initially set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0x00")," and is then calculated as the hash of the transaction object, including its inputs, outputs, state variables and linkhash."),(0,i.kt)("h2",{id:"burn-transactions"},"Burn Transactions"),(0,i.kt)("p",null,"Burn transactions are created automatically and have the following structure compared to a main transaction:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Main transaction structure")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Transaction ID:")," ",(0,i.kt)("em",{parentName:"th"},"Hash(Transaction object)")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Inputs")," ",(0,i.kt)("br",null)," ",(0,i.kt)("em",{parentName:"td"},"Outputs"),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"State Variables (0-255)"),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Linkhash (0x00)"),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Transaction ID"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Burn transaction structure (automatically set)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Transaction ID:")," ",(0,i.kt)("em",{parentName:"th"},"Hash(Transaction object)")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Inputs (matching the main txn)"),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Output (amount to burn)"),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"State Variables (matching the main txn)"),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Linkhash (main txn ID)"),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Transaction ID"))))),(0,i.kt)("h2",{id:"transaction-validity"},"Transaction Validity"),(0,i.kt)("p",null,"For a transaction to be valid:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The sum of inputs must be greater than or equal to the sum of the outputs for each Token ID"),(0,i.kt)("li",{parentName:"ol"},"All inputs and outputs must be valid Minima amounts (between 0-1 billion)"),(0,i.kt)("li",{parentName:"ol"},"All inputs must have unique coin IDs "),(0,i.kt)("li",{parentName:"ol"},"It must have no more than 256 state variables ")),(0,i.kt)("p",null,"When checking the validity of transactions, the ",(0,i.kt)("em",{parentName:"p"},"monotonicity")," is checked to determine whether a transaction needs to be checked more than once. "),(0,i.kt)("p",null,"Scripts of ",(0,i.kt)("strong",{parentName:"p"},"Monotonic")," transactions only need to be checked once i.e. they are either valid or not e.g. a simple RETURN(SIGNEDBY(..))"),(0,i.kt)("p",null,"Scripts of ",(0,i.kt)("strong",{parentName:"p"},"Non Monotonic")," transactions need to be checked multiple times. Any script in a transaction that references global variables @BLKNUM, @BLKDIFF or @INBLKNUM is not monotonic as its validity will change depending on these variables."))}d.isMDXComponent=!0},4650:function(t,e,n){e.Z=n.p+"assets/images/transactionLifecycleSimpleDm-14065b945ba4573822a7485895036fc8.svg"},9267:function(t,e,n){e.Z=n.p+"assets/images/transactionLifecycleSimpleLm-2757b5806ca0d4b5f8c8f6c0253ad43c.svg"}}]);