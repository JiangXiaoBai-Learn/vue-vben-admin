import{d as e,bI as t,h as i,o as s,i as d,j as o,w as a,m as r,l as n}from"./index.02d1965c.js";import"./index.15b9a23c.js";import"./_stringToArray.2de96d92.js";import"./domUtils.be3edd39.js";import"./index.fb8d6796.js";import"./index.08e233ae.js";import"./index.daf19870.js";import"./CheckOutlined.bd4e8418.js";import"./index.e7faca86.js";import{_ as m,T as l}from"./index.7e005ddd.js";import"./FullscreenOutlined.247db61e.js";import"./RightOutlined.d46e4d56.js";import"./SettingOutlined.b000a1ab.js";import"./useTimeout.5f562c84.js";import"./index.46df4a2f.js";import"./animation.218b0c8c.js";import"./useScrollTo.b870f612.js";import"./useAttrs.c1394557.js";import"./useWindowSizeFn.9d82b09a.js";import"./index.41a5a7ee.js";import"./uuid.a6cec785.js";import"./download.cbcf9755.js";import"./useForm.c6ae5496.js";import"./useSortable.8c19a0dd.js";import"./useExpose.0eb8f918.js";import{u as c}from"./useTable.aa6b17a2.js";import{d as p}from"./table.925db40d.js";const u=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var j=e({components:{BasicTable:m,TableImg:l,Tag:t},setup(){const[e]=c({title:"自定义列内容",api:p,columns:u,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const b={class:"p-4"};j.render=function(e,t,m,l,c,p){const u=i("Tag"),j=i("TableImg"),g=i("BasicTable");return s(),d("div",b,[o(g,{onRegister:e.registerTable},{id:a((({record:e})=>[r(" ID: "+n(e.id),1)])),no:a((({record:e})=>[o(u,{color:"green"},{default:a((()=>[r(n(e.no),1)])),_:2},1024)])),img:a((()=>[o(j,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:a((({record:e})=>[o(u,{color:"green"},{default:a((()=>[r(n(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default j;