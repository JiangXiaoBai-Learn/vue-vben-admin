import{d as l,j as a,aT as s,bF as n,ab as t,bG as e,m as u,bO as i,bQ as d}from"./index.02d1965c.js";import"./_stringToArray.2de96d92.js";import"./domUtils.be3edd39.js";import{a as o}from"./index.daf19870.js";import"./RightOutlined.d46e4d56.js";import"./useTimeout.5f562c84.js";import"./useECharts.1c08e103.js";import"./props.f48aca0b.js";import r from"./TrendLine.d923f95a.js";import"./index.46df4a2f.js";import"./animation.218b0c8c.js";import"./useScrollTo.b870f612.js";const p="flow-analysis";var f=l({name:"AnalysisFLow",setup(){const l=()=>a(n,null,{default:()=>a(t,null,[a(e,{md:24,lg:8},{default:()=>a(o,{title:"整体流量评分",canExpan:!1,class:`${p}__left`},{default:()=>a("div",null,[a("div",{class:`${p}__score`},[u("86.2"),a("span",null,[u("分")])]),a("div",{class:`${p}__rank`},[u("排名"),a("span",null,[u("前20%")])]),a(i,{percent:70,showInfo:!1,status:"active"},null),a(d,null,null),a("ul",{class:`${p}__rs`},[a("li",null,[a("span",null,[u("平均分")]),a("span",null,[u("77.5")])]),a("li",null,[a("span",null,[u("最高分")]),a("span",null,[u("99.5")])]),a("li",null,[a("span",null,[u("最低分")]),a("span",null,[u("56.5")])])])])})}),a(e,{md:24,lg:16},{default:()=>a(o,{title:"整体流量趋势",canExpan:!1},{default:()=>a(r,null,null)})})])});return()=>a(s,{class:p,"default-active-key":"1"},{default:()=>[a(s.TabPane,{key:"1",tab:"产品一"},{default:()=>l()}),a(s.TabPane,{key:"2",tab:"产品二"},{default:()=>l()}),a(s.TabPane,{key:"3",tab:"产品三"},{default:()=>l()})]})}});export default f;