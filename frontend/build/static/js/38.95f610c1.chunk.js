(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[38],{2788:function(e,a,t){"use strict";var n=t(96),l=t(103);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(0)),o=(0,n(t(104)).default)(r.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");a.default=o},2789:function(e,a,t){"use strict";var n=t(96),l=t(103);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(0)),o=(0,n(t(104)).default)(r.createElement("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"}),"Drafts");a.default=o},2790:function(e,a,t){"use strict";var n=t(96),l=t(103);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(0)),o=(0,n(t(104)).default)(r.createElement("path",{d:"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"}),"MoveToInbox");a.default=o},3122:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),o=t(144),c=t(1172),i=t(568);var u=function(){const e=l.a.useState(null),a=Object(r.a)(e,2),t=a[0],n=a[1];function u(){n(null)}return l.a.createElement("div",null,l.a.createElement(o.a,{variant:"outlined","aria-owns":t?"simple-menu":void 0,"aria-haspopup":"true",onClick:function(e){n(e.currentTarget)}},"Open Menu"),l.a.createElement(c.a,{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:u},l.a.createElement(i.a,{onClick:u},"Profile"),l.a.createElement(i.a,{onClick:u},"My account"),l.a.createElement(i.a,{onClick:u},"Logout")))},m=t(110),s=t(2183),d=t(2193),p=t(1121);const E=Object(m.a)(e=>({root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}})),v=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"];function f(){const e=E(),a=l.a.useState(null),t=Object(r.a)(a,2),n=t[0],o=t[1],u=l.a.useState(1),m=Object(r.a)(u,2),f=m[0],h=m[1];return l.a.createElement("div",{className:e.root},l.a.createElement(s.a,{component:"nav","aria-label":"Device settings"},l.a.createElement(d.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"When device is locked",onClick:function(e){o(e.currentTarget)}},l.a.createElement(p.a,{primary:"When device is locked",secondary:v[f]}))),l.a.createElement(c.a,{id:"lock-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){o(null)}},v.map((e,a)=>l.a.createElement(i.a,{key:e,disabled:0===a,selected:a===f,onClick:e=>function(e,a){h(a),o(null)}(0,a)},e))))}var h=t(7),b=t(2275),k=t(2790),y=t.n(k),g=t(2789),C=t.n(g),M=t(2788),O=t.n(M);const j=Object(h.a)({paper:{border:"1px solid #d3d4d5"}})(e=>l.a.createElement(c.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))),x=Object(h.a)(e=>({root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}))(i.a);var S=function(){const e=l.a.useState(null),a=Object(r.a)(e,2),t=a[0],n=a[1];return l.a.createElement("div",null,l.a.createElement(o.a,{"aria-owns":t?"simple-menu":void 0,"aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){n(e.currentTarget)}},"Open Menu"),l.a.createElement(j,{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:function(){n(null)}},l.a.createElement(x,null,l.a.createElement(b.a,null,l.a.createElement(O.a,null)),l.a.createElement(p.a,{primary:"Sent mail"})),l.a.createElement(x,null,l.a.createElement(b.a,null,l.a.createElement(C.a,null)),l.a.createElement(p.a,{primary:"Drafts"})),l.a.createElement(x,null,l.a.createElement(b.a,null,l.a.createElement(y.a,null)),l.a.createElement(p.a,{primary:"Inbox"}))))},w=t(224),z=t(606);const H=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];var L=function(){const e=l.a.useState(null),a=Object(r.a)(e,2),t=a[0],n=a[1],o=Boolean(t);function u(){n(null)}return l.a.createElement("div",null,l.a.createElement(w.a,{"aria-label":"More","aria-owns":o?"long-menu":void 0,"aria-haspopup":"true",onClick:function(e){n(e.currentTarget)}},l.a.createElement(z.a,null,"more_vert")),l.a.createElement(c.a,{id:"long-menu",anchorEl:t,open:o,onClose:u,PaperProps:{style:{maxHeight:216,width:200}}},H.map(e=>l.a.createElement(i.a,{key:e,selected:"Pyxis"===e,onClick:u},e))))},P=t(95);a.default=()=>l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(P.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Menu"}]})),l.a.createElement(P.B,{title:"simple menu"},l.a.createElement(u,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(P.B,{title:"selected menu"},l.a.createElement(f,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(P.B,{title:"customized menu"},l.a.createElement(S,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(P.B,{title:"max height menu"},l.a.createElement(L,null)))}}]);