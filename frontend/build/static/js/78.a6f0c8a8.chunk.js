(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[78],{3158:function(e,a,t){"use strict";t.r(a);var r=t(3),o=t(12),n=t(0),i=t.n(n),l=t(854),c=t(17),s=t(135),u=t.n(s),m=t(100),d=t(1222),p=t(2286),b=t(2212),g=t(58),j=t(1262),h=t(97),f=t(448),O=t(63),E=t(142),v=t(136),y=t(33),P=t(150),C=(t(239),t(9)),S=t(447),w=t(36),D=t(21),x=t(451),A=t(164),M=t(450),N=t(449),k=t(372),q=t(43),R=(t(57),t(214),t(215),t(183),t(240),t(374),t(805));function I(e){var a,t;const r=e.state,o=e.fonctions,n=e.queries,l=e.useform,c=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(D.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(D.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(S.a,{theme:Object(C.a)()},i.a.createElement(f.a,null,i.a.createElement(x.a,{action:i.a.createElement(A.a,{"aria-label":"",onClick:o.AnnulerEnregistrement},"x"),title:"ajout"===r.pagestate.action?"Nouveau produit":"Mise \xe0 jour ",subheader:""}),i.a.createElement(M.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:l.handleSubmit(c)},i.a.createElement(D.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(D.a,{item:!0},i.a.createElement(q.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(a=r.produit)||void 0===a?void 0:a.nom,control:l.control,error:l.errors.nom})),i.a.createElement(D.a,{item:!0},i.a.createElement(q.a,{id:"description",nom:"description",label:"Description",valeur:null===(t=r.produit)||void 0===t?void 0:t.description,control:l.control,error:l.errors.description}))))),i.a.createElement(N.a,null,i.a.createElement(D.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(D.a,{item:!0},i.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit",onClick:l.handleSubmit(c)},n.mutationMiseajour.isLoading||n.mutationAjout.isLoading?i.a.createElement(k.a,{color:"inherit"}):i.a.createElement(R.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===r.pagestate.action?i.a.createElement(g.a,null,"Enregistrer"):i.a.createElement(g.a,null,"Mettre \xe0 jour")))),i.a.createElement(D.a,{item:!0},i.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:o.AnnulerEnregistrement},"Annuler")))))))))}var L=e=>{var a,t;const o=e.state,n=e.fonctions,l=e.collonnes,c=e.queries,s=e.useform,w=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(d.a,{open:o.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:n.handleCloseDialoguephoto,objet:o.dialoguephoto.objet},i.a.createElement(p.a,{id:""},o.dialoguephoto.titre),i.a.createElement(b.a,null,i.a.createElement("img",{src:C.e+"/fichiers/"+o.dialoguephoto.objet+"/"+o.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),i.a.createElement(O.a,{message:o.alert.message,severity:o.alert.severity,open:o.alert.open,handleAlertClose:!0===o.alert.automaticClose?()=>n.handleFermetureAlerte():()=>n.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(E.a,{routeSegments:[{name:o.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(g.a,{variant:"h4"},o.titre)),"affichage"===o.pagestate.mode?i.a.createElement(j.a,{in:o.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(h.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>n.handleClicksurNouveau()},"Nouveau produit"),c.queryProduits.isLoading?i.a.createElement(y.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryProduits.isError?i.a.createElement(y.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryProduits.error,type:"error"}):i.a.createElement(P.a,{tag:"div",blocking:!1},i.a.createElement(S.a,{theme:Object(C.a)()},i.a.createElement(u.a,{title:o.titre,data:c.queryProduits.data["hydra:member"],columns:l,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:c.queryProduits.data["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:o.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>n.handleChangePage(e),onChangeRowsPerPage:e=>n.handleChangeRowPerPage(e),onSearchChange:e=>n.handleSearchChange(e),onFilterChange:()=>n.handleFilterChange()})}))),i.a.createElement(f.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(v.a,{open:o.dialogueSuppressionOuvert,onConfirmDialogClose:n.fermerDialogueSuppression,onYesClick:n.confirmerSuppression,text:null!==(a="Confirmez la suppression de "+(null===(t=o.produit)||void 0===t?void 0:t.nom))&&void 0!==a?a:""})))):i.a.createElement(I,{state:o,fonctions:n,queries:c,useform:s,onSubmit:w}))},Q=t(27),T=t(78),F=t(2314),B=t(2315),z=t(2316),G=t(2305),W=t(115),J=t(2222),V=t(586),Y=t(2260);t(1179);Object(W.a)(e=>{e.palette,Object(Q.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function H(e){const a=Object(W.a)(e=>{e.palette,Object(Q.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),t=(a,t)=>{e.handleClickSurAction(a,t)};return[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>e}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,o)=>i.a.createElement("div",null,i.a.createElement(T.p,{menuButton:i.a.createElement("div",{className:a.userMenu},i.a.createElement(J.a,{xsDown:!0},i.a.createElement(h.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(G.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:i.a.createElement(F.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:i.a.createElement(F.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:i.a.createElement(B.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>t(e,"Supprimer"),icon:i.a.createElement(z.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:i.a.createElement(B.a,{color:"primary"})}]}})({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2]}).map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(V.a,{onClick:()=>e.action({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2]}),key:e.id,value:e.statut},e.icon,"   ",i.a.createElement("span",{className:"ml-5"},e.nom)),i.a.createElement(Y.a,null)))))}}]}var K=t(56),U=(t(213),t(99));a.default=()=>{const e={produit:{nom:"",description:""},produit1:null,titre:"Gestion des produits",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},a=Object(n.useState)(e),t=Object(o.a)(a,2),s=t[0],u=t[1];let m=new l.a;const d=Object(c.useQueryClient)(),p={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des produits",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},s),{},{produit:null,titre:"Nouveau produit ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des produits",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{h.mutate(s.produit)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,a)=>{switch(console.log(a),a){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",produit:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},s),{},{produit:e,dialogueSuppressionOuvert:!0}))}}},b=Object(c.useQuery)(["Produits",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>m.getTouslesProduits(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),g=Object(c.useMutation)(m.ajoutProduit,{onSuccess:()=>{d.invalidateQueries("Produits"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Produits"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(c.useMutation)(m.miseajourProduit,{onSuccess:()=>{d.invalidateQueries("Produits"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Produits"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(c.useMutation)(m.suppressionProduit,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Produits")}}),f={queryProduits:b,mutationMiseajour:j,mutationAjout:g,mutationSuppression:h},O=H(p),E=w.b().shape({nom:w.c().required("Le champs Nom est requis"),description:w.c().required("Le champs Description est requis")}),v=Object(K.c)({resolver:Object(U.yupResolver)(E),defaultValues:{produit:s.produit}});return i.a.createElement(L,{state:s,fonctions:p,collonnes:O,queries:f,useform:v,onSubmit:e=>{var a;let t=Object(r.a)(Object(r.a)({},s.produit),e);void 0!==(null===(a=s.produit)||void 0===a?void 0:a.id)?f.mutationMiseajour.mutate(Object(r.a)({},t)):f.mutationAjout.mutate(Object(r.a)({},t))}})}}}]);