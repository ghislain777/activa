(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[43],{2448:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(8),r=a.n(n),o=a(16),i=a(10);class s{getTouslesMenus(e,t,a,n){return Object(o.a)(r.a.mark((function n(){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,i.b.get("/menus?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutMenu(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/menus",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourMenu(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/menus/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionMenu(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/menus/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},3139:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(12),o=a(0),i=a.n(o),s=a(2448),c=a(27),l=a(179),u=a.n(l),m=a(145),d=a(1202),p=a(2271),b=a(2195),g=a(65),j=a(1245),f=a(144),h=a(1205),v=a(76),E=a(163),O=a(180),y=a(47),w=a(232),M=(a(371),a(10)),C=a(1200),S=a(61),P=a(46),D=a(1208),x=a(228),k=a(1207),A=a(1206),q=a(785),N=a(71),R=(a(104),a(302),a(303),a(233),a(372),a(609),a(2299));function L(e){var t,a,n,r;const o=e.state,s=e.fonctions,c=e.queries,l=e.useform,u=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(P.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(P.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(C.a,{theme:Object(M.a)()},i.a.createElement(h.a,null,i.a.createElement(D.a,{action:i.a.createElement(x.a,{"aria-label":"",onClick:s.AnnulerEnregistrement},"x"),title:"ajout"===o.pagestate.action?"Nouveau menu":"Mise \xe0 jour ",subheader:""}),i.a.createElement(k.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:l.handleSubmit(u)},i.a.createElement(P.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(P.a,{item:!0},i.a.createElement(N.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=o.menu)||void 0===t?void 0:t.nom,control:l.control,error:l.errors.nom})),i.a.createElement(P.a,{item:!0},i.a.createElement(N.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=o.menu)||void 0===a?void 0:a.description,control:l.control,error:l.errors.description})),i.a.createElement(P.a,{item:!0},i.a.createElement(N.a,{id:"icone",nom:"icone",label:"Icone",valeur:null===(n=o.menu)||void 0===n?void 0:n.icone,control:l.control,error:l.errors.icone})),i.a.createElement(P.a,{item:!0},i.a.createElement(N.a,{id:"position",nom:"position",label:"Position",valeur:null===(r=o.menu)||void 0===r?void 0:r.position,control:l.control,error:l.errors.position}))))),i.a.createElement(A.a,null,i.a.createElement(P.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(P.a,{item:!0},i.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit",onClick:l.handleSubmit(u)},c.mutationMiseajour.isLoading||c.mutationAjout.isLoading?i.a.createElement(q.a,{color:"inherit"}):i.a.createElement(R.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===o.pagestate.action?i.a.createElement(g.a,null,"Enregistrer"):i.a.createElement(g.a,null,"Mettre \xe0 jour")))),i.a.createElement(P.a,{item:!0},i.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:s.AnnulerEnregistrement},"Annuler")))))))))}var I=e=>{var t,a;const r=e.state,o=e.fonctions,s=e.collonnes,c=e.queries,l=e.useform,S=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(d.a,{open:r.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:r.dialoguephoto.objet},i.a.createElement(p.a,{id:""},r.dialoguephoto.titre),i.a.createElement(b.a,null,i.a.createElement("img",{src:M.e+"/fichiers/"+r.dialoguephoto.objet+"/"+r.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),i.a.createElement(v.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(E.a,{routeSegments:[{name:r.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(g.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?i.a.createElement(j.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(f.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau menu"),c.queryMenus.isLoading?i.a.createElement(y.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryMenus.isError?i.a.createElement(y.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryMenus.error,type:"error"}):i.a.createElement(w.a,{tag:"div",blocking:!1},i.a.createElement(C.a,{theme:Object(M.a)()},i.a.createElement(u.a,{title:r.titre,data:c.queryMenus.data["hydra:member"],columns:s,options:Object(n.a)(Object(n.a)({},m.a),{},{serverSide:!0,count:c.queryMenus.data["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(n.a)(Object(n.a)({},m.a.textLabels),{},{toolar:Object(n.a)(Object(n.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(h.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(O.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=r.menu)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(L,{state:r,fonctions:o,queries:c,useform:l,onSubmit:S}))},T=a(25),B=a(86),F=a(2300),Q=a(2301),z=a(2302),G=a(2290),W=a(112),J=a(2205),V=a(570),Y=a(2245);Object(W.a)(e=>{e.palette,Object(T.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function H(e){const t=Object(W.a)(e=>{e.palette,Object(T.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"icone",label:"Icone",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"position",label:"Position",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,customBodyRender:(e,n,r)=>i.a.createElement("div",null,i.a.createElement(B.p,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(J.a,{xsDown:!0},i.a.createElement(f.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(G.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(F.a,{color:"primary"})}];case"Nouveau":default:return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(F.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(Q.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(z.a,{color:"error"})}]}})({id:n.rowData[0],nom:n.rowData[1],description:n.rowData[2],icone:n.rowData[3],position:n.rowData[4]}).map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(V.a,{onClick:()=>e.action({id:n.rowData[0],nom:n.rowData[1],description:n.rowData[2],icone:n.rowData[3],position:n.rowData[4]}),key:e.id,value:e.statut},e.icon,"   ",i.a.createElement("span",{className:"ml-5"},e.nom)),i.a.createElement(Y.a,null)))))}}]}var K=a(70),U=(a(268),a(162));t.default=()=>{const e={menu:{nom:"",description:"",icone:"",position:0},menu1:null,titre:"Gestion des menus",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(o.useState)(e),a=Object(r.a)(t,2),l=a[0],u=a[1];let m=new s.a;const d=Object(c.useQueryClient)(),p={handleFermetureAlerte:()=>{u(Object(n.a)(Object(n.a)({},l),{},{titre:"Gestion des menus",alert:Object(n.a)(Object(n.a)({},l.alert),{},{open:!1}),pagestate:Object(n.a)(Object(n.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(n.a)(Object(n.a)({},l),{},{menu:null,titre:"Nouveau menu ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(n.a)(Object(n.a)({},l),{},{alert:Object(n.a)(Object(n.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(n.a)(Object(n.a)({},l),{},{titre:"Gestion des menus",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{f.mutate(l.menu)},handleCloseDialoguephoto:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialoguephoto:Object(n.a)(Object(n.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleChangePage:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(n.a)(Object(n.a)({},l),{},{titre:"Mise \xe0 jour ",menu:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(n.a)(Object(n.a)({},l),{},{menu:e,dialogueSuppressionOuvert:!0}))}}},b=Object(c.useQuery)(["Menus",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>m.getTouslesMenus(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),g=Object(c.useMutation)(m.ajoutMenu,{onSuccess:()=>{d.invalidateQueries("Menus"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Menus"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(c.useMutation)(m.miseajourMenu,{onSuccess:()=>{d.invalidateQueries("Menus"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Menus"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(c.useMutation)(m.suppressionMenu,{onSuccess:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Menus")}}),h={queryMenus:b,mutationMiseajour:j,mutationAjout:g,mutationSuppression:f},v=H(p),E=S.b().shape({nom:S.c().required("Le champs Nom est requis"),description:S.c().required("Le champs Description est requis"),icone:S.c().required("Le champs Icone est requis"),position:S.a().required("position requis").positive("Le position doit \xeatre positif").integer("Le position doit \xeatre un nombre entier")}),O=Object(K.c)({resolver:Object(U.yupResolver)(E),defaultValues:Object(n.a)(Object(n.a)({},l),{},{menu:Object(n.a)({},l.menu)})});return i.a.createElement(I,{state:l,fonctions:p,collonnes:v,queries:h,useform:O,onSubmit:e=>{var t;let a=Object(n.a)(Object(n.a)({},l.menu),e);void 0!==(null===(t=l.menu)||void 0===t?void 0:t.id)?h.mutationMiseajour.mutate(Object(n.a)({},a)):h.mutationAjout.mutate(Object(n.a)({},a))}})}}}]);