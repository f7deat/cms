"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2112],{63434:function(j,f,e){var o=e(1413),n=e(91),D=e(22270),u=e(32808),_=e(62435),P=e(90789),E=e(19617),p=e(86074),R=["options","fieldProps","proFieldProps","valueEnum"],M=_.forwardRef(function(m,a){var d=m.options,v=m.fieldProps,c=m.proFieldProps,y=m.valueEnum,T=(0,n.Z)(m,R);return(0,p.jsx)(E.Z,(0,o.Z)({ref:a,valueType:"checkbox",valueEnum:(0,D.h)(y,void 0),fieldProps:(0,o.Z)({options:d},v),lightProps:(0,o.Z)({labelFormatter:function(){return(0,p.jsx)(E.Z,(0,o.Z)({ref:a,valueType:"checkbox",mode:"read",valueEnum:(0,D.h)(y,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:d},v),proFieldProps:c},T))}},T.lightProps),proFieldProps:c},T))}),g=_.forwardRef(function(m,a){var d=m.fieldProps,v=m.children;return(0,p.jsx)(u.Z,(0,o.Z)((0,o.Z)({ref:a},d),{},{children:v}))}),A=(0,P.G)(g,{valuePropName:"checked"}),i=A;i.Group=M,f.Z=i},31199:function(j,f,e){var o=e(1413),n=e(91),D=e(62435),u=e(19617),_=e(86074),P=["fieldProps","min","proFieldProps","max"],E=function(M,g){var A=M.fieldProps,i=M.min,m=M.proFieldProps,a=M.max,d=(0,n.Z)(M,P);return(0,_.jsx)(u.Z,(0,o.Z)({valueType:"digit",fieldProps:(0,o.Z)({min:i,max:a},A),ref:g,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:m},d))},p=D.forwardRef(E);f.Z=p},64317:function(j,f,e){var o=e(1413),n=e(91),D=e(22270),u=e(62435),_=e(66758),P=e(19617),E=e(86074),p=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],R=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],M=u.forwardRef(function(a,d){var v=a.fieldProps,c=a.children,y=a.params,T=a.proFieldProps,O=a.mode,I=a.valueEnum,C=a.request,L=a.showSearch,h=a.options,W=(0,n.Z)(a,p),B=(0,u.useContext)(_.Z);return(0,E.jsx)(P.Z,(0,o.Z)((0,o.Z)({valueEnum:(0,D.h)(I),request:C,params:y,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:h,mode:O,showSearch:L,getPopupContainer:B.getPopupContainer},v),ref:d,proFieldProps:T},W),{},{children:c}))}),g=u.forwardRef(function(a,d){var v=a.fieldProps,c=a.children,y=a.params,T=a.proFieldProps,O=a.mode,I=a.valueEnum,C=a.request,L=a.options,h=(0,n.Z)(a,R),W=(0,o.Z)({options:L,mode:O||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},v),B=(0,u.useContext)(_.Z);return(0,E.jsx)(P.Z,(0,o.Z)((0,o.Z)({valueEnum:(0,D.h)(I),request:C,params:y,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({getPopupContainer:B.getPopupContainer},W),ref:d,proFieldProps:T},h),{},{children:c}))}),A=M,i=g,m=A;m.SearchSelect=i,m.displayName="ProFormComponent",f.Z=m},5966:function(j,f,e){var o=e(1413),n=e(91),D=e(62435),u=e(19617),_=e(86074),P=["fieldProps","proFieldProps"],E=["fieldProps","proFieldProps"],p="text",R=function(i){var m=i.fieldProps,a=i.proFieldProps,d=(0,n.Z)(i,P);return(0,_.jsx)(u.Z,(0,o.Z)({valueType:p,fieldProps:m,filedConfig:{valueType:p},proFieldProps:a},d))},M=function(i){var m=i.fieldProps,a=i.proFieldProps,d=(0,n.Z)(i,E);return(0,_.jsx)(u.Z,(0,o.Z)({valueType:"password",fieldProps:m,proFieldProps:a,filedConfig:{valueType:p}},d))},g=R;g.Password=M,g.displayName="ProFormComponent",f.Z=g},84697:function(j,f,e){var o=e(12361),n=e(64317),D=e(86074),u=function(P){return(0,D.jsx)(n.Z,{request:o.Z9,label:P.label,name:P.name,initialValue:P.initialValue,rules:[{required:!0}]})};f.Z=u},37097:function(j,f,e){e.d(f,{l:function(){return _}});var o=e(12361),n=e(64317),D=e(86074),u=function(p){return(0,D.jsx)(n.Z,{showSearch:!0,request:o.wu,label:p.label,name:p.name})},_=u,P=e(84697)},85335:function(j,f,e){var o=e(15009),n=e.n(o),D=e(99289),u=e.n(D),_=e(66352),P=e(28199),E=e(34994),p=e(5966),R=e(63434),M=e(35312),g=e(27790),A=e(62435),i=e(86074),m=function(){var d=(0,M.useParams)(),v=d.id,c=(0,A.useRef)();(0,A.useEffect)(function(){(0,_.Mk)(v).then(function(T){var O;(O=c.current)===null||O===void 0||O.setFields([{name:"name",value:T.name},{name:"active",value:T.active}])})},[v]);var y=function(){var T=u()(n()().mark(function O(I){var C;return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,_.Qb)(I);case 2:C=h.sent,C.succeeded?g.ZP.success("Saved!"):g.ZP.error(C.errors[0].description);case 4:case"end":return h.stop()}},O)}));return function(I){return T.apply(this,arguments)}}();return(0,i.jsx)(P.Z,{title:"Info",children:(0,i.jsxs)(E.A,{formRef:c,onFinish:y,children:[(0,i.jsx)(p.Z,{hidden:!0,name:"id",initialValue:v}),(0,i.jsx)(p.Z,{name:"name",label:"Name"}),(0,i.jsx)(R.Z,{name:"active",label:"Active"})]})})};f.Z=m},55194:function(j,f,e){e.r(f);var o=e(15009),n=e.n(o),D=e(99289),u=e.n(D),_=e(37097),P=e(85335),E=e(66352),p=e(63386),R=e(28199),M=e(34994),g=e(5966),A=e(31199),i=e(35312),m=e(27790),a=e(71230),d=e(15746),v=e(62435),c=e(86074),y=function(){var O=(0,v.useRef)(),I=(0,i.useParams)(),C=I.id;(0,v.useEffect)(function(){(0,E.Tu)(C).then(function(h){var W;(W=O.current)===null||W===void 0||W.setFields([{name:"title",value:h.title},{name:"pageSize",value:h.pageSize},{name:"tagId",value:h.tagId}])})},[C]);var L=function(){var h=u()(n()().mark(function W(B){var U;return n()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,(0,E.iH)(C,B);case 2:U=K.sent,U.succeeded&&m.ZP.success("Saved");case 4:case"end":return K.stop()}},W)}));return function(B){return h.apply(this,arguments)}}();return(0,c.jsx)(p._z,{children:(0,c.jsxs)(a.Z,{gutter:16,children:[(0,c.jsx)(d.Z,{md:16,children:(0,c.jsx)(R.Z,{children:(0,c.jsxs)(M.A,{onFinish:L,formRef:O,children:[(0,c.jsx)(g.Z,{label:"Title",name:"title"}),(0,c.jsx)(A.Z,{label:"Page size",name:"pageSize"}),(0,c.jsx)(_.l,{name:"tagId",label:"Tag"})]})})}),(0,c.jsx)(d.Z,{md:8,children:(0,c.jsx)(P.Z,{})})]})})};f.default=y},12361:function(j,f,e){e.d(f,{A$:function(){return M},BA:function(){return d},BP:function(){return p},M0:function(){return G},R4:function(){return P},S8:function(){return m},Z9:function(){return U},_V:function(){return T},m_:function(){return K},tD:function(){return V},wu:function(){return $}});var o=e(15009),n=e.n(o),D=e(99289),u=e.n(D),_=e(35312);function P(t){return E.apply(this,arguments)}function E(){return E=u()(n()().mark(function t(l){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,_.request)("catalog/".concat(l)));case 1:case"end":return r.stop()}},t)})),E.apply(this,arguments)}function p(t){return R.apply(this,arguments)}function R(){return R=u()(n()().mark(function t(l){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,_.request)("catalog/add",{method:"POST",data:l}));case 1:case"end":return r.stop()}},t)})),R.apply(this,arguments)}function M(t){return g.apply(this,arguments)}function g(){return g=u()(n()().mark(function t(l){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,_.request)("catalog/list",{method:"GET",params:l}));case 1:case"end":return r.stop()}},t)})),g.apply(this,arguments)}function A(){return i.apply(this,arguments)}function i(){return i=_asyncToGenerator(_regeneratorRuntime().mark(function t(){return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("catalog/tree"));case 1:case"end":return s.stop()}},t)})),i.apply(this,arguments)}function m(t){return a.apply(this,arguments)}function a(){return a=u()(n()().mark(function t(l){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,_.request)("catalog/delete/".concat(l),{method:"POST"}));case 1:case"end":return r.stop()}},t)})),a.apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return v=u()(n()().mark(function t(l){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,_.request)("catalog/save",{method:"POST",data:l}));case 1:case"end":return r.stop()}},t)})),v.apply(this,arguments)}function c(t){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime().mark(function t(l){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/tree-drop",{method:"POST",data:l}));case 1:case"end":return r.stop()}},t)})),y.apply(this,arguments)}function T(){return O.apply(this,arguments)}function O(){return O=u()(n()().mark(function t(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,_.request)("catalog/view-count"));case 1:case"end":return s.stop()}},t)})),O.apply(this,arguments)}function I(t){return C.apply(this,arguments)}function C(){return C=_asyncToGenerator(_regeneratorRuntime().mark(function t(l){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/active/".concat(l),{method:"POST"}));case 1:case"end":return r.stop()}},t)})),C.apply(this,arguments)}function L(t){return h.apply(this,arguments)}function h(){return h=_asyncToGenerator(_regeneratorRuntime().mark(function t(l){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/article/save",{method:"POST",data:l}));case 1:case"end":return r.stop()}},t)})),h.apply(this,arguments)}function W(t){return B.apply(this,arguments)}function B(){return B=_asyncToGenerator(_regeneratorRuntime().mark(function t(l){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/update-thumbnail",{method:"POST",data:l}));case 1:case"end":return r.stop()}},t)})),B.apply(this,arguments)}function U(){return F.apply(this,arguments)}function F(){return F=u()(n()().mark(function t(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,_.request)("catalog/types"));case 1:case"end":return s.stop()}},t)})),F.apply(this,arguments)}function K(t){return Z.apply(this,arguments)}function Z(){return Z=u()(n()().mark(function t(l){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,_.request)("catalog/list-tag/".concat(l)));case 1:case"end":return r.stop()}},t)})),Z.apply(this,arguments)}function $(t){return S.apply(this,arguments)}function S(){return S=u()(n()().mark(function t(l){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,_.request)("catalog/list-tag-select",{params:l}));case 1:case"end":return r.stop()}},t)})),S.apply(this,arguments)}function G(t,l){return x.apply(this,arguments)}function x(){return x=u()(n()().mark(function t(l,s){return n()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",(0,_.request)("catalog/list-by-tag/".concat(l),{params:s}));case 1:case"end":return b.stop()}},t)})),x.apply(this,arguments)}function V(){return w.apply(this,arguments)}function w(){return w=u()(n()().mark(function t(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,_.request)("catalog/pie-chart"));case 1:case"end":return s.stop()}},t)})),w.apply(this,arguments)}}}]);
