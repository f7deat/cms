"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[790],{63434:function(h,u,e){var _=e(1413),d=e(91),a=e(86074),t=e(22270),o=e(32808),i=e(62435),P=e(90789),p=e(15790),M=["options","fieldProps","proFieldProps","valueEnum"],v=i.forwardRef(function(r,l){var O=r.options,m=r.fieldProps,f=r.proFieldProps,T=r.valueEnum,E=(0,d.Z)(r,M);return(0,a.jsx)(p.Z,(0,_.Z)({ref:l,valueType:"checkbox",valueEnum:(0,t.h)(T,void 0),fieldProps:(0,_.Z)({options:O},m),lightProps:(0,_.Z)({labelFormatter:function(){return(0,a.jsx)(p.Z,(0,_.Z)({ref:l,valueType:"checkbox",mode:"read",valueEnum:(0,t.h)(T,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,_.Z)({options:O},m),proFieldProps:f},E))}},E.lightProps),proFieldProps:f},E))}),D=i.forwardRef(function(r,l){var O=r.fieldProps,m=r.children;return(0,a.jsx)(o.Z,(0,_.Z)((0,_.Z)({ref:l},O),{},{children:m}))}),n=(0,P.G)(D,{valuePropName:"checked"}),s=n;s.Group=v,u.Z=s},5966:function(h,u,e){var _=e(1413),d=e(91),a=e(86074),t=e(15790),o=["fieldProps","proFieldProps"],i=["fieldProps","proFieldProps"],P="text",p=function(n){var s=n.fieldProps,r=n.proFieldProps,l=(0,d.Z)(n,o);return(0,a.jsx)(t.Z,(0,_.Z)({valueType:P,fieldProps:s,filedConfig:{valueType:P},proFieldProps:r},l))},M=function(n){var s=n.fieldProps,r=n.proFieldProps,l=(0,d.Z)(n,i);return(0,a.jsx)(t.Z,(0,_.Z)({valueType:"password",fieldProps:s,proFieldProps:r,filedConfig:{valueType:P}},l))},v=p;v.Password=M,v.displayName="ProFormComponent",u.Z=v},85335:function(h,u,e){var _=e(15009),d=e.n(_),a=e(99289),t=e.n(a),o=e(66352),i=e(30029),P=e(97269),p=e(5966),M=e(63434),v=e(90905),D=e(27790),n=e(62435),s=e(86074),r=function(){var O=(0,v.useParams)(),m=O.id,f=(0,n.useRef)();(0,n.useEffect)(function(){(0,o.Mk)(m).then(function(E){var c;(c=f.current)===null||c===void 0||c.setFields([{name:"name",value:E.name},{name:"active",value:E.active}])})},[m]);var T=function(){var E=t()(d()().mark(function c(W){var R;return d()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(0,o.Qb)(W);case 2:R=C.sent,R.succeeded?D.ZP.success("Saved!"):D.ZP.error(R.errors[0].description);case 4:case"end":return C.stop()}},c)}));return function(W){return E.apply(this,arguments)}}();return(0,s.jsx)(i.Z,{title:"Info",children:(0,s.jsxs)(P.A,{formRef:f,onFinish:T,children:[(0,s.jsx)(p.Z,{hidden:!0,name:"id",initialValue:m}),(0,s.jsx)(p.Z,{name:"name",label:"Name"}),(0,s.jsx)(M.Z,{name:"active",label:"Active"})]})})};u.Z=r},46015:function(h,u,e){e.r(u);var _=e(85335),d=e(62884),a=e(71230),t=e(15746),o=e(86074),i=function(){return(0,o.jsx)(d._z,{children:(0,o.jsxs)(a.Z,{gutter:16,children:[(0,o.jsx)(t.Z,{md:16}),(0,o.jsx)(t.Z,{md:8,children:(0,o.jsx)(_.Z,{})})]})})};u.default=i}}]);
