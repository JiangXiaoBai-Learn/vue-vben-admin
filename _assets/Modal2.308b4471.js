import{a as e,i as s,o as t,j as o,w as i,k as a,x as r,p as l}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import"./CloseOutlined.06d38e20.js";import{B as n,u as d}from"./index.e727506c.js";import"./index.ff9490e7.js";import"./RightOutlined.30a2c84e.js";import"./useTimeout.f7769a48.js";import"./useDebounce.d84b3497.js";import"./resizeEvent.f3325c29.js";import"./index.91b8bb1e.js";import"./useWindowSizeFn.2392dc8b.js";var p=e({components:{BasicModal:n},setup(){const[e,{closeModal:s,setModalProps:t}]=d();return{register:e,closeModal:s,setModalProps:()=>{t({title:"Modal New Title"})}}}});const c=l("从内部关闭弹窗"),m=l("从内部修改title");p.render=function(e,l,n,d,p,u){const f=s("a-button"),j=s("BasicModal");return t(),o(j,r(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:i((()=>[a(f,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:i((()=>[c])),_:1},8,["onClick"]),a(f,{type:"primary",onClick:e.setModalProps},{default:i((()=>[m])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default p;