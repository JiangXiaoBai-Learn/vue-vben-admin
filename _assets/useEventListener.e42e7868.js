import{r as e,aN as t,aI as n,f as o}from"./index.fa77065c.js";import{u as a}from"./useDebounce.d84b3497.js";function s({el:s=window,name:i,listener:r,options:m,autoRemove:u=!0,isDebounce:v=!0,wait:c=80}){let d=()=>{};const f=e(!1);if(s){const l=e(s),[p]=v?a(r,c):t(r,c),b=c?p:r,w=e=>{f.value=!0,e.removeEventListener(i,b,m)},E=e=>e.addEventListener(i,b,m),j=n(l,((e,t,n)=>{e&&(!o(f)&&E(e),n((()=>{u&&w(e)})))}),{immediate:!0});d=()=>{w(l.value),j()}}return{removeEvent:d}}export{s as u};