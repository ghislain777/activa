(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[75],{3159:function(e,t,a){"use strict";a.r(t);var o=a(3),r=a(12),n=a(0),l=a.n(n),i=a(540),c=a(17),s=a(135),m=a.n(s),u=a(100),p=a(1222),d=a(2286),b=a(2212),h=a(58),g=a(1262),j=a(97),f=a(448),O=a(63),E=a(142),v=a(136),C=a(33),y=a(150),S=(a(239),a(9)),w=a(447),P=a(36),D=a(21),k=a(451),M=a(164),N=a(450),x=a(449),A=a(372),q=a(43),R=(a(57),a(214),a(215)),I=(a(183),a(240),a(374),a(805));function L(e){var t,a,o;const r=e.state,n=e.fonctions,i=e.queries,c=e.useform,s=e.onSubmit;return l.a.createElement("div",null,l.a.createElement(D.a,{container:!0,spacing:1,justify:"center"},l.a.createElement(D.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(w.a,{theme:Object(S.a)()},l.a.createElement(f.a,null,l.a.createElement(k.a,{action:l.a.createElement(M.a,{"aria-label":"",onClick:n.AnnulerEnregistrement},"x"),title:"ajout"===r.pagestate.action?"Nouveau conseiller":"Mise \xe0 jour ",subheader:""}),l.a.createElement(N.a,{className:" px-6 pt-6 pb-6"}," ",l.a.createElement("form",{onSubmit:c.handleSubmit(s)},l.a.createElement(D.a,{container:!0,spacing:4,direction:"column"},l.a.createElement(D.a,{item:!0},l.a.createElement(q.a,{id:"nometprenom",nom:"nometprenom",label:"Nom et pr\xe9noms",valeur:null===(t=r.conseillerclient)||void 0===t?void 0:t.nometprenom,control:c.control,error:c.errors.nometprenom})),l.a.createElement(D.a,{item:!0},l.a.createElement(q.a,{id:"telephone",nom:"telephone",label:"T\xe9l\xe9phone",valeur:null===(a=r.conseillerclient)||void 0===a?void 0:a.telephone,control:c.control,error:c.errors.telephone})),l.a.createElement(D.a,{item:!0},l.a.createElement(q.a,{id:"email",nom:"email",label:"Email",valeur:null===(o=r.conseillerclient)||void 0===o?void 0:o.email,control:c.control,error:c.errors.email})),l.a.createElement(D.a,{item:!0},l.a.createElement(R.a,{progress:r.progressphoto,acceptedFiles:[".png"],onUpload:e=>n.uploaderphoto(e),onSupprimer:()=>n.supprimerphoto(),titre:"Fichier photo .png(faire glisser ou cliquez ici pour charger)"}))))),l.a.createElement(x.a,null,l.a.createElement(D.a,{container:!0,alignItems:"center",justify:"space-between"},l.a.createElement(D.a,{item:!0},l.a.createElement(j.a,{color:"primary",variant:"contained",type:"submit",onClick:c.handleSubmit(s)},i.mutationMiseajour.isLoading||i.mutationAjout.isLoading?l.a.createElement(A.a,{color:"inherit"}):l.a.createElement(I.a,null),l.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===r.pagestate.action?l.a.createElement(h.a,null,"Enregistrer"):l.a.createElement(h.a,null,"Mettre \xe0 jour")))),l.a.createElement(D.a,{item:!0},l.a.createElement(j.a,{variant:"outlined",color:"secondary",onClick:n.AnnulerEnregistrement},"Annuler")))))))))}var T=e=>{var t,a;const r=e.state,n=e.fonctions,i=e.collonnes,c=e.queries,s=e.useform,P=e.onSubmit;return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement(p.a,{open:r.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:n.handleCloseDialoguephoto,objet:r.dialoguephoto.objet},l.a.createElement(d.a,{id:""},r.dialoguephoto.titre),l.a.createElement(b.a,null,l.a.createElement("img",{src:S.e+"/fichiers/"+r.dialoguephoto.objet+"/"+r.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),l.a.createElement(O.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>n.handleFermetureAlerte():()=>n.fermerAlerte()}),l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(E.a,{routeSegments:[{name:r.titre}]})),l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(h.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?l.a.createElement(g.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},l.a.createElement("div",null,l.a.createElement(j.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>n.handleClicksurNouveau()},"Nouveau conseiller"),c.queryConseillerclients.isLoading?l.a.createElement(C.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryConseillerclients.isError?l.a.createElement(C.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryConseillerclients.error,type:"error"}):l.a.createElement(y.a,{tag:"div",blocking:!1},l.a.createElement(w.a,{theme:Object(S.a)()},l.a.createElement(m.a,{title:r.titre,data:c.queryConseillerclients.data["hydra:member"],columns:i,options:Object(o.a)(Object(o.a)({},u.a),{},{serverSide:!0,count:c.queryConseillerclients.data["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(o.a)(Object(o.a)({},u.a.textLabels),{},{toolbar:Object(o.a)(Object(o.a)({},u.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>n.handleChangePage(e),onChangeRowsPerPage:e=>n.handleChangeRowPerPage(e),onSearchChange:e=>n.handleSearchChange(e),onFilterChange:()=>n.handleFilterChange()})}))),l.a.createElement(f.a,{className:"w-full overflow-auto",elevation:8},l.a.createElement(v.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:n.fermerDialogueSuppression,onYesClick:n.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=r.conseillerclient)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):l.a.createElement(L,{state:r,fonctions:n,queries:c,useform:s,onSubmit:P}))},F=a(27),B=a(78),Q=a(2314),z=a(2315),U=a(2316),W=a(2305),J=a(115),V=a(771),Y=a(2324),G=a(2222),H=a(586),K=a(2260);Object(J.a)(e=>{e.palette,Object(F.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function X(e){const t=Object(J.a)(e=>{e.palette,Object(F.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var o;return null!==(o=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==o?o:""}}},{name:"nometprenom",label:"Nom et pr\xe9noms",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"telephone",label:"T\xe9l\xe9phone",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"email",label:"Email",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"photo",label:"Photo",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,o)=>l.a.createElement(V.a,{onClick:()=>e.handleClickSurphoto({id:a.rowData[0],photo:t})},l.a.createElement(j.a,null,l.a.createElement(Y.a,{variant:"rounded",className:"w-48 h-48",src:S.e+"/fichiers/photoconseillerclient/"+t})))}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,o,r)=>l.a.createElement("div",null,l.a.createElement(B.p,{menuButton:l.a.createElement("div",{className:t.userMenu},l.a.createElement(G.a,{xsDown:!0},l.a.createElement(j.a,{size:"small",variant:"outlined",color:"primary",endIcon:l.a.createElement(W.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:l.a.createElement(Q.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:l.a.createElement(Q.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:l.a.createElement(z.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:l.a.createElement(U.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:l.a.createElement(z.a,{color:"primary"})}]}})({id:o.rowData[0],nometprenom:o.rowData[1],telephone:o.rowData[2],email:o.rowData[3],photo:o.rowData[4]}).map(e=>l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,{onClick:()=>e.action({id:o.rowData[0],nometprenom:o.rowData[1],telephone:o.rowData[2],email:o.rowData[3],photo:o.rowData[4]}),key:e.id,value:e.statut},e.icon,"   ",l.a.createElement("span",{className:"ml-5"},e.nom)),l.a.createElement(K.a,null)))))}}]}var Z=a(56),$=a(213),_=a(99);t.default=()=>{const e={conseillerclient:{nometprenom:"",telephone:"",email:"",photo:""},conseillerclient1:null,titre:"Conseiller client",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""},progressphoto:0},t=Object(n.useState)(e),a=Object(r.a)(t,2),s=a[0],m=a[1];let u=new i.a;const p=Object(c.useQueryClient)(),d=e=>{var t=Math.round(100*e.loaded/e.total);m(Object(o.a)(Object(o.a)({},s),{},{progressphoto:t}))},b={handleFermetureAlerte:()=>{m(Object(o.a)(Object(o.a)({},s),{},{titre:"Conseiller client",alert:Object(o.a)(Object(o.a)({},s.alert),{},{open:!1}),pagestate:Object(o.a)(Object(o.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{m(Object(o.a)(Object(o.a)({},s),{},{conseillerclient:null,titre:"Nouveau conseiller ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{m(Object(o.a)(Object(o.a)({},s),{},{alert:Object(o.a)(Object(o.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),m(Object(o.a)(Object(o.a)({},s),{},{titre:"Conseiller client",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{m(Object(o.a)(Object(o.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{O.mutate(s.conseillerclient)},handleCloseDialoguephoto:()=>{m(Object(o.a)(Object(o.a)({},s),{},{dialoguephoto:Object(o.a)(Object(o.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{m(Object(o.a)(Object(o.a)({},s),{},{tableconfig:Object(o.a)(Object(o.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{m(Object(o.a)(Object(o.a)({},s),{},{tableconfig:Object(o.a)(Object(o.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{m(Object(o.a)(Object(o.a)({},s),{},{tableconfig:Object(o.a)(Object(o.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":m(Object(o.a)(Object(o.a)({},s),{},{titre:"Mise \xe0 jour ",conseillerclient:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":m(Object(o.a)(Object(o.a)({},s),{},{conseillerclient:e,dialogueSuppressionOuvert:!0}))}},handleProgressphoto:d,uploaderphoto:e=>{e&&f.mutate({fichier:e,objet:"photoconseillerclient",handleprogress:d})},supprimerphoto:()=>{console.log("Suppression du fichier")},handleClickSurphoto:e=>{m(Object(o.a)(Object(o.a)({},s),{},{dialoguephoto:{open:!0,titre:"photo",fichier:e.photo,objet:"photoconseillerclient"}}))}},h=Object(c.useQuery)(["Conseillerclients",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>u.getTouslesConseillerclients(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),g=Object(c.useMutation)(u.ajoutConseillerclient,{onSuccess:()=>{p.invalidateQueries("Conseillerclients"),m(Object(o.a)(Object(o.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Conseillerclients"),m(Object(o.a)(Object(o.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(c.useMutation)(u.miseajourConseillerclient,{onSuccess:()=>{p.invalidateQueries("Conseillerclients"),m(Object(o.a)(Object(o.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Conseillerclients"),m(Object(o.a)(Object(o.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(c.useMutation)($.a,{onSuccess:e=>{m(Object(o.a)(Object(o.a)({},s),{},{conseillerclient:Object(o.a)(Object(o.a)({},s.conseillerclient),{},{photo:e}),alert:{message:"Upload du fichier r\xe9ussi",open:!0,severity:"success",automaticClose:!1},progressphoto:100}))},onError:()=>{m(Object(o.a)(Object(o.a)({},s),{},{alert:{automaticClose:!1,message:"Echec de chargement du fichier sur le serveur",open:!0,severity:"error"}}))}}),O=Object(c.useMutation)(u.suppressionConseillerclient,{onSuccess:()=>{m(Object(o.a)(Object(o.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{m({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Conseillerclients")}}),E={queryConseillerclients:h,mutationMiseajour:j,mutationAjout:g,mutationSuppression:O,mutationUploadphoto:f},v=X(b),C=P.b().shape({nometprenom:P.c().required("Le champs Nometprenom est requis"),telephone:P.c().required("Le champs Telephone est requis"),email:P.c().required("Le champs Email est requis")}),y=Object(Z.c)({resolver:Object(_.yupResolver)(C),defaultValues:{conseillerclient:s.conseillerclient}});return l.a.createElement(T,{state:s,fonctions:b,collonnes:v,queries:E,useform:y,onSubmit:e=>{var t;let a=Object(o.a)(Object(o.a)({},s.conseillerclient),e);void 0!==(null===(t=s.conseillerclient)||void 0===t?void 0:t.id)?E.mutationMiseajour.mutate(Object(o.a)({},a)):E.mutationAjout.mutate(Object(o.a)({},a))}})}}}]);