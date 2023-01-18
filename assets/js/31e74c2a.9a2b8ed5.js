"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[1590],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(t),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6933:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={sidebar_position:14},l="Coin Flip",c={unversionedId:"buildonminima/txntutorial/layer1/coinflip",id:"buildonminima/txntutorial/layer1/coinflip",title:"Coin Flip",description:"And finally, here is a full example of a 'game' that can be played via smart contracts. It is a coin toss.",source:"@site/docs/buildonminima/txntutorial/layer1/coinflip.md",sourceDirName:"buildonminima/txntutorial/layer1",slug:"/buildonminima/txntutorial/layer1/coinflip",permalink:"/docs/buildonminima/txntutorial/layer1/coinflip",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer1/coinflip.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"The Vault",permalink:"/docs/buildonminima/txntutorial/layer1/thevault"},next:{title:"Introduction",permalink:"/docs/buildonminima/txntutorial/layer2/intro"}},u={},p=[],h={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"coin-flip"},"Coin Flip"),(0,i.kt)("p",null,"And finally, here is a full example of a 'game' that can be played via smart contracts. It is a coin toss. "),(0,i.kt)("p",null,"2 users flip a coin and heads one wins tails the other wins. The randomness is added to the system by both players picking a random number and committing to it via the hash. Thereby forcing them not to change it when either shows the preimage of that hash. So both players pick a random number, those numbers are hashed, and if the first byte of the final hash is less than 128 Player 1 wins else Player 2 wins. "),(0,i.kt)("p",null,"This game is very very simple but more complex games with more participants can be written in a similar fashion."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Importantly - this is running on Layer 1. This is running on chain. So it is slow and expensive. ",(0,i.kt)("br",null),"\nThis is not where you would play this game. You want to be running it on Layer 2 - which is instant and free. You want to be off chain. You don't want to be on Layer 1 - you want to be on Layer 2, and this is where the true power of the UTXO model (Unspent Transaction Outputs) coupled with the ELTOO framework really shines. ",(0,i.kt)("br",null),"\nBecause this simple game can be 'lifted' off layer 1 and played out on layer 2. In fact any sequence of transactions between a group of users can be lifted off layer 1 and onto layer 2."))),(0,i.kt)("p",null,"More on that later. For now - let's see the script:"),(0,i.kt)("p",null,"You would need an application to manage this sequence, and keep track of where you were, checking the chain for responses and firing off the next required transaction in the sequence. Originally, way back when, I had a web app that did just that over RPC with the Minima node."),(0,i.kt)("p",null,"A MiniDAPP called CoinFlip - for those that remember."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/*\nCOIN FLIP SCRIPT\nFunky little script.. with comments. \n\nEach 'Round' is another transaction. \n\nThe State Variables are:\n0 - Round Number\n\nPLAYER 1 puts his details in state 1-3:\n1 - Payout address\n2 - Cancel / Last Resort key\n3 - Hash of random number\n\nPLAYER 2 adds his details:\n4 - Last Resort key\n5 - Hash of random number\n\nThen player 1 reveals:\n6 - Preimage of 3\n\nThen player 2 reveals and pays out (wins 95% or takes back 5% - incentive to finish game):\n7 - Preimage of 5\n\nIf Player 1 or 2 do not reveal or pay out in a time limit\nthe other player gets everything as a last resort.. \n*/\n\n/*-----------SCRIPT------------*/\n\n/* What state are we at */\nLET round = STATE ( 0 )\nLET prevround = PREVSTATE ( 0 )\n\n/* Make sure we are 1 round ahead of before */ \nASSERT round EQ INC ( prevround )\n\n/* PLAYER 2 Joins OR Player 1 Cancels */ \nIF round EQ 1 THEN\n\n    /* Player 1 can still cancel at this stage */\n    IF SIGNEDBY ( PREVSTATE ( 2 ) ) THEN RETURN TRUE ENDIF\n\n    /* Make sure all the details are kept */ \n    ASSERT SAMESTATE ( 1 3 )\n\n    /* This round someone accepts.. check double the money*/\n    RETURN VERIFYOUT ( @INPUT @ADDRESS ( @AMOUNT * 2 ) @TOKENID TRUE )\n\n/* PLAYER 1 REVEALS HIS HAND */ \nELSEIF round EQ 2 THEN\n\n    /* If player 1 does NOT reveal.. in time limit (here 20 mins).. player 2 gets everything */\n    IF @COINAGE GT 64 AND SIGNEDBY ( PREVSTATE ( 4 ) ) THEN RETURN TRUE ENDIF\n\n    /* make sure all the details of both players are kept.. */ \n    ASSERT SAMESTATE ( 1 5 )\n\n    /* Now check that the preimage of player 1 is correct */ \n    LET ponehash = STATE ( 3 )\n    LET preimage = STATE ( 6 )\n    ASSERT KECCAK ( preimage ) EQ ponehash\n\n    /* OK - He has shown his random number.. continue */\n    RETURN VERIFYOUT ( @INPUT @ADDRESS @AMOUNT @TOKENID TRUE )\n\n/* PLAYER 2 REVEALS AND PAYS OUT */ \nELSEIF round EQ 3 THEN\n\n    /* If player 2 does NOT reveal.. in time limit (here 20 mins).. player 1 gets everything */\n    IF @COINAGE GT 64 AND SIGNEDBY ( PREVSTATE ( 2 ) ) THEN RETURN TRUE ENDIF\n\n    /* make sure all the details of both players are kept.. */ \n    ASSERT SAMESTATE ( 1 6 )\n\n    /* Now check that the preimage of player 2 is correct */ \n    LET ptwohash = STATE ( 5 )\n    LET ptwopreimage = STATE ( 7 )\n    ASSERT KECCAK ( ptwopreimage ) EQ ptwohash\n\n    /* OK - lets see who wins..! */\n    LET ponepreimage = STATE ( 6 )\n    LET rand = KECCAK ( CONCAT( ponepreimage ptwopreimage ) )\n\n    /* GET THE FIRST BYTE*/\n    LET val = NUMBER ( SUBSET ( 0 1 rand ) )\n    IF ( val LT 128 ) THEN LET winner = 1 ELSE LET winner = 2 ENDIF\n\n    /* Calculate the Payout for each */\n    LET paywinner = @AMOUNT * 0.95 LET payloser = @AMOUNT - paywinner\n\n    /* Check that State 8 states the correct winner.. for future easy lookup */ \n    ASSERT STATE ( 8 ) EQ winner\n    ASSERT STATE ( 9 ) EQ paywinner\n\n    /* Now check the payout! */\n    LET poneaddress = STATE ( 1 ) \n    IF winner EQ 1 THEN\n        ASSERT VERIFYOUT ( @INPUT poneaddress paywinner @TOKENID TRUE ) \n    ELSE\n        ASSERT VERIFYOUT ( @INPUT poneaddress payloser @TOKENID TRUE ) \n    ENDIF\n\n    /* And finally check the signature - MUST sign as otherwise someone else could claim */ \n    RETURN SIGNEDBY ( PREVSTATE ( 4 ) )\n\nENDIF\n")),(0,i.kt)("p",null,"That's quite a long script.. You could MAST the sections in each round to reduce the size you needed to post on chain."),(0,i.kt)("p",null,"Essentially the game starts when Player 1 sends some coins to this Contract with the initial 4 state variables defined, 0-3. Then player 2 responds, by spending the coin, adding more state variables, and copying the previous ones so that the memory is intact. And so on.."),(0,i.kt)("p",null,"You can follow the logic through, with each round incrementing the state(0) value, so the script knows which section to run. The state is verified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ASSERT round EQ INC ( prevround )")," ensuring that every transaction in the sequence MUST increase the state(0) / round number by one."),(0,i.kt)("p",null,"Next - we get exciting.. we go Layer 2.. we go ELTOO."))}d.isMDXComponent=!0}}]);