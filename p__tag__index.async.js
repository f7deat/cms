"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3858],{82061:function(R,i,e){var l=e(1413),n=e(62435),c=e(47046),_=e(91146),u=function(m,E){return n.createElement(_.Z,(0,l.Z)((0,l.Z)({},m),{},{ref:E,icon:c.Z}))};u.displayName="DeleteOutlined",i.Z=n.forwardRef(u)},47389:function(R,i,e){var l=e(1413),n=e(62435),c=e(27363),_=e(91146),u=function(m,E){return n.createElement(_.Z,(0,l.Z)((0,l.Z)({},m),{},{ref:E,icon:c.Z}))};u.displayName="EditOutlined",i.Z=n.forwardRef(u)},51042:function(R,i,e){var l=e(1413),n=e(62435),c=e(42110),_=e(91146),u=function(m,E){return n.createElement(_.Z,(0,l.Z)((0,l.Z)({},m),{},{ref:E,icon:c.Z}))};u.displayName="PlusOutlined",i.Z=n.forwardRef(u)},64317:function(R,i,e){var l=e(1413),n=e(91),c=e(22270),_=e(62435),u=e(66758),d=e(19617),m=e(86074),E=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],v=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],A=_.forwardRef(function(o,O){var I=o.fieldProps,U=o.children,g=o.params,B=o.proFieldProps,M=o.mode,b=o.valueEnum,y=o.request,p=o.showSearch,L=o.options,F=(0,n.Z)(o,E),T=(0,_.useContext)(u.Z);return(0,m.jsx)(d.Z,(0,l.Z)((0,l.Z)({valueEnum:(0,c.h)(b),request:y,params:g,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,l.Z)({options:L,mode:M,showSearch:p,getPopupContainer:T.getPopupContainer},I),ref:O,proFieldProps:B},F),{},{children:U}))}),f=_.forwardRef(function(o,O){var I=o.fieldProps,U=o.children,g=o.params,B=o.proFieldProps,M=o.mode,b=o.valueEnum,y=o.request,p=o.options,L=(0,n.Z)(o,v),F=(0,l.Z)({options:p,mode:M||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},I),T=(0,_.useContext)(u.Z);return(0,m.jsx)(d.Z,(0,l.Z)((0,l.Z)({valueEnum:(0,c.h)(b),request:y,params:g,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,l.Z)({getPopupContainer:T.getPopupContainer},F),ref:O,proFieldProps:B},L),{},{children:U}))}),W=A,P=f,h=W;h.SearchSelect=P,h.displayName="ProFormComponent",i.Z=h},90672:function(R,i,e){var l=e(1413),n=e(91),c=e(62435),_=e(19617),u=e(86074),d=["fieldProps","proFieldProps"],m=function(v,A){var f=v.fieldProps,W=v.proFieldProps,P=(0,n.Z)(v,d);return(0,u.jsx)(_.Z,(0,l.Z)({ref:A,valueType:"textarea",fieldProps:f,proFieldProps:W},P))};i.Z=c.forwardRef(m)},5966:function(R,i,e){var l=e(1413),n=e(91),c=e(62435),_=e(19617),u=e(86074),d=["fieldProps","proFieldProps"],m=["fieldProps","proFieldProps"],E="text",v=function(P){var h=P.fieldProps,o=P.proFieldProps,O=(0,n.Z)(P,d);return(0,u.jsx)(_.Z,(0,l.Z)({valueType:E,fieldProps:h,filedConfig:{valueType:E},proFieldProps:o},O))},A=function(P){var h=P.fieldProps,o=P.proFieldProps,O=(0,n.Z)(P,m);return(0,u.jsx)(_.Z,(0,l.Z)({valueType:"password",fieldProps:h,proFieldProps:o,filedConfig:{valueType:E}},O))},f=v;f.Password=A,f.displayName="ProFormComponent",i.Z=f},84299:function(R,i,e){var l=e(97857),n=e.n(l),c=e(15009),_=e.n(c),u=e(99289),d=e.n(u),m=e(5574),E=e.n(m),v=e(84697),A=e(55375),f=e(12361),W=e(47389),P=e(82061),h=e(51042),o=e(88518),O=e(93933),I=e(5966),U=e(90672),g=e(35312),B=e(27790),M=e(71577),b=e(86738),y=e(62435),p=e(86074),L=function(T){var x=(0,g.useIntl)(),K=(0,y.useRef)(),$=(0,y.useState)(!1),Z=E()($,2),G=Z[0],j=Z[1],N=function(){var t=d()(_()().mark(function s(a){var r,D;return _()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(0,f.S8)(a);case 2:r=C.sent,r.succeeded?(B.ZP.success("Deleted"),(D=K.current)===null||D===void 0||D.reload()):B.ZP.error(r.errors[0].description);case 4:case"end":return C.stop()}},s)}));return function(a){return t.apply(this,arguments)}}(),S=function(){switch(T.type){case A.H.Tag:return"catalog/tag";default:return"catalog"}},V=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:"Modified date",dataIndex:"modifiedDate",valueType:"fromNow",search:!1},{title:"View",dataIndex:"viewCount",valueType:"digit",search:!1},{title:"Status",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"",valueType:"option",render:function(s,a){return[(0,p.jsx)(M.ZP,{icon:(0,p.jsx)(W.Z,{}),type:"primary",onClick:function(){return g.history.push("/".concat(S(),"/").concat(a.id))}},1),(0,p.jsx)(b.Z,{title:"Are you sure?",onConfirm:function(){return N(a.id)},children:(0,p.jsx)(M.ZP,{icon:(0,p.jsx)(P.Z,{}),type:"primary",danger:!0})},2)]}}],w=function(){var t=d()(_()().mark(function s(a){var r,D;return _()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return a.type=Number(a.type),C.next=3,(0,f.BP)(a);case 3:r=C.sent,r.succeeded&&(B.ZP.success("Added!"),(D=K.current)===null||D===void 0||D.reload(),j(!1));case 5:case"end":return C.stop()}},s)}));return function(a){return t.apply(this,arguments)}}();return(0,p.jsxs)("div",{children:[(0,p.jsx)(o.Z,{rowKey:"id",request:function(s){return(0,f.A$)(n()(n()({},s),{},{type:T.type}))},columns:V,actionRef:K,toolBarRender:function(){return[(0,p.jsxs)(M.ZP,{type:"primary",onClick:function(){return j(!0)},children:[(0,p.jsx)(h.Z,{}),(0,p.jsx)(g.FormattedMessage,{id:"general.new"})]},"new")]}}),(0,p.jsxs)(O.Y,{open:G,onOpenChange:j,onFinish:w,title:x.formatMessage({id:"general.new"}),children:[(0,p.jsx)(I.Z,{name:"name",label:"Name",rules:[{required:!0}]}),(0,p.jsx)(v.Z,{label:"Type",name:"type",initialValue:"".concat(T.type)}),(0,p.jsx)(U.Z,{label:"Description",name:"description"})]})]})};i.Z=L},84697:function(R,i,e){var l=e(12361),n=e(64317),c=e(86074),_=function(d){return(0,c.jsx)(n.Z,{request:l.Z9,label:d.label,name:d.name,initialValue:d.initialValue,rules:[{required:!0}]})};i.Z=_},95160:function(R,i,e){e.r(i);var l=e(84299),n=e(55375),c=e(63386),_=e(86074),u=function(){return(0,_.jsx)(c._z,{children:(0,_.jsx)(l.Z,{type:n.H.Tag})})};i.default=u},12361:function(R,i,e){e.d(i,{A$:function(){return A},BA:function(){return O},BP:function(){return E},M0:function(){return N},R4:function(){return d},S8:function(){return h},Z9:function(){return x},_V:function(){return B},m_:function(){return $},tD:function(){return V},wu:function(){return G}});var l=e(15009),n=e.n(l),c=e(99289),_=e.n(c),u=e(35312);function d(t){return m.apply(this,arguments)}function m(){return m=_()(n()().mark(function t(s){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,u.request)("catalog/".concat(s)));case 1:case"end":return r.stop()}},t)})),m.apply(this,arguments)}function E(t){return v.apply(this,arguments)}function v(){return v=_()(n()().mark(function t(s){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,u.request)("catalog/add",{method:"POST",data:s}));case 1:case"end":return r.stop()}},t)})),v.apply(this,arguments)}function A(t){return f.apply(this,arguments)}function f(){return f=_()(n()().mark(function t(s){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,u.request)("catalog/list",{method:"GET",params:s}));case 1:case"end":return r.stop()}},t)})),f.apply(this,arguments)}function W(){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function t(){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("catalog/tree"));case 1:case"end":return a.stop()}},t)})),P.apply(this,arguments)}function h(t){return o.apply(this,arguments)}function o(){return o=_()(n()().mark(function t(s){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,u.request)("catalog/delete/".concat(s),{method:"POST"}));case 1:case"end":return r.stop()}},t)})),o.apply(this,arguments)}function O(t){return I.apply(this,arguments)}function I(){return I=_()(n()().mark(function t(s){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,u.request)("catalog/save",{method:"POST",data:s}));case 1:case"end":return r.stop()}},t)})),I.apply(this,arguments)}function U(t){return g.apply(this,arguments)}function g(){return g=_asyncToGenerator(_regeneratorRuntime().mark(function t(s){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/tree-drop",{method:"POST",data:s}));case 1:case"end":return r.stop()}},t)})),g.apply(this,arguments)}function B(){return M.apply(this,arguments)}function M(){return M=_()(n()().mark(function t(){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.request)("catalog/view-count"));case 1:case"end":return a.stop()}},t)})),M.apply(this,arguments)}function b(t){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime().mark(function t(s){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/active/".concat(s),{method:"POST"}));case 1:case"end":return r.stop()}},t)})),y.apply(this,arguments)}function p(t){return L.apply(this,arguments)}function L(){return L=_asyncToGenerator(_regeneratorRuntime().mark(function t(s){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/article/save",{method:"POST",data:s}));case 1:case"end":return r.stop()}},t)})),L.apply(this,arguments)}function F(t){return T.apply(this,arguments)}function T(){return T=_asyncToGenerator(_regeneratorRuntime().mark(function t(s){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/update-thumbnail",{method:"POST",data:s}));case 1:case"end":return r.stop()}},t)})),T.apply(this,arguments)}function x(){return K.apply(this,arguments)}function K(){return K=_()(n()().mark(function t(){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.request)("catalog/types"));case 1:case"end":return a.stop()}},t)})),K.apply(this,arguments)}function $(t){return Z.apply(this,arguments)}function Z(){return Z=_()(n()().mark(function t(s){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,u.request)("catalog/list-tag/".concat(s)));case 1:case"end":return r.stop()}},t)})),Z.apply(this,arguments)}function G(t){return j.apply(this,arguments)}function j(){return j=_()(n()().mark(function t(s){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,u.request)("catalog/list-tag-select",{params:s}));case 1:case"end":return r.stop()}},t)})),j.apply(this,arguments)}function N(t,s){return S.apply(this,arguments)}function S(){return S=_()(n()().mark(function t(s,a){return n()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,u.request)("catalog/list-by-tag/".concat(s),{params:a}));case 1:case"end":return D.stop()}},t)})),S.apply(this,arguments)}function V(){return w.apply(this,arguments)}function w(){return w=_()(n()().mark(function t(){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.request)("catalog/pie-chart"));case 1:case"end":return a.stop()}},t)})),w.apply(this,arguments)}}}]);
