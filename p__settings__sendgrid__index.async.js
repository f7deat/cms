"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3780],{5966:function(K,O,a){var D=a(1413),n=a(91),T=a(86074),u=a(25338),_=["fieldProps","proFieldProps"],b=["fieldProps","proFieldProps"],c="text",C=function(l){var p=l.fieldProps,i=l.proFieldProps,m=(0,n.Z)(l,_);return(0,T.jsx)(u.Z,(0,D.Z)({valueType:c,fieldProps:p,filedConfig:{valueType:c},proFieldProps:i},m))},d=function(l){var p=l.fieldProps,i=l.proFieldProps,m=(0,n.Z)(l,b);return(0,T.jsx)(u.Z,(0,D.Z)({valueType:"password",fieldProps:p,proFieldProps:i,filedConfig:{valueType:c}},m))},g=C;g.Password=d,g.displayName="ProFormComponent",O.Z=g},55565:function(K,O,a){a.r(O);var D=a(15009),n=a.n(D),T=a(99289),u=a.n(T),_=a(31266),b=a(62884),c=a(30029),C=a(97269),d=a(5966),g=a(27790),E=a(96074),l=a(22850),p=a(62435),i=a(86074),m=function(){var y=(0,p.useRef)();(0,p.useEffect)(function(){(0,_.Is)().then(function(f){var v,o,P;(v=y.current)===null||v===void 0||v.setFields([{name:"apiKey",value:f.apiKey},{name:"name",value:(o=f.from)===null||o===void 0?void 0:o.name},{name:"email",value:(P=f.from)===null||P===void 0?void 0:P.email}])})},[]);var S=function(){var f=u()(n()().mark(function v(o){var P,M;return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return P={apiKey:o.apiKey,from:{email:o.email,name:o.name}},h.next=3,(0,_.tr)(P);case 3:M=h.sent,M.succeeded&&g.ZP.success("Saved!");case 5:case"end":return h.stop()}},v)}));return function(o){return f.apply(this,arguments)}}();return(0,i.jsx)(b._z,{title:"SendGrid",subTitle:"SendGrid l\xE0 m\u1ED9t d\u1ECBch v\u1EE5 g\u1EEDi email",children:(0,i.jsx)(c.Z,{children:(0,i.jsxs)(C.A,{formRef:y,onFinish:S,children:[(0,i.jsx)(d.Z,{name:"apiKey",label:"API Key"}),(0,i.jsx)(E.Z,{}),(0,i.jsx)(l.Z.Title,{level:4,children:"From"}),(0,i.jsx)(d.Z,{name:"email",label:"Email"}),(0,i.jsx)(d.Z,{name:"name",label:"Name"})]})})})};O.default=m},31266:function(K,O,a){a.d(O,{I7:function(){return l},Is:function(){return B},KU:function(){return b},N7:function(){return W},OT:function(){return g},PX:function(){return i},Pg:function(){return P},TJ:function(){return L},Uo:function(){return C},ad:function(){return v},fW:function(){return A},lX:function(){return S},lp:function(){return I},tr:function(){return F}});var D=a(15009),n=a.n(D),T=a(99289),u=a.n(T),_=a(90905);function b(){return c.apply(this,arguments)}function c(){return c=u()(n()().mark(function r(){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.request)("appsetting/list"));case 1:case"end":return t.stop()}},r)})),c.apply(this,arguments)}function C(r){return d.apply(this,arguments)}function d(){return d=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/layout/head/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),d.apply(this,arguments)}function g(r){return E.apply(this,arguments)}function E(){return E=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/telegram/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),E.apply(this,arguments)}function l(){return p.apply(this,arguments)}function p(){return p=u()(n()().mark(function r(){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.request)("appsetting/telegram/configuration"));case 1:case"end":return t.stop()}},r)})),p.apply(this,arguments)}function i(r){return m.apply(this,arguments)}function m(){return m=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/footer/".concat(s)));case 1:case"end":return e.stop()}},r)})),m.apply(this,arguments)}function I(r){return y.apply(this,arguments)}function y(){return y=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/footer/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),y.apply(this,arguments)}function S(){return f.apply(this,arguments)}function f(){return f=u()(n()().mark(function r(){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.request)("appsetting/header/templates"));case 1:case"end":return t.stop()}},r)})),f.apply(this,arguments)}function v(r){return o.apply(this,arguments)}function o(){return o=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/header/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),o.apply(this,arguments)}function P(r){return M.apply(this,arguments)}function M(){return M=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/header/".concat(s)));case 1:case"end":return e.stop()}},r)})),M.apply(this,arguments)}function L(r){return h.apply(this,arguments)}function h(){return h=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/header/logo",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),h.apply(this,arguments)}function W(r){return U.apply(this,arguments)}function U(){return U=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/facebook/".concat(s)));case 1:case"end":return e.stop()}},r)})),U.apply(this,arguments)}function A(r){return j.apply(this,arguments)}function j(){return j=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/facebook/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),j.apply(this,arguments)}function B(){return w.apply(this,arguments)}function w(){return w=u()(n()().mark(function r(){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.request)("appsetting/sendgrid"));case 1:case"end":return t.stop()}},r)})),w.apply(this,arguments)}function F(r){return R.apply(this,arguments)}function R(){return R=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("appsetting/sendgrid/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),R.apply(this,arguments)}}}]);
