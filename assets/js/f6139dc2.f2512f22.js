"use strict";(self.webpackChunkkushalarya_com=self.webpackChunkkushalarya_com||[]).push([[7356],{3825:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=n(5893),i=n(4137);const l={},s="Digital Solargraphy",o={id:"ProjectLogs/DigitalSolargraphy",title:"Digital Solargraphy",description:"Logging all the progress here",source:"@site/docs/ProjectLogs/DigitalSolargraphy.md",sourceDirName:"ProjectLogs",slug:"/ProjectLogs/DigitalSolargraphy",permalink:"/notebook/ProjectLogs/DigitalSolargraphy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Philosophy",permalink:"/notebook/Philosophy/"},next:{title:"Pwnagotchi",permalink:"/notebook/Pwnagotchi/"}},a={},c=[{value:"Hardware needed",id:"hardware-needed",level:3},{value:"Hardware details",id:"hardware-details",level:3},{value:"Step 1",id:"step-1",level:4},{value:"Open Questions",id:"open-questions",level:3}];function d(e){const r={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"digital-solargraphy",children:"Digital Solargraphy"}),"\n",(0,t.jsx)(r.p,{children:"Logging all the progress here"}),"\n",(0,t.jsxs)(r.p,{children:["Status: ",(0,t.jsx)(r.strong,{children:"In Progress"})]}),"\n",(0,t.jsxs)(r.p,{children:["Stage: ",(0,t.jsx)(r.strong,{children:"POC"})]}),"\n",(0,t.jsx)(r.p,{children:"Goals:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Should be able to take a picture on boot"}),"\n",(0,t.jsx)(r.li,{children:"Shutdown after capturing & saving picture"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"hardware-needed",children:"Hardware needed"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Raspberry Pi Zero W"}),"\n",(0,t.jsx)(r.li,{children:"Camera"}),"\n",(0,t.jsx)(r.li,{children:"USB to UART board"}),"\n",(0,t.jsx)(r.li,{children:"WittyPi4 - ordered - will use for future improvements"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"hardware-details",children:"Hardware details"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Raspberry pi zero w","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Processor -> BCM2835"}),"\n",(0,t.jsx)(r.li,{children:"ARM port -> arm6hf"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["Camera","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"5MP with fisheye lense"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"step-1",children:"Step 1"}),"\n",(0,t.jsxs)(r.p,{children:["Building Operating System\n",(0,t.jsx)(r.em,{children:"Why?"})," Need for quick boot"]}),"\n",(0,t.jsx)(r.p,{children:"Using Buildroot (buildroot-2023.02.6.tar.gz)"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"sudo apt install sed make binutils gcc g++ bash patch gzip bzip2 perl tar cpio bc unzip rsync wget libncurses-dev\n\nwget https://buildroot.org/downloads/buildroot-2023.02.6.tar.gz\ntar xvzf buildroot-2023.02.6.tar.gz\ncd buildroot-2023.02.6\n\nmake list-defconfigs # select raspberrypi0w_defconfig -> save -> name your .config file\nmake menuconfig # for adding whatever you want to add in OS -> save\nmake all\n"})}),"\n",(0,t.jsx)(r.p,{children:"2-3 hours for building image\nBuild stuck,\nrestarted the build,\nit's been 12+ hrs, still building."}),"\n",(0,t.jsx)(r.h3,{id:"open-questions",children:"Open Questions"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"can i use a soda can instead of 3D printing the case ?"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"how will i fit ND filter ?"}),"\n",(0,t.jsx)(r.li,{children:"High temperature withstand"}),"\n",(0,t.jsx)(r.li,{children:"Waterprofing ?"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"can i use PVC Pipe for the case ?"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"how will i fit ND filter ?"}),"\n",(0,t.jsx)(r.li,{children:"High temperature withstand"}),"\n",(0,t.jsx)(r.li,{children:"Waterprofing ?"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.ah)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4137:(e,r,n)=>{n.d(r,{ah:()=>c});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=t.createContext({}),c=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,g=p["".concat(a,".").concat(u)]||p[u]||d[u]||l;return n?t.createElement(g,s(s({ref:r},h),{},{components:n})):t.createElement(g,s({ref:r},h))}));h.displayName="MDXCreateElement"}}]);