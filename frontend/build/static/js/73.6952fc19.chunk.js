(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[73],{3161:function(e,a,t){"use strict";t.r(a);var r=t(3),n=t(12),o=t(0),i=t.n(o),c=t(542),l=t(17),s=t(135),u=t.n(s),m=t(100),d=t(1222),b=t(2286),p=t(2212),g=t(58),h=t(1262),j=t(97),f=t(448),O=t(63),E=t(142),v=t(136),y=t(33),C=t(150),S=(t(239),t(9)),w=t(447),B=t(36),P=t(21),D=t(451),x=t(164),A=t(450),M=t(449),N=t(372),k=t(43),q=(t(57),t(214),t(215),t(183),t(240),t(374),t(805));function R(e){var a,t;const r=e.state,n=e.fonctions,o=e.queries,c=e.useform,l=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(P.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(P.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(w.a,{theme:Object(S.a)()},i.a.createElement(f.a,null,i.a.createElement(D.a,{action:i.a.createElement(x.a,{"aria-label":"",onClick:n.AnnulerEnregistrement},"x"),title:"ajout"===r.pagestate.action?"Nouvelle branche":"Mise \xe0 jour ",subheader:""}),i.a.createElement(A.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:c.handleSubmit(l)},i.a.createElement(P.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(P.a,{item:!0},i.a.createElement(k.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(a=r.branche)||void 0===a?void 0:a.nom,control:c.control,error:c.errors.nom})),i.a.createElement(P.a,{item:!0},i.a.createElement(k.a,{id:"description",nom:"description",label:"Description",valeur:null===(t=r.branche)||void 0===t?void 0:t.description,control:c.control,error:c.errors.description}))))),i.a.createElement(M.a,null,i.a.createElement(P.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(P.a,{item:!0},i.a.createElement(j.a,{color:"primary",variant:"contained",type:"submit",onClick:c.handleSubmit(l)},o.mutationMiseajour.isLoading||o.mutationAjout.isLoading?i.a.createElement(N.a,{color:"inherit"}):i.a.createElement(q.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===r.pagestate.action?i.a.createElement(g.a,null,"Enregistrer"):i.a.createElement(g.a,null,"Mettre \xe0 jour")))),i.a.createElement(P.a,{item:!0},i.a.createElement(j.a,{variant:"outlined",color:"secondary",onClick:n.AnnulerEnregistrement},"Annuler")))))))))}var I=e=>{var a,t;const n=e.state,o=e.fonctions,c=e.collonnes,l=e.queries,s=e.useform,B=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(d.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},i.a.createElement(b.a,{id:""},n.dialoguephoto.titre),i.a.createElement(p.a,null,i.a.createElement("img",{src:S.e+"/fichiers/"+n.dialoguephoto.objet+"/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),i.a.createElement(O.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(g.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(h.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(j.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouvelle branche"),l.queryBranches.isLoading?i.a.createElement(y.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryBranches.isError?i.a.createElement(y.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryBranches.error,type:"error"}):i.a.createElement(C.a,{tag:"div",blocking:!1},i.a.createElement(w.a,{theme:Object(S.a)()},i.a.createElement(u.a,{title:n.titre,data:l.queryBranches.data["hydra:member"],columns:c,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:l.queryBranches.data["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(f.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(v.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(a="Confirmez la suppression de "+(null===(t=n.branche)||void 0===t?void 0:t.nom))&&void 0!==a?a:""})))):i.a.createElement(R,{state:n,fonctions:o,queries:l,useform:s,onSubmit:B}))},L=t(27),Q=t(78),T=t(2314),F=t(2315),z=t(2316),W=t(2305),J=t(115),V=t(2222),Y=t(586),G=t(2260);Object(J.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function H(e){const a=Object(J.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),t=(a,t)=>{e.handleClickSurAction(a,t)};return[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>e}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(Q.p,{menuButton:i.a.createElement("div",{className:a.userMenu},i.a.createElement(V.a,{xsDown:!0},i.a.createElement(j.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(W.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:i.a.createElement(T.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:i.a.createElement(T.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:i.a.createElement(F.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>t(e,"Supprimer"),icon:i.a.createElement(z.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:i.a.createElement(F.a,{color:"primary"})}]}})({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2]}).map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(Y.a,{onClick:()=>e.action({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2]}),key:e.id,value:e.statut},e.icon,"   ",i.a.createElement("span",{className:"ml-5"},e.nom)),i.a.createElement(G.a,null)))))}}]}var K=t(56),U=(t(213),t(99));a.default=()=>{const e={branche:{nom:"",description:""},branche1:null,titre:"Branche",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},a=Object(o.useState)(e),t=Object(n.a)(a,2),s=t[0],u=t[1];let m=new c.a;const d=Object(l.useQueryClient)(),b={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{titre:"Branche",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},s),{},{branche:null,titre:"Nouvelle branche ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},s),{},{titre:"Branche",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{j.mutate(s.branche)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,a)=>{switch(console.log(a),a){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",branche:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},s),{},{branche:e,dialogueSuppressionOuvert:!0}))}}},p=Object(l.useQuery)(["Branches",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>m.getTouslesBranches(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),g=Object(l.useMutation)(m.ajoutBranche,{onSuccess:()=>{d.invalidateQueries("Branches"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Branches"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(l.useMutation)(m.miseajourBranche,{onSuccess:()=>{d.invalidateQueries("Branches"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Branches"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(l.useMutation)(m.suppressionBranche,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Branches")}}),f={queryBranches:p,mutationMiseajour:h,mutationAjout:g,mutationSuppression:j},O=H(b),E=B.b().shape({nom:B.c().required("Le champs Nom est requis"),description:B.c().required("Le champs Description est requis")}),v=Object(K.c)({resolver:Object(U.yupResolver)(E),defaultValues:{branche:s.branche}});return i.a.createElement(I,{state:s,fonctions:b,collonnes:O,queries:f,useform:v,onSubmit:e=>{var a;let t=Object(r.a)(Object(r.a)({},s.branche),e);void 0!==(null===(a=s.branche)||void 0===a?void 0:a.id)?f.mutationMiseajour.mutate(Object(r.a)({},t)):f.mutationAjout.mutate(Object(r.a)({},t))}})}}}]);