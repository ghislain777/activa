(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[81],{3169:function(e,a,t){"use strict";t.r(a);var l=t(12),r=t(27),n=t(0),s=t.n(n),c=t(97),i=t(448),o=t(1142),m=t(2302),d=t(1146),u=t(1144),p=t(1143),b=t(164),v=t(624),E=t(1185),g=t(51),h=t.n(g);var f=t(3),x=t(1222),j=t(21),N=t(777),O=t(2300),y=t(110),C=t(277);var w=({uid:e,open:a,handleClose:t})=>{const r=Object(n.useState)({name:"",email:"",phone:"",balance:"",age:"",company:"",address:"",isActive:!1}),i=Object(l.a)(r,2),o=i[0],m=i[1],d=(e,a)=>{e.persist(),m("switch"!==a?Object(f.a)(Object(f.a)({},o),{},{[e.target.name]:e.target.value}):Object(f.a)(Object(f.a)({},o),{},{isActive:e.target.checked}))};return Object(n.useEffect)(()=>{var a;(a=e,h.a.get("/api/user",{data:a})).then(e=>m(Object(f.a)({},e.data)))},[e]),s.a.createElement(x.a,{onClose:t,open:a},s.a.createElement("div",{className:"p-6"},s.a.createElement("h4",{className:"mb-5"},"Update Member"),s.a.createElement(y.ValidatorForm,{onSubmit:()=>{var e;o.id?(e=Object(f.a)({},o),h.a.post("/api/user/update",e)).then(()=>{t()}):(e=>h.a.post("/api/user/add",e))(Object(f.a)({id:Object(C.c)()},o)).then(()=>{t()})}},s.a.createElement(j.a,{className:"mb-4",container:!0,spacing:4},s.a.createElement(j.a,{item:!0,sm:6,xs:12},s.a.createElement(y.TextValidator,{className:"w-full mb-4",label:"Name",onChange:d,type:"text",name:"name",value:null===o||void 0===o?void 0:o.name,validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(y.TextValidator,{className:"w-full mb-4",label:"Email",onChange:d,type:"text",name:"email",value:null===o||void 0===o?void 0:o.email,validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(y.TextValidator,{className:"w-full mb-4",label:"Phone",onChange:d,type:"text",name:"phone",value:null===o||void 0===o?void 0:o.phone,validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(y.TextValidator,{className:"w-full mb-4",label:"Balance",onChange:d,type:"number",name:"balance",value:null===o||void 0===o?void 0:o.balance,validators:["required"],errorMessages:["this field is required"]})),s.a.createElement(j.a,{item:!0,sm:6,xs:12},s.a.createElement(y.TextValidator,{className:"w-full mb-4",label:"Age",onChange:d,type:"number",name:"age",value:null===o||void 0===o?void 0:o.age,validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(y.TextValidator,{className:"w-full mb-4",label:"Company",onChange:d,type:"text",name:"company",value:null===o||void 0===o?void 0:o.company,validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(y.TextValidator,{className:"w-full mb-4",label:"Address",onChange:d,type:"text",name:"address",value:null===o||void 0===o?void 0:o.address,validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(N.a,{className:"my-5",control:s.a.createElement(O.a,{checked:null===o||void 0===o?void 0:o.isActive,onChange:e=>d(e,"switch")}),label:"Active Customer"}))),s.a.createElement("div",{className:"flex justify-between items-center"},s.a.createElement(c.a,{variant:"contained",color:"primary",type:"submit"},"Save"),s.a.createElement(c.a,{variant:"outlined",color:"secondary",onClick:()=>t()},"Cancel")))))},q=t(78),P=t(37),S=t.n(P),k=t(115),A=t(4);const T=Object(k.a)(e=>{e.palette,Object(r.a)(e,["palette"]);return{productTable:{"& thead":{"& th:first-child":{paddingLeft:16}},"& td":{borderBottom:"none"},"& td:first-child":{paddingLeft:"16px !important"}}}});a.default=()=>{const e=Object(n.useState)(null),a=Object(l.a)(e,2),t=a[0],r=a[1],g=Object(n.useState)(10),f=Object(l.a)(g,2),x=f[0],j=f[1],N=Object(n.useState)(0),O=Object(l.a)(N,2),y=O[0],C=O[1],P=Object(n.useState)(null),k=Object(l.a)(P,2),M=k[0],V=k[1],B=Object(n.useState)([]),z=Object(l.a)(B,2),D=z[0],I=z[1],J=Object(n.useState)(!1),L=Object(l.a)(J,2),R=L[0],U=L[1],F=Object(n.useState)(!1),Y=Object(l.a)(F,2),$=Y[0],G=Y[1],H=T(),K=()=>{U(!1),G(!1),Q()},Q=()=>{h.a.get("/api/user/all").then(({data:e})=>{I(e)})};return Object(n.useEffect)(()=>{Q()},[]),s.a.createElement("div",{className:"m-sm-30"},s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(q.b,{routeSegments:[{name:"CRUD Table"}]})),s.a.createElement(c.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>U(!0)},"Add New Member"),s.a.createElement(i.a,{className:"w-full overflow-auto",elevation:6},s.a.createElement(o.a,{className:Object(A.default)("whitespace-pre min-w-750",H.productTable)},s.a.createElement(m.a,null,s.a.createElement(d.a,null,s.a.createElement(u.a,null,"Name"),s.a.createElement(u.a,null,"Age"),s.a.createElement(u.a,null,"Balance"),s.a.createElement(u.a,null,"Company"),s.a.createElement(u.a,null,"Status"),s.a.createElement(u.a,null,"Action"))),s.a.createElement(p.a,null,null===D||void 0===D?void 0:D.slice(y*x,y*x+x).map((e,a)=>s.a.createElement(d.a,{hover:!0,key:S.a.generate()},s.a.createElement(u.a,{className:"px-0",align:"left"},e.name),s.a.createElement(u.a,{className:"px-0",align:"left"},e.age),s.a.createElement(u.a,{className:"px-0"},"$",e.balance),s.a.createElement(u.a,{className:"px-0",align:"left"},e.company),s.a.createElement(u.a,{className:"px-0"},e.isActive?s.a.createElement("small",{className:"rounded bg-primary elevation-z3 text-white px-2 py-2px"},"active"):s.a.createElement("small",{className:"rounded bg-light-gray elevation-z3 px-2 py-2px"},"inactive")),s.a.createElement(u.a,{className:"px-0 border-none"},s.a.createElement(b.a,{onClick:()=>{r(e.id),U(!0)}},s.a.createElement(v.a,{color:"primary"},"edit")),s.a.createElement(b.a,{onClick:()=>(e=>{V(e),G(!0)})(e)},s.a.createElement(v.a,{color:"error"},"delete"))))))),s.a.createElement(E.a,{className:"px-4",rowsPerPageOptions:[5,10,25],component:"div",count:null===D||void 0===D?void 0:D.length,rowsPerPage:x,page:y,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:(e,a)=>{C(a)},onChangeRowsPerPage:({target:{value:e}})=>j(e)}),R&&s.a.createElement(w,{handleClose:K,open:R,uid:t}),$&&s.a.createElement(q.f,{open:$,onConfirmDialogClose:K,onYesClick:()=>{var e;(e=M,h.a.post("/api/user/delete",e)).then(()=>{K()})},text:"Are you sure to delete?"})))}}}]);