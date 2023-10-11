"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8485],{82826:function(W,O,e){e.d(O,{Z:function(){return E}});var d=e(1413),t=e(62435),D={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},l=D,i=e(91146),P=function(p,I){return t.createElement(i.Z,(0,d.Z)((0,d.Z)({},p),{},{ref:I,icon:l}))};P.displayName="ArrowLeftOutlined";var E=t.forwardRef(P)},51042:function(W,O,e){var d=e(1413),t=e(62435),D=e(42110),l=e(91146),i=function(E,C){return t.createElement(l.Z,(0,d.Z)((0,d.Z)({},E),{},{ref:C,icon:D.Z}))};i.displayName="PlusOutlined",O.Z=t.forwardRef(i)},63434:function(W,O,e){var d=e(1413),t=e(91),D=e(22270),l=e(84567),i=e(62435),P=e(90789),E=e(96987),C=e(86074),p=["options","fieldProps","proFieldProps","valueEnum"],I=i.forwardRef(function(v,o){var M=v.options,h=v.fieldProps,S=v.proFieldProps,j=v.valueEnum,T=(0,t.Z)(v,p);return(0,C.jsx)(E.Z,(0,d.Z)({ref:o,valueType:"checkbox",valueEnum:(0,D.h)(j,void 0),fieldProps:(0,d.Z)({options:M},h),lightProps:(0,d.Z)({labelFormatter:function(){return(0,C.jsx)(E.Z,(0,d.Z)({ref:o,valueType:"checkbox",mode:"read",valueEnum:(0,D.h)(j,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,d.Z)({options:M},h),proFieldProps:S},T))}},T.lightProps),proFieldProps:S},T))}),F=i.forwardRef(function(v,o){var M=v.fieldProps,h=v.children;return(0,C.jsx)(l.Z,(0,d.Z)((0,d.Z)({ref:o},M),{},{children:h}))}),x=(0,P.G)(F,{valuePropName:"checked"}),m=x;m.Group=I,O.Z=m},64317:function(W,O,e){var d=e(1413),t=e(91),D=e(22270),l=e(62435),i=e(66758),P=e(96987),E=e(86074),C=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],p=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],I=l.forwardRef(function(o,M){var h=o.fieldProps,S=o.children,j=o.params,T=o.proFieldProps,Z=o.mode,g=o.valueEnum,R=o.request,s=o.showSearch,A=o.options,U=(0,t.Z)(o,C),B=(0,l.useContext)(i.Z);return(0,E.jsx)(P.Z,(0,d.Z)((0,d.Z)({valueEnum:(0,D.h)(g),request:R,params:j,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,d.Z)({options:A,mode:Z,showSearch:s,getPopupContainer:B.getPopupContainer},h),ref:M,proFieldProps:T},U),{},{children:S}))}),F=l.forwardRef(function(o,M){var h=o.fieldProps,S=o.children,j=o.params,T=o.proFieldProps,Z=o.mode,g=o.valueEnum,R=o.request,s=o.options,A=(0,t.Z)(o,p),U=(0,d.Z)({options:s,mode:Z||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},h),B=(0,l.useContext)(i.Z);return(0,E.jsx)(P.Z,(0,d.Z)((0,d.Z)({valueEnum:(0,D.h)(g),request:R,params:j,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,d.Z)({getPopupContainer:B.getPopupContainer},U),ref:M,proFieldProps:T},A),{},{children:S}))}),x=I,m=F,v=x;v.SearchSelect=m,v.displayName="ProFormComponent",O.Z=v},5966:function(W,O,e){var d=e(1413),t=e(91),D=e(62435),l=e(96987),i=e(86074),P=["fieldProps","proFieldProps"],E=["fieldProps","proFieldProps"],C="text",p=function(m){var v=m.fieldProps,o=m.proFieldProps,M=(0,t.Z)(m,P);return(0,i.jsx)(l.Z,(0,d.Z)({valueType:C,fieldProps:v,filedConfig:{valueType:C},proFieldProps:o},M))},I=function(m){var v=m.fieldProps,o=m.proFieldProps,M=(0,t.Z)(m,E);return(0,i.jsx)(l.Z,(0,d.Z)({valueType:"password",fieldProps:v,proFieldProps:o,filedConfig:{valueType:C}},M))},F=p;F.Password=I,F.displayName="ProFormComponent",O.Z=F},34148:function(W,O,e){var d=e(12361),t=e(64317),D=e(86074),l=function(P){return(0,D.jsx)(t.Z,{showSearch:!0,request:d.U4,label:P.label,name:P.name,initialValue:P.initialValue})};O.Z=l},85335:function(W,O,e){var d=e(15009),t=e.n(d),D=e(99289),l=e.n(D),i=e(66352),P=e(28199),E=e(34994),C=e(5966),p=e(63434),I=e(35312),F=e(58301),x=e(62435),m=e(86074),v=function(){var M=(0,I.useParams)(),h=M.id,S=(0,x.useRef)();(0,x.useEffect)(function(){(0,i.Mk)(h).then(function(T){var Z;(Z=S.current)===null||Z===void 0||Z.setFields([{name:"name",value:T.name},{name:"active",value:T.active}])})},[h]);var j=function(){var T=l()(t()().mark(function Z(g){var R;return t()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,(0,i.Qb)(g);case 2:R=A.sent,R.succeeded?F.ZP.success("Saved!"):F.ZP.error(R.errors[0].description);case 4:case"end":return A.stop()}},Z)}));return function(g){return T.apply(this,arguments)}}();return(0,m.jsx)(P.Z,{title:"Info",children:(0,m.jsxs)(E.A,{formRef:S,onFinish:j,children:[(0,m.jsx)(C.Z,{hidden:!0,name:"id",initialValue:h}),(0,m.jsx)(C.Z,{name:"name",label:"Name"}),(0,m.jsx)(p.Z,{name:"active",label:"Active"})]})})};O.Z=v},7963:function(W,O,e){e.r(O),e.d(O,{default:function(){return ae}});var d=e(97857),t=e.n(d),D=e(5574),l=e.n(D),i=e(85335),P=e(82826),E=e(63386),C=e(28199),p=e(35312),I=e(71577),F=e(71230),x=e(15746),m=e(62435),v=e(15009),o=e.n(v),M=e(99289),h=e.n(M),S=e(34148),j=e(66352),T=e(34994),Z=e(64317),g=e(5966),R=e(58301),s=e(86074),A=function(_){var c=(0,p.useIntl)(),b=(0,m.useRef)();(0,m.useEffect)(function(){if(_){var n;(n=b.current)===null||n===void 0||n.setFields([{name:"type",value:_.type},{name:"name",value:_.name},{name:"finishPageId",value:_.finishPageId}])}},[JSON.stringify(_)]);var L=function(){var n=h()(o()().mark(function a(u){var r,f;return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return r=t()({},_),r.type=u.type,r.name=u.name,r.finishPageId=u.finishPageId,y.next=6,(0,j.iH)(_.id,r);case 6:f=y.sent,f.succeeded&&R.ZP.success(c.formatMessage({id:"general.saved"}));case 8:case"end":return y.stop()}},a)}));return function(u){return n.apply(this,arguments)}}();return(0,s.jsxs)(T.A,{formRef:b,onFinish:L,children:[(0,s.jsx)(Z.Z,{name:"type",label:"Type",options:[{label:"Default",value:"Default"},{label:"Book review",value:"BookReview"}]}),(0,s.jsx)(g.Z,{name:"name",label:"Name"}),(0,s.jsx)(S.Z,{name:"finishPageId",label:"Finish page",rules:[{required:!0}]})]})},U=A,B=e(25514),k=e(96074),G=function(){var _=function(){var c=h()(o()().mark(function b(L){return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:console.log(L);case 1:case"end":return a.stop()}},b)}));return function(L){return c.apply(this,arguments)}}();return(0,s.jsxs)(T.A,{onFinish:_,children:[(0,s.jsx)(B.Z.Title,{level:4,children:"Email"}),(0,s.jsx)(g.Z,{name:"received",label:"Received"}),(0,s.jsx)(B.Z.Title,{level:4,children:(0,s.jsx)(p.FormattedMessage,{id:"menu.settings.sendGrid"})}),(0,s.jsx)(g.Z,{name:"template",label:"Template"}),(0,s.jsx)(k.Z,{}),(0,s.jsx)(B.Z.Title,{level:4,children:(0,s.jsx)(p.FormattedMessage,{id:"menu.settings.telegram"})}),(0,s.jsx)(g.Z,{name:"chatId",label:"Chat ID"})]})},q=G,K=e(93421),ee=function(_){var c=_.labels,b=(0,m.useRef)();(0,m.useEffect)(function(){if(c){var n;(n=b.current)===null||n===void 0||n.setFields([{name:"name",value:c==null?void 0:c.name},{name:"email",value:c==null?void 0:c.email},{name:"phoneNumber",value:c==null?void 0:c.phoneNumber},{name:"address",value:c==null?void 0:c.address},{name:"note",value:c==null?void 0:c.note},{name:"submit",value:c==null?void 0:c.submit}])}},[JSON.stringify(c)]);var L=function(){var n=h()(o()().mark(function a(u){var r,f;return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return r=t()({},_),r.labels=u,y.next=4,(0,j.iH)(_.id,r);case 4:f=y.sent,f.succeeded&&R.ZP.success("Saved!");case 6:case"end":return y.stop()}},a)}));return function(u){return n.apply(this,arguments)}}();return(0,s.jsxs)(T.A,{onFinish:L,formRef:b,children:[(0,s.jsxs)(K.Z,{children:[(0,s.jsx)(g.Z,{name:"name",label:"Name"}),(0,s.jsx)(g.Z,{name:"email",label:"Email"}),(0,s.jsx)(g.Z,{name:"phoneNumber",label:"Phone number"}),(0,s.jsx)(g.Z,{name:"address",label:"Address"}),(0,s.jsx)(g.Z,{name:"note",label:"Note"})]}),(0,s.jsxs)(K.Z,{children:[(0,s.jsx)(g.Z,{name:"category",label:"Category"}),(0,s.jsx)(g.Z,{name:"appointment",label:"Appointment"})]})]})},N=ee,re=e(16309),V=e(37476),ne=e(51042),H=function(_){var c=(0,m.useState)(_.categories||[]),b=l()(c,2),L=b[0],n=b[1],a=(0,m.useState)(!1),u=l()(a,2),r=u[0],f=u[1],J=function(){var y=h()(o()().mark(function Q(X){var $,se;return o()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return $=t()({},_),$.categories||($.categories=[]),X.label=X.value,$.categories.push(X),Y.next=6,(0,j.iH)(_.id,$);case 6:se=Y.sent,se.succeeded&&(R.ZP.success("Saved!"),n($.categories));case 8:case"end":return Y.stop()}},Q)}));return function(X){return y.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(re.Rs,{toolBarRender:function(){return[(0,s.jsx)(I.ZP,{type:"primary",icon:(0,s.jsx)(ne.Z,{}),onClick:function(){return f(!0)},children:(0,s.jsx)("span",{children:(0,s.jsx)(p.FormattedMessage,{id:"general.new"})})},"add")]},dataSource:L}),(0,s.jsx)(V.Y,{open:r,onOpenChange:f,onFinish:J,title:(0,s.jsx)(p.FormattedMessage,{id:"general.new"}),children:(0,s.jsx)(g.Z,{name:"value",label:"Category",rules:[{required:!0}]})})]})},te=H,z=function(){var _=(0,m.useState)("content"),c=l()(_,2),b=c[0],L=c[1],n=(0,p.useParams)(),a=n.id,u=(0,m.useState)(),r=l()(u,2),f=r[0],J=r[1];return(0,m.useEffect)(function(){a&&(0,j.Tu)(a).then(function(y){y.id=a,J(y)})},[a,b]),(0,s.jsx)(E._z,{extra:(0,s.jsx)(I.ZP,{icon:(0,s.jsx)(P.Z,{}),onClick:function(){return p.history.back()},children:(0,s.jsx)(p.FormattedMessage,{id:"general.back"})}),children:(0,s.jsxs)(F.Z,{gutter:16,children:[(0,s.jsx)(x.Z,{span:16,children:(0,s.jsx)(C.Z,{tabs:{activeKey:b,items:[{label:"Content",key:"content",children:(0,s.jsx)(U,t()({},f))},{label:"Labels",key:"labels",children:(0,s.jsx)(N,t()({},f))},{label:"Categories",key:"categories",children:(0,s.jsx)(te,t()({},f))},{label:"Setting",key:"setting",children:(0,s.jsx)(q,{})}],onChange:function(Q){L(Q)}}})}),(0,s.jsx)(x.Z,{span:8,children:(0,s.jsx)(i.Z,{})})]})})},ae=z},12361:function(W,O,e){e.d(O,{A$:function(){return I},BA:function(){return M},BP:function(){return C},M0:function(){return ee},NU:function(){return te},R4:function(){return P},S8:function(){return v},U4:function(){return ae},Z9:function(){return U},_V:function(){return T},gg:function(){return _},kn:function(){return ne},lI:function(){return b},m_:function(){return k},tD:function(){return re},wu:function(){return q}});var d=e(15009),t=e.n(d),D=e(99289),l=e.n(D),i=e(35312);function P(n){return E.apply(this,arguments)}function E(){return E=l()(t()().mark(function n(a){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("catalog/".concat(a)));case 1:case"end":return r.stop()}},n)})),E.apply(this,arguments)}function C(n){return p.apply(this,arguments)}function p(){return p=l()(t()().mark(function n(a){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("catalog/add",{method:"POST",data:a}));case 1:case"end":return r.stop()}},n)})),p.apply(this,arguments)}function I(n){return F.apply(this,arguments)}function F(){return F=l()(t()().mark(function n(a){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("catalog/list",{method:"GET",params:a}));case 1:case"end":return r.stop()}},n)})),F.apply(this,arguments)}function x(){return m.apply(this,arguments)}function m(){return m=_asyncToGenerator(_regeneratorRuntime().mark(function n(){return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",request("catalog/tree"));case 1:case"end":return u.stop()}},n)})),m.apply(this,arguments)}function v(n){return o.apply(this,arguments)}function o(){return o=l()(t()().mark(function n(a){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("catalog/delete/".concat(a),{method:"POST"}));case 1:case"end":return r.stop()}},n)})),o.apply(this,arguments)}function M(n){return h.apply(this,arguments)}function h(){return h=l()(t()().mark(function n(a){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("catalog/save",{method:"POST",data:a}));case 1:case"end":return r.stop()}},n)})),h.apply(this,arguments)}function S(n){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime().mark(function n(a){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/tree-drop",{method:"POST",data:a}));case 1:case"end":return r.stop()}},n)})),j.apply(this,arguments)}function T(){return Z.apply(this,arguments)}function Z(){return Z=l()(t()().mark(function n(){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,i.request)("catalog/view-count"));case 1:case"end":return u.stop()}},n)})),Z.apply(this,arguments)}function g(n){return R.apply(this,arguments)}function R(){return R=_asyncToGenerator(_regeneratorRuntime().mark(function n(a){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/active/".concat(a),{method:"POST"}));case 1:case"end":return r.stop()}},n)})),R.apply(this,arguments)}function s(n){return A.apply(this,arguments)}function A(){return A=_asyncToGenerator(_regeneratorRuntime().mark(function n(a){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/update-thumbnail",{method:"POST",data:a}));case 1:case"end":return r.stop()}},n)})),A.apply(this,arguments)}function U(){return B.apply(this,arguments)}function B(){return B=l()(t()().mark(function n(){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,i.request)("catalog/types"));case 1:case"end":return u.stop()}},n)})),B.apply(this,arguments)}function k(n){return G.apply(this,arguments)}function G(){return G=l()(t()().mark(function n(a){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("catalog/list-tag/".concat(a)));case 1:case"end":return r.stop()}},n)})),G.apply(this,arguments)}function q(n){return K.apply(this,arguments)}function K(){return K=l()(t()().mark(function n(a){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("catalog/list-tag-select",{params:a}));case 1:case"end":return r.stop()}},n)})),K.apply(this,arguments)}function ee(n,a){return N.apply(this,arguments)}function N(){return N=l()(t()().mark(function n(a,u){return t()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,i.request)("catalog/list-by-tag/".concat(a),{params:u}));case 1:case"end":return f.stop()}},n)})),N.apply(this,arguments)}function re(){return V.apply(this,arguments)}function V(){return V=l()(t()().mark(function n(){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,i.request)("catalog/pie-chart"));case 1:case"end":return u.stop()}},n)})),V.apply(this,arguments)}function ne(n,a){return H.apply(this,arguments)}function H(){return H=l()(t()().mark(function n(a,u){return t()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,i.request)("/product/image/save",{method:"POST",data:{urls:a,catalogId:u}}));case 1:case"end":return f.stop()}},n)})),H.apply(this,arguments)}function te(n){return z.apply(this,arguments)}function z(){return z=l()(t()().mark(function n(a){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("/product/image/".concat(a)));case 1:case"end":return r.stop()}},n)})),z.apply(this,arguments)}function ae(n){return w.apply(this,arguments)}function w(){return w=l()(t()().mark(function n(a){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("/catalog/form-select",{params:a}));case 1:case"end":return r.stop()}},n)})),w.apply(this,arguments)}function _(n){return c.apply(this,arguments)}function c(){return c=l()(t()().mark(function n(a){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("/product/save",{method:"POST",data:a}));case 1:case"end":return r.stop()}},n)})),c.apply(this,arguments)}function b(n){return L.apply(this,arguments)}function L(){return L=l()(t()().mark(function n(a){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("/product/".concat(a)));case 1:case"end":return r.stop()}},n)})),L.apply(this,arguments)}}}]);
