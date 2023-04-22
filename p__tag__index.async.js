"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3858],{90672:function(S,P,t){var E=t(1413),s=t(91),h=t(86074),u=t(62435),_=t(15790),g=["fieldProps","proFieldProps"],c=function(p,d){var v=p.fieldProps,l=p.proFieldProps,m=(0,s.Z)(p,g);return(0,h.jsx)(_.Z,(0,E.Z)({ref:d,valueType:"textarea",fieldProps:v,proFieldProps:l},m))};P.Z=u.forwardRef(c)},5966:function(S,P,t){var E=t(1413),s=t(91),h=t(86074),u=t(15790),_=["fieldProps","proFieldProps"],g=["fieldProps","proFieldProps"],c="text",y=function(l){var m=l.fieldProps,D=l.proFieldProps,O=(0,s.Z)(l,_);return(0,h.jsx)(u.Z,(0,E.Z)({valueType:c,fieldProps:m,filedConfig:{valueType:c},proFieldProps:D},O))},p=function(l){var m=l.fieldProps,D=l.proFieldProps,O=(0,s.Z)(l,g);return(0,h.jsx)(u.Z,(0,E.Z)({valueType:"password",fieldProps:m,proFieldProps:D,filedConfig:{valueType:c}},O))},d=y;d.Password=p,d.displayName="ProFormComponent",P.Z=d},84299:function(S,P,t){var E=t(97857),s=t.n(E),h=t(15009),u=t.n(h),_=t(99289),g=t.n(_),c=t(5574),y=t.n(c),p=t(55375),d=t(61614),v=t(86548),l=t(48689),m=t(24969),D=t(34545),O=t(99351),L=t(5966),A=t(90672),K=t(90905),T=t(27790),U=t(71577),b=t(86738),w=t(62435),o=t(86074),G=function(R){var M=(0,w.useRef)(),Z=(0,w.useState)(!1),j=y()(Z,2),F=j[0],C=j[1],x=function(){var r=g()(u()().mark(function n(a){var e,i;return u()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,d.S8)(a);case 2:e=f.sent,e.succeeded?(T.ZP.success("Deleted"),(i=M.current)===null||i===void 0||i.reload()):T.ZP.error(e.errors[0].description);case 4:case"end":return f.stop()}},n)}));return function(a){return r.apply(this,arguments)}}(),B=function(){switch(R.type){case p.H.Tag:return"catalog/tag";default:return"catalog"}},$=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:"Modified date",dataIndex:"modifiedDate",valueType:"fromNow",search:!1},{title:"View",dataIndex:"viewCount",valueType:"digit",search:!1},{title:"Status",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"",valueType:"option",render:function(n,a){return[(0,o.jsx)(U.Z,{icon:(0,o.jsx)(v.Z,{}),type:"primary",onClick:function(){return K.history.push("/".concat(B(),"/").concat(a.id))}},1),(0,o.jsx)(b.Z,{title:"Are you sure?",onConfirm:function(){return x(a.id)},children:(0,o.jsx)(U.Z,{icon:(0,o.jsx)(l.Z,{}),type:"primary",danger:!0})},2)]}}],I=function(){var r=g()(u()().mark(function n(a){var e,i;return u()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return a.type=Number(R.type),f.next=3,(0,d.BP)(a);case 3:e=f.sent,e.succeeded&&(T.ZP.success("Added!"),(i=M.current)===null||i===void 0||i.reload(),C(!1));case 5:case"end":return f.stop()}},n)}));return function(a){return r.apply(this,arguments)}}();return(0,o.jsxs)("div",{children:[(0,o.jsx)(D.Z,{rowKey:"id",request:function(n){return(0,d.A$)(s()(s()({},n),{},{type:R.type}))},columns:$,actionRef:M,toolBarRender:function(){return[(0,o.jsxs)(U.Z,{type:"primary",onClick:function(){return C(!0)},children:[(0,o.jsx)(m.Z,{}),(0,o.jsx)(K.FormattedMessage,{id:"general.new"})]},"new")]}}),(0,o.jsxs)(O.Y,{open:F,onOpenChange:C,onFinish:I,title:"Th\xEAm m\u1EDBi ".concat(R.type),children:[(0,o.jsx)(L.Z,{name:"name",label:"Name",rules:[{required:!0}]}),(0,o.jsx)(A.Z,{label:"Description",name:"description"})]})]})};P.Z=G},96732:function(S,P,t){t.r(P);var E=t(84299),s=t(55375),h=t(62884),u=t(86074),_=function(){return(0,u.jsx)(h._z,{children:(0,u.jsx)(E.Z,{type:s.H.Tag})})};P.default=_},61614:function(S,P,t){t.d(P,{A$:function(){return d},BA:function(){return L},BP:function(){return y},M0:function(){return $},R4:function(){return g},S8:function(){return D},Z9:function(){return Z},_V:function(){return U},m_:function(){return F},r5:function(){return R},wu:function(){return x}});var E=t(15009),s=t.n(E),h=t(99289),u=t.n(h),_=t(90905);function g(r){return c.apply(this,arguments)}function c(){return c=u()(s()().mark(function r(n){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/".concat(n)));case 1:case"end":return e.stop()}},r)})),c.apply(this,arguments)}function y(r){return p.apply(this,arguments)}function p(){return p=u()(s()().mark(function r(n){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/add",{method:"POST",data:n}));case 1:case"end":return e.stop()}},r)})),p.apply(this,arguments)}function d(r){return v.apply(this,arguments)}function v(){return v=u()(s()().mark(function r(n){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/list",{method:"GET",params:n}));case 1:case"end":return e.stop()}},r)})),v.apply(this,arguments)}function l(){return m.apply(this,arguments)}function m(){return m=_asyncToGenerator(_regeneratorRuntime().mark(function r(){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("catalog/tree"));case 1:case"end":return a.stop()}},r)})),m.apply(this,arguments)}function D(r){return O.apply(this,arguments)}function O(){return O=u()(s()().mark(function r(n){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/delete/".concat(n),{method:"POST"}));case 1:case"end":return e.stop()}},r)})),O.apply(this,arguments)}function L(r){return A.apply(this,arguments)}function A(){return A=u()(s()().mark(function r(n){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/save",{method:"POST",data:n}));case 1:case"end":return e.stop()}},r)})),A.apply(this,arguments)}function K(r){return T.apply(this,arguments)}function T(){return T=_asyncToGenerator(_regeneratorRuntime().mark(function r(n){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/tree-drop",{method:"POST",data:n}));case 1:case"end":return e.stop()}},r)})),T.apply(this,arguments)}function U(){return b.apply(this,arguments)}function b(){return b=u()(s()().mark(function r(){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,_.request)("catalog/view-count"));case 1:case"end":return a.stop()}},r)})),b.apply(this,arguments)}function w(r){return o.apply(this,arguments)}function o(){return o=_asyncToGenerator(_regeneratorRuntime().mark(function r(n){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/active/".concat(n),{method:"POST"}));case 1:case"end":return e.stop()}},r)})),o.apply(this,arguments)}function G(r){return W.apply(this,arguments)}function W(){return W=_asyncToGenerator(_regeneratorRuntime().mark(function r(n){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/article/save",{method:"POST",data:n}));case 1:case"end":return e.stop()}},r)})),W.apply(this,arguments)}function R(r){return M.apply(this,arguments)}function M(){return M=u()(s()().mark(function r(n){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/update-thumbnail",{method:"POST",data:n}));case 1:case"end":return e.stop()}},r)})),M.apply(this,arguments)}function Z(){return j.apply(this,arguments)}function j(){return j=u()(s()().mark(function r(){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,_.request)("catalog/types"));case 1:case"end":return a.stop()}},r)})),j.apply(this,arguments)}function F(r){return C.apply(this,arguments)}function C(){return C=u()(s()().mark(function r(n){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/list-tag/".concat(n)));case 1:case"end":return e.stop()}},r)})),C.apply(this,arguments)}function x(r){return B.apply(this,arguments)}function B(){return B=u()(s()().mark(function r(n){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.request)("catalog/list-tag-select",{params:n}));case 1:case"end":return e.stop()}},r)})),B.apply(this,arguments)}function $(r,n){return I.apply(this,arguments)}function I(){return I=u()(s()().mark(function r(n,a){return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,_.request)("catalog/list-by-tag/".concat(n),{params:a}));case 1:case"end":return i.stop()}},r)})),I.apply(this,arguments)}}}]);
