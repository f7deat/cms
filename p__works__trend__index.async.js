"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[790],{63434:function(B,E,e){var r=e(1413),i=e(91),o=e(22270),v=e(84567),n=e(62435),f=e(90789),M=e(96987),c=e(86074),g=["options","fieldProps","proFieldProps","valueEnum"],j=n.forwardRef(function(a,_){var m=a.options,P=a.fieldProps,W=a.proFieldProps,I=a.valueEnum,C=(0,i.Z)(a,g);return(0,c.jsx)(M.Z,(0,r.Z)({ref:_,valueType:"checkbox",valueEnum:(0,o.h)(I,void 0),fieldProps:(0,r.Z)({options:m},P),lightProps:(0,r.Z)({labelFormatter:function(){return(0,c.jsx)(M.Z,(0,r.Z)({ref:_,valueType:"checkbox",mode:"read",valueEnum:(0,o.h)(I,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:m},P),proFieldProps:W},C))}},C.lightProps),proFieldProps:W},C))}),h=n.forwardRef(function(a,_){var m=a.fieldProps,P=a.children;return(0,c.jsx)(v.Z,(0,r.Z)((0,r.Z)({ref:_},m),{},{children:P}))}),O=(0,f.G)(h,{valuePropName:"checked"}),s=O;s.Group=j,E.Z=s},5966:function(B,E,e){var r=e(1413),i=e(91),o=e(62435),v=e(96987),n=e(86074),f=["fieldProps","proFieldProps"],M=["fieldProps","proFieldProps"],c="text",g=function(s){var a=s.fieldProps,_=s.proFieldProps,m=(0,i.Z)(s,f);return(0,n.jsx)(v.Z,(0,r.Z)({valueType:c,fieldProps:a,filedConfig:{valueType:c},proFieldProps:_},m))},j=function(s){var a=s.fieldProps,_=s.proFieldProps,m=(0,i.Z)(s,M);return(0,n.jsx)(v.Z,(0,r.Z)({valueType:"password",fieldProps:a,proFieldProps:_,filedConfig:{valueType:c}},m))},h=g;h.Password=j,h.displayName="ProFormComponent",E.Z=h},34994:function(B,E,e){e.d(E,{A:function(){return Z}});var r=e(1413),i=e(8232),o=e(62435),v=e(89671),n=e(4942),f=e(97685),M=e(87462),c=e(50756),g=e(46976),j=function(l,d){return o.createElement(g.Z,(0,M.Z)({},l,{ref:d,icon:c.Z}))},h=o.forwardRef(j),O=e(21770),s=e(86333),a=e(46735),_=e(93421),m=e(94184),P=e.n(m),W=e(66758),I=e(2514),C=e(98082),D=function(l){var d;return(0,n.Z)({},l.componentCls,{"&-title":{marginBlockEnd:l.marginXL,fontWeight:"bold"},"&-container":(0,n.Z)({flexWrap:"wrap",maxWidth:"100%"},"> div".concat(l.antCls,"-space-item"),{maxWidth:"100%"}),"&-twoLine":(d={display:"block",width:"100%"},(0,n.Z)(d,"".concat(l.componentCls,"-title"),{width:"100%",margin:"8px 0"}),(0,n.Z)(d,"".concat(l.componentCls,"-container"),{paddingInlineStart:16}),(0,n.Z)(d,"".concat(l.antCls,"-space-item,").concat(l.antCls,"-form-item"),{width:"100%"}),(0,n.Z)(d,"".concat(l.antCls,"-form-item"),{"&-control":{display:"flex",alignItems:"center",justifyContent:"flex-end","&-input":{alignItems:"center",justifyContent:"flex-end","&-content":{flex:"none"}}}}),d)})};function K(p){return(0,C.Xj)("ProFormGroup",function(l){var d=(0,r.Z)((0,r.Z)({},l),{},{componentCls:".".concat(p)});return[D(d)]})}var t=e(86074),S=o.forwardRef(function(p,l){var d=o.useContext(W.Z),L=d.groupProps,u=(0,r.Z)((0,r.Z)({},L),p),V=u.children,X=u.collapsible,ce=u.defaultCollapsed,me=u.style,pe=u.labelLayout,H=u.title,G=H===void 0?p.label:H,Q=u.tooltip,J=u.align,Y=J===void 0?"start":J,w=u.direction,k=u.size,q=k===void 0?32:k,ve=u.titleStyle,ee=u.titleRender,R=u.spaceProps,b=u.extra,$=u.autoFocus,_e=(0,O.Z)(function(){return ce||!1},{value:p.collapsed,onChange:p.onCollapse}),re=(0,f.Z)(_e,2),N=re[0],Pe=re[1],Ee=(0,o.useContext)(a.ZP.ConfigContext),fe=Ee.getPrefixCls,ne=(0,I.zx)(p),he=ne.ColWrapper,oe=ne.RowWrapper,F=fe("pro-form-group"),te=K(F),Ce=te.wrapSSR,U=te.hashId,se=X&&(0,t.jsx)(h,{style:{marginInlineEnd:8},rotate:N?void 0:90}),ae=(0,t.jsx)(s.G,{label:se?(0,t.jsxs)("div",{children:[se,G]}):G,tooltip:Q}),le=(0,o.useCallback)(function(y){var A=y.children;return(0,t.jsx)(_.Z,(0,r.Z)((0,r.Z)({},R),{},{className:P()("".concat(F,"-container ").concat(U),R==null?void 0:R.className),size:q,align:Y,direction:w,style:(0,r.Z)({rowGap:0},R==null?void 0:R.style),children:A}))},[Y,F,w,U,q,R]),ie=ee?ee(ae,p):ae,Me=(0,o.useMemo)(function(){var y=[],A=o.Children.toArray(V).map(function(x,Oe){var z;return o.isValidElement(x)&&x!==null&&x!==void 0&&(z=x.props)!==null&&z!==void 0&&z.hidden?(y.push(x),null):Oe===0&&o.isValidElement(x)&&$?o.cloneElement(x,(0,r.Z)((0,r.Z)({},x.props),{},{autoFocus:$})):x});return[(0,t.jsx)(oe,{Wrapper:le,children:A},"children"),y.length>0?(0,t.jsx)("div",{style:{display:"none"},children:y}):null]},[V,oe,le,$]),de=(0,f.Z)(Me,2),De=de[0],xe=de[1];return Ce((0,t.jsx)(he,{children:(0,t.jsxs)("div",{className:P()(F,U,(0,n.Z)({},"".concat(F,"-twoLine"),pe==="twoLine")),style:me,ref:l,children:[xe,(G||Q||b)&&(0,t.jsx)("div",{className:"".concat(F,"-title ").concat(U).trim(),style:ve,onClick:function(){Pe(!N)},children:b?(0,t.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"},children:[ie,(0,t.jsx)("span",{onClick:function(A){return A.stopPropagation()},children:b})]}):ie}),(0,t.jsx)("div",{style:{display:X&&N?"none":void 0},children:De})]})}))});S.displayName="ProForm-Group";var T=S,ue=e(4499);function Z(p){return(0,t.jsx)(v.I,(0,r.Z)({layout:"vertical",submitter:{render:function(d,L){return L.reverse()}},contentRender:function(d,L){return(0,t.jsxs)(t.Fragment,{children:[d,L]})}},p))}Z.Group=T,Z.useForm=i.Z.useForm,Z.Item=ue.Z,Z.useWatch=i.Z.useWatch,Z.ErrorList=i.Z.ErrorList,Z.Provider=i.Z.Provider,Z.useFormInstance=i.Z.useFormInstance},85335:function(B,E,e){var r=e(15009),i=e.n(r),o=e(99289),v=e.n(o),n=e(66352),f=e(28199),M=e(34994),c=e(5966),g=e(63434),j=e(35312),h=e(58301),O=e(62435),s=e(86074),a=function(){var m=(0,j.useParams)(),P=m.id,W=(0,O.useRef)();(0,O.useEffect)(function(){(0,n.Mk)(P).then(function(C){var D;(D=W.current)===null||D===void 0||D.setFields([{name:"name",value:C.name},{name:"active",value:C.active}])})},[P]);var I=function(){var C=v()(i()().mark(function D(K){var t;return i()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,(0,n.Qb)(K);case 2:t=T.sent,t.succeeded?h.ZP.success("Saved!"):h.ZP.error(t.errors[0].description);case 4:case"end":return T.stop()}},D)}));return function(K){return C.apply(this,arguments)}}();return(0,s.jsx)(f.Z,{title:"Info",children:(0,s.jsxs)(M.A,{formRef:W,onFinish:I,children:[(0,s.jsx)(c.Z,{hidden:!0,name:"id",initialValue:P}),(0,s.jsx)(c.Z,{name:"name",label:"Name"}),(0,s.jsx)(g.Z,{name:"active",label:"Active"})]})})};E.Z=a},46015:function(B,E,e){e.r(E);var r=e(85335),i=e(63386),o=e(71230),v=e(15746),n=e(86074),f=function(){return(0,n.jsx)(i._z,{children:(0,n.jsxs)(o.Z,{gutter:16,children:[(0,n.jsx)(v.Z,{md:16}),(0,n.jsx)(v.Z,{md:8,children:(0,n.jsx)(r.Z,{})})]})})};E.default=f}}]);
