let a=document.createElement("style");a.innerHTML=".task-card[data-v-bcc45f4e]{display:flex;width:calc(100% - 24px);height:199px;padding:24px 20px 12px 16px;margin:0 12px 12px;background:#fff;border:1px solid #ececf2;border-radius:12px;flex-direction:column}.task-card-header[data-v-bcc45f4e]{display:flex;width:100%;justify-content:space-between;align-items:center}.task-card__tag[data-v-bcc45f4e]{display:inline-block;padding:4px 6px;font-family:PingFangSC-Regular;font-size:12px;border-radius:6px}.task-card__tag.success[data-v-bcc45f4e]{color:#55d187;background:rgba(85,209,135,.16)}.task-card__tag.warn[data-v-bcc45f4e]{color:#ffa07d;background:#ffd16416}.task-card__tag.done[data-v-bcc45f4e]{color:#0593ff;background:#0593ff16}.task-card__info[data-v-bcc45f4e]{display:flex;flex-direction:column}.task-card__title[data-v-bcc45f4e]{font-family:PingFangSC-Medium;font-size:16px;line-height:24px;color:rgba(0,0,0,.85)}.task-card__desc[data-v-bcc45f4e]{font-family:PingFangSC-Regular;font-size:12px;line-height:21px;color:#8181a5}.task-card__process-nfo[data-v-bcc45f4e]{display:flex;justify-content:space-between}.task-card__process-nfo span[data-v-bcc45f4e]{font-size:14px;line-height:21px;color:#8181a5}.task-card-footer[data-v-bcc45f4e]{display:flex;width:100%;margin-top:16px;align-items:center;justify-content:space-between}.task-card__date[data-v-bcc45f4e]{font-size:12px;line-height:21px;color:#2c3a61}.task-card__date span[data-v-bcc45f4e]{color:#7c8087}.task-card__avatar[data-v-bcc45f4e]{display:flex}",document.head.appendChild(a);import{a as e,v as s,aT as t,aU as c,i as n,o as r,j as i,k as o,n as d,aW as f,p as l}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import"./CheckOutlined.91529706.js";import{A as p}from"./index.cf193492.js";import{P as x}from"./index.4e4bcd90.js";var _=e({name:"GrowCard",components:{Progress:x,Avatar:p},props:{info:{type:Object,default:null}},setup:a=>({prefixCls:"task-card",text:s((()=>{const{status:e}=a.info||{};return"active"===e?"进度正常":"exception"===e?"进度滞后":"项目完成"}))})});const b=f("data-v-bcc45f4e");t("data-v-bcc45f4e");const u=o("span",null,"进度",-1),g=l(" 更新日期: "),v=l("+3");c();const m=b(((a,e,s,t,c,f)=>{const l=n("Progress"),p=n("Avatar");return r(),i("div",{class:a.prefixCls},[o("div",{class:`${a.prefixCls}-header`},[o("div",{class:`${a.prefixCls}__info`},[o("span",{class:`${a.prefixCls}__title`},d(a.info.title),3),o("span",{class:`${a.prefixCls}__desc`},d(a.info.desc),3)],2),o("span",{class:`${a.prefixCls}__tag ${a.info.status}`},d(a.info.text),3)],2),o("div",{class:`${a.prefixCls}-body mt-5`},[o("div",{class:`${a.prefixCls}__process-nfo`},[u,o("span",null,d(a.info.percent)+"%",1)],2),o(l,{percent:a.info.percent,showInfo:!1,status:a.info.status},null,8,["percent","status"])],2),o("div",{class:`${a.prefixCls}-footer`},[o("span",{class:`${a.prefixCls}__date`},[g,o("span",null,d(a.info.updateTime),1)],2),o("div",{class:`${a.prefixCls}__avatar`},[o(p,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),o(p,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),o(p,null,{default:b((()=>[v])),_:1})],2)],2)],2)}));_.render=m,_.__scopeId="data-v-bcc45f4e";export default _;