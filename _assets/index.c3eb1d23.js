let e=document.createElement("style");e.innerHTML=".bg-gray-700[data-v-d7d444d6]{background:#4a5568}",document.head.appendChild(e);import{a as s,r as c,h as l,aT as t,aU as a,i as n,o as r,j as i,k as d,aW as o,p as u}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.f78223a8.js";import{B as m}from"./BugOutlined.7a6cfddc.js";import"./CheckOutlined.f93c980e.js";import"./DoubleRightOutlined.3c333eda.js";import{R as f}from"./RightOutlined.30a2c84e.js";import"./useTimeout.f7769a48.js";import"./useDebounce.d84b3497.js";import"./useEventListener.e42e7868.js";import"./domUtils.aee0a6fd.js";import{B as p}from"./index.78fe6d86.js";var g=s({components:{BasicDragVerify:p,BugOutlined:m,RightOutlined:f},setup(){const{createMessage:e}=l();return{handleSuccess:function(s){const{time:c}=s;e.success(`校验成功,耗时${c}秒`)},el1:c(null),el2:c(null),el3:c(null),el4:c(null),el5:c(null),handleBtnClick:function(e){e&&e.$.resume()}}}});const y=o("data-v-d7d444d6");t("data-v-d7d444d6");const h={class:"p-10"},j={class:"flex justify-center p-4 items-center bg-gray-700"},k=u("还原"),S={class:"flex justify-center p-4 items-center bg-gray-700"},b=u("还原"),v={class:"flex justify-center p-4 items-center bg-gray-700"},x=u("还原"),B={class:"flex justify-center p-4 items-center bg-gray-700"},C=u("还原"),_={class:"flex justify-center p-4 items-center bg-gray-700"},O={key:0},R=u(" 成功 "),T={key:1},D=u(" 拖动 "),E=u("还原");a();const I=y(((e,s,c,l,t,a)=>{const o=n("BasicDragVerify"),u=n("a-button"),m=n("BugOutlined"),f=n("RightOutlined");return r(),i("div",h,[d("div",j,[d(o,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),d(u,{color:"primary",class:"ml-2",onClick:s[1]||(s[1]=s=>e.handleBtnClick(e.el1))},{default:y((()=>[k])),_:1})]),d("div",S,[d(o,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),d(u,{color:"primary",class:"ml-2",onClick:s[2]||(s[2]=s=>e.handleBtnClick(e.el2))},{default:y((()=>[b])),_:1})]),d("div",v,[d(o,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{background:"#018ffb"}},null,8,["onSuccess"]),d(u,{color:"primary",class:"ml-2",onClick:s[3]||(s[3]=s=>e.handleBtnClick(e.el3))},{default:y((()=>[x])),_:1})]),d("div",B,[d(o,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:y((e=>[e?(r(),i(m,{key:0})):(r(),i(f,{key:1}))])),_:1},8,["onSuccess"]),d(u,{color:"primary",class:"ml-2",onClick:s[4]||(s[4]=s=>e.handleBtnClick(e.el4))},{default:y((()=>[C])),_:1})]),d("div",_,[d(o,{ref:"el5",onSuccess:e.handleSuccess},{text:y((e=>[e?(r(),i("div",O,[d(m),R])):(r(),i("div",T,[D,d(f)]))])),_:1},8,["onSuccess"]),d(u,{color:"primary",class:"ml-2",onClick:s[5]||(s[5]=s=>e.handleBtnClick(e.el5))},{default:y((()=>[E])),_:1})])])}));g.render=I,g.__scopeId="data-v-d7d444d6";export default g;