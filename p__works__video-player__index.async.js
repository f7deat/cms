"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4040],{63434:function(A,E,e){var o=e(1413),d=e(91),O=e(22270),v=e(32808),l=e(62435),p=e(90789),D=e(19617),n=e(86074),c=["options","fieldProps","proFieldProps","valueEnum"],f=l.forwardRef(function(s,a){var _=s.options,m=s.fieldProps,h=s.proFieldProps,C=s.valueEnum,t=(0,d.Z)(s,c);return(0,n.jsx)(D.Z,(0,o.Z)({ref:a,valueType:"checkbox",valueEnum:(0,O.h)(C,void 0),fieldProps:(0,o.Z)({options:_},m),lightProps:(0,o.Z)({labelFormatter:function(){return(0,n.jsx)(D.Z,(0,o.Z)({ref:a,valueType:"checkbox",mode:"read",valueEnum:(0,O.h)(C,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:_},m),proFieldProps:h},t))}},t.lightProps),proFieldProps:h},t))}),i=l.forwardRef(function(s,a){var _=s.fieldProps,m=s.children;return(0,n.jsx)(v.Z,(0,o.Z)((0,o.Z)({ref:a},_),{},{children:m}))}),M=(0,p.G)(i,{valuePropName:"checked"}),r=M;r.Group=f,E.Z=r},5966:function(A,E,e){var o=e(1413),d=e(91),O=e(62435),v=e(19617),l=e(86074),p=["fieldProps","proFieldProps"],D=["fieldProps","proFieldProps"],n="text",c=function(r){var s=r.fieldProps,a=r.proFieldProps,_=(0,d.Z)(r,p);return(0,l.jsx)(v.Z,(0,o.Z)({valueType:n,fieldProps:s,filedConfig:{valueType:n},proFieldProps:a},_))},f=function(r){var s=r.fieldProps,a=r.proFieldProps,_=(0,d.Z)(r,D);return(0,l.jsx)(v.Z,(0,o.Z)({valueType:"password",fieldProps:s,proFieldProps:a,filedConfig:{valueType:n}},_))},i=c;i.Password=f,i.displayName="ProFormComponent",E.Z=i},85335:function(A,E,e){var o=e(15009),d=e.n(o),O=e(99289),v=e.n(O),l=e(66352),p=e(28199),D=e(34994),n=e(5966),c=e(63434),f=e(35312),i=e(27790),M=e(62435),r=e(86074),s=function(){var _=(0,f.useParams)(),m=_.id,h=(0,M.useRef)();(0,M.useEffect)(function(){(0,l.Mk)(m).then(function(t){var P;(P=h.current)===null||P===void 0||P.setFields([{name:"name",value:t.name},{name:"active",value:t.active}])})},[m]);var C=function(){var t=v()(d()().mark(function P(I){var T;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,l.Qb)(I);case 2:T=u.sent,T.succeeded?i.ZP.success("Saved!"):i.ZP.error(T.errors[0].description);case 4:case"end":return u.stop()}},P)}));return function(I){return t.apply(this,arguments)}}();return(0,r.jsx)(p.Z,{title:"Info",children:(0,r.jsxs)(D.A,{formRef:h,onFinish:C,children:[(0,r.jsx)(n.Z,{hidden:!0,name:"id",initialValue:m}),(0,r.jsx)(n.Z,{name:"name",label:"Name"}),(0,r.jsx)(c.Z,{name:"active",label:"Active"})]})})};E.Z=s},88502:function(A,E,e){e.r(E);var o=e(15009),d=e.n(o),O=e(99289),v=e.n(O),l=e(85335),p=e(66352),D=e(63386),n=e(28199),c=e(34994),f=e(5966),i=e(35312),M=e(27790),r=e(71230),s=e(15746),a=e(62435),_=e(86074),m=function(){var C=(0,i.useParams)(),t=C.id,P=(0,a.useRef)();(0,a.useEffect)(function(){(0,p.Tu)(t).then(function(T){var R;(R=P.current)===null||R===void 0||R.setFields([{name:"embedId",value:T.embedId}])})},[]);var I=function(){var T=v()(d()().mark(function R(u){var j;return d()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return u.format=1,W.next=3,(0,p.iH)(t,u);case 3:j=W.sent,j.succeeded&&M.ZP.success("Saved");case 5:case"end":return W.stop()}},R)}));return function(u){return T.apply(this,arguments)}}();return(0,_.jsx)(D._z,{children:(0,_.jsxs)(r.Z,{gutter:16,children:[(0,_.jsx)(s.Z,{span:16,children:(0,_.jsx)(n.Z,{children:(0,_.jsx)(c.A,{formRef:P,onFinish:I,children:(0,_.jsx)(f.Z,{name:"embedId",label:"Embed Id"})})})}),(0,_.jsx)(s.Z,{span:8,children:(0,_.jsx)(l.Z,{})})]})})};E.default=m}}]);