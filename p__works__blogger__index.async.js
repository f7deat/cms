"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6442],{5966:function(R,i,e){var m=e(1413),o=e(91),P=e(86074),p=e(15790),E=["fieldProps","proFieldProps"],v=["fieldProps","proFieldProps"],a="text",D=function(s){var _=s.fieldProps,d=s.proFieldProps,c=(0,o.Z)(s,E);return(0,P.jsx)(p.Z,(0,m.Z)({valueType:a,fieldProps:_,filedConfig:{valueType:a},proFieldProps:d},c))},r=function(s){var _=s.fieldProps,d=s.proFieldProps,c=(0,o.Z)(s,v);return(0,P.jsx)(p.Z,(0,m.Z)({valueType:"password",fieldProps:_,proFieldProps:d,filedConfig:{valueType:a}},c))},l=D;l.Password=r,l.displayName="ProFormComponent",i.Z=l},82795:function(R,i,e){e.r(i);var m=e(15009),o=e.n(m),P=e(99289),p=e.n(P),E=e(66352),v=e(62884),a=e(30029),D=e(97269),r=e(5966),l=e(90905),O=e(27790),s=e(62435),_=e(86074),d=function(){var j=(0,l.useParams)(),f=j.id,M=(0,s.useRef)();(0,s.useEffect)(function(){(0,E.sb)(f).then(function(t){var n;(n=M.current)===null||n===void 0||n.setFields([{name:"blogId",value:t.blogId},{name:"normalizedName",value:t.normalizedName},{name:"apiKey",value:t.apiKey}])})},[]);var I=function(){var t=p()(o()().mark(function n(T){var C;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,E.cU)(T);case 2:C=u.sent,C.succeeded&&O.ZP.success("Saved");case 4:case"end":return u.stop()}},n)}));return function(T){return t.apply(this,arguments)}}();return(0,_.jsx)(v._z,{children:(0,_.jsx)(a.Z,{children:(0,_.jsxs)(D.A,{formRef:M,onFinish:I,children:[(0,_.jsx)(r.Z,{name:"id",initialValue:f,hidden:!0}),(0,_.jsx)(r.Z,{name:"blogId",label:"Blog Id"}),(0,_.jsx)(r.Z,{name:"normalizedName",label:"Normalized name"}),(0,_.jsx)(r.Z.Password,{name:"apiKey",label:"API Key"})]})})})};i.default=d}}]);