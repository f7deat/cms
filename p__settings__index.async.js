"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1813],{47389:function(W,g,a){var p=a(1413),n=a(62435),y=a(27363),i=a(91146),u=function(d,m){return n.createElement(i.Z,(0,p.Z)((0,p.Z)({},d),{},{ref:m,icon:y.Z}))};u.displayName="EditOutlined",g.Z=n.forwardRef(u)},5966:function(W,g,a){var p=a(1413),n=a(91),y=a(62435),i=a(96987),u=a(86074),D=["fieldProps","proFieldProps"],d=["fieldProps","proFieldProps"],m="text",E=function(_){var v=_.fieldProps,f=_.proFieldProps,P=(0,n.Z)(_,D);return(0,u.jsx)(i.Z,(0,p.Z)({valueType:m,fieldProps:v,filedConfig:{valueType:m},proFieldProps:f},P))},b=function(_){var v=_.fieldProps,f=_.proFieldProps,P=(0,n.Z)(_,d);return(0,u.jsx)(i.Z,(0,p.Z)({valueType:"password",fieldProps:v,proFieldProps:f,filedConfig:{valueType:m}},P))},c=E;c.Password=b,c.displayName="ProFormComponent",g.Z=c},63562:function(W,g,a){a.r(g);var p=a(15009),n=a.n(p),y=a(99289),i=a.n(y),u=a(31266),D=a(47389),d=a(63386),m=a(56355),E=a(28199),b=a(34994),c=a(5966),T=a(35312),_=a(71577),v=a(58301),f=a(71230),P=a(15746),o=a(86074),A=function(){var I=(0,T.useIntl)(),w=[{title:"#",valueType:"indexBorder",width:30},{title:"name",dataIndex:"name"},{title:"Description",dataIndex:"description",search:!1},{title:"Option",valueType:"option",render:function(R,h){return[(0,o.jsx)(_.ZP,{size:"small",icon:(0,o.jsx)(D.Z,{}),onClick:function(){return T.history.push("/settings/".concat(h.normalizedName.toLocaleLowerCase(),"/").concat(h.id))}},1)]},width:40}],U=function(){var M=i()(n()().mark(function R(h){var S;return n()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,u.Uo)(h);case 2:S=O.sent,S.succeeded&&v.ZP.success("Saved!");case 4:case"end":return O.stop()}},R)}));return function(h){return M.apply(this,arguments)}}();return(0,o.jsx)(d._z,{title:I.formatMessage({id:"menu.settings"}),children:(0,o.jsxs)(f.Z,{gutter:16,children:[(0,o.jsx)(P.Z,{span:12,children:(0,o.jsx)(m.Z,{search:{layout:"vertical"},request:u.KU,rowKey:"id",columns:w})}),(0,o.jsx)(P.Z,{span:12,children:(0,o.jsx)(E.Z,{children:(0,o.jsxs)(b.A,{onFinish:U,children:[(0,o.jsx)(c.Z,{name:"address",label:"Address"}),(0,o.jsx)(c.Z,{name:"phoneNumber",label:"PhoneNumber"}),(0,o.jsx)(c.Z,{name:"email",label:"Email"})]})})})]})})};g.default=A},31266:function(W,g,a){a.d(g,{$8:function(){return N},Ej:function(){return Q},HE:function(){return I},Is:function(){return S},KU:function(){return D},N7:function(){return U},OT:function(){return b},PX:function(){return P},Pg:function(){return X},RH:function(){return A},Sy:function(){return V},TZ:function(){return T},Uo:function(){return m},aW:function(){return v},fW:function(){return R},n3:function(){return J},o1:function(){return q},oU:function(){return z},tr:function(){return O}});var p=a(15009),n=a.n(p),y=a(99289),i=a.n(y),u=a(35312);function D(){return d.apply(this,arguments)}function d(){return d=i()(n()().mark(function r(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,u.request)("setting/list"));case 1:case"end":return s.stop()}},r)})),d.apply(this,arguments)}function m(r){return E.apply(this,arguments)}function E(){return E=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("setting/layout/head/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),E.apply(this,arguments)}function b(r,t){return c.apply(this,arguments)}function c(){return c=i()(n()().mark(function r(t,s){return n()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,u.request)("setting/telegram/save/".concat(t),{method:"POST",data:s}));case 1:case"end":return l.stop()}},r)})),c.apply(this,arguments)}function T(r){return _.apply(this,arguments)}function _(){return _=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("setting/telegram/".concat(t)));case 1:case"end":return e.stop()}},r)})),_.apply(this,arguments)}function v(r){return f.apply(this,arguments)}function f(){return f=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("setting/telegram/test",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),f.apply(this,arguments)}function P(r){return o.apply(this,arguments)}function o(){return o=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("setting/footer/".concat(t)));case 1:case"end":return e.stop()}},r)})),o.apply(this,arguments)}function A(r){return C.apply(this,arguments)}function C(){return C=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("setting/social/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),C.apply(this,arguments)}function I(r){return w.apply(this,arguments)}function w(){return w=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("setting/social/".concat(t)));case 1:case"end":return e.stop()}},r)})),w.apply(this,arguments)}function U(r){return M.apply(this,arguments)}function M(){return M=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("setting/facebook/".concat(t)));case 1:case"end":return e.stop()}},r)})),M.apply(this,arguments)}function R(r){return h.apply(this,arguments)}function h(){return h=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("setting/facebook/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),h.apply(this,arguments)}function S(){return j.apply(this,arguments)}function j(){return j=i()(n()().mark(function r(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,u.request)("setting/sendgrid"));case 1:case"end":return s.stop()}},r)})),j.apply(this,arguments)}function O(r){return L.apply(this,arguments)}function L(){return L=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("setting/sendgrid/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),L.apply(this,arguments)}function Y(r){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime().mark(function r(t){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("setting/sidebar",{params:t}));case 1:case"end":return e.stop()}},r)})),K.apply(this,arguments)}function ee(r){return B.apply(this,arguments)}function B(){return B=_asyncToGenerator(_regeneratorRuntime().mark(function r(t){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("setting/work/add",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),B.apply(this,arguments)}function N(r){return Z.apply(this,arguments)}function Z(){return Z=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("setting/".concat(t)));case 1:case"end":return e.stop()}},r)})),Z.apply(this,arguments)}function z(r){return $.apply(this,arguments)}function $(){return $=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("setting/unix/".concat(t)));case 1:case"end":return e.stop()}},r)})),$.apply(this,arguments)}function X(r){return F.apply(this,arguments)}function F(){return F=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("setting/header/".concat(t)));case 1:case"end":return e.stop()}},r)})),F.apply(this,arguments)}function q(r,t){return k.apply(this,arguments)}function k(){return k=i()(n()().mark(function r(t,s){return n()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,u.request)("setting/save/".concat(t),{method:"POST",data:s}));case 1:case"end":return l.stop()}},r)})),k.apply(this,arguments)}function J(r,t){return G.apply(this,arguments)}function G(){return G=i()(n()().mark(function r(t,s){return n()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,u.request)("setting/unix/save/".concat(t),{method:"POST",data:s}));case 1:case"end":return l.stop()}},r)})),G.apply(this,arguments)}function Q(r){return x.apply(this,arguments)}function x(){return x=i()(n()().mark(function r(t){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("setting/graph-api-explorer?query=".concat(t)));case 1:case"end":return e.stop()}},r)})),x.apply(this,arguments)}function V(){return H.apply(this,arguments)}function H(){return H=i()(n()().mark(function r(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,u.request)("setting/themes/options"));case 1:case"end":return s.stop()}},r)})),H.apply(this,arguments)}}}]);
