"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1813],{5966:function(D,h,e){var g=e(1413),n=e(91),x=e(86074),o=e(15790),i=["fieldProps","proFieldProps"],y=["fieldProps","proFieldProps"],s="text",F=function(t){var p=t.fieldProps,v=t.proFieldProps,c=(0,n.Z)(t,i);return(0,x.jsx)(o.Z,(0,g.Z)({valueType:s,fieldProps:p,filedConfig:{valueType:s},proFieldProps:v},c))},u=function(t){var p=t.fieldProps,v=t.proFieldProps,c=(0,n.Z)(t,y);return(0,x.jsx)(o.Z,(0,g.Z)({valueType:"password",fieldProps:p,proFieldProps:v,filedConfig:{valueType:s}},c))},d=F;d.Password=u,d.displayName="ProFormComponent",h.Z=d},17587:function(D,h,e){e.r(h),e.d(h,{default:function(){return R}});var g=e(15009),n=e.n(g),x=e(99289),o=e.n(x),i=e(90905);function y(){return s.apply(this,arguments)}function s(){return s=o()(n()().mark(function f(){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,i.request)("appsetting/list"));case 1:case"end":return a.stop()}},f)})),s.apply(this,arguments)}function F(f){return u.apply(this,arguments)}function u(){return u=o()(n()().mark(function f(T){return n()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,i.request)("appsetting/layout/head/save",{method:"POST",data:T}));case 1:case"end":return l.stop()}},f)})),u.apply(this,arguments)}var d=e(86548),j=e(62884),t=e(22257),p=e(30029),v=e(97269),c=e(5966),M=e(71577),L=e(27790),S=e(71230),E=e(15746),r=e(86074),I=function(){var T=(0,i.useIntl)(),a=[{title:"#",valueType:"indexBorder"},{title:"name",dataIndex:"name"},{title:"Description",dataIndex:"description"},{title:"",valueType:"option",render:function(Z,P){return[(0,r.jsx)(M.Z,{icon:(0,r.jsx)(d.Z,{}),onClick:function(){return i.history.push("/settings/".concat(P.normalizedName.toLocaleLowerCase(),"/").concat(P.id))}},1)]}}],l=function(){var O=o()(n()().mark(function Z(P){var C;return n()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,F(P);case 2:C=m.sent,C.succeeded&&L.ZP.success("Saved!");case 4:case"end":return m.stop()}},Z)}));return function(P){return O.apply(this,arguments)}}();return(0,r.jsx)(j._z,{title:T.formatMessage({id:"menu.settings"}),children:(0,r.jsxs)(S.Z,{gutter:16,children:[(0,r.jsx)(E.Z,{span:12,children:(0,r.jsx)(t.Z,{request:y,rowKey:"id",columns:a})}),(0,r.jsx)(E.Z,{span:12,children:(0,r.jsx)(p.Z,{children:(0,r.jsx)(v.A,{onFinish:l,children:(0,r.jsx)(c.Z,{name:"titleSuffix",label:"Title suffix"})})})})]})})},R=I}}]);
