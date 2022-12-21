"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[485],{5966:function(M,F,e){var j=e(1413),C=e(91),T=e(86074),Z=e(15790),p=["fieldProps","proFieldProps"],y=["fieldProps","proFieldProps"],t="text",E=function(a){var d=a.fieldProps,h=a.proFieldProps,m=(0,C.Z)(a,p);return(0,T.jsx)(Z.Z,(0,j.Z)({valueType:t,fieldProps:d,filedConfig:{valueType:t},proFieldProps:h},m))},g=function(a){var d=a.fieldProps,h=a.proFieldProps,m=(0,C.Z)(a,y);return(0,T.jsx)(Z.Z,(0,j.Z)({valueType:"password",fieldProps:d,proFieldProps:h,filedConfig:{valueType:t}},m))},i=E;i.Password=g,i.displayName="ProFormComponent",F.Z=i},90490:function(M,F,e){e.r(F),e.d(F,{default:function(){return W}});var j=e(5574),C=e.n(j),T=e(62884),Z=e(30029),p=e(62435),y=e(15009),t=e.n(y),E=e(99289),g=e.n(E),i=e(66352),b=e(97269),a=e(5966),d=e(90905),h=e(27790),m=e(96074),N=e(22850),n=e(86074),A=function(){var P=(0,d.useParams)(),o=P.id,u=(0,d.useIntl)(),s=(0,p.useRef)();(0,p.useEffect)(function(){(0,i.G$)(o).then(function(r){var v,l,c,f;(v=s.current)===null||v===void 0||v.setFields([{name:"id",value:o},{name:"name",value:r.name},{name:"resultUrl",value:r.resultUrl},{name:"labelName",value:(l=r.labels)===null||l===void 0?void 0:l.name},{name:"email",value:(c=r.labels)===null||c===void 0?void 0:c.email},{name:"phoneNumber",value:(f=r.labels)===null||f===void 0?void 0:f.phoneNumber}])})},[o]);var R=function(){var r=g()(t()().mark(function v(l){var c,f,D;return t()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return c={name:l.labelName,email:l.email,phoneNumber:l.phoneNumber},f={id:l.id,name:l.name,resultUrl:l.resultUrl,labels:c},x.next=4,(0,i.JU)(f);case 4:D=x.sent,D.succeeded&&h.ZP.success(u.formatMessage({id:"general.saved"}));case 6:case"end":return x.stop()}},v)}));return function(l){return r.apply(this,arguments)}}();return(0,n.jsxs)(b.A,{formRef:s,onFinish:R,children:[(0,n.jsx)(a.Z,{name:"id",hidden:!0}),(0,n.jsx)(a.Z,{name:"name",label:"Name"}),(0,n.jsx)(a.Z,{name:"resultUrl",label:"Result url"}),(0,n.jsx)(m.Z,{}),(0,n.jsx)(N.Z.Title,{level:4,children:"Labels"}),(0,n.jsx)(a.Z,{name:"labelName",label:"Name"}),(0,n.jsx)(a.Z,{name:"email",label:"Email"}),(0,n.jsx)(a.Z,{name:"phoneNumber",label:"Phone number"})]})},O=A,S=function(){var P=function(){var o=g()(t()().mark(function u(s){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:console.log(s);case 1:case"end":return r.stop()}},u)}));return function(s){return o.apply(this,arguments)}}();return(0,n.jsxs)(b.A,{onFinish:P,children:[(0,n.jsx)(N.Z.Title,{level:4,children:"SendGrid"}),(0,n.jsx)(a.Z,{name:"template",label:"Template"}),(0,n.jsx)(m.Z,{}),(0,n.jsx)(N.Z.Title,{level:4,children:"Telegam"}),(0,n.jsx)(a.Z,{name:"chatId",label:"Chat ID"})]})},I=S,$=function(){var P=(0,p.useState)("content"),o=C()(P,2),u=o[0],s=o[1];return(0,n.jsx)(T._z,{title:"Contact form",children:(0,n.jsx)(Z.Z,{tabs:{activeKey:u,items:[{label:"Content",key:"content",children:(0,n.jsx)(O,{})},{label:"Setting",key:"setting",children:(0,n.jsx)(I,{})}],onChange:function(r){s(r)}}})})},W=$}}]);
