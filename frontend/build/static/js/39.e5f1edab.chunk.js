(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[39],{2351:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(8),n=a.n(r),c=a(18),s=a(20);class o{getTouslesOffres(e,t,a,r){return Object(c.a)(n.a.mark((function r(){var c;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,s.b.get("/offres?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return c=r.sent,r.abrupt("return",c.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutOffre(e){return Object(c.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.post("/offres",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourOffre(e){return Object(c.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/offres/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionOffre(e){return Object(c.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.delete("/offres/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}misajourStatutOffre(e){return Object(c.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/offres/"+e.id,{id:e.id,statut:e.statut});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2369:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(8),n=a.n(r),c=a(18),s=a(20);class o{getTouslesProspects(e,t,a,r){return Object(c.a)(n.a.mark((function r(){var c;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,s.b.get("/prospects?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return c=r.sent,r.abrupt("return",c.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutProspect(e){return Object(c.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.post("/prospects",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourProspect(e){return Object(c.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/prospects/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionProspect(e){return Object(c.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.delete("/prospects/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2451:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(8),n=a.n(r),c=a(18),s=a(20);class o{getTouslesProduits(e,t,a,r){return Object(c.a)(n.a.mark((function r(){var c;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,s.b.get("/produits?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return c=r.sent,r.abrupt("return",c.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutProduit(e){return Object(c.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.post("/produits",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourProduit(e){return Object(c.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/produits/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionProduit(e){return Object(c.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.delete("/produits/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},3188:function(e,t,a){"use strict";a.r(t);var r=a(6),n=a(12),c=a(0),s=a.n(c),o=a(32),i=a(79),l=a(73),u=(a(369),a(229)),m=a(2451),p=a(2369),d=a(2351),f=a(187),b=a(3161),v=a(3098),O=a(3199),g=a(3200),j=a(3201),E=a(3100),h=a(60),x=(a(131),a(262)),y=a(568),w=a(783),C=a(606),P=a(1123),N=a(2283),k=a(1127),S=a(1125),q=a(1124),A=a(556),D=a(2241),L=(a(20),a(791),a(117),a(3097)),I=a(69),M=a(2198),T=a(447),F=a(542),Q=a(84),R=a(3096);var J=e=>{var t,a;const r=e.queries,n=e.fonctions,c=e.state;return console.log("id de l'offre"+c.offre.id),c.offre.id?s.a.createElement(s.a.Fragment,null,s.a.createElement(Q.a,{message:c.alert.message,severity:c.alert.severity,open:c.alert.open,handleAlertClose:c.alert.automaticClose?()=>n.handleFermetureAPIAlert():()=>n.closeAPIAlert()}),s.a.createElement(b.a,{container:!0,className:"m-5",direction:"row",justifyContent:"space-between",alignItems:"flex-start"},s.a.createElement(b.a,{item:!0,xs:3},r.queryProspects.isLoading?s.a.createElement(h.a,{message:"chargement des prospects"}):s.a.createElement(x.a,{fullWidth:!0},s.a.createElement(v.a,{id:"Prospect",nom:"prospect",fullWidth:!0,label:"Prospect",onChange:n.handleChangementProspect,value:c.offre.prospect.id},r.queryProspects.data["hydra:member"].map(e=>s.a.createElement(y.a,{key:e.id,value:e.id},e.nom," ",e.prenom," (",e.quartier.nom,")"))))),s.a.createElement(b.a,{item:!0,xs:3},s.a.createElement(O.a,{variant:"contained",type:"submit",onClick:n.handleClickSurEnregistrer,disabled:r.mutationOffre.isLoading},r.mutationOffre.isLoading?s.a.createElement(w.a,{color:"inherit"}):s.a.createElement(C.a,null,"send"),s.a.createElement("span",{className:"pl-2 capitalize"},s.a.createElement(g.a,null,"Enregistrer"))),s.a.createElement(j.a,{"aria-label":"Retour",className:"ml-2",onClick:n.handleClickSurRetour},s.a.createElement(R.a,null)),s.a.createElement(g.a,{variant:"body1",color:"initial"},"Statut: Nouveau"))),s.a.createElement(b.a,{container:!0,spacing:0,direction:"row",className:"m-10",justifyContent:"space-between"},s.a.createElement(b.a,{item:!0,sx:3},s.a.createElement(I.a,{utils:T.a,locale:F.a},s.a.createElement(M.a,{id:"datededebut",label:"Debut du contrat",format:"dd/MM/yyyy",minDate:new Date,ampm:!1,value:null===(t=c.offre)||void 0===t?void 0:t.datededebut,onChange:e=>n.handledatedatededebutchange(e)}))),s.a.createElement(b.a,{item:!0,sx:3},s.a.createElement(I.a,{utils:T.a,locale:F.a},s.a.createElement(M.a,{id:"datededebut",label:"Debut du contrat",format:"dd/MM/yyyy",minDate:new Date,ampm:!1,value:null===(a=c.offre)||void 0===a?void 0:a.echeancedupremierversement,onChange:e=>n.handleecheancedupremierversementchange(e)}))),s.a.createElement(b.a,{item:!0,sx:2},s.a.createElement(E.a,{id:"montantaccompte",label:"Montant accompte",value:c.offre.montantaccompte,onChange:null,variant:"standard"})),s.a.createElement(b.a,{item:!0,sx:2},s.a.createElement(E.a,{id:"montantparversement",label:"Montant par versement",value:c.offre.montantparversement,onChange:null,variant:"standard"})),s.a.createElement(b.a,{item:!0,sx:2},s.a.createElement(E.a,{id:"nombredeversement",label:"Nombre de versements",value:c.offre.nombredeversement,onChange:n.handleChangenombredeversement,variant:"standard",type:"number"}))),s.a.createElement(P.a,{className:"mt-15 mb-4"},s.a.createElement(N.a,null,s.a.createElement(k.a,{className:"bg-default"},s.a.createElement(S.a,{className:"pl-sm-24"}," ",s.a.createElement(g.a,{variant:"h6",color:"initial"},"#")," "),s.a.createElement(S.a,{className:"px-2"},"produit"),s.a.createElement(S.a,{className:"px-2"},"Quantit\xe9"),s.a.createElement(S.a,{className:"px-2"},"Prix unitaire"),s.a.createElement(S.a,{className:"px-2"},"prix total"),s.a.createElement(S.a,{className:"px-2"},"Accompte"),s.a.createElement(S.a,{className:"px-2"},"Action"))),s.a.createElement(q.a,null,c.offre.ligneOffres.map((e,t)=>(console.log(e.produit),s.a.createElement(k.a,{key:t,className:"bg-default"},s.a.createElement(S.a,{className:"pl-sm-24"},t+1),s.a.createElement(S.a,{className:"px-2"},r.queryProduits.isLoading?s.a.createElement(h.a,{message:"Chargement des produits"}):s.a.createElement(x.a,{fullWidth:!0},s.a.createElement(v.a,{defaultValue:c.offre.ligneOffres[t].produit.id,value:e.produit.id,onChange:e=>n.handleChangementproduit(e,t),input:s.a.createElement(A.a,{name:"produit",id:"produit"})},r.queryProduits.data["hydra:member"].map(e=>s.a.createElement(y.a,{value:e.id},e.nom))))),s.a.createElement(S.a,{className:"px-2"},s.a.createElement(E.a,{id:"quantite",label:"",value:e.quantite,onChange:e=>n.handlemodifierQuantite(e,t),variant:"standard",type:"number"})),s.a.createElement(S.a,{className:"px-2"},s.a.createElement(E.a,{id:"prix",label:"",value:e.produit.prix,onChange:null,variant:"standard"})),s.a.createElement(S.a,{className:"px-2"},s.a.createElement(E.a,{id:"prixtotal",label:"",value:e.prixtotal,onChange:null,variant:"standard"})),s.a.createElement(S.a,{className:"px-2"},s.a.createElement(E.a,{id:"montantaccompte",label:"",value:e.montantaccompte,onChange:e=>n.handleModifierMontantAccompte(e,t),variant:"standard",type:"number"})),s.a.createElement(S.a,{className:"px-2"},s.a.createElement(O.a,{variant:"outlined",color:"secondary",onClick:()=>n.supprimerLigne(t)},"Supprimer"))))))),s.a.createElement("div",{className:"flex justify-end px-4 mb-4"},s.a.createElement(O.a,{variant:"contained",color:"primary",onClick:n.ajouterLigne},s.a.createElement(L.a,null)," Ajouter")),s.a.createElement(D.a,{className:"mb-2"}),s.a.createElement(b.a,{container:!0,spacing:0,justifyContent:"flex-end",className:"mb-2"},s.a.createElement(b.a,{item:!0,xs:6},s.a.createElement(g.a,{variant:"h6",color:"initial"},"Prix total des produits")),s.a.createElement(b.a,{item:!0,xs:3},s.a.createElement(g.a,{variant:"h6",color:"initial"}," ",c.offre.prixtotal.toLocaleString("fr-FR")))),s.a.createElement(D.a,{className:"mb-2"}),s.a.createElement(b.a,{container:!0,spacing:0,justifyContent:"flex-end",className:"mb-2"},s.a.createElement(b.a,{item:!0,xs:6},s.a.createElement(g.a,{variant:"h6",color:"initial"},"Total accompte")),s.a.createElement(b.a,{item:!0,xs:3},s.a.createElement(g.a,{variant:"h6",color:"initial"}," ",c.offre.montantaccompte.toLocaleString("fr-FR")))),s.a.createElement(D.a,null),s.a.createElement(b.a,{container:!0,spacing:0,justifyContent:"flex-end",className:"mb-2"},s.a.createElement(b.a,{item:!0,xs:6},s.a.createElement(g.a,{variant:"h6",color:"initial"},"Montant par versement")),s.a.createElement(b.a,{item:!0,xs:3},s.a.createElement(g.a,{variant:"h6",color:"initial"}," ",c.offre.montantparversement.toLocaleString("fr-FR")," GNF"))),s.a.createElement(D.a,null)):s.a.createElement(s.a.Fragment,null,"bonjour...")},W=a(71);t.default=()=>{console.log(Object(W.i)());const e=Object(W.i)().id,t=Date.now(),a=new Date(t).toISOString().split("T")[0],b={alert:{message:"",open:!1,severity:"success"},offre:{id:e,prospect:{id:0,nom:"",prenom:""},datededebut:a,nombredeversement:36,echeancedupremierversement:a,montantaccompte:0,montantparversement:0,statut:"Nouveau",prixtotal:0,ligneOffres:[],onglet:0}};let v=new m.a,O=new p.a,g=new d.a;const j=Object(c.useState)(b),E=Object(n.a)(j,2),h=E[0],x=E[1],y=e=>{const t=e.offre.ligneOffres;let a=0,n=0,c=0,s=e.offre.nombredeversement,o=0;t.forEach(e=>{a+=e.prixtotal,n=parseInt(n)+parseInt(e.montantaccompte)}),c=a-n,o=c/s,x(Object(r.a)(Object(r.a)({},e),{},{offre:Object(r.a)(Object(r.a)({},e.offre),{},{prixtotal:a,montantparversement:o,nombredeversement:s,montantaccompte:n})}))},w=(Object(o.useQueryClient)(),Object(o.useQuery)(["details",1],()=>g.getDetailsOffre(e),{keepPreviousData:!1,retry:!1,onSuccess:e=>{console.log("retour:::::::"+e.offre.id),x(Object(r.a)(Object(r.a)({},h),{},{offre:Object(r.a)(Object(r.a)({},e.offre),{},{id:e.offre.id,ligneOffres:e.ligneOffres})}))},onError:()=>{},onSettled:()=>{}})),C=Object(o.useQuery)(["Produits",1],()=>v.getTouslesProduits(0,100,"",""),{keepPreviousData:!0}),P=Object(o.useQuery)(["Prospects",1],()=>O.getTouslesProspects(0,100,"",""),{keepPreviousData:!0,onSuccess:e=>{},onError:()=>{},onSettled:()=>{}}),N=Object(o.useMutation)(g.ajoutOffre,{onSuccess:()=>{x(Object(r.a)(Object(r.a)({},h),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{x(Object(r.a)(Object(r.a)({},h),{},{alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}}))},onSettled:()=>{}}),k=i.b().shape({prospect:i.c().required("Vous devez choisir un prospect"),montantaccompte:i.c().required("Le montant accompte est requis")}),S=Object(l.c)({resolver:Object(u.yupResolver)(k)}),q={queryProspects:P,queryProduits:C,mutationOffre:N,queryDetail:w},A={ajouterLigne:()=>{const e=h.offre.ligneOffres;e.push({produit:{id:0,nom:"",description:"",prix:0},quantite:1,montantmensuel:0,montantaccompte:0,nombredeversement:36,prixtotal:0,echeancedupremierversement:""}),x(Object(r.a)(Object(r.a)({},h),{},{offre:Object(r.a)(Object(r.a)({},h.offre),{},{ligneOffres:e})}))},supprimerLigne:e=>{const t=h.offre.ligneOffres;t.splice(e,1),y(Object(r.a)(Object(r.a)({},h),{},{offre:Object(r.a)(Object(r.a)({},h.offre),{},{ligneOffres:t})}))},handleModifierMontantAccompte:(e,t)=>{if(parseInt(e.target.value)<0)return;console.log("Changement du montant daccopte pour un produit");const a=h.offre.ligneOffres,n=a.at(t);n.montantaccompte=e.target.value,a[t]=n,y(Object(r.a)(Object(r.a)({},h),{},{offre:Object(r.a)(Object(r.a)({},h.offre),{},{ligneOffres:a})}))},handleChangementProspect:e=>{console.log("Changement de prospect"),x(Object(r.a)(Object(r.a)({},h),{},{offre:Object(r.a)(Object(r.a)({},h.offre),{},{prospect:{id:e.target.value}})}))},handlemodifierQuantite:(e,t)=>{if(parseInt(e.target.value)<1)return;const a=h.offre.ligneOffres,n=a.at(t);n.quantite=e.target.value,n.prixtotal=n.produit.prix*n.quantite,a[t]=n,y(Object(r.a)(Object(r.a)({},h),{},{offre:Object(r.a)(Object(r.a)({},h.offre),{},{ligneOffres:a})}))},handleChangementproduit:(e,t)=>{const a=C.data["hydra:member"].find(t=>t.id===e.target.value),n=h.offre.ligneOffres,c=n.at(t);c.produit=a,c.prix=a.prix,c.prixtotal=a.prix*c.quantite,n[t]=c,y(Object(r.a)(Object(r.a)({},h),{},{offre:Object(r.a)(Object(r.a)({},h.offre),{},{ligneOffres:n})}))},handleClickSurEnregistrer:()=>{console.log("state \xe0 envoyer::::"+JSON.stringify(h)),N.mutate(Object(r.a)({},h.offre))},handledatedatededebutchange:e=>{x(Object(r.a)(Object(r.a)({},h),{},{offre:Object(r.a)(Object(r.a)({},h.offre),{},{datededebut:e.toISOString().split("T")[0]})}))},handleecheancedupremierversementchange:e=>{x(Object(r.a)(Object(r.a)({},h),{},{offre:Object(r.a)(Object(r.a)({},h.offre),{},{echeancedupremierversement:e.toISOString().split("T")[0]})}))},handleChangenombredeversement:e=>{parseInt(e.target.value)<1||y(Object(r.a)(Object(r.a)({},h),{},{offre:Object(r.a)(Object(r.a)({},h.offre),{},{nombredeversement:parseInt(e.target.value)})}))},handleFermetureAPIAlert:()=>{x(Object(r.a)(Object(r.a)({},h),{},{alert:Object(r.a)(Object(r.a)({},h.alert),{},{open:!1})})),f.a.push("/vente/offres")},closeAPIAlert:()=>{x(Object(r.a)(Object(r.a)({},h),{},{alert:Object(r.a)(Object(r.a)({},h.alert),{},{open:!1})})),f.a.push("/vente/offres")},handleClickSurRetour:()=>{f.a.push("/vente/offres")}};return w.isLoading?s.a.createElement(s.a.Fragment,null,"Chargement...."):s.a.createElement(J,{queries:q,fonctions:A,state:h,useForm:S})}}}]);