"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[6244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:7},o="Full ELTOO Sequence",s={unversionedId:"buildonminima/txntutorial/layer2/eltoofullsequence",id:"buildonminima/txntutorial/layer2/eltoofullsequence",title:"Full ELTOO Sequence",description:"We now have all the pieces required to attempt a complete ELTOO transaction sequence. What we can do is create a payment channel between 2 users and update that with bi-directional payments, in a way that does not allow either User to change the expected outcome.",source:"@site/docs/buildonminima/txntutorial/layer2/eltoofullsequence.md",sourceDirName:"buildonminima/txntutorial/layer2",slug:"/buildonminima/txntutorial/layer2/eltoofullsequence",permalink:"/docs/buildonminima/txntutorial/layer2/eltoofullsequence",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer2/eltoofullsequence.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"ELTOO Floating Coin",permalink:"/docs/buildonminima/txntutorial/layer2/eltoofloating"},next:{title:"State Chains",permalink:"/docs/buildonminima/txntutorial/layer2/statechains"}},l={},c=[],u={toc:c};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"full-eltoo-sequence"},"Full ELTOO Sequence"),(0,i.kt)("p",null,"We now have all the pieces required to attempt a complete ELTOO transaction sequence. What we can do is create a payment channel between 2 users and update that with bi-directional payments, in a way that does not allow either User to change the expected outcome."),(0,i.kt)("p",null,"This is the ELTOO contract required by Minima"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LET st=STATE(99)\nLET ps=PREVSTATE(99)\n\nIF st EQ ps AND @COINAGE GT 256 AND MULTISIG(2 0xUser1Settle 0xUser2Settle) THEN\n    RETURN TRUE\nELSEIF st GT ps AND MULTISIG(2 0xUser1Update 0xUser2Update) THEN\n    RETURN TRUE \nENDIF\n")),(0,i.kt)("p",null,"The Public keys used by the users are ",(0,i.kt)("inlineCode",{parentName:"p"},"0xUser1Settle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0xUser2Settle"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"0xUser1Update")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0xUser2Update"),"."),(0,i.kt)("p",null,"The sequence number is stored in state variable 99."),(0,i.kt)("p",null,"You will note the settlement clause can only be attached to a single output with the exact state sequence number. The update clause can be used as long as it has a higher sequence number - and both use floating coins."),(0,i.kt)("p",null,"How this works (pls read the ELTOO whitepaper to follow more closely):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"User1 and User2 wish to open a payment channel with 10 Minima each."),(0,i.kt)("li",{parentName:"ol"},"They start by creating a setup transaction that sends funds to a simple 2of2 multisig worth 20 Minima - the Funding transaction - but do not sign and publish it."),(0,i.kt)("li",{parentName:"ol"},"They create a ",(0,i.kt)("strong",{parentName:"li"},"trigger")," transaction that spends the Funding transaction and sends the funds to the ELTOO contract,, with state variable 99 equal to 0. This will effectively start the final settlement sequence - since the @COINAGE timeout is now on chain"),(0,i.kt)("li",{parentName:"ol"},"They create the first ",(0,i.kt)("strong",{parentName:"li"},"settlement")," transaction that spends the trigger transaction, with state variable 99 set to 0, and sends 10 Minima back to each user."),(0,i.kt)("li",{parentName:"ol"},"They sign and share the trigger and initial settlement transaction, and do the same with the funding transaction, and finally publish the Funding transaction."),(0,i.kt)("li",{parentName:"ol"},"Now - they both have a valid transaction spending the Funding transaction to create the trigger transaction, and both have an initial settlement transaction spending THAT to give them the money back. Phew.. stay with me."),(0,i.kt)("li",{parentName:"ol"},"Currently ONLY the Funding transaction has been published."),(0,i.kt)("li",{parentName:"ol"},"Both users can create new update transactions, and their corresponding settlement transactions, that allocate different amounts of the 20 Minima to each user."),(0,i.kt)("li",{parentName:"ol"},"An Update transaction simply spends their ELTOO coin, and sends the funds back to the same ELTOO coin but with a higher sequence number - in this case state 99."),(0,i.kt)("li",{parentName:"ol"},"Every Update transaction has a settlement transaction that spends it. And can append ONLY it."),(0,i.kt)("li",{parentName:"ol"},"So if User1 wants to pay User2 1 Minima - they create a new update transaction with an incremental sequence number, that spends the current ELTOO output and pays to the same ELTOO output, and a new settlement transaction paying 9 Minima to User1 and 11 Minima to User2, with the exact current sequence number as a state variable. They create the settlement FIRST - then the update (so the update can't be posted without a valid settlement)."),(0,i.kt)("li",{parentName:"ol"},"This continues indefinitely for as long and as fast as the Users want ( there could be more than 2 users of course )"),(0,i.kt)("li",{parentName:"ol"},"When they want to close the channel - they publish the trigger transaction, then the latest update transaction, and then the latest settlement transaction."),(0,i.kt)("li",{parentName:"ol"},"IF one of the users publishes an earlier Update transaction, by mistake or maliciously, no problem.. the other user can publish their latest Update transaction on top of that one, because of the @COINAGE timeout - and because they all use floating coins!"),(0,i.kt)("li",{parentName:"ol"},"And finally - as a nice optimisation - since all parties have a valid trigger, update and settlement transaction, there is no need to actually publish them all on chain - is there ? The final outcome is the outputs of the final settlement transactions, so the parties can negotiate a new transaction, that spends the original funding transaction, instead of the trigger transaction, and pays everyone what they are owed..")),(0,i.kt)("p",null,"So in conclusion - the whole process only requires 1 transaction to start the channel, and 1 to close it. But - and this is important - you can run a sequence.. and NOT close at the end. Just use it again when you need to."),(0,i.kt)("p",null,"'Re-balancing' channels allows for the amounts currently owed to each user to be changed so that the channel need not be closed."),(0,i.kt)("p",null,"So if Alice and Bob have a channel, but currently ALL the funds are being sent to Bob, how can Alice continue to use it, and continue to send Bob funds?"),(0,i.kt)("p",null,"Alice and Bob both have channels with Claire.. Alice pays Claire, Claire pays Bob, and Bob pays ( rebalances ) Alice. At the end of this trick everyone still has the same total amount of funds, but the channels have been re-balanced. You would use HTLC contracts to perform this.. Which work just as well off chain as on."),(0,i.kt)("p",null,"Running this from the command line can be quite.. extensive.. But if we simplify this a bit.. and change it to a single signature.. We can play with the transaction script in different scenarios.."),(0,i.kt)("p",null,"So in this simplified - just to play - version.."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0xFF")," is the settlement key ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"0xEE")," is the update key"),(0,i.kt)("p",null,"The script we use is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LET st=STATE(99)\nLET ps=PREVSTATE(99)\n\nIF st EQ ps AND @COINAGE GT 20 AND SIGNEDBY(0xFF) THEN\n    RETURN TRUE\nELSEIF st GT ps AND SIGNEDBY(0xEE) THEN\n    RETURN TRUE \nENDIF\n")),(0,i.kt)("p",null,"So - we are assuming the users sign correctly.."),(0,i.kt)("p",null,"We can now run.."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'runscript script:"LET st=STATE(99) LET ps=PREVSTATE(99) IF st EQ ps AND @COINAGE GT 20 AND SIGNEDBY(0xFF) THEN RETURN TRUE ELSEIF st GT ps AND SIGNEDBY(0xEE) THEN RETURN TRUE ENDIF" globals:{"@COINAGE":"23"} state:{"99":"0"} prevstate:{"99":"0"} signatures:["0xFF"]\n')),(0,i.kt)("p",null,"..and at least play with various scenarios. This variant returns TRUE."))}h.isMDXComponent=!0}}]);