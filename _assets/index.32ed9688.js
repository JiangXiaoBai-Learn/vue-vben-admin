import{a as e,r as a,i as n,o,j as l,k as s}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import"./uuid.40269c00.js";import{s as t}from"./index.758be322.js";var d=e({components:{Tinymce:t},setup:()=>({handleChange:function(e){},value:a("hello world!")})});const i={class:"p-4"};d.render=function(e,a,t,d,r,u){const m=n("Tinymce");return o(),l("div",i,[s(m,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a),onChange:e.handleChange,width:"100%"},null,8,["modelValue","onChange"])])};export default d;