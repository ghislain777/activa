(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[98],{3177:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(12),i=a(27),o=a(0),s=a.n(o),l=a(135),c=a.n(l),u=a(100),m=a(164),d=a(624),p=a(58),g=a(1262),b=a(97),v=a(448),y=a(36),E=a(99),j=a(21),h=a(451),O=a(450),f=a(449),q=a(372),C=a(536),w=a(56),P=a(63),S=a(17),x=a(43),k=a(57),D=(a(214),a(215),a(33)),N=(a(183),a(240),a(9)),Q=a(447),I=(a(213),a(7)),L=a.n(I),M=a(10);function R(){return(R=Object(M.a)(L.a.mark((function e(t,a,r,n){var i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,N.b.get("/typederequetes?itemsPerPage="+a+"&page="+t+"&id="+r);case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const T=y.b().shape({typederequete:y.c().required("Le champs Type de requete est requis"),nom:y.c().required("Le champs Nom est requis"),description:y.c().required("Le champs Description est requis")});function z({id:e,lecategoriederequete:t,handleFermeture:a,action:i}){var l,c,u,g;const y=Object(S.useQueryClient)(),I=Object(S.useMutation)(C.a,{onSuccess:()=>{y.invalidateQueries("Categoriederequetes"),_({message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0})},onError:()=>{y.invalidateQueries("Categoriederequetes"),_({message:"Echec lors de l op\xe9ration",open:!0,severity:"error",automaticClose:!0})}}),L=Object(S.useMutation)(C.c,{onSuccess:()=>{y.invalidateQueries("Categoriederequetes"),_({message:"Mise \xe0 jour r\xe9ussie",open:!0,severity:"success",automaticClose:!0})},onError:()=>{y.invalidateQueries("Categoriederequetes"),_({message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0})}}),M=Object(S.useQuery)(["Typederequetes",1],()=>function(e,t,a,r){return R.apply(this,arguments)}(0,100,"",""),{keepPreviousData:!0}),z=Object(o.useState)(t),A=Object(n.a)(z,2),B=A[0],F=(A[1],Object(o.useState)({severity:"severity",message:"",open:!1,automaticClose:!0})),J=Object(n.a)(F,2),W=J[0],_=J[1],V=Object(w.c)({resolver:Object(E.yupResolver)(T),defaultValues:Object(r.a)(Object(r.a)({},t),{},{id:null!==(l=null===t||void 0===t?void 0:t.id)&&void 0!==l?l:"",typederequete:t?"/api/typederequetes/"+t.typederequete.id:"/api/typederequetes/1",nom:null!==(c=null===t||void 0===t?void 0:t.nom)&&void 0!==c?c:"",description:null!==(u=null===t||void 0===t?void 0:t.description)&&void 0!==u?u:""})}),Y=V.control,G=V.handleSubmit,H=V.errors,K=(V.reset,e=>{let t=Object(r.a)(Object(r.a)({},B),e);B?L.mutate(Object(r.a)({},t)):I.mutate(Object(r.a)({},t))});function U(){a()}return s.a.createElement("div",null,s.a.createElement(P.a,{message:W.message,severity:W.severity,open:W.open,handleAlertClose:W.automaticClose?a:()=>_(Object(r.a)(Object(r.a)({},W),{},{open:!1}))}),s.a.createElement(j.a,{container:!0,spacing:1,justify:"center"},s.a.createElement(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,justify:"center"},s.a.createElement(Q.a,{theme:Object(N.a)()},s.a.createElement(v.a,null,s.a.createElement(h.a,{action:s.a.createElement(m.a,{"aria-label":"",onClick:U},"x"),title:"ajout"===i?"Nouvelle cat\xe9gorie":"Mise \xe0 jour de categoriederequete",subheader:""}),s.a.createElement(O.a,{className:" px-6 pt-6 pb-6"}," ",s.a.createElement("form",{onSubmit:G(K)},s.a.createElement(j.a,{container:!0,spacing:4,direction:"column"},s.a.createElement(j.a,{item:!0},M.isLoading?s.a.createElement(D.a,{message:"chargement des typederequetes"}):s.a.createElement(k.a,{id:"typederequete",name:"typederequete",label:"Choisir un typederequete",table:"typederequete",control:Y,options:M.data["hydra:member"],error:H.typederequete,valeur:null!==(g=null===B||void 0===B?void 0:B.typederequete)&&void 0!==g?g:""})),s.a.createElement(j.a,{item:!0},s.a.createElement(x.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===B||void 0===B?void 0:B.nom,control:Y,error:H.nom})),s.a.createElement(j.a,{item:!0},s.a.createElement(x.a,{id:"description",nom:"description",label:"Description",valeur:null===B||void 0===B?void 0:B.description,control:Y,error:H.description}))))),s.a.createElement(f.a,null,s.a.createElement(j.a,{container:!0,alignItems:"center",justify:"space-between"},s.a.createElement(j.a,{item:!0},s.a.createElement(b.a,{color:"primary",variant:"contained",type:"submit",onClick:G(K)},L.isLoading||I.isLoading?s.a.createElement(q.a,{color:"inherit"}):s.a.createElement(d.a,null,"send"),s.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===i?s.a.createElement(p.a,null,"Enregistrer"):s.a.createElement(p.a,null,"Mettre \xe0 jour")))),s.a.createElement(j.a,{item:!0},s.a.createElement(b.a,{variant:"outlined",color:"secondary",onClick:U},"Annuler")))))))))}var A=a(142),B=a(136),F=a(150),J=(a(239),a(115));Object(J.a)(e=>{e.palette,Object(i.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185},userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});t.default=()=>{const e=Object(o.useState)({page:0,rowsPerPage:20,recherche:"",filtre:""}),t=Object(n.a)(e,2),a=t[0],i=t[1],l=Object(S.useQueryClient)(),y=Object(S.useQuery)(["Categoriederequetes",a.page,a.rowsPerPage,a.recherche,a.filtre],()=>Object(C.b)(a.page,a.rowsPerPage,a.recherche,a.filtre),{keepPreviousData:!0}),E=y.isLoading,j=(y.isFetching,y.isError),h=y.error,O=y.data,f=Object(S.useMutation)(C.d,{onSuccess:()=>{_({message:"Suppr\xe9ssion r\xe9ussi",open:!0,severity:"success"})},onError:()=>{_({message:"Echec lors de l op\xe9ration",open:!0,severity:"error"})},onSettled:()=>{l.invalidateQueries("Categoriederequetes")}}),q=Object(o.useState)(null),w=Object(n.a)(q,2),x=w[0],k=w[1],I=Object(o.useState)({mode:"affichage",action:"ajout",affichageTable:!0}),L=Object(n.a)(I,2),M=L[0],R=L[1],T=Object(o.useState)({severity:"severity",message:"",open:!1,handleCloseAlert:()=>$()}),J=Object(n.a)(T,2),W=J[0],_=J[1],V=Object(o.useState)("Liste des cat\xe9gories de requ\xeates"),Y=Object(n.a)(V,2),G=Y[0],H=Y[1],K=Object(o.useState)(!1),U=Object(n.a)(K,2),X=U[0],Z=U[1],$=()=>{_(Object(r.a)(Object(r.a)({},P.a),{},{open:!1}))},ee=[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"typederequete",label:"Type de requete",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e.nom}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,customBodyRender:(e,t,a)=>s.a.createElement("div",null,s.a.createElement(m.a,{size:"small",onClick:()=>{(e=>{R({mode:"edition",action:"misajour",affichageTable:!1}),k(e),H("Mise \xe0 jour de categoriederequete")})({id:t.rowData[0],typederequete:t.rowData[1],nom:t.rowData[2],description:t.rowData[3]})}},s.a.createElement(d.a,{color:"primary"},"edit")),s.a.createElement(m.a,{size:"small",onClick:()=>(e=>{Z(!0),k(e)})({id:t.rowData[0]})},s.a.createElement(d.a,{color:"error"},"delete")),s.a.createElement(m.a,{size:"small",onClick:()=>(t.rowData[0],void console.log("affichage de details"))},s.a.createElement(d.a,null,"arrow_right_alt")))}}];return s.a.createElement("div",{className:"m-sm-30"},s.a.createElement(P.a,{message:W.message,severity:W.severity,open:W.open,handleAlertClose:$}),s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(A.a,{routeSegments:[{name:"gestion des cat\xe9gories de requ\xeates"}]})),s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(p.a,{variant:"h4"},G)),"affichage"===M.mode?s.a.createElement(g.a,{in:M.affichageTable,direction:"right",unmountOnExit:!0},s.a.createElement("div",null,s.a.createElement(b.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>(R({mode:"edition",action:"ajout",affichageTable:!1}),k(null),void H("Nouvelle cat\xe9gorie"))},"Nouvelle cat\xe9gorie"),E?s.a.createElement(D.a,{message:"Chargement des donn\xe9es",type:"info"}):j?s.a.createElement(D.a,{message:"Erreur lors du chargement des donn\xe9es::"+h,type:"error"}):s.a.createElement(F.a,{tag:"div",blocking:!1},s.a.createElement(Q.a,{theme:Object(N.a)()},s.a.createElement(c.a,{title:G,data:O["hydra:member"],columns:ee,options:Object(r.a)(Object(r.a)({},u.a),{},{serverSide:!0,count:O["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:a.rowsPerPage,onChangePage:e=>(e=>{i(Object(r.a)(Object(r.a)({},a),{},{page:e})),l.invalidateQueries("Categoriederequetes")})(e),onChangeRowsPerPage:e=>(e=>{i(Object(r.a)(Object(r.a)({},a),{},{rowsPerPage:e})),console.log("idbre de ligne par page:"+e),l.invalidateQueries("Categoriederequetes")})(e),onSearchChange:e=>(e=>{var t;i(Object(r.a)(Object(r.a)({},a),{},{recherche:null!==e&&void 0!==e?e:""})),console.log(null!==(t="texte a chercher"+e)&&void 0!==t?t:""),l.invalidateQueries("Categoriederequetes")})(e),onFilterChange:()=>{console.log("le filtre a chang\xe9")}})}))),s.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},s.a.createElement(B.a,{open:X,onConfirmDialogClose:()=>{Z(!1)},onYesClick:()=>{Z(!1),f.mutate(x)},text:"Confirmez la suppression de "+(null===x||void 0===x?void 0:x.name)})))):s.a.createElement(z,{action:M.action,lecategoriederequete:x,handleFermeture:()=>{R({mode:"affichage",action:"nouveau",affichageTable:!0}),H("Liste des cat\xe9gories de requ\xeate")}}))}}}]);