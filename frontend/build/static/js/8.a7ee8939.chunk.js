(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[8],{2385:function(e,a,t){"use strict";t.d(a,"c",(function(){return n})),t.d(a,"d",(function(){return s})),t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return i})),t.d(a,"e",(function(){return o}));var c=t(47),l=t.n(c);const n=()=>l.a.get("/api/invoices/all"),s=e=>l.a.get("/api/invoices",{data:e}),r=e=>l.a.post("/api/invoices/delete",e),i=e=>l.a.post("/api/invoices/add",e),o=e=>l.a.post("/api/invoices/update",e)},3066:function(e,a,t){"use strict";t.r(a);var c=t(12),l=t(0),n=t.n(l),s=t(144),r=t(1201),i=t(1123),o=t(2283),m=t(1127),p=t(1125),u=t(1124),d=t(2385),E=t(71),b=t(68),f=t(95),N=t(3);a.default=()=>{const e=Object(l.useState)([]),a=Object(c.a)(e,2),t=a[0],v=a[1],O=Object(l.useState)(null),j=Object(c.a)(O,2),g=j[0],x=j[1],y=Object(l.useState)(!1),h=Object(c.a)(y,2),k=h[0],w=h[1],C=Object(l.useState)(!0),S=Object(c.a)(C,2),z=S[0],A=S[1],B=Object(E.g)();Object(l.useEffect)(()=>(Object(d.c)().then(e=>{z&&v(e.data)}),()=>A(!1)),[z]);return n.a.createElement("div",{className:"m-sm-30"},n.a.createElement(b.a,{to:"/invoice/add"},n.a.createElement(s.a,{className:"mb-4",variant:"contained",color:"primary"},"Add Invoice")),n.a.createElement(r.a,{elevation:6,className:"w-full overflow-auto"},n.a.createElement(i.a,{className:"min-w-750"},n.a.createElement(o.a,null,n.a.createElement(m.a,null,n.a.createElement(p.a,{className:"pl-sm-24"},"Order No."),n.a.createElement(p.a,{className:"px-0"},"Bill From"),n.a.createElement(p.a,{className:"px-0"},"Bill To"),n.a.createElement(p.a,{className:"px-0"},"Status"),n.a.createElement(p.a,{className:"px-0"},"Actions"))),n.a.createElement(u.a,null,t.map((e,a)=>n.a.createElement(m.a,{key:e.id},n.a.createElement(p.a,{className:"pl-sm-24 capitalize",align:"left"},e.orderNo),n.a.createElement(p.a,{className:"pl-0 capitalize",align:"left"},e.seller.name),n.a.createElement(p.a,{className:"pl-0 capitalize",align:"left"},e.buyer.name),n.a.createElement(p.a,{className:"pl-0 capitalize"},n.a.createElement("small",{className:Object(N.default)({"border-radius-4  text-white px-2 py-2px":!0,"bg-primary":"delivered"===e.status,"bg-secondary":"processing"===e.status,"bg-error":"pending"===e.status})},e.status)),n.a.createElement(p.a,{className:"pl-0"},n.a.createElement(s.a,{color:"primary",className:"mr-2",onClick:()=>{return a=e.id,void B.push("/invoice/".concat(a));var a}},"Open"),n.a.createElement(s.a,{color:"secondary",onClick:()=>(e=>{x(e),w(!0)})(e)},"Delete"))))))),n.a.createElement(f.f,{open:k,onConfirmDialogClose:()=>{w(!1)},onYesClick:()=>{Object(d.b)(g).then(e=>{z&&(v(e.data),w(!1))})},text:"Are you sure to delete?"}))}}}]);