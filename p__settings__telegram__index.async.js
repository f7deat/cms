"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93],{90672:function(Y,M,n){var p=n(1413),t=n(91),d=n(62435),i=n(19617),s=n(86074),j=["fieldProps","proFieldProps"],y=function(P,R){var E=P.fieldProps,w=P.proFieldProps,f=(0,t.Z)(P,j);return(0,s.jsx)(i.Z,(0,p.Z)({ref:R,valueType:"textarea",fieldProps:E,proFieldProps:w},f))};M.Z=d.forwardRef(y)},5966:function(Y,M,n){var p=n(1413),t=n(91),d=n(62435),i=n(19617),s=n(86074),j=["fieldProps","proFieldProps"],y=["fieldProps","proFieldProps"],D="text",P=function(f){var b=f.fieldProps,T=f.proFieldProps,c=(0,t.Z)(f,j);return(0,s.jsx)(i.Z,(0,p.Z)({valueType:D,fieldProps:b,filedConfig:{valueType:D},proFieldProps:T},c))},R=function(f){var b=f.fieldProps,T=f.proFieldProps,c=(0,t.Z)(f,y);return(0,s.jsx)(i.Z,(0,p.Z)({valueType:"password",fieldProps:b,proFieldProps:T,filedConfig:{valueType:D}},c))},E=P;E.Password=R,E.displayName="ProFormComponent",M.Z=E},34994:function(Y,M,n){n.d(M,{A:function(){return m}});var p=n(1413),t=n(12029),d=n(62435),i=n(89671),s=n(4942),j=n(97685),y=n(87462),D=n(50756),P=n(46976),R=function(o,_){return d.createElement(P.Z,(0,y.Z)({},o,{ref:_,icon:D.Z}))},E=d.forwardRef(R),w=n(21770),f=n(86333),b=n(17093),T=n(42075),c=n(94184),I=n.n(c),q=n(66758),F=n(2514),x=n(14855),L=function(o){var _;return(0,s.Z)({},o.componentCls,{"&-title":{marginBlockEnd:o.marginXL,fontWeight:"bold"},"&-container":(0,s.Z)({flexWrap:"wrap",maxWidth:"100%"},"> div".concat(o.antCls,"-space-item"),{maxWidth:"100%"}),"&-twoLine":(_={display:"block",width:"100%"},(0,s.Z)(_,"".concat(o.componentCls,"-title"),{width:"100%",margin:"8px 0"}),(0,s.Z)(_,"".concat(o.componentCls,"-container"),{paddingInlineStart:16}),(0,s.Z)(_,"".concat(o.antCls,"-space-item,").concat(o.antCls,"-form-item"),{width:"100%"}),(0,s.Z)(_,"".concat(o.antCls,"-form-item"),{"&-control":{display:"flex",alignItems:"center",justifyContent:"flex-end","&-input":{alignItems:"center",justifyContent:"flex-end","&-content":{flex:"none"}}}}),_)})};function k(v){return(0,x.Xj)("ProFormGroup",function(o){var _=(0,p.Z)((0,p.Z)({},o),{},{componentCls:".".concat(v)});return[L(_)]})}var l=n(86074),O=d.forwardRef(function(v,o){var _=d.useContext(q.Z),W=_.groupProps,h=(0,p.Z)((0,p.Z)({},W),v),$=h.children,ee=h.collapsible,J=h.defaultCollapsed,ue=h.style,V=h.labelLayout,re=h.title,B=re===void 0?v.label:re,te=h.tooltip,G=h.align,ne=G===void 0?"start":G,H=h.direction,ae=h.size,N=ae===void 0?32:ae,ie=h.titleStyle,z=h.titleRender,Z=h.spaceProps,K=h.extra,r=h.autoFocus,a=(0,w.Z)(function(){return J||!1},{value:v.collapsed,onChange:v.onCollapse}),u=(0,j.Z)(a,2),e=u[0],C=u[1],ve=(0,d.useContext)(b.ZP.ConfigContext),ge=ve.getPrefixCls,le=(0,F.zx)(v),Pe=le.ColWrapper,pe=le.RowWrapper,X=ge("pro-form-group"),ce=k(X),Ee=ce.wrapSSR,se=ce.hashId,de=ee&&(0,l.jsx)(E,{style:{marginInlineEnd:8},rotate:e?void 0:90}),me=(0,l.jsx)(f.G,{label:de?(0,l.jsxs)("div",{children:[de,B]}):B,tooltip:te}),fe=(0,d.useCallback)(function(U){var Q=U.children;return(0,l.jsx)(T.Z,(0,p.Z)((0,p.Z)({},Z),{},{className:I()("".concat(X,"-container ").concat(se),Z==null?void 0:Z.className),size:N,align:ne,direction:H,style:(0,p.Z)({rowGap:0},Z==null?void 0:Z.style),children:Q}))},[ne,X,H,se,N,Z]),_e=z?z(me,v):me,ye=(0,d.useMemo)(function(){var U=[],Q=d.Children.toArray($).map(function(A,De){var oe;return d.isValidElement(A)&&A!==null&&A!==void 0&&(oe=A.props)!==null&&oe!==void 0&&oe.hidden?(U.push(A),null):De===0&&d.isValidElement(A)&&r?d.cloneElement(A,(0,p.Z)((0,p.Z)({},A.props),{},{autoFocus:r})):A});return[(0,l.jsx)(pe,{Wrapper:fe,children:Q},"children"),U.length>0?(0,l.jsx)("div",{style:{display:"none"},children:U}):null]},[$,pe,fe,r]),he=(0,j.Z)(ye,2),Te=he[0],Oe=he[1];return Ee((0,l.jsx)(Pe,{children:(0,l.jsxs)("div",{className:I()(X,se,(0,s.Z)({},"".concat(X,"-twoLine"),V==="twoLine")),style:ue,ref:o,children:[Oe,(B||te||K)&&(0,l.jsx)("div",{className:"".concat(X,"-title ").concat(se).trim(),style:ie,onClick:function(){C(!e)},children:K?(0,l.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"},children:[_e,(0,l.jsx)("span",{onClick:function(Q){return Q.stopPropagation()},children:K})]}):_e}),(0,l.jsx)("div",{style:{display:ee&&e?"none":void 0},children:Te})]})}))});O.displayName="ProForm-Group";var g=O,S=n(62370);function m(v){return(0,l.jsx)(i.I,(0,p.Z)({layout:"vertical",submitter:{render:function(_,W){return W.reverse()}},contentRender:function(_,W){return(0,l.jsxs)(l.Fragment,{children:[_,W]})}},v))}m.Group=g,m.useForm=t.Z.useForm,m.Item=S.Z,m.useWatch=t.Z.useWatch,m.ErrorList=t.Z.ErrorList,m.Provider=t.Z.Provider,m.useFormInstance=t.Z.useFormInstance},3318:function(Y,M,n){n.r(M);var p=n(15009),t=n.n(p),d=n(99289),i=n.n(d),s=n(31266),j=n(63386),y=n(28199),D=n(34994),P=n(5966),R=n(90672),E=n(35312),w=n(27790),f=n(71230),b=n(15746),T=n(62435),c=n(86074),I=function(){var F=(0,E.useParams)(),x=F.id,L=(0,T.useRef)();(0,T.useEffect)(function(){(0,s.TZ)(x).then(function(O){if(O){var g;(g=L.current)===null||g===void 0||g.setFields([{name:"token",value:O.token},{name:"chatId",value:O.chatId}])}})},[x]);var k=function(){var O=i()(t()().mark(function g(S){var m;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,s.OT)(x,S);case 2:m=o.sent,m.succeeded&&w.ZP.success("Saved!");case 4:case"end":return o.stop()}},g)}));return function(S){return O.apply(this,arguments)}}(),l=function(){var O=i()(t()().mark(function g(S){var m;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,s.aW)(S);case 2:m=o.sent,m.succeeded&&w.ZP.success("Sended");case 4:case"end":return o.stop()}},g)}));return function(S){return O.apply(this,arguments)}}();return(0,c.jsx)(j._z,{children:(0,c.jsxs)(f.Z,{gutter:16,children:[(0,c.jsx)(b.Z,{span:16,children:(0,c.jsx)(y.Z,{children:(0,c.jsxs)(D.A,{onFinish:k,formRef:L,children:[(0,c.jsx)(P.Z.Password,{name:"token",label:"Token",tooltip:"The token is a string, like 110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw, which is required to authorize the bot and send requests to the Bot API. Keep your token secure and store it safely, it can be used by anyone to control your bot"}),(0,c.jsx)(P.Z,{name:"chatId",label:"Chat ID"})]})})}),(0,c.jsx)(b.Z,{span:8,children:(0,c.jsx)(y.Z,{title:"Test",children:(0,c.jsx)(D.A,{onFinish:l,children:(0,c.jsx)(R.Z,{name:"message",label:"Message",rules:[{required:!0}]})})})})]})})};M.default=I},31266:function(Y,M,n){n.d(M,{HE:function(){return k},Is:function(){return ue},KU:function(){return j},N7:function(){return h},OT:function(){return R},Op:function(){return Z},PX:function(){return c},Pg:function(){return v},RH:function(){return x},TJ:function(){return _},TZ:function(){return w},Uo:function(){return D},WX:function(){return ae},_A:function(){return ne},aW:function(){return b},ad:function(){return S},fW:function(){return ee},lX:function(){return O},lp:function(){return q},th:function(){return ie},tr:function(){return re},yL:function(){return te}});var p=n(15009),t=n.n(p),d=n(99289),i=n.n(d),s=n(35312);function j(){return y.apply(this,arguments)}function y(){return y=i()(t()().mark(function r(){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,s.request)("appsetting/list"));case 1:case"end":return u.stop()}},r)})),y.apply(this,arguments)}function D(r){return P.apply(this,arguments)}function P(){return P=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/layout/head/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),P.apply(this,arguments)}function R(r,a){return E.apply(this,arguments)}function E(){return E=i()(t()().mark(function r(a,u){return t()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",(0,s.request)("appsetting/telegram/save/".concat(a),{method:"POST",data:u}));case 1:case"end":return C.stop()}},r)})),E.apply(this,arguments)}function w(r){return f.apply(this,arguments)}function f(){return f=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/telegram/".concat(a)));case 1:case"end":return e.stop()}},r)})),f.apply(this,arguments)}function b(r){return T.apply(this,arguments)}function T(){return T=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/telegram/test",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),T.apply(this,arguments)}function c(r){return I.apply(this,arguments)}function I(){return I=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/footer/".concat(a)));case 1:case"end":return e.stop()}},r)})),I.apply(this,arguments)}function q(r){return F.apply(this,arguments)}function F(){return F=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/footer/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),F.apply(this,arguments)}function x(r){return L.apply(this,arguments)}function L(){return L=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/social/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),L.apply(this,arguments)}function k(r){return l.apply(this,arguments)}function l(){return l=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/social/".concat(a)));case 1:case"end":return e.stop()}},r)})),l.apply(this,arguments)}function O(){return g.apply(this,arguments)}function g(){return g=i()(t()().mark(function r(){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,s.request)("appsetting/header/templates"));case 1:case"end":return u.stop()}},r)})),g.apply(this,arguments)}function S(r){return m.apply(this,arguments)}function m(){return m=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/header/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),m.apply(this,arguments)}function v(r){return o.apply(this,arguments)}function o(){return o=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/header/".concat(a)));case 1:case"end":return e.stop()}},r)})),o.apply(this,arguments)}function _(r){return W.apply(this,arguments)}function W(){return W=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/header/logo",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),W.apply(this,arguments)}function h(r){return $.apply(this,arguments)}function $(){return $=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/facebook/".concat(a)));case 1:case"end":return e.stop()}},r)})),$.apply(this,arguments)}function ee(r){return J.apply(this,arguments)}function J(){return J=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/facebook/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),J.apply(this,arguments)}function ue(){return V.apply(this,arguments)}function V(){return V=i()(t()().mark(function r(){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,s.request)("appsetting/sendgrid"));case 1:case"end":return u.stop()}},r)})),V.apply(this,arguments)}function re(r){return B.apply(this,arguments)}function B(){return B=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/sendgrid/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),B.apply(this,arguments)}function te(r){return G.apply(this,arguments)}function G(){return G=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/sidebar",{params:a}));case 1:case"end":return e.stop()}},r)})),G.apply(this,arguments)}function ne(r){return H.apply(this,arguments)}function H(){return H=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/work/add",{method:"POST",data:a}));case 1:case"end":return e.stop()}},r)})),H.apply(this,arguments)}function ae(r){return N.apply(this,arguments)}function N(){return N=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/".concat(a)));case 1:case"end":return e.stop()}},r)})),N.apply(this,arguments)}function ie(r,a){return z.apply(this,arguments)}function z(){return z=i()(t()().mark(function r(a,u){return t()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",(0,s.request)("appsetting/save/".concat(a),{method:"POST",data:u}));case 1:case"end":return C.stop()}},r)})),z.apply(this,arguments)}function Z(r){return K.apply(this,arguments)}function K(){return K=i()(t()().mark(function r(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("appsetting/by-name/".concat(a)));case 1:case"end":return e.stop()}},r)})),K.apply(this,arguments)}}}]);
