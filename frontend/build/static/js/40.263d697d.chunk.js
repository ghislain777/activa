(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[40],{2319:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return m})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return b}));var r=a(8),n=a.n(r),o=a(18),i=a(20);function s(e,t,a,r){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(n.a.mark((function e(t,a,r,o){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,i.b.get("/modedepayements?itemsPerPage="+a+"&page="+t+"&nom="+r);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t,a,r){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(n.a.mark((function e(t,a,r,o){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,i.b.get("/modedepayements?itemsPerPage="+a+"&page="+t+"&nom="+r+"&actif=1");case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.post("/modedepayements",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.put("/modedepayements/"+t.id,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.delete("/modedepayements/"+t.id,{method:"DELETE",herdears:{Accept:"application/json"},data:t.id});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2398:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return m})),a.d(t,"d",(function(){return p}));var r=a(8),n=a.n(r),o=a(18),i=a(20);function s(e,t,a,r){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(n.a.mark((function e(t,a,r,o){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,i.b.get("/partenaires?itemsPerPage="+a+"&page="+t+"&nom="+r);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.post("/partenaires",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.put("/partenaires/"+t.id,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.delete("/partenaires/"+t.id,{method:"DELETE",herdears:{Accept:"application/json"},data:t.id});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3171:function(e,t,a){"use strict";a.r(t);var r=a(6),n=a(12),o=a(0),i=a.n(o),s=a(228),c=a.n(s),l=a(231),u=a(224),m=a(606),d=a(64),p=a(1241),v=a(144),b=a(1201),f=a(45),h=a(79),y=a(229),g=a(783),E=a(2398),j=a(73),O=a(84),w=a(32),x=a(117),P=a(266),C=a(131),k=(a(367),a(368),a(369),a(2319)),S=a(60);const M=h.b().shape({civilite:h.c().required("Le champs civilit\xe9  est requis"),nom:h.c().required("Le champs Nom est requis"),prenom:h.c().required("Le champs Pr\xe9nom est requis"),telephone:h.c().required("Le champs T\xe9l\xe9phone est requis"),modedepayement:h.c().required("Mode de payement requis"),tauxdecomission:h.a("Le taux de comission doit \xeatre une entier").required("Le taux de comission est requis").integer()});function D({id:e,lepartenaire:t,handleFermeture:a,action:s}){var c,l,u,p,b;const h=Object(w.useQueryClient)(),D=Object(w.useMutation)(E.a,{onSuccess:()=>{h.invalidateQueries("Partenaires"),I({message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0})},onError:()=>{h.invalidateQueries("Partenaires"),I({message:"Echec lors de l op\xe9ration",open:!0,severity:"error",automaticClose:!0})}}),L=Object(w.useMutation)(E.c,{onSuccess:()=>{h.invalidateQueries("Partenaires"),I({message:"Mise \xe0 jour r\xe9ussie",open:!0,severity:"success",automaticClose:!0})},onError:()=>{h.invalidateQueries("Partenaires"),I({message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0})}}),q=Object(w.useQuery)(["Modedepayements",1],()=>Object(k.c)(0,20,"",""),{keepPreviousData:!0}),N=q.isLoading,Q=(q.isFetching,q.isError,q.error,q.data),R=Object(o.useState)(t),T=Object(n.a)(R,2),A=T[0],B=(T[1],Object(o.useState)({severity:"severity",message:"",open:!1,automaticClose:!0})),z=Object(n.a)(B,2),F=z[0],I=z[1],J=Object(j.c)({resolver:Object(y.yupResolver)(M),defaultValues:Object(r.a)(Object(r.a)({},A),{},{civilite:null!==(c=null===A||void 0===A?void 0:A.civilite)&&void 0!==c?c:"M.",modedepayement:null!==(l=null===A||void 0===A?void 0:A.modedepayement)&&void 0!==l?l:"/api/modedepayements/1",tauxdecomission:null!==(u=null===A||void 0===A?void 0:A.tauxdecomission)&&void 0!==u?u:0})}),_=J.control,G=J.handleSubmit,V=J.errors,Y=(J.reset,e=>{let t=Object(r.a)(Object(r.a)({},A),e);A?L.mutate(Object(r.a)({},t)):D.mutate(Object(r.a)({},t))});return i.a.createElement("div",null,i.a.createElement(O.a,{message:F.message,severity:F.severity,open:F.open,handleAlertClose:F.automaticClose?a:()=>I(Object(r.a)(Object(r.a)({},F),{},{open:!1}))}),i.a.createElement("form",{onSubmit:G(Y)},i.a.createElement(f.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(f.a,{item:!0},i.a.createElement(P.a,{displayEmpty:!0,id:"civilite",label:"Civilit\xe9",nom:"civilite",liste:[{id:1,label:"M.",value:"M."},{id:2,label:"Mme",value:"Mme"},{id:3,label:"Mlle",value:"Mlle"}],control:_,valeur:null!==(p=null===A||void 0===A?void 0:A.civilite)&&void 0!==p?p:" ",error:V.civilite})),i.a.createElement(f.a,{item:!0},i.a.createElement(x.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===A||void 0===A?void 0:A.nom,control:_,error:V.nom})),i.a.createElement(f.a,{item:!0},i.a.createElement(x.a,{id:"prenom",nom:"prenom",label:"Pr\xe9nom",valeur:null===A||void 0===A?void 0:A.prenom,control:_,error:V.prenom})),i.a.createElement(f.a,{item:!0},i.a.createElement(x.a,{id:"adresse",nom:"adresse",label:"Adresse",valeur:null===A||void 0===A?void 0:A.adresse,control:_,error:V.adresse})),i.a.createElement(f.a,{item:!0},i.a.createElement(x.a,{id:"telephone",nom:"telephone",label:"T\xe9l\xe9phone",valeur:null===A||void 0===A?void 0:A.telephone,control:_,error:V.telephone})),i.a.createElement(f.a,{item:!0},i.a.createElement(x.a,{id:"tauxdecomission",nom:"tauxdecomission",label:"Taux de comission(en %)",valeur:null===A||void 0===A?void 0:A.tauxdecomission,control:_,error:V.tauxdecomission})),i.a.createElement(f.a,{item:!0},N?i.a.createElement(S.a,{message:"chargement des moyens de payement..."}):i.a.createElement(C.a,{id:"modedepayement",name:"modedepayement",label:"Moyen de payement",table:"modedepayement",control:_,options:Q["hydra:member"],error:V.modedepayement,valeur:null!==(b=null===A||void 0===A?void 0:A.modedepayement)&&void 0!==b?b:""})),i.a.createElement(f.a,{item:!0},i.a.createElement(f.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(f.a,{item:!0},i.a.createElement(v.a,{color:"primary",variant:"contained",type:"submit",onClick:G(Y)},L.isLoading||D.isLoading?i.a.createElement(g.a,{color:"inherit"}):i.a.createElement(m.a,null,"send"),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===s?i.a.createElement(d.a,null,"Enregistrer"):i.a.createElement(d.a,null,"Mettre \xe0 jour")))),i.a.createElement(f.a,{item:!0},i.a.createElement(v.a,{variant:"outlined",color:"secondary",onClick:function(){a()}},"Annuler")))))))}var L=a(204),q=a(230),N=a(300);a(443),a(20);t.default=()=>{const e=Object(o.useState)({page:0,rowsPerPage:20,recherche:"",filtre:""}),t=Object(n.a)(e,2),a=t[0],s=t[1],h=Object(w.useQueryClient)(),y=Object(w.useQuery)(["Partenaires",a.page,a.rowsPerPage,a.recherche,a.filtre],()=>Object(E.b)(a.page,a.rowsPerPage,a.recherche,a.filtre),{keepPreviousData:!0}),g=y.isLoading,j=(y.isFetching,y.isError),x=y.error,P=y.data,C=Object(w.useMutation)(E.d,{onSuccess:()=>{_({message:"Suppr\xe9ssion r\xe9ussi",open:!0,severity:"success"})},onError:()=>{_({message:"Echec lors de l op\xe9ration",open:!0,severity:"error"})},onSettled:()=>{h.invalidateQueries("Partenaires")}}),k=Object(o.useState)(null),M=Object(n.a)(k,2),Q=M[0],R=M[1],T=Object(o.useState)({mode:"affichage",action:"ajout",affichageTable:!0}),A=Object(n.a)(T,2),B=A[0],z=A[1],F=Object(o.useState)({severity:"severity",message:"",open:!1,handleCloseAlert:()=>Z()}),I=Object(n.a)(F,2),J=I[0],_=I[1],G=Object(o.useState)("Liste des partenaires"),V=Object(n.a)(G,2),Y=V[0],H=V[1],K=Object(o.useState)(!1),U=Object(n.a)(K,2),W=U[0],X=U[1],Z=()=>{_(Object(r.a)(Object(r.a)({},O.a),{},{open:!1}))},$=[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"civilite",label:"Civilit\xe9",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"prenom",label:"Pr\xe9nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"adresse",label:"Adresse",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"telephone",label:"T\xe9l\xe9phone",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"tauxdecomission",label:"taux de comission",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"modedepayement",label:"Moyen de payement",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null===e||void 0===e?void 0:e.nom}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,customBodyRender:(e,t,a)=>i.a.createElement("div",null,i.a.createElement(u.a,{size:"small",onClick:()=>{(e=>{z({mode:"edition",action:"misajour",affichageTable:!1}),R(e),H("Mise \xe0 jour de partenaire")})({id:t.rowData[0],civilite:t.rowData[1],nom:t.rowData[2],prenom:t.rowData[3],adresse:t.rowData[4],telephone:t.rowData[5],tauxdecomission:t.rowData[6]})}},i.a.createElement(m.a,{color:"primary"},"edit")),i.a.createElement(u.a,{size:"small",onClick:()=>(e=>{X(!0),R(e)})({id:t.rowData[0]})},i.a.createElement(m.a,{color:"error"},"delete")),i.a.createElement(u.a,{size:"small",onClick:()=>(t.rowData[0],void console.log("affichage de details"))},i.a.createElement(m.a,null,"arrow_right_alt")))}}];return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(O.a,{message:J.message,severity:J.severity,open:J.open,handleAlertClose:Z}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(L.a,{routeSegments:[{name:"Gestion des partenaires"}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(d.a,{variant:"h4"},Y)),"affichage"===B.mode?i.a.createElement(p.a,{in:B.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(v.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>(z({mode:"edition",action:"ajout",affichageTable:!1}),R(null),void H("Nouveau partenaire"))},"Nouveau partenaire"),g?i.a.createElement(S.a,{message:"Chargement des donn\xe9es",type:"info"}):j?i.a.createElement(S.a,{message:"Erreur lors du chargement des donn\xe9es::"+x,type:"error"}):i.a.createElement(N.a,{tag:"div",blocking:!1},i.a.createElement(c.a,{title:Y,data:P["hydra:member"],columns:$,options:Object(r.a)(Object(r.a)({},l.a),{},{serverSide:!0,count:P["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:a.rowsPerPage,onChangePage:e=>(e=>{s(Object(r.a)(Object(r.a)({},a),{},{page:e})),h.invalidateQueries("Partenaires")})(e),onChangeRowsPerPage:e=>(e=>{s(Object(r.a)(Object(r.a)({},a),{},{rowsPerPage:e})),console.log("nombre de ligne par page:"+e),h.invalidateQueries("Partenaires")})(e),onSearchChange:e=>(e=>{var t;s(Object(r.a)(Object(r.a)({},a),{},{recherche:null!==e&&void 0!==e?e:""})),console.log(null!==(t="texte a chercher"+e)&&void 0!==t?t:""),h.invalidateQueries("Partenaires")})(e),onFilterChange:()=>{console.log("le filtre a chang\xe9")}})})),i.a.createElement(b.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(q.a,{open:W,onConfirmDialogClose:()=>{X(!1)},onYesClick:()=>{X(!1),C.mutate(Q)},text:"Confirmez la suppression de "+(null===Q||void 0===Q?void 0:Q.name)})))):i.a.createElement(f.a,{container:!0,spacing:6,alignContent:"center",justify:"center"},i.a.createElement(f.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(b.a,{className:"px-6 pt-2 pb-4"},i.a.createElement(D,{action:B.action,lepartenaire:Q,handleFermeture:()=>{z({mode:"affichage",action:"nouveau",affichageTable:!0}),H("Liste des partenaires")}})))))}}}]);