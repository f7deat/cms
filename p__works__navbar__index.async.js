"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[797],{63434:function(K,D,e){var s=e(1413),f=e(91),m=e(86074),l=e(22270),R=e(32808),c=e(62435),E=e(90789),p=e(68507),M=["options","fieldProps","proFieldProps","valueEnum"],v=c.forwardRef(function(r,d){var C=r.options,h=r.fieldProps,U=r.proFieldProps,A=r.valueEnum,O=(0,f.Z)(r,M);return(0,m.jsx)(p.Z,(0,s.Z)({ref:d,valueType:"checkbox",valueEnum:(0,l.h)(A,void 0),fieldProps:(0,s.Z)({options:C},h),lightProps:(0,s.Z)({labelFormatter:function(){return(0,m.jsx)(p.Z,(0,s.Z)({ref:d,valueType:"checkbox",mode:"read",valueEnum:(0,l.h)(A,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,s.Z)({options:C},h),proFieldProps:U},O))}},O.lightProps),proFieldProps:U},O))}),T=c.forwardRef(function(r,d){var C=r.fieldProps,h=r.children;return(0,m.jsx)(R.Z,(0,s.Z)((0,s.Z)({ref:d},C),{},{children:h}))}),o=(0,E.G)(T,{valuePropName:"checked"}),u=o;u.Group=v,D.Z=u},5966:function(K,D,e){var s=e(1413),f=e(91),m=e(86074),l=e(68507),R=["fieldProps","proFieldProps"],c=["fieldProps","proFieldProps"],E="text",p=function(o){var u=o.fieldProps,r=o.proFieldProps,d=(0,f.Z)(o,R);return(0,m.jsx)(l.Z,(0,s.Z)({valueType:E,fieldProps:u,filedConfig:{valueType:E},proFieldProps:r},d))},M=function(o){var u=o.fieldProps,r=o.proFieldProps,d=(0,f.Z)(o,c);return(0,m.jsx)(l.Z,(0,s.Z)({valueType:"password",fieldProps:u,proFieldProps:r,filedConfig:{valueType:E}},d))},v=p;v.Password=M,v.displayName="ProFormComponent",D.Z=v},40309:function(K,D,e){e.r(D);var s=e(19632),f=e.n(s),m=e(15009),l=e.n(m),R=e(99289),c=e.n(R),E=e(5574),p=e.n(E),M=e(66352),v=e(86548),T=e(48689),o=e(68015),u=e(30029),r=e(97269),d=e(63434),C=e(48390),h=e(47375),U=e(5966),A=e(90905),O=e(16536),Z=e(71230),b=e(15746),x=e(71577),j=e(62435),_=e(86074),y=function(){var N=(0,A.useParams)(),F=N.id,B=(0,j.useRef)(),G=(0,j.useRef)(),$=(0,j.useState)([]),g=p()($,2),I=g[0],W=g[1],z=(0,j.useState)(!1),S=p()(z,2),H=S[0],L=S[1];(0,j.useEffect)(function(){(0,M.ZI)(F).then(function(i){W(i.navItems)})},[]);var V=function(){var i=c()(l()().mark(function a(n){var P;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(I.length!==0){t.next=3;break}return O.ZP.warning("No items were configurated!"),t.abrupt("return");case 3:return n.navItems=I,n.id=F,t.next=7,(0,M.nH)(n);case 7:P=t.sent,P.succeeded&&O.ZP.success("Saved!");case 9:case"end":return t.stop()}},a)}));return function(n){return i.apply(this,arguments)}}(),Y=function(){var i=c()(l()().mark(function a(n){var P;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:I&&I.length>0?W(function(k){return[].concat(f()(k),[n])}):W([n]),O.ZP.success("Added!"),(P=B.current)===null||P===void 0||P.resetFields(),L(!1);case 4:case"end":return t.stop()}},a)}));return function(n){return i.apply(this,arguments)}}(),J=function(a){var n;(n=B.current)===null||n===void 0||n.setFields([{name:"name",value:a.name},{name:"url",value:a.url}])},Q=function(a){W(I.filter(function(n){return n!==a}))};return(0,_.jsxs)(o._z,{title:"Navbar",children:[(0,_.jsxs)(Z.Z,{gutter:16,children:[(0,_.jsx)(b.Z,{span:18,children:(0,_.jsx)(u.Z,{children:(0,_.jsx)(r.A,{onFinish:V,formRef:G,children:(0,_.jsx)(d.Z,{name:"container",label:"Container"})})})}),(0,_.jsx)(b.Z,{span:6,children:(0,_.jsx)(u.Z,{extra:(0,_.jsx)(x.Z,{type:"primary",onClick:function(){return L(!0)},children:"Add"}),children:(0,_.jsx)(C.Rs,{dataSource:I,header:!1,metas:{title:{dataIndex:"name"},actions:{render:function(a,n){return[(0,_.jsx)(x.Z,{icon:(0,_.jsx)(v.Z,{}),onClick:function(){return J(n)}},1),(0,_.jsx)(x.Z,{icon:(0,_.jsx)(T.Z,{}),danger:!0,type:"primary",onClick:function(){return Q(n)}},2)]}}}})})})]}),(0,_.jsxs)(h.Y,{onFinish:Y,formRef:B,open:H,onOpenChange:L,children:[(0,_.jsx)(U.Z,{name:"name",label:"Name"}),(0,_.jsx)(U.Z,{name:"url",label:"Url"})]})]})};D.default=y}}]);
