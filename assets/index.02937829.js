import{d as e,g as t,h as n,o as i,i as o,w as l,j as s,m as a}from"./index.02d1965c.js";import"./_stringToArray.2de96d92.js";import"./domUtils.be3edd39.js";import{a as r}from"./index.daf19870.js";import"./RightOutlined.d46e4d56.js";import"./useTimeout.5f562c84.js";import"./index.46df4a2f.js";import"./animation.218b0c8c.js";import"./useScrollTo.b870f612.js";import{_ as d}from"./index.5c3eb61c.js";import"./usePageContext.91d46251.js";import{u as c}from"./useContextMenu.754111e7.js";var p=e({components:{CollapseContainer:r,PageWrapper:d},setup(){const[e]=c(),{createMessage:n}=t();return{handleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})},handleMultipleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const u=a("Right Click on me"),m=a("Right Click on me");p.render=function(e,t,a,r,d,c){const p=n("a-button"),b=n("CollapseContainer"),f=n("PageWrapper");return i(),o(f,{title:"右键菜单示例"},{default:l((()=>[s(b,{title:"Simple"},{default:l((()=>[s(p,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[u])),_:1},8,["onContextmenu"])])),_:1}),s(b,{title:"Multiple",class:"mt-4"},{default:l((()=>[s(p,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[m])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default p;