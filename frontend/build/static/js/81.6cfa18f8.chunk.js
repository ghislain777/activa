(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[81],{3146:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(12),o=a(0),i=a.n(o),s=a(7),c=a.n(s),l=a(10),u=a(9);class m{getTouslesStatuttransformations(e,t,a,r){return Object(l.a)(c.a.mark((function r(){var n;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,u.b.get("/statuttransformations?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return n=r.sent,r.abrupt("return",n.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutStatuttransformation(e){return Object(l.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.post("/statuttransformations",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourStatuttransformation(e){return Object(l.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/statuttransformations/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionStatuttransformation(e){return Object(l.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.delete("/statuttransformations/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}var d=a(17),p=a(135),b=a.n(p),f=a(100),g=a(1222),j=a(2292),h=a(2213),O=a(59),E=a(1262),v=a(97),S=a(450),y=a(64),C=a(142),w=a(136),x=a(33),P=a(150),D=(a(240),a(449)),k=a(36),A=a(21),M=a(453),N=a(164),q=a(452),R=a(451),I=a(375),L=a(43),T=(a(58),a(214),a(215),a(183),a(241),a(377),a(805));function Q(e){var t,a;const r=e.state,n=e.fonctions,o=e.queries,s=e.useform,c=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(A.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(A.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(D.a,{theme:Object(u.a)()},i.a.createElement(S.a,null,i.a.createElement(M.a,{action:i.a.createElement(N.a,{"aria-label":"",onClick:n.AnnulerEnregistrement},"x"),title:"ajout"===r.pagestate.action?"Nouveau statut":"Mise \xe0 jour ",subheader:""}),i.a.createElement(q.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:s.handleSubmit(c)},i.a.createElement(A.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(A.a,{item:!0},i.a.createElement(L.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=r.statuttransformation)||void 0===t?void 0:t.nom,control:s.control,error:s.errors.nom})),i.a.createElement(A.a,{item:!0},i.a.createElement(L.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=r.statuttransformation)||void 0===a?void 0:a.description,control:s.control,error:s.errors.description}))))),i.a.createElement(R.a,null,i.a.createElement(A.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(A.a,{item:!0},i.a.createElement(v.a,{color:"primary",variant:"contained",type:"submit",onClick:s.handleSubmit(c)},o.mutationMiseajour.isLoading||o.mutationAjout.isLoading?i.a.createElement(I.a,{color:"inherit"}):i.a.createElement(T.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===r.pagestate.action?i.a.createElement(O.a,null,"Enregistrer"):i.a.createElement(O.a,null,"Mettre \xe0 jour")))),i.a.createElement(A.a,{item:!0},i.a.createElement(v.a,{variant:"outlined",color:"secondary",onClick:n.AnnulerEnregistrement},"Annuler")))))))))}var F=e=>{var t,a;const n=e.state,o=e.fonctions,s=e.collonnes,c=e.queries,l=e.useform,m=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(g.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},i.a.createElement(j.a,{id:""},n.dialoguephoto.titre),i.a.createElement(h.a,null,i.a.createElement("img",{src:u.e+"/fichiers/"+n.dialoguephoto.objet+"/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),i.a.createElement(y.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(C.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(O.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(E.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(v.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau statut"),c.queryStatuttransformations.isLoading?i.a.createElement(x.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryStatuttransformations.isError?i.a.createElement(x.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryStatuttransformations.error,type:"error"}):i.a.createElement(P.a,{tag:"div",blocking:!1},i.a.createElement(D.a,{theme:Object(u.a)()},i.a.createElement(b.a,{title:n.titre,data:c.queryStatuttransformations.data["hydra:member"],columns:s,options:Object(r.a)(Object(r.a)({},f.a),{},{serverSide:!0,count:c.queryStatuttransformations.data["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},f.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},f.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(S.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(w.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.statuttransformation)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(Q,{state:n,fonctions:o,queries:c,useform:l,onSubmit:m}))},B=a(27),z=a(78),W=a(2315),J=a(2316),V=a(2317),Y=a(2311),G=a(117),H=a(2222),K=a(587),U=a(2261);Object(G.a)(e=>{e.palette,Object(B.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function X(e){const t=Object(G.a)(e=>{e.palette,Object(B.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(z.p,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(H.a,{xsDown:!0},i.a.createElement(v.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(Y.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(W.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(W.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(J.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(V.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(J.a,{color:"primary"})}]}})({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2]}).map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(K.a,{onClick:()=>e.action({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2]}),key:e.id,value:e.statut},e.icon,"   ",i.a.createElement("span",{className:"ml-5"},e.nom)),i.a.createElement(U.a,null)))))}}]}var Z=a(57),$=(a(213),a(99));t.default=()=>{const e={statuttransformation:{nom:"",description:""},statuttransformation1:null,titre:"Statuts transformation",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(o.useState)(e),a=Object(n.a)(t,2),s=a[0],c=a[1];let l=new m;const u=Object(d.useQueryClient)(),p={handleFermetureAlerte:()=>{c(Object(r.a)(Object(r.a)({},s),{},{titre:"Statuts transformation",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{c(Object(r.a)(Object(r.a)({},s),{},{statuttransformation:null,titre:"Nouveau statut ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{c(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),c(Object(r.a)(Object(r.a)({},s),{},{titre:"Statuts transformation",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{c(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{j.mutate(s.statuttransformation)},handleCloseDialoguephoto:()=>{c(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{c(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{c(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{c(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":c(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",statuttransformation:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":c(Object(r.a)(Object(r.a)({},s),{},{statuttransformation:e,dialogueSuppressionOuvert:!0}))}}},b=Object(d.useQuery)(["Statuttransformations",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>l.getTouslesStatuttransformations(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),f=Object(d.useMutation)(l.ajoutStatuttransformation,{onSuccess:()=>{u.invalidateQueries("Statuttransformations"),c(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{u.invalidateQueries("Statuttransformations"),c(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),g=Object(d.useMutation)(l.miseajourStatuttransformation,{onSuccess:()=>{u.invalidateQueries("Statuttransformations"),c(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{u.invalidateQueries("Statuttransformations"),c(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(d.useMutation)(l.suppressionStatuttransformation,{onSuccess:()=>{c(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{c({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{u.invalidateQueries("Statuttransformations")}}),h={queryStatuttransformations:b,mutationMiseajour:g,mutationAjout:f,mutationSuppression:j},O=X(p),E=k.b().shape({nom:k.c().required("Le champs Nom est requis"),description:k.c().required("Le champs Description est requis")}),v=Object(Z.c)({resolver:Object($.yupResolver)(E),defaultValues:{statuttransformation:s.statuttransformation}});return i.a.createElement(F,{state:s,fonctions:p,collonnes:O,queries:h,useform:v,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},s.statuttransformation),e);void 0!==(null===(t=s.statuttransformation)||void 0===t?void 0:t.id)?h.mutationMiseajour.mutate(Object(r.a)({},a)):h.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);