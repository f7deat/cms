"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3387],{90672:function(W,P,t){var E=t(1413),s=t(91),h=t(86074),u=t(62435),_=t(15790),g=["fieldProps","proFieldProps"],p=function(d,m){var v=d.fieldProps,c=d.proFieldProps,f=(0,s.Z)(d,g);return(0,h.jsx)(_.Z,(0,E.Z)({ref:m,valueType:"textarea",fieldProps:v,proFieldProps:c},f))};P.Z=u.forwardRef(p)},5966:function(W,P,t){var E=t(1413),s=t(91),h=t(86074),u=t(15790),_=["fieldProps","proFieldProps"],g=["fieldProps","proFieldProps"],p="text",R=function(c){var f=c.fieldProps,T=c.proFieldProps,D=(0,s.Z)(c,_);return(0,h.jsx)(u.Z,(0,E.Z)({valueType:p,fieldProps:f,filedConfig:{valueType:p},proFieldProps:T},D))},d=function(c){var f=c.fieldProps,T=c.proFieldProps,D=(0,s.Z)(c,g);return(0,h.jsx)(u.Z,(0,E.Z)({valueType:"password",fieldProps:f,proFieldProps:T,filedConfig:{valueType:p}},D))},m=R;m.Password=d,m.displayName="ProFormComponent",P.Z=m},84299:function(W,P,t){var E=t(97857),s=t.n(E),h=t(15009),u=t.n(h),_=t(99289),g=t.n(_),p=t(5574),R=t.n(p),d=t(55375),m=t(61614),v=t(86548),c=t(48689),f=t(24969),T=t(34545),D=t(99351),K=t(5966),b=t(90672),w=t(90905),C=t(27790),U=t(71577),B=t(86738),Z=t(62435),o=t(86074),N=function(j){var M=(0,Z.useRef)(),F=(0,Z.useState)(!1),A=R()(F,2),$=A[0],y=A[1],x=function(){var O=g()(u()().mark(function i(r){var a,n;return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,m.S8)(r);case 2:a=l.sent,a.succeeded?(C.ZP.success("Deleted"),(n=M.current)===null||n===void 0||n.reload()):C.ZP.error(a.errors[0].description);case 4:case"end":return l.stop()}},i)}));return function(r){return O.apply(this,arguments)}}(),I=function(){switch(j.type){case d.H.Tag:return"catalog/tag";default:return"catalog"}},G=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:"Modified date",dataIndex:"modifiedDate",valueType:"fromNow",search:!1},{title:"View",dataIndex:"viewCount",valueType:"digit",search:!1},{title:"Status",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"",valueType:"option",render:function(i,r){return[(0,o.jsx)(U.Z,{icon:(0,o.jsx)(v.Z,{}),type:"primary",onClick:function(){return w.history.push("/".concat(I(),"/").concat(r.id))}},1),(0,o.jsx)(B.Z,{title:"Are you sure?",onConfirm:function(){return x(r.id)},children:(0,o.jsx)(U.Z,{icon:(0,o.jsx)(c.Z,{}),type:"primary",danger:!0})},2)]}}],S=function(){var O=g()(u()().mark(function i(r){var a,n;return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return r.type=Number(j.type),l.next=3,(0,m.BP)(r);case 3:a=l.sent,a.succeeded&&(C.ZP.success("Added!"),(n=M.current)===null||n===void 0||n.reload(),y(!1));case 5:case"end":return l.stop()}},i)}));return function(r){return O.apply(this,arguments)}}();return(0,o.jsxs)("div",{children:[(0,o.jsx)(T.Z,{rowKey:"id",request:function(i){return(0,m.A$)(s()(s()({},i),{},{type:j.type}))},columns:G,actionRef:M,toolBarRender:function(){return[(0,o.jsxs)(U.Z,{type:"primary",onClick:function(){return y(!0)},children:[(0,o.jsx)(f.Z,{}),(0,o.jsx)(w.FormattedMessage,{id:"general.new"})]},"new")]}}),(0,o.jsxs)(D.Y,{open:$,onOpenChange:y,onFinish:S,title:"Th\xEAm m\u1EDBi ".concat(j.type),children:[(0,o.jsx)(K.Z,{name:"name",label:"Name",rules:[{required:!0}]}),(0,o.jsx)(b.Z,{label:"Description",name:"description"})]})]})};P.Z=N},26884:function(W,P,t){t.r(P);var E=t(84299),s=t(55375),h=t(62884),u=t(86074),_=function(){return(0,u.jsx)(h._z,{children:(0,u.jsx)(E.Z,{type:s.H.Default})})};P.default=_},61614:function(W,P,t){t.d(P,{A$:function(){return m},BA:function(){return K},BP:function(){return R},M0:function(){return G},R4:function(){return g},S8:function(){return T},Z9:function(){return F},_V:function(){return U},m_:function(){return $},r5:function(){return j},tD:function(){return O},wu:function(){return x}});var E=t(15009),s=t.n(E),h=t(99289),u=t.n(h),_=t(90905);function g(r){return p.apply(this,arguments)}function p(){return p=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/".concat(a)));case 1:case"end":return e.stop()}},r)})),p.apply(this,arguments)}function R(r){return d.apply(this,arguments)}function d(){return d=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/add",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),d.apply(this,arguments)}function m(r){return v.apply(this,arguments)}function v(){return v=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/list",{method:"GET",params:a}));case 1:case"end":return e.stop()}},r)})),v.apply(this,arguments)}function c(){return f.apply(this,arguments)}function f(){return f=_asyncToGenerator(_regeneratorRuntime().mark(function r(){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("catalog/tree"));case 1:case"end":return n.stop()}},r)})),f.apply(this,arguments)}function T(r){return D.apply(this,arguments)}function D(){return D=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/delete/".concat(a),{method:"POST"}));case 1:case"end":return e.stop()}},r)})),D.apply(this,arguments)}function K(r){return b.apply(this,arguments)}function b(){return b=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),b.apply(this,arguments)}function w(r){return C.apply(this,arguments)}function C(){return C=_asyncToGenerator(_regeneratorRuntime().mark(function r(a){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/tree-drop",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),C.apply(this,arguments)}function U(){return B.apply(this,arguments)}function B(){return B=u()(s()().mark(function r(){return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,_.request)("catalog/view-count"));case 1:case"end":return n.stop()}},r)})),B.apply(this,arguments)}function Z(r){return o.apply(this,arguments)}function o(){return o=_asyncToGenerator(_regeneratorRuntime().mark(function r(a){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/active/".concat(a),{method:"POST"}));case 1:case"end":return e.stop()}},r)})),o.apply(this,arguments)}function N(r){return L.apply(this,arguments)}function L(){return L=_asyncToGenerator(_regeneratorRuntime().mark(function r(a){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/article/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),L.apply(this,arguments)}function j(r){return M.apply(this,arguments)}function M(){return M=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/update-thumbnail",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),M.apply(this,arguments)}function F(){return A.apply(this,arguments)}function A(){return A=u()(s()().mark(function r(){return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,_.request)("catalog/types"));case 1:case"end":return n.stop()}},r)})),A.apply(this,arguments)}function $(r){return y.apply(this,arguments)}function y(){return y=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/list-tag/".concat(a)));case 1:case"end":return e.stop()}},r)})),y.apply(this,arguments)}function x(r){return I.apply(this,arguments)}function I(){return I=u()(s()().mark(function r(a){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/list-tag-select",{params:a}));case 1:case"end":return e.stop()}},r)})),I.apply(this,arguments)}function G(r,a){return S.apply(this,arguments)}function S(){return S=u()(s()().mark(function r(a,n){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,_.request)("catalog/list-by-tag/".concat(a),{params:n}));case 1:case"end":return l.stop()}},r)})),S.apply(this,arguments)}function O(){return i.apply(this,arguments)}function i(){return i=u()(s()().mark(function r(){return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,_.request)("catalog/pie-chart"));case 1:case"end":return n.stop()}},r)})),i.apply(this,arguments)}}}]);
