"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1813],{5966:function(h,p,e){var P=e(1413),r=e(91),E=e(86074),o=e(15790),u=["fieldProps","proFieldProps"],O=["fieldProps","proFieldProps"],l="text",D=function(t){var i=t.fieldProps,_=t.proFieldProps,a=(0,r.Z)(t,u);return(0,E.jsx)(o.Z,(0,P.Z)({valueType:l,fieldProps:i,filedConfig:{valueType:l},proFieldProps:_},a))},d=function(t){var i=t.fieldProps,_=t.proFieldProps,a=(0,r.Z)(t,O);return(0,E.jsx)(o.Z,(0,P.Z)({valueType:"password",fieldProps:i,proFieldProps:_,filedConfig:{valueType:l}},a))},m=D;m.Password=d,m.displayName="ProFormComponent",p.Z=m},63562:function(h,p,e){e.r(p);var P=e(15009),r=e.n(P),E=e(99289),o=e.n(E),u=e(31266),O=e(86548),l=e(62884),D=e(22257),d=e(30029),m=e(97269),c=e(5966),t=e(90905),i=e(71577),_=e(27790),a=e(71230),s=e(15746),n=e(86074),C=function(){var U=(0,t.useIntl)(),j=[{title:"#",valueType:"indexBorder"},{title:"name",dataIndex:"name"},{title:"Description",dataIndex:"description"},{title:"",valueType:"option",render:function(M,v){return[(0,n.jsx)(i.Z,{icon:(0,n.jsx)(O.Z,{}),onClick:function(){return t.history.push("/settings/".concat(v.normalizedName.toLocaleLowerCase(),"/").concat(v.id))}},1)]}}],I=function(){var g=o()(r()().mark(function M(v){var T;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,u.Uo)(v);case 2:T=f.sent,T.succeeded&&_.ZP.success("Saved!");case 4:case"end":return f.stop()}},M)}));return function(v){return g.apply(this,arguments)}}();return(0,n.jsx)(l._z,{title:U.formatMessage({id:"menu.settings"}),children:(0,n.jsxs)(a.Z,{gutter:16,children:[(0,n.jsx)(s.Z,{span:12,children:(0,n.jsx)(D.Z,{request:u.KU,rowKey:"id",columns:j})}),(0,n.jsx)(s.Z,{span:12,children:(0,n.jsx)(d.Z,{children:(0,n.jsx)(m.A,{onFinish:I,children:(0,n.jsx)(c.Z,{name:"titleSuffix",label:"Title suffix"})})})})]})})};p.default=C},31266:function(h,p,e){e.d(p,{I7:function(){return t},KU:function(){return O},OT:function(){return m},Uo:function(){return D}});var P=e(15009),r=e.n(P),E=e(99289),o=e.n(E),u=e(90905);function O(){return l.apply(this,arguments)}function l(){return l=o()(r()().mark(function _(){return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,u.request)("appsetting/list"));case 1:case"end":return s.stop()}},_)})),l.apply(this,arguments)}function D(_){return d.apply(this,arguments)}function d(){return d=o()(r()().mark(function _(a){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,u.request)("appsetting/layout/head/save",{method:"POST",data:a}));case 1:case"end":return n.stop()}},_)})),d.apply(this,arguments)}function m(_){return c.apply(this,arguments)}function c(){return c=o()(r()().mark(function _(a){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,u.request)("appsetting/telegram/save",{method:"POST",data:a}));case 1:case"end":return n.stop()}},_)})),c.apply(this,arguments)}function t(){return i.apply(this,arguments)}function i(){return i=o()(r()().mark(function _(){return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,u.request)("appsetting/telegram/configuration"));case 1:case"end":return s.stop()}},_)})),i.apply(this,arguments)}}}]);
