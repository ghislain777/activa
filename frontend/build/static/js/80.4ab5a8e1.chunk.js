(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[80],{3164:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(12),o=a(0),i=a.n(o),c=a(545),s=a(17),l=a(135),u=a.n(l),m=a(100),d=a(1222),p=a(2286),b=a(2212),g=a(58),j=a(1262),h=a(97),f=a(448),O=a(63),E=a(142),v=a(136),S=a(33),k=a(150),y=(a(239),a(9)),C=a(447),w=a(36),P=a(21),D=a(451),x=a(164),A=a(450),M=a(449),N=a(372),q=a(43),R=(a(57),a(214),a(215),a(183),a(240),a(374),a(805));function I(e){var t,a;const r=e.state,n=e.fonctions,o=e.queries,c=e.useform,s=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(P.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(P.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(C.a,{theme:Object(y.a)()},i.a.createElement(f.a,null,i.a.createElement(D.a,{action:i.a.createElement(x.a,{"aria-label":"",onClick:n.AnnulerEnregistrement},"x"),title:"ajout"===r.pagestate.action?"Nouveau statut":"Mise \xe0 jour ",subheader:""}),i.a.createElement(A.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:c.handleSubmit(s)},i.a.createElement(P.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(P.a,{item:!0},i.a.createElement(q.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=r.statutticket)||void 0===t?void 0:t.nom,control:c.control,error:c.errors.nom})),i.a.createElement(P.a,{item:!0},i.a.createElement(q.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=r.statutticket)||void 0===a?void 0:a.description,control:c.control,error:c.errors.description}))))),i.a.createElement(M.a,null,i.a.createElement(P.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(P.a,{item:!0},i.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit",onClick:c.handleSubmit(s)},o.mutationMiseajour.isLoading||o.mutationAjout.isLoading?i.a.createElement(N.a,{color:"inherit"}):i.a.createElement(R.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===r.pagestate.action?i.a.createElement(g.a,null,"Enregistrer"):i.a.createElement(g.a,null,"Mettre \xe0 jour")))),i.a.createElement(P.a,{item:!0},i.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:n.AnnulerEnregistrement},"Annuler")))))))))}var L=e=>{var t,a;const n=e.state,o=e.fonctions,c=e.collonnes,s=e.queries,l=e.useform,w=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(d.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},i.a.createElement(p.a,{id:""},n.dialoguephoto.titre),i.a.createElement(b.a,null,i.a.createElement("img",{src:y.e+"/fichiers/"+n.dialoguephoto.objet+"/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),i.a.createElement(O.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(g.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(j.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(h.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau statut"),s.queryStatuttickets.isLoading?i.a.createElement(S.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.queryStatuttickets.isError?i.a.createElement(S.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.queryStatuttickets.error,type:"error"}):i.a.createElement(k.a,{tag:"div",blocking:!1},i.a.createElement(C.a,{theme:Object(y.a)()},i.a.createElement(u.a,{title:n.titre,data:s.queryStatuttickets.data["hydra:member"],columns:c,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:s.queryStatuttickets.data["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(f.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(v.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.statutticket)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(I,{state:n,fonctions:o,queries:s,useform:l,onSubmit:w}))},Q=a(27),T=a(78),F=a(2314),B=a(2315),z=a(2316),G=a(2305),W=a(115),J=a(2222),V=a(586),Y=a(2260);Object(W.a)(e=>{e.palette,Object(Q.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function H(e){const t=Object(W.a)(e=>{e.palette,Object(Q.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(T.p,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(J.a,{xsDown:!0},i.a.createElement(h.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(G.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(F.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(F.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(B.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(z.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(B.a,{color:"primary"})}]}})({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2]}).map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(V.a,{onClick:()=>e.action({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2]}),key:e.id,value:e.statut},e.icon,"   ",i.a.createElement("span",{className:"ml-5"},e.nom)),i.a.createElement(Y.a,null)))))}}]}var K=a(56),U=(a(213),a(99));t.default=()=>{const e={statutticket:{nom:"",description:""},statutticket1:null,titre:"Gestion des statuts des tickets",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(o.useState)(e),a=Object(n.a)(t,2),l=a[0],u=a[1];let m=new c.a;const d=Object(s.useQueryClient)(),p={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des statuts des tickets",alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},l),{},{statutticket:null,titre:"Nouveau statut ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},l),{},{alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des statuts des tickets",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{h.mutate(l.statutticket)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialoguephoto:Object(r.a)(Object(r.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},l),{},{titre:"Mise \xe0 jour ",statutticket:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},l),{},{statutticket:e,dialogueSuppressionOuvert:!0}))}}},b=Object(s.useQuery)(["Statuttickets",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>m.getTouslesStatuttickets(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),g=Object(s.useMutation)(m.ajoutStatutticket,{onSuccess:()=>{d.invalidateQueries("Statuttickets"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Statuttickets"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(s.useMutation)(m.miseajourStatutticket,{onSuccess:()=>{d.invalidateQueries("Statuttickets"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Statuttickets"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(s.useMutation)(m.suppressionStatutticket,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Statuttickets")}}),f={queryStatuttickets:b,mutationMiseajour:j,mutationAjout:g,mutationSuppression:h},O=H(p),E=w.b().shape({nom:w.c().required("Le champs Nom est requis"),description:w.c().required("Le champs Description est requis")}),v=Object(K.c)({resolver:Object(U.yupResolver)(E),defaultValues:{statutticket:l.statutticket}});return i.a.createElement(L,{state:l,fonctions:p,collonnes:O,queries:f,useform:v,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},l.statutticket),e);void 0!==(null===(t=l.statutticket)||void 0===t?void 0:t.id)?f.mutationMiseajour.mutate(Object(r.a)({},a)):f.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);