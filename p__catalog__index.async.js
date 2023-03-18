"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5690],{82826:function($,D,e){e.d(D,{Z:function(){return P}});var m=e(1413),t=e(62435),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},s=O,o=e(84089),h=function(p,b){return t.createElement(o.Z,(0,m.Z)((0,m.Z)({},p),{},{ref:b,icon:s}))};h.displayName="ArrowLeftOutlined";var P=t.forwardRef(h)},63434:function($,D,e){var m=e(1413),t=e(91),O=e(86074),s=e(22270),o=e(32808),h=e(62435),P=e(90789),S=e(25338),p=["options","fieldProps","proFieldProps","valueEnum"],b=h.forwardRef(function(d,f){var j=d.options,_=d.fieldProps,L=d.proFieldProps,E=d.valueEnum,c=(0,t.Z)(d,p);return(0,O.jsx)(S.Z,(0,m.Z)({ref:f,valueType:"checkbox",valueEnum:(0,s.h)(E,void 0),fieldProps:(0,m.Z)({options:j},_),lightProps:(0,m.Z)({labelFormatter:function(){return(0,O.jsx)(S.Z,(0,m.Z)({ref:f,valueType:"checkbox",mode:"read",valueEnum:(0,s.h)(E,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,m.Z)({options:j},_),proFieldProps:L},c))}},c.lightProps),proFieldProps:L},c))}),C=h.forwardRef(function(d,f){var j=d.fieldProps,_=d.children;return(0,O.jsx)(o.Z,(0,m.Z)((0,m.Z)({ref:f},j),{},{children:_}))}),Z=(0,P.G)(C,{valuePropName:"checked"}),y=Z;y.Group=b,D.Z=y},90672:function($,D,e){var m=e(1413),t=e(91),O=e(86074),s=e(62435),o=e(25338),h=["fieldProps","proFieldProps"],P=function(p,b){var C=p.fieldProps,Z=p.proFieldProps,y=(0,t.Z)(p,h);return(0,O.jsx)(o.Z,(0,m.Z)({ref:b,valueType:"textarea",fieldProps:C,proFieldProps:Z},y))};D.Z=s.forwardRef(P)},8507:function($,D,e){e.r(D),e.d(D,{default:function(){return N}});var m=e(15009),t=e.n(m),O=e(99289),s=e.n(O),o=e(5574),h=e.n(o),P=e(14027),S=e(78710),p=e(61614),b=e(82826),C=e(62884),Z=e(30029),y=e(99351),d=e(5966),f=e(90905),j=e(27790),_=e(71577),L=e(71230),E=e(15746),c=e(26713),v=e(32983),a=e(62435),g=e(97269),A=e(90672),K=e(64317),V=e(63434),i=e(86074),H=function(){var U=(0,f.useParams)(),I=U.id,M=(0,a.useRef)(),n=(0,a.useState)(),u=h()(n,2),l=u[0],r=u[1];(0,a.useEffect)(function(){(0,p.Z9)().then(function(W){r(W),(0,p.R4)(I).then(function(T){var w;(w=M.current)===null||w===void 0||w.setFields([{name:"id",value:T.id},{name:"name",value:T.name},{name:"description",value:T.description},{name:"normalizedName",value:T.normalizedName},{name:"type",value:T.type.toString()},{name:"active",value:T.active}])})})},[I]);var R=function(){var W=s()(t()().mark(function T(w){var k;return t()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return w.type=Number(w.type),B.next=3,(0,p.BA)(w);case 3:k=B.sent,k.succeeded&&j.ZP.success("Saved!");case 5:case"end":return B.stop()}},T)}));return function(w){return W.apply(this,arguments)}}();return(0,i.jsxs)(g.A,{formRef:M,onFinish:R,children:[(0,i.jsx)(d.Z,{name:"id",hidden:!0}),(0,i.jsx)(d.Z,{name:"name",label:"Name"}),(0,i.jsx)(d.Z,{name:"normalizedName",label:"Normalized name"}),(0,i.jsx)(A.Z,{name:"description",label:"Description"}),(0,i.jsx)(K.Z,{name:"type",label:"Type",options:l}),(0,i.jsx)(V.Z,{name:"active",label:"Active"})]})},G=H,Y=function(){var U=(0,f.useIntl)(),I=(0,f.useParams)(),M=I.id,n=(0,a.useState)(!1),u=h()(n,2),l=u[0],r=u[1],R=(0,a.useState)(),W=h()(R,2),T=W[0],w=W[1],k=(0,a.useState)("content"),Q=h()(k,2),B=Q[0],ee=Q[1];(0,a.useEffect)(function(){(0,p.R4)(M).then(function(x){return w(x)})},[M]);var re=function(){var x=s()(t()().mark(function F(X){return t()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:(0,p.BP)(X).then(function(ne){ne.succeeded&&(j.ZP.success("Saved!"),r(!1))});case 1:case"end":return q.stop()}},F)}));return function(X){return x.apply(this,arguments)}}(),te=function(){var x=s()(t()().mark(function F(){return t()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,(0,S.W)(M);case 2:case"end":return z.stop()}},F)}));return function(){return x.apply(this,arguments)}}();return(0,i.jsx)(C._z,{title:T==null?void 0:T.name,extra:(0,i.jsx)(_.Z,{icon:(0,i.jsx)(b.Z,{}),onClick:function(){return f.history.back()},children:(0,i.jsx)(f.FormattedMessage,{id:"general.back"})}),children:(0,i.jsxs)(L.Z,{gutter:16,children:[(0,i.jsx)(E.Z,{span:6}),(0,i.jsxs)(E.Z,{span:12,children:[(0,i.jsx)(Z.Z,{tabs:{tabPosition:"top",activeKey:B,items:[{label:"Content",key:"content",children:(0,i.jsx)(P.Z,{})},{label:U.formatMessage({id:"menu.settings"}),key:"setting",children:(0,i.jsx)(G,{})}],onChange:function(F){ee(F)}},extra:(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(_.Z,{type:"primary",onClick:te,children:"Export"}),(0,i.jsx)(_.Z,{type:"primary",danger:!0,children:"Import"})]})}),(0,i.jsxs)(y.Y,{onFinish:re,open:l,onOpenChange:r,children:[(0,i.jsx)(d.Z,{name:"name",label:"Name"}),(0,i.jsx)(d.Z,{name:"normalizedName",label:"Normalized Name"})]})]}),(0,i.jsx)(E.Z,{span:6,children:(0,i.jsx)(Z.Z,{children:(0,i.jsx)(v.Z,{})})})]})})},N=Y},78710:function($,D,e){e.d(D,{Jx:function(){return Z},W:function(){return L},_O:function(){return S},_s:function(){return b},dk:function(){return j},gn:function(){return d},rZ:function(){return h}});var m=e(15009),t=e.n(m),O=e(99289),s=e.n(O),o=e(90905);function h(){return P.apply(this,arguments)}function P(){return P=s()(t()().mark(function c(){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,o.request)("backup/statistic"));case 1:case"end":return a.stop()}},c)})),P.apply(this,arguments)}function S(){return p.apply(this,arguments)}function p(){return p=s()(t()().mark(function c(){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,o.request)("backup/export",{method:"POST"}));case 1:case"end":return a.stop()}},c)})),p.apply(this,arguments)}function b(){return C.apply(this,arguments)}function C(){return C=s()(t()().mark(function c(){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,o.request)("backup/upgrade",{method:"POST"}));case 1:case"end":return a.stop()}},c)})),C.apply(this,arguments)}function Z(){return y.apply(this,arguments)}function y(){return y=s()(t()().mark(function c(){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,o.request)("backup/upgrade/list"));case 1:case"end":return a.stop()}},c)})),y.apply(this,arguments)}function d(c){return f.apply(this,arguments)}function f(){return f=s()(t()().mark(function c(v){return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,o.request)(v,{method:"POST"}));case 1:case"end":return g.stop()}},c)})),f.apply(this,arguments)}function j(c){return _.apply(this,arguments)}function _(){return _=s()(t()().mark(function c(v){var a;return t()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return a=new FormData,a.append("file",v),A.abrupt("return",(0,o.request)("backup/import",{method:"POST",data:a}));case 3:case"end":return A.stop()}},c)})),_.apply(this,arguments)}function L(c){return E.apply(this,arguments)}function E(){return E=s()(t()().mark(function c(v){return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,o.request)("backup/export/catalog/".concat(v),{method:"POST"}));case 1:case"end":return g.stop()}},c)})),E.apply(this,arguments)}},61614:function($,D,e){e.d(D,{A$:function(){return b},BA:function(){return j},BP:function(){return S},M0:function(){return I},R4:function(){return h},S8:function(){return d},Z9:function(){return H},_V:function(){return c},gY:function(){return a},m_:function(){return Y},r5:function(){return V},wu:function(){return J},zo:function(){return A}});var m=e(15009),t=e.n(m),O=e(99289),s=e.n(O),o=e(90905);function h(n){return P.apply(this,arguments)}function P(){return P=s()(t()().mark(function n(u){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/".concat(u)));case 1:case"end":return r.stop()}},n)})),P.apply(this,arguments)}function S(n){return p.apply(this,arguments)}function p(){return p=s()(t()().mark(function n(u){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/add",{method:"POST",data:u}));case 1:case"end":return r.stop()}},n)})),p.apply(this,arguments)}function b(n){return C.apply(this,arguments)}function C(){return C=s()(t()().mark(function n(u){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/list",{method:"GET",params:u}));case 1:case"end":return r.stop()}},n)})),C.apply(this,arguments)}function Z(){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime().mark(function n(){return _regeneratorRuntime().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",request("catalog/tree"));case 1:case"end":return l.stop()}},n)})),y.apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return f=s()(t()().mark(function n(u){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/delete/".concat(u),{method:"POST"}));case 1:case"end":return r.stop()}},n)})),f.apply(this,arguments)}function j(n){return _.apply(this,arguments)}function _(){return _=s()(t()().mark(function n(u){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/save",{method:"POST",data:u}));case 1:case"end":return r.stop()}},n)})),_.apply(this,arguments)}function L(n){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime().mark(function n(u){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/tree-drop",{method:"POST",data:u}));case 1:case"end":return r.stop()}},n)})),E.apply(this,arguments)}function c(){return v.apply(this,arguments)}function v(){return v=s()(t()().mark(function n(){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,o.request)("catalog/view-count"));case 1:case"end":return l.stop()}},n)})),v.apply(this,arguments)}function a(n){return g.apply(this,arguments)}function g(){return g=s()(t()().mark(function n(u){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/active/".concat(u),{method:"POST"}));case 1:case"end":return r.stop()}},n)})),g.apply(this,arguments)}function A(n){return K.apply(this,arguments)}function K(){return K=s()(t()().mark(function n(u){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/article/save",{method:"POST",data:u}));case 1:case"end":return r.stop()}},n)})),K.apply(this,arguments)}function V(n){return i.apply(this,arguments)}function i(){return i=s()(t()().mark(function n(u){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/update-thumbnail",{method:"POST",data:u}));case 1:case"end":return r.stop()}},n)})),i.apply(this,arguments)}function H(){return G.apply(this,arguments)}function G(){return G=s()(t()().mark(function n(){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,o.request)("catalog/types"));case 1:case"end":return l.stop()}},n)})),G.apply(this,arguments)}function Y(n){return N.apply(this,arguments)}function N(){return N=s()(t()().mark(function n(u){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/list-tag/".concat(u)));case 1:case"end":return r.stop()}},n)})),N.apply(this,arguments)}function J(n){return U.apply(this,arguments)}function U(){return U=s()(t()().mark(function n(u){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/list-tag-select",{params:u}));case 1:case"end":return r.stop()}},n)})),U.apply(this,arguments)}function I(n,u){return M.apply(this,arguments)}function M(){return M=s()(t()().mark(function n(u,l){return t()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",(0,o.request)("catalog/list-by-tag/".concat(u),{params:l}));case 1:case"end":return R.stop()}},n)})),M.apply(this,arguments)}}}]);
