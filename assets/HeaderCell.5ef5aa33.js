import{d as e,a7 as l,a8 as t,a9 as s,q as a,h as r,o as n,i,w as d,l as o,k as u,ab as c,m as p}from"./index.02d1965c.js";var _=e({name:"TableHeaderCell",components:{EditTableHeaderCell:l((()=>t((()=>__import__("./index.7e005ddd.js").then((function(e){return e.E}))),["/assets/index.7e005ddd.js","/assets/index.5a2a0cd6.css","/assets/index.02d1965c.js","/assets/index.17037a8f.css","/assets/index.15b9a23c.js","/assets/index.be284e2b.css","/assets/domUtils.be3edd39.js","/assets/_stringToArray.2de96d92.js","/assets/index.fb8d6796.js","/assets/index.08e233ae.js","/assets/index.daf19870.js","/assets/index.76e45014.css","/assets/RightOutlined.d46e4d56.js","/assets/useTimeout.5f562c84.js","/assets/index.46df4a2f.js","/assets/index.121e7eba.css","/assets/useScrollTo.b870f612.js","/assets/animation.218b0c8c.js","/assets/index.e7faca86.js","/assets/index.ca1a8c37.css","/assets/FullscreenOutlined.247db61e.js","/assets/useAttrs.c1394557.js","/assets/useWindowSizeFn.9d82b09a.js","/assets/index.41a5a7ee.js","/assets/uuid.a6cec785.js","/assets/download.cbcf9755.js","/assets/CheckOutlined.bd4e8418.js","/assets/SettingOutlined.b000a1ab.js","/assets/useForm.c6ae5496.js","/assets/useSortable.8c19a0dd.js","/assets/useExpose.0eb8f918.js"]))),BasicHelp:l((()=>t((()=>__import__("./BasicHelp.4564ec68.js")),["/assets/BasicHelp.4564ec68.js","/assets/index.02d1965c.js","/assets/index.17037a8f.css","/assets/_stringToArray.2de96d92.js","/assets/domUtils.be3edd39.js","/assets/index.daf19870.js","/assets/index.76e45014.css","/assets/RightOutlined.d46e4d56.js","/assets/useTimeout.5f562c84.js","/assets/index.46df4a2f.js","/assets/index.121e7eba.css","/assets/useScrollTo.b870f612.js","/assets/animation.218b0c8c.js"])))},props:{column:{type:Object,default:{}}},setup(e){const{prefixCls:l}=s("basic-table-header-cell");return{prefixCls:l,getIsEdit:a((()=>{var l;return!!(null==(l=e.column)?void 0:l.edit)})),getTitle:a((()=>{var l;return null==(l=e.column)?void 0:l.customTitle})),getHelpMessage:a((()=>{var l;return null==(l=e.column)?void 0:l.helpMessage}))}}});const g={key:1};_.render=function(e,l,t,s,a,_){const m=r("EditTableHeaderCell"),f=r("BasicHelp");return n(),i(c,null,[e.getIsEdit?(n(),i(m,{key:0},{default:d((()=>[p(o(e.getTitle),1)])),_:1})):(n(),i("span",g,o(e.getTitle),1)),e.getHelpMessage?(n(),i(f,{key:2,text:e.getHelpMessage,class:`${e.prefixCls}__help`},null,8,["text","class"])):u("",!0)],64)};export default _;