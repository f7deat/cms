"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4299],{47389:function(S,E,r){var l=r(1413),c=r(62435),v=r(27363),n=r(91146),d=function(p,u){return c.createElement(n.Z,(0,l.Z)((0,l.Z)({},p),{},{ref:u,icon:v.Z}))};d.displayName="EditOutlined",E.Z=c.forwardRef(d)},64317:function(S,E,r){var l=r(1413),c=r(91),v=r(22270),n=r(62435),d=r(66758),o=r(96987),p=r(86074),u=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],M=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],T=n.forwardRef(function(i,O){var L=i.fieldProps,I=i.children,B=i.params,y=i.proFieldProps,W=i.mode,w=i.valueEnum,U=i.request,_=i.showSearch,F=i.options,K=(0,c.Z)(i,u),Z=(0,n.useContext)(d.Z);return(0,p.jsx)(o.Z,(0,l.Z)((0,l.Z)({valueEnum:(0,v.h)(w),request:U,params:B,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,l.Z)({options:F,mode:W,showSearch:_,getPopupContainer:Z.getPopupContainer},L),ref:O,proFieldProps:y},K),{},{children:I}))}),g=n.forwardRef(function(i,O){var L=i.fieldProps,I=i.children,B=i.params,y=i.proFieldProps,W=i.mode,w=i.valueEnum,U=i.request,_=i.options,F=(0,c.Z)(i,M),K=(0,l.Z)({options:_,mode:W||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},L),Z=(0,n.useContext)(d.Z);return(0,p.jsx)(o.Z,(0,l.Z)((0,l.Z)({valueEnum:(0,v.h)(w),request:U,params:B,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,l.Z)({getPopupContainer:Z.getPopupContainer},K),ref:O,proFieldProps:y},F),{},{children:I}))}),C=T,P=g,D=C;D.SearchSelect=P,D.displayName="ProFormComponent",E.Z=D},90672:function(S,E,r){var l=r(1413),c=r(91),v=r(62435),n=r(96987),d=r(86074),o=["fieldProps","proFieldProps"],p=function(M,T){var g=M.fieldProps,C=M.proFieldProps,P=(0,c.Z)(M,o);return(0,d.jsx)(n.Z,(0,l.Z)({ref:T,valueType:"textarea",fieldProps:g,proFieldProps:C},P))};E.Z=v.forwardRef(p)},5966:function(S,E,r){var l=r(1413),c=r(91),v=r(62435),n=r(96987),d=r(86074),o=["fieldProps","proFieldProps"],p=["fieldProps","proFieldProps"],u="text",M=function(P){var D=P.fieldProps,i=P.proFieldProps,O=(0,c.Z)(P,o);return(0,d.jsx)(n.Z,(0,l.Z)({valueType:u,fieldProps:D,filedConfig:{valueType:u},proFieldProps:i},O))},T=function(P){var D=P.fieldProps,i=P.proFieldProps,O=(0,c.Z)(P,p);return(0,d.jsx)(n.Z,(0,l.Z)({valueType:"password",fieldProps:D,proFieldProps:i,filedConfig:{valueType:u}},O))},g=M;g.Password=T,g.displayName="ProFormComponent",E.Z=g},84299:function(S,E,r){var l=r(97857),c=r.n(l),v=r(15009),n=r.n(v),d=r(99289),o=r.n(d),p=r(5574),u=r.n(p),M=r(84697),T=r(55375),g=r(12361),C=r(47389),P=r(82061),D=r(51042),i=r(56355),O=r(37476),L=r(5966),I=r(90672),B=r(35312),y=r(58301),W=r(71577),w=r(86738),U=r(62435),_=r(86074),F=function(Z){var x=(0,B.useIntl)(),$=(0,U.useRef)(),V=(0,U.useState)(!1),Q=u()(V,2),G=Q[0],N=Q[1],z=function(){var b=o()(n()().mark(function R(m){var j,A;return n()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,g.S8)(m);case 2:j=f.sent,j.succeeded?(y.ZP.success("Deleted"),(A=$.current)===null||A===void 0||A.reload()):y.ZP.error(j.errors[0].description);case 4:case"end":return f.stop()}},R)}));return function(m){return b.apply(this,arguments)}}(),Y=function(){switch(Z.type){case T.HQ.Tag:return"catalog/tag";default:return"catalog"}},H=[{title:"#",valueType:"indexBorder",width:50},{title:"Name",dataIndex:"name"},{title:"Created date",dataIndex:"createdDate",valueType:"fromNow",search:!1,sorter:!0,width:180},{title:"Modified date",dataIndex:"modifiedDate",valueType:"fromNow",search:!1,sorter:!0,width:180},{title:"View",dataIndex:"viewCount",valueType:"digit",search:!1,sorter:!0,width:100},{title:"Status",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}},width:100},{title:"",valueType:"option",render:function(R,m){return[(0,_.jsx)(W.ZP,{icon:(0,_.jsx)(C.Z,{}),type:"link",size:"small",onClick:function(){return B.history.push("/".concat(Y(),"/").concat(m.id))}},1),(0,_.jsx)(w.Z,{title:"Are you sure?",onConfirm:function(){return z(m.id)},children:(0,_.jsx)(W.ZP,{size:"small",type:"link",icon:(0,_.jsx)(P.Z,{}),danger:!0})},2)]},width:100}],J=function(){var b=o()(n()().mark(function R(m){var j,A;return n()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return m.type=Number(m.type),f.next=3,(0,g.BP)(m);case 3:j=f.sent,j.succeeded&&(y.ZP.success("Added!"),(A=$.current)===null||A===void 0||A.reload(),N(!1));case 5:case"end":return f.stop()}},R)}));return function(m){return b.apply(this,arguments)}}();return(0,_.jsxs)("div",{children:[(0,_.jsx)(i.Z,{rowSelection:{},rowKey:"id",request:function(R,m){return(0,g.A$)(c()(c()({},R),{},{type:Z.type,locale:(0,B.getLocale)()}),m)},pagination:{defaultPageSize:10},search:{layout:"vertical"},columns:H,actionRef:$,toolBarRender:function(){return[(0,_.jsx)(W.ZP,{type:"primary",onClick:function(){return N(!0)},icon:(0,_.jsx)(D.Z,{}),children:(0,_.jsx)("span",{children:(0,_.jsx)(B.FormattedMessage,{id:"general.new"})})},"new")]}}),(0,_.jsxs)(O.Y,{open:G,onOpenChange:N,onFinish:J,title:x.formatMessage({id:"general.new"}),children:[(0,_.jsx)(L.Z,{name:"name",label:"Name",rules:[{required:!0}]}),(0,_.jsx)(M.Z,{label:"Type",name:"type",initialValue:"".concat(Z.type)}),(0,_.jsx)(I.Z,{label:"Description",name:"description"}),(0,_.jsx)(L.Z,{name:"locale",initialValue:x.locale,hidden:!0})]})]})};E.Z=F},84697:function(S,E,r){var l=r(97857),c=r.n(l),v=r(12361),n=r(64317),d=r(86074),o=function(u){return(0,d.jsx)(n.Z,c()(c()({},u),{},{request:v.Z9,label:u.label,name:u.name,initialValue:u.initialValue,rules:[{required:!0}]}))};E.Z=o},12361:function(S,E,r){r.d(E,{A$:function(){return P},BA:function(){return B},BP:function(){return g},M0:function(){return Y},NU:function(){return j},No:function(){return ae},R4:function(){return M},S8:function(){return L},U4:function(){return X},Z9:function(){return $},_V:function(){return U},gg:function(){return te},kn:function(){return R},lI:function(){return ne},m_:function(){return Q},tD:function(){return J},wu:function(){return N}});var l=r(97857),c=r.n(l),v=r(15009),n=r.n(v),d=r(99289),o=r.n(d),p=r(55375),u=r(35312);function M(t){return T.apply(this,arguments)}function T(){return T=o()(n()().mark(function t(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/".concat(s)));case 1:case"end":return e.stop()}},t)})),T.apply(this,arguments)}function g(t){return C.apply(this,arguments)}function C(){return C=o()(n()().mark(function t(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/add",{method:"POST",data:s}));case 1:case"end":return e.stop()}},t)})),C.apply(this,arguments)}function P(t,s){return D.apply(this,arguments)}function D(){return D=o()(n()().mark(function t(s,a){return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,u.request)("catalog/list",{method:"GET",params:c()({viewCount:a.viewCount?a.viewCount==="ascend"?p.BA.Ascending:p.BA.Descending:p.BA.Unspecified,modifiedDate:a.modifiedDate?a.modifiedDate==="ascend"?p.BA.Ascending:p.BA.Descending:p.BA.Unspecified},s)}));case 1:case"end":return h.stop()}},t)})),D.apply(this,arguments)}function i(){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime().mark(function t(){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("catalog/tree"));case 1:case"end":return a.stop()}},t)})),O.apply(this,arguments)}function L(t){return I.apply(this,arguments)}function I(){return I=o()(n()().mark(function t(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/delete/".concat(s),{method:"POST"}));case 1:case"end":return e.stop()}},t)})),I.apply(this,arguments)}function B(t){return y.apply(this,arguments)}function y(){return y=o()(n()().mark(function t(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},t)})),y.apply(this,arguments)}function W(t){return w.apply(this,arguments)}function w(){return w=_asyncToGenerator(_regeneratorRuntime().mark(function t(s){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/tree-drop",{method:"POST",data:s}));case 1:case"end":return e.stop()}},t)})),w.apply(this,arguments)}function U(){return _.apply(this,arguments)}function _(){return _=o()(n()().mark(function t(){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.request)("catalog/view-count"));case 1:case"end":return a.stop()}},t)})),_.apply(this,arguments)}function F(t){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime().mark(function t(s){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/active/".concat(s),{method:"POST"}));case 1:case"end":return e.stop()}},t)})),K.apply(this,arguments)}function Z(t){return x.apply(this,arguments)}function x(){return x=_asyncToGenerator(_regeneratorRuntime().mark(function t(s){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/update-thumbnail",{method:"POST",data:s}));case 1:case"end":return e.stop()}},t)})),x.apply(this,arguments)}function $(){return V.apply(this,arguments)}function V(){return V=o()(n()().mark(function t(){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.request)("catalog/types"));case 1:case"end":return a.stop()}},t)})),V.apply(this,arguments)}function Q(t){return G.apply(this,arguments)}function G(){return G=o()(n()().mark(function t(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/list-tag/".concat(s)));case 1:case"end":return e.stop()}},t)})),G.apply(this,arguments)}function N(t){return z.apply(this,arguments)}function z(){return z=o()(n()().mark(function t(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/list-tag-select",{params:s}));case 1:case"end":return e.stop()}},t)})),z.apply(this,arguments)}function Y(t,s){return H.apply(this,arguments)}function H(){return H=o()(n()().mark(function t(s,a){return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,u.request)("catalog/list-by-tag/".concat(s),{params:a}));case 1:case"end":return h.stop()}},t)})),H.apply(this,arguments)}function J(){return b.apply(this,arguments)}function b(){return b=o()(n()().mark(function t(){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.request)("catalog/pie-chart"));case 1:case"end":return a.stop()}},t)})),b.apply(this,arguments)}function R(t,s){return m.apply(this,arguments)}function m(){return m=o()(n()().mark(function t(s,a){return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,u.request)("/product/image/save",{method:"POST",data:{urls:s,catalogId:a}}));case 1:case"end":return h.stop()}},t)})),m.apply(this,arguments)}function j(t){return A.apply(this,arguments)}function A(){return A=o()(n()().mark(function t(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/product/image/".concat(s)));case 1:case"end":return e.stop()}},t)})),A.apply(this,arguments)}function X(t){return f.apply(this,arguments)}function f(){return f=o()(n()().mark(function t(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/catalog/form-select",{params:s}));case 1:case"end":return e.stop()}},t)})),f.apply(this,arguments)}function te(t){return q.apply(this,arguments)}function q(){return q=o()(n()().mark(function t(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/product/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},t)})),q.apply(this,arguments)}function ne(t){return k.apply(this,arguments)}function k(){return k=o()(n()().mark(function t(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/product/".concat(s)));case 1:case"end":return e.stop()}},t)})),k.apply(this,arguments)}function se(t){return ee.apply(this,arguments)}function ee(){return ee=_asyncToGenerator(_regeneratorRuntime().mark(function t(s){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/product/brand/save",{method:"POST",data:s}));case 1:case"end":return e.stop()}},t)})),ee.apply(this,arguments)}function ae(t){return re.apply(this,arguments)}function re(){return re=o()(n()().mark(function t(s){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/catalog/top-view",{params:{type:s}}));case 1:case"end":return e.stop()}},t)})),re.apply(this,arguments)}}}]);
