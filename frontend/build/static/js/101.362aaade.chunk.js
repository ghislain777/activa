(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[101],{3100:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(86),i=t(12),l=t(112),r=t(144),o=t(1228),m=t(228),u=t(620),d=t.n(u);const h=Object(l.a)(e=>({close:{padding:e.spacing(.5)}}));function E(){const e=h(),a=s.a.useState(!1),t=Object(i.a)(a,2),n=t[0],c=t[1];function l(e,a){"clickaway"!==a&&c(!1)}return s.a.createElement("div",null,s.a.createElement(r.a,{onClick:function(){c(!0)}},"Open simple snackbar"),s.a.createElement(o.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:n,autoHideDuration:6e3,onClose:l,ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement("span",{id:"message-id"},"Note archived"),action:[s.a.createElement(r.a,{key:"undo",color:"secondary",size:"small",onClick:l},"UNDO"),s.a.createElement(m.a,{key:"close","aria-label":"Close",color:"inherit",className:e.close,onClick:l},s.a.createElement(d.a,null))]}))}var p=t(25),g=t(3),k=t(1146),b=t.n(k),v=t(1148),C=t.n(v),f=t(1149),y=t.n(f),O=t(260),N=t(1122),j=t(1229),S=t(1147),I=t.n(S);const w={success:b.a,warning:I.a,error:C.a,info:y.a},T=Object(l.a)(e=>({success:{backgroundColor:O.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:N.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}));function z(e){const a=T(),t=e.className,n=e.message,c=e.onClose,i=e.variant,l=Object(p.a)(e,["className","message","onClose","variant"]),r=w[i];return s.a.createElement(j.a,Object.assign({className:Object(g.default)(a[i],t),"aria-describedby":"client-snackbar",message:s.a.createElement("span",{id:"client-snackbar",className:a.message},s.a.createElement(r,{className:Object(g.default)(a.icon,a.iconVariant)}),n),action:[s.a.createElement(m.a,{key:"close","aria-label":"Close",color:"inherit",onClick:c},s.a.createElement(d.a,{className:a.icon}))]},l))}const B=Object(l.a)(e=>({margin:{margin:e.spacing(1)}}));function x(){const e=B(),a=s.a.useState(!1),t=Object(i.a)(a,2),n=t[0],c=t[1];function l(e,a){"clickaway"!==a&&c(!1)}return s.a.createElement("div",null,s.a.createElement(r.a,{variant:"outlined",className:e.margin,onClick:function(){c(!0)}},"Open success snackbar"),s.a.createElement(o.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:n,autoHideDuration:6e3,onClose:l},s.a.createElement(z,{onClose:l,variant:"success",message:"This is a success message!"})),s.a.createElement(z,{variant:"error",className:e.margin,message:"This is an error message!"}),s.a.createElement(z,{variant:"warning",className:e.margin,message:"This is a warning message!"}),s.a.createElement(z,{variant:"info",className:e.margin,message:"This is an information message!"}),s.a.createElement(z,{variant:"success",className:e.margin,message:"This is a success message!"}))}var D=t(4);function P(){const e=s.a.useState({open:!1,vertical:"top",horizontal:"center"}),a=Object(i.a)(e,2),t=a[0],n=a[1],c=t.vertical,l=t.horizontal,m=t.open,u=e=>()=>{n(Object(D.a)({open:!0},e))};return s.a.createElement("div",null,s.a.createElement(r.a,{onClick:u({vertical:"top",horizontal:"center"})},"Top-Center"),s.a.createElement(r.a,{onClick:u({vertical:"top",horizontal:"right"})},"Top-Right"),s.a.createElement(r.a,{onClick:u({vertical:"bottom",horizontal:"right"})},"Bottom-Right"),s.a.createElement(r.a,{onClick:u({vertical:"bottom",horizontal:"center"})},"Bottom-Center"),s.a.createElement(r.a,{onClick:u({vertical:"bottom",horizontal:"left"})},"Bottom-Left"),s.a.createElement(r.a,{onClick:u({vertical:"top",horizontal:"left"})},"Top-Left"),s.a.createElement(o.a,{anchorOrigin:{vertical:c,horizontal:l},key:"".concat(c,",").concat(l),open:m,onClose:function(){n(Object(D.a)(Object(D.a)({},t),{},{open:!1}))},ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement("span",{id:"message-id"},"I love snacks")}))}const q=s.a.createElement(r.a,{color:"secondary",size:"small"},"lorem ipsum dolorem"),R=Object(l.a)(e=>({root:{maxWidth:600},snackbar:{margin:e.spacing(1)}}));function H(){const e=R();return s.a.createElement("div",{className:e.root},s.a.createElement(j.a,{className:e.snackbar,message:"I love snacks.",action:q}),s.a.createElement(j.a,{className:e.snackbar,message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate."}),s.a.createElement(j.a,{className:e.snackbar,message:"I love candy. I love cookies. I love cupcakes.",action:q}),s.a.createElement(j.a,{className:e.snackbar,message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate.",action:q}))}var L=t(7);class M extends s.a.Component{constructor(...e){super(...e),this.queue=[],this.state={open:!1},this.handleClick=e=>()=>{this.queue.push({message:e,key:(new Date).getTime()}),this.state.open?this.setState({open:!1}):this.processQueue()},this.processQueue=()=>{this.queue.length>0&&this.setState({messageInfo:this.queue.shift(),open:!0})},this.handleClose=(e,a)=>{"clickaway"!==a&&this.setState({open:!1})},this.handleExited=()=>{this.processQueue()}}render(){const e=this.props.classes,a=this.state.messageInfo,t=void 0===a?{}:a;return s.a.createElement("div",null,s.a.createElement(r.a,{onClick:this.handleClick("Message A")},"Show message A"),s.a.createElement(r.a,{onClick:this.handleClick("Message B")},"Show message B"),s.a.createElement(o.a,{key:t.key,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,onExited:this.handleExited,ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement("span",{id:"message-id"},t.message),action:[s.a.createElement(r.a,{key:"undo",color:"secondary",size:"small",onClick:this.handleClose},"UNDO"),s.a.createElement(m.a,{key:"close","aria-label":"Close",color:"inherit",className:e.close,onClick:this.handleClose},s.a.createElement(d.a,null))]}))}}var Q=Object(L.a)(e=>({close:{padding:e.spacing(.5)}}))(M),U=t(1245);function A(e){return s.a.createElement(U.a,Object.assign({},e,{direction:"left"}))}function F(e){return s.a.createElement(U.a,Object.assign({},e,{direction:"up"}))}function J(e){return s.a.createElement(U.a,Object.assign({},e,{direction:"right"}))}function V(e){return s.a.createElement(U.a,Object.assign({},e,{direction:"down"}))}class G extends s.a.Component{constructor(...e){super(...e),this.state={open:!1},this.handleClick=e=>()=>{this.setState({open:!0,Transition:e})},this.handleClose=()=>{this.setState({open:!1})}}render(){return s.a.createElement("div",null,s.a.createElement(r.a,{onClick:this.handleClick(A)},"Right"),s.a.createElement(r.a,{onClick:this.handleClick(F)},"Up"),s.a.createElement(r.a,{onClick:this.handleClick(J)},"Left"),s.a.createElement(r.a,{onClick:this.handleClick(V)},"Down"),s.a.createElement(o.a,{open:this.state.open,onClose:this.handleClose,TransitionComponent:this.state.Transition,ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement("span",{id:"message-id"},"I love snacks")}))}}var W=G,K=t(2797);function X(){const e=Object(K.useSnackbar)().enqueueSnackbar;return s.a.createElement(s.a.Fragment,null,s.a.createElement(r.a,{onClick:()=>{e("I love snacks.")}},"Show snackbar"),s.a.createElement(r.a,{onClick:(a="warning",()=>{e("This is a warning message!",{variant:a})})},"Show warning snackbar"));var a}function Y(){return s.a.createElement(K.SnackbarProvider,{maxSnack:3},s.a.createElement(X,null))}var Z=t(1203),$=t(428);function _(e){return s.a.createElement(U.a,Object.assign({},e,{direction:"up"}))}function ee(e){return s.a.createElement($.a,e)}function ae(){const e=s.a.useState({open:!1,Transition:Z.a}),a=Object(i.a)(e,2),t=a[0],n=a[1],c=e=>()=>{n({open:!0,Transition:e})};return s.a.createElement("div",null,s.a.createElement(r.a,{onClick:c(ee)},"Grow Transition"),s.a.createElement(r.a,{onClick:c(Z.a)},"Fade Transition"),s.a.createElement(r.a,{onClick:c(_)},"Slide Transition"),s.a.createElement(o.a,{open:t.open,onClose:function(){n(Object(D.a)(Object(D.a)({},t),{},{open:!1}))},TransitionComponent:t.Transition,ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement("span",{id:"message-id"},"I love snacks")}))}a.default=()=>s.a.createElement("div",{className:"m-sm-30"},s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(c.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Snackbar"}]})),s.a.createElement(c.B,{title:"simple snackbar"},s.a.createElement(E,null)),s.a.createElement("div",{className:"py-3"}),s.a.createElement(c.B,{title:"customized snackbar"},s.a.createElement(x,null)),s.a.createElement("div",{className:"py-3"}),s.a.createElement(c.B,{title:"positioned snackbar"},s.a.createElement(P,null)),s.a.createElement("div",{className:"py-3"}),s.a.createElement(c.B,{title:"message length"},s.a.createElement(H,null)),s.a.createElement("div",{className:"py-3"}),s.a.createElement(c.B,{title:"transition"},s.a.createElement(ae,null)),s.a.createElement("div",{className:"py-3"}),s.a.createElement(c.B,{title:"consecutive snackbar"},s.a.createElement(Q,null)),s.a.createElement("div",{className:"py-3"}),s.a.createElement(c.B,{title:"Control Slide direction"},s.a.createElement(W,null)),s.a.createElement("div",{className:"py-3"}),s.a.createElement(c.B,{title:"complementary project"},s.a.createElement(Y,null)))}}]);