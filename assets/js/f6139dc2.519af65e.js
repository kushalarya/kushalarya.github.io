"use strict";(self.webpackChunkkushalarya_com=self.webpackChunkkushalarya_com||[]).push([[7356],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),g=n,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return r?a.createElement(m,o(o({ref:t},s),{},{components:r})):a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8024:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(4137));const l={},o="Digital Solargraphy",i={unversionedId:"ProjectLogs/DigitalSolargraphy",id:"ProjectLogs/DigitalSolargraphy",title:"Digital Solargraphy",description:"Logging all the progress here",source:"@site/docs/ProjectLogs/DigitalSolargraphy.md",sourceDirName:"ProjectLogs",slug:"/ProjectLogs/DigitalSolargraphy",permalink:"/notebook/ProjectLogs/DigitalSolargraphy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Movies",permalink:"/notebook/Movies/"},next:{title:"Pwnagotchi",permalink:"/notebook/Pwnagotchi/"}},p={},u=[{value:"Hardware needed",id:"hardware-needed",level:3},{value:"Hardware details",id:"hardware-details",level:3},{value:"Step 1",id:"step-1",level:4},{value:"Open Questions",id:"open-questions",level:3}],s={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"digital-solargraphy"},"Digital Solargraphy"),(0,n.kt)("p",null,"Logging all the progress here"),(0,n.kt)("p",null,"Status: ",(0,n.kt)("strong",{parentName:"p"},"In Progress")),(0,n.kt)("p",null,"Stage: ",(0,n.kt)("strong",{parentName:"p"},"POC")),(0,n.kt)("p",null,"Goals:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Should be able to take a picture on boot "),(0,n.kt)("li",{parentName:"ol"},"Shutdown after capturing & saving picture ")),(0,n.kt)("h3",{id:"hardware-needed"},"Hardware needed"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Raspberry Pi Zero W"),(0,n.kt)("li",{parentName:"ol"},"Camera"),(0,n.kt)("li",{parentName:"ol"},"USB to UART board"),(0,n.kt)("li",{parentName:"ol"},"WittyPi4 - ordered - will use for future improvements ")),(0,n.kt)("h3",{id:"hardware-details"},"Hardware details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Raspberry pi zero w",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Processor -> BCM2835"),(0,n.kt)("li",{parentName:"ul"},"ARM port -> arm6hf"))),(0,n.kt)("li",{parentName:"ul"},"Camera",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"5MP with fisheye lense")))),(0,n.kt)("h4",{id:"step-1"},"Step 1"),(0,n.kt)("p",null,"Building Operating System\n",(0,n.kt)("em",{parentName:"p"},"Why?")," Need for quick boot"),(0,n.kt)("p",null,"Using Buildroot (buildroot-2023.02.6.tar.gz)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install sed make binutils gcc g++ bash patch gzip bzip2 perl tar cpio bc unzip rsync wget libncurses-dev\n\nwget https://buildroot.org/downloads/buildroot-2023.02.6.tar.gz\ntar xvzf buildroot-2023.02.6.tar.gz\ncd buildroot-2023.02.6\n\nmake list-defconfigs # select raspberrypi0w_defconfig -> save -> name your .config file\nmake menuconfig # for adding whatever you want to add in OS -> save\nmake all\n")),(0,n.kt)("p",null,"2-3 hours for building image"),(0,n.kt)("h3",{id:"open-questions"},"Open Questions"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"can i use a soda can instead of 3D printing the case ?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"how will i fit ND filter ?"),(0,n.kt)("li",{parentName:"ul"},"High temperature withstand "),(0,n.kt)("li",{parentName:"ul"},"Waterprofing ?"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"can i use PVC Pipe for the case ?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"how will i fit ND filter ?"),(0,n.kt)("li",{parentName:"ul"},"High temperature withstand"),(0,n.kt)("li",{parentName:"ul"},"Waterprofing ?")))))}d.isMDXComponent=!0}}]);