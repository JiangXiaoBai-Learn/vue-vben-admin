let e=document.createElement("style");e.innerHTML=".desc-wrap[data-v-e07fa688]{padding:16px;background:#fff}",document.head.appendChild(e);import{a as t,aT as i,aU as s,i as r,o,j as a,k as d,aW as n}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.e19633cb.js";import"./index.90de1e74.js";import"./omit.439d1869.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b1b41282.js";import"./CheckOutlined.91529706.js";import"./index.6b93ba53.js";import"./index.bf0e8280.js";import"./index.8f234465.js";import"./colors.97dd2376.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.f78223a8.js";import"./index.5429caf9.js";import"./UpOutlined.5b0a5c28.js";import"./LeftOutlined.bfe820e8.js";import"./DownOutlined.3a561222.js";import"./index.94d80465.js";import"./index.f8fbd3c1.js";import"./index.d5fe47b2.js";import"./zh_CN.0242bd16.js";import"./index.4e4bcd90.js";import"./index.8f50292b.js";import"./CaretDownFilled.48ea7d98.js";import"./index.aebc9d78.js";import"./index.cff9382b.js";import"./CheckOutlined.f93c980e.js";import"./CloseOutlined.06d38e20.js";import{s as m}from"./EditTableHeaderIcon.fb45be89.js";import"./index.e727506c.js";import"./index.ff9490e7.js";import"./LeftOutlined.30751ba4.js";import"./functional.696d7325.js";import"./RightOutlined.30a2c84e.js";import"./useTimeout.f7769a48.js";import"./useDebounce.d84b3497.js";import"./useEventListener.e42e7868.js";import"./useBreakpoint.ceda980b.js";import"./resizeEvent.f3325c29.js";import"./domUtils.aee0a6fd.js";import"./animation.6d838565.js";import"./index.83d2c811.js";import{D as p}from"./index.06164321.js";import"./index.91b8bb1e.js";import"./useWindowSizeFn.2392dc8b.js";import"./uuid.40269c00.js";import"./download.5b6067ac.js";import"./useForm.cd7e42d8.js";import"./useFullScreen.8bd76ed4.js";import"./index.eedf2b72.js";import{u as c}from"./useTable.04ebb0fc.js";import{refundSchema as l,refundData as u,personSchema as j,personData as f,refundTableData as b,refundTableSchema as x,refundTimeTableSchema as h,refundTimeTableData as g}from"./data.b41a91fe.js";var T=t({components:{Description:p,BasicTable:m},setup(){const[e]=c({title:"退货商品",dataSource:b,columns:x,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,i=0;return e.forEach((e=>{t+=e.t5,i+=e.t6})),[{t1:"总计",t5:t,t6:i}]}}),[t]=c({title:"退货进度",columns:h,pagination:!1,dataSource:g,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:l,refundData:u,personSchema:j,personData:f}}});const D=n("data-v-e07fa688");i("data-v-e07fa688");const S={class:"m-5 desc-wrap"};s();const v=D(((e,t,i,s,n,m)=>{const p=r("a-page-header"),c=r("Description"),l=r("a-divider"),u=r("BasicTable");return o(),a("div",null,[d(p,{title:"基础详情页",ghost:!1}),d("div",S,[d(c,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),d(l),d(c,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),d(l),d(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),d(l),d(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])])])}));T.render=v,T.__scopeId="data-v-e07fa688";export default T;