"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[618],{5966:function(b,x,e){var t=e(1413),u=e(91),a=e(62435),g=e(96987),i=e(86074),M=["fieldProps","proFieldProps"],j=["fieldProps","proFieldProps"],P="text",R=function(l){var _=l.fieldProps,Z=l.proFieldProps,E=(0,u.Z)(l,M);return(0,i.jsx)(g.Z,(0,t.Z)({valueType:P,fieldProps:_,filedConfig:{valueType:P},proFieldProps:Z},E))},I=function(l){var _=l.fieldProps,Z=l.proFieldProps,E=(0,u.Z)(l,j);return(0,i.jsx)(g.Z,(0,t.Z)({valueType:"password",fieldProps:_,proFieldProps:Z,filedConfig:{valueType:P}},E))},p=R;p.Password=I,p.displayName="ProFormComponent",x.Z=p},34994:function(b,x,e){e.d(x,{A:function(){return v}});var t=e(1413),u=e(8232),a=e(62435),g=e(89671),i=e(4942),M=e(97685),j=e(87462),P=e(50756),R=e(46976),I=function(n,o){return a.createElement(R.Z,(0,j.Z)({},n,{ref:o,icon:P.Z}))},p=a.forwardRef(I),D=e(21770),l=e(86333),_=e(46735),Z=e(93421),E=e(94184),y=e.n(E),L=e(66758),K=e(2514),T=e(98082),m=function(n){var o;return(0,i.Z)({},n.componentCls,{"&-title":{marginBlockEnd:n.marginXL,fontWeight:"bold"},"&-container":(0,i.Z)({flexWrap:"wrap",maxWidth:"100%"},"> div".concat(n.antCls,"-space-item"),{maxWidth:"100%"}),"&-twoLine":(o={display:"block",width:"100%"},(0,i.Z)(o,"".concat(n.componentCls,"-title"),{width:"100%",margin:"8px 0"}),(0,i.Z)(o,"".concat(n.componentCls,"-container"),{paddingInlineStart:16}),(0,i.Z)(o,"".concat(n.antCls,"-space-item,").concat(n.antCls,"-form-item"),{width:"100%"}),(0,i.Z)(o,"".concat(n.antCls,"-form-item"),{"&-control":{display:"flex",alignItems:"center",justifyContent:"flex-end","&-input":{alignItems:"center",justifyContent:"flex-end","&-content":{flex:"none"}}}}),o)})};function A(d){return(0,T.Xj)("ProFormGroup",function(n){var o=(0,t.Z)((0,t.Z)({},n),{},{componentCls:".".concat(d)});return[m(o)]})}var r=e(86074),S=a.forwardRef(function(d,n){var o=a.useContext(L.Z),W=o.groupProps,s=(0,t.Z)((0,t.Z)({},W),d),H=s.children,V=s.collapsible,ce=s.defaultCollapsed,pe=s.style,me=s.labelLayout,X=s.title,U=X===void 0?d.label:X,J=s.tooltip,Q=s.align,Y=Q===void 0?"start":Q,w=s.direction,k=s.size,q=k===void 0?32:k,ve=s.titleStyle,ee=s.titleRender,f=s.spaceProps,$=s.extra,G=s.autoFocus,fe=(0,D.Z)(function(){return ce||!1},{value:d.collapsed,onChange:d.onCollapse}),re=(0,M.Z)(fe,2),N=re[0],Pe=re[1],_e=(0,a.useContext)(_.ZP.ConfigContext),Ee=_e.getPrefixCls,ne=(0,K.zx)(d),he=ne.ColWrapper,te=ne.RowWrapper,O=Ee("pro-form-group"),oe=A(O),Ce=oe.wrapSSR,B=oe.hashId,se=V&&(0,r.jsx)(p,{style:{marginInlineEnd:8},rotate:N?void 0:90}),ae=(0,r.jsx)(l.G,{label:se?(0,r.jsxs)("div",{children:[se,U]}):U,tooltip:J}),le=(0,a.useCallback)(function(C){var F=C.children;return(0,r.jsx)(Z.Z,(0,t.Z)((0,t.Z)({},f),{},{className:y()("".concat(O,"-container ").concat(B),f==null?void 0:f.className),size:q,align:Y,direction:w,style:(0,t.Z)({rowGap:0},f==null?void 0:f.style),children:F}))},[Y,O,w,B,q,f]),ie=ee?ee(ae,d):ae,xe=(0,a.useMemo)(function(){var C=[],F=a.Children.toArray(H).map(function(c,De){var z;return a.isValidElement(c)&&c!==null&&c!==void 0&&(z=c.props)!==null&&z!==void 0&&z.hidden?(C.push(c),null):De===0&&a.isValidElement(c)&&G?a.cloneElement(c,(0,t.Z)((0,t.Z)({},c.props),{},{autoFocus:G})):c});return[(0,r.jsx)(te,{Wrapper:le,children:F},"children"),C.length>0?(0,r.jsx)("div",{style:{display:"none"},children:C}):null]},[H,te,le,G]),de=(0,M.Z)(xe,2),ge=de[0],Me=de[1];return Ce((0,r.jsx)(he,{children:(0,r.jsxs)("div",{className:y()(O,B,(0,i.Z)({},"".concat(O,"-twoLine"),me==="twoLine")),style:pe,ref:n,children:[Me,(U||J||$)&&(0,r.jsx)("div",{className:"".concat(O,"-title ").concat(B).trim(),style:ve,onClick:function(){Pe(!N)},children:$?(0,r.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"},children:[ie,(0,r.jsx)("span",{onClick:function(F){return F.stopPropagation()},children:$})]}):ie}),(0,r.jsx)("div",{style:{display:V&&N?"none":void 0},children:ge})]})}))});S.displayName="ProForm-Group";var h=S,ue=e(62370);function v(d){return(0,r.jsx)(g.I,(0,t.Z)({layout:"vertical",submitter:{render:function(o,W){return W.reverse()}},contentRender:function(o,W){return(0,r.jsxs)(r.Fragment,{children:[o,W]})}},d))}v.Group=h,v.useForm=u.Z.useForm,v.Item=ue.Z,v.useWatch=u.Z.useWatch,v.ErrorList=u.Z.ErrorList,v.Provider=u.Z.Provider,v.useFormInstance=u.Z.useFormInstance},64694:function(b,x,e){e.r(x);var t=e(15009),u=e.n(t),a=e(99289),g=e.n(a),i=e(66352),M=e(63386),j=e(28199),P=e(34994),R=e(5966),I=e(35312),p=e(58301),D=e(62435),l=e(86074),_=function(){var E=(0,I.useParams)(),y=E.id,L=(0,D.useRef)();(0,D.useEffect)(function(){(0,i.Tu)(y).then(function(T){var m;(m=L.current)===null||m===void 0||m.setFields([{name:"name",value:T.name}])})},[y]);var K=function(){var T=g()(u()().mark(function m(A){var r;return u()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,i.iH)(y,A);case 2:r=h.sent,r.succeeded?p.ZP.success("Saved!"):p.ZP.error(r.errors[0].description);case 4:case"end":return h.stop()}},m)}));return function(A){return T.apply(this,arguments)}}();return(0,l.jsx)(M._z,{children:(0,l.jsx)(j.Z,{children:(0,l.jsx)(P.A,{onFinish:K,formRef:L,children:(0,l.jsx)(R.Z,{name:"name",label:"Name"})})})})};x.default=_}}]);
