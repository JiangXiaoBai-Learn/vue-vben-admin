import{a as e,i as r,o as t,j as a,w as s,k as i,x as o,p as n}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import{B as c,a as l}from"./index.2b6ce76c.js";import"./index.ff9490e7.js";import"./LeftOutlined.30751ba4.js";import"./RightOutlined.30a2c84e.js";var p=e({components:{BasicDrawer:c},setup(){const[e,{closeDrawer:r}]=l();return{register:e,closeDrawer:r}}});const d=n(" Drawer Info. "),f=n("内部关闭drawer");p.render=function(e,n,c,l,p,m){const u=r("a-button"),w=r("BasicDrawer");return t(),a(w,o(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:s((()=>[d,i(u,{type:"primary",onClick:e.closeDrawer},{default:s((()=>[f])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default p;