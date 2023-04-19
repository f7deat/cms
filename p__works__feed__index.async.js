"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7325],{63434:function(W,p,_){var n=_(1413),d=_(91),l=_(86074),u=_(22270),v=_(32808),m=_(62435),P=_(90789),D=_(15790),t=["options","fieldProps","proFieldProps","valueEnum"],E=m.forwardRef(function(e,a){var f=e.options,r=e.fieldProps,C=e.proFieldProps,T=e.valueEnum,M=(0,d.Z)(e,t);return(0,l.jsx)(D.Z,(0,n.Z)({ref:a,valueType:"checkbox",valueEnum:(0,u.h)(T,void 0),fieldProps:(0,n.Z)({options:f},r),lightProps:(0,n.Z)({labelFormatter:function(){return(0,l.jsx)(D.Z,(0,n.Z)({ref:a,valueType:"checkbox",mode:"read",valueEnum:(0,u.h)(T,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({options:f},r),proFieldProps:C},M))}},M.lightProps),proFieldProps:C},M))}),O=m.forwardRef(function(e,a){var f=e.fieldProps,r=e.children;return(0,l.jsx)(v.Z,(0,n.Z)((0,n.Z)({ref:a},f),{},{children:r}))}),s=(0,P.G)(O,{valuePropName:"checked"}),o=s;o.Group=E,p.Z=o},31199:function(W,p,_){var n=_(1413),d=_(91),l=_(86074),u=_(62435),v=_(15790),m=["fieldProps","min","proFieldProps","max"],P=function(t,E){var O=t.fieldProps,s=t.min,o=t.proFieldProps,e=t.max,a=(0,d.Z)(t,m);return(0,l.jsx)(v.Z,(0,n.Z)({valueType:"digit",fieldProps:(0,n.Z)({min:s,max:e},O),ref:E,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:o},a))};p.Z=u.forwardRef(P)},5966:function(W,p,_){var n=_(1413),d=_(91),l=_(86074),u=_(15790),v=["fieldProps","proFieldProps"],m=["fieldProps","proFieldProps"],P="text",D=function(s){var o=s.fieldProps,e=s.proFieldProps,a=(0,d.Z)(s,v);return(0,l.jsx)(u.Z,(0,n.Z)({valueType:P,fieldProps:o,filedConfig:{valueType:P},proFieldProps:e},a))},t=function(s){var o=s.fieldProps,e=s.proFieldProps,a=(0,d.Z)(s,m);return(0,l.jsx)(u.Z,(0,n.Z)({valueType:"password",fieldProps:o,proFieldProps:e,filedConfig:{valueType:P}},a))},E=D;E.Password=t,E.displayName="ProFormComponent",p.Z=E},85335:function(W,p,_){var n=_(15009),d=_.n(n),l=_(99289),u=_.n(l),v=_(66352),m=_(30029),P=_(97269),D=_(5966),t=_(63434),E=_(90905),O=_(27790),s=_(62435),o=_(86074),e=function(){var f=(0,E.useParams)(),r=f.id,C=(0,s.useRef)();(0,s.useEffect)(function(){(0,v.Mk)(r).then(function(M){var c;(c=C.current)===null||c===void 0||c.setFields([{name:"name",value:M.name},{name:"active",value:M.active}])})},[r]);var T=function(){var M=u()(d()().mark(function c(R){var h;return d()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,v.Qb)(R);case 2:h=i.sent,h.succeeded?O.ZP.success("Saved!"):O.ZP.error(h.errors[0].description);case 4:case"end":return i.stop()}},c)}));return function(R){return M.apply(this,arguments)}}();return(0,o.jsx)(m.Z,{title:"Info",children:(0,o.jsxs)(P.A,{formRef:C,onFinish:T,children:[(0,o.jsx)(D.Z,{hidden:!0,name:"id",initialValue:r}),(0,o.jsx)(D.Z,{name:"name",label:"Name"}),(0,o.jsx)(t.Z,{name:"active",label:"Active"})]})})};p.Z=e},91409:function(W,p,_){_.r(p);var n=_(15009),d=_.n(n),l=_(99289),u=_.n(l),v=_(85335),m=_(66352),P=_(62884),D=_(30029),t=_(97269),E=_(5966),O=_(31199),s=_(90905),o=_(27790),e=_(71230),a=_(15746),f=_(62435),r=_(86074),C=function(){var M=(0,s.useParams)(),c=M.id,R=(0,f.useRef)();(0,f.useEffect)(function(){(0,m.Tu)(c).then(function(A){var i;(i=R.current)===null||i===void 0||i.setFields([{name:"name",value:A.name}])})},[c]);var h=function(){var A=u()(d()().mark(function i(j){var B;return d()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,(0,m.iH)(c,j);case 2:B=U.sent,B.succeeded&&o.ZP.success("Saved!");case 4:case"end":return U.stop()}},i)}));return function(j){return A.apply(this,arguments)}}();return(0,r.jsx)(P._z,{children:(0,r.jsxs)(e.Z,{gutter:16,children:[(0,r.jsx)(a.Z,{span:16,children:(0,r.jsx)(D.Z,{children:(0,r.jsxs)(t.A,{formRef:R,onFinish:h,children:[(0,r.jsx)(E.Z,{name:"name",label:"Name"}),(0,r.jsx)(O.Z,{name:"pageSize",label:"Page size"})]})})}),(0,r.jsx)(a.Z,{span:8,children:(0,r.jsx)(v.Z,{})})]})})};p.default=C}}]);
