(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[48],{2346:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return m})),a.d(t,"d",(function(){return p}));var n=a(7),r=a.n(n),s=a(10),o=a(9);function i(e,t,a,n){return c.apply(this,arguments)}function c(){return(c=Object(s.a)(r.a.mark((function e(t,a,n,s){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,o.b.get("/caisses?itemsPerPage="+a+"&page="+t+"&id="+n);case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return u.apply(this,arguments)}function u(){return(u=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.post("/caisses",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.put("/caisses/"+t.id,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.delete("/caisses/"+t.id,{method:"DELETE",herdears:{Accept:"application/json"},data:t.id});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3175:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(12),s=a(27),o=a(0),i=a.n(o),c=a(135),l=a.n(c),u=a(100),m=a(164),d=a(624),p=a(21),v=a(448),b=a(1262),f=(a(78),a(36)),g=a(99),h=a(451),E=a(450),y=a(449),j=a(97),O=a(372),w=a(58),x=a(7),C=a.n(x),M=a(10),S=a(9);function P(){return(P=Object(M.a)(C.a.mark((function e(t,a,n,r){var s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,S.b.get("/mouvementdecaisses?itemsPerPage="+a+"&page="+t+"&id="+n);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return D.apply(this,arguments)}function D(){return(D=Object(M.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.b.post("/mouvementdecaisses",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return N.apply(this,arguments)}function N(){return(N=Object(M.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.b.put("/mouvementdecaisses/"+t.id,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(M.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.b.delete("/mouvementdecaisses/"+t.id,{method:"DELETE",herdears:{Accept:"application/json"},data:t.id});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=a(56),B=a(63),A=a(17),T=a(43),F=a(57),q=(a(214),a(215),a(33)),z=(a(183),a(240)),J=a(447),W=(a(213),a(2346));const _=f.b().shape({caisse:f.c().required("Le champs caisse est requis"),montant:f.a().required("Montant requis").positive("Le Montant doit \xeatre positif").integer("Le Montant doit \xeatre un nombre entier"),nouveausolde:f.a().required("Nouveau solde requis").positive("Le Nouveau solde doit \xeatre positif").integer("Le Nouveau solde doit \xeatre un nombre entier")});function V({id:e,lemouvementdecaisse:t,handleFermeture:a,action:s}){var c,l,u,b,f;const x=Object(A.useQueryClient)(),C=Object(A.useMutation)(k,{onSuccess:()=>{x.invalidateQueries("Mouvementdecaisses"),G({message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0})},onError:()=>{x.invalidateQueries("Mouvementdecaisses"),G({message:"Echec lors de l op\xe9ration",open:!0,severity:"error",automaticClose:!0})}}),M=Object(A.useMutation)(L,{onSuccess:()=>{x.invalidateQueries("Mouvementdecaisses"),G({message:"Mise \xe0 jour r\xe9ussie",open:!0,severity:"success",automaticClose:!0})},onError:()=>{x.invalidateQueries("Mouvementdecaisses"),G({message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0})}}),P=Object(A.useQuery)(["Caisses",1],()=>Object(W.b)(0,100,"",""),{keepPreviousData:!0}),D=Object(o.useState)(t),N=Object(r.a)(D,2),R=N[0],Q=(N[1],Object(o.useState)({severity:"severity",message:"",open:!1,automaticClose:!0})),V=Object(r.a)(Q,2),Y=V[0],G=V[1],H=Object(I.c)({resolver:Object(g.yupResolver)(_),defaultValues:Object(n.a)(Object(n.a)({},t),{},{id:null!==(c=null===t||void 0===t?void 0:t.id)&&void 0!==c?c:"",caisse:t?"/api/caisses/"+t.caisse.id:"/api/caisses/1",datemouvement:null!==(l=null===t||void 0===t?void 0:t.datemouvement)&&void 0!==l?l:new Date,commentaire:null!==(u=null===t||void 0===t?void 0:t.commentaire)&&void 0!==u?u:"",motif:null!==(b=null===t||void 0===t?void 0:t.motif)&&void 0!==b?b:""})}),K=H.control,U=H.handleSubmit,X=H.errors,Z=(H.reset,Object(o.useState)({})),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ae=e=>{let t=Object(n.a)(Object(n.a)(Object(n.a)({},R),e),ee);R?M.mutate(Object(n.a)({},t)):C.mutate(Object(n.a)({},t))};function ne(){a()}return i.a.createElement("div",null,i.a.createElement(B.a,{message:Y.message,severity:Y.severity,open:Y.open,handleAlertClose:Y.automaticClose?a:()=>G(Object(n.a)(Object(n.a)({},Y),{},{open:!1}))}),i.a.createElement(p.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(p.a,{item:!0,lg:6,md:6,sm:12,xs:12,justify:"center"},i.a.createElement(J.a,{theme:Object(S.a)()},i.a.createElement(v.a,null,i.a.createElement(h.a,{action:i.a.createElement(m.a,{"aria-label":"",onClick:ne},"x"),title:"ajout"===s?"Nouveau mouvement":"Mise \xe0 jour de mouvementdecaisse",subheader:""}),i.a.createElement(E.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:U(ae)},i.a.createElement(p.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(p.a,{item:!0},i.a.createElement(z.a,{id:"datemouvement",nom:"datemouvement",label:"Date de debut",valeur:null===R||void 0===R?void 0:R.datemouvement,control:K,error:X.datemouvement,handledatechange:e=>{te(Object(n.a)(Object(n.a)({},ee),{},{datemouvement:e}))}})),i.a.createElement(p.a,{item:!0},P.isLoading?i.a.createElement(q.a,{message:"chargement des caisses"}):i.a.createElement(F.a,{id:"caisse",name:"caisse",label:"Choisir un caisse",table:"caisse",control:K,options:P.data["hydra:member"],error:X.caisse,valeur:null!==(f=null===R||void 0===R?void 0:R.caisse)&&void 0!==f?f:""})),i.a.createElement(p.a,{item:!0},i.a.createElement(T.a,{id:"typedemouvement",nom:"typedemouvement",label:"Type de mouvement",valeur:null===R||void 0===R?void 0:R.typedemouvement,control:K,error:X.typedemouvement})),i.a.createElement(p.a,{item:!0},i.a.createElement(T.a,{id:"montant",nom:"montant",label:"Montant",valeur:null===R||void 0===R?void 0:R.montant,control:K,error:X.montant})),i.a.createElement(p.a,{item:!0},i.a.createElement(T.a,{id:"nouveausolde",nom:"nouveausolde",label:"Nouveau solde",valeur:null===R||void 0===R?void 0:R.nouveausolde,control:K,error:X.nouveausolde})),i.a.createElement(p.a,{item:!0},i.a.createElement(T.a,{id:"commentaire",nom:"commentaire",label:"Commentaire",valeur:null===R||void 0===R?void 0:R.commentaire,control:K,error:X.commentaire,multiline:!0,rows:4})),i.a.createElement(p.a,{item:!0},i.a.createElement(T.a,{id:"motif",nom:"motif",label:"Motif",valeur:null===R||void 0===R?void 0:R.motif,control:K,error:X.motif,multiline:!0,rows:4}))))),i.a.createElement(y.a,null,i.a.createElement(p.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(p.a,{item:!0},i.a.createElement(j.a,{color:"primary",variant:"contained",type:"submit",onClick:U(ae)},M.isLoading||C.isLoading?i.a.createElement(O.a,{color:"inherit"}):i.a.createElement(d.a,null,"send"),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===s?i.a.createElement(w.a,null,"Enregistrer"):i.a.createElement(w.a,null,"Mettre \xe0 jour")))),i.a.createElement(p.a,{item:!0},i.a.createElement(j.a,{variant:"outlined",color:"secondary",onClick:ne},"Annuler")))))))))}var Y=a(142),G=a(136),H=a(150),K=(a(239),a(1217)),U=a(2304),X=a(4),Z=a(115),$=a(68);Object(Z.a)(e=>{e.palette,Object(s.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185},userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});t.default=()=>{const e=Object(o.useState)({page:0,rowsPerPage:20,recherche:"",filtre:""}),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(A.useQueryClient)(),f=Object(A.useQuery)(["Mouvementdecaisses",a.page,a.rowsPerPage,a.recherche,a.filtre],()=>function(e,t,a,n){return P.apply(this,arguments)}(a.page,a.rowsPerPage,a.recherche,a.filtre),{keepPreviousData:!0}),g=f.isLoading,h=(f.isFetching,f.isError),E=f.error,y=f.data,j=Object(A.useMutation)(R,{onSuccess:()=>{F({message:"Suppr\xe9ssion r\xe9ussi",open:!0,severity:"success"})},onError:()=>{F({message:"Echec lors de l op\xe9ration",open:!0,severity:"error"})},onSettled:()=>{c.invalidateQueries("Mouvementdecaisses")}}),O=Object(A.useQuery)(["caisses",1],()=>Object(W.b)(0,100,"",""),{keepPreviousData:!0}),w=Object(o.useState)(null),x=Object(r.a)(w,2),C=x[0],M=x[1],k=Object(o.useState)({mode:"affichage",action:"ajout",affichageTable:!0}),D=Object(r.a)(k,2),L=D[0],N=D[1],Q=Object(o.useState)({severity:"severity",message:"",open:!1,handleCloseAlert:()=>se()}),I=Object(r.a)(Q,2),T=I[0],F=I[1],z=Object(o.useState)("Liste des mouvements"),_=Object(r.a)(z,2),Z=_[0],ee=_[1],te=Object(o.useState)(!1),ae=Object(r.a)(te,2),ne=ae[0],re=ae[1],se=()=>{F(Object(n.a)(Object(n.a)({},B.a),{},{open:!1}))},oe=[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"caisse",label:"caisse",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e.nom}},{name:"typedemouvement",label:"Type de mouvement",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>i.a.createElement("small",{className:Object(X.default)({"border-radius-4  text-white px-2 py-2px":!0,"bg-error":"debit"===e,"bg-green":"credit"===e})},e)}},{name:"montant",label:"Montant",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e.toLocaleString("fr-FR")}},{name:"datemouvement",label:"Date mouvement",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e?" ":Object(K.a)(Object(U.a)(e),"dd/MM/yyyy hh:mm")}},{name:"nouveausolde",label:"Nouveau solde",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e.toLocaleString("fr-FR")}},{name:"commentaire",label:"Commentaire",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"motif",label:"Motif",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{display:"excluded",filter:!1,sort:!1,customBodyRender:(e,t,a)=>i.a.createElement("div",null,i.a.createElement(m.a,{size:"small",onClick:()=>{(e=>{N({mode:"edition",action:"misajour",affichageTable:!1}),M(e),ee("Mise \xe0 jour de mouvementdecaisse")})({id:t.rowData[0],caisse:t.rowData[1],typedemouvement:t.rowData[2],montant:t.rowData[3],datemouvement:t.rowData[4],nouveausolde:t.rowData[5],commentaire:t.rowData[6],motif:t.rowData[7]})}},i.a.createElement(d.a,{color:"primary"},"edit")),i.a.createElement(m.a,{size:"small",onClick:()=>(e=>{re(!0),M(e)})({id:t.rowData[0]})},i.a.createElement(d.a,{color:"error"},"delete")),i.a.createElement(m.a,{size:"small",onClick:()=>(t.rowData[0],void console.log("affichage de details"))},i.a.createElement(d.a,null,"arrow_right_alt")))}}];return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(B.a,{message:T.message,severity:T.severity,open:T.open,handleAlertClose:se}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(Y.a,{routeSegments:[{name:"Mouvements de caisse"}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(p.a,{container:!0,spacing:"3"},i.a.createElement(p.a,{key:"stat",item:!0,md:3,sm:6,xs:12},i.a.createElement($.a,{to:"/caisse/mouvementdecaisse"},i.a.createElement(v.a,{elevation:3,className:"p-5 flex"},i.a.createElement("div",null,i.a.createElement(m.a,{size:"small",className:"p-2 bg-light-gray"},i.a.createElement(d.a,{color:"primary"},"wallet"))),i.a.createElement("div",{className:"ml-4"},i.a.createElement("h3",{className:"mt-1 text-25"},O.isLoading?i.a.createElement(q.a,{message:"chargement..."}):O.data["hydra:member"][0].solde.toLocaleString("fr-FR")),i.a.createElement("p",{className:"m-0 text-muted"},"SOLDE DE CAISSE"))))))),"affichage"===L.mode?i.a.createElement(b.a,{in:L.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,g?i.a.createElement(q.a,{message:"Chargement des donn\xe9es",type:"info"}):h?i.a.createElement(q.a,{message:"Erreur lors du chargement des donn\xe9es::"+E,type:"error"}):i.a.createElement(H.a,{tag:"div",blocking:!1},i.a.createElement(J.a,{theme:Object(S.a)()},i.a.createElement(l.a,{title:Z,data:y["hydra:member"],columns:oe,options:Object(n.a)(Object(n.a)({},u.a),{},{serverSide:!0,count:y["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:a.rowsPerPage,onChangePage:e=>(e=>{s(Object(n.a)(Object(n.a)({},a),{},{page:e})),c.invalidateQueries("Mouvementdecaisses")})(e),onChangeRowsPerPage:e=>(e=>{s(Object(n.a)(Object(n.a)({},a),{},{rowsPerPage:e})),console.log("idbre de ligne par page:"+e),c.invalidateQueries("Mouvementdecaisses")})(e),onSearchChange:e=>(e=>{var t;s(Object(n.a)(Object(n.a)({},a),{},{recherche:null!==e&&void 0!==e?e:""})),console.log(null!==(t="texte a chercher"+e)&&void 0!==t?t:""),c.invalidateQueries("Mouvementdecaisses")})(e),onFilterChange:()=>{console.log("le filtre a chang\xe9")}})}))),i.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(G.a,{open:ne,onConfirmDialogClose:()=>{re(!1)},onYesClick:()=>{re(!1),j.mutate(C)},text:"Confirmez la suppression de "+(null===C||void 0===C?void 0:C.name)})))):i.a.createElement(V,{action:L.action,lemouvementdecaisse:C,handleFermeture:()=>{N({mode:"affichage",action:"nouveau",affichageTable:!0}),ee("Liste des mouvements")}}))}}}]);