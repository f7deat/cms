"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5690],{82826:function(B,T,e){e.d(T,{Z:function(){return P}});var m=e(1413),r=e(62435),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},s=O,o=e(84089),h=function(p,b){return r.createElement(o.Z,(0,m.Z)((0,m.Z)({},p),{},{ref:b,icon:s}))};h.displayName="ArrowLeftOutlined";var P=r.forwardRef(h)},63434:function(B,T,e){var m=e(1413),r=e(91),O=e(86074),s=e(22270),o=e(32808),h=e(62435),P=e(90789),S=e(15790),p=["options","fieldProps","proFieldProps","valueEnum"],b=h.forwardRef(function(d,f){var j=d.options,_=d.fieldProps,R=d.proFieldProps,y=d.valueEnum,i=(0,r.Z)(d,p);return(0,O.jsx)(S.Z,(0,m.Z)({ref:f,valueType:"checkbox",valueEnum:(0,s.h)(y,void 0),fieldProps:(0,m.Z)({options:j},_),lightProps:(0,m.Z)({labelFormatter:function(){return(0,O.jsx)(S.Z,(0,m.Z)({ref:f,valueType:"checkbox",mode:"read",valueEnum:(0,s.h)(y,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,m.Z)({options:j},_),proFieldProps:R},i))}},i.lightProps),proFieldProps:R},i))}),C=h.forwardRef(function(d,f){var j=d.fieldProps,_=d.children;return(0,O.jsx)(o.Z,(0,m.Z)((0,m.Z)({ref:f},j),{},{children:_}))}),Z=(0,P.G)(C,{valuePropName:"checked"}),E=Z;E.Group=b,T.Z=E},90672:function(B,T,e){var m=e(1413),r=e(91),O=e(86074),s=e(62435),o=e(15790),h=["fieldProps","proFieldProps"],P=function(p,b){var C=p.fieldProps,Z=p.proFieldProps,E=(0,r.Z)(p,h);return(0,O.jsx)(o.Z,(0,m.Z)({ref:b,valueType:"textarea",fieldProps:C,proFieldProps:Z},E))};T.Z=s.forwardRef(P)},8507:function(B,T,e){e.r(T),e.d(T,{default:function(){return c}});var m=e(15009),r=e.n(m),O=e(99289),s=e.n(O),o=e(5574),h=e.n(o),P=e(14027),S=e(78710),p=e(61614),b=e(82826),C=e(62884),Z=e(30029),E=e(99351),d=e(5966),f=e(90905),j=e(27790),_=e(71577),R=e(71230),y=e(15746),i=e(26713),v=e(32983),n=e(62435),g=e(97269),A=e(90672),W=e(64317),k=e(63434),u=e(86074),V=function(){var t=(0,f.useParams)(),G=t.id,x=(0,n.useRef)(),H=(0,n.useState)(),K=h()(H,2),Y=K[0],N=K[1];(0,n.useEffect)(function(){(0,p.Z9)().then(function(F){N(F),(0,p.R4)(G).then(function(D){var M;(M=x.current)===null||M===void 0||M.setFields([{name:"id",value:D.id},{name:"name",value:D.name},{name:"description",value:D.description},{name:"normalizedName",value:D.normalizedName},{name:"type",value:D.type.toString()},{name:"active",value:D.active}])})})},[G]);var J=function(){var F=s()(r()().mark(function D(M){var z;return r()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return M.type=Number(M.type),w.next=3,(0,p.BA)(M);case 3:z=w.sent,z.succeeded&&j.ZP.success("Saved!");case 5:case"end":return w.stop()}},D)}));return function(M){return F.apply(this,arguments)}}();return(0,u.jsxs)(g.A,{formRef:x,onFinish:J,children:[(0,u.jsx)(d.Z,{name:"id",hidden:!0}),(0,u.jsx)(d.Z,{name:"name",label:"Name"}),(0,u.jsx)(d.Z,{name:"normalizedName",label:"Normalized name"}),(0,u.jsx)(A.Z,{name:"description",label:"Description"}),(0,u.jsx)(W.Z,{name:"type",label:"Type",options:Y}),(0,u.jsx)(k.Z,{name:"active",label:"Active"})]})},I=V,a=function(){var t=(0,f.useIntl)(),G=(0,f.useParams)(),x=G.id,H=(0,n.useState)(!1),K=h()(H,2),Y=K[0],N=K[1],J=(0,n.useState)(),F=h()(J,2),D=F[0],M=F[1],z=(0,n.useState)("content"),Q=h()(z,2),w=Q[0],ee=Q[1];(0,n.useEffect)(function(){(0,p.R4)(x).then(function(L){return M(L)})},[x]);var re=function(){var L=s()(r()().mark(function U(X){return r()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:(0,p.BP)(X).then(function(ne){ne.succeeded&&(j.ZP.success("Saved!"),N(!1))});case 1:case"end":return q.stop()}},U)}));return function(X){return L.apply(this,arguments)}}(),te=function(){var L=s()(r()().mark(function U(){return r()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,(0,S.W)(x);case 2:case"end":return $.stop()}},U)}));return function(){return L.apply(this,arguments)}}();return(0,u.jsx)(C._z,{title:D==null?void 0:D.name,extra:(0,u.jsx)(_.Z,{icon:(0,u.jsx)(b.Z,{}),onClick:function(){return f.history.back()},children:(0,u.jsx)(f.FormattedMessage,{id:"general.back"})}),children:(0,u.jsxs)(R.Z,{gutter:16,children:[(0,u.jsx)(y.Z,{span:6}),(0,u.jsxs)(y.Z,{span:12,children:[(0,u.jsx)(Z.Z,{tabs:{tabPosition:"top",activeKey:w,items:[{label:"Content",key:"content",children:(0,u.jsx)(P.Z,{})},{label:t.formatMessage({id:"menu.settings"}),key:"setting",children:(0,u.jsx)(I,{})}],onChange:function(U){ee(U)}},extra:(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(_.Z,{type:"primary",onClick:te,children:"Export"}),(0,u.jsx)(_.Z,{type:"primary",danger:!0,children:"Import"})]})}),(0,u.jsxs)(E.Y,{onFinish:re,open:Y,onOpenChange:N,children:[(0,u.jsx)(d.Z,{name:"name",label:"Name"}),(0,u.jsx)(d.Z,{name:"normalizedName",label:"Normalized Name"})]})]}),(0,u.jsx)(y.Z,{span:6,children:(0,u.jsx)(Z.Z,{children:(0,u.jsx)(v.Z,{})})})]})})},c=a},78710:function(B,T,e){e.d(T,{Jx:function(){return Z},W:function(){return R},_O:function(){return S},_s:function(){return b},dk:function(){return j},gn:function(){return d},rZ:function(){return h}});var m=e(15009),r=e.n(m),O=e(99289),s=e.n(O),o=e(90905);function h(){return P.apply(this,arguments)}function P(){return P=s()(r()().mark(function i(){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,o.request)("backup/statistic"));case 1:case"end":return n.stop()}},i)})),P.apply(this,arguments)}function S(){return p.apply(this,arguments)}function p(){return p=s()(r()().mark(function i(){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,o.request)("backup/export",{method:"POST"}));case 1:case"end":return n.stop()}},i)})),p.apply(this,arguments)}function b(){return C.apply(this,arguments)}function C(){return C=s()(r()().mark(function i(){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,o.request)("backup/upgrade",{method:"POST"}));case 1:case"end":return n.stop()}},i)})),C.apply(this,arguments)}function Z(){return E.apply(this,arguments)}function E(){return E=s()(r()().mark(function i(){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,o.request)("backup/upgrade/list"));case 1:case"end":return n.stop()}},i)})),E.apply(this,arguments)}function d(i){return f.apply(this,arguments)}function f(){return f=s()(r()().mark(function i(v){return r()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,o.request)(v,{method:"POST"}));case 1:case"end":return g.stop()}},i)})),f.apply(this,arguments)}function j(i){return _.apply(this,arguments)}function _(){return _=s()(r()().mark(function i(v){var n;return r()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return n=new FormData,n.append("file",v),A.abrupt("return",(0,o.request)("backup/import",{method:"POST",data:n}));case 3:case"end":return A.stop()}},i)})),_.apply(this,arguments)}function R(i){return y.apply(this,arguments)}function y(){return y=s()(r()().mark(function i(v){return r()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,o.request)("backup/export/catalog/".concat(v),{method:"POST"}));case 1:case"end":return g.stop()}},i)})),y.apply(this,arguments)}},61614:function(B,T,e){e.d(T,{A$:function(){return b},BA:function(){return j},BP:function(){return S},R4:function(){return h},S8:function(){return d},Z9:function(){return V},_V:function(){return i},gY:function(){return n},r5:function(){return k},zo:function(){return A}});var m=e(15009),r=e.n(m),O=e(99289),s=e.n(O),o=e(90905);function h(a){return P.apply(this,arguments)}function P(){return P=s()(r()().mark(function a(c){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("catalog/".concat(c)));case 1:case"end":return t.stop()}},a)})),P.apply(this,arguments)}function S(a){return p.apply(this,arguments)}function p(){return p=s()(r()().mark(function a(c){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("catalog/add",{method:"POST",data:c}));case 1:case"end":return t.stop()}},a)})),p.apply(this,arguments)}function b(a){return C.apply(this,arguments)}function C(){return C=s()(r()().mark(function a(c){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("catalog/list",{method:"GET",params:c}));case 1:case"end":return t.stop()}},a)})),C.apply(this,arguments)}function Z(){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime().mark(function a(){return _regeneratorRuntime().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",request("catalog/tree"));case 1:case"end":return l.stop()}},a)})),E.apply(this,arguments)}function d(a){return f.apply(this,arguments)}function f(){return f=s()(r()().mark(function a(c){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("catalog/delete/".concat(c),{method:"POST"}));case 1:case"end":return t.stop()}},a)})),f.apply(this,arguments)}function j(a){return _.apply(this,arguments)}function _(){return _=s()(r()().mark(function a(c){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("catalog/save",{method:"POST",data:c}));case 1:case"end":return t.stop()}},a)})),_.apply(this,arguments)}function R(a){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime().mark(function a(c){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("catalog/tree-drop",{method:"POST",data:c}));case 1:case"end":return t.stop()}},a)})),y.apply(this,arguments)}function i(){return v.apply(this,arguments)}function v(){return v=s()(r()().mark(function a(){return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,o.request)("catalog/view-count"));case 1:case"end":return l.stop()}},a)})),v.apply(this,arguments)}function n(a){return g.apply(this,arguments)}function g(){return g=s()(r()().mark(function a(c){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("catalog/active/".concat(c),{method:"POST"}));case 1:case"end":return t.stop()}},a)})),g.apply(this,arguments)}function A(a){return W.apply(this,arguments)}function W(){return W=s()(r()().mark(function a(c){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("catalog/article/save",{method:"POST",data:c}));case 1:case"end":return t.stop()}},a)})),W.apply(this,arguments)}function k(a){return u.apply(this,arguments)}function u(){return u=s()(r()().mark(function a(c){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("catalog/update-thumbnail",{method:"POST",data:c}));case 1:case"end":return t.stop()}},a)})),u.apply(this,arguments)}function V(){return I.apply(this,arguments)}function I(){return I=s()(r()().mark(function a(){return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,o.request)("catalog/types"));case 1:case"end":return l.stop()}},a)})),I.apply(this,arguments)}}}]);
