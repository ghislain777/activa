(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[36],{2315:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return c})),a.d(t,"d",(function(){return d})),a.d(t,"a",(function(){return p})),a.d(t,"f",(function(){return b})),a.d(t,"g",(function(){return h})),a.d(t,"b",(function(){return g}));var n=a(8),r=a.n(n),o=a(18),s=a(20);function i(e,t,a,n){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(r.a.mark((function e(t,a,n,o){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,s.b.get("/commandes?itemsPerPage="+a+"&page="+t+"&statut="+n);case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,a,n,r,o,s){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(r.a.mark((function e(t,a,n,o,i,l,c){var u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,s.b.get("/periode/commandes/"+i.id+"?dateinitiale="+l+"&datefinale="+c+"&rowsPerPage="+a+"&page="+t);case 3:return u=e.sent,e.abrupt("return",u.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,a,n,r,o,s){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(r.a.mark((function e(t,a,n,o,i,l,c){var u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,s.b.get("/periode/chauffeurs/"+i.id+"?dateinitiale="+l+"&datefinale="+c+"&rowsPerPage="+a+"&page="+t);case 3:return u=e.sent,e.abrupt("return",u.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.post("/commandes",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.put("/commandes/"+t.id,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.delete("/commandes/"+t.id,{method:"DELETE",herdears:{Accept:"application/json"},data:t.id});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,s.b.post("/commande/"+t.id,t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2319:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return b}));var n=a(8),r=a.n(n),o=a(18),s=a(20);function i(e,t,a,n){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(r.a.mark((function e(t,a,n,o){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,s.b.get("/modedepayements?itemsPerPage="+a+"&page="+t+"&nom="+n);case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,a,n){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(r.a.mark((function e(t,a,n,o){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,s.b.get("/modedepayements?itemsPerPage="+a+"&page="+t+"&nom="+n+"&actif=1");case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.post("/modedepayements",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.put("/modedepayements/"+t.id,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.delete("/modedepayements/"+t.id,{method:"DELETE",herdears:{Accept:"application/json"},data:t.id});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2350:function(e,t,a){"use strict";var n=a(0),r=a(51);t.a=Object(r.a)(n.createElement("path",{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"LocalShipping")},3090:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return q}));var n=a(6),r=a(12),o=a(0),s=a.n(o),i=a(79),l=a(229),c=a(766),u=a(2202),d=a(64),m=a(1201),p=a(45),f=a(752),b=a(426),y=a(568),h=a(2315),v=a(73),g=a(84),E=a(32),j=(a(117),a(444),a(131),a(367),a(368),a(791)),x=(a(369),a(232)),O=(a(2319),a(60)),w=a(1192),R=a(228),P=a.n(R),D=a(231),B=a(3),C=a(2350),M=a(2285);const k=i.b().shape({client:i.c().required("Le  client est requis"),modedepayement:i.c().required("Le mode de payement est requis"),adressedepart:i.c().required("Le champs Adresse de d\xe9part est requis"),adressearrivee:i.c().required("Le champs Adresse d arriv\xe9e est requis"),montant:i.a().required("Montant requis").positive("Le mntant doit \xeatre un entier positif").integer("Le montant doit \xeatre un nombre entier")});function q({id:e,lecommande:t,handleFermeture:a,action:i}){const R=Object(E.useQueryClient)(),q=Object(o.useState)({page:0,rowsPerPage:20,recherche:"",filtre:""}),N=Object(r.a)(q,2),L=N[0],S=N[1],A=Object(o.useState)({client:{id:4},dateinitiale:Object(w.a)(Date.parse(Date()),"yyyy-MM-dd"),datefinale:Object(w.a)(Date.parse(Date()),"yyyy-MM-dd")}),F=Object(r.a)(A,2),Q=F[0],T=F[1],H=Object(E.useQuery)(["Clients",1],()=>Object(x.d)(0,100,"",""),{keepPreviousData:!0}),z=Object(E.useQuery)(["Commandes",Q,L],()=>Object(h.e)(L.page,L.rowsPerPage,L.recherche,L.filtre,Q.client,Q.dateinitiale,Q.datefinale),{keepPreviousData:!0}),G=Object(o.useState)({severity:"severity",message:"",open:!1,automaticClose:!0}),J=Object(r.a)(G,2),V=J[0],I=J[1],W=Object(v.c)({resolver:Object(l.yupResolver)(k)}),K=W.control,U=(W.handleSubmit,W.errors);W.reset;const X=[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>s.a.createElement(s.a.Fragment,null,"id: ",e," ","Colis"===t.rowData[5].nom?s.a.createElement(s.a.Fragment,null,s.a.createElement(C.a,null),s.a.createElement("br",null)):"","Colis"===t.rowData[5].nom?s.a.createElement("strong",null,t.rowData[6].nom):"",s.a.createElement("br",null),s.a.createElement("small",{className:"text-muted"},Object(w.a)(Object(M.a)(t.rowData[15]),"dd/MM/yyyy hh:mm")))}},{name:"client",label:"Client",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>s.a.createElement(s.a.Fragment,null,e.nom+" "+e.prenom,s.a.createElement("br",null),s.a.createElement("small",{className:"text-muted"},e.telephone))}},{name:"quartierdedepart",label:"Depart",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return s.a.createElement(s.a.Fragment,null,null!==(n=null===e||void 0===e?void 0:e.nom)&&void 0!==n?n:"",s.a.createElement("br",null),s.a.createElement("small",{className:"text-muted"},t.rowData[10]))}}},{name:"quartierdarrivee",label:"Arriv\xe9e",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return s.a.createElement(s.a.Fragment,null,null!==(n=null===e||void 0===e?void 0:e.nom)&&void 0!==n?n:"",s.a.createElement("br",null),s.a.createElement("small",{className:"text-muted"},t.rowData[11]))}}},{name:"chauffeur",label:"Chauffeur",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r,o;return s.a.createElement(s.a.Fragment,null,(null!==(n=null===e||void 0===e?void 0:e.nom)&&void 0!==n?n:"")+" "+(null!==(r=null===e||void 0===e?void 0:e.prenom)&&void 0!==r?r:""),s.a.createElement("br",null),s.a.createElement("small",{className:"text-muted"},null!==(o=null===e||void 0===e?void 0:e.telephone)&&void 0!==o?o:""))}}},{name:"typedecourse",label:"Type de course",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>{switch(e.id){case 1:return e.nom;case 2:return s.a.createElement("span",null," ",e.nom,": ",s.a.createElement("br",null)," ",s.a.createElement("strong",null,t.rowData[6].nom)," ")}}}},{name:"typedecoli",label:"Type de colis",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>{var n;return null!==(n=null===e||void 0===e?void 0:e.nom)&&void 0!==n?n:""}}},{name:"traitepar",label:"trait\xe9 par",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"encaissepar",label:"Encaiss\xe9 par",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"modedepayement",label:"Mode de payement",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"adressedepart",label:"Adresse de d\xe9part",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>e}},{name:"adressearrivee",label:"Adresse d arriv\xe9e",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>e}},{name:"gpsdepart",label:"Position GPS de d\xe9part",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>e}},{name:"gpsarrivee",label:"Position GPS d arriv\xe9e",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>e}},{name:"statut",label:"Statut",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>s.a.createElement("small",{className:Object(B.default)({"border-radius-4  text-white px-2 py-2px":!0,"bg-primary":"Nouveau"===e,"bg-light-green":"En cours d'ex\xe9cution"===e,"bg-error":"Annul\xe9e"===e,"bg-secondary":"Confirm\xe9e"===e,"bg-green":"Clotur\xe9e"===e,"bg-gray":"Trait\xe9e"===e})},e)}},{name:"datecommande",label:"Date de la commande",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>Object(w.a)(Date.parse(e),"dd/MM/yyyy \xe0 HH:mm")}},{name:"executionimmediate",label:"Execution immediate",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>s.a.createElement(c.a,{checked:e})}},{name:"dateexecution",label:"Date d ex\xe9cution",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>Object(w.a)(Date.parse(e),"dd/MM/yyyy \xe0 HH:mm")}},{name:"traitele",label:"Trait\xe9 le",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"datedebutexecution",label:"D\xe9but d ex\xe9cution",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"datefinexecution",label:"Fin d ex\xe9cution",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"encaissele",label:"Encaiss\xe9 le",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"montant",label:"montant",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"recepteurducolis",label:"Recepteur du colis",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>s.a.createElement(s.a.Fragment,null,e,s.a.createElement("br",null),s.a.createElement("small",{className:"text-muted"},t.rowData[24]))}},{name:"telephonerecepteur",label:"T\xe9l\xe9phone du recepteur de colis",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{filter:!1,display:"excluded",sort:!1,customBodyRender:(e,t,a)=>s.a.createElement("div",null)}}];return s.a.createElement("div",null,s.a.createElement(g.a,{message:V.message,severity:V.severity,open:V.open,handleAlertClose:V.automaticClose?a:()=>I(Object(n.a)(Object(n.a)({},V),{},{open:!1}))}),s.a.createElement("div",{className:"m-sm-30"},s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(u.a,{routeSegments:[{name:"Requetes sur les commandes"}]})),s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(d.a,{variant:"h4"},"Rapport des commandes clients")),s.a.createElement(m.a,{className:"mb-sm-30"},s.a.createElement("form",null,s.a.createElement(p.a,{container:!0,spacing:3,direction:"column"},s.a.createElement(f.a,{pl:3,pb:5,pt:3},s.a.createElement(p.a,{item:!0},s.a.createElement(p.a,{container:!0,spacing:5,direction:"row"},s.a.createElement(p.a,{item:!0,sm:3,pt:5,pl:10},!0===H.isLoading?s.a.createElement(O.a,{message:"chargement"}):s.a.createElement(f.a,{pl:3},s.a.createElement(b.a,{fullWidth:!0,id:"client",name:"client",label:"client",select:!0,value:Q.client,onChange:function(e){console.log(e.target.value),T(Object(n.a)(Object(n.a)({},Q),{},{client:e.target.value})),R.invalidateQueries("Commandes")},helperText:"",error:!1},H.data["hydra:member"].map(e=>s.a.createElement(y.a,{key:e.id,value:e},e.nom))))),s.a.createElement(p.a,{item:!0,sm:3},s.a.createElement(j.a,{id:"dateinitiale",nom:"datefinale",label:"Date initiale",valeur:Q.dateinitiale,error:U.dateinitiale,control:K,handledatechange:function(e){console.log("Date initiale..."+e),T(Object(n.a)(Object(n.a)({},Q),{},{dateinitiale:Object(w.a)(Date.parse(e),"yyyy-MM-dd")})),R.invalidateQueries("Commandes")}})),s.a.createElement(p.a,{item:!0,sm:3},s.a.createElement(j.a,{id:"datefinale",nom:"datefinale",label:"Date finale",valeur:Q.datefinale,error:U.datefinale,control:K,handledatechange:function(e){console.log("date finale:::"+e),T(Object(n.a)(Object(n.a)({},Q),{},{datefinale:Object(w.a)(Date.parse(e),"yyyy-MM-dd")})),R.invalidateQueries("Commandes")}})))))))),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(m.a,{className:"mb-sm-30"},s.a.createElement(f.a,{pl:5,pt:1,pb:1},s.a.createElement(d.a,{variant:"body1",color:"initial"},"Montant total:"),s.a.createElement(d.a,{variant:"h6",color:"primary"},z.isLoading?s.a.createElement(O.a,{message:"Chargement des donn\xe9es...",type:"info"}):z.isError?s.a.createElement(O.a,{message:"Erreur lors du chargement des donn\xe9es::"+z.error,type:"error"}):z.data.montanttotal))," "),z.isLoading?s.a.createElement(O.a,{message:"Chargement des donn\xe9es...",type:"info"}):z.isError?s.a.createElement(O.a,{message:"Erreur lors du chargement des donn\xe9es::"+z.error,type:"error"}):s.a.createElement(P.a,{title:"Requ\xeates sur les commandes",data:z.data.commandes,columns:X,options:Object(n.a)(Object(n.a)({},D.a),{},{serverSide:!0,count:z.data.total,rowsPerPageOptions:[20,30,50,100],rowsPerPage:L.rowsPerPage,onChangePage:e=>(e=>{S(Object(n.a)(Object(n.a)({},L),{},{page:e})),R.invalidateQueries("Commandes")})(e),onChangeRowsPerPage:e=>(e=>{S(Object(n.a)(Object(n.a)({},L),{},{rowsPerPage:e})),console.log("statutbre de ligne par page:"+e),R.invalidateQueries("Commandes")})(e),onSearchChange:e=>(e=>{var t;S(Object(n.a)(Object(n.a)({},L),{},{recherche:null!==e&&void 0!==e?e:""})),console.log(null!==(t="texte a chercher"+e)&&void 0!==t?t:""),R.invalidateQueries("Commandes")})(e),onFilterChange:()=>{console.log("le filtre a chang\xe9")}})})))))}}}]);