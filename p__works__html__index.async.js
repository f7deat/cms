"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[502],{63434:function(R,p,e){var r=e(1413),u=e(91),t=e(86074),i=e(22270),v=e(32808),c=e(62435),m=e(90789),n=e(15790),P=["options","fieldProps","proFieldProps","valueEnum"],E=c.forwardRef(function(_,d){var M=_.options,O=_.fieldProps,f=_.proFieldProps,h=_.valueEnum,C=(0,u.Z)(_,P);return(0,t.jsx)(n.Z,(0,r.Z)({ref:d,valueType:"checkbox",valueEnum:(0,i.h)(h,void 0),fieldProps:(0,r.Z)({options:M},O),lightProps:(0,r.Z)({labelFormatter:function(){return(0,t.jsx)(n.Z,(0,r.Z)({ref:d,valueType:"checkbox",mode:"read",valueEnum:(0,i.h)(h,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:M},O),proFieldProps:f},C))}},C.lightProps),proFieldProps:f},C))}),D=c.forwardRef(function(_,d){var M=_.fieldProps,O=_.children;return(0,t.jsx)(v.Z,(0,r.Z)((0,r.Z)({ref:d},M),{},{children:O}))}),o=(0,m.G)(D,{valuePropName:"checked"}),a=o;a.Group=E,p.Z=a},90672:function(R,p,e){var r=e(1413),u=e(91),t=e(86074),i=e(62435),v=e(15790),c=["fieldProps","proFieldProps"],m=function(P,E){var D=P.fieldProps,o=P.proFieldProps,a=(0,u.Z)(P,c);return(0,t.jsx)(v.Z,(0,r.Z)({ref:E,valueType:"textarea",fieldProps:D,proFieldProps:o},a))};p.Z=i.forwardRef(m)},5966:function(R,p,e){var r=e(1413),u=e(91),t=e(86074),i=e(15790),v=["fieldProps","proFieldProps"],c=["fieldProps","proFieldProps"],m="text",n=function(o){var a=o.fieldProps,_=o.proFieldProps,d=(0,u.Z)(o,v);return(0,t.jsx)(i.Z,(0,r.Z)({valueType:m,fieldProps:a,filedConfig:{valueType:m},proFieldProps:_},d))},P=function(o){var a=o.fieldProps,_=o.proFieldProps,d=(0,u.Z)(o,c);return(0,t.jsx)(i.Z,(0,r.Z)({valueType:"password",fieldProps:a,proFieldProps:_,filedConfig:{valueType:m}},d))},E=n;E.Password=P,E.displayName="ProFormComponent",p.Z=E},83223:function(R,p,e){e.r(p);var r=e(15009),u=e.n(r),t=e(99289),i=e.n(t),v=e(66352),c=e(62884),m=e(97269),n=e(5966),P=e(90672),E=e(63434),D=e(90905),o=e(2453),a=e(62435),_=e(86074),d=function(){var O=(0,D.useParams)(),f=O.id,h=(0,a.useRef)();function C(s){var l=document.createElement("textarea");return l.innerHTML=s,l.childNodes.length===0?"":l.childNodes[0].nodeValue}(0,a.useEffect)(function(){(0,v.ne)(f).then(function(s){var l;(l=h.current)===null||l===void 0||l.setFields([{name:"id",value:s.id},{name:"name",value:s.name},{name:"arguments",value:C(s.arguments)},{name:"parentId",value:s.parentId},{name:"catalogId",value:s.catalogId},{name:"componentId",value:s.componentId},{name:"active",value:s.active}])})},[f]);var I=function(){var s=i()(u()().mark(function l(F){var x;return u()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,(0,v.wH)(F);case 2:x=T.sent,x.succeeded&&o.ZP.success("Saved!");case 4:case"end":return T.stop()}},l)}));return function(F){return s.apply(this,arguments)}}();return(0,_.jsx)(c._z,{title:"Html",children:(0,_.jsxs)(m.A,{formRef:h,onFinish:I,children:[(0,_.jsx)(n.Z,{name:"id",hidden:!0}),(0,_.jsx)(n.Z,{name:"parentId",hidden:!0}),(0,_.jsx)(n.Z,{name:"catalogId",hidden:!0}),(0,_.jsx)(n.Z,{name:"componentId",hidden:!0}),(0,_.jsx)(n.Z,{name:"name",label:"Name"}),(0,_.jsx)(P.Z,{name:"arguments",label:"Raw"}),(0,_.jsx)(E.Z,{name:"active",label:"Active"})]})})};p.default=d}}]);
