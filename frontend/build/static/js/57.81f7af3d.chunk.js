(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[57],{2418:function(e,a,t){"use strict";var r=t(3),l=t(12),s=t(0),n=t.n(s),i=t(110),m=t(21),o=t(1141),c=t(777),d=t(2320),u=t(785),b=t(97),g=t(624),p=t(74),h=t(2219),E=t(456);a.a=()=>{const e=Object(s.useState)({date:new Date}),a=Object(l.a)(e,2),t=a[0],v=a[1];Object(s.useEffect)(()=>(i.ValidatorForm.addValidationRule("isPasswordMatch",e=>(console.log(e),e===t.password)),()=>i.ValidatorForm.removeValidationRule("isPasswordMatch")),[t.password]);const f=e=>{e.persist(),v(Object(r.a)(Object(r.a)({},t),{},{[e.target.name]:e.target.value}))},w=t.username,x=t.firstName,N=t.creditCard,C=t.mobile,M=t.password,q=t.confirmPassword,y=t.gender,V=t.date,P=t.email;return n.a.createElement("div",null,n.a.createElement(i.ValidatorForm,{onSubmit:e=>{},onError:()=>null},n.a.createElement(m.a,{container:!0,spacing:6},n.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},n.a.createElement(i.TextValidator,{className:"mb-4 w-full",label:"Username (Min length 4, Max length 9)",onChange:f,type:"text",name:"username",value:w||"",validators:["required","minStringLength: 4","maxStringLength: 9"],errorMessages:["this field is required"]}),n.a.createElement(i.TextValidator,{className:"mb-4 w-full",label:"First Name",onChange:f,type:"text",name:"firstName",value:x||"",validators:["required"],errorMessages:["this field is required"]}),n.a.createElement(i.TextValidator,{className:"mb-4 w-full",label:"Email",onChange:f,type:"email",name:"email",value:P||"",validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),n.a.createElement(p.a,{utils:E.a},n.a.createElement(h.b,{className:"mb-4 w-full",margin:"none",id:"mui-pickers-date",label:"Date picker",inputVariant:"standard",type:"text",autoOk:!0,value:V,onChange:e=>{v(Object(r.a)(Object(r.a)({},t),{},{date:e}))},KeyboardButtonProps:{"aria-label":"change date"}})),n.a.createElement(i.TextValidator,{className:"mb-8 w-full",label:"Credit Card",onChange:f,type:"number",name:"creditCard",value:N||"",validators:["required","minStringLength:16","maxStringLength: 16"],errorMessages:["this field is required"]})),n.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},n.a.createElement(i.TextValidator,{className:"mb-4 w-full",label:"Mobile Nubmer",onChange:f,type:"text",name:"mobile",value:C||"",validators:["required"],errorMessages:["this field is required"]}),n.a.createElement(i.TextValidator,{className:"mb-4 w-full",label:"Password",onChange:f,name:"password",type:"password",value:M||"",validators:["required"],errorMessages:["this field is required"]}),n.a.createElement(i.TextValidator,{className:"mb-4 w-full",label:"Confirm Password",onChange:f,name:"confirmPassword",type:"password",value:q||"",validators:["required","isPasswordMatch"],errorMessages:["this field is required","password didn't match"]}),n.a.createElement(o.a,{className:"mb-4",value:y||"",name:"gender",onChange:f,row:!0},n.a.createElement(c.a,{value:"Male",control:n.a.createElement(d.a,{color:"secondary"}),label:"Male",labelPlacement:"end"}),n.a.createElement(c.a,{value:"Female",control:n.a.createElement(d.a,{color:"secondary"}),label:"Female",labelPlacement:"end"}),n.a.createElement(c.a,{value:"Others",control:n.a.createElement(d.a,{color:"secondary"}),label:"Others",labelPlacement:"end"})),n.a.createElement(c.a,{control:n.a.createElement(u.a,null),label:"I have read and agree to the terms of service."}))),n.a.createElement(b.a,{color:"primary",variant:"contained",type:"submit"},n.a.createElement(g.a,null,"send"),n.a.createElement("span",{className:"pl-2 capitalize"},"Submit"))))}},3077:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),s=t(78),n=t(2418),i=t(448);class m extends r.Component{render(){return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(s.b,{routeSegments:[{name:"Forms",path:"/forms"},{name:"Basic"}]})),l.a.createElement(i.a,{className:"px-6 pt-2 pb-4"},l.a.createElement(n.a,null)))}}a.default=m}}]);