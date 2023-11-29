"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3427],{63434:function(w,O,e){var u=e(1413),n=e(91),d=e(22270),i=e(84567),s=e(62435),E=e(90789),g=e(96987),h=e(86074),I=["options","fieldProps","proFieldProps","valueEnum"],F=s.forwardRef(function(v,l){var P=v.options,c=v.fieldProps,L=v.proFieldProps,Z=v.valueEnum,C=(0,n.Z)(v,I);return(0,h.jsx)(g.Z,(0,u.Z)({ref:l,valueType:"checkbox",valueEnum:(0,d.h)(Z,void 0),fieldProps:(0,u.Z)({options:P},c),lightProps:(0,u.Z)({labelFormatter:function(){return(0,h.jsx)(g.Z,(0,u.Z)({ref:l,valueType:"checkbox",mode:"read",valueEnum:(0,d.h)(Z,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,u.Z)({options:P},c),proFieldProps:L},C))}},C.lightProps),proFieldProps:L},C))}),y=s.forwardRef(function(v,l){var P=v.fieldProps,c=v.children;return(0,h.jsx)(i.Z,(0,u.Z)((0,u.Z)({ref:l},P),{},{children:c}))}),x=(0,E.G)(y,{valuePropName:"checked"}),_=x;_.Group=F,O.Z=_},64317:function(w,O,e){var u=e(1413),n=e(91),d=e(22270),i=e(62435),s=e(66758),E=e(96987),g=e(86074),h=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],I=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],F=i.forwardRef(function(l,P){var c=l.fieldProps,L=l.children,Z=l.params,C=l.proFieldProps,D=l.mode,B=l.valueEnum,p=l.request,j=l.showSearch,f=l.options,A=(0,n.Z)(l,h),M=(0,i.useContext)(s.Z);return(0,g.jsx)(E.Z,(0,u.Z)((0,u.Z)({valueEnum:(0,d.h)(B),request:p,params:Z,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,u.Z)({options:f,mode:D,showSearch:j,getPopupContainer:M.getPopupContainer},c),ref:P,proFieldProps:C},A),{},{children:L}))}),y=i.forwardRef(function(l,P){var c=l.fieldProps,L=l.children,Z=l.params,C=l.proFieldProps,D=l.mode,B=l.valueEnum,p=l.request,j=l.options,f=(0,n.Z)(l,I),A=(0,u.Z)({options:j,mode:D||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},c),M=(0,i.useContext)(s.Z);return(0,g.jsx)(E.Z,(0,u.Z)((0,u.Z)({valueEnum:(0,d.h)(B),request:p,params:Z,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,u.Z)({getPopupContainer:M.getPopupContainer},A),ref:P,proFieldProps:C},f),{},{children:L}))}),x=F,_=y,v=x;v.SearchSelect=_,v.displayName="ProFormComponent",O.Z=v},5966:function(w,O,e){var u=e(1413),n=e(91),d=e(62435),i=e(96987),s=e(86074),E=["fieldProps","proFieldProps"],g=["fieldProps","proFieldProps"],h="text",I=function(_){var v=_.fieldProps,l=_.proFieldProps,P=(0,n.Z)(_,E);return(0,s.jsx)(i.Z,(0,u.Z)({valueType:h,fieldProps:v,filedConfig:{valueType:h},proFieldProps:l},P))},F=function(_){var v=_.fieldProps,l=_.proFieldProps,P=(0,n.Z)(_,g);return(0,s.jsx)(i.Z,(0,u.Z)({valueType:"password",fieldProps:v,proFieldProps:l,filedConfig:{valueType:h}},P))},y=I;y.Password=F,y.displayName="ProFormComponent",O.Z=y},34994:function(w,O,e){e.d(O,{A:function(){return M}});var u=e(1413),n=e(8232),d=e(62435),i=e(89671),s=e(4942),E=e(97685),g=e(87462),h=e(50756),I=e(46976),F=function(m,T){return d.createElement(I.Z,(0,g.Z)({},m,{ref:T,icon:h.Z}))},y=d.forwardRef(F),x=e(21770),_=e(86333),v=e(46735),l=e(93421),P=e(94184),c=e.n(P),L=e(66758),Z=e(2514),C=e(98082),D=function(m){var T;return(0,s.Z)({},m.componentCls,{"&-title":{marginBlockEnd:m.marginXL,fontWeight:"bold"},"&-container":(0,s.Z)({flexWrap:"wrap",maxWidth:"100%"},"> div".concat(m.antCls,"-space-item"),{maxWidth:"100%"}),"&-twoLine":(T={display:"block",width:"100%"},(0,s.Z)(T,"".concat(m.componentCls,"-title"),{width:"100%",margin:"8px 0"}),(0,s.Z)(T,"".concat(m.componentCls,"-container"),{paddingInlineStart:16}),(0,s.Z)(T,"".concat(m.antCls,"-space-item,").concat(m.antCls,"-form-item"),{width:"100%"}),(0,s.Z)(T,"".concat(m.antCls,"-form-item"),{"&-control":{display:"flex",alignItems:"center",justifyContent:"flex-end","&-input":{alignItems:"center",justifyContent:"flex-end","&-content":{flex:"none"}}}}),T)})};function B(W){return(0,C.Xj)("ProFormGroup",function(m){var T=(0,u.Z)((0,u.Z)({},m),{},{componentCls:".".concat(W)});return[D(T)]})}var p=e(86074),j=d.forwardRef(function(W,m){var T=d.useContext(L.Z),K=T.groupProps,R=(0,u.Z)((0,u.Z)({},K),W),V=R.children,ee=R.collapsible,Y=R.defaultCollapsed,oe=R.style,k=R.labelLayout,re=R.title,$=re===void 0?W.label:re,te=R.tooltip,z=R.align,ne=z===void 0?"start":z,H=R.direction,ae=R.size,X=ae===void 0?32:ae,le=R.titleStyle,Q=R.titleRender,U=R.spaceProps,G=R.extra,t=R.autoFocus,a=(0,x.Z)(function(){return Y||!1},{value:W.collapsed,onChange:W.onCollapse}),o=(0,E.Z)(a,2),r=o[0],b=o[1],he=(0,d.useContext)(v.ZP.ConfigContext),Pe=he.getPrefixCls,ie=(0,Z.zx)(W),Ee=ie.ColWrapper,ce=ie.RowWrapper,J=Pe("pro-form-group"),pe=B(J),ge=pe.wrapSSR,se=pe.hashId,de=ee&&(0,p.jsx)(y,{style:{marginInlineEnd:8},rotate:r?void 0:90}),_e=(0,p.jsx)(_.G,{label:de?(0,p.jsxs)("div",{children:[de,$]}):$,tooltip:te}),me=(0,d.useCallback)(function(N){var q=N.children;return(0,p.jsx)(l.Z,(0,u.Z)((0,u.Z)({},U),{},{className:c()("".concat(J,"-container ").concat(se),U==null?void 0:U.className),size:X,align:ne,direction:H,style:(0,u.Z)({rowGap:0},U==null?void 0:U.style),children:q}))},[ne,J,H,se,X,U]),ve=Q?Q(_e,W):_e,Ce=(0,d.useMemo)(function(){var N=[],q=d.Children.toArray(V).map(function(S,Oe){var ue;return d.isValidElement(S)&&S!==null&&S!==void 0&&(ue=S.props)!==null&&ue!==void 0&&ue.hidden?(N.push(S),null):Oe===0&&d.isValidElement(S)&&t?d.cloneElement(S,(0,u.Z)((0,u.Z)({},S.props),{},{autoFocus:t})):S});return[(0,p.jsx)(ce,{Wrapper:me,children:q},"children"),N.length>0?(0,p.jsx)("div",{style:{display:"none"},children:N}):null]},[V,ce,me,t]),fe=(0,E.Z)(Ce,2),De=fe[0],Me=fe[1];return ge((0,p.jsx)(Ee,{children:(0,p.jsxs)("div",{className:c()(J,se,(0,s.Z)({},"".concat(J,"-twoLine"),k==="twoLine")),style:oe,ref:m,children:[Me,($||te||G)&&(0,p.jsx)("div",{className:"".concat(J,"-title ").concat(se).trim(),style:le,onClick:function(){b(!r)},children:G?(0,p.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"},children:[ve,(0,p.jsx)("span",{onClick:function(q){return q.stopPropagation()},children:G})]}):ve}),(0,p.jsx)("div",{style:{display:ee&&r?"none":void 0},children:De})]})}))});j.displayName="ProForm-Group";var f=j,A=e(4499);function M(W){return(0,p.jsx)(i.I,(0,u.Z)({layout:"vertical",submitter:{render:function(T,K){return K.reverse()}},contentRender:function(T,K){return(0,p.jsxs)(p.Fragment,{children:[T,K]})}},W))}M.Group=f,M.useForm=n.Z.useForm,M.Item=A.Z,M.useWatch=n.Z.useWatch,M.ErrorList=n.Z.ErrorList,M.Provider=n.Z.Provider,M.useFormInstance=n.Z.useFormInstance},84697:function(w,O,e){var u=e(12361),n=e(64317),d=e(86074),i=function(E){return(0,d.jsx)(n.Z,{request:u.Z9,label:E.label,name:E.name,initialValue:E.initialValue,rules:[{required:!0}]})};O.Z=i},37097:function(w,O,e){e.d(O,{l:function(){return s}});var u=e(12361),n=e(64317),d=e(86074),i=function(h){return(0,d.jsx)(n.Z,{showSearch:!0,request:u.wu,label:h.label,name:h.name})},s=i,E=e(84697)},85335:function(w,O,e){var u=e(15009),n=e.n(u),d=e(99289),i=e.n(d),s=e(66352),E=e(28199),g=e(34994),h=e(5966),I=e(63434),F=e(35312),y=e(58301),x=e(62435),_=e(86074),v=function(){var P=(0,F.useParams)(),c=P.id,L=(0,x.useRef)();(0,x.useEffect)(function(){(0,s.Mk)(c).then(function(C){var D;(D=L.current)===null||D===void 0||D.setFields([{name:"name",value:C.name},{name:"active",value:C.active}])})},[c]);var Z=function(){var C=i()(n()().mark(function D(B){var p;return n()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,s.Qb)(B);case 2:p=f.sent,p.succeeded?y.ZP.success("Saved!"):y.ZP.error(p.errors[0].description);case 4:case"end":return f.stop()}},D)}));return function(B){return C.apply(this,arguments)}}();return(0,_.jsx)(E.Z,{title:"Info",children:(0,_.jsxs)(g.A,{formRef:L,onFinish:Z,children:[(0,_.jsx)(h.Z,{hidden:!0,name:"id",initialValue:c}),(0,_.jsx)(h.Z,{name:"name",label:"Name"}),(0,_.jsx)(I.Z,{name:"active",label:"Active"})]})})};O.Z=v},37017:function(w,O,e){e.r(O);var u=e(15009),n=e.n(u),d=e(99289),i=e.n(d),s=e(37097),E=e(85335),g=e(66352),h=e(63386),I=e(28199),F=e(34994),y=e(5966),x=e(35312),_=e(58301),v=e(71230),l=e(15746),P=e(62435),c=e(86074),L=function(){var C=(0,P.useRef)(),D=(0,x.useParams)(),B=D.id;(0,P.useEffect)(function(){B&&(0,g.Tu)(B).then(function(j){var f,A=j.tagIds&&j.tagIds.length>0?j.tagIds[0]:null;(f=C.current)===null||f===void 0||f.setFields([{name:"title",value:j.title},{name:"tagId",value:A}])})},[B]);var p=function(){var j=i()(n()().mark(function f(A){var M;return n()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return A.tagIds=[A.tagId],m.next=3,(0,g.iH)(B,A);case 3:M=m.sent,M.succeeded&&_.ZP.success("Saved");case 5:case"end":return m.stop()}},f)}));return function(A){return j.apply(this,arguments)}}();return(0,c.jsx)(h._z,{children:(0,c.jsxs)(v.Z,{gutter:16,children:[(0,c.jsx)(l.Z,{md:16,children:(0,c.jsx)(I.Z,{children:(0,c.jsxs)(F.A,{onFinish:p,formRef:C,children:[(0,c.jsx)(y.Z,{label:"Title",name:"title"}),(0,c.jsx)(s.l,{name:"tagId",label:"Tag"})]})})}),(0,c.jsx)(l.Z,{md:8,children:(0,c.jsx)(E.Z,{})})]})})};O.default=L},12361:function(w,O,e){e.d(O,{A$:function(){return F},BA:function(){return P},BP:function(){return h},M0:function(){return R},NU:function(){return re},No:function(){return U},R4:function(){return E},S8:function(){return v},U4:function(){return te},Z9:function(){return A},_V:function(){return C},gg:function(){return ne},kn:function(){return oe},lI:function(){return ae},m_:function(){return W},tD:function(){return ee},wu:function(){return T}});var u=e(15009),n=e.n(u),d=e(99289),i=e.n(d),s=e(35312);function E(t){return g.apply(this,arguments)}function g(){return g=i()(n()().mark(function t(a){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.request)("catalog/".concat(a)));case 1:case"end":return r.stop()}},t)})),g.apply(this,arguments)}function h(t){return I.apply(this,arguments)}function I(){return I=i()(n()().mark(function t(a){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.request)("catalog/add",{method:"POST",data:a}));case 1:case"end":return r.stop()}},t)})),I.apply(this,arguments)}function F(t){return y.apply(this,arguments)}function y(){return y=i()(n()().mark(function t(a){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.request)("catalog/list",{method:"GET",params:a}));case 1:case"end":return r.stop()}},t)})),y.apply(this,arguments)}function x(){return _.apply(this,arguments)}function _(){return _=_asyncToGenerator(_regeneratorRuntime().mark(function t(){return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",request("catalog/tree"));case 1:case"end":return o.stop()}},t)})),_.apply(this,arguments)}function v(t){return l.apply(this,arguments)}function l(){return l=i()(n()().mark(function t(a){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.request)("catalog/delete/".concat(a),{method:"POST"}));case 1:case"end":return r.stop()}},t)})),l.apply(this,arguments)}function P(t){return c.apply(this,arguments)}function c(){return c=i()(n()().mark(function t(a){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.request)("catalog/save",{method:"POST",data:a}));case 1:case"end":return r.stop()}},t)})),c.apply(this,arguments)}function L(t){return Z.apply(this,arguments)}function Z(){return Z=_asyncToGenerator(_regeneratorRuntime().mark(function t(a){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/tree-drop",{method:"POST",data:a}));case 1:case"end":return r.stop()}},t)})),Z.apply(this,arguments)}function C(){return D.apply(this,arguments)}function D(){return D=i()(n()().mark(function t(){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,s.request)("catalog/view-count"));case 1:case"end":return o.stop()}},t)})),D.apply(this,arguments)}function B(t){return p.apply(this,arguments)}function p(){return p=_asyncToGenerator(_regeneratorRuntime().mark(function t(a){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/active/".concat(a),{method:"POST"}));case 1:case"end":return r.stop()}},t)})),p.apply(this,arguments)}function j(t){return f.apply(this,arguments)}function f(){return f=_asyncToGenerator(_regeneratorRuntime().mark(function t(a){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/update-thumbnail",{method:"POST",data:a}));case 1:case"end":return r.stop()}},t)})),f.apply(this,arguments)}function A(){return M.apply(this,arguments)}function M(){return M=i()(n()().mark(function t(){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,s.request)("catalog/types"));case 1:case"end":return o.stop()}},t)})),M.apply(this,arguments)}function W(t){return m.apply(this,arguments)}function m(){return m=i()(n()().mark(function t(a){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.request)("catalog/list-tag/".concat(a)));case 1:case"end":return r.stop()}},t)})),m.apply(this,arguments)}function T(t){return K.apply(this,arguments)}function K(){return K=i()(n()().mark(function t(a){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.request)("catalog/list-tag-select",{params:a}));case 1:case"end":return r.stop()}},t)})),K.apply(this,arguments)}function R(t,a){return V.apply(this,arguments)}function V(){return V=i()(n()().mark(function t(a,o){return n()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",(0,s.request)("catalog/list-by-tag/".concat(a),{params:o}));case 1:case"end":return b.stop()}},t)})),V.apply(this,arguments)}function ee(){return Y.apply(this,arguments)}function Y(){return Y=i()(n()().mark(function t(){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,s.request)("catalog/pie-chart"));case 1:case"end":return o.stop()}},t)})),Y.apply(this,arguments)}function oe(t,a){return k.apply(this,arguments)}function k(){return k=i()(n()().mark(function t(a,o){return n()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",(0,s.request)("/product/image/save",{method:"POST",data:{urls:a,catalogId:o}}));case 1:case"end":return b.stop()}},t)})),k.apply(this,arguments)}function re(t){return $.apply(this,arguments)}function $(){return $=i()(n()().mark(function t(a){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.request)("/product/image/".concat(a)));case 1:case"end":return r.stop()}},t)})),$.apply(this,arguments)}function te(t){return z.apply(this,arguments)}function z(){return z=i()(n()().mark(function t(a){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.request)("/catalog/form-select",{params:a}));case 1:case"end":return r.stop()}},t)})),z.apply(this,arguments)}function ne(t){return H.apply(this,arguments)}function H(){return H=i()(n()().mark(function t(a){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.request)("/product/save",{method:"POST",data:a}));case 1:case"end":return r.stop()}},t)})),H.apply(this,arguments)}function ae(t){return X.apply(this,arguments)}function X(){return X=i()(n()().mark(function t(a){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.request)("/product/".concat(a)));case 1:case"end":return r.stop()}},t)})),X.apply(this,arguments)}function le(t){return Q.apply(this,arguments)}function Q(){return Q=_asyncToGenerator(_regeneratorRuntime().mark(function t(a){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("/product/brand/save",{method:"POST",data:a}));case 1:case"end":return r.stop()}},t)})),Q.apply(this,arguments)}function U(t){return G.apply(this,arguments)}function G(){return G=i()(n()().mark(function t(a){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.request)("/catalog/top-view",{params:{type:a}}));case 1:case"end":return r.stop()}},t)})),G.apply(this,arguments)}}}]);
