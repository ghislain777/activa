(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[122],{3073:function(e,a,t){"use strict";t.r(a);var c=t(12),n=t(0),r=t.n(n),l=t(46),m=t(1205),s=t(2191),i=t(429),o=t(2196),d=t(228),p=t(608),u=t(144),E=t(66),b=t(117),f=t(447);a.default=()=>{const e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],v=a[1],h=Object(n.useState)(""),j=Object(c.a)(h,2),x=j[0],y=j[1],N=Object(f.d)(e=>e.scrumboard).boardList,O=void 0===N?[]:N,k=Object(f.c)();Object(n.useEffect)(()=>{k(Object(b.v)())},[k]);const w=e=>{v(e)},C=e=>{"Enter"!==e.key||e.shiftKey?y(e.target.value):g()},g=()=>{let e=x.trim();""!==e&&(k(Object(b.r)(e)),y(""))};return r.a.createElement("div",{className:"m-sm-30"},r.a.createElement(l.a,{container:!0,spacing:2},O.map(e=>r.a.createElement(l.a,{key:e.id,item:!0,lg:3,md:3,sm:12,xs:12},r.a.createElement(E.a,{to:"/scrum-board/".concat(e.id)},r.a.createElement(m.a,{className:"p-6 cursor-pointer h-152",elevation:3},r.a.createElement("h5",{className:"whitespace-pre-wrap capitalize m-0 font-medium"},e.title))))),r.a.createElement(l.a,{item:!0,lg:3,md:3,sm:12,xs:12},t?r.a.createElement(s.a,{onClickAway:()=>w(!1)},r.a.createElement(m.a,{className:"p-6 h-152 w-288",elevation:3},r.a.createElement(i.a,{size:"small",onChange:C,onKeyDown:C,className:"mb-3",variant:"outlined",label:"Board Title",value:x,autoFocus:!0,fullWidth:!0,InputProps:{endAdornment:r.a.createElement(o.a,{position:"end"},r.a.createElement(d.a,{size:"small",onClick:()=>w(!1)},r.a.createElement(p.a,{fontSize:"small"},"clear")))}}),r.a.createElement("div",{className:"flex justify-end"},r.a.createElement(u.a,{onClick:g,variant:"contained",color:"primary"},"Add")))):r.a.createElement(m.a,{onClick:()=>w(!0),className:"p-6 flex items-center justify-center cursor-pointer h-150px",elevation:3},r.a.createElement("div",{className:"text-primary text-center font-medium"},r.a.createElement("h1",{className:"m-0 text-primary font-normal"},"+"),r.a.createElement("div",null,"Create New Board"))))))}}}]);