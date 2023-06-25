"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7306],{82061:function(w,v,e){var c=e(1413),t=e(62435),g=e(47046),u=e(91146),l=function(d,P){return t.createElement(u.Z,(0,c.Z)((0,c.Z)({},d),{},{ref:P,icon:g.Z}))};l.displayName="DeleteOutlined",v.Z=t.forwardRef(l)},51042:function(w,v,e){var c=e(1413),t=e(62435),g=e(42110),u=e(91146),l=function(d,P){return t.createElement(u.Z,(0,c.Z)((0,c.Z)({},d),{},{ref:P,icon:g.Z}))};l.displayName="PlusOutlined",v.Z=t.forwardRef(l)},31199:function(w,v,e){var c=e(1413),t=e(91),g=e(62435),u=e(19617),l=e(86074),h=["fieldProps","min","proFieldProps","max"],d=function(p,O){var B=p.fieldProps,f=p.min,T=p.proFieldProps,o=p.max,y=(0,t.Z)(p,h);return(0,l.jsx)(u.Z,(0,c.Z)({valueType:"digit",fieldProps:(0,c.Z)({min:f,max:o},B),ref:O,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:T},y))},P=g.forwardRef(d);v.Z=P},64317:function(w,v,e){var c=e(1413),t=e(91),g=e(22270),u=e(62435),l=e(66758),h=e(19617),d=e(86074),P=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],_=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],p=u.forwardRef(function(o,y){var x=o.fieldProps,$=o.children,A=o.params,C=o.proFieldProps,R=o.mode,L=o.valueEnum,E=o.request,G=o.showSearch,F=o.options,W=(0,t.Z)(o,P),M=(0,u.useContext)(l.Z);return(0,d.jsx)(h.Z,(0,c.Z)((0,c.Z)({valueEnum:(0,g.h)(L),request:E,params:A,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,c.Z)({options:F,mode:R,showSearch:G,getPopupContainer:M.getPopupContainer},x),ref:y,proFieldProps:C},W),{},{children:$}))}),O=u.forwardRef(function(o,y){var x=o.fieldProps,$=o.children,A=o.params,C=o.proFieldProps,R=o.mode,L=o.valueEnum,E=o.request,G=o.options,F=(0,t.Z)(o,_),W=(0,c.Z)({options:G,mode:R||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},x),M=(0,u.useContext)(l.Z);return(0,d.jsx)(h.Z,(0,c.Z)((0,c.Z)({valueEnum:(0,g.h)(L),request:E,params:A,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,c.Z)({getPopupContainer:M.getPopupContainer},W),ref:y,proFieldProps:C},F),{},{children:$}))}),B=p,f=O,T=B;T.SearchSelect=f,T.displayName="ProFormComponent",v.Z=T},5966:function(w,v,e){var c=e(1413),t=e(91),g=e(62435),u=e(19617),l=e(86074),h=["fieldProps","proFieldProps"],d=["fieldProps","proFieldProps"],P="text",_=function(f){var T=f.fieldProps,o=f.proFieldProps,y=(0,t.Z)(f,h);return(0,l.jsx)(u.Z,(0,c.Z)({valueType:P,fieldProps:T,filedConfig:{valueType:P},proFieldProps:o},y))},p=function(f){var T=f.fieldProps,o=f.proFieldProps,y=(0,t.Z)(f,d);return(0,l.jsx)(u.Z,(0,c.Z)({valueType:"password",fieldProps:T,proFieldProps:o,filedConfig:{valueType:P}},y))},O=_;O.Password=p,O.displayName="ProFormComponent",v.Z=O},37097:function(w,v,e){e.d(v,{l:function(){return l}});var c=e(12361),t=e(64317),g=e(86074),u=function(d){return(0,g.jsx)(t.Z,{showSearch:!0,request:c.wu,label:d.label,name:d.name})},l=u},7310:function(w,v,e){e.d(v,{Z:function(){return i}});var c=e(15009),t=e.n(c),g=e(99289),u=e.n(g),l=e(5574),h=e.n(l),d=e(43425),P=e(47389),_=e(1413),p=e(62435),O=e(29245),B=e(91146),f=function(r,D){return p.createElement(B.Z,(0,_.Z)((0,_.Z)({},r),{},{ref:D,icon:O.Z}))};f.displayName="EllipsisOutlined";var T=p.forwardRef(f),o=e(51042),y=e(28199),x=e(93933),$=e(5966),A=e(31199),C=e(55375),R=e(35312),L=e(12361),E=e(27790),G=e(32983),F=e(90156),W=e(96074),M=e(27511),te=e(25514),N=e(71577),ee=e(42075),b=e(5251),ne=e(37097),V=e(66352),ae=e(51904),a=e(86074),se=function(){var r=(0,R.useParams)(),D=r.id,ue=(0,p.useState)(),J=h()(ue,2),U=J[0],H=J[1],oe=(0,p.useState)(!1),Q=h()(oe,2),m=Q[0],k=Q[1],re=function(){(0,L.m_)(D).then(function(j){H(j)})};(0,p.useEffect)(function(){re()},[]);var le=function(){var Z=u()(t()().mark(function j(S){var K;return t()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,(0,V.jX)({workId:D,catalogId:S.id,sortOrder:S.sortOrder});case 2:K=z.sent,K.succeeded?(E.ZP.success("Saved!"),k(!1),re()):E.ZP.error(K.errors[0].description);case 4:case"end":return z.stop()}},j)}));return function(S){return Z.apply(this,arguments)}}(),Y=function(){var Z=u()(t()().mark(function j(S){var K,I;return t()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,(0,V.wz)({catalogId:S,workId:D,sortOrder:0});case 2:K=q.sent,K.succeeded?(I=U==null?void 0:U.filter(function(ie){return ie.id!==S}),H(I),E.ZP.success("Deleted")):E.ZP.error(K.errors[0].description);case 4:case"end":return q.stop()}},j)}));return function(S){return Z.apply(this,arguments)}}();return(0,a.jsxs)("div",{children:[U==null?void 0:U.map(function(Z){return(0,a.jsx)(ae.Z,{closable:!0,onClose:function(){return Y(Z.id)},children:Z.name},Z.id)}),(0,a.jsx)(N.ZP,{size:"small",type:"dashed",onClick:function(){return k(!0)},children:(0,a.jsxs)(ee.Z,{children:[(0,a.jsx)(o.Z,{}),(0,a.jsx)(R.FormattedMessage,{id:"general.new"})]})}),(0,a.jsxs)(x.Y,{open:m,onOpenChange:k,onFinish:le,title:"Th\xEAm m\u1EDBi",children:[(0,a.jsx)(ne.l,{label:"Tag",name:"id"}),(0,a.jsx)(A.Z,{label:"Sort order",name:"sortOrder"})]})]})},X=se,n=function(){var r=(0,R.useParams)(),D=r.id,ue=(0,p.useState)(!1),J=h()(ue,2),U=J[0],H=J[1],oe=(0,p.useState)(),Q=h()(oe,2),m=Q[0],k=Q[1],re=[C.H.Article,C.H.Product,C.H.Albums,C.H.Video];(0,p.useEffect)(function(){(0,L.R4)(D).then(function(Y){return k(Y)})},[D]);var le=function(){var Y=u()(t()().mark(function Z(j){var S;return t()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return j.active=!0,I.next=3,(0,L.BP)(j);case 3:S=I.sent,S.succeeded?(E.ZP.success("Added!"),H(!1)):E.ZP.error(S.errors[0].description);case 5:case"end":return I.stop()}},Z)}));return function(j){return Y.apply(this,arguments)}}();return(0,a.jsxs)(y.Z,{title:"Summary",actions:[(0,a.jsx)(d.Z,{},"setting"),(0,a.jsx)(P.Z,{},"edit"),(0,a.jsx)(T,{},"ellipsis")],children:[(0,a.jsx)("div",{className:"flex items-center justify-center mt-4",children:m!=null&&m.thumbnail?(0,a.jsx)(F.Z,{src:(0,b.Er)(m==null?void 0:m.thumbnail),height:200,className:"object-fit-cover"}):(0,a.jsx)(G.Z,{})}),(0,a.jsx)(W.Z,{}),(0,a.jsxs)(M.Z,{title:"Information",column:1,children:[(0,a.jsx)(M.Z.Item,{label:"L\u01B0\u1EE3t xem",children:m==null?void 0:m.viewCount}),(0,a.jsx)(M.Z.Item,{label:"Created date",children:(0,b.p6)(m==null?void 0:m.createdDate)}),(0,a.jsx)(M.Z.Item,{label:"Modified date",children:(0,b.p6)(m==null?void 0:m.modifiedDate)})]}),re.includes((m==null?void 0:m.type)||C.H.Entry)?(0,a.jsxs)("div",{children:[(0,a.jsx)(W.Z,{}),(0,a.jsx)(te.Z.Title,{level:5,children:"Tags"}),(0,a.jsx)(X,{}),(0,a.jsx)(W.Z,{dashed:!0}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(N.ZP,{size:"small",type:"dashed",onClick:function(){return H(!0)},children:(0,a.jsxs)(ee.Z,{children:[(0,a.jsx)(o.Z,{}),"T\u1EA1o tag"]})})})]}):(0,a.jsx)("div",{}),(0,a.jsxs)(x.Y,{open:U,onOpenChange:H,onFinish:le,title:"T\u1EA1o tag",children:[(0,a.jsx)($.Z,{name:"name",rules:[{required:!0}],label:"Name"}),(0,a.jsx)(A.Z,{name:"type",initialValue:C.H.Tag,hidden:!0})]})]})},i=n},12361:function(w,v,e){e.d(v,{A$:function(){return p},BA:function(){return y},BP:function(){return P},M0:function(){return ae},R4:function(){return h},S8:function(){return T},Z9:function(){return te},_V:function(){return C},m_:function(){return ee},tD:function(){return se},wu:function(){return ne}});var c=e(15009),t=e.n(c),g=e(99289),u=e.n(g),l=e(35312);function h(n){return d.apply(this,arguments)}function d(){return d=u()(t()().mark(function n(i){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("catalog/".concat(i)));case 1:case"end":return r.stop()}},n)})),d.apply(this,arguments)}function P(n){return _.apply(this,arguments)}function _(){return _=u()(t()().mark(function n(i){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("catalog/add",{method:"POST",data:i}));case 1:case"end":return r.stop()}},n)})),_.apply(this,arguments)}function p(n){return O.apply(this,arguments)}function O(){return O=u()(t()().mark(function n(i){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("catalog/list",{method:"GET",params:i}));case 1:case"end":return r.stop()}},n)})),O.apply(this,arguments)}function B(){return f.apply(this,arguments)}function f(){return f=_asyncToGenerator(_regeneratorRuntime().mark(function n(){return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("catalog/tree"));case 1:case"end":return s.stop()}},n)})),f.apply(this,arguments)}function T(n){return o.apply(this,arguments)}function o(){return o=u()(t()().mark(function n(i){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("catalog/delete/".concat(i),{method:"POST"}));case 1:case"end":return r.stop()}},n)})),o.apply(this,arguments)}function y(n){return x.apply(this,arguments)}function x(){return x=u()(t()().mark(function n(i){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("catalog/save",{method:"POST",data:i}));case 1:case"end":return r.stop()}},n)})),x.apply(this,arguments)}function $(n){return A.apply(this,arguments)}function A(){return A=_asyncToGenerator(_regeneratorRuntime().mark(function n(i){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/tree-drop",{method:"POST",data:i}));case 1:case"end":return r.stop()}},n)})),A.apply(this,arguments)}function C(){return R.apply(this,arguments)}function R(){return R=u()(t()().mark(function n(){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.request)("catalog/view-count"));case 1:case"end":return s.stop()}},n)})),R.apply(this,arguments)}function L(n){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime().mark(function n(i){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/active/".concat(i),{method:"POST"}));case 1:case"end":return r.stop()}},n)})),E.apply(this,arguments)}function G(n){return F.apply(this,arguments)}function F(){return F=_asyncToGenerator(_regeneratorRuntime().mark(function n(i){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/article/save",{method:"POST",data:i}));case 1:case"end":return r.stop()}},n)})),F.apply(this,arguments)}function W(n){return M.apply(this,arguments)}function M(){return M=_asyncToGenerator(_regeneratorRuntime().mark(function n(i){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/update-thumbnail",{method:"POST",data:i}));case 1:case"end":return r.stop()}},n)})),M.apply(this,arguments)}function te(){return N.apply(this,arguments)}function N(){return N=u()(t()().mark(function n(){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.request)("catalog/types"));case 1:case"end":return s.stop()}},n)})),N.apply(this,arguments)}function ee(n){return b.apply(this,arguments)}function b(){return b=u()(t()().mark(function n(i){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("catalog/list-tag/".concat(i)));case 1:case"end":return r.stop()}},n)})),b.apply(this,arguments)}function ne(n){return V.apply(this,arguments)}function V(){return V=u()(t()().mark(function n(i){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("catalog/list-tag-select",{params:i}));case 1:case"end":return r.stop()}},n)})),V.apply(this,arguments)}function ae(n,i){return a.apply(this,arguments)}function a(){return a=u()(t()().mark(function n(i,s){return t()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,l.request)("catalog/list-by-tag/".concat(i),{params:s}));case 1:case"end":return D.stop()}},n)})),a.apply(this,arguments)}function se(){return X.apply(this,arguments)}function X(){return X=u()(t()().mark(function n(){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.request)("catalog/pie-chart"));case 1:case"end":return s.stop()}},n)})),X.apply(this,arguments)}},5251:function(w,v,e){e.d(v,{Er:function(){return u},p6:function(){return l}});var c=e(27484),t=e.n(c);function g(d){return d.trim()}function u(d){return new URL(d||"",localStorage.getItem("wf_URL")||"").href}function l(d){return d?t()(d).format("DD/MM/YYYY hh:mm:ss"):"-"}var h=function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(_){setTimeout(function(){_(!0)},P)})}}}]);
