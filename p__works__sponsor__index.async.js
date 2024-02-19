"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6327],{85335:function(F,c,e){var f=e(15009),r=e.n(f),L=e(99289),p=e.n(L),C=e(66352),h=e(28199),W=e(34994),u=e(5966),g=e(63434),x=e(35312),T=e(58301),A=e(62435),l=e(86074),y=function(){var I=(0,x.useParams)(),m=I.id,B=(0,A.useRef)();(0,A.useEffect)(function(){(0,C.Mk)(m).then(function(D){var i;(i=B.current)===null||i===void 0||i.setFields([{name:"name",value:D.name},{name:"active",value:D.active}])})},[m]);var b=function(){var D=p()(r()().mark(function i(U){var P;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,C.Qb)(U);case 2:P=n.sent,P.succeeded?T.ZP.success("Saved!"):T.ZP.error(P.errors[0].description);case 4:case"end":return n.stop()}},i)}));return function(U){return D.apply(this,arguments)}}();return(0,l.jsx)(h.Z,{title:"Info",children:(0,l.jsxs)(W.A,{formRef:B,onFinish:b,children:[(0,l.jsx)(u.Z,{hidden:!0,name:"id",initialValue:m}),(0,l.jsx)(u.Z,{name:"name",label:"Name"}),(0,l.jsx)(g.Z,{name:"active",label:"Active"})]})})};c.Z=y},91936:function(F,c,e){e.r(c);var f=e(15009),r=e.n(f),L=e(99289),p=e.n(L),C=e(5574),h=e.n(C),W=e(85335),u=e(66352),g=e(89575),x=e(82061),T=e(51042),A=e(63386),l=e(62639),y=e(37476),j=e(5966),I=e(35312),m=e(58301),B=e(93421),b=e(7134),D=e(86738),i=e(71577),U=e(71230),P=e(15746),R=e(62435),n=e(86074),H=function(){var V=(0,I.useParams)(),M=V.id,z=(0,R.useState)([]),$=h()(z,2),Z=$[0],K=$[1],Q=(0,R.useState)(!1),G=h()(Q,2),Y=G[0],S=G[1],J=(0,R.useState)(!0),N=h()(J,2),X=N[0],w=N[1];(0,R.useEffect)(function(){M&&(0,u.Tu)(M).then(function(a){K(a.brands||[]),w(!1)})},[M]);var k=function(){var a=p()(r()().mark(function t(_){var s,o,O,d;return r()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return s=Z,_.id?(o=s.findIndex(function(_e){return _e.id===_.id}),s[o].name=_.name,s[o].url=_.url,s[o].logo=_.logo):(_.id=(0,g.k)(),s||(s=[]),s.push(_)),O={brands:s},E.next=5,(0,u.iH)(M,O);case 5:d=E.sent,d.succeeded&&(K(s),m.ZP.success("Saved!"),S(!1));case 7:case"end":return E.stop()}},t)}));return function(_){return a.apply(this,arguments)}}(),q=function(){var a=p()(r()().mark(function t(_){var s,o,O;return r()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return s=Z.filter(function(E){return E.id!==_.id}),o={brands:s},v.next=4,(0,u.iH)(M,o);case 4:O=v.sent,O.succeeded&&(K(s),m.ZP.success("Deleted!"));case 6:case"end":return v.stop()}},t)}));return function(_){return a.apply(this,arguments)}}(),ee=[{title:"#",dataIndex:"sort",className:"drag-visible",search:!1},{title:"Name",dataIndex:"name",render:function(t,_){return(0,n.jsxs)(B.Z,{children:[(0,n.jsx)(b.C,{src:_.logo}),t]})}},{title:"Url",dataIndex:"url"},{title:"Action",valueType:"option",render:function(t,_){return[(0,n.jsx)(D.Z,{title:"Are you sure?",onConfirm:function(){return q(_)},children:(0,n.jsx)(i.ZP,{icon:(0,n.jsx)(x.Z,{}),danger:!0,type:"primary"})},4)]}}],ne=function(){var a=p()(r()().mark(function t(_){var s,o;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return s={brands:_},d.next=3,(0,u.iH)(M,s);case 3:o=d.sent,o.succeeded&&(K(_),m.ZP.success("Saved!"));case 5:case"end":return d.stop()}},t)}));return function(_){return a.apply(this,arguments)}}();return(0,n.jsxs)(A._z,{children:[(0,n.jsxs)(U.Z,{gutter:16,children:[(0,n.jsx)(P.Z,{span:16,children:(0,n.jsx)(l.Z,{toolBarRender:function(){return[(0,n.jsx)(i.ZP,{icon:(0,n.jsx)(T.Z,{}),type:"link",onClick:function(){return S(!0)}},"add")]},dataSource:Z,columns:ee,search:{layout:"vertical"},rowKey:"id",dragSortKey:"sort",loading:X,onDragSortEnd:ne})}),(0,n.jsx)(P.Z,{span:8,children:(0,n.jsx)(W.Z,{})})]}),(0,n.jsxs)(y.Y,{onFinish:k,open:Y,onOpenChange:S,title:(0,n.jsx)(I.FormattedMessage,{id:"menu.component.sponsor"}),children:[(0,n.jsx)(j.Z,{name:"id",label:"Id",disabled:!0}),(0,n.jsx)(j.Z,{name:"name",label:"Name"}),(0,n.jsx)(j.Z,{name:"logo",label:"Logo"}),(0,n.jsx)(j.Z,{name:"url",label:"Url"})]})]})};c.default=H},89575:function(F,c,e){e.d(c,{k:function(){return f}});function f(){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,function(r){return(r^crypto.getRandomValues(new Uint8Array(1))[0]&15>>r/4).toString(16)})}}}]);