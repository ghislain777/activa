(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[55],{2334:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return c})),t.d(a,"c",(function(){return m})),t.d(a,"d",(function(){return p}));var n=t(8),r=t.n(n),l=t(18),o=t(20);function i(e,a,t,n){return s.apply(this,arguments)}function s(){return(s=Object(l.a)(r.a.mark((function e(a,t,n,l){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a+=1,e.next=3,o.b.get("/demandedecaisses?itemsPerPage="+t+"&page="+a+"&statut="+n);case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return u.apply(this,arguments)}function u(){return(u=Object(l.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.post("/demandedecaisses",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=Object(l.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.put("/demandedecaisses/"+a.id,a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.delete("/demandedecaisses/"+a.id,{method:"DELETE",herdears:{Accept:"application/json"},data:a.id});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3182:function(e,a,t){"use strict";t.r(a);var n=t(6),r=t(12),l=t(26),o=t(0),i=t.n(o),s=t(228),c=t.n(s),u=t(231),m=t(752),d=t(144),p=t(224),b=t(606),v=t(262),y=t(427),j=t(434),h=t(568),g=t(1198),f=t(64),E=t(1241),O=t(1201),w=(t(95),t(79)),D=t(229),M=t(45),C=t(1204),S=t(1203),P=t(1202),x=t(783),R=t(2334),k=t(73),A=t(84),Q=t(32),B=t(117),F=t(131),N=(t(367),t(368)),L=t(60),I=(t(266),t(444),t(20)),T=t(1196),z=t(369),U=t(145);const q=w.b().shape({montant:w.a().required("Montant requis").positive("Le Montant doit \xeatre positif").integer("Le Montant doit \xeatre un nombre entier")});function W({id:e,ledemandedecaisse:a,handleFermeture:t,action:l}){var s,c,u,m,v,y,j,h;const g=Object(Q.useQueryClient)(),E=Object(Q.useMutation)(R.a,{onSuccess:()=>{g.invalidateQueries("Demandedecaisses"),X({message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0})},onError:()=>{g.invalidateQueries("Demandedecaisses"),X({message:"Echec lors de l op\xe9ration",open:!0,severity:"error",automaticClose:!0})}}),w=Object(Q.useMutation)(R.c,{onSuccess:()=>{g.invalidateQueries("Demandedecaisses"),X({message:"Mise \xe0 jour r\xe9ussie",open:!0,severity:"success",automaticClose:!0})},onError:()=>{g.invalidateQueries("Demandedecaisses"),X({message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0})}}),W=Object(Q.useQuery)(["Utilisateurs",1],()=>Object(U.c)(0,100,"",""),{keepPreviousData:!0}),J=Object(o.useState)(a),V=Object(r.a)(J,2),Y=V[0],G=(V[1],Object(o.useState)({severity:"severity",message:"",open:!1,automaticClose:!0})),H=Object(r.a)(G,2),K=H[0],X=H[1],Z=Object(k.c)({resolver:Object(D.yupResolver)(q),defaultValues:Object(n.a)(Object(n.a)({},a),{},{id:null!==(s=null===a||void 0===a?void 0:a.id)&&void 0!==s?s:"",utilisateur:a?"/api/utilisateurs/"+a.utilisateur.id:"/api/utilisateurs/1",datedemande:null!==(c=null===a||void 0===a?void 0:a.datedemande)&&void 0!==c?c:new Date,motif:null!==(u=null===a||void 0===a?void 0:a.motif)&&void 0!==u?u:"",approuvele:null!==(m=null===a||void 0===a?void 0:a.approuvele)&&void 0!==m?m:new Date,payele:null!==(v=null===a||void 0===a?void 0:a.payele)&&void 0!==v?v:new Date,rejetele:null!==(y=null===a||void 0===a?void 0:a.rejetele)&&void 0!==y?y:new Date,annuleele:null!==(j=null===a||void 0===a?void 0:a.annuleele)&&void 0!==j?j:new Date})}),$=Z.control,_=Z.handleSubmit,ee=Z.errors,ae=(Z.reset,Object(o.useState)(0)),te=Object(r.a)(ae,2),ne=te[0],re=te[1],le=e=>{var a=Math.round(100*e.loaded/e.total);re(a)},oe=Object(Q.useMutation)(z.a,{onSuccess:e=>{ue(Object(n.a)(Object(n.a)({},ce),{},{document:e})),X(Object(n.a)(Object(n.a)({},K),{},{automaticClose:!1,message:"Fichier document charg\xe9 sur le serveur",open:!0,severity:"success"}))},onError:()=>{X(Object(n.a)(Object(n.a)({},K),{},{automaticClose:!1,message:"Echec de chargement du fichier sur le serveur",open:!0,severity:"error"}))}}),ie=Object(o.useState)({}),se=Object(r.a)(ie,2),ce=se[0],ue=se[1],me=e=>{let a=Object(n.a)(Object(n.a)(Object(n.a)({},Y),e),ce);Y?w.mutate(Object(n.a)({},a)):E.mutate(Object(n.a)({},a))};function de(){t()}return i.a.createElement("div",null,i.a.createElement(A.a,{message:K.message,severity:K.severity,open:K.open,handleAlertClose:K.automaticClose?t:()=>X(Object(n.a)(Object(n.a)({},K),{},{open:!1}))}),i.a.createElement(M.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(M.a,{item:!0,lg:6,md:6,sm:12,xs:12,justify:"center"},i.a.createElement(T.a,{theme:Object(I.a)()},i.a.createElement(O.a,null,i.a.createElement(C.a,{action:i.a.createElement(p.a,{"aria-label":"",onClick:de},"x"),title:"ajout"===l?"Nouvelle demande":"Upload de document",subheader:""}),i.a.createElement(S.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:_(me)},i.a.createElement(M.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(M.a,{item:!0},i.a.createElement(B.a,{id:"montant",nom:"montant",label:"Montant",valeur:null===Y||void 0===Y?void 0:Y.montant,control:$,error:ee.montant})),i.a.createElement(M.a,{item:!0},i.a.createElement(B.a,{id:"motif",nom:"motif",label:"Motif",valeur:null===Y||void 0===Y?void 0:Y.motif,control:$,error:ee.motif,multiline:!0,rows:4})),i.a.createElement(M.a,{item:!0},W.isLoading?i.a.createElement(L.a,{message:"chargement des utilisateurs"}):i.a.createElement(F.a,{id:"utilisateur",name:"utilisateur",label:"Demandeur",table:"utilisateur",control:$,options:W.data["hydra:member"],error:ee.utilisateur,valeur:null!==(h=null===Y||void 0===Y?void 0:Y.utilisateur)&&void 0!==h?h:""})),i.a.createElement(M.a,{item:!0},i.a.createElement(N.a,{progress:ne,onUpload:e=>{var a;(a=e)&&oe.mutate({fichier:a,objet:"documentdemandedecaisse",handleprogress:le})},onSupprimer:()=>{console.log("supprimer le fichier")},titre:"Fichier joint (faire glisser ou cliquez ici pour charger)"}))))),i.a.createElement(P.a,null,i.a.createElement(M.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(M.a,{item:!0},i.a.createElement(d.a,{color:"primary",variant:"contained",type:"submit",onClick:_(me)},w.isLoading||E.isLoading?i.a.createElement(x.a,{color:"inherit"}):i.a.createElement(b.a,null,"send"),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===l?i.a.createElement(f.a,null,"Enregistrer"):i.a.createElement(f.a,null,"Mettre \xe0 jour")))),i.a.createElement(M.a,{item:!0},i.a.createElement(d.a,{variant:"outlined",color:"secondary",onClick:de},"Annuler")))))))))}var J=t(204),V=t(230),Y=t(300),G=(t(443),t(1192)),H=t(2285),K=t(3),X=t(110),Z=t(2267),$=t(2191);Object(X.a)(e=>{e.palette,Object(l.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});a.default=()=>{const e=Object(o.useState)({page:0,rowsPerPage:20,recherche:"",filtre:""}),a=Object(r.a)(e,2),t=a[0],l=a[1],s=Object(Q.useQueryClient)(),w=Object(Q.useQuery)(["Demandedecaisses",t.page,t.rowsPerPage,t.recherche,t.filtre],()=>Object(R.b)(t.page,t.rowsPerPage,t.recherche,t.filtre),{keepPreviousData:!0}),D=w.isLoading,M=(w.isFetching,w.isError),C=w.error,S=w.data,P=Object(Q.useMutation)(R.d,{onSuccess:()=>{ae({message:"Suppr\xe9ssion r\xe9ussi",open:!0,severity:"success"})},onError:()=>{ae({message:"Echec lors de l op\xe9ration",open:!0,severity:"error"})},onSettled:()=>{s.invalidateQueries("Demandedecaisses")}}),x=(Object(Q.useMutation)(R.c,{onSuccess:()=>{s.invalidateQueries("Demandedecaisses"),ae({message:"Mise \xe0 jour r\xe9ussie",open:!0,severity:"success",automaticClose:!0})},onError:()=>{s.invalidateQueries("Demandedecaisses"),ae({message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0})}}),Object(o.useState)(null)),k=Object(r.a)(x,2),B=k[0],F=k[1],N=Object(o.useState)({mode:"affichage",action:"ajout",affichageTable:!0}),z=Object(r.a)(N,2),U=z[0],q=z[1],X=Object(o.useState)({severity:"severity",message:"",open:!1,handleCloseAlert:()=>ue()}),_=Object(r.a)(X,2),ee=_[0],ae=_[1],te=Object(o.useState)("Liste des demandes"),ne=Object(r.a)(te,2),re=ne[0],le=ne[1],oe=Object(o.useState)(!1),ie=Object(r.a)(oe,2),se=ie[0],ce=ie[1],ue=()=>{ae(Object(n.a)(Object(n.a)({},A.a),{},{open:!1}))},me=e=>{ve({open:!0,fichier:e.document,titre:"document"})},de=Object(o.useState)({open:!1,fichier:"",titre:""}),pe=Object(r.a)(de,2),be=pe[0],ve=pe[1],ye=[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>e}},{name:"utilisateur",label:"Demandeur",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n,r;return null!==(n=null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:0+(null===e||void 0===e?void 0:e.prenom))&&void 0!==n?n:""}}},{name:"montant",label:"Montant",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>e.toLocaleString("fr-FR")}},{name:"datedemande",label:"Dates",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,"Cr\xe9\xe9e le: "+Object(G.a)(Object(H.a)(e),"dd/MM/yyyy hh:mm")),null==a.rowData[5]?" ":i.a.createElement(i.a.Fragment,null," ",i.a.createElement("br",null),i.a.createElement("span",null," ","Approuv\xe9e le "+Object(G.a)(Object(H.a)(a.rowData[5]),"dd/MM/yyyy hh:mm"))),null==a.rowData[6]?" ":i.a.createElement(i.a.Fragment,null," ",i.a.createElement("br",null),i.a.createElement("span",null," ","Pay\xe9e le "+Object(G.a)(Object(H.a)(a.rowData[6]),"dd/MM/yyyy hh:mm"))),null==a.rowData[7]?" ":i.a.createElement(i.a.Fragment,null," ",i.a.createElement("br",null),i.a.createElement("span",null," ","Rejet\xe9e le "+Object(G.a)(Object(H.a)(a.rowData[7]),"dd/MM/yyyy hh:mm"))),null==a.rowData[8]?" ":i.a.createElement(i.a.Fragment,null," ",i.a.createElement("br",null),i.a.createElement("span",null," ","Annul\xe9e le "+Object(G.a)(Object(H.a)(a.rowData[8]),"dd/MM/yyyy hh:mm"))))}},{name:"motif",label:"Motif",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>e}},{name:"approuvele",label:"Approuv\xe9 le",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,a,t)=>null==e?" ":Object(G.a)(Object(H.a)(e),"dd/MM/yyyy hh:mm")}},{name:"payele",label:"Pay\xe9e le",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,a,t)=>null==e?" ":Object(G.a)(Object(H.a)(e),"dd/MM/yyyy hh:mm")}},{name:"rejetele",label:"Rejet\xe9e le",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,a,t)=>null==e?" ":Object(G.a)(Object(H.a)(e),"dd/MM/yyyy hh:mm")}},{name:"annuleele",label:"Annul\xe9e le",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,a,t)=>null==e?" ":Object(G.a)(Object(H.a)(e),"dd/MM/yyyy hh:mm")}},{name:"statut",label:"Statut",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>i.a.createElement("small",{className:Object(K.default)({"border-radius-4  text-white px-2 py-2px":!0,"bg-primary":"Nouveau"===e,"bg-error":"Annul\xe9e"===e,"bg-light-green":"Approuv\xe9e"===e,"bg-green":"Pay\xe9e"===e,"bg-secondary":"Rejet\xe9e"===e})},e)}},{name:"document",label:"Document",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>i.a.createElement(m.a,{onClick:null==e?()=>{}:()=>me({id:a.rowData[0],document:e})},i.a.createElement(d.a,null,i.a.createElement(p.a,{size:"small",onClick:null==e?()=>{}:()=>me({id:a.rowData[0],document:e})},i.a.createElement(b.a,{color:null==e?" ":"primary"}," preview"))))}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,customBodyRender:(e,a,t)=>i.a.createElement("div",null,i.a.createElement(v.a,{size:"small",sx:{m:1,minWidth:200}},i.a.createElement(y.a,{id:"demo-simple-select-label"},"Actions"),i.a.createElement(j.a,{value:"",id:String(a.rowData[0]),name:String(a.rowData[0]),variant:"outlined",label:"Actions",key:a.rowData[0],onChange:e=>((e,a)=>{q({mode:"edition",action:"misajour",affichageTable:!1}),F(a),le("Mise \xe0 jour de demandedecaisse")})(0,{id:a.rowData[0],utilisateur:a.rowData[1],montant:a.rowData[2],motif:a.rowData[4],document:a.rowData[10],statut:a.rowData[9]})},(a.rowData[9],[{id:4,nom:"Uploader document",statut:"Pay\xe9e"}]).map(e=>i.a.createElement(h.a,{key:e.id,value:e.statut},e.nom)))))}}];return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(g.a,{open:be.open,"aria-labelledby":"",maxWidth:"md",onClose:()=>{ve(Object(n.a)(Object(n.a)({},be),{},{open:!1}))}},i.a.createElement(Z.a,{id:""},be.titre),i.a.createElement($.a,null,i.a.createElement("img",{src:I.c+"/fichiers/documentdemandedecaisse/"+be.fichier,alt:"documents",srcset:""}))),i.a.createElement(A.a,{message:ee.message,severity:ee.severity,open:ee.open,handleAlertClose:ue}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(J.a,{routeSegments:[{name:"Demandes de d\xe9caissement"}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(f.a,{variant:"h4"},re)),"affichage"===U.mode?i.a.createElement(E.a,{in:U.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(d.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>(q({mode:"edition",action:"ajout",affichageTable:!1}),F(null),void le("Nouvelle demande"))},"Nouvelle demande"),D?i.a.createElement(L.a,{message:"Chargement des donn\xe9es",type:"info"}):M?i.a.createElement(L.a,{message:"Erreur lors du chargement des donn\xe9es::"+C,type:"error"}):i.a.createElement(Y.a,{tag:"div",blocking:!1},i.a.createElement(T.a,{theme:Object(I.a)()},i.a.createElement(c.a,{title:re,data:S["hydra:member"],columns:ye,options:Object(n.a)(Object(n.a)({},u.a),{},{serverSide:!0,count:S["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:t.rowsPerPage,onChangePage:e=>(e=>{l(Object(n.a)(Object(n.a)({},t),{},{page:e})),s.invalidateQueries("Demandedecaisses")})(e),onChangeRowsPerPage:e=>(e=>{l(Object(n.a)(Object(n.a)({},t),{},{rowsPerPage:e})),console.log("idbre de ligne par page:"+e),s.invalidateQueries("Demandedecaisses")})(e),onSearchChange:e=>(e=>{var a;l(Object(n.a)(Object(n.a)({},t),{},{recherche:null!==e&&void 0!==e?e:""})),console.log(null!==(a="texte a chercher"+e)&&void 0!==a?a:""),s.invalidateQueries("Demandedecaisses")})(e),onFilterChange:()=>{console.log("le filtre a chang\xe9")}})}))),i.a.createElement(O.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(V.a,{open:se,onConfirmDialogClose:()=>{ce(!1)},onYesClick:()=>{ce(!1),P.mutate(B)},text:"Confirmez la suppression de "+(null===B||void 0===B?void 0:B.name)})))):i.a.createElement(W,{action:U.action,ledemandedecaisse:B,handleFermeture:()=>{q({mode:"affichage",action:"nouveau",affichageTable:!0}),le("Liste des demandes")}}))}}}]);