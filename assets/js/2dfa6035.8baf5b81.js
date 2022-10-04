"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[7627],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},607:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:8},c="Exchange Contract",l={unversionedId:"buildonminima/txntutorial/layer1/exchangecontract",id:"buildonminima/txntutorial/layer1/exchangecontract",title:"Exchange Contract",description:"Lets create a simple Layer 1 exchange contract for Minima and some tokens. Minima allows you to create tokens very easily - and tokens can have their own script. When sending a token the address script AND token script must return TRUE.",source:"@site/docs/buildonminima/txntutorial/layer1/exchangecontract.md",sourceDirName:"buildonminima/txntutorial/layer1",slug:"/buildonminima/txntutorial/layer1/exchangecontract",permalink:"/docs/buildonminima/txntutorial/layer1/exchangecontract",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer1/exchangecontract.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Hashed Time Lock Contract",permalink:"/docs/buildonminima/txntutorial/layer1/hashtimelockcontract"},next:{title:"Flash Cash",permalink:"/docs/buildonminima/txntutorial/layer1/flashcash"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exchange-contract"},"Exchange Contract"),(0,o.kt)("p",null,"Lets create a simple Layer 1 exchange contract for Minima and some tokens. Minima allows you to create tokens very easily - and tokens can have their own script. When sending a token the address script AND token script must return TRUE."),(0,o.kt)("p",null,"For now let\u2019s first create a simple token"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tokencreate name:mytoken amount:1000\n")),(0,o.kt)("p",null,"This will create a token with a globally unique tokenid."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"balance")," and you will see it there."),(0,o.kt)("p",null,"Now create yourself a ",(0,o.kt)("inlineCode",{parentName:"p"},"newaddress"),", we will use the public key and address."),(0,o.kt)("p",null,"Use your key from before (or create a new one).. what does this script do.."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"IF SIGNEDBY(0xTheOwnerPublicKey) THEN RETURN TRUE ENDIF RETURN VERIFYOUT( @INPUT 0xYouAddress 10 0x00 TRUE )\n")),(0,o.kt)("p",null,"This contract says, the owner can cancel at any time, by signing with their key OR you can spend it if you send 10 Minima ",(0,o.kt)("inlineCode",{parentName:"p"},"( tokenid 0x00 )")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"0xYourAddress")," at the opposite output in the transaction.\n",(0,o.kt)("inlineCode",{parentName:"p"},"ASSERT")," will do nothing if the expression is TRUE but RETURN FALSE if the expression is FALSE."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VERIFYOUT")," checks that an output exists of a certain address , amount and tokenid - at a certain position, and if you are keeping the state. "),(0,o.kt)("p",null,"By using ",(0,o.kt)("inlineCode",{parentName:"p"},"@INPUT")," you know the opposite output must be the desired one and multiple exchange contracts can take place in a single transaction."),(0,o.kt)("p",null,"You would need to add this as a script as before. But it\u2019s not so useful as it is specific to you.."),(0,o.kt)("p",null,"A better contract would be.."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"IF SIGNEDBY( PREVSTATE(0) ) THEN RETURN TRUE ENDIF\nASSERT VERIFYOUT( @INPUT PREVSTATE(1) PREVSTATE(2) PREVSTATE(3) TRUE ) RETURN TRUE\n")),(0,o.kt)("p",null,"This contract is generic, the values would be entered as state variables in the initial transaction, you can set state variables in ",(0,o.kt)("inlineCode",{parentName:"p"},"send"),", when you send some tokens/ Minima to the address, and it allows you to specify how much of what token you want sent to a specific address."),(0,o.kt)("p",null,"You can find it's address with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'scripts action:clean script:"IF SIGNEDBY( PREVSTATE(0) THEN RETURN TRUE ENDIF ASSERT VERIFYOUT( @INPUT PREVSTATE(1) PREVSTATE(2) PREVSTATE(3) TRUE ) RETURN TRUE"\n')),(0,o.kt)("p",null,"In this case this is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0xBB696A834B6FD91F62A28C9BDCF3754C77F03AFFFEE4EBA3A7485FDC8FD2F3C9\n")),(0,o.kt)("p",null,"You can easily send funds with the state variables using the send function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'send amount:1 address:0x39AC9C96DBC9E4A108E6EBB795003A53F11258BC47EECF0C03275C500CB8DDA1 state:{"0":"0xOwnerKey","1":"0xOwnerAddress","2":"0xDesiredAmount","3":"0xDesiredToken"}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clean")," takes your script and formats it correctly for use on Minima. You can use lowercase and spaces and these will all be removed / fixed."))}m.isMDXComponent=!0}}]);