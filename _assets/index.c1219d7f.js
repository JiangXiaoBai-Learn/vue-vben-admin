let e=document.createElement("style");e.innerHTML=".demo-box[data-v-2a8e92fa]{display:flex;width:100%;height:300px;font-size:24px;color:#fff;background:#408ede;border-radius:10px;justify-content:center;align-items:center}",document.head.appendChild(e);import{a as t,r as a,aT as s,aU as i,i as n,o,j as c,k as d,n as r,aW as l}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import{A as u}from"./index.bf0e8280.js";import"./useDebounce.d84b3497.js";import"./useEventListener.e42e7868.js";import{s as f}from"./index.eedf2b72.js";var m=t({components:{ClickOutSide:f,Alert:u},setup(){const e=a("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const p=l("data-v-2a8e92fa");s("data-v-2a8e92fa");const k={class:"p-10"};i();const x=p(((e,t,a,s,i,l)=>{const u=n("Alert"),f=n("ClickOutSide");return o(),c("div",k,[d(u,{message:"点内外部触发事件","show-icon":""}),d(f,{onClickOutside:e.handleClickOutside,class:"flex justify-center mt-10"},{default:p((()=>[d("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},r(e.text),1)])),_:1},8,["onClickOutside"])])}));m.render=x,m.__scopeId="data-v-2a8e92fa";export default m;