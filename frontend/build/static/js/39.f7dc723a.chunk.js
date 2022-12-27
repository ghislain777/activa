(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[39],{2494:function(e,a,t){"use strict";var l=t(101),r=t(108);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),i=(0,l(t(109)).default)(n.createElement("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),"VolumeUp");a.default=i},2807:function(e,a,t){"use strict";var l=t(101),r=t(108);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),i=(0,l(t(109)).default)(n.createElement("path",{d:"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"}),"VolumeDown");a.default=i},3125:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(12),i=t(115),c=t(21),u=t(58),s=t(2807),m=t.n(s),o=t(2494),d=t.n(o),v=t(2325);const E=Object(i.a)({root:{width:200}});function b(){const e=E(),a=r.a.useState(30),t=Object(n.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"continuous-slider",gutterBottom:!0},"Volume"),r.a.createElement(c.a,{container:!0,spacing:2},r.a.createElement(c.a,{item:!0},r.a.createElement(m.a,null)),r.a.createElement(c.a,{item:!0,xs:!0},r.a.createElement(v.a,{value:l,onChange:(e,a)=>{i(a)},"aria-labelledby":"continuous-slider"})),r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,null))),r.a.createElement(v.a,{disabled:!0,defaultValue:30,"aria-labelledby":"continuous-slider"}))}const p=Object(i.a)(e=>({root:{width:300},margin:{height:e.spacing(3)}})),g=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function f(e){return"".concat(e,"\xb0C")}function y(e){return g.findIndex(a=>a.value===e)+1}function V(){const e=p();return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"discrete-slider",gutterBottom:!0},"Temperature"),r.a.createElement(v.a,{defaultValue:20,getAriaValueText:f,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:10,marks:!0}),r.a.createElement("div",{className:e.margin}),r.a.createElement(u.a,{id:"discrete-slider-custom",gutterBottom:!0},"Custom marks"),r.a.createElement(v.a,{defaultValue:20,getAriaValueText:f,"aria-labelledby":"discrete-slider-custom",step:10,valueLabelDisplay:"auto",marks:g}),r.a.createElement("div",{className:e.margin}),r.a.createElement(u.a,{id:"discrete-slider-restrict",gutterBottom:!0},"Restricted values"),r.a.createElement(v.a,{defaultValue:20,valueLabelFormat:y,getAriaValueText:f,"aria-labelledby":"discrete-slider-restrict",step:null,valueLabelDisplay:"auto",marks:g}),r.a.createElement("div",{className:e.margin}),r.a.createElement(u.a,{id:"discrete-slider-always",gutterBottom:!0},"Always visible"),r.a.createElement(v.a,{defaultValue:80,getAriaValueText:f,"aria-labelledby":"discrete-slider-always",step:10,marks:g,valueLabelDisplay:"on"}))}const h=Object(i.a)({root:{width:300}});function C(e){return"".concat(e,"\xb0C")}function N(){const e=h(),a=r.a.useState([20,37]),t=Object(n.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"range-slider",gutterBottom:!0},"Temperature range"),r.a.createElement(v.a,{value:l,onChange:(e,a)=>{i(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:C}))}var x=t(574);const B=Object(i.a)({root:{width:250},input:{width:42}});function w(){const e=B(),a=r.a.useState(30),t=Object(n.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"input-slider",gutterBottom:!0},"Volume"),r.a.createElement(c.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,null)),r.a.createElement(c.a,{item:!0,xs:!0},r.a.createElement(v.a,{value:"number"===typeof l?l:0,onChange:(e,a)=>{i(a)},"aria-labelledby":"input-slider"})),r.a.createElement(c.a,{item:!0},r.a.createElement(x.a,{className:e.input,value:l,margin:"dense",onChange:e=>{i(""===e.target.value?"":Number(e.target.value))},onBlur:()=>{l<0?i(0):l>100&&i(100)},inputProps:{step:10,min:0,max:100,type:"number","aria-labelledby":"input-slider"}}))))}const T=Object(i.a)({root:{height:300}});function j(e){return"".concat(e,"\xb0C")}const O=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function S(){const e=T();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{id:"vertical-slider",gutterBottom:!0},"Temperature"),r.a.createElement("div",{className:e.root},r.a.createElement(v.a,{orientation:"vertical",getAriaValueText:j,defaultValue:30,"aria-labelledby":"vertical-slider"}),r.a.createElement(v.a,{disabled:!0,orientation:"vertical",getAriaValueText:j,defaultValue:30,"aria-labelledby":"vertical-slider"}),r.a.createElement(v.a,{orientation:"vertical",defaultValue:[20,37],"aria-labelledby":"vertical-slider",getAriaValueText:j,marks:O})))}var A=t(78);a.default=()=>r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement(A.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Slider"}]})),r.a.createElement(A.B,{title:"Continuous Slider"},r.a.createElement(b,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(A.B,{title:"Discrete Slider"},r.a.createElement(V,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(A.B,{title:"Range Slider"},r.a.createElement(N,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(A.B,{title:"Slider with Input"},r.a.createElement(w,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(A.B,{title:"Vertical Slider"},r.a.createElement(S,null)))}}]);