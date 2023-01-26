"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8382],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9739:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:8},s="Restoring lost funds",c={unversionedId:"runanode/restorefunds",id:"runanode/restorefunds",title:"Restoring lost funds",description:"If you lose access to your node or you become out of sync with the chain, you can either:",source:"@site/docs/runanode/restorefunds.md",sourceDirName:"runanode",slug:"/runanode/restorefunds",permalink:"/docs/runanode/restorefunds",editUrl:"https://github.com/minima-global/minidocs/docs/runanode/restorefunds.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Securing your funds",permalink:"/docs/runanode/securefunds"},next:{title:"Archive Nodes",permalink:"/docs/runanode/archivenodes"}},p={},u=[{value:"Restoring from a backup",id:"restoring-from-a-backup",level:2},{value:"Restoring from an Archive node",id:"restoring-from-an-archive-node",level:2},{value:"Partial resync from an Archive node",id:"partial-resync-from-an-archive-node",level:3},{value:"Android",id:"android",level:4},{value:"Using the Terminal",id:"using-the-terminal",level:4},{value:"Full restore from an Archive node",id:"full-restore-from-an-archive-node",level:3},{value:"Android",id:"android-1",level:4},{value:"Using the Terminal",id:"using-the-terminal-1",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"restoring-lost-funds"},"Restoring lost funds"),(0,a.kt)("p",null,"If you lose access to your node or you become out of sync with the chain, you can either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Restore your node from a valid backup"),(0,a.kt)("li",{parentName:"ul"},"Restore your node from an Archive node using your 24 word seed phrase"),(0,a.kt)("li",{parentName:"ul"},"Resync to the latest block using an Archive node (no seed phrase required)")),(0,a.kt)("h2",{id:"restoring-from-a-backup"},"Restoring from a backup"),(0,a.kt)("p",null,"For a backup to be valid it must be:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"recent, within 1-2 months old"),(0,a.kt)("li",{parentName:"ol"},"taken whilst you were in sync with with the chain (correct tip block)")),(0,a.kt)("p",null,"Restoring from a backup is the fastest way to get access to your lost funds."),(0,a.kt)("p",null,"For details on how to restore a backup, select your platform of choice from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/runanode/get_started"},"Get Started")," page and see the ",(0,a.kt)("strong",{parentName:"p"},"FAQ")," section."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Your node will be wiped and restored.")),(0,a.kt)("h2",{id:"restoring-from-an-archive-node"},"Restoring from an Archive node"),(0,a.kt)("p",null,"If your node is behind on the chain but you still have access to your node, you can resync to the latest block by performing a ",(0,a.kt)("a",{parentName:"p",href:"#partial-resync-from-an-archive-node"},"partial resync")," from an Archive node. Your funds will NOT be wiped during this process. "),(0,a.kt)("p",null,"If you do not have a valid backup or you have lost access to your node, you can restore your coins by performing a ",(0,a.kt)("a",{parentName:"p",href:"#full-restore-from-an-archive-node"},"full restore")," from an archive node using your 24 word seed phrase."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Restoring or resyncing from an Archive node should only be used as a last resort.")))),(0,a.kt)("h3",{id:"partial-resync-from-an-archive-node"},"Partial resync from an Archive node"),(0,a.kt)("p",null,"Your coins will remain safe throughout this process."),(0,a.kt)("h4",{id:"android"},"Android"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From an existing node, go to the Backup/Restore page, click ",(0,a.kt)("strong",{parentName:"li"},"Archive Node")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"SEED PHRASE COMPLETE")," without entering your seed phrase"),(0,a.kt)("li",{parentName:"ol"},"Enter the Archive node host (IP:Port) of the Archive node you wish to resync from e.g. 10.198.89.98:9001"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"OK"),", the resync will begin, please be patient")),(0,a.kt)("p",null,"Once complete, you will be on the correct tip block."),(0,a.kt)("h4",{id:"using-the-terminal"},"Using the Terminal"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From an existing node that is out of sync with the latest tip block, login to your MiniDapp System (MDS)"),(0,a.kt)("li",{parentName:"ol"},"Open the Terminal MiniDapp"),(0,a.kt)("li",{parentName:"ol"},"Enter the following command, WITHOUT providing your 24 word seed phrase and the host (ip:port) of an Archive node:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"archive action:resync host:\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Press Enter"),(0,a.kt)("li",{parentName:"ol"},"The resync will begin, please be patient"),(0,a.kt)("li",{parentName:"ol"},"Check the logs to see when the process is complete"),(0,a.kt)("li",{parentName:"ol"},"Reload your MiniDapp System - you may have to accept the security warning again ")),(0,a.kt)("p",null,"Once complete, you will be on the correct tip block."),(0,a.kt)("p",null,"For further help using the ",(0,a.kt)("inlineCode",{parentName:"p"},"archive")," command, use ",(0,a.kt)("inlineCode",{parentName:"p"},"help command:archive")," from the Terminal."),(0,a.kt)("h3",{id:"full-restore-from-an-archive-node"},"Full restore from an Archive node"),(0,a.kt)("p",null,"Performing a full archive restore on an existing node will WIPE the node completely before restoring."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ONLY to be used if you have no backup.")," "),(0,a.kt)("h4",{id:"android-1"},"Android"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On your new device that you wish to restore to, go to the Backup/Restore page, click ",(0,a.kt)("strong",{parentName:"li"},"Archive Node")),(0,a.kt)("li",{parentName:"ol"},"Enter your seed phrase, selecting from the available words when prompted"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"SEED PHRASE COMPLETE")),(0,a.kt)("li",{parentName:"ol"},"Enter the Archive node host (IP:Port) of the Archive node you wish to resync from e.g. 10.198.89.98:9001"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"OK"),", the restore will begin, please be patient")),(0,a.kt)("p",null,"Once complete, your coins will be restored."),(0,a.kt)("h4",{id:"using-the-terminal-1"},"Using the Terminal"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set up your new clean node that you wish to restore to and login to your MiniDapp System (MDS)"),(0,a.kt)("li",{parentName:"ol"},"Open the Terminal MiniDapp"),(0,a.kt)("li",{parentName:"ol"},"Enter the following command, providing your 24 word seed phrase and the host (ip:port) of an Archive node:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'archive action:resync phrase:"YOUR 24 WORD SEED PHRASE HERE" host:\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Press Enter"),(0,a.kt)("li",{parentName:"ol"},"The restore will begin, please be patient"),(0,a.kt)("li",{parentName:"ol"},"Check the logs to see when the process is complete"),(0,a.kt)("li",{parentName:"ol"},"Reload your MiniDapp System - you may have to accept the security warning again ")),(0,a.kt)("p",null,"Once complete, your coins will be restored."))}m.isMDXComponent=!0}}]);