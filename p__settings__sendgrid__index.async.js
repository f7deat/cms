"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3780],{5966:function(k,w,n){var p=n(1413),t=n(91),m=n(62435),u=n(96987),s=n(86074),W=["fieldProps","proFieldProps"],j=["fieldProps","proFieldProps"],S="text",P=function(f){var _=f.fieldProps,E=f.proFieldProps,I=(0,t.Z)(f,W);return(0,s.jsx)(u.Z,(0,p.Z)({valueType:S,fieldProps:_,filedConfig:{valueType:S},proFieldProps:E},I))},L=function(f){var _=f.fieldProps,E=f.proFieldProps,I=(0,t.Z)(f,j);return(0,s.jsx)(u.Z,(0,p.Z)({valueType:"password",fieldProps:_,proFieldProps:E,filedConfig:{valueType:S}},I))},y=P;y.Password=L,y.displayName="ProFormComponent",w.Z=y},34994:function(k,w,n){n.d(w,{A:function(){return g}});var p=n(1413),t=n(8232),m=n(62435),u=n(89671),s=n(4942),W=n(97685),j=n(87462),S=n(50756),P=n(46976),L=function(l,c){return m.createElement(P.Z,(0,j.Z)({},l,{ref:c,icon:S.Z}))},y=m.forwardRef(L),x=n(21770),f=n(86333),_=n(46735),E=n(93421),I=n(94184),b=n.n(I),G=n(66758),C=n(2514),T=n(98082),v=function(l){var c;return(0,s.Z)({},l.componentCls,{"&-title":{marginBlockEnd:l.marginXL,fontWeight:"bold"},"&-container":(0,s.Z)({flexWrap:"wrap",maxWidth:"100%"},"> div".concat(l.antCls,"-space-item"),{maxWidth:"100%"}),"&-twoLine":(c={display:"block",width:"100%"},(0,s.Z)(c,"".concat(l.componentCls,"-title"),{width:"100%",margin:"8px 0"}),(0,s.Z)(c,"".concat(l.componentCls,"-container"),{paddingInlineStart:16}),(0,s.Z)(c,"".concat(l.antCls,"-space-item,").concat(l.antCls,"-form-item"),{width:"100%"}),(0,s.Z)(c,"".concat(l.antCls,"-form-item"),{"&-control":{display:"flex",alignItems:"center",justifyContent:"flex-end","&-input":{alignItems:"center",justifyContent:"flex-end","&-content":{flex:"none"}}}}),c)})};function M(h){return(0,T.Xj)("ProFormGroup",function(l){var c=(0,p.Z)((0,p.Z)({},l),{},{componentCls:".".concat(h)});return[v(c)]})}var o=n(86074),N=m.forwardRef(function(h,l){var c=m.useContext(G.Z),R=c.groupProps,d=(0,p.Z)((0,p.Z)({},R),h),K=d.children,V=d.collapsible,z=d.defaultCollapsed,ee=d.style,H=d.labelLayout,J=d.title,A=J===void 0?h.label:J,Q=d.tooltip,B=d.align,r=B===void 0?"start":B,a=d.direction,i=d.size,e=i===void 0?32:i,D=d.titleStyle,se=d.titleRender,F=d.spaceProps,re=d.extra,ne=d.autoFocus,_e=(0,x.Z)(function(){return z||!1},{value:h.collapsed,onChange:h.onCollapse}),ie=(0,W.Z)(_e,2),te=ie[0],ve=ie[1],he=(0,m.useContext)(_.ZP.ConfigContext),ge=he.getPrefixCls,ue=(0,C.zx)(h),Pe=ue.ColWrapper,oe=ue.RowWrapper,U=ge("pro-form-group"),le=M(U),ye=le.wrapSSR,Y=le.hashId,pe=V&&(0,o.jsx)(y,{style:{marginInlineEnd:8},rotate:te?void 0:90}),ce=(0,o.jsx)(f.G,{label:pe?(0,o.jsxs)("div",{children:[pe,A]}):A,tooltip:Q}),de=(0,m.useCallback)(function($){var X=$.children;return(0,o.jsx)(E.Z,(0,p.Z)((0,p.Z)({},F),{},{className:b()("".concat(U,"-container ").concat(Y),F==null?void 0:F.className),size:e,align:r,direction:a,style:(0,p.Z)({rowGap:0},F==null?void 0:F.style),children:X}))},[r,U,a,Y,e,F]),me=se?se(ce,h):ce,Ee=(0,m.useMemo)(function(){var $=[],X=m.Children.toArray(K).map(function(Z,De){var ae;return m.isValidElement(Z)&&Z!==null&&Z!==void 0&&(ae=Z.props)!==null&&ae!==void 0&&ae.hidden?($.push(Z),null):De===0&&m.isValidElement(Z)&&ne?m.cloneElement(Z,(0,p.Z)((0,p.Z)({},Z.props),{},{autoFocus:ne})):Z});return[(0,o.jsx)(oe,{Wrapper:de,children:X},"children"),$.length>0?(0,o.jsx)("div",{style:{display:"none"},children:$}):null]},[K,oe,de,ne]),fe=(0,W.Z)(Ee,2),Ce=fe[0],Oe=fe[1];return ye((0,o.jsx)(Pe,{children:(0,o.jsxs)("div",{className:b()(U,Y,(0,s.Z)({},"".concat(U,"-twoLine"),H==="twoLine")),style:ee,ref:l,children:[Oe,(A||Q||re)&&(0,o.jsx)("div",{className:"".concat(U,"-title ").concat(Y).trim(),style:D,onClick:function(){ve(!te)},children:re?(0,o.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"},children:[me,(0,o.jsx)("span",{onClick:function(X){return X.stopPropagation()},children:re})]}):me}),(0,o.jsx)("div",{style:{display:V&&te?"none":void 0},children:Ce})]})}))});N.displayName="ProForm-Group";var O=N,q=n(4499);function g(h){return(0,o.jsx)(u.I,(0,p.Z)({layout:"vertical",submitter:{render:function(c,R){return R.reverse()}},contentRender:function(c,R){return(0,o.jsxs)(o.Fragment,{children:[c,R]})}},h))}g.Group=O,g.useForm=t.Z.useForm,g.Item=q.Z,g.useWatch=t.Z.useWatch,g.ErrorList=t.Z.ErrorList,g.Provider=t.Z.Provider,g.useFormInstance=t.Z.useFormInstance},55565:function(k,w,n){n.r(w);var p=n(15009),t=n.n(p),m=n(99289),u=n.n(m),s=n(31266),W=n(63386),j=n(28199),S=n(34994),P=n(5966),L=n(58301),y=n(96074),x=n(25514),f=n(62435),_=n(86074),E=function(){var b=(0,f.useRef)();(0,f.useEffect)(function(){(0,s.Is)().then(function(C){var T,v,M;(T=b.current)===null||T===void 0||T.setFields([{name:"apiKey",value:C.apiKey},{name:"name",value:(v=C.from)===null||v===void 0?void 0:v.name},{name:"email",value:(M=C.from)===null||M===void 0?void 0:M.email}])})},[]);var G=function(){var C=u()(t()().mark(function T(v){var M,o;return t()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return M={apiKey:v.apiKey,from:{email:v.email,name:v.name}},O.next=3,(0,s.tr)(M);case 3:o=O.sent,o.succeeded&&L.ZP.success("Saved!");case 5:case"end":return O.stop()}},T)}));return function(v){return C.apply(this,arguments)}}();return(0,_.jsx)(W._z,{title:"SendGrid",subTitle:"SendGrid l\xE0 m\u1ED9t d\u1ECBch v\u1EE5 g\u1EEDi email",children:(0,_.jsx)(j.Z,{children:(0,_.jsxs)(S.A,{formRef:b,onFinish:G,children:[(0,_.jsx)(P.Z.Password,{name:"apiKey",label:"API Key"}),(0,_.jsx)(y.Z,{}),(0,_.jsx)(x.Z.Title,{level:4,children:"From"}),(0,_.jsx)(P.Z,{name:"email",label:"Email"}),(0,_.jsx)(P.Z,{name:"name",label:"Name"})]})})})};w.default=E},31266:function(k,w,n){n.d(w,{$8:function(){return ee},Ej:function(){return Q},HE:function(){return M},Is:function(){return h},KU:function(){return W},N7:function(){return N},OT:function(){return L},PX:function(){return I},RH:function(){return T},TZ:function(){return x},Uo:function(){return S},_A:function(){return V},aW:function(){return _},fW:function(){return q},lp:function(){return G},o1:function(){return J},tr:function(){return c},yL:function(){return d}});var p=n(15009),t=n.n(p),m=n(99289),u=n.n(m),s=n(35312);function W(){return j.apply(this,arguments)}function j(){return j=u()(t()().mark(function r(){return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,s.request)("appsetting/list"));case 1:case"end":return i.stop()}},r)})),j.apply(this,arguments)}function S(r){return P.apply(this,arguments)}function P(){return P=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/layout/head/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),P.apply(this,arguments)}function L(r,a){return y.apply(this,arguments)}function y(){return y=u()(t()().mark(function r(a,i){return t()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,s.request)("appsetting/telegram/save/".concat(a),{method:"POST",data:i}));case 1:case"end":return D.stop()}},r)})),y.apply(this,arguments)}function x(r){return f.apply(this,arguments)}function f(){return f=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/telegram/".concat(a)));case 1:case"end":return e.stop()}},r)})),f.apply(this,arguments)}function _(r){return E.apply(this,arguments)}function E(){return E=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/telegram/test",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),E.apply(this,arguments)}function I(r){return b.apply(this,arguments)}function b(){return b=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/footer/".concat(a)));case 1:case"end":return e.stop()}},r)})),b.apply(this,arguments)}function G(r){return C.apply(this,arguments)}function C(){return C=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/footer/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),C.apply(this,arguments)}function T(r){return v.apply(this,arguments)}function v(){return v=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/social/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),v.apply(this,arguments)}function M(r){return o.apply(this,arguments)}function o(){return o=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/social/".concat(a)));case 1:case"end":return e.stop()}},r)})),o.apply(this,arguments)}function N(r){return O.apply(this,arguments)}function O(){return O=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/facebook/".concat(a)));case 1:case"end":return e.stop()}},r)})),O.apply(this,arguments)}function q(r){return g.apply(this,arguments)}function g(){return g=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/facebook/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),g.apply(this,arguments)}function h(){return l.apply(this,arguments)}function l(){return l=u()(t()().mark(function r(){return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,s.request)("appsetting/sendgrid"));case 1:case"end":return i.stop()}},r)})),l.apply(this,arguments)}function c(r){return R.apply(this,arguments)}function R(){return R=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/sendgrid/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),R.apply(this,arguments)}function d(r){return K.apply(this,arguments)}function K(){return K=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/sidebar",{params:a}));case 1:case"end":return e.stop()}},r)})),K.apply(this,arguments)}function V(r){return z.apply(this,arguments)}function z(){return z=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/work/add",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),z.apply(this,arguments)}function ee(r){return H.apply(this,arguments)}function H(){return H=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/".concat(a)));case 1:case"end":return e.stop()}},r)})),H.apply(this,arguments)}function J(r,a){return A.apply(this,arguments)}function A(){return A=u()(t()().mark(function r(a,i){return t()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,s.request)("appsetting/save/".concat(a),{method:"POST",data:i}));case 1:case"end":return D.stop()}},r)})),A.apply(this,arguments)}function Q(r){return B.apply(this,arguments)}function B(){return B=u()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/graph-api-explorer?query=".concat(a)));case 1:case"end":return e.stop()}},r)})),B.apply(this,arguments)}}}]);
