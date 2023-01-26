"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[724],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return n?o.createElement(m,i(i({ref:t},h),{},{components:n})):o.createElement(m,i({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6619:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},c="Core Concepts",l={unversionedId:"learn/minima/coreconcepts",id:"learn/minima/coreconcepts",title:"Core Concepts",description:"UTxO Model",source:"@site/docs/learn/minima/coreconcepts.md",sourceDirName:"learn/minima",slug:"/learn/minima/coreconcepts",permalink:"/docs/learn/minima/coreconcepts",editUrl:"https://github.com/minima-global/minidocs/docs/learn/minima/coreconcepts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Network Overview",permalink:"/docs/learn/networkoverview"},next:{title:"Transactions",permalink:"/docs/learn/minima/transactions"}},h={},u=[{value:"UTxO Model",id:"utxo-model",level:2},{value:"Transaction Proof-of-Work (TxPoW)",id:"transaction-proof-of-work-txpow",level:2},{value:"The Burn",id:"the-burn",level:2},{value:"MMR (Merkle Mountain Range) Database",id:"mmr-merkle-mountain-range-database",level:2}],d={toc:u};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,r.kt)("h2",{id:"utxo-model"},"UTxO Model"),(0,r.kt)("p",null,"Minima uses the UTxO (Unspent Transaction Output) Model, like Bitcoin. A Transaction Output is a specific amount of Minima, identifiable through a unique ID called a ",(0,r.kt)("strong",{parentName:"p"},"Coin ID"),". Each Transaction Output can be considered analogous to a physical coin in that they can represent different amounts of currency and must be spent in whole."),(0,r.kt)("p",null,"The Minima blockchain keeps track of the UTxO set on the network and who can spend them. The UTxO set circulating in the network fluctuates as users spend coins and create new ones as outputs from transactions. The sum of the value of all the UTxOs in the network will equal at most 1 billion Minima.\nOne or more UTxOs are used as inputs into transactions and one or more new UTxOs will be created as outputs."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The example below shows a transaction of 30 Minima from Bob to Alice. A UTxO worth 50 Minima is used as an input and two new UTxOs are created as outputs - one worth 30 Minima which is sent to the recipient and one of 20 Minima which is returned to the sender as change. Just like change is received when physical coins are spent.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Core Concepts",src:n(5471).Z+"#gh-light-mode-only",width:"469",height:"271"}),(0,r.kt)("img",{loading:"lazy",alt:"Core Concepts",src:n(3634).Z+"#gh-dark-mode-only",width:"469",height:"271"})),(0,r.kt)("h2",{id:"transaction-proof-of-work-txpow"},"Transaction Proof-of-Work (TxPoW)"),(0,r.kt)("p",null,"Minima requires users to provide work, in the form of hashing, to \u2018mine\u2019 their own transactions, this is ",(0,r.kt)("strong",{parentName:"p"},"TxPoW"),"."),(0,r.kt)("p",null,"Once a user has contributed a small amount of work (~1 second of hashing) they have contributed enough for their transaction to be sent around the network. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"There are no financial rewards for mining your transactions")," e.g. block rewards or collection of fees, the reward is simply being able to broadcast a (valid) transaction to the network."))),(0,r.kt)("p",null,"Transactions are held in ",(0,r.kt)("strong",{parentName:"p"},"TxPoW units"),", which are propagated around the network and may or may not become blocks. TxPoW units contain a user\u2019s transaction and the hashes of other unconfirmed transactions known to the user\u2019s node. TxPoW units become blocks if they, by chance, meet the level of difficulty required to become a block. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This ensures that all users can contribute to the construction of the chain")," and is in contrast to Bitcoin where users rely on other dedicated 'miners' with specific hardware to provide PoW and propagate their transactions on their behalf."),(0,r.kt)("h2",{id:"the-burn"},"The Burn"),(0,r.kt)("p",null,"The Burn is a small cost (fee) which is incurred when sending transactions on the Minima network during times of high demand. This cost, denominated in Minima, is \u2018burned\u2019 i.e. removed from Minima's hard-capped supply, making Minima a deflationary currency as the overall circulating supply slowly decreases over time. "),(0,r.kt)("p",null,"The burn serves multiple purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A strong incentive to propagate and process a transaction:")," All users in the network will benefit from the decrease in supply as coins that are left become more scarce and therefore more valuable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A method for ordering transactions and regulating on-chain traffic:")," Similar to the fee model on other blockchains, the burn serves as a selection method for deciding which unconfirmed transactions will be added to a block. The higher the burn amount in a transaction, the more likely it is that a transaction will be added to a block. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A mechanism for spam prevention by making Denial-of-Service (DoS) attacks expensive:")," The burn may be high during periods of heavy traffic or spam and, as it rises, traffic will decrease, self-regulating the system. The burn can be nil or very low when traffic is at manageable levels as the total amount is not important, only the relative burn amount in comparison to other transactions.")),(0,r.kt)("p",null,"While some blockchains have implemented burns that require a central entity to actively buy back and burn coins or tokens (for example by sending them to an inaccessible address, effectively destroying them); others have a burn directly integrated into the protocol. "),(0,r.kt)("p",null,"In Minima, the ability to burn coins is directly coded into the protocol, meaning it does not rely on any entity, but rather is enforced by the network as a function of demand for block space. "),(0,r.kt)("h2",{id:"mmr-merkle-mountain-range-database"},"MMR (Merkle Mountain Range) Database"),(0,r.kt)("p",null,"To ensure that all users of the network can contribute to the construction of the chain, the chain needs to be small enough to run on a mobile device. This would not be possible if the entire history of the chain was required as this would be too much of an overhead for a mobile device. Therefore the blockchain must be constantly reduced in size to meet this requirement. This is known as ",(0,r.kt)("strong",{parentName:"p"},"pruning"),".",(0,r.kt)("br",null),"\nThe impact of pruning means that the full transaction history of the chain is not kept (except on Archive nodes), therefore a storage mechanism is required to keep track of coins that were created in blocks that have since been pruned. ",(0,r.kt)("strong",{parentName:"p"},"This is the role of the MMR database."),(0,r.kt)("br",null),"\nHence, users must keep track of their spent and unspent coins/TxOs (transaction outputs) independently of the chain. Each coin is stored as a leaf node in a tree structure (a ",(0,r.kt)("strong",{parentName:"p"},"Merkle hash-sum tree"),"). Then, using a collection of nodes in this tree, a proof path can be created from the coin to a peak of the tree, proving the existence of a coin even if the block that it was created in has been pruned. ",(0,r.kt)("br",null),"\nAll users only keep the parts of the MMR tree required to create the proofs for their own coins, which is a tiny amount of data compared to all the coins in the network. Users are also required to store the peaks and the root of the tree so that they can validate a Coin Proof that is presented to them by another user. ",(0,r.kt)("br",null),"\nWhen a user wishes to spend their coins, they must provide the up-to-date, valid proof that it is unspent. Any other node in the network can verify this proof by calculating the peaks and root hash of the MMR tree from the proof and ensuring it matches their own values for the peak and root hash."))}p.isMDXComponent=!0},3634:function(e,t,n){t.Z=n.p+"assets/images/coreConceptsDm-7b57cfa58b24b47d518516dafd394b31.svg"},5471:function(e,t,n){t.Z=n.p+"assets/images/coreConceptsLm-396940658d7649d9bcc4919b8fcff9d9.svg"}}]);