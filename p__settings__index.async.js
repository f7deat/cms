"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1813],{47389:function(R,g,a){var p=a(1413),n=a(62435),D=a(27363),i=a(91146),u=function(_,c){return n.createElement(i.Z,(0,p.Z)((0,p.Z)({},_),{},{ref:c,icon:D.Z}))};u.displayName="EditOutlined",g.Z=n.forwardRef(u)},5966:function(R,g,a){var p=a(1413),n=a(91),D=a(62435),i=a(19617),u=a(86074),T=["fieldProps","proFieldProps"],_=["fieldProps","proFieldProps"],c="text",P=function(o){var E=o.fieldProps,m=o.proFieldProps,v=(0,n.Z)(o,T);return(0,u.jsx)(i.Z,(0,p.Z)({valueType:c,fieldProps:E,filedConfig:{valueType:c},proFieldProps:m},v))},w=function(o){var E=o.fieldProps,m=o.proFieldProps,v=(0,n.Z)(o,_);return(0,u.jsx)(i.Z,(0,p.Z)({valueType:"password",fieldProps:E,proFieldProps:m,filedConfig:{valueType:c}},v))},d=P;d.Password=w,d.displayName="ProFormComponent",g.Z=d},63562:function(R,g,a){a.r(g);var p=a(15009),n=a.n(p),D=a(99289),i=a.n(D),u=a(31266),T=a(47389),_=a(63386),c=a(88518),P=a(28199),w=a(34994),d=a(5966),M=a(35312),o=a(71577),E=a(27790),m=a(71230),v=a(15746),l=a(86074),S=function(){var I=(0,M.useIntl)(),b=[{title:"#",valueType:"indexBorder"},{title:"name",dataIndex:"name"},{title:"Description",dataIndex:"description",search:!1},{title:"",valueType:"option",render:function(A,f){return[(0,l.jsx)(o.ZP,{icon:(0,l.jsx)(T.Z,{}),onClick:function(){return M.history.push("/settings/".concat(f.normalizedName.toLocaleLowerCase(),"/").concat(f.id))}},1)]}}],j=function(){var y=i()(n()().mark(function A(f){var C;return n()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,u.Uo)(f);case 2:C=O.sent,C.succeeded&&E.ZP.success("Saved!");case 4:case"end":return O.stop()}},A)}));return function(f){return y.apply(this,arguments)}}();return(0,l.jsx)(_._z,{title:I.formatMessage({id:"menu.settings"}),children:(0,l.jsxs)(m.Z,{gutter:16,children:[(0,l.jsx)(v.Z,{span:12,children:(0,l.jsx)(c.Z,{request:u.KU,rowKey:"id",columns:b})}),(0,l.jsx)(v.Z,{span:12,children:(0,l.jsx)(P.Z,{children:(0,l.jsx)(w.A,{onFinish:j,children:(0,l.jsx)(d.Z,{name:"titleSuffix",label:"Title suffix"})})})})]})})};g.default=S},31266:function(R,g,a){a.d(g,{HE:function(){return j},Is:function(){return J},KU:function(){return T},N7:function(){return X},OT:function(){return w},PX:function(){return v},Pg:function(){return O},RH:function(){return I},TJ:function(){return x},TZ:function(){return M},Uo:function(){return c},WX:function(){return q},_A:function(){return Y},aW:function(){return E},ad:function(){return C},fW:function(){return z},lX:function(){return A},lp:function(){return S},th:function(){return ee},tr:function(){return Q},yL:function(){return V}});var p=a(15009),n=a.n(p),D=a(99289),i=a.n(D),u=a(35312);function T(){return _.apply(this,arguments)}function _(){return _=i()(n()().mark(function r(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,u.request)("appsetting/list"));case 1:case"end":return s.stop()}},r)})),_.apply(this,arguments)}function c(r){return P.apply(this,arguments)}function P(){return P=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/layout/head/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),P.apply(this,arguments)}function w(r,t){return d.apply(this,arguments)}function d(){return d=i()(n()().mark(function r(t,s){return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,u.request)("appsetting/telegram/save/".concat(t),{method:"POST",data:s}));case 1:case"end":return h.stop()}},r)})),d.apply(this,arguments)}function M(r){return o.apply(this,arguments)}function o(){return o=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/telegram/".concat(t)));case 1:case"end":return e.stop()}},r)})),o.apply(this,arguments)}function E(r){return m.apply(this,arguments)}function m(){return m=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/telegram/test",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),m.apply(this,arguments)}function v(r){return l.apply(this,arguments)}function l(){return l=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/footer/".concat(t)));case 1:case"end":return e.stop()}},r)})),l.apply(this,arguments)}function S(r){return L.apply(this,arguments)}function L(){return L=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/footer/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),L.apply(this,arguments)}function I(r){return b.apply(this,arguments)}function b(){return b=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/social/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),b.apply(this,arguments)}function j(r){return y.apply(this,arguments)}function y(){return y=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/social/".concat(t)));case 1:case"end":return e.stop()}},r)})),y.apply(this,arguments)}function A(){return f.apply(this,arguments)}function f(){return f=i()(n()().mark(function r(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,u.request)("appsetting/header/templates"));case 1:case"end":return s.stop()}},r)})),f.apply(this,arguments)}function C(r){return W.apply(this,arguments)}function W(){return W=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/header/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),W.apply(this,arguments)}function O(r){return U.apply(this,arguments)}function U(){return U=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/header/".concat(t)));case 1:case"end":return e.stop()}},r)})),U.apply(this,arguments)}function x(r){return K.apply(this,arguments)}function K(){return K=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/header/logo",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),K.apply(this,arguments)}function X(r){return B.apply(this,arguments)}function B(){return B=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/facebook/".concat(t)));case 1:case"end":return e.stop()}},r)})),B.apply(this,arguments)}function z(r){return Z.apply(this,arguments)}function Z(){return Z=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/facebook/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),Z.apply(this,arguments)}function J(){return $.apply(this,arguments)}function $(){return $=i()(n()().mark(function r(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,u.request)("appsetting/sendgrid"));case 1:case"end":return s.stop()}},r)})),$.apply(this,arguments)}function Q(r){return F.apply(this,arguments)}function F(){return F=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/sendgrid/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),F.apply(this,arguments)}function V(r){return k.apply(this,arguments)}function k(){return k=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/sidebar",{params:t}));case 1:case"end":return e.stop()}},r)})),k.apply(this,arguments)}function Y(r){return H.apply(this,arguments)}function H(){return H=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/work/add",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),H.apply(this,arguments)}function q(r){return G.apply(this,arguments)}function G(){return G=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/".concat(t)));case 1:case"end":return e.stop()}},r)})),G.apply(this,arguments)}function ee(r,t){return N.apply(this,arguments)}function N(){return N=i()(n()().mark(function r(t,s){return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,u.request)("appsetting/save/".concat(t),{method:"POST",data:s}));case 1:case"end":return h.stop()}},r)})),N.apply(this,arguments)}}}]);
