"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9797],{63434:function(G,Z,e){var o=e(1413),v=e(91),c=e(86074),_=e(22270),p=e(32808),C=e(62435),P=e(90789),u=e(25338),R=["options","fieldProps","proFieldProps","valueEnum"],i=C.forwardRef(function(s,r){var E=s.options,m=s.fieldProps,O=s.proFieldProps,f=s.valueEnum,l=(0,v.Z)(s,R);return(0,c.jsx)(u.Z,(0,o.Z)({ref:r,valueType:"checkbox",valueEnum:(0,_.h)(f,void 0),fieldProps:(0,o.Z)({options:E},m),lightProps:(0,o.Z)({labelFormatter:function(){return(0,c.jsx)(u.Z,(0,o.Z)({ref:r,valueType:"checkbox",mode:"read",valueEnum:(0,_.h)(f,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:E},m),proFieldProps:O},l))}},l.lightProps),proFieldProps:O},l))}),j=C.forwardRef(function(s,r){var E=s.fieldProps,m=s.children;return(0,c.jsx)(p.Z,(0,o.Z)((0,o.Z)({ref:r},E),{},{children:m}))}),t=(0,P.G)(j,{valuePropName:"checked"}),a=t;a.Group=i,Z.Z=a},64317:function(G,Z,e){var o=e(1413),v=e(91),c=e(86074),_=e(22270),p=e(62435),C=e(66758),P=e(25338),u=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],R=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],i=p.forwardRef(function(r,E){var m=r.fieldProps,O=r.children,f=r.params,l=r.proFieldProps,d=r.mode,F=r.valueEnum,T=r.request,n=r.showSearch,D=r.options,K=(0,v.Z)(r,u),b=(0,p.useContext)(C.Z);return(0,c.jsx)(P.Z,(0,o.Z)((0,o.Z)({valueEnum:(0,_.h)(F),request:T,params:f,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:D,mode:d,showSearch:n,getPopupContainer:b.getPopupContainer},m),ref:E,proFieldProps:l},K),{},{children:O}))}),j=p.forwardRef(function(r,E){var m=r.fieldProps,O=r.children,f=r.params,l=r.proFieldProps,d=r.mode,F=r.valueEnum,T=r.request,n=r.options,D=(0,v.Z)(r,R),K=(0,o.Z)({options:n,mode:d||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},m),b=(0,p.useContext)(C.Z);return(0,c.jsx)(P.Z,(0,o.Z)((0,o.Z)({valueEnum:(0,_.h)(F),request:T,params:f,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({getPopupContainer:b.getPopupContainer},K),ref:E,proFieldProps:l},D),{},{children:O}))}),t=i,a=j,s=t;s.SearchSelect=a,s.displayName="ProFormComponent",Z.Z=s},5966:function(G,Z,e){var o=e(1413),v=e(91),c=e(86074),_=e(25338),p=["fieldProps","proFieldProps"],C=["fieldProps","proFieldProps"],P="text",u=function(t){var a=t.fieldProps,s=t.proFieldProps,r=(0,v.Z)(t,p);return(0,c.jsx)(_.Z,(0,o.Z)({valueType:P,fieldProps:a,filedConfig:{valueType:P},proFieldProps:s},r))},R=function(t){var a=t.fieldProps,s=t.proFieldProps,r=(0,v.Z)(t,C);return(0,c.jsx)(_.Z,(0,o.Z)({valueType:"password",fieldProps:a,proFieldProps:s,filedConfig:{valueType:P}},r))},i=u;i.Password=R,i.displayName="ProFormComponent",Z.Z=i},25890:function(G,Z,e){var o=e(15009),v=e.n(o),c=e(99289),_=e.n(c),p=e(66352),C=e(30029),P=e(97269),u=e(5966),R=e(63434),i=e(90905),j=e(27790),t=e(62435),a=e(86074),s=function(){var E=(0,i.useParams)(),m=E.id,O=(0,t.useRef)();(0,t.useEffect)(function(){(0,p.Mk)(m).then(function(l){var d;(d=O.current)===null||d===void 0||d.setFields([{name:"name",value:l.name},{name:"active",value:l.active}])})},[m]);var f=function(){var l=_()(v()().mark(function d(F){var T;return v()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,(0,p.Qb)(F);case 2:T=D.sent,T.succeeded?j.ZP.success("Saved!"):j.ZP.error(T.errors[0].description);case 4:case"end":return D.stop()}},d)}));return function(F){return l.apply(this,arguments)}}();return(0,a.jsx)(C.Z,{children:(0,a.jsxs)(P.A,{formRef:O,onFinish:f,children:[(0,a.jsx)(u.Z,{hidden:!0,name:"id",initialValue:m}),(0,a.jsx)(u.Z,{name:"name",label:"Name"}),(0,a.jsx)(R.Z,{name:"active",label:"Active"})]})})};Z.Z=s},7520:function(G,Z,e){e.r(Z),e.d(Z,{default:function(){return X}});var o=e(5574),v=e.n(o),c=e(25890),_=e(62884),p=e(30029),C=e(71230),P=e(15746),u=e(62435),R=e(15009),i=e.n(R),j=e(99289),t=e.n(j),a=e(66352),s=e(24969),r=e(86548),E=e(48689),m=e(22538),O=e(99351),f=e(5966),l=e(90905),d=e(27790),F=e(71577),T=e(86738),n=e(86074),D=function(){var N=(0,u.useState)(!1),g=v()(N,2),B=g[0],W=g[1],L=(0,l.useParams)(),M=L.id,I=(0,u.useRef)(),V=function(){var h=t()(i()().mark(function A(S){var U,y;return i()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,(0,a.U3)(S);case 2:U=x.sent,U.succeeded&&(d.ZP.success("Added"),(y=I.current)===null||y===void 0||y.reload(),W(!1));case 4:case"end":return x.stop()}},A)}));return function(S){return h.apply(this,arguments)}}(),z=function(){var h=t()(i()().mark(function A(S){var U,y;return i()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,(0,a.rB)(S);case 2:U=x.sent,U.succeeded&&(d.ZP.success("Deleted"),(y=I.current)===null||y===void 0||y.reload());case 4:case"end":return x.stop()}},A)}));return function(S){return h.apply(this,arguments)}}();return(0,n.jsxs)("div",{children:[(0,n.jsx)(m.Rs,{request:function(A){return(0,a.Rl)(A,M)},toolBarRender:function(){return[(0,n.jsx)(F.Z,{type:"primary",icon:(0,n.jsx)(s.Z,{}),onClick:function(){return W(!0)},children:(0,n.jsx)(l.FormattedMessage,{id:"general.new"})},0)]},metas:{title:{dataIndex:"name"},actions:{render:function(A,S){return[(0,n.jsx)(F.Z,{icon:(0,n.jsx)(r.Z,{}),onClick:function(){return l.history.push("/works/nav-item/".concat(S.id))}},1),(0,n.jsx)(T.Z,{title:"Are you sure?",onConfirm:function(){return z(S.id)},children:(0,n.jsx)(F.Z,{icon:(0,n.jsx)(E.Z,{}),danger:!0,type:"primary"})},2)]}}},actionRef:I}),(0,n.jsxs)(O.Y,{open:B,onOpenChange:W,onFinish:V,children:[(0,n.jsx)(f.Z,{name:"parentId",hidden:!0,initialValue:M}),(0,n.jsx)(f.Z,{name:"name",label:"Name"})]})]})},K=D,b=e(97269),H=e(64317),Q=function(){var N=(0,l.useParams)(),g=N.id,B=(0,u.useRef)();(0,u.useEffect)(function(){(0,a.ZI)(g).then(function(L){if(L){var M;(M=B.current)===null||M===void 0||M.setFields([{name:"layout",value:L.layout}])}})},[g]);var W=function(){var L=t()(i()().mark(function M(I){var V;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,a.nH)(I);case 2:V=h.sent,V.succeeded&&d.ZP.success("Saved!");case 4:case"end":return h.stop()}},M)}));return function(I){return L.apply(this,arguments)}}();return(0,n.jsxs)(b.A,{formRef:B,onFinish:W,children:[(0,n.jsx)(f.Z,{name:"id",hidden:!0,initialValue:g}),(0,n.jsx)(H.Z,{label:"Layout",name:"layout",options:[{label:"Default",value:0},{label:"Vertical",value:1}]})]})},Y=Q,J=function(){var N=(0,u.useState)("content"),g=v()(N,2),B=g[0],W=g[1];return(0,n.jsx)(_._z,{title:"Navbar",children:(0,n.jsxs)(C.Z,{gutter:16,children:[(0,n.jsx)(P.Z,{span:18,children:(0,n.jsx)(p.Z,{tabs:{activeKey:B,items:[{label:"Content",key:"content",children:(0,n.jsx)(K,{})},{label:"Setting",key:"setting",children:(0,n.jsx)(Y,{})}],onChange:function(M){W(M)}}})}),(0,n.jsx)(P.Z,{span:6,children:(0,n.jsx)(c.Z,{})})]})})},X=J}}]);
