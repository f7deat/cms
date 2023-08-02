"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3780],{5966:function(ae,W,t){var p=t(1413),n=t(91),m=t(62435),i=t(19617),u=t(86074),I=["fieldProps","proFieldProps"],S=["fieldProps","proFieldProps"],b="text",P=function(f){var h=f.fieldProps,E=f.proFieldProps,L=(0,n.Z)(f,I);return(0,u.jsx)(i.Z,(0,p.Z)({valueType:b,fieldProps:h,filedConfig:{valueType:b},proFieldProps:E},L))},A=function(f){var h=f.fieldProps,E=f.proFieldProps,L=(0,n.Z)(f,S);return(0,u.jsx)(i.Z,(0,p.Z)({valueType:"password",fieldProps:h,proFieldProps:E,filedConfig:{valueType:b}},L))},y=P;y.Password=A,y.displayName="ProFormComponent",W.Z=y},34994:function(ae,W,t){t.d(W,{A:function(){return g}});var p=t(1413),n=t(12029),m=t(62435),i=t(89671),u=t(4942),I=t(97685),S=t(87462),b=t(50756),P=t(46976),A=function(l,c){return m.createElement(P.Z,(0,S.Z)({},l,{ref:c,icon:b.Z}))},y=m.forwardRef(A),F=t(21770),f=t(86333),h=t(17093),E=t(42075),L=t(94184),j=t.n(L),X=t(66758),O=t(2514),D=t(14855),_=function(l){var c;return(0,u.Z)({},l.componentCls,{"&-title":{marginBlockEnd:l.marginXL,fontWeight:"bold"},"&-container":(0,u.Z)({flexWrap:"wrap",maxWidth:"100%"},"> div".concat(l.antCls,"-space-item"),{maxWidth:"100%"}),"&-twoLine":(c={display:"block",width:"100%"},(0,u.Z)(c,"".concat(l.componentCls,"-title"),{width:"100%",margin:"8px 0"}),(0,u.Z)(c,"".concat(l.componentCls,"-container"),{paddingInlineStart:16}),(0,u.Z)(c,"".concat(l.antCls,"-space-item,").concat(l.antCls,"-form-item"),{width:"100%"}),(0,u.Z)(c,"".concat(l.antCls,"-form-item"),{"&-control":{display:"flex",alignItems:"center",justifyContent:"flex-end","&-input":{alignItems:"center",justifyContent:"flex-end","&-content":{flex:"none"}}}}),c)})};function w(v){return(0,D.Xj)("ProFormGroup",function(l){var c=(0,p.Z)((0,p.Z)({},l),{},{componentCls:".".concat(v)});return[_(c)]})}var o=t(86074),V=m.forwardRef(function(v,l){var c=m.useContext(X.Z),R=c.groupProps,d=(0,p.Z)((0,p.Z)({},R),v),B=d.children,k=d.collapsible,J=d.defaultCollapsed,ue=d.style,Q=d.labelLayout,q=d.title,$=q===void 0?v.label:q,ee=d.tooltip,U=d.align,re=U===void 0?"start":U,G=d.direction,ne=d.size,H=ne===void 0?32:ne,ie=d.titleStyle,N=d.titleRender,M=d.spaceProps,x=d.extra,r=d.autoFocus,a=(0,F.Z)(function(){return J||!1},{value:v.collapsed,onChange:v.onCollapse}),s=(0,I.Z)(a,2),e=s[0],T=s[1],ve=(0,m.useContext)(h.ZP.ConfigContext),ge=ve.getPrefixCls,le=(0,O.zx)(v),Pe=le.ColWrapper,pe=le.RowWrapper,z=ge("pro-form-group"),ce=w(z),ye=ce.wrapSSR,te=ce.hashId,de=k&&(0,o.jsx)(y,{style:{marginInlineEnd:8},rotate:e?void 0:90}),me=(0,o.jsx)(f.G,{label:de?(0,o.jsxs)("div",{children:[de,$]}):$,tooltip:ee}),fe=(0,m.useCallback)(function(K){var Y=K.children;return(0,o.jsx)(E.Z,(0,p.Z)((0,p.Z)({},M),{},{className:j()("".concat(z,"-container ").concat(te),M==null?void 0:M.className),size:H,align:re,direction:G,style:(0,p.Z)({rowGap:0},M==null?void 0:M.style),children:Y}))},[re,z,G,te,H,M]),he=N?N(me,v):me,Ee=(0,m.useMemo)(function(){var K=[],Y=m.Children.toArray(B).map(function(Z,Te){var oe;return m.isValidElement(Z)&&Z!==null&&Z!==void 0&&(oe=Z.props)!==null&&oe!==void 0&&oe.hidden?(K.push(Z),null):Te===0&&m.isValidElement(Z)&&r?m.cloneElement(Z,(0,p.Z)((0,p.Z)({},Z.props),{},{autoFocus:r})):Z});return[(0,o.jsx)(pe,{Wrapper:fe,children:Y},"children"),K.length>0?(0,o.jsx)("div",{style:{display:"none"},children:K}):null]},[B,pe,fe,r]),_e=(0,I.Z)(Ee,2),Oe=_e[0],Ce=_e[1];return ye((0,o.jsx)(Pe,{children:(0,o.jsxs)("div",{className:j()(z,te,(0,u.Z)({},"".concat(z,"-twoLine"),Q==="twoLine")),style:ue,ref:l,children:[Ce,($||ee||x)&&(0,o.jsx)("div",{className:"".concat(z,"-title ").concat(te).trim(),style:ie,onClick:function(){T(!e)},children:x?(0,o.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"},children:[he,(0,o.jsx)("span",{onClick:function(Y){return Y.stopPropagation()},children:x})]}):he}),(0,o.jsx)("div",{style:{display:k&&e?"none":void 0},children:Oe})]})}))});V.displayName="ProForm-Group";var C=V,se=t(62370);function g(v){return(0,o.jsx)(i.I,(0,p.Z)({layout:"vertical",submitter:{render:function(c,R){return R.reverse()}},contentRender:function(c,R){return(0,o.jsxs)(o.Fragment,{children:[c,R]})}},v))}g.Group=C,g.useForm=n.Z.useForm,g.Item=se.Z,g.useWatch=n.Z.useWatch,g.ErrorList=n.Z.ErrorList,g.Provider=n.Z.Provider,g.useFormInstance=n.Z.useFormInstance},55565:function(ae,W,t){t.r(W);var p=t(15009),n=t.n(p),m=t(99289),i=t.n(m),u=t(31266),I=t(63386),S=t(28199),b=t(34994),P=t(5966),A=t(27790),y=t(96074),F=t(25514),f=t(62435),h=t(86074),E=function(){var j=(0,f.useRef)();(0,f.useEffect)(function(){(0,u.Is)().then(function(O){var D,_,w;(D=j.current)===null||D===void 0||D.setFields([{name:"apiKey",value:O.apiKey},{name:"name",value:(_=O.from)===null||_===void 0?void 0:_.name},{name:"email",value:(w=O.from)===null||w===void 0?void 0:w.email}])})},[]);var X=function(){var O=i()(n()().mark(function D(_){var w,o;return n()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return w={apiKey:_.apiKey,from:{email:_.email,name:_.name}},C.next=3,(0,u.tr)(w);case 3:o=C.sent,o.succeeded&&A.ZP.success("Saved!");case 5:case"end":return C.stop()}},D)}));return function(_){return O.apply(this,arguments)}}();return(0,h.jsx)(I._z,{title:"SendGrid",subTitle:"SendGrid l\xE0 m\u1ED9t d\u1ECBch v\u1EE5 g\u1EEDi email",children:(0,h.jsx)(S.Z,{children:(0,h.jsxs)(b.A,{formRef:j,onFinish:X,children:[(0,h.jsx)(P.Z.Password,{name:"apiKey",label:"API Key"}),(0,h.jsx)(y.Z,{}),(0,h.jsx)(F.Z.Title,{level:4,children:"From"}),(0,h.jsx)(P.Z,{name:"email",label:"Email"}),(0,h.jsx)(P.Z,{name:"name",label:"Name"})]})})})};W.default=E},31266:function(ae,W,t){t.d(W,{HE:function(){return w},Is:function(){return ue},KU:function(){return I},N7:function(){return d},OT:function(){return A},Op:function(){return M},PX:function(){return L},Pg:function(){return v},RH:function(){return D},TJ:function(){return c},TZ:function(){return F},Uo:function(){return b},WX:function(){return ne},_A:function(){return re},aW:function(){return h},ad:function(){return se},fW:function(){return k},lX:function(){return V},lp:function(){return X},th:function(){return ie},tr:function(){return q},yL:function(){return ee}});var p=t(15009),n=t.n(p),m=t(99289),i=t.n(m),u=t(35312);function I(){return S.apply(this,arguments)}function S(){return S=i()(n()().mark(function r(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,u.request)("appsetting/list"));case 1:case"end":return s.stop()}},r)})),S.apply(this,arguments)}function b(r){return P.apply(this,arguments)}function P(){return P=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/layout/head/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),P.apply(this,arguments)}function A(r,a){return y.apply(this,arguments)}function y(){return y=i()(n()().mark(function r(a,s){return n()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",(0,u.request)("appsetting/telegram/save/".concat(a),{method:"POST",data:s}));case 1:case"end":return T.stop()}},r)})),y.apply(this,arguments)}function F(r){return f.apply(this,arguments)}function f(){return f=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/telegram/".concat(a)));case 1:case"end":return e.stop()}},r)})),f.apply(this,arguments)}function h(r){return E.apply(this,arguments)}function E(){return E=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/telegram/test",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),E.apply(this,arguments)}function L(r){return j.apply(this,arguments)}function j(){return j=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/footer/".concat(a)));case 1:case"end":return e.stop()}},r)})),j.apply(this,arguments)}function X(r){return O.apply(this,arguments)}function O(){return O=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/footer/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),O.apply(this,arguments)}function D(r){return _.apply(this,arguments)}function _(){return _=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/social/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),_.apply(this,arguments)}function w(r){return o.apply(this,arguments)}function o(){return o=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/social/".concat(a)));case 1:case"end":return e.stop()}},r)})),o.apply(this,arguments)}function V(){return C.apply(this,arguments)}function C(){return C=i()(n()().mark(function r(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,u.request)("appsetting/header/templates"));case 1:case"end":return s.stop()}},r)})),C.apply(this,arguments)}function se(r){return g.apply(this,arguments)}function g(){return g=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/header/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),g.apply(this,arguments)}function v(r){return l.apply(this,arguments)}function l(){return l=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/header/".concat(a)));case 1:case"end":return e.stop()}},r)})),l.apply(this,arguments)}function c(r){return R.apply(this,arguments)}function R(){return R=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/header/logo",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),R.apply(this,arguments)}function d(r){return B.apply(this,arguments)}function B(){return B=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/facebook/".concat(a)));case 1:case"end":return e.stop()}},r)})),B.apply(this,arguments)}function k(r){return J.apply(this,arguments)}function J(){return J=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/facebook/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),J.apply(this,arguments)}function ue(){return Q.apply(this,arguments)}function Q(){return Q=i()(n()().mark(function r(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,u.request)("appsetting/sendgrid"));case 1:case"end":return s.stop()}},r)})),Q.apply(this,arguments)}function q(r){return $.apply(this,arguments)}function $(){return $=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/sendgrid/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),$.apply(this,arguments)}function ee(r){return U.apply(this,arguments)}function U(){return U=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/sidebar",{params:a}));case 1:case"end":return e.stop()}},r)})),U.apply(this,arguments)}function re(r){return G.apply(this,arguments)}function G(){return G=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/work/add",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),G.apply(this,arguments)}function ne(r){return H.apply(this,arguments)}function H(){return H=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/".concat(a)));case 1:case"end":return e.stop()}},r)})),H.apply(this,arguments)}function ie(r,a){return N.apply(this,arguments)}function N(){return N=i()(n()().mark(function r(a,s){return n()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",(0,u.request)("appsetting/save/".concat(a),{method:"POST",data:s}));case 1:case"end":return T.stop()}},r)})),N.apply(this,arguments)}function M(r){return x.apply(this,arguments)}function x(){return x=i()(n()().mark(function r(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("appsetting/by-name/".concat(a)));case 1:case"end":return e.stop()}},r)})),x.apply(this,arguments)}}}]);
