import{a as e,i as t,o as i,j as o,k as n,w as s}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.e19633cb.js";import"./index.90de1e74.js";import"./omit.439d1869.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b1b41282.js";import"./CheckOutlined.91529706.js";import{T as d}from"./index.6b93ba53.js";import"./index.bf0e8280.js";import"./colors.97dd2376.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.f78223a8.js";import"./index.5429caf9.js";import"./UpOutlined.5b0a5c28.js";import"./LeftOutlined.bfe820e8.js";import"./DownOutlined.3a561222.js";import"./index.94d80465.js";import"./index.f8fbd3c1.js";import"./index.d5fe47b2.js";import"./zh_CN.0242bd16.js";import"./index.4e4bcd90.js";import"./index.8f50292b.js";import"./CaretDownFilled.48ea7d98.js";import"./CheckOutlined.f93c980e.js";import"./CloseOutlined.06d38e20.js";import{s as r}from"./EditTableHeaderIcon.fb45be89.js";import"./index.e727506c.js";import"./index.ff9490e7.js";import"./LeftOutlined.30751ba4.js";import"./functional.696d7325.js";import"./RightOutlined.30a2c84e.js";import"./useTimeout.f7769a48.js";import"./useDebounce.d84b3497.js";import"./useEventListener.e42e7868.js";import"./useBreakpoint.ceda980b.js";import"./resizeEvent.f3325c29.js";import"./domUtils.aee0a6fd.js";import"./index.91b8bb1e.js";import"./useWindowSizeFn.2392dc8b.js";import"./uuid.40269c00.js";import"./download.5b6067ac.js";import"./useForm.cd7e42d8.js";import"./useFullScreen.8bd76ed4.js";import"./index.eedf2b72.js";import{u as a}from"./useTable.04ebb0fc.js";import{d as l}from"./table.56839355.js";const m=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address",width:260},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var p=e({components:{BasicTable:r,TableAction:d},setup(){const[e]=a({title:"TableAction组件及固定列示例",api:l,columns:m,rowSelection:{type:"radio"},actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const c={class:"p-4"};p.render=function(e,d,r,a,l,m){const p=t("TableAction"),j=t("BasicTable");return i(),o("div",c,[n(j,{onRegister:e.registerTable},{action:s((({record:t})=>[n(p,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,t)}],dropDownActions:[{label:"启用",onClick:e.handleOpen.bind(null,t)}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default p;