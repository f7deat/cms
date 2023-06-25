"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8485],{82826:function(I,_,e){e.d(_,{Z:function(){return o}});var t=e(1413),d=e(62435),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},E=O,u=e(91146),p=function(M,h){return d.createElement(u.Z,(0,t.Z)((0,t.Z)({},M),{},{ref:h,icon:E}))};p.displayName="ArrowLeftOutlined";var o=d.forwardRef(p)},63434:function(I,_,e){var t=e(1413),d=e(91),O=e(22270),E=e(32808),u=e(62435),p=e(90789),o=e(19617),s=e(86074),M=["options","fieldProps","proFieldProps","valueEnum"],h=u.forwardRef(function(a,v){var l=a.options,P=a.fieldProps,c=a.proFieldProps,F=a.valueEnum,n=(0,d.Z)(a,M);return(0,s.jsx)(o.Z,(0,t.Z)({ref:v,valueType:"checkbox",valueEnum:(0,O.h)(F,void 0),fieldProps:(0,t.Z)({options:l},P),lightProps:(0,t.Z)({labelFormatter:function(){return(0,s.jsx)(o.Z,(0,t.Z)({ref:v,valueType:"checkbox",mode:"read",valueEnum:(0,O.h)(F,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,t.Z)({options:l},P),proFieldProps:c},n))}},n.lightProps),proFieldProps:c},n))}),m=u.forwardRef(function(a,v){var l=a.fieldProps,P=a.children;return(0,s.jsx)(E.Z,(0,t.Z)((0,t.Z)({ref:v},l),{},{children:P}))}),x=(0,p.G)(m,{valuePropName:"checked"}),r=x;r.Group=h,_.Z=r},5966:function(I,_,e){var t=e(1413),d=e(91),O=e(62435),E=e(19617),u=e(86074),p=["fieldProps","proFieldProps"],o=["fieldProps","proFieldProps"],s="text",M=function(r){var a=r.fieldProps,v=r.proFieldProps,l=(0,d.Z)(r,p);return(0,u.jsx)(E.Z,(0,t.Z)({valueType:s,fieldProps:a,filedConfig:{valueType:s},proFieldProps:v},l))},h=function(r){var a=r.fieldProps,v=r.proFieldProps,l=(0,d.Z)(r,o);return(0,u.jsx)(E.Z,(0,t.Z)({valueType:"password",fieldProps:a,proFieldProps:v,filedConfig:{valueType:s}},l))},m=M;m.Password=h,m.displayName="ProFormComponent",_.Z=m},85335:function(I,_,e){var t=e(15009),d=e.n(t),O=e(99289),E=e.n(O),u=e(66352),p=e(28199),o=e(34994),s=e(5966),M=e(63434),h=e(35312),m=e(27790),x=e(62435),r=e(86074),a=function(){var l=(0,h.useParams)(),P=l.id,c=(0,x.useRef)();(0,x.useEffect)(function(){(0,u.Mk)(P).then(function(n){var D;(D=c.current)===null||D===void 0||D.setFields([{name:"name",value:n.name},{name:"active",value:n.active}])})},[P]);var F=function(){var n=E()(d()().mark(function D(y){var C;return d()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,(0,u.Qb)(y);case 2:C=T.sent,C.succeeded?m.ZP.success("Saved!"):m.ZP.error(C.errors[0].description);case 4:case"end":return T.stop()}},D)}));return function(y){return n.apply(this,arguments)}}();return(0,r.jsx)(p.Z,{title:"Info",children:(0,r.jsxs)(o.A,{formRef:c,onFinish:F,children:[(0,r.jsx)(s.Z,{hidden:!0,name:"id",initialValue:P}),(0,r.jsx)(s.Z,{name:"name",label:"Name"}),(0,r.jsx)(M.Z,{name:"active",label:"Active"})]})})};_.Z=a},90490:function(I,_,e){e.r(_),e.d(_,{default:function(){return $}});var t=e(5574),d=e.n(t),O=e(85335),E=e(82826),u=e(63386),p=e(28199),o=e(35312),s=e(71577),M=e(71230),h=e(15746),m=e(62435),x=e(15009),r=e.n(x),a=e(99289),v=e.n(a),l=e(66352),P=e(34994),c=e(5966),F=e(27790),n=e(86074),D=function(){var U=(0,o.useParams)(),j=U.id,R=(0,o.useIntl)(),Z=(0,m.useRef)();(0,m.useEffect)(function(){(0,l.G$)(j).then(function(i){var g,f,A,L;(g=Z.current)===null||g===void 0||g.setFields([{name:"id",value:j},{name:"name",value:i.name},{name:"resultUrl",value:i.resultUrl},{name:"labelName",value:(f=i.labels)===null||f===void 0?void 0:f.name},{name:"email",value:(A=i.labels)===null||A===void 0?void 0:A.email},{name:"phoneNumber",value:(L=i.labels)===null||L===void 0?void 0:L.phoneNumber}])})},[j]);var B=function(){var i=v()(r()().mark(function g(f){var A,L,S;return r()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return A={name:f.labelName,email:f.email,phoneNumber:f.phoneNumber},L={id:f.id,name:f.name,resultUrl:f.resultUrl,labels:A},W.next=4,(0,l.JU)(L);case 4:S=W.sent,S.succeeded&&F.ZP.success(R.formatMessage({id:"general.saved"}));case 6:case"end":return W.stop()}},g)}));return function(f){return i.apply(this,arguments)}}();return(0,n.jsxs)(P.A,{formRef:Z,onFinish:B,children:[(0,n.jsx)(c.Z,{name:"id",hidden:!0}),(0,n.jsx)(c.Z,{name:"name",label:"Name"}),(0,n.jsx)(c.Z,{name:"resultUrl",label:"Result url"})]})},y=D,C=e(25514),K=e(96074),T=function(){var U=function(){var j=v()(r()().mark(function R(Z){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:console.log(Z);case 1:case"end":return i.stop()}},R)}));return function(Z){return j.apply(this,arguments)}}();return(0,n.jsxs)(P.A,{onFinish:U,children:[(0,n.jsx)(C.Z.Title,{level:4,children:"Email"}),(0,n.jsx)(c.Z,{name:"received",label:"Received"}),(0,n.jsx)(C.Z.Title,{level:4,children:(0,n.jsx)(o.FormattedMessage,{id:"menu.settings.sendGrid"})}),(0,n.jsx)(c.Z,{name:"template",label:"Template"}),(0,n.jsx)(K.Z,{}),(0,n.jsx)(C.Z.Title,{level:4,children:(0,n.jsx)(o.FormattedMessage,{id:"menu.settings.telegram"})}),(0,n.jsx)(c.Z,{name:"chatId",label:"Chat ID"})]})},N=T,G=function(){var U=(0,m.useState)("content"),j=d()(U,2),R=j[0],Z=j[1];return(0,n.jsx)(u._z,{extra:(0,n.jsx)(s.ZP,{icon:(0,n.jsx)(E.Z,{}),onClick:function(){return o.history.back()},children:(0,n.jsx)(o.FormattedMessage,{id:"general.back"})}),children:(0,n.jsxs)(M.Z,{gutter:16,children:[(0,n.jsx)(h.Z,{span:16,children:(0,n.jsx)(p.Z,{tabs:{activeKey:R,items:[{label:"Content",key:"content",children:(0,n.jsx)(y,{})},{label:"Setting",key:"setting",children:(0,n.jsx)(N,{})}],onChange:function(i){Z(i)}}})}),(0,n.jsx)(h.Z,{span:8,children:(0,n.jsx)(O.Z,{})})]})})},$=G}}]);
