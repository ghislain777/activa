(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[42],{2462:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(7),n=t.n(r),o=t(10),l=t(9);class i{getTouslesVilles(e,a,t,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,l.b.get("/villes?itemsPerPage="+a+"&page="+e+"&id="+t);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutVille(e){return Object(o.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.b.post("/villes",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourVille(e){return Object(o.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.b.put("/villes/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionVille(e){return Object(o.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.b.delete("/villes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},3154:function(e,a,t){"use strict";t.r(a);var r=t(3),n=t(12),o=t(0),l=t.n(o),i=t(538),c=t(17),s=t(135),u=t.n(s),m=t(100),d=t(1222),p=t(2286),b=t(2212),g=t(58),f=t(1262),j=t(97),v=t(448),h=t(63),O=t(142),E=t(136),y=t(33),C=t(150),w=(t(239),t(9)),S=t(447),P=t(36),x=t(21),k=t(451),D=t(164),A=t(450),M=t(449),N=t(372),q=t(43),V=t(57),R=(t(214),t(215),t(183),t(240),t(374),t(805));function L(e){var a,t,r,n,o,i;const c=e.state,s=e.fonctions,u=e.queries,m=e.useform,d=e.onSubmit;return l.a.createElement("div",null,l.a.createElement(x.a,{container:!0,spacing:1,justify:"center"},l.a.createElement(x.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(S.a,{theme:Object(w.a)()},l.a.createElement(v.a,null,l.a.createElement(k.a,{action:l.a.createElement(D.a,{"aria-label":"",onClick:s.AnnulerEnregistrement},"x"),title:"ajout"===c.pagestate.action?"Nouvelle commune":"Mise \xe0 jour ",subheader:""}),l.a.createElement(A.a,{className:" px-6 pt-6 pb-6"}," ",l.a.createElement("form",{onSubmit:m.handleSubmit(d)},l.a.createElement(x.a,{container:!0,spacing:4,direction:"column"},l.a.createElement(x.a,{item:!0},l.a.createElement(q.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(a=c.commune)||void 0===a?void 0:a.nom,control:m.control,error:m.errors.nom})),l.a.createElement(x.a,{item:!0},u.queryVilles.isLoading?l.a.createElement(y.a,{message:"chargement des roles"}):l.a.createElement(V.a,{id:"ville",name:"ville",label:"Ville",table:"ville",control:m.control,options:u.queryVilles.data["hydra:member"],error:m.errors.ville,defaultValue:"/api/villes/"+(null!==(t=null===(r=c.commune)||void 0===r||null===(n=r.ville)||void 0===n?void 0:n.id)&&void 0!==t?t:"1"),valeur:null!==(o=null===(i=c.utilisateur)||void 0===i?void 0:i.ville)&&void 0!==o?o:""}))))),l.a.createElement(M.a,null,l.a.createElement(x.a,{container:!0,alignItems:"center",justify:"space-between"},l.a.createElement(x.a,{item:!0},l.a.createElement(j.a,{color:"primary",variant:"contained",type:"submit",onClick:m.handleSubmit(d)},u.mutationMiseajour.isLoading||u.mutationAjout.isLoading?l.a.createElement(N.a,{color:"inherit"}):l.a.createElement(R.a,null),l.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===c.pagestate.action?l.a.createElement(g.a,null,"Enregistrer"):l.a.createElement(g.a,null,"Mettre \xe0 jour")))),l.a.createElement(x.a,{item:!0},l.a.createElement(j.a,{variant:"outlined",color:"secondary",onClick:s.AnnulerEnregistrement},"Annuler")))))))))}var I=e=>{var a,t;const n=e.state,o=e.fonctions,i=e.collonnes,c=e.queries,s=e.useform,P=e.onSubmit;return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement(d.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},l.a.createElement(p.a,{id:""},n.dialoguephoto.titre),l.a.createElement(b.a,null,l.a.createElement("img",{src:w.e+"/fichiers/"+n.dialoguephoto.objet+"/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),l.a.createElement(h.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(O.a,{routeSegments:[{name:n.titre}]})),l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(g.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?l.a.createElement(f.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},l.a.createElement("div",null,l.a.createElement(j.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouvelle commune"),c.queryCommunes.isLoading?l.a.createElement(y.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryCommunes.isError?l.a.createElement(y.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryCommunes.error,type:"error"}):l.a.createElement(C.a,{tag:"div",blocking:!1},l.a.createElement(S.a,{theme:Object(w.a)()},l.a.createElement(u.a,{title:n.titre,data:c.queryCommunes.data["hydra:member"],columns:i,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:c.queryCommunes.data["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),l.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},l.a.createElement(E.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(a="Confirmez la suppression de "+(null===(t=n.commune)||void 0===t?void 0:t.nom))&&void 0!==a?a:""})))):l.a.createElement(L,{state:n,fonctions:o,queries:c,useform:s,onSubmit:P}))},T=t(27),Q=t(78),F=t(2314),B=t(2315),z=t(2316),G=t(2305),W=t(115),J=t(2222),Y=t(586),H=t(2260);Object(W.a)(e=>{e.palette,Object(T.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function K(e){const a=Object(W.a)(e=>{e.palette,Object(T.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),t=(a,t)=>{e.handleClickSurAction(a,t)};return[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>e}},{name:"ville",label:"Ville",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>l.a.createElement("div",null,l.a.createElement(Q.p,{menuButton:l.a.createElement("div",{className:a.userMenu},l.a.createElement(J.a,{xsDown:!0},l.a.createElement(j.a,{size:"small",variant:"outlined",color:"primary",endIcon:l.a.createElement(G.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:l.a.createElement(F.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:l.a.createElement(F.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:l.a.createElement(B.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>t(e,"Supprimer"),icon:l.a.createElement(z.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:l.a.createElement(B.a,{color:"primary"})}]}})({id:r.rowData[0],nom:r.rowData[1],ville:r.rowData[2]}).map(e=>l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,{onClick:()=>e.action({id:r.rowData[0],nom:r.rowData[1],ville:r.rowData[2]}),key:e.id,value:e.statut},e.icon,"   ",l.a.createElement("span",{className:"ml-5"},e.nom)),l.a.createElement(H.a,null)))))}}]}var U=t(56),X=(t(213),t(99)),Z=t(2462);a.default=()=>{const e={commune:{nom:"",ville:"/api/villes/1"},commune1:null,titre:"Gestion des communes",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},a=Object(o.useState)(e),t=Object(n.a)(a,2),s=t[0],u=t[1];let m=new i.a,d=new Z.a;const p=Object(c.useQueryClient)(),b={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des communes",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},s),{},{commune:null,titre:"Nouvelle commune ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des communes",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{h.mutate(s.commune)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,a)=>{switch(console.log(a),a){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",commune:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},s),{},{commune:e,dialogueSuppressionOuvert:!0}))}}},g=Object(c.useQuery)(["Communes",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>m.getTouslesCommunes(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),f=Object(c.useQuery)(["Villes",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>d.getTouslesVilles(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),j=Object(c.useMutation)(m.ajoutCommune,{onSuccess:()=>{p.invalidateQueries("Communes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Communes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),v=Object(c.useMutation)(m.miseajourCommune,{onSuccess:()=>{p.invalidateQueries("Communes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Communes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(c.useMutation)(m.suppressionCommune,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Communes")}}),O={queryCommunes:g,mutationMiseajour:v,mutationAjout:j,mutationSuppression:h,queryVilles:f},E=K(b),y=P.b().shape({nom:P.c().required("Le champs Nom est requis"),ville:P.c().required("Le champs Ville est requis")}),C=Object(U.c)({resolver:Object(X.yupResolver)(y),defaultValues:{commune:s.commune}});return l.a.createElement(I,{state:s,fonctions:b,collonnes:E,queries:O,useform:C,onSubmit:e=>{var a;let t=Object(r.a)(Object(r.a)({},s.commune),e);void 0!==(null===(a=s.commune)||void 0===a?void 0:a.id)?O.mutationMiseajour.mutate(Object(r.a)({},t)):O.mutationAjout.mutate(Object(r.a)({},t))}})}}}]);