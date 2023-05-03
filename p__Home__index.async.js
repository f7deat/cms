"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3371],{84299:function(V,M,n){var A=n(97857),s=n.n(A),S=n(15009),l=n.n(S),o=n(99289),T=n.n(o),p=n(5574),y=n.n(p),d=n(55375),h=n(61614),g=n(86548),I=n(48689),R=n(24969),D=n(34545),u=n(99351),b=n(5966),j=n(90672),L=n(90905),m=n(27790),O=n(71577),P=n(86738),K=n(62435),_=n(86074),Z=function(E){var v=(0,K.useRef)(),$=(0,K.useState)(!1),U=y()($,2),x=U[0],C=U[1],G=function(){var f=T()(l()().mark(function c(t){var a,r;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,h.S8)(t);case 2:a=i.sent,a.succeeded?(m.ZP.success("Deleted"),(r=v.current)===null||r===void 0||r.reload()):m.ZP.error(a.errors[0].description);case 4:case"end":return i.stop()}},c)}));return function(t){return f.apply(this,arguments)}}(),W=function(){switch(E.type){case d.H.Tag:return"catalog/tag";default:return"catalog"}},F=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:"Modified date",dataIndex:"modifiedDate",valueType:"fromNow",search:!1},{title:"View",dataIndex:"viewCount",valueType:"digit",search:!1},{title:"Status",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"",valueType:"option",render:function(c,t){return[(0,_.jsx)(O.Z,{icon:(0,_.jsx)(g.Z,{}),type:"primary",onClick:function(){return L.history.push("/".concat(W(),"/").concat(t.id))}},1),(0,_.jsx)(P.Z,{title:"Are you sure?",onConfirm:function(){return G(t.id)},children:(0,_.jsx)(O.Z,{icon:(0,_.jsx)(I.Z,{}),type:"primary",danger:!0})},2)]}}],w=function(){var f=T()(l()().mark(function c(t){var a,r;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t.type=Number(E.type),i.next=3,(0,h.BP)(t);case 3:a=i.sent,a.succeeded&&(m.ZP.success("Added!"),(r=v.current)===null||r===void 0||r.reload(),C(!1));case 5:case"end":return i.stop()}},c)}));return function(t){return f.apply(this,arguments)}}();return(0,_.jsxs)("div",{children:[(0,_.jsx)(D.Z,{rowKey:"id",request:function(c){return(0,h.A$)(s()(s()({},c),{},{type:E.type}))},columns:F,actionRef:v,toolBarRender:function(){return[(0,_.jsxs)(O.Z,{type:"primary",onClick:function(){return C(!0)},children:[(0,_.jsx)(R.Z,{}),(0,_.jsx)(L.FormattedMessage,{id:"general.new"})]},"new")]}}),(0,_.jsxs)(u.Y,{open:x,onOpenChange:C,onFinish:w,title:"Th\xEAm m\u1EDBi ".concat(E.type),children:[(0,_.jsx)(b.Z,{name:"name",label:"Name",rules:[{required:!0}]}),(0,_.jsx)(j.Z,{label:"Description",name:"description"})]})]})};M.Z=Z},86587:function(V,M,n){n.r(M);var A=n(5574),s=n.n(A),S=n(84299),l=n(55375),o=n(61614),T=n(62884),p=n(30029),y=n(71230),d=n(15746),h=n(55054),g=n(96074),I=n(63012),R=n.n(I),D=n(62435),u=n(86074),b=function(){var L=(0,D.useState)(0),m=s()(L,2),O=m[0],P=m[1],K=(0,D.useState)([]),_=s()(K,2),Z=_[0],B=_[1];return(0,D.useEffect)(function(){(0,o._V)().then(function(E){P(E)}),(0,o.tD)().then(function(E){B(E)})},[]),(0,u.jsx)(T._z,{children:(0,u.jsxs)(y.Z,{gutter:16,children:[(0,u.jsx)(d.Z,{span:16,children:(0,u.jsx)(S.Z,{type:l.H.Entry})}),(0,u.jsxs)(d.Z,{span:8,children:[(0,u.jsxs)(y.Z,{gutter:16,children:[(0,u.jsx)(d.Z,{span:12,children:(0,u.jsx)(p.Z,{children:(0,u.jsx)(h.Z,{title:"L\u01B0\u1EE3t xem",value:O})})}),(0,u.jsx)(d.Z,{span:12,children:(0,u.jsx)(p.Z,{children:(0,u.jsx)(h.Z,{title:"B\xE0i vi\u1EBFt",value:0})})})]}),(0,u.jsx)(g.Z,{}),(0,u.jsx)(p.Z,{title:"Catalog with statistics",children:(0,u.jsx)(I.PieChart,{angleField:"value",colorField:"label",radius:1,innerRadius:.55,data:Z})})]})]})})};M.default=b},61614:function(V,M,n){n.d(M,{A$:function(){return h},BA:function(){return b},BP:function(){return y},M0:function(){return F},R4:function(){return T},S8:function(){return D},Z9:function(){return $},_V:function(){return O},m_:function(){return x},tD:function(){return f},wu:function(){return G}});var A=n(15009),s=n.n(A),S=n(99289),l=n.n(S),o=n(90905);function T(t){return p.apply(this,arguments)}function p(){return p=l()(s()().mark(function t(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/".concat(a)));case 1:case"end":return e.stop()}},t)})),p.apply(this,arguments)}function y(t){return d.apply(this,arguments)}function d(){return d=l()(s()().mark(function t(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/add",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),d.apply(this,arguments)}function h(t){return g.apply(this,arguments)}function g(){return g=l()(s()().mark(function t(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/list",{method:"GET",params:a}));case 1:case"end":return e.stop()}},t)})),g.apply(this,arguments)}function I(){return R.apply(this,arguments)}function R(){return R=_asyncToGenerator(_regeneratorRuntime().mark(function t(){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/tree"));case 1:case"end":return r.stop()}},t)})),R.apply(this,arguments)}function D(t){return u.apply(this,arguments)}function u(){return u=l()(s()().mark(function t(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/delete/".concat(a),{method:"POST"}));case 1:case"end":return e.stop()}},t)})),u.apply(this,arguments)}function b(t){return j.apply(this,arguments)}function j(){return j=l()(s()().mark(function t(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),j.apply(this,arguments)}function L(t){return m.apply(this,arguments)}function m(){return m=_asyncToGenerator(_regeneratorRuntime().mark(function t(a){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/tree-drop",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),m.apply(this,arguments)}function O(){return P.apply(this,arguments)}function P(){return P=l()(s()().mark(function t(){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/view-count"));case 1:case"end":return r.stop()}},t)})),P.apply(this,arguments)}function K(t){return _.apply(this,arguments)}function _(){return _=_asyncToGenerator(_regeneratorRuntime().mark(function t(a){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/active/".concat(a),{method:"POST"}));case 1:case"end":return e.stop()}},t)})),_.apply(this,arguments)}function Z(t){return B.apply(this,arguments)}function B(){return B=_asyncToGenerator(_regeneratorRuntime().mark(function t(a){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/article/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),B.apply(this,arguments)}function E(t){return v.apply(this,arguments)}function v(){return v=_asyncToGenerator(_regeneratorRuntime().mark(function t(a){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/update-thumbnail",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),v.apply(this,arguments)}function $(){return U.apply(this,arguments)}function U(){return U=l()(s()().mark(function t(){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/types"));case 1:case"end":return r.stop()}},t)})),U.apply(this,arguments)}function x(t){return C.apply(this,arguments)}function C(){return C=l()(s()().mark(function t(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/list-tag/".concat(a)));case 1:case"end":return e.stop()}},t)})),C.apply(this,arguments)}function G(t){return W.apply(this,arguments)}function W(){return W=l()(s()().mark(function t(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/list-tag-select",{params:a}));case 1:case"end":return e.stop()}},t)})),W.apply(this,arguments)}function F(t,a){return w.apply(this,arguments)}function w(){return w=l()(s()().mark(function t(a,r){return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,o.request)("catalog/list-by-tag/".concat(a),{params:r}));case 1:case"end":return i.stop()}},t)})),w.apply(this,arguments)}function f(){return c.apply(this,arguments)}function c(){return c=l()(s()().mark(function t(){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/pie-chart"));case 1:case"end":return r.stop()}},t)})),c.apply(this,arguments)}}}]);
