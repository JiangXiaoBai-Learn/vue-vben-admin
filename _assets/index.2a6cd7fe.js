import{a as s,f as a,aC as r,aJ as t,aw as n,dD as e,z as o}from"./index.fa77065c.js";var u=s({name:"Authority",props:{value:{type:[Number,Array,String],default:""}},setup(s,{slots:o}){const{getPermissionMode:u}=n(),{hasPermission:i}=e();return()=>{const n=a(u);return n===r.ROLE?function(){const{value:a}=s;return a?i(a)?t(o):null:t(o)}():n===r.BACK?function(){const{value:a}=s;return a?i(a)?t(o):null:t(o)}():t(o)}}});o(u);export{u as s};