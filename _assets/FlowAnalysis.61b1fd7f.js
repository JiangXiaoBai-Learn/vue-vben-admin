let s=document.createElement("style");s.innerHTML=".flow-analysis{width:100%;background:#fff}.flow-analysis__left{padding:10px 20px!important;border-right:1px solid rgba(0,0,0,.06);border-radius:0}.flow-analysis__score{margin-top:20px;font-size:30px;line-height:38px;color:rgba(0,0,0,.85)}.flow-analysis__score span{font-size:20px;line-height:28px;color:rgba(0,0,0,.85)}.flow-analysis__rank{margin:16px 0;font-size:12px;line-height:20px;color:#7c8087}.flow-analysis__rank span{display:inline-block;margin-left:10px;color:#1c1d21}.flow-analysis__rs li{display:flex;line-height:28px;justify-content:space-between}.flow-analysis__rs li span:nth-child(1){font-size:14px;color:#1c1d21}.flow-analysis__rs li span:nth-child(2){font-size:16px;color:#1c1d21}",document.head.appendChild(s);import{a,T as e,ch as n,ah as i,cc as l}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b1b41282.js";import"./CheckOutlined.91529706.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.f78223a8.js";import{T as t}from"./index.4115c899.js";import"./UpOutlined.5b0a5c28.js";import"./LeftOutlined.bfe820e8.js";import{D as o}from"./index.f8fbd3c1.js";import{P as r}from"./index.4e4bcd90.js";import{s as p}from"./index.aebc9d78.js";import"./index.ff9490e7.js";import"./RightOutlined.30a2c84e.js";import"./useTimeout.f7769a48.js";import"./useECharts.2b7bd19d.js";import"./useDebounce.d84b3497.js";import"./useEventListener.e42e7868.js";import"./useBreakpoint.ceda980b.js";import"./props.c31746e0.js";import"./resizeEvent.f3325c29.js";import"./domUtils.aee0a6fd.js";import"./animation.6d838565.js";import"./index.83d2c811.js";import c from"./TrendLine.d1a16087.js";const d="flow-analysis";var m=a({name:"AnalysisFLow",setup(){const s=()=>e(n,null,(()=>e(i,null,e(l,{md:24,lg:8},(()=>e(p,{title:"整体流量评分",canExpan:!1,class:`${d}__left`},(()=>e("div",null,e("div",{class:`${d}__score`},"86.2",e("span",null,"分")),e("div",{class:`${d}__rank`},"排名",e("span",null,"前20%")),e(r,{percent:70,showInfo:!1,status:"active"}),e(o,null),e("ul",{class:`${d}__rs`},e("li",null,e("span",null,"平均分"),e("span",null,"77.5")),e("li",null,e("span",null,"最高分"),e("span",null,"99.5")),e("li",null,e("span",null,"最低分"),e("span",null,"56.5")))))))),e(l,{md:24,lg:16},(()=>e(p,{title:"整体流量趋势",canExpan:!1},(()=>e(c,null))))))));return()=>e(t,{class:d,"default-active-key":"1"},(()=>[e(t.TabPane,{key:"1",tab:"产品一"},(()=>s())),e(t.TabPane,{key:"2",tab:"产品二"},(()=>s())),e(t.TabPane,{key:"3",tab:"产品三"},(()=>s()))]))}});export default m;