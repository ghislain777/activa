(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[84],{3084:function(e,a,t){"use strict";t.r(a);var n=t(12),l=t(0),s=t.n(l),m=t(86),o=t(49),i=t.n(o),c=t(179),r=t.n(c);const p=[{name:"name",label:"Name",options:{filter:!0}},{name:"email",label:"Email",options:{filter:!0}},{name:"company",label:"Company",options:{filter:!0}},{name:"balance",label:"Balance",options:{filter:!0}}];a.default=()=>{const e=Object(l.useState)(!0),a=Object(n.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)([]),b=Object(n.a)(c,2),u=b[0],f=b[1];return Object(l.useEffect)(()=>(i.a.get("/api/user/all").then(({data:e})=>{t&&f(e)}),()=>o(!1)),[t]),s.a.createElement("div",{className:"m-sm-30"},s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(m.b,{routeSegments:[{name:"Data Table",path:"/pages"},{name:"Simple Mui Table"}]})),s.a.createElement(r.a,{title:"User Report",data:u,columns:p,options:{filterType:"textField",responsive:"simple",selectableRows:"none",elevation:0,rowsPerPageOptions:[10,20,40,80,100]}}))}}}]);