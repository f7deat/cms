"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4299],{47389:function(F,P,r){var i=r(1413),n=r(62435),f=r(27363),u=r(91146),o=function(m,g){return n.createElement(u.Z,(0,i.Z)((0,i.Z)({},m),{},{ref:g,icon:f.Z}))};o.displayName="EditOutlined",P.Z=n.forwardRef(o)},64317:function(F,P,r){var i=r(1413),n=r(91),f=r(22270),u=r(62435),o=r(66758),p=r(96987),m=r(86074),g=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],E=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],I=u.forwardRef(function(l,T){var A=l.fieldProps,S=l.children,y=l.params,B=l.proFieldProps,C=l.mode,x=l.valueEnum,b=l.request,_=l.showSearch,j=l.options,$=(0,n.Z)(l,g),R=(0,u.useContext)(o.Z);return(0,m.jsx)(p.Z,(0,i.Z)((0,i.Z)({valueEnum:(0,f.h)(x),request:b,params:y,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,i.Z)({options:j,mode:C,showSearch:_,getPopupContainer:R.getPopupContainer},A),ref:T,proFieldProps:B},$),{},{children:S}))}),d=u.forwardRef(function(l,T){var A=l.fieldProps,S=l.children,y=l.params,B=l.proFieldProps,C=l.mode,x=l.valueEnum,b=l.request,_=l.options,j=(0,n.Z)(l,E),$=(0,i.Z)({options:_,mode:C||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},A),R=(0,u.useContext)(o.Z);return(0,m.jsx)(p.Z,(0,i.Z)((0,i.Z)({valueEnum:(0,f.h)(x),request:b,params:y,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,i.Z)({getPopupContainer:R.getPopupContainer},$),ref:T,proFieldProps:B},j),{},{children:S}))}),K=I,c=d,M=K;M.SearchSelect=c,M.displayName="ProFormComponent",P.Z=M},90672:function(F,P,r){var i=r(1413),n=r(91),f=r(62435),u=r(96987),o=r(86074),p=["fieldProps","proFieldProps"],m=function(E,I){var d=E.fieldProps,K=E.proFieldProps,c=(0,n.Z)(E,p);return(0,o.jsx)(u.Z,(0,i.Z)({ref:I,valueType:"textarea",fieldProps:d,proFieldProps:K},c))};P.Z=f.forwardRef(m)},5966:function(F,P,r){var i=r(1413),n=r(91),f=r(62435),u=r(96987),o=r(86074),p=["fieldProps","proFieldProps"],m=["fieldProps","proFieldProps"],g="text",E=function(c){var M=c.fieldProps,l=c.proFieldProps,T=(0,n.Z)(c,p);return(0,o.jsx)(u.Z,(0,i.Z)({valueType:g,fieldProps:M,filedConfig:{valueType:g},proFieldProps:l},T))},I=function(c){var M=c.fieldProps,l=c.proFieldProps,T=(0,n.Z)(c,m);return(0,o.jsx)(u.Z,(0,i.Z)({valueType:"password",fieldProps:M,proFieldProps:l,filedConfig:{valueType:g}},T))},d=E;d.Password=I,d.displayName="ProFormComponent",P.Z=d},84299:function(F,P,r){var i=r(97857),n=r.n(i),f=r(15009),u=r.n(f),o=r(99289),p=r.n(o),m=r(5574),g=r.n(m),E=r(84697),I=r(55375),d=r(12361),K=r(47389),c=r(82061),M=r(51042),l=r(56355),T=r(37476),A=r(5966),S=r(90672),y=r(35312),B=r(58301),C=r(71577),x=r(86738),b=r(62435),_=r(86074),j=function(R){var Y=(0,y.useIntl)(),U=(0,b.useRef)(),z=(0,b.useState)(!1),G=g()(z,2),J=G[0],Z=G[1],Q=function(){var w=p()(u()().mark(function h(D){var O,L;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,d.S8)(D);case 2:O=v.sent,O.succeeded?(B.ZP.success("Deleted"),(L=U.current)===null||L===void 0||L.reload()):B.ZP.error(O.errors[0].description);case 4:case"end":return v.stop()}},h)}));return function(D){return w.apply(this,arguments)}}(),V=function(){switch(R.type){case I.H.Tag:return"catalog/tag";default:return"catalog"}},X=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:"Modified date",dataIndex:"modifiedDate",valueType:"fromNow",search:!1},{title:"View",dataIndex:"viewCount",valueType:"digit",search:!1},{title:"Status",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"",valueType:"option",render:function(h,D){return[(0,_.jsx)(C.ZP,{icon:(0,_.jsx)(K.Z,{}),type:"primary",onClick:function(){return y.history.push("/".concat(V(),"/").concat(D.id))}},1),(0,_.jsx)(x.Z,{title:"Are you sure?",onConfirm:function(){return Q(D.id)},children:(0,_.jsx)(C.ZP,{icon:(0,_.jsx)(c.Z,{}),type:"primary",danger:!0})},2)]}}],N=function(){var w=p()(u()().mark(function h(D){var O,L;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return D.type=Number(D.type),v.next=3,(0,d.BP)(D);case 3:O=v.sent,O.succeeded&&(B.ZP.success("Added!"),(L=U.current)===null||L===void 0||L.reload(),Z(!1));case 5:case"end":return v.stop()}},h)}));return function(D){return w.apply(this,arguments)}}();return(0,_.jsxs)("div",{children:[(0,_.jsx)(l.Z,{rowSelection:{},rowKey:"id",request:function(h){return(0,d.A$)(n()(n()({},h),{},{type:R.type}))},search:{layout:"vertical"},columns:X,actionRef:U,toolBarRender:function(){return[(0,_.jsx)(C.ZP,{type:"primary",onClick:function(){return Z(!0)},icon:(0,_.jsx)(M.Z,{}),children:(0,_.jsx)("span",{children:(0,_.jsx)(y.FormattedMessage,{id:"general.new"})})},"new")]}}),(0,_.jsxs)(T.Y,{open:J,onOpenChange:Z,onFinish:N,title:Y.formatMessage({id:"general.new"}),children:[(0,_.jsx)(A.Z,{name:"name",label:"Name",rules:[{required:!0}]}),(0,_.jsx)(E.Z,{label:"Type",name:"type",initialValue:"".concat(R.type)}),(0,_.jsx)(S.Z,{label:"Description",name:"description"})]})]})};P.Z=j},84697:function(F,P,r){var i=r(12361),n=r(64317),f=r(86074),u=function(p){return(0,f.jsx)(n.Z,{request:i.Z9,label:p.label,name:p.name,initialValue:p.initialValue,rules:[{required:!0}]})};P.Z=u},12361:function(F,P,r){r.d(P,{A$:function(){return I},BA:function(){return T},BP:function(){return g},K9:function(){return ee},M0:function(){return J},NU:function(){return w},R4:function(){return p},S8:function(){return M},U4:function(){return D},Z9:function(){return $},_V:function(){return B},gg:function(){return L},kn:function(){return X},lI:function(){return v},m_:function(){return Y},tD:function(){return Q},wu:function(){return z}});var i=r(15009),n=r.n(i),f=r(99289),u=r.n(f),o=r(35312);function p(t){return m.apply(this,arguments)}function m(){return m=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/".concat(a)));case 1:case"end":return e.stop()}},t)})),m.apply(this,arguments)}function g(t){return E.apply(this,arguments)}function E(){return E=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/add",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),E.apply(this,arguments)}function I(t){return d.apply(this,arguments)}function d(){return d=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/list",{method:"GET",params:a}));case 1:case"end":return e.stop()}},t)})),d.apply(this,arguments)}function K(){return c.apply(this,arguments)}function c(){return c=_asyncToGenerator(_regeneratorRuntime().mark(function t(){return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("catalog/tree"));case 1:case"end":return s.stop()}},t)})),c.apply(this,arguments)}function M(t){return l.apply(this,arguments)}function l(){return l=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/delete/".concat(a),{method:"POST"}));case 1:case"end":return e.stop()}},t)})),l.apply(this,arguments)}function T(t){return A.apply(this,arguments)}function A(){return A=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),A.apply(this,arguments)}function S(t){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime().mark(function t(a){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/tree-drop",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),y.apply(this,arguments)}function B(){return C.apply(this,arguments)}function C(){return C=u()(n()().mark(function t(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,o.request)("catalog/view-count"));case 1:case"end":return s.stop()}},t)})),C.apply(this,arguments)}function x(t){return b.apply(this,arguments)}function b(){return b=_asyncToGenerator(_regeneratorRuntime().mark(function t(a){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/active/".concat(a),{method:"POST"}));case 1:case"end":return e.stop()}},t)})),b.apply(this,arguments)}function _(t){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime().mark(function t(a){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/update-thumbnail",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),j.apply(this,arguments)}function $(){return R.apply(this,arguments)}function R(){return R=u()(n()().mark(function t(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,o.request)("catalog/types"));case 1:case"end":return s.stop()}},t)})),R.apply(this,arguments)}function Y(t){return U.apply(this,arguments)}function U(){return U=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/list-tag/".concat(a)));case 1:case"end":return e.stop()}},t)})),U.apply(this,arguments)}function z(t){return G.apply(this,arguments)}function G(){return G=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("catalog/list-tag-select",{params:a}));case 1:case"end":return e.stop()}},t)})),G.apply(this,arguments)}function J(t,a){return Z.apply(this,arguments)}function Z(){return Z=u()(n()().mark(function t(a,s){return n()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.abrupt("return",(0,o.request)("catalog/list-by-tag/".concat(a),{params:s}));case 1:case"end":return W.stop()}},t)})),Z.apply(this,arguments)}function Q(){return V.apply(this,arguments)}function V(){return V=u()(n()().mark(function t(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,o.request)("catalog/pie-chart"));case 1:case"end":return s.stop()}},t)})),V.apply(this,arguments)}function X(t,a){return N.apply(this,arguments)}function N(){return N=u()(n()().mark(function t(a,s){return n()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.abrupt("return",(0,o.request)("/product/image/save",{method:"POST",data:{urls:a,catalogId:s}}));case 1:case"end":return W.stop()}},t)})),N.apply(this,arguments)}function w(t){return h.apply(this,arguments)}function h(){return h=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/product/image/".concat(a)));case 1:case"end":return e.stop()}},t)})),h.apply(this,arguments)}function D(t){return O.apply(this,arguments)}function O(){return O=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/catalog/form-select",{params:a}));case 1:case"end":return e.stop()}},t)})),O.apply(this,arguments)}function L(t){return H.apply(this,arguments)}function H(){return H=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/product/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),H.apply(this,arguments)}function v(t){return q.apply(this,arguments)}function q(){return q=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/product/".concat(a)));case 1:case"end":return e.stop()}},t)})),q.apply(this,arguments)}function ee(t){return k.apply(this,arguments)}function k(){return k=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/product/brand/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),k.apply(this,arguments)}}}]);
