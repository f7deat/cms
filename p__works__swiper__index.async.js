"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9287],{63434:function(U,M,e){var n=e(1413),d=e(91),t=e(22270),O=e(84567),l=e(62435),h=e(90789),C=e(96987),c=e(86074),j=["options","fieldProps","proFieldProps","valueEnum"],x=l.forwardRef(function(a,v){var o=a.options,p=a.fieldProps,g=a.proFieldProps,I=a.valueEnum,P=(0,d.Z)(a,j);return(0,c.jsx)(C.Z,(0,n.Z)({ref:v,valueType:"checkbox",valueEnum:(0,t.h)(I,void 0),fieldProps:(0,n.Z)({options:o},p),lightProps:(0,n.Z)({labelFormatter:function(){return(0,c.jsx)(C.Z,(0,n.Z)({ref:v,valueType:"checkbox",mode:"read",valueEnum:(0,t.h)(I,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({options:o},p),proFieldProps:g},P))}},P.lightProps),proFieldProps:g},P))}),E=l.forwardRef(function(a,v){var o=a.fieldProps,p=a.children;return(0,c.jsx)(O.Z,(0,n.Z)((0,n.Z)({ref:v},o),{},{children:p}))}),R=(0,h.G)(E,{valuePropName:"checked"}),s=R;s.Group=x,M.Z=s},5966:function(U,M,e){var n=e(1413),d=e(91),t=e(62435),O=e(96987),l=e(86074),h=["fieldProps","proFieldProps"],C=["fieldProps","proFieldProps"],c="text",j=function(s){var a=s.fieldProps,v=s.proFieldProps,o=(0,d.Z)(s,h);return(0,l.jsx)(O.Z,(0,n.Z)({valueType:c,fieldProps:a,filedConfig:{valueType:c},proFieldProps:v},o))},x=function(s){var a=s.fieldProps,v=s.proFieldProps,o=(0,d.Z)(s,C);return(0,l.jsx)(O.Z,(0,n.Z)({valueType:"password",fieldProps:a,proFieldProps:v,filedConfig:{valueType:c}},o))},E=j;E.Password=x,E.displayName="ProFormComponent",M.Z=E},34994:function(U,M,e){e.d(M,{A:function(){return T}});var n=e(1413),d=e(8232),t=e(62435),O=e(89671),l=e(4942),h=e(97685),C=e(87462),c=e(50756),j=e(46976),x=function(_,u){return t.createElement(j.Z,(0,C.Z)({},_,{ref:u,icon:c.Z}))},E=t.forwardRef(x),R=e(21770),s=e(86333),a=e(46735),v=e(93421),o=e(94184),p=e.n(o),g=e(66758),I=e(2514),P=e(98082),f=function(_){var u;return(0,l.Z)({},_.componentCls,{"&-title":{marginBlockEnd:_.marginXL,fontWeight:"bold"},"&-container":(0,l.Z)({flexWrap:"wrap",maxWidth:"100%"},"> div".concat(_.antCls,"-space-item"),{maxWidth:"100%"}),"&-twoLine":(u={display:"block",width:"100%"},(0,l.Z)(u,"".concat(_.componentCls,"-title"),{width:"100%",margin:"8px 0"}),(0,l.Z)(u,"".concat(_.componentCls,"-container"),{paddingInlineStart:16}),(0,l.Z)(u,"".concat(_.antCls,"-space-item,").concat(_.antCls,"-form-item"),{width:"100%"}),(0,l.Z)(u,"".concat(_.antCls,"-form-item"),{"&-control":{display:"flex",alignItems:"center",justifyContent:"flex-end","&-input":{alignItems:"center",justifyContent:"flex-end","&-content":{flex:"none"}}}}),u)})};function A(i){return(0,P.Xj)("ProFormGroup",function(_){var u=(0,n.Z)((0,n.Z)({},_),{},{componentCls:".".concat(i)});return[f(u)]})}var r=e(86074),Z=t.forwardRef(function(i,_){var u=t.useContext(g.Z),B=u.groupProps,m=(0,n.Z)((0,n.Z)({},B),i),H=m.children,X=m.collapsible,ue=m.defaultCollapsed,me=m.style,ce=m.labelLayout,Q=m.title,G=Q===void 0?i.label:Q,J=m.tooltip,Y=m.align,w=Y===void 0?"start":Y,k=m.direction,q=m.size,ee=q===void 0?32:q,ve=m.titleStyle,ne=m.titleRender,L=m.spaceProps,$=m.extra,N=m.autoFocus,pe=(0,R.Z)(function(){return ue||!1},{value:i.collapsed,onChange:i.onCollapse}),re=(0,h.Z)(pe,2),z=re[0],Pe=re[1],Ee=(0,t.useContext)(a.ZP.ConfigContext),fe=Ee.getPrefixCls,oe=(0,I.zx)(i),he=oe.ColWrapper,se=oe.RowWrapper,F=fe("pro-form-group"),te=A(F),De=te.wrapSSR,b=te.hashId,ae=X&&(0,r.jsx)(E,{style:{marginInlineEnd:8},rotate:z?void 0:90}),le=(0,r.jsx)(s.G,{label:ae?(0,r.jsxs)("div",{children:[ae,G]}):G,tooltip:J}),ie=(0,t.useCallback)(function(y){var K=y.children;return(0,r.jsx)(v.Z,(0,n.Z)((0,n.Z)({},L),{},{className:p()("".concat(F,"-container ").concat(b),L==null?void 0:L.className),size:ee,align:w,direction:k,style:(0,n.Z)({rowGap:0},L==null?void 0:L.style),children:K}))},[w,F,k,b,ee,L]),de=ne?ne(le,i):le,Me=(0,t.useMemo)(function(){var y=[],K=t.Children.toArray(H).map(function(W,xe){var V;return t.isValidElement(W)&&W!==null&&W!==void 0&&(V=W.props)!==null&&V!==void 0&&V.hidden?(y.push(W),null):xe===0&&t.isValidElement(W)&&N?t.cloneElement(W,(0,n.Z)((0,n.Z)({},W.props),{},{autoFocus:N})):W});return[(0,r.jsx)(se,{Wrapper:ie,children:K},"children"),y.length>0?(0,r.jsx)("div",{style:{display:"none"},children:y}):null]},[H,se,ie,N]),_e=(0,h.Z)(Me,2),Oe=_e[0],Ce=_e[1];return De((0,r.jsx)(he,{children:(0,r.jsxs)("div",{className:p()(F,b,(0,l.Z)({},"".concat(F,"-twoLine"),ce==="twoLine")),style:me,ref:_,children:[Ce,(G||J||$)&&(0,r.jsx)("div",{className:"".concat(F,"-title ").concat(b).trim(),style:ve,onClick:function(){Pe(!z)},children:$?(0,r.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"},children:[de,(0,r.jsx)("span",{onClick:function(K){return K.stopPropagation()},children:$})]}):de}),(0,r.jsx)("div",{style:{display:X&&z?"none":void 0},children:Oe})]})}))});Z.displayName="ProForm-Group";var D=Z,S=e(62370);function T(i){return(0,r.jsx)(O.I,(0,n.Z)({layout:"vertical",submitter:{render:function(u,B){return B.reverse()}},contentRender:function(u,B){return(0,r.jsxs)(r.Fragment,{children:[u,B]})}},i))}T.Group=D,T.useForm=d.Z.useForm,T.Item=S.Z,T.useWatch=d.Z.useWatch,T.ErrorList=d.Z.ErrorList,T.Provider=d.Z.Provider,T.useFormInstance=d.Z.useFormInstance},85335:function(U,M,e){var n=e(15009),d=e.n(n),t=e(99289),O=e.n(t),l=e(66352),h=e(28199),C=e(34994),c=e(5966),j=e(63434),x=e(35312),E=e(58301),R=e(62435),s=e(86074),a=function(){var o=(0,x.useParams)(),p=o.id,g=(0,R.useRef)();(0,R.useEffect)(function(){(0,l.Mk)(p).then(function(P){var f;(f=g.current)===null||f===void 0||f.setFields([{name:"name",value:P.name},{name:"active",value:P.active}])})},[p]);var I=function(){var P=O()(d()().mark(function f(A){var r;return d()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,(0,l.Qb)(A);case 2:r=D.sent,r.succeeded?E.ZP.success("Saved!"):E.ZP.error(r.errors[0].description);case 4:case"end":return D.stop()}},f)}));return function(A){return P.apply(this,arguments)}}();return(0,s.jsx)(h.Z,{title:"Info",children:(0,s.jsxs)(C.A,{formRef:g,onFinish:I,children:[(0,s.jsx)(c.Z,{hidden:!0,name:"id",initialValue:p}),(0,s.jsx)(c.Z,{name:"name",label:"Name"}),(0,s.jsx)(j.Z,{name:"active",label:"Active"})]})})};M.Z=a},94166:function(U,M,e){e.r(M);var n=e(15009),d=e.n(n),t=e(99289),O=e.n(t),l=e(85335),h=e(66352),C=e(63386),c=e(28199),j=e(34994),x=e(5966),E=e(35312),R=e(58301),s=e(71230),a=e(15746),v=e(62435),o=e(86074),p=function(){var I=(0,E.useParams)(),P=I.id,f=(0,v.useRef)();(0,v.useEffect)(function(){(0,h.Tu)(P).then(function(r){var Z;(Z=f.current)===null||Z===void 0||Z.setFields([{name:"mode",value:r.mode}])})},[]);var A=function(){var r=O()(d()().mark(function Z(D){var S;return d()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return D.format=1,i.next=3,(0,h.iH)(P,D);case 3:S=i.sent,S.succeeded&&R.ZP.success("Saved");case 5:case"end":return i.stop()}},Z)}));return function(D){return r.apply(this,arguments)}}();return(0,o.jsx)(C._z,{children:(0,o.jsxs)(s.Z,{gutter:16,children:[(0,o.jsx)(a.Z,{md:16,children:(0,o.jsx)(c.Z,{children:(0,o.jsxs)(j.A,{formRef:f,onFinish:A,children:[(0,o.jsx)(x.Z,{name:"title",label:"Title"}),(0,o.jsx)(x.Z,{name:"mode",label:"Display mode"})]})})}),(0,o.jsx)(a.Z,{md:8,children:(0,o.jsx)(l.Z,{})})]})})};M.default=p}}]);
