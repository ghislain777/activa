(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[83],{3137:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),d=r(6),c=r(12),o=r(2352);var i=()=>{const e=Object(t.useState)([]),a=Object(c.a)(e,2),r=a[0],i=a[1];Object(t.useEffect)(()=>{var e;i((e=6,Array.from({length:e},(e,a)=>a).map(e=>({id:"item-".concat(e),content:"item ".concat(e)}))))},[]);return n.a.createElement(o.a,{onDragEnd:e=>{if(!e.destination)return;const a=((e,a,r)=>{const t=Array.from(e),n=t.splice(a,1),d=Object(c.a)(n,1)[0];return t.splice(r,0,d),t})(r,e.source.index,e.destination.index);i(a)}},n.a.createElement(o.c,{droppableId:"droppable"},(e,a)=>{return n.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:(t=a.isDraggingOver,{borderRadius:"4px",background:t?"rgba(0,0,0, .1)":"var(--bg-default)",padding:8,width:250})}),r.map((e,a)=>n.a.createElement(o.b,{key:e.id,draggableId:e.id,index:a},(a,r)=>{return n.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps,{style:(t=r.isDragging,c=a.draggableProps.style,Object(d.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),boxShadow:"var(--elevation-z4)",borderRadius:"4px",background:t?"var(--primary)":"var(--bg-paper)"},c))}),e.content);var t,c})),e.placeholder);var t}))},l=r(95);var s=()=>{const e=Object(t.useState)([]),a=Object(c.a)(e,2),r=a[0],i=a[1];Object(t.useEffect)(()=>{var e;i((e=6,Array.from({length:e},(e,a)=>a).map(e=>({id:"item-".concat(e),content:"item ".concat(e)}))))},[]);return n.a.createElement(o.a,{onDragEnd:e=>{if(!e.destination)return;const a=((e,a,r)=>{const t=Array.from(e),n=t.splice(a,1),d=Object(c.a)(n,1)[0];return t.splice(r,0,d),t})(r,e.source.index,e.destination.index);i(a)}},n.a.createElement(o.c,{droppableId:"droppable",direction:"horizontal"},(e,a)=>{return n.a.createElement("div",Object.assign({ref:e.innerRef,style:(t=a.isDraggingOver,{borderRadius:"4px",background:t?"rgba(0,0,0, .1)":"var(--bg-default)",display:"flex",padding:8,overflow:"auto"})},e.droppableProps),r.map((e,a)=>n.a.createElement(o.b,{key:e.id,draggableId:e.id,index:a},(a,r)=>{return n.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps,{style:(t=r.isDragging,c=a.draggableProps.style,Object(d.a)({userSelect:"none",padding:16,margin:"0 ".concat(8,"px 0 0"),boxShadow:"var(--elevation-z4)",borderRadius:"4px",background:t?"var(--primary)":"var(--bg-paper)"},c))}),e.content);var t,c})),e.placeholder);var t}))},p=r(41);const g=(e,a=0)=>Array.from({length:e},(e,a)=>a).map(e=>({id:"item-".concat(e+a),content:"item ".concat(e+a)})),b=(e,a,r)=>Object(d.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),boxShadow:r.shadows[4],borderRadius:"4px",background:e?"rgba(var(--primary),1)":"rgba(var(--bg-paper),1)"},a),m=e=>({borderRadius:"4px",background:e?"rgba(0,0,0, .1)":"rgba(var(--bg-default),1)",padding:8,width:250});var u=()=>{const e=Object(t.useState)([]),a=Object(c.a)(e,2),r=a[0],d=a[1],i=Object(t.useState)([]),l=Object(c.a)(i,2),s=l[0],u=l[1],f=Object(p.a)();Object(t.useEffect)(()=>{d(g(10)),u(g(5,10))},[]);const v=e=>"droppable"===e?r:s;return n.a.createElement(o.a,{onDragEnd:e=>{const a=e.source,r=e.destination;if(r)if(a.droppableId===r.droppableId){const e=((e,a,r)=>{const t=Array.from(e),n=t.splice(a,1),d=Object(c.a)(n,1)[0];return t.splice(r,0,d),t})(v(a.droppableId),a.index,r.index);"droppable2"===a.droppableId?u(e):d(e)}else{const e=((e,a,r,t)=>{const n=Array.from(e),d=Array.from(a),o=n.splice(r.index,1),i=Object(c.a)(o,1)[0];d.splice(t.index,0,i);const l={};return l[r.droppableId]=n,l[t.droppableId]=d,l})(v(a.droppableId),v(r.droppableId),a,r);d(e.droppable),u(e.droppable2)}}},n.a.createElement("div",{className:"flex justify-around"},n.a.createElement(o.c,{droppableId:"droppable"},(e,a)=>n.a.createElement("div",{ref:e.innerRef,style:m(a.isDraggingOver)},r.map((e,a)=>n.a.createElement(o.b,{key:e.id,draggableId:e.id,index:a},(a,r)=>n.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps,{style:b(r.isDragging,a.draggableProps.style,f)}),e.content))),e.placeholder)),n.a.createElement(o.c,{droppableId:"droppable2"},(e,a)=>n.a.createElement("div",{ref:e.innerRef,style:m(a.isDraggingOver)},s.map((e,a)=>n.a.createElement(o.b,{key:e.id,draggableId:e.id,index:a},(a,r)=>n.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps,{style:b(r.isDragging,a.draggableProps.style,f)}),e.content))),e.placeholder))))};a.default=()=>n.a.createElement("div",{className:"m-sm-30"},n.a.createElement("div",{className:"mb-sm-30"},n.a.createElement(l.b,{routeSegments:[{name:"others",path:"/drag-and-drop"},{name:"Drag and Drop"}]})),n.a.createElement(l.B,{title:"Simple List Drag and Drop"},n.a.createElement(i,null)),n.a.createElement("div",{className:"py-3"}),n.a.createElement(l.B,{title:"Simple Horizontal List Drag and Drop"},n.a.createElement(s,null)),n.a.createElement("div",{className:"py-3"}),n.a.createElement(l.B,{title:"Simple Two List Drag and Drop"},n.a.createElement(u,null)))}}]);