(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[27],{2315:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return p})),a.d(t,"f",(function(){return b})),a.d(t,"g",(function(){return h})),a.d(t,"b",(function(){return y}));var n=a(8),r=a.n(n),l=a(18),o=a(20);function c(e,t,a,n){return s.apply(this,arguments)}function s(){return(s=Object(l.a)(r.a.mark((function e(t,a,n,l){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,o.b.get("/commandes?itemsPerPage="+a+"&page="+t+"&statut="+n);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e,t,a,n,r,l,o){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(r.a.mark((function e(t,a,n,l,c,s,i){var m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,o.b.get("/periode/commandes/"+c.id+"?dateinitiale="+s+"&datefinale="+i+"&rowsPerPage="+a+"&page="+t);case 3:return m=e.sent,e.abrupt("return",m.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,a,n,r,l,o){return d.apply(this,arguments)}function d(){return(d=Object(l.a)(r.a.mark((function e(t,a,n,l,c,s,i){var m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,o.b.get("/periode/chauffeurs/"+c.id+"?dateinitiale="+s+"&datefinale="+i+"&rowsPerPage="+a+"&page="+t);case 3:return m=e.sent,e.abrupt("return",m.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.post("/commandes",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.put("/commandes/"+t.id,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return E.apply(this,arguments)}function E(){return(E=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.delete("/commandes/"+t.id,{method:"DELETE",herdears:{Accept:"application/json"},data:t.id});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,o.b.post("/commande/"+t.id,t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2319:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return u})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return b}));var n=a(8),r=a.n(n),l=a(18),o=a(20);function c(e,t,a,n){return s.apply(this,arguments)}function s(){return(s=Object(l.a)(r.a.mark((function e(t,a,n,l){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,o.b.get("/modedepayements?itemsPerPage="+a+"&page="+t+"&nom="+n);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e,t,a,n){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(r.a.mark((function e(t,a,n,l){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,o.b.get("/modedepayements?itemsPerPage="+a+"&page="+t+"&nom="+n+"&actif=1");case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.post("/modedepayements",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.put("/modedepayements/"+t.id,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.delete("/modedepayements/"+t.id,{method:"DELETE",herdears:{Accept:"application/json"},data:t.id});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2323:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return p}));var n=a(8),r=a.n(n),l=a(18),o=a(20);function c(e,t,a,n){return s.apply(this,arguments)}function s(){return(s=Object(l.a)(r.a.mark((function e(t,a,n,l){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t+=1,e.next=3,o.b.get("/vehicules?itemsPerPage="+a+"&page="+t+"&marque="+n);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.post("/vehicules",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.put("/vehicules/"+t.id,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.delete("/vehicules/"+t.id,{method:"DELETE",herdears:{Accept:"application/json"},data:t.id});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2350:function(e,t,a){"use strict";var n=a(0),r=a(51);t.a=Object(r.a)(n.createElement("path",{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"LocalShipping")},3109:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(12),l=a(0),o=a.n(l),c=a(228),s=a.n(c),i=a(231),m=a(766),u=a(434),d=a(568),p=a(64),f=a(1241),b=a(1201),v=a(45),h=a(79),E=a(229),y=a(144),g=a(783),j=a(606),x=a(2315),O=a(73),C=a(84),w=a(32),N=a(117),S=a(444),k=a(131),P=a(367),_=(a(368),a(369),a(232)),D=a(2319),R=a(60);const B=h.b().shape({client:h.c().required("Le  client est requis"),modedepayement:h.c().required("Le mode de payement est requis"),adressedepart:h.c().required("Le champs Adresse de d\xe9part est requis"),adressearrivee:h.c().required("Le champs Adresse d arriv\xe9e est requis"),montant:h.a().required("Montant requis").positive("Le montant doit \xeatre positif").integer("Le montant doit \xeatre un nombre entier")});function M({id:e,lecommande:t,handleFermeture:a,action:c}){var s,i,m,u;const d=Object(w.useQueryClient)(),f=Object(w.useMutation)(x.a,{onSuccess:()=>{d.invalidateQueries("Commandes"),T({message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0})},onError:()=>{d.invalidateQueries("Commandes"),T({message:"Echec lors de l op\xe9ration",open:!0,severity:"error",automaticClose:!0})}}),b=Object(w.useMutation)(x.f,{onSuccess:()=>{d.invalidateQueries("Commandes"),T({message:"Mise \xe0 jour r\xe9ussie",open:!0,severity:"success",automaticClose:!0})},onError:()=>{d.invalidateQueries("Commandes"),T({message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0})}}),h=Object(w.useQuery)(["Clients",1],()=>Object(_.d)(0,100,"",""),{keepPreviousData:!0}),M=Object(w.useQuery)(["Modedepayements",1],()=>Object(D.c)(0,100,"",""),{keepPreviousData:!0}),A=Object(l.useState)(Object(n.a)(Object(n.a)({},t),{},{executionimmediate:null===(s=null===t||void 0===t?void 0:t.executionimmediate)||void 0===s||s})),I=Object(r.a)(A,2),L=I[0],z=I[1],Q=Object(l.useState)({severity:"severity",message:"",open:!1,automaticClose:!0}),q=Object(r.a)(Q,2),F=q[0],T=q[1],V=Object(O.c)({resolver:Object(E.yupResolver)(B),defaultValues:Object(n.a)(Object(n.a)({},L),{},{client:t?"/api/clients/"+t.client.id:"/api/clients/1",modedepayement:t?"/api/modedepayements/"+t.modedepayement.id:"/api/modedepayements/1"})}),H=V.control,G=V.handleSubmit,J=V.errors,U=(V.reset,e=>{let t=Object(n.a)(Object(n.a)({},L),e);L.id?b.mutate(Object(n.a)({},t)):f.mutate(Object(n.a)({},t))});return o.a.createElement("div",null,o.a.createElement(C.a,{message:F.message,severity:F.severity,open:F.open,handleAlertClose:F.automaticClose?a:()=>T(Object(n.a)(Object(n.a)({},F),{},{open:!1}))}),o.a.createElement("form",{onSubmit:G(U)},o.a.createElement(v.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(v.a,{item:!0},h.isLoading?o.a.createElement(R.a,{message:"chargement des clients..."}):o.a.createElement(k.a,{id:"client",name:"client",label:"Choisir le client",table:"client",control:H,options:h.data["hydra:member"],error:J.client,valeur:null!==(i=null===L||void 0===L?void 0:L.client)&&void 0!==i?i:""})),o.a.createElement(v.a,{item:!0},M.isLoading?o.a.createElement(R.a,{message:"chargement des modes de payement..."}):o.a.createElement(k.a,{id:"modedepayement",name:"modedepayement",label:"Choisir le mode de payement",table:"modedepayement",control:H,options:M.data["hydra:member"],error:J.modedepayement,valeur:null!==(m=null===L||void 0===L?void 0:L.modedepayement)&&void 0!==m?m:""})),o.a.createElement(v.a,{item:!0},o.a.createElement(N.a,{id:"adressedepart",nom:"adressedepart",label:"Adresse de d\xe9part",valeur:null===L||void 0===L?void 0:L.adressedepart,control:H,error:J.adressedepart,multiline:!0,rowsMax:4})),o.a.createElement(v.a,{item:!0},o.a.createElement(N.a,{id:"adressearrivee",nom:"adressearrivee",label:"Adresse d arriv\xe9e",valeur:null===L||void 0===L?void 0:L.adressearrivee,control:H,error:J.adressearrivee,multiline:!0,rowsMax:4})),o.a.createElement(v.a,null,o.a.createElement(P.a,{id:"executionimmediate",nom:"executionimmediate",control:H,coche:Boolean(null!==(u=null===L||void 0===L?void 0:L.executionimmediate)&&void 0!==u?u:""),label:"Ex\xe9cution imm\xe9diate",onChange:e=>{console.log(L),z(Object(n.a)(Object(n.a)({},L),{},{executionimmediate:e}))},changement:e=>{console.log("on a coch\xe9::::"+e),z(Object(n.a)(Object(n.a)({},L),{},{executionimmediate:e}))}})),!L.executionimmediate&&o.a.createElement(v.a,{item:!0},o.a.createElement(S.a,{id:"dateexecution",nom:"dateexecution",label:"date d' ex\xe9cution",valeur:new Date,error:J.dateexecution,control:H})),o.a.createElement(v.a,{item:!0},o.a.createElement(N.a,{id:"montant",nom:"montant",label:"Montant",valeur:null===L||void 0===L?void 0:L.montant,control:H,error:J.montant})),o.a.createElement(v.a,{item:!0},o.a.createElement(v.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(v.a,{item:!0},o.a.createElement(y.a,{color:"primary",variant:"contained",type:"submit",onClick:G(U)},b.isLoading||f.isLoading?o.a.createElement(g.a,{color:"inherit"}):o.a.createElement(j.a,null,"send"),o.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===c?o.a.createElement(p.a,null,"Enregistrer"):o.a.createElement(p.a,null,"Mettre \xe0 jour")))),o.a.createElement(v.a,{item:!0},o.a.createElement(y.a,{variant:"outlined",color:"secondary",onClick:function(){a()}},"Annuler")))))))}var A=a(204),I=a(230),L=a(2350),z=a(300),Q=(a(443),a(1192)),q=a(2285),F=a(20),T=a(3),V=a(1198),H=a(26),G=a(110);Object(G.a)(e=>{e.palette,Object(H.a)(e,["palette"]);return{gridCard:{"& .grid__card-overlay":{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:2,opacity:0,transition:"all 250ms ease-in-out",background:"rgba(0, 0, 0, 0.67)","& > div:nth-child(2)":{position:"absolute",top:0,bottom:0,right:0,left:0,zIndex:-1}},"& .grid__card-bottom":{"& .email":{display:"none"}},"&:hover":{"& .grid__card-overlay":{opacity:1},"& .grid__card-bottom":{"& .email":{display:"block"},"& .date":{display:"none"}}}}}});var J=a(426),U=a(2192),W=a(2201),Y=a(2303),K=a(224);var X=({viewMode:e,sliderValue:t,handleSldierChange:a,handleInputChange:n,handleViewChange:r})=>o.a.createElement("div",{className:"flex flex-wrap items-center justify-between"},o.a.createElement("div",{className:"flex items-center"},o.a.createElement(J.a,{onChange:n,InputProps:{startAdornment:o.a.createElement(U.a,{position:"start"},o.a.createElement(j.a,null,"search"))}})),o.a.createElement("div",{className:"flex items-center"},o.a.createElement(W.a,{xsDown:!0},"grid"===e&&o.a.createElement(Y.a,{className:"w-120 mr-4",value:t,min:25,step:null,marks:[{value:25},{value:50},{value:75},{value:100}],onChange:a,"aria-labelledby":"continuous-slider"}),o.a.createElement(K.a,{color:"grid"===e?"primary":"default",onClick:()=>r("grid")},o.a.createElement(j.a,null,"view_comfy"))))),Z=a(2302),$=a(95);const ee=Object(G.a)(e=>{e.palette,Object(H.a)(e,["palette"]);return{listCard:{"& .project-image":{height:75,width:100},"& .card__button-group":{display:"none",position:"absolute",top:0,bottom:0,right:0,zIndex:1},"&:hover":{"& .card__button-group":{display:"flex"}}}}});var te=({list:e=[]})=>{const t=ee();return o.a.createElement("div",null,e.map((a,n)=>o.a.createElement(b.a,{className:Object(T.default)({[t.listCard]:!0,"card p-2 relative":!0,"mb-4":n<e.length}),key:a.id,elevation:3},o.a.createElement(v.a,{container:!0,justify:"space-between",alignItems:"center"},o.a.createElement(v.a,{item:!0,md:6},o.a.createElement("div",{className:"flex items-center"},o.a.createElement("img",{className:"project-image w-full",src:a.projectImage,alt:"project"}),o.a.createElement("div",{className:"ml-4"},o.a.createElement("p",{className:"m-0 mb-2"},a.projectName),o.a.createElement("div",{className:"flex"},o.a.createElement("small",{className:"text-muted"},a.date),o.a.createElement("small",{className:"text-muted ml-6"},a.email))))),o.a.createElement(v.a,{item:!0,md:2},o.a.createElement("div",{className:"text-muted flex items-center"},o.a.createElement(j.a,{fontSize:"small"},"chat_bubble_outline"),o.a.createElement("span",{className:"mr-6 ml-1"},a.comment),o.a.createElement(j.a,{fontSize:"small"},"desktop_windows"),o.a.createElement("span",{className:"ml-1"},a.revision))),o.a.createElement(v.a,{item:!0,md:2},o.a.createElement("div",{className:"flex items-center"},o.a.createElement(Z.a,{src:a.userImage}),o.a.createElement("span",{className:"ml-4"},a.userName))),o.a.createElement(v.a,{item:!0,md:2},o.a.createElement("div",{className:"card__button-group items-center bg-paper"},o.a.createElement(j.a,{fontSize:"small",className:"mr-4 text-muted cursor-pointer"},"filter_none"),o.a.createElement(j.a,{fontSize:"small",className:"mr-4 text-muted cursor-pointer"},"share"),o.a.createElement(j.a,{fontSize:"small",className:"mr-4 text-muted cursor-pointer"},"edit"),o.a.createElement(j.a,{fontSize:"small",className:"mr-4 text-muted cursor-pointer"},"delete")),o.a.createElement("div",{className:"card__drop-menu text-right"},o.a.createElement(W.a,{smDown:!0},o.a.createElement($.p,{menuButton:o.a.createElement(K.a,null,o.a.createElement(j.a,null,"more_horiz"))},o.a.createElement(d.a,{className:"flex items-center"},o.a.createElement(j.a,{className:"mr-4"},"filter_none")," ","Duplicate"),o.a.createElement(d.a,{className:"flex items-center"},o.a.createElement(j.a,{className:"mr-4"},"share")," ","Share"),o.a.createElement(d.a,{className:"flex items-center"},o.a.createElement(j.a,{className:"mr-4"},"edit")," ","Edit"),o.a.createElement(d.a,{className:"flex items-center"},o.a.createElement(j.a,{className:"mr-4"},"delete")," ","Delete")))))))))};const ae=Object(G.a)(e=>{e.palette,Object(H.a)(e,["palette"]);return{gridCard:{"& .grid__card-overlay":{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:2,opacity:0,transition:"all 250ms ease-in-out",background:"rgba(0, 0, 0, 0.67)","& > div:nth-child(2)":{position:"absolute",top:0,bottom:0,right:0,left:0,zIndex:-1}},"& .grid__card-bottom":{"& .email":{display:"none"}},"&:hover":{"& .grid__card-overlay":{opacity:1},"& .grid__card-bottom":{"& .email":{display:"block"},"& .date":{display:"none"}}}}}});var ne=({list:e=[],sliderValue:t,onSelectionChauffeur:a,montantInitial:n=5e3})=>{const c=ae(),s=Object(l.useState)(n),i=Object(r.a)(s,2),m=i[0],u=i[1],d=({target:{name:e,value:t}})=>{u(t)};return o.a.createElement("div",null,o.a.createElement(v.a,{container:!0,spacing:2},e.map((e,n)=>{return o.a.createElement(v.a,{item:!0,sm:(r=t,25===r?2:50===r?3:75===r?4:100===r?6:void 0),key:e.chauffeur.id},o.a.createElement(b.a,{className:Object(T.default)("flex-column h-full",c.gridCard),elevation:6},o.a.createElement("div",{className:"grid__card-top text-center relative"},o.a.createElement("p",{className:""},e.chauffeur.nom+" "+e.chauffeur.prenom),o.a.createElement("img",{className:"block w-full",src:F.c+"/fichiers/photosvehicules/"+e.photo,alt:e.chauffeur.nom+" "+e.chauffeur.prenom}),o.a.createElement("div",{className:"grid__card-overlay flex-column"},o.a.createElement("div",{className:"flex items-center justify-between"}),o.a.createElement("div",{className:""},o.a.createElement("p",{className:"text-white"},e.chauffeur.nom+" "+e.chauffeur.prenom),o.a.createElement("small",{className:"text-white"},e.chauffeur.telephone+"("+e.chauffeur.quartier.nom+")"),o.a.createElement("p",{className:"text-white"},e.typevehicule.nom+" / "+e.marque)))),o.a.createElement("div",{className:"grid__card-bottom text-center py-2"},o.a.createElement("p",null,o.a.createElement(J.a,{id:"montant",label:"Montant de la commande",value:m,onChange:d})),o.a.createElement("p",null," ",o.a.createElement(y.a,{variant:"outlined",className:"text-green border-color-green",onClick:()=>a(e.chauffeur.id,m)},"S\xe9lectionner")))));var r})))},re=a(137),le=a(2323);var oe=({onSelectionChauffeur:e,montantInitial:t=10})=>{const a=Object(l.useState)([]),n=Object(r.a)(a,2),c=n[0],s=(n[1],Object(l.useState)(25)),i=Object(r.a)(s,2),m=i[0],u=i[1],d=Object(l.useState)([]),p=Object(r.a)(d,2),f=(p[0],p[1]),b=Object(l.useState)("grid"),v=Object(r.a)(b,2),h=v[0],E=v[1],y=Object(l.useMemo)(()=>Object(re.debounce)(e=>{let t=c.filter(t=>t.projectName.toLowerCase().match(e.toLowerCase()));f([...t])},200),[c]),g=(Object(w.useQueryClient)(),Object(w.useQuery)(["Vehicules"],()=>Object(le.b)(0,1e3,"",""),{keepPreviousData:!0}));return o.a.createElement("div",{className:"list m-sm-30"},o.a.createElement("div",{className:"mb-4"},o.a.createElement(X,{viewMode:h,handleViewChange:e=>{E(e)},handleInputChange:e=>{let t=e.target.value;y(t)},handleSldierChange:(e,t)=>{u(t)},sliderValue:m})),g.isLoading?o.a.createElement(R.a,{message:"chargement de la liste des chauffeurs..."}):o.a.createElement(o.a.Fragment,null,o.a.createElement(W.a,{xsDown:!0},"list"===h?o.a.createElement(te,{list:g.data["hydra:member"]}):o.a.createElement(ne,{list:g.data["hydra:member"],sliderValue:m,onSelectionChauffeur:e,montantInitial:t})),o.a.createElement(W.a,{smUp:!0},o.a.createElement(ne,{list:g.data["hydra:member"],sliderValue:m}))))};var ce=({open:e,onSelectionChauffeur:t,onClickSurAnnuler:a,title:n="S\xe9lectionner le chauffeur",montantInitial:r=0})=>o.a.createElement(V.a,{fullScreen:!0,maxWidth:"xl",open:e},o.a.createElement("div",{className:"p-8 text-center"},o.a.createElement("h4",{className:"capitalize m-0 mb-2"},n),o.a.createElement("p",null,"S\xe9lectionner le chauffeur pour ex\xe9cuter cette commande"),o.a.createElement("div",{className:"flex justify-center pt-2 m--2"},o.a.createElement(y.a,{className:"m-2 rounded hover-bg-secondary px-6",variant:"outlined",color:"secondary",onClick:a},"Abandonner l'op\xe9ration")),o.a.createElement(oe,{onSelectionChauffeur:t,montantInitial:r}),o.a.createElement("div",{className:"flex justify-center pt-2 m--2"},o.a.createElement(y.a,{className:"m-2 rounded hover-bg-secondary px-6",variant:"outlined",color:"secondary",onClick:a},"Abandonner l'op\xe9ration"))));t.default=()=>{const e=Object(l.useState)({page:0,rowsPerPage:20,recherche:"Trait\xe9e",filtre:""}),t=Object(r.a)(e,2),a=t[0],c=t[1],h=Object(w.useQueryClient)(),E=Object(w.useQuery)(["Commandes",a.page,a.rowsPerPage,a.recherche,a.filtre],()=>Object(x.c)(a.page,a.rowsPerPage,a.recherche,a.filtre),{keepPreviousData:!0}),y=E.isLoading,g=(E.isFetching,E.isError),j=E.error,O=E.data,N=Object(w.useMutation)(x.g,{onSuccess:()=>{Z({message:"Suppr\xe9ssion r\xe9ussi",open:!0,severity:"success"})},onError:()=>{Z({message:"Echec lors de l op\xe9ration",open:!0,severity:"error"})},onSettled:()=>{h.invalidateQueries("Commandes")}}),S=Object(w.useMutation)(x.b,{onSuccess:()=>{Z({message:"Op\xe9ration r\xe9ussie",open:!0,severity:"success"})},onError:()=>{Z({message:"Echec lors de l op\xe9ration",open:!0,severity:"error"})},onSettled:()=>{h.invalidateQueries("Commandes")}}),k=[{id:1,nom:"Confirm\xe9e",label:"Confirmer"},{id:2,nom:"Annul\xe9e",label:"Annuler"}],P=Object(l.useState)({open:!1,idChauffeur:null,commandeEnCours:0,montantEnCours:0,operationEnCours:"Confirm\xe9e"}),_=Object(r.a)(P,2),D=_[0],B=_[1],F=Object(l.useState)(null),V=Object(r.a)(F,2),H=V[0],G=(V[1],Object(l.useState)({mode:"affichage",action:"ajout",affichageTable:!0})),J=Object(r.a)(G,2),U=J[0],W=J[1],Y=Object(l.useState)({severity:"severity",message:"",open:!1,handleCloseAlert:()=>se()}),K=Object(r.a)(Y,2),X=K[0],Z=K[1],$=Object(l.useState)("Liste des commandes \xe0 confirmer"),ee=Object(r.a)($,2),te=ee[0],ae=ee[1],ne=Object(l.useState)(!1),re=Object(r.a)(ne,2),le=re[0],oe=re[1],se=()=>{Z(Object(n.a)(Object(n.a)({},C.a),{},{open:!1}))},ie=[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>o.a.createElement(o.a.Fragment,null,"id: ",e," ","Colis"==t.rowData[5].nom?o.a.createElement(o.a.Fragment,null,o.a.createElement(L.a,null),o.a.createElement("br",null)):"","Colis"==t.rowData[5].nom?o.a.createElement("strong",null,t.rowData[6].nom):"",o.a.createElement("br",null),o.a.createElement("small",{className:"text-muted"},Object(Q.a)(Object(q.a)(t.rowData[15]),"dd/MM/yyyy hh:mm")))}},{name:"client",label:"Client",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>o.a.createElement(o.a.Fragment,null,e.nom+" "+e.prenom,o.a.createElement("br",null),o.a.createElement("small",{className:"text-muted"},e.telephone))}},{name:"quartierdedepart",label:"Depart",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return o.a.createElement(o.a.Fragment,null,null!==(n=null===e||void 0===e?void 0:e.nom)&&void 0!==n?n:"",o.a.createElement("br",null),o.a.createElement("small",{className:"text-muted"},t.rowData[10]))}}},{name:"quartierdarrivee",label:"Arriv\xe9e",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return o.a.createElement(o.a.Fragment,null,null!==(n=null===e||void 0===e?void 0:e.nom)&&void 0!==n?n:"",o.a.createElement("br",null),o.a.createElement("small",{className:"text-muted"},t.rowData[11]))}}},{name:"chauffeur",label:"Chauffeur",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r,l;return o.a.createElement(o.a.Fragment,null,(null!==(n=null===e||void 0===e?void 0:e.nom)&&void 0!==n?n:"")+" "+(null!==(r=null===e||void 0===e?void 0:e.prenom)&&void 0!==r?r:""),o.a.createElement("br",null),o.a.createElement("small",{className:"text-muted"},null!==(l=null===e||void 0===e?void 0:e.telephone)&&void 0!==l?l:""))}}},{name:"typedecourse",label:"Type de course",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>{switch(e.id){case 1:return e.nom;case 2:return o.a.createElement("span",null," ",e.nom,": ",o.a.createElement("br",null)," ",o.a.createElement("strong",null,t.rowData[6].nom)," ")}}}},{name:"typedecoli",label:"Type de colis",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>{var n;return null!==(n=null===e||void 0===e?void 0:e.nom)&&void 0!==n?n:""}}},{name:"traitepar",label:"trait\xe9 par",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"encaissepar",label:"Encaiss\xe9 par",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"modedepayement",label:"Mode de payement",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"adressedepart",label:"Adresse de d\xe9part",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>e}},{name:"adressearrivee",label:"Adresse d arriv\xe9e",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>e}},{name:"gpsdepart",label:"Position GPS de d\xe9part",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>e}},{name:"gpsarrivee",label:"Position GPS d arriv\xe9e",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>e}},{name:"statut",label:"Statut",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>o.a.createElement("small",{className:Object(T.default)({"border-radius-4  text-white px-2 py-2px":!0,"bg-primary":"Nouveau"===e,"bg-gray":"Trait\xe9e"===e,"bg-error":"Annul\xe9e"===e,"bg-secondary":"Confirm\xe9e"===e,"bg-green":"Clotur\xe9e"===e})},e)}},{name:"datecommande",label:"Date de la commande",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>Object(Q.a)(Date.parse(e),"dd/MM/yyyy \xe0 HH:mm")}},{name:"executionimmediate",label:"Execution immediate",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>o.a.createElement(m.a,{checked:e})}},{name:"dateexecution",label:"Date d ex\xe9cution",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>Object(Q.a)(Date.parse(e),"dd/MM/yyyy \xe0 HH:mm")}},{name:"traitele",label:"Trait\xe9 le",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"datedebutexecution",label:"D\xe9but d ex\xe9cution",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"datefinexecution",label:"Fin d ex\xe9cution",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"encaissele",label:"Encaiss\xe9 le",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"montant",label:"montant",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"recepteurducolis",label:"Recepteur du colis",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>o.a.createElement(o.a.Fragment,null,e,o.a.createElement("br",null),o.a.createElement("small",{className:"text-muted"},t.rowData[24]))}},{name:"telephonerecepteur",label:"T\xe9l\xe9phone du recepteur de colis",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,customBodyRender:(e,t,a)=>o.a.createElement("div",null,o.a.createElement(u.a,{value:"",id:t.rowData[0],name:t.rowData[0],variant:"outlined",onChange:e=>((e,t,a)=>{let r=e.target.value,l=t,o=a;console.log("Operation:"+r),"Confirm\xe9e"!=r?S.mutate({id:l,chauffeur:0,operation:r}):B(Object(n.a)(Object(n.a)({},D),{},{open:!0,commandeEnCours:l,montantEnCours:o,operationEnCours:r}))})(e,t.rowData[0],t.rowData[22])},k.map(e=>o.a.createElement(d.a,{key:e.id,value:e.nom},e.label))))}}];return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(C.a,{message:X.message,severity:X.severity,open:X.open,handleAlertClose:se}),o.a.createElement(ce,{open:D.open,onSelectionChauffeur:(e,t)=>{B(Object(n.a)(Object(n.a)({},D),{},{open:!1,idChauffeur:e,montantEnCours:t})),S.mutate({id:D.commandeEnCours,montant:t,chauffeur:e,statut:D.operationEnCours})},onClickSurAnnuler:()=>{B(Object(n.a)(Object(n.a)({},D),{},{open:!1}))},montantInitial:D.montantEnCours}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(A.a,{routeSegments:[{name:"Commandes \xe0 traiter/confirmer"}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(p.a,{variant:"h4"},te)),"affichage"===U.mode?o.a.createElement(f.a,{in:U.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,y?o.a.createElement(R.a,{message:"Chargement des donn\xe9es",type:"info"}):g?o.a.createElement(R.a,{message:"Erreur lors du chargement des donn\xe9es::"+j,type:"error"}):o.a.createElement(z.a,{tag:"div",blocking:!1},o.a.createElement(s.a,{title:te,data:O["hydra:member"],columns:ie,options:Object(n.a)(Object(n.a)({},i.a),{},{serverSide:!0,count:O["hydra:totalItems"],rowsPerPageOptions:[20,30,50],rowsPerPage:a.rowsPerPage,onChangePage:e=>(e=>{c(Object(n.a)(Object(n.a)({},a),{},{page:e})),h.invalidateQueries("Commandes")})(e),onChangeRowsPerPage:e=>(e=>{c(Object(n.a)(Object(n.a)({},a),{},{rowsPerPage:e})),console.log("statutbre de ligne par page:"+e),h.invalidateQueries("Commandes")})(e),onSearchChange:e=>(e=>{var t;console.log(null!==(t="texte a chercher"+e)&&void 0!==t?t:""),h.invalidateQueries("Commandes")})(e),onFilterChange:()=>{console.log("le filtre a chang\xe9")}})})),o.a.createElement(b.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(I.a,{open:le,onConfirmDialogClose:()=>{oe(!1)},onYesClick:()=>{oe(!1),N.mutate(H)},text:"Confirmez la suppression de "+(null===H||void 0===H?void 0:H.name)})))):o.a.createElement(v.a,{container:!0,spacing:6,alignContent:"center",justify:"center"},o.a.createElement(v.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(b.a,{className:"px-6 pt-2 pb-4"},o.a.createElement(M,{action:U.action,lecommande:H,handleFermeture:()=>{W({mode:"affichage",action:"nouveau",affichageTable:!0}),ae("Liste des commandes \xe0 confirmer")}})))))}}}]);