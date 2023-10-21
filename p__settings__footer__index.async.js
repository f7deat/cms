"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8825],{64317:function(Y,R,r){var c=r(1413),n=r(91),v=r(22270),u=r(62435),s=r(66758),D=r(96987),E=r(86074),M=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],T=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],L=u.forwardRef(function(o,f){var C=o.fieldProps,B=o.children,S=o.params,b=o.proFieldProps,O=o.mode,w=o.valueEnum,l=o.request,W=o.showSearch,j=o.options,x=(0,n.Z)(o,M),p=(0,u.useContext)(s.Z);return(0,E.jsx)(D.Z,(0,c.Z)((0,c.Z)({valueEnum:(0,v.h)(w),request:l,params:S,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,c.Z)({options:j,mode:O,showSearch:W,getPopupContainer:p.getPopupContainer},C),ref:f,proFieldProps:b},x),{},{children:B}))}),g=u.forwardRef(function(o,f){var C=o.fieldProps,B=o.children,S=o.params,b=o.proFieldProps,O=o.mode,w=o.valueEnum,l=o.request,W=o.options,j=(0,n.Z)(o,T),x=(0,c.Z)({options:W,mode:O||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},C),p=(0,u.useContext)(s.Z);return(0,E.jsx)(D.Z,(0,c.Z)((0,c.Z)({valueEnum:(0,v.h)(w),request:l,params:S,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,c.Z)({getPopupContainer:p.getPopupContainer},x),ref:f,proFieldProps:b},j),{},{children:B}))}),I=L,P=g,y=I;y.SearchSelect=P,y.displayName="ProFormComponent",R.Z=y},5966:function(Y,R,r){var c=r(1413),n=r(91),v=r(62435),u=r(96987),s=r(86074),D=["fieldProps","proFieldProps"],E=["fieldProps","proFieldProps"],M="text",T=function(P){var y=P.fieldProps,o=P.proFieldProps,f=(0,n.Z)(P,D);return(0,s.jsx)(u.Z,(0,c.Z)({valueType:M,fieldProps:y,filedConfig:{valueType:M},proFieldProps:o},f))},L=function(P){var y=P.fieldProps,o=P.proFieldProps,f=(0,n.Z)(P,E);return(0,s.jsx)(u.Z,(0,c.Z)({valueType:"password",fieldProps:y,proFieldProps:o,filedConfig:{valueType:M}},f))},g=T;g.Password=L,g.displayName="ProFormComponent",R.Z=g},34994:function(Y,R,r){r.d(R,{A:function(){return p}});var c=r(1413),n=r(8232),v=r(62435),u=r(89671),s=r(4942),D=r(97685),E=r(87462),M=r(50756),T=r(46976),L=function(d,h){return v.createElement(T.Z,(0,E.Z)({},d,{ref:h,icon:M.Z}))},g=v.forwardRef(L),I=r(21770),P=r(86333),y=r(46735),o=r(93421),f=r(94184),C=r.n(f),B=r(66758),S=r(2514),b=r(98082),O=function(d){var h;return(0,s.Z)({},d.componentCls,{"&-title":{marginBlockEnd:d.marginXL,fontWeight:"bold"},"&-container":(0,s.Z)({flexWrap:"wrap",maxWidth:"100%"},"> div".concat(d.antCls,"-space-item"),{maxWidth:"100%"}),"&-twoLine":(h={display:"block",width:"100%"},(0,s.Z)(h,"".concat(d.componentCls,"-title"),{width:"100%",margin:"8px 0"}),(0,s.Z)(h,"".concat(d.componentCls,"-container"),{paddingInlineStart:16}),(0,s.Z)(h,"".concat(d.antCls,"-space-item,").concat(d.antCls,"-form-item"),{width:"100%"}),(0,s.Z)(h,"".concat(d.antCls,"-form-item"),{"&-control":{display:"flex",alignItems:"center",justifyContent:"flex-end","&-input":{alignItems:"center",justifyContent:"flex-end","&-content":{flex:"none"}}}}),h)})};function w(_){return(0,b.Xj)("ProFormGroup",function(d){var h=(0,c.Z)((0,c.Z)({},d),{},{componentCls:".".concat(_)});return[O(h)]})}var l=r(86074),W=v.forwardRef(function(_,d){var h=v.useContext(B.Z),F=h.groupProps,m=(0,c.Z)((0,c.Z)({},F),_),G=m.children,J=m.collapsible,z=m.defaultCollapsed,ee=m.style,V=m.labelLayout,Q=m.title,K=Q===void 0?_.label:Q,k=m.tooltip,N=m.align,t=N===void 0?"start":N,a=m.direction,i=m.size,e=i===void 0?32:i,Z=m.titleStyle,se=m.titleRender,U=m.spaceProps,re=m.extra,te=m.autoFocus,fe=(0,I.Z)(function(){return z||!1},{value:_.collapsed,onChange:_.onCollapse}),oe=(0,D.Z)(fe,2),ne=oe[0],he=oe[1],ve=(0,v.useContext)(y.ZP.ConfigContext),Pe=ve.getPrefixCls,ue=(0,S.zx)(_),ge=ue.ColWrapper,ie=ue.RowWrapper,H=Pe("pro-form-group"),le=w(H),Ee=le.wrapSSR,q=le.hashId,ce=J&&(0,l.jsx)(g,{style:{marginInlineEnd:8},rotate:ne?void 0:90}),pe=(0,l.jsx)(P.G,{label:ce?(0,l.jsxs)("div",{children:[ce,K]}):K,tooltip:k}),de=(0,v.useCallback)(function($){var X=$.children;return(0,l.jsx)(o.Z,(0,c.Z)((0,c.Z)({},U),{},{className:C()("".concat(H,"-container ").concat(q),U==null?void 0:U.className),size:e,align:t,direction:a,style:(0,c.Z)({rowGap:0},U==null?void 0:U.style),children:X}))},[t,H,a,q,e,U]),me=se?se(pe,_):pe,ye=(0,v.useMemo)(function(){var $=[],X=v.Children.toArray(G).map(function(A,De){var ae;return v.isValidElement(A)&&A!==null&&A!==void 0&&(ae=A.props)!==null&&ae!==void 0&&ae.hidden?($.push(A),null):De===0&&v.isValidElement(A)&&te?v.cloneElement(A,(0,c.Z)((0,c.Z)({},A.props),{},{autoFocus:te})):A});return[(0,l.jsx)(ie,{Wrapper:de,children:X},"children"),$.length>0?(0,l.jsx)("div",{style:{display:"none"},children:$}):null]},[G,ie,de,te]),_e=(0,D.Z)(ye,2),Ce=_e[0],Oe=_e[1];return Ee((0,l.jsx)(ge,{children:(0,l.jsxs)("div",{className:C()(H,q,(0,s.Z)({},"".concat(H,"-twoLine"),V==="twoLine")),style:ee,ref:d,children:[Oe,(K||k||re)&&(0,l.jsx)("div",{className:"".concat(H,"-title ").concat(q).trim(),style:Z,onClick:function(){he(!ne)},children:re?(0,l.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"},children:[me,(0,l.jsx)("span",{onClick:function(X){return X.stopPropagation()},children:re})]}):me}),(0,l.jsx)("div",{style:{display:J&&ne?"none":void 0},children:Ce})]})}))});W.displayName="ProForm-Group";var j=W,x=r(4499);function p(_){return(0,l.jsx)(u.I,(0,c.Z)({layout:"vertical",submitter:{render:function(h,F){return F.reverse()}},contentRender:function(h,F){return(0,l.jsxs)(l.Fragment,{children:[h,F]})}},_))}p.Group=j,p.useForm=n.Z.useForm,p.Item=x.Z,p.useWatch=n.Z.useWatch,p.ErrorList=n.Z.ErrorList,p.Provider=n.Z.Provider,p.useFormInstance=n.Z.useFormInstance},93806:function(Y,R,r){r.r(R);var c=r(15009),n=r.n(c),v=r(99289),u=r.n(v),s=r(5574),D=r.n(s),E=r(31266),M=r(63386),T=r(28199),L=r(34994),g=r(5966),I=r(64317),P=r(35312),y=r(58301),o=r(62435),f=r(86074),C=function(){var S=(0,P.useParams)(),b=S.id,O=(0,o.useRef)(),w=(0,o.useState)([]),l=D()(w,2),W=l[0],j=l[1];(0,o.useEffect)(function(){(0,E.PX)(b).then(function(p){var _;j(p.templates),(_=O.current)===null||_===void 0||_.setFields([{name:"companyName",value:p.companyName},{name:"email",value:p.email},{name:"phoneNumber",value:p.phoneNumber},{name:"viewName",value:p.viewName}])})},[]);var x=function(){var p=u()(n()().mark(function _(d){var h;return n()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,E.o1)(b,d);case 2:h=m.sent,h.succeeded&&y.ZP.success("Saved!");case 4:case"end":return m.stop()}},_)}));return function(d){return p.apply(this,arguments)}}();return(0,f.jsx)(M._z,{children:(0,f.jsx)(T.Z,{children:(0,f.jsxs)(L.A,{formRef:O,onFinish:x,children:[(0,f.jsx)(g.Z,{name:"id",initialValue:b,hidden:!0}),(0,f.jsx)(g.Z,{name:"companyName",label:"Your company"}),(0,f.jsx)(g.Z,{name:"email",label:"Email"}),(0,f.jsx)(g.Z,{name:"phoneNumber",label:"Phone number"}),(0,f.jsx)(I.Z,{options:W,name:"viewName",label:"Template",rules:[{required:!0}]})]})})})};R.default=C},31266:function(Y,R,r){r.d(R,{$8:function(){return J},Ej:function(){return k},HE:function(){return b},Is:function(){return x},KU:function(){return D},N7:function(){return w},OT:function(){return L},PX:function(){return f},Pg:function(){return ee},RH:function(){return B},TZ:function(){return I},Uo:function(){return M},_A:function(){return m},aW:function(){return y},fW:function(){return W},o1:function(){return Q},tr:function(){return _},yL:function(){return h}});var c=r(15009),n=r.n(c),v=r(99289),u=r.n(v),s=r(35312);function D(){return E.apply(this,arguments)}function E(){return E=u()(n()().mark(function t(){return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,s.request)("setting/list"));case 1:case"end":return i.stop()}},t)})),E.apply(this,arguments)}function M(t){return T.apply(this,arguments)}function T(){return T=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/layout/head/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),T.apply(this,arguments)}function L(t,a){return g.apply(this,arguments)}function g(){return g=u()(n()().mark(function t(a,i){return n()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.abrupt("return",(0,s.request)("setting/telegram/save/".concat(a),{method:"POST",data:i}));case 1:case"end":return Z.stop()}},t)})),g.apply(this,arguments)}function I(t){return P.apply(this,arguments)}function P(){return P=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/telegram/".concat(a)));case 1:case"end":return e.stop()}},t)})),P.apply(this,arguments)}function y(t){return o.apply(this,arguments)}function o(){return o=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/telegram/test",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),o.apply(this,arguments)}function f(t){return C.apply(this,arguments)}function C(){return C=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/footer/".concat(a)));case 1:case"end":return e.stop()}},t)})),C.apply(this,arguments)}function B(t){return S.apply(this,arguments)}function S(){return S=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/social/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),S.apply(this,arguments)}function b(t){return O.apply(this,arguments)}function O(){return O=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/social/".concat(a)));case 1:case"end":return e.stop()}},t)})),O.apply(this,arguments)}function w(t){return l.apply(this,arguments)}function l(){return l=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/facebook/".concat(a)));case 1:case"end":return e.stop()}},t)})),l.apply(this,arguments)}function W(t){return j.apply(this,arguments)}function j(){return j=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/facebook/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),j.apply(this,arguments)}function x(){return p.apply(this,arguments)}function p(){return p=u()(n()().mark(function t(){return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,s.request)("setting/sendgrid"));case 1:case"end":return i.stop()}},t)})),p.apply(this,arguments)}function _(t){return d.apply(this,arguments)}function d(){return d=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/sendgrid/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),d.apply(this,arguments)}function h(t){return F.apply(this,arguments)}function F(){return F=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/sidebar",{params:a}));case 1:case"end":return e.stop()}},t)})),F.apply(this,arguments)}function m(t){return G.apply(this,arguments)}function G(){return G=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/work/add",{method:"POST",data:a}));case 1:case"end":return e.stop()}},t)})),G.apply(this,arguments)}function J(t){return z.apply(this,arguments)}function z(){return z=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/".concat(a)));case 1:case"end":return e.stop()}},t)})),z.apply(this,arguments)}function ee(t){return V.apply(this,arguments)}function V(){return V=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/header/".concat(a)));case 1:case"end":return e.stop()}},t)})),V.apply(this,arguments)}function Q(t,a){return K.apply(this,arguments)}function K(){return K=u()(n()().mark(function t(a,i){return n()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.abrupt("return",(0,s.request)("setting/save/".concat(a),{method:"POST",data:i}));case 1:case"end":return Z.stop()}},t)})),K.apply(this,arguments)}function k(t){return N.apply(this,arguments)}function N(){return N=u()(n()().mark(function t(a){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("setting/graph-api-explorer?query=".concat(a)));case 1:case"end":return e.stop()}},t)})),N.apply(this,arguments)}}}]);
