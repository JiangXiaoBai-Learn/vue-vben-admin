import{a as e,u as t,i,o as s,j as o,w as r,k as a,x as n}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./colors.97dd2376.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.f78223a8.js";import"./index.94d80465.js";import"./index.aebc9d78.js";import"./index.cff9382b.js";import"./CloseOutlined.06d38e20.js";import{B as m}from"./index.e727506c.js";import"./index.ff9490e7.js";import"./RightOutlined.30a2c84e.js";import"./useTimeout.f7769a48.js";import"./useDebounce.d84b3497.js";import"./resizeEvent.f3325c29.js";import"./domUtils.aee0a6fd.js";import"./animation.6d838565.js";import"./index.83d2c811.js";import{D as p}from"./index.06164321.js";import{u as d}from"./useDescription.ff2e9ef2.js";import"./index.91b8bb1e.js";import"./useWindowSizeFn.2392dc8b.js";import{getDescSchema as c}from"./data.3e5969b8.js";var j=e({name:"ErrorLogDetailModal",components:{BasicModal:m,Description:p},props:{info:{type:Object,default:null}},setup(){const{t:e}=t(),[i]=d({column:2,schema:c()});return{register:i,useI18n:t,t:e}}});j.render=function(e,t,m,p,d,c){const j=i("Description"),f=i("BasicModal");return s(),o(f,n({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:r((()=>[a(j,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default j;