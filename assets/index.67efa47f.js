import{d as e,cp as r,h as o,o as a,i as s,w as i,j as t,m as n}from"./index.02d1965c.js";import"./index.15b9a23c.js";import"./_stringToArray.2de96d92.js";import"./domUtils.be3edd39.js";import"./index.fb8d6796.js";import"./index.08e233ae.js";import"./index.daf19870.js";import{u as p}from"./index.85b1fa58.js";import"./index.e7faca86.js";import"./FullscreenOutlined.247db61e.js";import"./RightOutlined.d46e4d56.js";import"./useTimeout.5f562c84.js";import"./index.46df4a2f.js";import"./animation.218b0c8c.js";import"./useScrollTo.b870f612.js";import"./useAttrs.c1394557.js";import"./useWindowSizeFn.9d82b09a.js";import"./index.41a5a7ee.js";import"./uuid.a6cec785.js";import"./download.cbcf9755.js";import"./useForm.c6ae5496.js";import{_ as m}from"./index.5c3eb61c.js";import"./usePageContext.91d46251.js";import d from"./Drawer1.529ed4d2.js";import c from"./Drawer2.eb9e5354.js";import w from"./Drawer3.cab43e48.js";import l from"./Drawer4.84a9c66c.js";import D from"./Drawer5.e40471f5.js";var g=e({components:{Alert:r,PageWrapper:m,Drawer1:d,Drawer2:c,Drawer3:w,Drawer4:l,Drawer5:D},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[a,{openDrawer:s}]=p(),[i,{openDrawer:t}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:a,openDrawer2:s,register3:i,openDrawer3:t,register4:n,register5:d,openDrawer5:c,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const u=n("打开Drawer"),f=n("打开Drawer"),j=n("打开Drawer"),y=n("打开Drawer并传递数据"),b=n("打开详情Drawer");g.render=function(e,r,n,p,m,d){const c=o("Alert"),w=o("a-button"),l=o("Drawer1"),D=o("Drawer2"),g=o("Drawer3"),x=o("Drawer4"),R=o("Drawer5"),C=o("PageWrapper");return a(),s(C,{title:"抽屉组件使用示例"},{default:i((()=>[t(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),t(w,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:i((()=>[u])),_:1},8,["onClick"]),t(c,{message:"内外同时控制显示隐藏","show-icon":""}),t(w,{type:"primary",class:"my-4",onClick:r[1]||(r[1]=r=>e.openDrawer2(!0))},{default:i((()=>[f])),_:1}),t(c,{message:"自适应高度/显示footer","show-icon":""}),t(w,{type:"primary",class:"my-4",onClick:r[2]||(r[2]=r=>e.openDrawer3(!0))},{default:i((()=>[j])),_:1}),t(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),t(w,{type:"primary",class:"my-4",onClick:e.send},{default:i((()=>[y])),_:1},8,["onClick"]),t(c,{message:"详情页模式","show-icon":""}),t(w,{type:"primary",class:"my-4",onClick:r[3]||(r[3]=r=>e.openDrawer5(!0))},{default:i((()=>[b])),_:1}),t(l,{onRegister:e.register1},null,8,["onRegister"]),t(D,{onRegister:e.register2},null,8,["onRegister"]),t(g,{onRegister:e.register3},null,8,["onRegister"]),t(x,{onRegister:e.register4},null,8,["onRegister"]),t(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default g;