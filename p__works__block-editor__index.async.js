"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4592],{82826:function(x,i,n){n.d(i,{Z:function(){return m}});var l=n(1413),a=n(62435),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},c=u,_=n(84089),E=function(f,P){return a.createElement(_.Z,(0,l.Z)((0,l.Z)({},f),{},{ref:P,icon:c}))};E.displayName="ArrowLeftOutlined";var m=a.forwardRef(E)},17846:function(x,i,n){n.d(i,{y:function(){return W}});var l=n(82534),a=n.n(l),u=n(29896),c=n.n(u),_=n(62964),E=n.n(_),m=n(33602),O=n.n(m),f=n(74787),P=n.n(f),e=n(55194),v=n.n(e),r=n(68172),L=n.n(r),t=n(4919),T=n.n(t),D=n(13058),h=n.n(D),B=n(55547),s=n.n(B),o=n(68309),C=n.n(o),M=n(56689),I=n.n(M),d=n(13023),Z=n.n(d),y=n(88092),F=n.n(y),W={embed:a(),table:c(),list:E(),warning:O(),code:P(),linkTool:{class:v(),config:{endpoint:"".concat(localStorage.getItem("wf_URL"),"api/work/block-editor/fetch-url")}},raw:L(),header:T(),quote:h(),marker:s(),checklist:C(),delimiter:I(),inlineCode:Z(),simpleImage:F()}},85335:function(x,i,n){var l=n(15009),a=n.n(l),u=n(99289),c=n.n(u),_=n(66352),E=n(30029),m=n(97269),O=n(5966),f=n(63434),P=n(90905),e=n(27790),v=n(62435),r=n(86074),L=function(){var T=(0,P.useParams)(),D=T.id,h=(0,v.useRef)();(0,v.useEffect)(function(){(0,_.Mk)(D).then(function(s){var o;(o=h.current)===null||o===void 0||o.setFields([{name:"name",value:s.name},{name:"active",value:s.active}])})},[D]);var B=function(){var s=c()(a()().mark(function o(C){var M;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,_.Qb)(C);case 2:M=d.sent,M.succeeded?e.ZP.success("Saved!"):e.ZP.error(M.errors[0].description);case 4:case"end":return d.stop()}},o)}));return function(C){return s.apply(this,arguments)}}();return(0,r.jsx)(E.Z,{title:"Info",children:(0,r.jsxs)(m.A,{formRef:h,onFinish:B,children:[(0,r.jsx)(O.Z,{hidden:!0,name:"id",initialValue:D}),(0,r.jsx)(O.Z,{name:"name",label:"Name"}),(0,r.jsx)(f.Z,{name:"active",label:"Active"})]})})};i.Z=L},3646:function(x,i,n){n.r(i),n.d(i,{default:function(){return X}});var l=n(15009),a=n.n(l),u=n(99289),c=n.n(u),_=n(5574),E=n.n(_),m=n(97857),O=n.n(m),f=n(45582),P=n.n(f),e=n(62435),v=n(90905),r=n(66352),L=n(17846),t=n(86074),T=function(U){var A=(0,v.useParams)(),K=A.id,R=(0,e.useRef)(),z=function(){(0,r.t1)(K).then(function(g){var S=new(P())({holder:"editorjs",data:{time:new Date().getTime(),blocks:g},onReady:function(){R.current=S},onChange:function(j){j.saver.save().then(function(Y){var p=O()({id:K},Y);U.onChange(p)})},autofocus:!0,tools:L.y})})};return(0,e.useEffect)(function(){return R.current||z(),function(){R.current.destroy(),R.current=null}},[]),(0,t.jsx)(e.Fragment,{children:(0,t.jsx)("div",{id:"editorjs",children:" "})})},D=T,h=n(85335),B=n(82826),s=n(1413),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},C=o,M=n(84089),I=function(U,A){return e.createElement(M.Z,(0,s.Z)((0,s.Z)({},U),{},{ref:A,icon:C}))};I.displayName="SaveOutlined";var d=e.forwardRef(I),Z=n(62884),y=n(30029),F=n(27790),W=n(71577),$=n(71230),H=n(15746),J=n(26713),Q=function(){var U=(0,e.useState)(),A=E()(U,2),K=A[0],R=A[1],z=function(){var V=c()(a()().mark(function g(){var S;return a()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,(0,r.NA)(K);case 2:S=j.sent,S.succeeded&&F.ZP.success("Saved");case 4:case"end":return j.stop()}},g)}));return function(){return V.apply(this,arguments)}}();return(0,t.jsx)(Z._z,{extra:(0,t.jsx)(W.Z,{icon:(0,t.jsx)(B.Z,{}),onClick:function(){return v.history.back()},children:"Back"}),children:(0,t.jsxs)($.Z,{gutter:16,children:[(0,t.jsx)(H.Z,{span:18,children:(0,t.jsx)(y.Z,{title:"Start writing",extra:(0,t.jsx)(W.Z,{type:"primary",onClick:z,children:(0,t.jsxs)(J.Z,{children:[(0,t.jsx)(d,{}),(0,t.jsx)(v.FormattedMessage,{id:"general.save"})]})}),children:(0,t.jsx)(D,{onChange:R})})}),(0,t.jsx)(H.Z,{span:6,children:(0,t.jsx)(h.Z,{})})]})})},X=Q}}]);
