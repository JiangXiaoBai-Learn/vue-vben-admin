import{a as e,r as t,ba as a,o as r,j as o}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import"./useTimeout.f7769a48.js";import{u as i,a as s}from"./useECharts.2b7bd19d.js";import"./useDebounce.d84b3497.js";import"./useEventListener.e42e7868.js";import"./useBreakpoint.ceda980b.js";import{g as l}from"./data.db4a27d5.js";var n=e({props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=t(null),{setOptions:r}=i(e),{barData:o,lineData:n,category:c}=l;return a((()=>{r({backgroundColor:"#0f375f",tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},legend:{data:["line","bar"],textStyle:{color:"#ccc"}},xAxis:{data:c,axisLine:{lineStyle:{color:"#ccc"}}},yAxis:{splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}}},series:[{name:"line",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:15,data:n},{name:"bar",type:"bar",barWidth:10,itemStyle:{normal:{barBorderRadius:5,color:new s.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#14c8d4"},{offset:1,color:"#43eec6"}])}},data:o},{name:"line",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{normal:{color:new s.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(20,200,212,0.5)"},{offset:.2,color:"rgba(20,200,212,0.2)"},{offset:1,color:"rgba(20,200,212,0)"}])}},z:-12,data:n},{name:"dotted",type:"pictorialBar",symbol:"rect",itemStyle:{normal:{color:"#0f375f"}},symbolRepeat:!0,symbolSize:[12,4],symbolMargin:1,z:-10,data:n}]})})),{chartRef:e}}});n.render=function(e,t,a,i,s,l){return r(),o("div",{ref:"chartRef",style:{height:e.height,width:e.width}},null,4)};export default n;