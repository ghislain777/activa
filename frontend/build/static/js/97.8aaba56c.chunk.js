(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[97],{3154:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(86),r=t(1205),s=t(2393),m=t(2519);var o=Object(s.compose)(Object(s.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:c.a.createElement("div",{className:"h-full"}),containerElement:c.a.createElement("div",{className:"h-400"}),mapElement:c.a.createElement("div",{className:"h-full"})}),m.withScriptjs,m.withGoogleMap)(e=>c.a.createElement(m.GoogleMap,{defaultZoom:8,defaultCenter:{lat:-34.397,lng:150.644}})),i=t(12),p=t(3006);const E=Object(s.compose)(Object(s.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:c.a.createElement("div",{className:"h-full"}),containerElement:c.a.createElement("div",{className:"h-400"}),mapElement:c.a.createElement("div",{className:"h-full"})}),m.withScriptjs,m.withGoogleMap)(e=>c.a.createElement(m.GoogleMap,{defaultZoom:8,defaultCenter:{lat:-34.397,lng:150.644}},c.a.createElement(m.Marker,{isMarkerShown:!1,position:{lat:-34.397,lng:150.644},onClick:e.onMarkerClick},c.a.createElement(p.InfoBox,{options:{closeBoxURL:"",enableEventPropagation:!0}},c.a.createElement(r.a,{className:"p-4"},c.a.createElement("p",{className:"whitespace-pre m-0"},"Hello World !!!"))))));var u=()=>{const e=Object(l.useRef)(null),a=Object(l.useState)(!1),t=Object(i.a)(a,2),n=t[0],r=t[1],s=Object(l.useCallback)(()=>{e.current=setTimeout(()=>{r(!0)},3e3)},[]);return Object(l.useEffect)(()=>(s(),()=>{e.current&&clearTimeout(e.current)}),[s]),c.a.createElement(E,{isMarkerShown:n,onMarkerClick:()=>{r(!1),s()}})};a.default=()=>c.a.createElement("div",{className:"m-sm-30"},c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(n.b,{routeSegments:[{name:"Map"}]})),c.a.createElement(r.a,null,c.a.createElement(o,null)),c.a.createElement("div",{className:"py-3"}),c.a.createElement(r.a,null,c.a.createElement(u,null)))}}]);