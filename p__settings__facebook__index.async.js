"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3961],{5966:function(K,P,a){var E=a(1413),n=a(91),O=a(86074),u=a(25338),i=["fieldProps","proFieldProps"],b=["fieldProps","proFieldProps"],p="text",M=function(l){var c=l.fieldProps,h=l.proFieldProps,_=(0,n.Z)(l,i);return(0,O.jsx)(u.Z,(0,E.Z)({valueType:p,fieldProps:c,filedConfig:{valueType:p},proFieldProps:h},_))},o=function(l){var c=l.fieldProps,h=l.proFieldProps,_=(0,n.Z)(l,b);return(0,O.jsx)(u.Z,(0,E.Z)({valueType:"password",fieldProps:c,proFieldProps:h,filedConfig:{valueType:p}},_))},g=M;g.Password=o,g.displayName="ProFormComponent",P.Z=g},24928:function(K,P,a){a.r(P);var E=a(15009),n=a.n(E),O=a(99289),u=a.n(O),i=a(31266),b=a(62884),p=a(30029),M=a(97269),o=a(5966),g=a(90905),v=a(27790),l=a(71230),c=a(15746),h=a(62435),_=a(86074),w=function(){var I=(0,g.useParams)(),T=I.id,C=(0,h.useRef)();(0,h.useEffect)(function(){(0,i.N7)(T).then(function(d){if(d){var m;(m=C.current)===null||m===void 0||m.setFields([{name:"appId",value:d.appId},{name:"appSecret",value:d.appSecret},{name:"pageAccessToken",value:d.pageAccessToken},{name:"pageId",value:d.pageId},{name:"shortLiveToken",value:d.shortLiveToken}])}})},[]);var y=function(){var d=u()(n()().mark(function m(j){var D;return n()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,i.fW)(j);case 2:D=f.sent,D.succeeded&&v.ZP.success("Saved");case 4:case"end":return f.stop()}},m)}));return function(j){return d.apply(this,arguments)}}();return(0,_.jsx)(b._z,{children:(0,_.jsxs)(l.Z,{gutter:16,children:[(0,_.jsx)(c.Z,{span:16,children:(0,_.jsx)(p.Z,{children:(0,_.jsxs)(M.A,{onFinish:y,formRef:C,children:[(0,_.jsx)(o.Z,{name:"id",initialValue:T,hidden:!0}),(0,_.jsx)(o.Z,{name:"appId",label:"App Id"}),(0,_.jsx)(o.Z.Password,{name:"appSecret",label:"App secret"}),(0,_.jsx)(o.Z,{name:"shortLiveToken",label:"Short live token"}),(0,_.jsx)(o.Z,{name:"pageAccessToken",label:"Page access token"}),(0,_.jsx)(o.Z,{name:"pageId",label:"Page ID"})]})})}),(0,_.jsx)(c.Z,{span:8,children:(0,_.jsx)(p.Z,{title:"Tools"})})]})})};P.default=w},31266:function(K,P,a){a.d(P,{HE:function(){return C},I7:function(){return l},Is:function(){return $},KU:function(){return b},N7:function(){return Z},OT:function(){return g},PX:function(){return h},Pg:function(){return B},RH:function(){return I},TJ:function(){return F},Uo:function(){return M},ad:function(){return j},fW:function(){return k},lX:function(){return d},lp:function(){return w},tr:function(){return H}});var E=a(15009),n=a.n(E),O=a(99289),u=a.n(O),i=a(90905);function b(){return p.apply(this,arguments)}function p(){return p=u()(n()().mark(function r(){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.request)("appsetting/list"));case 1:case"end":return t.stop()}},r)})),p.apply(this,arguments)}function M(r){return o.apply(this,arguments)}function o(){return o=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("appsetting/layout/head/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),o.apply(this,arguments)}function g(r){return v.apply(this,arguments)}function v(){return v=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("appsetting/telegram/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),v.apply(this,arguments)}function l(){return c.apply(this,arguments)}function c(){return c=u()(n()().mark(function r(){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.request)("appsetting/telegram/configuration"));case 1:case"end":return t.stop()}},r)})),c.apply(this,arguments)}function h(r){return _.apply(this,arguments)}function _(){return _=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("appsetting/footer/".concat(s)));case 1:case"end":return e.stop()}},r)})),_.apply(this,arguments)}function w(r){return S.apply(this,arguments)}function S(){return S=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("appsetting/footer/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),S.apply(this,arguments)}function I(r){return T.apply(this,arguments)}function T(){return T=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("appsetting/social/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),T.apply(this,arguments)}function C(r){return y.apply(this,arguments)}function y(){return y=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("appsetting/social/".concat(s)));case 1:case"end":return e.stop()}},r)})),y.apply(this,arguments)}function d(){return m.apply(this,arguments)}function m(){return m=u()(n()().mark(function r(){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.request)("appsetting/header/templates"));case 1:case"end":return t.stop()}},r)})),m.apply(this,arguments)}function j(r){return D.apply(this,arguments)}function D(){return D=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("appsetting/header/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),D.apply(this,arguments)}function B(r){return f.apply(this,arguments)}function f(){return f=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("appsetting/header/".concat(s)));case 1:case"end":return e.stop()}},r)})),f.apply(this,arguments)}function F(r){return U.apply(this,arguments)}function U(){return U=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("appsetting/header/logo",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),U.apply(this,arguments)}function Z(r){return A.apply(this,arguments)}function A(){return A=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("appsetting/facebook/".concat(s)));case 1:case"end":return e.stop()}},r)})),A.apply(this,arguments)}function k(r){return L.apply(this,arguments)}function L(){return L=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("appsetting/facebook/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),L.apply(this,arguments)}function $(){return R.apply(this,arguments)}function R(){return R=u()(n()().mark(function r(){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.request)("appsetting/sendgrid"));case 1:case"end":return t.stop()}},r)})),R.apply(this,arguments)}function H(r){return W.apply(this,arguments)}function W(){return W=u()(n()().mark(function r(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("appsetting/sendgrid/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),W.apply(this,arguments)}}}]);
