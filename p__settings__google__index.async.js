"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4766],{5966:function(N,O,u){var E=u(1413),n=u(91),C=u(62435),i=u(19617),s=u(86074),j=["fieldProps","proFieldProps"],v=["fieldProps","proFieldProps"],y="text",P=function(p){var c=p.fieldProps,f=p.proFieldProps,l=(0,n.Z)(p,j);return(0,s.jsx)(i.Z,(0,E.Z)({valueType:y,fieldProps:c,filedConfig:{valueType:y},proFieldProps:f},l))},A=function(p){var c=p.fieldProps,f=p.proFieldProps,l=(0,n.Z)(p,v);return(0,s.jsx)(i.Z,(0,E.Z)({valueType:"password",fieldProps:c,proFieldProps:f,filedConfig:{valueType:y}},l))},d=P;d.Password=A,d.displayName="ProFormComponent",O.Z=d},78661:function(N,O,u){u.r(O),u.d(O,{default:function(){return Z}});var E=u(15009),n=u.n(E),C=u(99289),i=u.n(C),s=u(31266),j=u(63386),v=u(28199),y=u(34994),P=u(5966),A=u(35312),d=u(27790),F=u(71230),p=u(15746),c=u(62435),f=u(56717),l=u(86074),$=function(){var R=(0,c.useRef)();(0,c.useEffect)(function(){(0,s.Op)("GoogleTagManager").then(function(w){console.log(w)})},[]);var m=function(){var w=i()(n()().mark(function _(b){return n()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:case"end":return T.stop()}},_)}));return function(b){return w.apply(this,arguments)}}();return(0,l.jsx)(v.Z,{title:"Google Tag Manager",extra:(0,l.jsx)("a",{href:"https://tagmanager.google.com/",children:(0,l.jsx)(f.Z,{})}),children:(0,l.jsx)(y.A,{formRef:R,onFinish:m,children:(0,l.jsx)(P.Z,{label:"Tag Id",name:"tagId",rules:[{required:!0}]})})})},W=$,D=function(){var R=(0,A.useParams)(),m=R.id,w=(0,c.useRef)();(0,c.useEffect)(function(){(0,s.WX)(m).then(function(b){var o;(o=w.current)===null||o===void 0||o.setFields([{name:"bloggerApiKey",value:b.bloggerApiKey}])})},[m]);var _=function(){var b=i()(n()().mark(function o(T){var S;return n()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,s.th)(m,T);case 2:S=g.sent,S.succeeded&&d.ZP.success("Saved");case 4:case"end":return g.stop()}},o)}));return function(T){return b.apply(this,arguments)}}();return(0,l.jsx)(j._z,{children:(0,l.jsxs)(F.Z,{gutter:16,children:[(0,l.jsx)(p.Z,{span:6,children:(0,l.jsx)(v.Z,{title:"Blogger",extra:(0,l.jsx)("a",{href:"https://blogger.com/",target:"_blank",children:(0,l.jsx)(f.Z,{})}),children:(0,l.jsx)(y.A,{formRef:w,onFinish:_,children:(0,l.jsx)(P.Z.Password,{name:"bloggerApiKey",label:"Blogger API Key",rules:[{required:!0}]})})})}),(0,l.jsx)(p.Z,{span:6,children:(0,l.jsx)(W,{})})]})})},Z=D},31266:function(N,O,u){u.d(O,{HE:function(){return R},Is:function(){return Q},KU:function(){return j},N7:function(){return z},OT:function(){return A},Op:function(){return ne},PX:function(){return l},Pg:function(){return T},RH:function(){return Z},TJ:function(){return X},TZ:function(){return F},Uo:function(){return y},WX:function(){return ee},_A:function(){return q},aW:function(){return c},ad:function(){return b},fW:function(){return J},lX:function(){return w},lp:function(){return W},th:function(){return re},tr:function(){return V},yL:function(){return Y}});var E=u(15009),n=u.n(E),C=u(99289),i=u.n(C),s=u(35312);function j(){return v.apply(this,arguments)}function v(){return v=i()(n()().mark(function r(){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,s.request)("appsetting/list"));case 1:case"end":return a.stop()}},r)})),v.apply(this,arguments)}function y(r){return P.apply(this,arguments)}function P(){return P=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/layout/head/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),P.apply(this,arguments)}function A(r,t){return d.apply(this,arguments)}function d(){return d=i()(n()().mark(function r(t,a){return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,s.request)("appsetting/telegram/save/".concat(t),{method:"POST",data:a}));case 1:case"end":return h.stop()}},r)})),d.apply(this,arguments)}function F(r){return p.apply(this,arguments)}function p(){return p=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/telegram/".concat(t)));case 1:case"end":return e.stop()}},r)})),p.apply(this,arguments)}function c(r){return f.apply(this,arguments)}function f(){return f=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/telegram/test",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),f.apply(this,arguments)}function l(r){return $.apply(this,arguments)}function $(){return $=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/footer/".concat(t)));case 1:case"end":return e.stop()}},r)})),$.apply(this,arguments)}function W(r){return D.apply(this,arguments)}function D(){return D=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/footer/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),D.apply(this,arguments)}function Z(r){return M.apply(this,arguments)}function M(){return M=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/social/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),M.apply(this,arguments)}function R(r){return m.apply(this,arguments)}function m(){return m=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/social/".concat(t)));case 1:case"end":return e.stop()}},r)})),m.apply(this,arguments)}function w(){return _.apply(this,arguments)}function _(){return _=i()(n()().mark(function r(){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,s.request)("appsetting/header/templates"));case 1:case"end":return a.stop()}},r)})),_.apply(this,arguments)}function b(r){return o.apply(this,arguments)}function o(){return o=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/header/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),o.apply(this,arguments)}function T(r){return S.apply(this,arguments)}function S(){return S=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/header/".concat(t)));case 1:case"end":return e.stop()}},r)})),S.apply(this,arguments)}function X(r){return g.apply(this,arguments)}function g(){return g=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/header/logo",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),g.apply(this,arguments)}function z(r){return k.apply(this,arguments)}function k(){return k=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/facebook/".concat(t)));case 1:case"end":return e.stop()}},r)})),k.apply(this,arguments)}function J(r){return G.apply(this,arguments)}function G(){return G=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/facebook/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),G.apply(this,arguments)}function Q(){return I.apply(this,arguments)}function I(){return I=i()(n()().mark(function r(){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,s.request)("appsetting/sendgrid"));case 1:case"end":return a.stop()}},r)})),I.apply(this,arguments)}function V(r){return K.apply(this,arguments)}function K(){return K=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/sendgrid/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),K.apply(this,arguments)}function Y(r){return L.apply(this,arguments)}function L(){return L=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/sidebar",{params:t}));case 1:case"end":return e.stop()}},r)})),L.apply(this,arguments)}function q(r){return B.apply(this,arguments)}function B(){return B=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/work/add",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),B.apply(this,arguments)}function ee(r){return H.apply(this,arguments)}function H(){return H=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/".concat(t)));case 1:case"end":return e.stop()}},r)})),H.apply(this,arguments)}function re(r,t){return U.apply(this,arguments)}function U(){return U=i()(n()().mark(function r(t,a){return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,s.request)("appsetting/save/".concat(t),{method:"POST",data:a}));case 1:case"end":return h.stop()}},r)})),U.apply(this,arguments)}function ne(r){return x.apply(this,arguments)}function x(){return x=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/by-name/".concat(t)));case 1:case"end":return e.stop()}},r)})),x.apply(this,arguments)}}}]);