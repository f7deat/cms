"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9797],{82061:function(B,v,e){var r=e(1413),s=e(62435),m=e(47046),d=e(91146),l=function(u,t){return s.createElement(d.Z,(0,r.Z)((0,r.Z)({},u),{},{ref:t,icon:m.Z}))};l.displayName="DeleteOutlined",v.Z=s.forwardRef(l)},47389:function(B,v,e){var r=e(1413),s=e(62435),m=e(27363),d=e(91146),l=function(u,t){return s.createElement(d.Z,(0,r.Z)((0,r.Z)({},u),{},{ref:t,icon:m.Z}))};l.displayName="EditOutlined",v.Z=s.forwardRef(l)},51042:function(B,v,e){var r=e(1413),s=e(62435),m=e(42110),d=e(91146),l=function(u,t){return s.createElement(d.Z,(0,r.Z)((0,r.Z)({},u),{},{ref:t,icon:m.Z}))};l.displayName="PlusOutlined",v.Z=s.forwardRef(l)},63434:function(B,v,e){var r=e(1413),s=e(91),m=e(22270),d=e(84567),l=e(62435),f=e(90789),u=e(96987),t=e(86074),j=["options","fieldProps","proFieldProps","valueEnum"],E=l.forwardRef(function(i,n){var P=i.options,p=i.fieldProps,C=i.proFieldProps,D=i.valueEnum,_=(0,s.Z)(i,j);return(0,t.jsx)(u.Z,(0,r.Z)({ref:n,valueType:"checkbox",valueEnum:(0,m.h)(D,void 0),fieldProps:(0,r.Z)({options:P},p),lightProps:(0,r.Z)({labelFormatter:function(){return(0,t.jsx)(u.Z,(0,r.Z)({ref:n,valueType:"checkbox",mode:"read",valueEnum:(0,m.h)(D,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:P},p),proFieldProps:C},_))}},_.lightProps),proFieldProps:C},_))}),O=l.forwardRef(function(i,n){var P=i.fieldProps,p=i.children;return(0,t.jsx)(d.Z,(0,r.Z)((0,r.Z)({ref:n},P),{},{children:p}))}),h=(0,f.G)(O,{valuePropName:"checked"}),a=h;a.Group=E,v.Z=a},64317:function(B,v,e){var r=e(1413),s=e(91),m=e(22270),d=e(62435),l=e(66758),f=e(96987),u=e(86074),t=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],j=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],E=d.forwardRef(function(n,P){var p=n.fieldProps,C=n.children,D=n.params,_=n.proFieldProps,c=n.mode,T=n.valueEnum,A=n.request,o=n.showSearch,Z=n.options,S=(0,s.Z)(n,t),b=(0,d.useContext)(l.Z);return(0,u.jsx)(f.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,m.h)(T),request:A,params:D,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:Z,mode:c,showSearch:o,getPopupContainer:b.getPopupContainer},p),ref:P,proFieldProps:_},S),{},{children:C}))}),O=d.forwardRef(function(n,P){var p=n.fieldProps,C=n.children,D=n.params,_=n.proFieldProps,c=n.mode,T=n.valueEnum,A=n.request,o=n.options,Z=(0,s.Z)(n,j),S=(0,r.Z)({options:o,mode:c||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},p),b=(0,d.useContext)(l.Z);return(0,u.jsx)(f.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,m.h)(T),request:A,params:D,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({getPopupContainer:b.getPopupContainer},S),ref:P,proFieldProps:_},Z),{},{children:C}))}),h=E,a=O,i=h;i.SearchSelect=a,i.displayName="ProFormComponent",v.Z=i},5966:function(B,v,e){var r=e(1413),s=e(91),m=e(62435),d=e(96987),l=e(86074),f=["fieldProps","proFieldProps"],u=["fieldProps","proFieldProps"],t="text",j=function(a){var i=a.fieldProps,n=a.proFieldProps,P=(0,s.Z)(a,f);return(0,l.jsx)(d.Z,(0,r.Z)({valueType:t,fieldProps:i,filedConfig:{valueType:t},proFieldProps:n},P))},E=function(a){var i=a.fieldProps,n=a.proFieldProps,P=(0,s.Z)(a,u);return(0,l.jsx)(d.Z,(0,r.Z)({valueType:"password",fieldProps:i,proFieldProps:n,filedConfig:{valueType:t}},P))},O=j;O.Password=E,O.displayName="ProFormComponent",v.Z=O},85335:function(B,v,e){var r=e(15009),s=e.n(r),m=e(99289),d=e.n(m),l=e(66352),f=e(28199),u=e(34994),t=e(5966),j=e(63434),E=e(35312),O=e(58301),h=e(62435),a=e(86074),i=function(){var P=(0,E.useParams)(),p=P.id,C=(0,h.useRef)();(0,h.useEffect)(function(){(0,l.Mk)(p).then(function(_){var c;(c=C.current)===null||c===void 0||c.setFields([{name:"name",value:_.name},{name:"active",value:_.active}])})},[p]);var D=function(){var _=d()(s()().mark(function c(T){var A;return s()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,(0,l.Qb)(T);case 2:A=Z.sent,A.succeeded?O.ZP.success("Saved!"):O.ZP.error(A.errors[0].description);case 4:case"end":return Z.stop()}},c)}));return function(T){return _.apply(this,arguments)}}();return(0,a.jsx)(f.Z,{title:"Info",children:(0,a.jsxs)(u.A,{formRef:C,onFinish:D,children:[(0,a.jsx)(t.Z,{hidden:!0,name:"id",initialValue:p}),(0,a.jsx)(t.Z,{name:"name",label:"Name"}),(0,a.jsx)(j.Z,{name:"active",label:"Active"})]})})};v.Z=i},7520:function(B,v,e){e.r(v),e.d(v,{default:function(){return X}});var r=e(5574),s=e.n(r),m=e(85335),d=e(63386),l=e(28199),f=e(71230),u=e(15746),t=e(62435),j=e(15009),E=e.n(j),O=e(99289),h=e.n(O),a=e(66352),i=e(51042),n=e(47389),P=e(82061),p=e(64176),C=e(37476),D=e(5966),_=e(35312),c=e(58301),T=e(71577),A=e(86738),o=e(86074),Z=function(){var N=(0,_.useParams)(),F=N.id,W=(0,t.useRef)(),G=(0,t.useState)(!1),L=s()(G,2),x=L[0],y=L[1],V=function(){var M=h()(E()().mark(function I(g){var K,U;return E()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,a.U3)(g);case 2:K=R.sent,K.succeeded&&(c.ZP.success("Added"),(U=W.current)===null||U===void 0||U.reload(),y(!1));case 4:case"end":return R.stop()}},I)}));return function(g){return M.apply(this,arguments)}}(),z=function(){var M=h()(E()().mark(function I(g){var K,U;return E()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,a.Js)(g);case 2:K=R.sent,K.succeeded&&(c.ZP.success("Deleted"),(U=W.current)===null||U===void 0||U.reload());case 4:case"end":return R.stop()}},I)}));return function(g){return M.apply(this,arguments)}}();return(0,o.jsxs)("div",{children:[(0,o.jsx)(p.Rs,{request:function(I){return(0,a.Rl)(I,F)},toolBarRender:function(){return[(0,o.jsx)(T.ZP,{type:"primary",icon:(0,o.jsx)(i.Z,{}),onClick:function(){return y(!0)},children:(0,o.jsx)(_.FormattedMessage,{id:"general.new"})},0)]},metas:{title:{dataIndex:"name"},actions:{render:function(I,g){return[(0,o.jsx)(T.ZP,{icon:(0,o.jsx)(n.Z,{}),onClick:function(){return _.history.push("/works/nav-item/".concat(g.id))}},1),(0,o.jsx)(A.Z,{title:"Are you sure?",onConfirm:function(){return z(g.id)},children:(0,o.jsx)(T.ZP,{icon:(0,o.jsx)(P.Z,{}),danger:!0,type:"primary"})},2)]}}},actionRef:W}),(0,o.jsxs)(C.Y,{open:x,onOpenChange:y,onFinish:V,children:[(0,o.jsx)(D.Z,{name:"parentId",hidden:!0,initialValue:F}),(0,o.jsx)(D.Z,{name:"name",label:"Name"})]})]})},S=Z,b=e(34994),H=e(64317),J=function(){var N=(0,_.useParams)(),F=N.id,W=(0,t.useRef)();(0,t.useEffect)(function(){(0,a.ZI)(F).then(function(L){if(L){var x;(x=W.current)===null||x===void 0||x.setFields([{name:"layout",value:L.layout}])}})},[F]);var G=function(){var L=h()(E()().mark(function x(y){var V;return E()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,(0,a.nH)(y);case 2:V=M.sent,V.succeeded&&c.ZP.success("Saved!");case 4:case"end":return M.stop()}},x)}));return function(y){return L.apply(this,arguments)}}();return(0,o.jsxs)(b.A,{formRef:W,onFinish:G,children:[(0,o.jsx)(D.Z,{name:"id",hidden:!0,initialValue:F}),(0,o.jsx)(H.Z,{label:"Layout",name:"layout",options:[{label:"Default",value:0},{label:"Vertical",value:1}]})]})},Q=J,Y=function(){var N=(0,t.useState)("content"),F=s()(N,2),W=F[0],G=F[1];return(0,o.jsx)(d._z,{title:"Navbar",children:(0,o.jsxs)(f.Z,{gutter:16,children:[(0,o.jsx)(u.Z,{span:18,children:(0,o.jsx)(l.Z,{tabs:{activeKey:W,items:[{label:"Content",key:"content",children:(0,o.jsx)(S,{})},{label:"Setting",key:"setting",children:(0,o.jsx)(Q,{})}],onChange:function(x){G(x)}}})}),(0,o.jsx)(u.Z,{span:6,children:(0,o.jsx)(m.Z,{})})]})})},X=Y}}]);
