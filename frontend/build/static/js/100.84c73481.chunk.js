(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[100],{3180:function(e,a,t){"use strict";t.r(a);var o=t(3),r=t(12),n=t(0),c=t.n(n),l=t(560),s=t(17),i=t(135),u=t.n(i),m=t(100),d=t(1222),p=t(2292),b=t(2213),g=t(59),h=t(1262),f=t(97),j=t(450),O=t(64),v=t(142),y=t(136),E=t(33),C=t(150),w=(t(240),t(9)),D=t(449),P=t(1175);var S=e=>{var a,t;const r=e.state,n=e.fonctions,l=e.collonnes,s=e.queries,i=e.useform,S=e.onSubmit;return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement(d.a,{open:r.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:n.handleCloseDialoguephoto,objet:r.dialoguephoto.objet},c.a.createElement(p.a,{id:""},r.dialoguephoto.titre),c.a.createElement(b.a,null,c.a.createElement("img",{src:w.e+"/fichiers/"+r.dialoguephoto.objet+"/"+r.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),c.a.createElement(O.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>n.handleFermetureAlerte():()=>n.fermerAlerte()}),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(v.a,{routeSegments:[{name:r.titre}]})),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(g.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?c.a.createElement(h.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},c.a.createElement("div",null,c.a.createElement(f.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>n.handleClicksurNouveau()},"Nouveau contact"),s.queryContacts.isLoading?c.a.createElement(E.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.queryContacts.isError?c.a.createElement(E.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.queryContacts.error,type:"error"}):c.a.createElement(C.a,{tag:"div",blocking:!1},c.a.createElement(D.a,{theme:Object(w.a)()},c.a.createElement(u.a,{title:r.titre,data:s.queryContacts.data["hydra:member"],columns:l,options:Object(o.a)(Object(o.a)({},m.a),{},{serverSide:!0,count:s.queryContacts.data["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(o.a)(Object(o.a)({},m.a.textLabels),{},{toolbar:Object(o.a)(Object(o.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>n.handleChangePage(e),onChangeRowsPerPage:e=>n.handleChangeRowPerPage(e),onSearchChange:e=>n.handleSearchChange(e),onFilterChange:()=>n.handleFilterChange()})}))),c.a.createElement(j.a,{className:"w-full overflow-auto",elevation:8},c.a.createElement(y.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:n.fermerDialogueSuppression,onYesClick:n.confirmerSuppression,text:null!==(a="Confirmez la suppression de "+(null===(t=r.contact)||void 0===t?void 0:t.nom))&&void 0!==a?a:""})))):c.a.createElement(P.a,{state:r,fonctions:n,queries:s,useform:i,onSubmit:S}))},x=t(27),R=t(78),k=t(2315),N=t(2316),M=t(2317),q=t(2311),A=t(117),B=t(771),T=t(2326),I=t(2222),Q=t(587),L=t(2261),F=t(1217),G=t(2310);Object(A.a)(e=>{e.palette,Object(x.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function W(e){const a=Object(A.a)(e=>{e.palette,Object(x.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),t=(a,t)=>{e.handleClickSurAction(a,t)};return[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var o;return null!==(o=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==o?o:""}}},{name:"commune",label:"Commune",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var o;return null!==(o=null===e||void 0===e?void 0:e.nom)&&void 0!==o?o:" "}}},{name:"profession",label:"Profession",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var o;return null!==(o=null===e||void 0===e?void 0:e.nom)&&void 0!==o?o:" "}}},{name:"civilite",label:"Civilite",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,a,t)=>e}},{name:"nom",label:"Contact",options:{filter:!1,sort:!1,display:!0,customBodyRender:(a,t,o)=>{var r,n;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"flex items-center"},c.a.createElement(B.a,{onClick:()=>e.handleClickSurphoto(t.rowData[4])},c.a.createElement(f.a,null,c.a.createElement(T.a,{variant:"rounded",className:"w-48 h-48",src:w.e+"/fichiers/photocontact/"+t.rowData[12]}))),c.a.createElement("div",{className:"ml-3"},c.a.createElement("h5",{className:" my-0 text-15"},(null!==(r=t.rowData[3])&&void 0!==r?r:"")+" "+(null!==a&&void 0!==a?a:"")+" "+(null!==(n=t.rowData[5])&&void 0!==n?n:"")),c.a.createElement("small",{className:"text-muted"},t.rowData[6]+"/"+t.rowData[7]),c.a.createElement("br",null),c.a.createElement("small",{className:"text-muted"},t.rowData[8]))))}}},{name:"prenom",label:"Prenom",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,a,t)=>e}},{name:"telephone1",label:"T\xe9l\xe9phone 1",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,a,t)=>e}},{name:"telephone2",label:"T\xe9l\xe9phone 2",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,a,t)=>e}},{name:"email",label:"Email",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,a,t)=>e}},{name:"adresse",label:"Adresse",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>e}},{name:"employeur",label:"Employeur",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>e}},{name:"creele",label:"Cr\xe9\xe9 le",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>null==e?" ":Object(F.a)(Object(G.a)(e),"dd/MM/yyyy HH:mm")}},{name:"photo",label:"Photo",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(a,t,o)=>c.a.createElement(B.a,{onClick:()=>e.handleClickSurphoto({id:t.rowData[0],photo:a})},c.a.createElement(f.a,null,c.a.createElement(T.a,{variant:"rounded",className:"w-48 h-48",src:w.e+"/fichiers/photocontact/"+a})))}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,o,r)=>c.a.createElement("div",null,c.a.createElement(R.p,{menuButton:c.a.createElement("div",{className:a.userMenu},c.a.createElement(I.a,{xsDown:!0},c.a.createElement(f.a,{size:"small",variant:"outlined",color:"primary",endIcon:c.a.createElement(q.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:c.a.createElement(k.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:c.a.createElement(k.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:c.a.createElement(N.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>t(e,"Supprimer"),icon:c.a.createElement(M.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:c.a.createElement(N.a,{color:"primary"})}]}})({id:o.rowData[0],commune:o.rowData[1],profession:o.rowData[2],civilite:o.rowData[3],nom:o.rowData[4],prenom:o.rowData[5],telephone1:o.rowData[6],telephone2:o.rowData[7],email:o.rowData[8],adresse:o.rowData[9],employeur:o.rowData[10],creele:o.rowData[11],photo:o.rowData[12]}).map(e=>c.a.createElement(c.a.Fragment,null,c.a.createElement(Q.a,{onClick:()=>e.action({id:o.rowData[0],commune:o.rowData[1],profession:o.rowData[2],civilite:o.rowData[3],nom:o.rowData[4],prenom:o.rowData[5],telephone1:o.rowData[6],telephone2:o.rowData[7],email:o.rowData[8],adresse:o.rowData[9],employeur:o.rowData[10],creele:o.rowData[11],photo:o.rowData[12]}),key:e.id,value:e.statut},e.icon,"   ",c.a.createElement("span",{className:"ml-5"},e.nom)),c.a.createElement(L.a,null)))))}}]}var z=t(36),H=t(57),J=t(213),U=t(99),V=t(539),Y=t(540);a.default=()=>{const e={contact:{commune:"/api/communes/1",profession:"/api/professions/1",civilite:"",nom:"",prenom:"",telephone1:"",telephone2:"",email:"",adresse:"",employeur:"",creele:"",photo:""},contact1:null,titre:"Gestion des contacts",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""},progressphoto:0},a=Object(n.useState)(e),t=Object(r.a)(a,2),i=t[0],u=t[1];let m=new l.a,d=new V.a,p=new Y.a;const b=Object(s.useQueryClient)(),g=e=>{var a=Math.round(100*e.loaded/e.total);u(Object(o.a)(Object(o.a)({},i),{},{progressphoto:a}))},h={handleFermetureAlerte:()=>{u(Object(o.a)(Object(o.a)({},i),{},{titre:"Gestion des contacts",alert:Object(o.a)(Object(o.a)({},i.alert),{},{open:!1}),pagestate:Object(o.a)(Object(o.a)({},i.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(o.a)(Object(o.a)({},i),{},{contact:null,titre:"Nouveau contact ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(o.a)(Object(o.a)({},i),{},{alert:Object(o.a)(Object(o.a)({},i.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(o.a)(Object(o.a)({},i),{},{titre:"Gestion des contacts",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(o.a)(Object(o.a)({},i),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{C.mutate(i.contact)},handleCloseDialoguephoto:()=>{u(Object(o.a)(Object(o.a)({},i),{},{dialoguephoto:Object(o.a)(Object(o.a)({},i.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(o.a)(Object(o.a)({},i),{},{tableconfig:Object(o.a)(Object(o.a)({},i.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(o.a)(Object(o.a)({},i),{},{tableconfig:Object(o.a)(Object(o.a)({},i.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(o.a)(Object(o.a)({},i),{},{tableconfig:Object(o.a)(Object(o.a)({},i.tableconfig),{},{page:e})}))},handleClickSurAction:(e,a)=>{switch(console.log(a),a){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(o.a)(Object(o.a)({},i),{},{titre:"Mise \xe0 jour ",contact:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(o.a)(Object(o.a)({},i),{},{contact:e,dialogueSuppressionOuvert:!0}))}},handledatecreelechange:e=>{u(Object(o.a)(Object(o.a)({},i),{},{contact:Object(o.a)(Object(o.a)({},i.contact),{},{creele:e})}))},handleProgressphoto:g,uploaderphoto:e=>{e&&E.mutate({fichier:e,objet:"photocontact",handleprogress:g})},supprimerphoto:()=>{console.log("Suppression du fichier")},handleClickSurphoto:e=>{u(Object(o.a)(Object(o.a)({},i),{},{dialoguephoto:{open:!0,titre:"photo",fichier:e.photo,objet:"photocontact"}}))}},f=Object(s.useQuery)(["Contacts",i.tableconfig.page,i.tableconfig.rowsPerPage,i.tableconfig.recherche,i.tableconfig.filtre],()=>m.getTouslesContacts(i.tableconfig.page,i.tableconfig.rowsPerPage,i.tableconfig.recherche,i.tableconfig.filtre),{keepPreviousData:!0}),j=Object(s.useQuery)(["Communes",i.tableconfig.page,i.tableconfig.rowsPerPage,i.tableconfig.recherche,i.tableconfig.filtre],()=>d.getTouslesCommunes(i.tableconfig.page,i.tableconfig.rowsPerPage,i.tableconfig.recherche,i.tableconfig.filtre),{keepPreviousData:!0}),O=Object(s.useQuery)(["Professions",i.tableconfig.page,i.tableconfig.rowsPerPage,i.tableconfig.recherche,i.tableconfig.filtre],()=>p.getTouslesProfessions(i.tableconfig.page,i.tableconfig.rowsPerPage,i.tableconfig.recherche,i.tableconfig.filtre),{keepPreviousData:!0}),v=Object(s.useMutation)(m.ajoutContact,{onSuccess:()=>{b.invalidateQueries("Contacts"),u(Object(o.a)(Object(o.a)({},i),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b.invalidateQueries("Contacts"),u(Object(o.a)(Object(o.a)({},i),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),y=Object(s.useMutation)(m.miseajourContact,{onSuccess:()=>{b.invalidateQueries("Contacts"),u(Object(o.a)(Object(o.a)({},i),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b.invalidateQueries("Contacts"),u(Object(o.a)(Object(o.a)({},i),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(s.useMutation)(J.a,{onSuccess:e=>{u(Object(o.a)(Object(o.a)({},i),{},{contact:Object(o.a)(Object(o.a)({},i.contact),{},{photo:e}),alert:{message:"Upload du fichier r\xe9ussi",open:!0,severity:"success",automaticClose:!1},progressphoto:100}))},onError:()=>{u(Object(o.a)(Object(o.a)({},i),{},{alert:{automaticClose:!1,message:"Echec de chargement du fichier sur le serveur",open:!0,severity:"error"}}))}}),C=Object(s.useMutation)(m.suppressionContact,{onSuccess:()=>{u(Object(o.a)(Object(o.a)({},i),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{b.invalidateQueries("Contacts")}}),w={queryContacts:f,mutationMiseajour:y,mutationAjout:v,mutationSuppression:C,queryCommunes:j,queryProfessions:O,mutationUploadphoto:E},D=W(h),P=z.b().shape({commune:z.c().required("Le champs Commune est requis"),nom:z.c().required("Le champs Nom est requis"),telephone1:z.c().required("Le champs Telephone1 est requis")}),x=Object(H.c)({resolver:Object(U.yupResolver)(P),defaultValues:{contact:i.contact}});return c.a.createElement(S,{state:i,fonctions:h,collonnes:D,queries:w,useform:x,onSubmit:e=>{var a;let t=Object(o.a)(Object(o.a)({},i.contact),e);void 0!==(null===(a=i.contact)||void 0===a?void 0:a.id)?w.mutationMiseajour.mutate(Object(o.a)({},t)):w.mutationAjout.mutate(Object(o.a)({},t))}})}}}]);