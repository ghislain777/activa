(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[72],{2407:function(e,a,t){"use strict";var l=t(6),r=t(12),i=t(0),s=t.n(i),n=t(105),m=t(45),u=t(1122),o=t(758),c=t(2298),d=t(766),p=t(144),v=t(606),g=t(69),b=t(2198),E=t(447);a.a=()=>{const e=Object(i.useState)({date:new Date}),a=Object(r.a)(e,2),t=a[0],h=a[1];Object(i.useEffect)(()=>(n.ValidatorForm.addValidationRule("isPasswordMatch",e=>(console.log(e),e===t.password)),()=>n.ValidatorForm.removeValidationRule("isPasswordMatch")),[t.password]);const f=e=>{e.persist(),h(Object(l.a)(Object(l.a)({},t),{},{[e.target.name]:e.target.value}))},q=t.username,w=t.firstName,N=t.creditCard,C=t.mobile,x=t.password,y=t.confirmPassword,M=t.gender,P=t.date,V=t.email;return s.a.createElement("div",null,s.a.createElement(n.ValidatorForm,{onSubmit:e=>{},onError:()=>null},s.a.createElement(m.a,{container:!0,spacing:6},s.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},s.a.createElement(n.TextValidator,{className:"mb-4 w-full",label:"Username (Min length 4, Max length 9)",onChange:f,type:"text",name:"username",value:q||"",validators:["required","minStringLength: 4","maxStringLength: 9"],errorMessages:["this field is required"]}),s.a.createElement(n.TextValidator,{className:"mb-4 w-full",label:"First Name",onChange:f,type:"text",name:"firstName",value:w||"",validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(n.TextValidator,{className:"mb-4 w-full",label:"Email",onChange:f,type:"email",name:"email",value:V||"",validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),s.a.createElement(g.a,{utils:E.a},s.a.createElement(b.b,{className:"mb-4 w-full",margin:"none",id:"mui-pickers-date",label:"Date picker",inputVariant:"standard",type:"text",autoOk:!0,value:P,onChange:e=>{h(Object(l.a)(Object(l.a)({},t),{},{date:e}))},KeyboardButtonProps:{"aria-label":"change date"}})),s.a.createElement(n.TextValidator,{className:"mb-8 w-full",label:"Credit Card",onChange:f,type:"number",name:"creditCard",value:N||"",validators:["required","minStringLength:16","maxStringLength: 16"],errorMessages:["this field is required"]})),s.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},s.a.createElement(n.TextValidator,{className:"mb-4 w-full",label:"Mobile Nubmer",onChange:f,type:"text",name:"mobile",value:C||"",validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(n.TextValidator,{className:"mb-4 w-full",label:"Password",onChange:f,name:"password",type:"password",value:x||"",validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(n.TextValidator,{className:"mb-4 w-full",label:"Confirm Password",onChange:f,name:"confirmPassword",type:"password",value:y||"",validators:["required","isPasswordMatch"],errorMessages:["this field is required","password didn't match"]}),s.a.createElement(u.a,{className:"mb-4",value:M||"",name:"gender",onChange:f,row:!0},s.a.createElement(o.a,{value:"Male",control:s.a.createElement(c.a,{color:"secondary"}),label:"Male",labelPlacement:"end"}),s.a.createElement(o.a,{value:"Female",control:s.a.createElement(c.a,{color:"secondary"}),label:"Female",labelPlacement:"end"}),s.a.createElement(o.a,{value:"Others",control:s.a.createElement(c.a,{color:"secondary"}),label:"Others",labelPlacement:"end"})),s.a.createElement(o.a,{control:s.a.createElement(d.a,null),label:"I have read and agree to the terms of service."}))),s.a.createElement(p.a,{color:"primary",variant:"contained",type:"submit"},s.a.createElement(v.a,null,"send"),s.a.createElement("span",{className:"pl-2 capitalize"},"Submit"))))}},3162:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),i=t(2407),s=t(12),n=t(2280),m=t(2277),u=t(2278),o=t(144),c=t(64);function d(){const e=r.a.useState(0),a=Object(s.a)(e,2),t=a[0],l=a[1],i=["Select master blaster campaign settings","Create an ad group","Create an ad"];return r.a.createElement("div",null,r.a.createElement(n.a,{activeStep:t,alternativeLabel:!0},i.map(e=>r.a.createElement(m.a,{key:e},r.a.createElement(u.a,null,e)))),r.a.createElement("div",null,t===i.length?r.a.createElement("div",null,r.a.createElement(c.a,null,"All steps completed"),r.a.createElement(o.a,{className:"mt-4",variant:"contained",color:"secondary",onClick:()=>{l(0)}},"Reset")):r.a.createElement("div",null,r.a.createElement(c.a,null,function(e){switch(e){case 0:return"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tincidunt velit. Quisque laoreet, lectus id tincidunt fringilla, eros est bibendum felis, sit amet lobortis ante sem non diam. Donec viverra a nisi eu eleifend. Mauris vel leo tempor, commodo felis in, sollicitudin velit. Nullam eu sem id lacus venenatis commodo nec a lacus. Donec in egestas justo. Quisque elementum diam felis. In a ullamcorper leo. In lorem urna, mollis in feugiat sed, aliquet nec diam. Mauris tempus dui at gravida pharetra. Etiam nec lectus metus. In dapibus placerat consequat. Quisque ornare ut lacus ac tempus. Pellentesque sed ornare tellus. Curabitur dictum turpis quam, at feugiat mi elementum a.";case 1:return"Integer euismod dapibus sapien, a interdum augue blandit eget. Donec pellentesque, sapien iaculis dignissim sagittis, risus nulla auctor eros, sed suscipit eros mauris id lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer porttitor mauris egestas consequat molestie. Nam egestas iaculis malesuada. Praesent sagittis venenatis finibus. Praesent porttitor ipsum et sapien cursus, eu mattis augue ornare.";case 2:return"In laoreet, dui vel tristique facilisis, velit dui dictum diam, nec feugiat mi mauris eu nunc. Nullam auctor eget ante ac laoreet. Aliquam et ante ligula. Nam imperdiet augue magna, ac tincidunt neque mollis nec. Sed eu nunc sit amet tellus commodo elementum non sit amet sem. Etiam ipsum nibh, rutrum vel ultrices in, vulputate ac dolor. Morbi dictum lectus id orci dapibus, et faucibus nulla viverra. Nulla consectetur ex vitae pretium vehicula. Quisque varius tempor erat et semper. Vivamus consectetur, eros sit amet ornare facilisis, nulla felis laoreet tortor, sit amet egestas risus ipsum sed eros.";default:return"Aenean arcu ligula, porttitor id neque imperdiet, congue convallis erat. Integer libero sapien, convallis a vulputate vel, pretium vulputate metus. Donec leo justo, viverra ut tempor commodo, laoreet eu velit. Donec vel sem quis velit pharetra elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam in commodo mauris. Ut iaculis ipsum velit."}}(t)),r.a.createElement("div",{className:"pt-4"},r.a.createElement(o.a,{variant:"contained",color:"secondary",disabled:0===t,onClick:()=>{l(e=>e-1)}},"Back"),r.a.createElement(o.a,{className:"ml-4",variant:"contained",color:"primary",onClick:()=>{l(e=>e+1)}},t===i.length-1?"Finish":"Next")))))}var p=t(95);a.default=()=>r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement(p.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Form"}]})),r.a.createElement(p.B,{title:"Simple Form"},r.a.createElement(i.a,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(p.B,{title:"stepper form"},r.a.createElement(d,null)))}}]);