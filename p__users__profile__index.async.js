"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6293],{71709:function(K,v,e){e.r(v),e.d(v,{default:function(){return X}});var Z=e(5574),i=e.n(Z),m=e(6742),g=e(47389),E=e(63386),c=e(28199),t=e(35312),f=e(71230),h=e(15746),y=e(71577),a=e(90156),A=e(25514),S=e(96074),O=e(27511),L=e(32983),R=e(62435),W=e(15009),j=e.n(W),G=e(99289),U=e.n(G),N=e(67225),$=e(51042),z=e(93933),Y=e(64317),I=e(27790),H=e(51904),n=e(86074),J=function(C){var P=(0,t.useModel)("@@initialState"),D=P.initialState,x=D||{},s=x.currentUser,M=C.roles,p=(0,t.useParams)(),w=p.id,k=(0,R.useState)(!1),B=i()(k,2),q=B[0],T=B[1],_=function(){var l=U()(j()().mark(function u(d){var o;return j()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d.id=w,r.next=3,(0,m.qU)(d);case 3:o=r.sent,o.succeeded?(I.ZP.success("Added!"),T(!1)):I.ZP.error(o.errors[0].description);case 5:case"end":return r.stop()}},u)}));return function(d){return l.apply(this,arguments)}}();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A.Z.Title,{level:5,children:"Roles"}),M.map(function(l){return(0,n.jsx)(H.Z,{color:"blue",children:l},l)}),(s==null?void 0:s.roles.includes("admin"))&&(0,n.jsx)(y.ZP,{type:"dashed",size:"small",icon:(0,n.jsx)($.Z,{}),onClick:function(){return T(!0)},children:"Add to role"}),(0,n.jsx)(z.Y,{title:"Add to role",open:q,onOpenChange:T,onFinish:_,children:(0,n.jsx)(Y.Z,{name:"roleName",label:"Role",request:function(){var l=U()(j()().mark(function u(d){var o;return j()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,N.O)(d);case 2:return o=r.sent,r.abrupt("return",o.data.map(function(F){return{value:F.name,label:F.name}}));case 4:case"end":return r.stop()}},u)}));return function(u){return l.apply(this,arguments)}}()})})]})},Q=J,V=function(){var C=(0,t.useParams)(),P=C.id,D=(0,R.useState)(),x=i()(D,2),s=x[0],M=x[1];return(0,R.useEffect)(function(){(0,m.PR)(P).then(function(p){M(p)})},[P]),(0,n.jsx)(E._z,{children:(0,n.jsxs)(f.Z,{gutter:16,children:[(0,n.jsx)(h.Z,{span:6,children:(0,n.jsxs)(c.Z,{extra:(0,n.jsx)(y.ZP,{type:"dashed",icon:(0,n.jsx)(g.Z,{}),onClick:function(){return window.location.href="https://gravatar.com/"},children:"Change avatar"}),children:[(0,n.jsxs)("div",{className:"flex items-center justify-center flex-col",children:[(0,n.jsx)(a.Z,{src:s==null?void 0:s.avatar,width:200,height:200}),(0,n.jsx)(A.Z.Title,{level:4,children:s==null?void 0:s.userName})]}),(0,n.jsx)(S.Z,{}),(0,n.jsxs)(O.Z,{title:"Info",column:1,children:[(0,n.jsx)(O.Z.Item,{label:"Email",children:s==null?void 0:s.email}),(0,n.jsx)(O.Z.Item,{label:"Phone",children:s==null?void 0:s.phoneNumber})]}),(0,n.jsx)(S.Z,{}),s&&(0,n.jsx)(Q,{roles:s==null?void 0:s.roles})]})}),(0,n.jsx)(h.Z,{span:18,children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(L.Z,{})})})]})})},X=V},67225:function(K,v,e){e.d(v,{O:function(){return c}});var Z=e(15009),i=e.n(Z),m=e(99289),g=e.n(m),E=e(35312);function c(f){return t.apply(this,arguments)}function t(){return t=g()(i()().mark(function f(h){return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/role/list",{params:h}));case 1:case"end":return a.stop()}},f)})),t.apply(this,arguments)}}}]);
