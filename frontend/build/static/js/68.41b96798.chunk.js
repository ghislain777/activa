(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[68],{2401:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return m})),a.d(t,"d",(function(){return d}));var r=a(8),n=a.n(r),s=a(16),o=a(10);function i(e,t,a,r){return c.apply(this,arguments)}function c(){return(c=Object(s.a)(n.a.mark((function e(t,a,r,s){var i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,o.b.get("/villes?itemsPerPage="+a+"&page="+t+"&nom="+r);case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return u.apply(this,arguments)}function u(){return(u=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.post("/villes",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return p.apply(this,arguments)}function p(){return(p=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.put("/villes/"+t.id,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.delete("/villes/"+t.id,{method:"DELETE",herdears:{Accept:"application/json"},data:t.id});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3155:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(12),s=a(0),o=a.n(s),i=a(179),c=a.n(i),l=a(145),u=a(228),m=a(608),p=a(65),d=a(1245),v=a(144),b=a(1205),f=a(46),h=a(61),g=a(162),j=a(785),E=a(8),y=a.n(E),O=a(16),C=a(10);function w(){return(w=Object(O.a)(y.a.mark((function e(t,a,r,n){var s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,C.b.get("/communes?itemsPerPage="+a+"&page="+t+"&nom="+r);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return P.apply(this,arguments)}function P(){return(P=Object(O.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.b.post("/communes",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return S.apply(this,arguments)}function S(){return(S=Object(O.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.b.put("/communes/"+t.id,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return L.apply(this,arguments)}function L(){return(L=Object(O.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.b.delete("/communes/"+t.id,{method:"DELETE",herdears:{Accept:"application/json"},data:t.id});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=a(70),N=a(76),A=a(27),R=a(71),T=a(104),q=(a(302),a(303),a(268),a(2401)),M=a(47);const B=h.b().shape({ville:h.c().required("Le champs ID est requis"),nom:h.c().required("Le champs Nom est requis"),description:h.c().required("Le champs Description est requis")});function F({id:e,lecommune:t,handleFermeture:a,action:i}){var c;const l=Object(A.useQueryClient)(),u=Object(A.useMutation)(x,{onSuccess:()=>{l.invalidateQueries("Communes"),D({message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0})},onError:()=>{l.invalidateQueries("Communes"),D({message:"Echec lors de l op\xe9ration",open:!0,severity:"error",automaticClose:!0})}}),d=Object(A.useMutation)(k,{onSuccess:()=>{l.invalidateQueries("Communes"),D({message:"Mise \xe0 jour r\xe9ussie",open:!0,severity:"success",automaticClose:!0})},onError:()=>{l.invalidateQueries("Communes"),D({message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0})}}),b=Object(A.useQuery)(["Villes",1],()=>Object(q.b)(0,100,"",""),{keepPreviousData:!0}),h=b.isLoading,E=(b.isFetching,b.isError,b.error,b.data),y=Object(s.useState)(t),O=Object(n.a)(y,2),C=O[0],w=(O[1],Object(s.useState)({severity:"severity",message:"",open:!1,automaticClose:!0})),P=Object(n.a)(w,2),S=P[0],D=P[1],L=Object(Q.c)({resolver:Object(g.yupResolver)(B),defaultValues:{ville:t?"/api/villes/"+t.ville.id:"/api/villes/1"}}),F=L.control,I=L.handleSubmit,z=L.errors,V=(L.reset,e=>{let t=Object(r.a)(Object(r.a)({},C),e);C?d.mutate(Object(r.a)({},t)):u.mutate(Object(r.a)({},t))});return o.a.createElement("div",null,o.a.createElement(N.a,{message:S.message,severity:S.severity,open:S.open,handleAlertClose:S.automaticClose?a:()=>D(Object(r.a)(Object(r.a)({},S),{},{open:!1}))}),o.a.createElement("form",{onSubmit:I(V)},o.a.createElement(f.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(f.a,{item:!0},h?o.a.createElement(M.a,{message:"chargement des villes"}):o.a.createElement(T.a,{id:"ville",name:"ville",label:"Choisir une ville",table:"ville",control:F,options:E["hydra:member"],error:z.ville,valeur:null!==(c=null===C||void 0===C?void 0:C.ville)&&void 0!==c?c:""})),o.a.createElement(f.a,{item:!0},o.a.createElement(R.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===C||void 0===C?void 0:C.nom,control:F,error:z.nom})),o.a.createElement(f.a,{item:!0},o.a.createElement(R.a,{id:"description",nom:"description",label:"Description",valeur:null===C||void 0===C?void 0:C.description,control:F,error:z.description})),o.a.createElement(f.a,{item:!0},o.a.createElement(f.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(f.a,{item:!0},o.a.createElement(v.a,{color:"primary",variant:"contained",type:"submit",onClick:I(V)},d.isLoading||u.isLoading?o.a.createElement(j.a,{color:"inherit"}):o.a.createElement(m.a,null,"send"),o.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===i?o.a.createElement(p.a,null,"Enregistrer"):o.a.createElement(p.a,null,"Mettre \xe0 jour")))),o.a.createElement(f.a,{item:!0},o.a.createElement(v.a,{variant:"outlined",color:"secondary",onClick:function(){a()}},"Annuler")))))))}var I=a(163),z=a(180),V=a(232);a(371);t.default=()=>{const e=Object(s.useState)({page:0,rowsPerPage:20,recherche:"",filtre:""}),t=Object(n.a)(e,2),a=t[0],i=t[1],h=Object(A.useQueryClient)(),g=Object(A.useQuery)(["Communes",a.page,a.rowsPerPage,a.recherche,a.filtre],()=>function(e,t,a,r){return w.apply(this,arguments)}(a.page,a.rowsPerPage,a.recherche,a.filtre),{keepPreviousData:!0}),j=g.isLoading,E=(g.isFetching,g.isError),y=g.error,O=g.data,C=Object(A.useMutation)(D,{onSuccess:()=>{Y({message:"Suppr\xe9ssion r\xe9ussi",open:!0,severity:"success"})},onError:()=>{Y({message:"Echec lors de l op\xe9ration",open:!0,severity:"error"})},onSettled:()=>{h.invalidateQueries("Communes")}}),x=Object(s.useState)(null),P=Object(n.a)(x,2),k=P[0],S=P[1],L=Object(s.useState)({mode:"affichage",action:"ajout",affichageTable:!0}),Q=Object(n.a)(L,2),R=Q[0],T=Q[1],q=Object(s.useState)({severity:"severity",message:"",open:!1,handleCloseAlert:()=>_()}),B=Object(n.a)(q,2),J=B[0],Y=B[1],G=Object(s.useState)("Liste des communes"),H=Object(n.a)(G,2),K=H[0],U=H[1],W=Object(s.useState)(!1),X=Object(n.a)(W,2),Z=X[0],$=X[1],_=()=>{Y(Object(r.a)(Object(r.a)({},N.a),{},{open:!1}))},ee=[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"nom",label:"Commune",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"ville",label:"Ville",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e.nom}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,customBodyRender:(e,t,a)=>o.a.createElement("div",null,o.a.createElement(u.a,{size:"small",onClick:()=>{(e=>{T({mode:"edition",action:"misajour",affichageTable:!1}),S(e),U("Mise \xe0 jour de commune")})({id:t.rowData[0],ville:t.rowData[2],nom:t.rowData[1],description:t.rowData[3]})}},o.a.createElement(m.a,{color:"primary"},"edit")))}}];return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(N.a,{message:J.message,severity:J.severity,open:J.open,handleAlertClose:_}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(I.a,{routeSegments:[{name:"Liste des communes"}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(p.a,{variant:"h4"},K)),"affichage"===R.mode?o.a.createElement(d.a,{in:R.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement(v.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>(T({mode:"edition",action:"ajout",affichageTable:!1}),S(null),void U("Nouvelle Commune"))},"Nouvelle Commune"),j?o.a.createElement(M.a,{message:"Chargement des donn\xe9es",type:"info"}):E?o.a.createElement(M.a,{message:"Erreur lors du chargement des donn\xe9es::"+y,type:"error"}):o.a.createElement(V.a,{tag:"div",blocking:!1},o.a.createElement(c.a,{title:K,data:O["hydra:member"],columns:ee,options:Object(r.a)(Object(r.a)({},l.a),{},{serverSide:!0,count:O["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:a.rowsPerPage,onChangePage:e=>(e=>{i(Object(r.a)(Object(r.a)({},a),{},{page:e})),h.invalidateQueries("Communes")})(e),onChangeRowsPerPage:e=>(e=>{i(Object(r.a)(Object(r.a)({},a),{},{rowsPerPage:e})),console.log("nombre de ligne par page:"+e),h.invalidateQueries("Communes")})(e),onSearchChange:e=>(e=>{var t;i(Object(r.a)(Object(r.a)({},a),{},{recherche:null!==e&&void 0!==e?e:""})),console.log(null!==(t="texte a chercher"+e)&&void 0!==t?t:""),h.invalidateQueries("Communes")})(e),onFilterChange:()=>{console.log("le filtre a chang\xe9")}})})),o.a.createElement(b.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(z.a,{open:Z,onConfirmDialogClose:()=>{$(!1)},onYesClick:()=>{$(!1),C.mutate(k)},text:"Confirmez la suppression de "+(null===k||void 0===k?void 0:k.name)})))):o.a.createElement(f.a,{container:!0,spacing:6,alignContent:"center",justify:"center"},o.a.createElement(f.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(b.a,{className:"px-6 pt-2 pb-4"},o.a.createElement(F,{action:R.action,lecommune:k,handleFermeture:()=>{T({mode:"affichage",action:"nouveau",affichageTable:!0}),U("Liste des communes")}})))))}}}]);