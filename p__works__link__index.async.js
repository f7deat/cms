"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1962],{63434:function(U,Z,e){var o=e(1413),u=e(91),a=e(22270),E=e(84567),d=e(62435),M=e(90789),C=e(96987),c=e(86074),T=["options","fieldProps","proFieldProps","valueEnum"],g=d.forwardRef(function(l,r){var _=l.options,n=l.fieldProps,O=l.proFieldProps,W=l.valueEnum,P=(0,u.Z)(l,T);return(0,c.jsx)(C.Z,(0,o.Z)({ref:r,valueType:"checkbox",valueEnum:(0,a.h)(W,void 0),fieldProps:(0,o.Z)({options:_},n),lightProps:(0,o.Z)({labelFormatter:function(){return(0,c.jsx)(C.Z,(0,o.Z)({ref:r,valueType:"checkbox",mode:"read",valueEnum:(0,a.h)(W,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:_},n),proFieldProps:O},P))}},P.lightProps),proFieldProps:O},P))}),D=d.forwardRef(function(l,r){var _=l.fieldProps,n=l.children;return(0,c.jsx)(E.Z,(0,o.Z)((0,o.Z)({ref:r},_),{},{children:n}))}),j=(0,M.G)(D,{valuePropName:"checked"}),s=j;s.Group=g,Z.Z=s},64317:function(U,Z,e){var o=e(1413),u=e(91),a=e(22270),E=e(62435),d=e(66758),M=e(96987),C=e(86074),c=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],T=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],g=E.forwardRef(function(r,_){var n=r.fieldProps,O=r.children,W=r.params,P=r.proFieldProps,p=r.mode,L=r.valueEnum,t=r.request,R=r.showSearch,m=r.options,F=(0,u.Z)(r,c),v=(0,E.useContext)(d.Z);return(0,C.jsx)(M.Z,(0,o.Z)((0,o.Z)({valueEnum:(0,a.h)(L),request:t,params:W,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:m,mode:p,showSearch:R,getPopupContainer:v.getPopupContainer},n),ref:_,proFieldProps:P},F),{},{children:O}))}),D=E.forwardRef(function(r,_){var n=r.fieldProps,O=r.children,W=r.params,P=r.proFieldProps,p=r.mode,L=r.valueEnum,t=r.request,R=r.options,m=(0,u.Z)(r,T),F=(0,o.Z)({options:R,mode:p||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},n),v=(0,E.useContext)(d.Z);return(0,C.jsx)(M.Z,(0,o.Z)((0,o.Z)({valueEnum:(0,a.h)(L),request:t,params:W,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({getPopupContainer:v.getPopupContainer},F),ref:_,proFieldProps:P},m),{},{children:O}))}),j=g,s=D,l=j;l.SearchSelect=s,l.displayName="ProFormComponent",Z.Z=l},5966:function(U,Z,e){var o=e(1413),u=e(91),a=e(62435),E=e(96987),d=e(86074),M=["fieldProps","proFieldProps"],C=["fieldProps","proFieldProps"],c="text",T=function(s){var l=s.fieldProps,r=s.proFieldProps,_=(0,u.Z)(s,M);return(0,d.jsx)(E.Z,(0,o.Z)({valueType:c,fieldProps:l,filedConfig:{valueType:c},proFieldProps:r},_))},g=function(s){var l=s.fieldProps,r=s.proFieldProps,_=(0,u.Z)(s,C);return(0,d.jsx)(E.Z,(0,o.Z)({valueType:"password",fieldProps:l,proFieldProps:r,filedConfig:{valueType:c}},_))},D=T;D.Password=g,D.displayName="ProFormComponent",Z.Z=D},34994:function(U,Z,e){e.d(Z,{A:function(){return v}});var o=e(1413),u=e(8232),a=e(62435),E=e(89671),d=e(4942),M=e(97685),C=e(87462),c=e(50756),T=e(46976),g=function(i,f){return a.createElement(T.Z,(0,C.Z)({},i,{ref:f,icon:c.Z}))},D=a.forwardRef(g),j=e(21770),s=e(86333),l=e(46735),r=e(93421),_=e(94184),n=e.n(_),O=e(66758),W=e(2514),P=e(98082),p=function(i){var f;return(0,d.Z)({},i.componentCls,{"&-title":{marginBlockEnd:i.marginXL,fontWeight:"bold"},"&-container":(0,d.Z)({flexWrap:"wrap",maxWidth:"100%"},"> div".concat(i.antCls,"-space-item"),{maxWidth:"100%"}),"&-twoLine":(f={display:"block",width:"100%"},(0,d.Z)(f,"".concat(i.componentCls,"-title"),{width:"100%",margin:"8px 0"}),(0,d.Z)(f,"".concat(i.componentCls,"-container"),{paddingInlineStart:16}),(0,d.Z)(f,"".concat(i.antCls,"-space-item,").concat(i.antCls,"-form-item"),{width:"100%"}),(0,d.Z)(f,"".concat(i.antCls,"-form-item"),{"&-control":{display:"flex",alignItems:"center",justifyContent:"flex-end","&-input":{alignItems:"center",justifyContent:"flex-end","&-content":{flex:"none"}}}}),f)})};function L(x){return(0,P.Xj)("ProFormGroup",function(i){var f=(0,o.Z)((0,o.Z)({},i),{},{componentCls:".".concat(x)});return[p(f)]})}var t=e(86074),R=a.forwardRef(function(x,i){var f=a.useContext(O.Z),K=f.groupProps,h=(0,o.Z)((0,o.Z)({},K),x),X=h.children,H=h.collapsible,_e=h.defaultCollapsed,me=h.style,pe=h.labelLayout,Q=h.title,G=Q===void 0?x.label:Q,Y=h.tooltip,J=h.align,w=J===void 0?"start":J,k=h.direction,q=h.size,ee=q===void 0?32:q,ce=h.titleStyle,re=h.titleRender,A=h.spaceProps,$=h.extra,N=h.autoFocus,Pe=(0,j.Z)(function(){return _e||!1},{value:x.collapsed,onChange:x.onCollapse}),oe=(0,M.Z)(Pe,2),z=oe[0],ve=oe[1],Ee=(0,a.useContext)(l.ZP.ConfigContext),fe=Ee.getPrefixCls,ne=(0,W.zx)(x),he=ne.ColWrapper,te=ne.RowWrapper,y=fe("pro-form-group"),se=L(y),Me=se.wrapSSR,b=se.hashId,ae=H&&(0,t.jsx)(D,{style:{marginInlineEnd:8},rotate:z?void 0:90}),le=(0,t.jsx)(s.G,{label:ae?(0,t.jsxs)("div",{children:[ae,G]}):G,tooltip:Y}),ie=(0,a.useCallback)(function(B){var S=B.children;return(0,t.jsx)(r.Z,(0,o.Z)((0,o.Z)({},A),{},{className:n()("".concat(y,"-container ").concat(b),A==null?void 0:A.className),size:ee,align:w,direction:k,style:(0,o.Z)({rowGap:0},A==null?void 0:A.style),children:S}))},[w,y,k,b,ee,A]),de=re?re(le,x):le,De=(0,a.useMemo)(function(){var B=[],S=a.Children.toArray(X).map(function(I,Re){var V;return a.isValidElement(I)&&I!==null&&I!==void 0&&(V=I.props)!==null&&V!==void 0&&V.hidden?(B.push(I),null):Re===0&&a.isValidElement(I)&&N?a.cloneElement(I,(0,o.Z)((0,o.Z)({},I.props),{},{autoFocus:N})):I});return[(0,t.jsx)(te,{Wrapper:ie,children:S},"children"),B.length>0?(0,t.jsx)("div",{style:{display:"none"},children:B}):null]},[X,te,ie,N]),ue=(0,M.Z)(De,2),Ce=ue[0],Oe=ue[1];return Me((0,t.jsx)(he,{children:(0,t.jsxs)("div",{className:n()(y,b,(0,d.Z)({},"".concat(y,"-twoLine"),pe==="twoLine")),style:me,ref:i,children:[Oe,(G||Y||$)&&(0,t.jsx)("div",{className:"".concat(y,"-title ").concat(b).trim(),style:ce,onClick:function(){ve(!z)},children:$?(0,t.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"},children:[de,(0,t.jsx)("span",{onClick:function(S){return S.stopPropagation()},children:$})]}):de}),(0,t.jsx)("div",{style:{display:H&&z?"none":void 0},children:Ce})]})}))});R.displayName="ProForm-Group";var m=R,F=e(62370);function v(x){return(0,t.jsx)(E.I,(0,o.Z)({layout:"vertical",submitter:{render:function(f,K){return K.reverse()}},contentRender:function(f,K){return(0,t.jsxs)(t.Fragment,{children:[f,K]})}},x))}v.Group=m,v.useForm=u.Z.useForm,v.Item=F.Z,v.useWatch=u.Z.useWatch,v.ErrorList=u.Z.ErrorList,v.Provider=u.Z.Provider,v.useFormInstance=u.Z.useFormInstance},85335:function(U,Z,e){var o=e(15009),u=e.n(o),a=e(99289),E=e.n(a),d=e(66352),M=e(28199),C=e(34994),c=e(5966),T=e(63434),g=e(35312),D=e(58301),j=e(62435),s=e(86074),l=function(){var _=(0,g.useParams)(),n=_.id,O=(0,j.useRef)();(0,j.useEffect)(function(){(0,d.Mk)(n).then(function(P){var p;(p=O.current)===null||p===void 0||p.setFields([{name:"name",value:P.name},{name:"active",value:P.active}])})},[n]);var W=function(){var P=E()(u()().mark(function p(L){var t;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,d.Qb)(L);case 2:t=m.sent,t.succeeded?D.ZP.success("Saved!"):D.ZP.error(t.errors[0].description);case 4:case"end":return m.stop()}},p)}));return function(L){return P.apply(this,arguments)}}();return(0,s.jsx)(M.Z,{title:"Info",children:(0,s.jsxs)(C.A,{formRef:O,onFinish:W,children:[(0,s.jsx)(c.Z,{hidden:!0,name:"id",initialValue:n}),(0,s.jsx)(c.Z,{name:"name",label:"Name"}),(0,s.jsx)(T.Z,{name:"active",label:"Active"})]})})};Z.Z=l},93376:function(U,Z,e){e.r(Z);var o=e(15009),u=e.n(o),a=e(99289),E=e.n(a),d=e(85335),M=e(66352),C=e(63386),c=e(28199),T=e(34994),g=e(5966),D=e(64317),j=e(35312),s=e(58301),l=e(71230),r=e(15746),_=e(62435),n=e(86074),O=function(){var P=(0,j.useParams)(),p=P.id,L=(0,_.useRef)();(0,_.useEffect)(function(){(0,M.Rg)(p).then(function(R){var m;(m=L.current)===null||m===void 0||m.setFields([{name:"name",value:R.name},{name:"href",value:R.href},{name:"target",value:R.target}])})},[p]);var t=function(){var R=E()(u()().mark(function m(F){var v;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,M.iY)(p,F);case 2:v=i.sent,v.succeeded?s.ZP.success("Saved!"):s.ZP.error(v.errors[0].description);case 4:case"end":return i.stop()}},m)}));return function(F){return R.apply(this,arguments)}}();return(0,n.jsx)(C._z,{children:(0,n.jsxs)(l.Z,{gutter:16,children:[(0,n.jsx)(r.Z,{span:16,children:(0,n.jsx)(c.Z,{children:(0,n.jsxs)(T.A,{onFinish:t,formRef:L,children:[(0,n.jsx)(g.Z,{name:"name",label:"Name"}),(0,n.jsx)(g.Z,{name:"href",label:"URL",rules:[{required:!0}]}),(0,n.jsx)(D.Z,{name:"target",label:"Target",allowClear:!0,options:[{value:"_blank",label:"Open in new tab"}]})]})})}),(0,n.jsx)(r.Z,{span:8,children:(0,n.jsx)(d.Z,{})})]})})};Z.default=O}}]);
