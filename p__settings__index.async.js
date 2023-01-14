"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1813],{5966:function(R,E,r){var g=r(1413),s=r(91),v=r(86074),u=r(15790),_=["fieldProps","proFieldProps"],D=["fieldProps","proFieldProps"],l="text",T=function(i){var p=i.fieldProps,h=i.proFieldProps,c=(0,s.Z)(i,_);return(0,v.jsx)(u.Z,(0,g.Z)({valueType:l,fieldProps:p,filedConfig:{valueType:l},proFieldProps:h},c))},m=function(i){var p=i.fieldProps,h=i.proFieldProps,c=(0,s.Z)(i,D);return(0,v.jsx)(u.Z,(0,g.Z)({valueType:"password",fieldProps:p,proFieldProps:h,filedConfig:{valueType:l}},c))},f=T;f.Password=m,f.displayName="ProFormComponent",E.Z=f},63562:function(R,E,r){r.r(E);var g=r(15009),s=r.n(g),v=r(99289),u=r.n(v),_=r(31266),D=r(86548),l=r(62884),T=r(34545),m=r(30029),f=r(97269),P=r(5966),i=r(90905),p=r(71577),h=r(27790),c=r(71230),U=r(15746),o=r(86074),j=function(){var L=(0,i.useIntl)(),M=[{title:"#",valueType:"indexBorder"},{title:"name",dataIndex:"name"},{title:"Description",dataIndex:"description"},{title:"",valueType:"option",render:function(C,d){return[(0,o.jsx)(p.Z,{icon:(0,o.jsx)(D.Z,{}),onClick:function(){return i.history.push("/settings/".concat(d.normalizedName.toLocaleLowerCase(),"/").concat(d.id))}},1)]}}],I=function(){var O=u()(s()().mark(function C(d){var n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,_.Uo)(d);case 2:n=t.sent,n.succeeded&&h.ZP.success("Saved!");case 4:case"end":return t.stop()}},C)}));return function(d){return O.apply(this,arguments)}}();return(0,o.jsx)(l._z,{title:L.formatMessage({id:"menu.settings"}),children:(0,o.jsxs)(c.Z,{gutter:16,children:[(0,o.jsx)(U.Z,{span:12,children:(0,o.jsx)(T.Z,{request:_.KU,rowKey:"id",columns:M})}),(0,o.jsx)(U.Z,{span:12,children:(0,o.jsx)(m.Z,{children:(0,o.jsx)(f.A,{onFinish:I,children:(0,o.jsx)(P.Z,{name:"titleSuffix",label:"Title suffix"})})})})]})})};E.default=j},31266:function(R,E,r){r.d(E,{I7:function(){return i},KU:function(){return D},OT:function(){return f},PX:function(){return h},Pg:function(){return I},TJ:function(){return C},Uo:function(){return T},ad:function(){return L},lX:function(){return j},lp:function(){return U}});var g=r(15009),s=r.n(g),v=r(99289),u=r.n(v),_=r(90905);function D(){return l.apply(this,arguments)}function l(){return l=u()(s()().mark(function n(){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.request)("appsetting/list"));case 1:case"end":return t.stop()}},n)})),l.apply(this,arguments)}function T(n){return m.apply(this,arguments)}function m(){return m=u()(s()().mark(function n(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/layout/head/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},n)})),m.apply(this,arguments)}function f(n){return P.apply(this,arguments)}function P(){return P=u()(s()().mark(function n(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/telegram/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},n)})),P.apply(this,arguments)}function i(){return p.apply(this,arguments)}function p(){return p=u()(s()().mark(function n(){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.request)("appsetting/telegram/configuration"));case 1:case"end":return t.stop()}},n)})),p.apply(this,arguments)}function h(n){return c.apply(this,arguments)}function c(){return c=u()(s()().mark(function n(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/footer/".concat(a)));case 1:case"end":return e.stop()}},n)})),c.apply(this,arguments)}function U(n){return o.apply(this,arguments)}function o(){return o=u()(s()().mark(function n(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/footer/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},n)})),o.apply(this,arguments)}function j(){return y.apply(this,arguments)}function y(){return y=u()(s()().mark(function n(){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.request)("appsetting/header/templates"));case 1:case"end":return t.stop()}},n)})),y.apply(this,arguments)}function L(n){return M.apply(this,arguments)}function M(){return M=u()(s()().mark(function n(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/header/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},n)})),M.apply(this,arguments)}function I(n){return O.apply(this,arguments)}function O(){return O=u()(s()().mark(function n(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/header/".concat(a)));case 1:case"end":return e.stop()}},n)})),O.apply(this,arguments)}function C(n){return d.apply(this,arguments)}function d(){return d=u()(s()().mark(function n(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/header/logo",{method:"POST",data:a}));case 1:case"end":return e.stop()}},n)})),d.apply(this,arguments)}}}]);
