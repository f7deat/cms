"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6148],{90672:function($,h,e){var a=e(1413),d=e(91),t=e(62435),M=e(19617),l=e(86074),E=["fieldProps","proFieldProps"],D=function(f,R){var C=f.fieldProps,c=f.proFieldProps,Z=(0,d.Z)(f,E);return(0,l.jsx)(M.Z,(0,a.Z)({ref:R,valueType:"textarea",fieldProps:C,proFieldProps:c},Z))};h.Z=t.forwardRef(D)},34994:function($,h,e){e.d(h,{A:function(){return v}});var a=e(1413),d=e(12029),t=e(62435),M=e(89671),l=e(4942),E=e(97685),D=e(87462),y=e(50756),f=e(46976),R=function(n,o){return t.createElement(f.Z,(0,D.Z)({},n,{ref:o,icon:y.Z}))},C=t.forwardRef(R),c=e(21770),Z=e(86333),G=e(17093),I=e(42075),T=e(94184),g=e.n(T),m=e(66758),W=e(2514),L=e(14855),b=function(n){var o;return(0,l.Z)({},n.componentCls,{"&-title":{marginBlockEnd:n.marginXL,fontWeight:"bold"},"&-container":(0,l.Z)({flexWrap:"wrap",maxWidth:"100%"},"> div".concat(n.antCls,"-space-item"),{maxWidth:"100%"}),"&-twoLine":(o={display:"block",width:"100%"},(0,l.Z)(o,"".concat(n.componentCls,"-title"),{width:"100%",margin:"8px 0"}),(0,l.Z)(o,"".concat(n.componentCls,"-container"),{paddingInlineStart:16}),(0,l.Z)(o,"".concat(n.antCls,"-space-item,").concat(n.antCls,"-form-item"),{width:"100%"}),(0,l.Z)(o,"".concat(n.antCls,"-form-item"),{"&-control":{display:"flex",alignItems:"center",justifyContent:"flex-end","&-input":{alignItems:"center",justifyContent:"flex-end","&-content":{flex:"none"}}}}),o)})};function _(i){return(0,L.Xj)("ProFormGroup",function(n){var o=(0,a.Z)((0,a.Z)({},n),{},{componentCls:".".concat(i)});return[b(o)]})}var r=e(86074),z=t.forwardRef(function(i,n){var o=t.useContext(m.Z),O=o.groupProps,s=(0,a.Z)((0,a.Z)({},O),i),N=s.children,V=s.collapsible,ce=s.defaultCollapsed,me=s.style,ve=s.labelLayout,X=s.title,A=X===void 0?i.label:X,H=s.tooltip,J=s.align,Q=J===void 0?"start":J,Y=s.direction,w=s.size,k=w===void 0?32:w,pe=s.titleStyle,q=s.titleRender,p=s.spaceProps,B=s.extra,S=s.autoFocus,fe=(0,c.Z)(function(){return ce||!1},{value:i.collapsed,onChange:i.onCollapse}),ee=(0,E.Z)(fe,2),K=ee[0],_e=ee[1],Pe=(0,t.useContext)(G.ZP.ConfigContext),he=Pe.getPrefixCls,ne=(0,W.zx)(i),Ee=ne.ColWrapper,te=ne.RowWrapper,x=he("pro-form-group"),re=_(x),Ce=re.wrapSSR,F=re.hashId,oe=V&&(0,r.jsx)(C,{style:{marginInlineEnd:8},rotate:K?void 0:90}),se=(0,r.jsx)(Z.G,{label:oe?(0,r.jsxs)("div",{children:[oe,A]}):A,tooltip:H}),ae=(0,t.useCallback)(function(P){var j=P.children;return(0,r.jsx)(I.Z,(0,a.Z)((0,a.Z)({},p),{},{className:g()("".concat(x,"-container ").concat(F),p==null?void 0:p.className),size:k,align:Q,direction:Y,style:(0,a.Z)({rowGap:0},p==null?void 0:p.style),children:j}))},[Q,x,Y,F,k,p]),le=q?q(se,i):se,ge=(0,t.useMemo)(function(){var P=[],j=t.Children.toArray(N).map(function(u,De){var U;return t.isValidElement(u)&&u!==null&&u!==void 0&&(U=u.props)!==null&&U!==void 0&&U.hidden?(P.push(u),null):De===0&&t.isValidElement(u)&&S?t.cloneElement(u,(0,a.Z)((0,a.Z)({},u.props),{},{autoFocus:S})):u});return[(0,r.jsx)(te,{Wrapper:ae,children:j},"children"),P.length>0?(0,r.jsx)("div",{style:{display:"none"},children:P}):null]},[N,te,ae,S]),ie=(0,E.Z)(ge,2),xe=ie[0],Me=ie[1];return Ce((0,r.jsx)(Ee,{children:(0,r.jsxs)("div",{className:g()(x,F,(0,l.Z)({},"".concat(x,"-twoLine"),ve==="twoLine")),style:me,ref:n,children:[Me,(A||H||B)&&(0,r.jsx)("div",{className:"".concat(x,"-title ").concat(F).trim(),style:pe,onClick:function(){_e(!K)},children:B?(0,r.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"},children:[le,(0,r.jsx)("span",{onClick:function(j){return j.stopPropagation()},children:B})]}):le}),(0,r.jsx)("div",{style:{display:V&&K?"none":void 0},children:xe})]})}))});z.displayName="ProForm-Group";var de=z,ue=e(62370);function v(i){return(0,r.jsx)(M.I,(0,a.Z)({layout:"vertical",submitter:{render:function(o,O){return O.reverse()}},contentRender:function(o,O){return(0,r.jsxs)(r.Fragment,{children:[o,O]})}},i))}v.Group=de,v.useForm=d.Z.useForm,v.Item=ue.Z,v.useWatch=d.Z.useWatch,v.ErrorList=d.Z.ErrorList,v.Provider=d.Z.Provider,v.useFormInstance=d.Z.useFormInstance},35310:function($,h,e){e.r(h);var a=e(15009),d=e.n(a),t=e(99289),M=e.n(t),l=e(66352),E=e(63386),D=e(28199),y=e(34994),f=e(90672),R=e(27790),C=e(62435),c=e(86074),Z=function(){var I=(0,C.useRef)();(0,C.useEffect)(function(){(0,l.gb)(void 0).then(function(g){var m;(m=I.current)===null||m===void 0||m.setFields([{name:"arguments",value:g}])})},[]);var T=function(){var g=M()(d()().mark(function m(W){var L;return d()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,l.i7)(W);case 2:L=_.sent,L.succeeded&&R.ZP.success("Saved!");case 4:case"end":return _.stop()}},m)}));return function(W){return g.apply(this,arguments)}}();return(0,c.jsx)(E._z,{children:(0,c.jsx)(D.Z,{children:(0,c.jsx)(y.A,{onFinish:T,formRef:I,children:(0,c.jsx)(f.Z,{name:"arguments",label:"Content"})})})})};h.default=Z}}]);
