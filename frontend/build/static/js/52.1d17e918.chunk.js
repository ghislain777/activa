(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[52],{2391:function(e,t,a){"use strict";var r=a(0),o=a.n(r),n=a(809),i=a.n(n),l=a(143);const s={grid:{top:16,left:36,right:16,bottom:32},legend:{},tooltip:{show:!0,trigger:"axis",axisPointer:{type:"cross",lineStyle:{opacity:0}},crossStyle:{color:"#000"}},series:[{areaStyle:{},smooth:!0,lineStyle:{width:2,color:"#fff"}}],xAxis:{show:!0,type:"category",showGrid:!1,boundaryGap:!1,axisLabel:{color:"#ccc",margin:20},axisLine:{show:!1},axisTick:{show:!1}},yAxis:{type:"value",min:10,max:60,axisLabel:{color:"#ccc",margin:20,fontSize:13,fontFamily:"roboto"},splitLine:{show:!0,lineStyle:{color:"rgba(255, 255, 255, .1)"}},axisLine:{show:!1},axisTick:{show:!1}},color:[{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255,255,255,0.3)"},{offset:1,color:"rgba(255,255,255,0)"}],global:!1}]};t.a=({height:e,option:t})=>o.a.createElement(i.a,{style:{height:e},option:Object(l.merge)({},s,t)})},3116:function(e,t,a){"use strict";a.r(t);var r=a(12),o=a(0),n=a.n(o),i=a(271),l=a(439),s=a(586),c=a(448),m=a(164),u=a(624),d=a(21),y=a(68);var b=({source:e})=>{const t=[{icon:"people",amount:e.totalUtilisateurs,title:"Total utilisateurs",link:"/administration/utilisateurs"},{icon:"location_on_outlined",amount:e.totalCommandes,title:"Total des commandes",link:"/commandes/toutes"},{icon:"location_on_outlined",amount:e.totalChiffreDaffaire,title:"Total chiffre d'affaire",link:"/commandes/toutes"},{icon:"location_on_outlined",amount:e.totalCommandesNouveau,title:"Nouvelles commandes",link:"/commandes/nouvelle"}],a=()=>{console.log("on a click\xe9 sur la carte")};return n.a.createElement("div",null,n.a.createElement(d.a,{container:!0,spacing:3},t.map((e,t)=>n.a.createElement(d.a,{key:e.title,item:!0,md:3,sm:6,xs:12},n.a.createElement(y.a,{to:e.link},n.a.createElement(c.a,{elevation:3,className:"p-5 flex",onClick:a},n.a.createElement("div",null,n.a.createElement(m.a,{size:"small",className:"p-2 bg-light-gray"},n.a.createElement(u.a,{className:"text-muted"},e.icon))),n.a.createElement("div",{className:"ml-4"},n.a.createElement("h3",{className:"mt-1 text-32"},e.amount.toLocaleString()),n.a.createElement("p",{className:"m-0 text-muted"},e.title))))))))},p=a(809),h=a.n(p),E=a(45);var f=({height:e,lasource:t})=>{const a=Object(E.a)().palette,r={grid:{left:"6%",bottom:"10%",right:"1%"},legend:{itemGap:20,icon:"circle",textStyle:{color:a.text.secondary,fontSize:13,fontFamily:"roboto"}},color:[a.primary.dark,a.primary.light,a.secondary.light,a.error.light],barMaxWidth:"10px",tooltip:{},dataset:{source:t},xAxis:{type:"category",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:a.text.secondary,fontSize:13,fontFamily:"roboto"}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:a.text.secondary,opacity:.15}},axisLabel:{color:a.text.secondary,fontSize:13,fontFamily:"roboto"}},series:[{type:"bar",itemStyle:{barBorderRadius:[10,10,0,0]}}]};return n.a.createElement(h.a,{style:{height:e},option:r})};var x=a(27),g=(a(2392),a(115));a(4);Object(g.a)(e=>{e.palette,Object(x.a)(e,["palette"]);return{icon:{position:"absolute",top:"calc(50% - 24px)",left:"calc(50% - 18px)"}}});a(2391);var v=a(7),w=a.n(v),O=a(10),j=a(9),k=a(1217),S=a(797),C=a(798),M=a(794),N=a(795),D=a(622),L=a(796);function T(){return(T=Object(O.a)(w.a.mark((function e(t){var a,r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a="",r="",e.t0=t,e.next="1"===e.t0?5:"2"===e.t0?8:"3"===e.t0?11:"4"===e.t0?14:17;break;case 5:return a=Object(k.a)(new Date,"yyyy-MM-dd"),r=Object(k.a)(new Date,"yyyy-MM-dd"),e.abrupt("break",18);case 8:return a=Object(k.a)(Object(S.a)(new Date,{weekStartsOn:1}),"yyyy-MM-dd"),r=Object(k.a)(Object(C.a)(new Date,{weekStartsOn:1}),"yyyy-MM-dd"),e.abrupt("break",18);case 11:return a=Object(k.a)(Object(M.a)(new Date),"yyyy-MM-dd"),r=Object(k.a)(Object(N.a)(new Date),"yyyy-MM-dd"),e.abrupt("break",18);case 14:return a=Object(k.a)(Object(D.a)(new Date),"yyyy-MM-dd"),r=Object(k.a)(Object(L.a)(new Date),"yyyy-MM-dd"),e.abrupt("break",18);case 17:return e.abrupt("break",18);case 18:return e.next=20,j.b.get("/dashboard/?startdate="+a+"&enddate="+r);case 20:return o=e.sent,e.abrupt("return",o.data);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=a(17),z=a(33);t.default=()=>{const e=Object(o.useState)("0"),t=Object(r.a)(e,2),a=t[0],d=t[1],y=Object(A.useQueryClient)(),p=Object(A.useQuery)(["dashboard",a],()=>function(e){return T.apply(this,arguments)}(a),{keepPreviousData:!0}),h=p.isLoading,E=(p.isFetching,p.isError),x=p.error,g=p.data,v=Object(o.useState)({utilisateurs:3,sms:200,emissions:50,chart:[["Titre","SMS re\xe7us"],["E2",500],["E3",100],["E4",25],["E5",200],["E6",10],["E7",1e3],["E8",658],["E9",568],["E10",420],["E11",220],["E12",1e3],["E13",500],["E14",633],["E15",720],["E16",100]]}),w=Object(r.a)(v,2);w[0],w[1];return n.a.createElement("div",{className:"analytics m-sm-30"},n.a.createElement("div",{className:"flex justify-between items-center items-center mb-6"},n.a.createElement("h3",{className:"m-0"},"Tableau de bord"),n.a.createElement(i.a,null,n.a.createElement(l.a,{variant:"outlined",displayEmpty:!0,id:"periode",value:a,onChange:e=>{d(e.target.value),y.invalidateQueries("dashboard")}},[{id:"0",nom:"Choisir une p\xe9riode"},{id:"1",nom:"Aujourd'hui"},{id:"2",nom:"Cette semaine"},{id:"3",nom:"Ce mois"},{id:"4",nom:"Cette ann\xe9e"}].map(e=>n.a.createElement(s.a,{key:e.id,value:e.id},e.nom))))),h?n.a.createElement(z.a,{message:"Chargement des donn\xe9es",type:"info"}):E?n.a.createElement(z.a,{message:"Erreur lors du chargement des donn\xe9es::"+x,type:"error"}):n.a.createElement("div",null,n.a.createElement(b,{source:{totalUtilisateurs:g.totalUtilisateurs,totalCommandes:g.totalCommandes,totalCommandesNouveau:g.totalCommandesNouveau,totalChiffreDaffaire:g.totalChiffreDaffaire}}),n.a.createElement(c.a,{className:"mt-5 mb-6",elevation:3},n.a.createElement("div",{className:" px-4 py-3 mb-6 flex justify-between items-center bg-light-gray"},n.a.createElement("span",{className:"font-medium text-muted"},"TOTAL DES COMMANDES"),n.a.createElement(m.a,{size:"small"},n.a.createElement(u.a,null,"more_horiz"))),n.a.createElement(f,{height:400,lasource:g.totalCommandesParDate})),n.a.createElement(c.a,{className:"mt-5 mb-6",elevation:3},n.a.createElement("div",{className:" px-4 py-3 mb-6 flex justify-between items-center bg-light-gray"},n.a.createElement("span",{className:"font-medium text-muted"},"TOTAL CHIFFRE D'AFFAIRE"),n.a.createElement(m.a,{size:"small"},n.a.createElement(u.a,null,"more_horiz"))),n.a.createElement(f,{height:400,lasource:g.totalChiffreDaffaireParDate}))))}}}]);