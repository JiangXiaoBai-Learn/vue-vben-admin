import{a as e,r as i,i as o,o as s,j as t,w as r,k as n,x as a}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import"./index.90de1e74.js";import"./omit.439d1869.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b1b41282.js";import"./CheckOutlined.91529706.js";import{s as d}from"./index.6b93ba53.js";import"./index.bf0e8280.js";import"./colors.97dd2376.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.f78223a8.js";import"./index.5429caf9.js";import"./UpOutlined.5b0a5c28.js";import"./DownOutlined.3a561222.js";import"./index.94d80465.js";import"./index.4e4bcd90.js";import"./index.8f50292b.js";import"./CloseOutlined.06d38e20.js";import{B as m,u as p}from"./index.e727506c.js";import"./index.ff9490e7.js";import"./LeftOutlined.30751ba4.js";import"./functional.696d7325.js";import"./RightOutlined.30a2c84e.js";import"./useTimeout.f7769a48.js";import"./useDebounce.d84b3497.js";import"./useEventListener.e42e7868.js";import"./useBreakpoint.ceda980b.js";import"./resizeEvent.f3325c29.js";import"./index.91b8bb1e.js";import"./useWindowSizeFn.2392dc8b.js";import"./uuid.40269c00.js";import"./download.5b6067ac.js";import{u as l}from"./useForm.cd7e42d8.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var j=e({components:{BasicModal:m,BasicForm:d},setup(){const e=i({}),[o,{}]=l({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=p((i=>{e.value={field2:i.data,field1:i.info}}));return{register:s,schemas:c,registerForm:o,model:e}}});j.render=function(e,i,d,m,p,l){const c=o("BasicForm"),j=o("BasicModal");return s(),t(j,a(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:r((()=>[n(c,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default j;