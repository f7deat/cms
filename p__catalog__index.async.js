"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5690],{18576:function(le,V,n){n.d(V,{Z:function(){return i}});var Q=n(97857),r=n.n(Q),J=n(37476),v=n(5966),A=n(98364),I=n(64317),Z=n(86074),q=function($){return(0,Z.jsx)(I.Z,{showSearch:!0,request:A.Ef,name:$.name,label:$.label,rules:[{required:!0}]})},L=q,B=function($){return(0,Z.jsxs)(J.Y,r()(r()({},$),{},{title:"Add component",children:[(0,Z.jsx)(v.Z,{name:"name",label:"Name"}),(0,Z.jsx)(L,{name:"componentId",label:"Component"})]}))},i=B},75316:function(le,V,n){n.r(V),n.d(V,{default:function(){return Le}});var Q=n(15009),r=n.n(Q),J=n(99289),v=n.n(J),A=n(5574),I=n.n(A),Z=n(66352),q=n(47389),L=n(82061),B=n(1413),i=n(62435),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},$=_,ne=n(91146),Y=function(D,a){return i.createElement(ne.Z,(0,B.Z)((0,B.Z)({},D),{},{ref:a,icon:$}))};Y.displayName="MoreOutlined";var re=i.forwardRef(Y),K=n(51042),se=n(62639),z=n(37476),u=n(5966),P=n(64317),l=n(58301),t=n(71577),b=n(86738),fe=n(85418),O=n(35312),pe=n(18576),e=n(86074),ve=function(){var D=(0,O.useParams)(),a=D.id,N=(0,i.useState)([]),E=I()(N,2),F=E[0],y=E[1],w=(0,i.useState)(!1),M=I()(w,2),h=M[0],g=M[1],G=(0,i.useState)(!1),W=I()(G,2),U=W[0],c=W[1],d=(0,i.useState)(),o=I()(d,2),p=o[0],f=o[1],S=function(){(0,Z.KC)(a).then(function(j){y(j.data)})};(0,i.useEffect)(function(){a&&S()},[a]);var s=function(){var T=v()(r()().mark(function j(m){var x;return r()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(0,Z.zt)(m,a);case 2:x=C.sent,x.succeeded?(l.ZP.success("Deleted!"),S()):l.ZP.error(x.errors[0].description);case 4:case"end":return C.stop()}},j)}));return function(m){return T.apply(this,arguments)}}(),ae=function(){var T=v()(r()().mark(function j(m){var x;return r()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return m.catalogId=a,C.next=3,(0,Z.yL)(m);case 3:x=C.sent,x.succeeded&&(l.ZP.success("Added!"),g(!1),S());case 5:case"end":return C.stop()}},j)}));return function(m){return T.apply(this,arguments)}}(),ee=function(){var T=v()(r()().mark(function j(){var m;return r()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,Z.x)();case 2:m=R.sent,f(m),c(!0);case 5:case"end":return R.stop()}},j)}));return function(){return T.apply(this,arguments)}}(),ue=function(){var T=v()(r()().mark(function j(m){var x;return r()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(0,Z.jX)(m);case 2:x=C.sent,x.succeeded&&(l.ZP.success("Saved"),c(!1),S());case 4:case"end":return C.stop()}},j)}));return function(m){return T.apply(this,arguments)}}(),We=[{key:"1",label:"Show / Hide"}],Be=function(){var T=v()(r()().mark(function j(m,x){var R;return r()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:if(m.key!=="1"){X.next=5;break}return X.next=3,(0,Z.Wv)(x);case 3:R=X.sent,R.succeeded&&(l.ZP.success("Actived!"),S());case 5:case"end":return X.stop()}},j)}));return function(m,x){return T.apply(this,arguments)}}(),Ke=[{title:"#",dataIndex:"sort",className:"drag-visible"},{title:"Name",dataIndex:"name"},{title:"Status",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"Action",valueType:"option",render:function(j,m){return[(0,e.jsx)(t.ZP,{type:"primary",disabled:m.autoGenerateField,icon:(0,e.jsx)(q.Z,{}),onClick:function(){O.history.push("/works/".concat(m.normalizedName.toLocaleLowerCase(),"/").concat(m.id))}},1),(0,e.jsx)(b.Z,{title:"Are you sure?",onConfirm:function(){return s(m.id)},children:(0,e.jsx)(t.ZP,{icon:(0,e.jsx)(L.Z,{}),danger:!0,type:"primary"})},4),(0,e.jsx)(fe.Z,{menu:{items:We,onClick:function(R){return Be(R,m.id)}},children:(0,e.jsx)(t.ZP,{icon:(0,e.jsx)(re,{}),type:"dashed"})},"more")]}}],ze=function(j){var m=j.map(function(x){return x.id||""});(0,Z.P0)(m).then(function(x){x.succeeded&&(y(j),l.ZP.success("Saved!"))})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"mb-2 flex justify-end gap-2",children:[(0,e.jsx)(t.ZP,{onClick:function(){return g(!0)},type:"primary",icon:(0,e.jsx)(K.Z,{}),children:(0,e.jsx)("span",{children:(0,e.jsx)(O.FormattedMessage,{id:"general.new"})})},0),(0,e.jsx)(t.ZP,{onClick:ee,icon:(0,e.jsx)(K.Z,{}),children:"Ch\u1ECDn"},1)]}),(0,e.jsx)(se.Z,{search:!1,rowKey:"id",columns:Ke,pagination:!1,dataSource:F,dragSortKey:"sort",onDragSortEnd:ze}),(0,e.jsx)(pe.Z,{open:h,onOpenChange:g,onFinish:ae}),(0,e.jsxs)(z.Y,{open:U,onOpenChange:c,onFinish:ue,children:[(0,e.jsx)(u.Z,{name:"catalogId",initialValue:a,hidden:!0}),(0,e.jsx)(P.Z,{showSearch:!0,name:"workContentId",options:p,label:"Work"})]})]})},he=ve,k=n(12361),ge=n(63386),oe=n(28199),ce=n(71230),te=n(15746),je=n(35003),xe=n(8811),Ce=n(37471),ye=n(97857),de=n.n(ye),Ze=n(34148),Pe=n(84697),Se=n(16309),Oe=n(90672),Fe=function(D){var a=D.parent,N=(0,O.useParams)(),E=N.id,F=(0,O.useIntl)(),y=(0,i.useState)(!1),w=I()(y,2),M=w[0],h=w[1],g=(0,i.useRef)(),G=function(){var c=v()(r()().mark(function d(o){var p,f;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o.parentId=E,o.type=Number(o.type),s.next=4,(0,k.BP)(o);case 4:p=s.sent,p.succeeded&&(l.ZP.success("Added!"),(f=g.current)===null||f===void 0||f.reload(),h(!1));case 6:case"end":return s.stop()}},d)}));return function(o){return c.apply(this,arguments)}}(),W=function(){var c=v()(r()().mark(function d(o){var p,f;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,k.S8)(o);case 2:p=s.sent,p.succeeded?(l.ZP.success("Deleted"),(f=g.current)===null||f===void 0||f.reload()):l.ZP.error(p.errors[0].description);case 4:case"end":return s.stop()}},d)}));return function(o){return c.apply(this,arguments)}}(),U=function(d){var o;O.history.push("/catalog/".concat(d)),(o=g.current)===null||o===void 0||o.reload()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Se.Rs,{ghost:!0,headerTitle:"Trang con",actionRef:g,toolBarRender:function(){return[(0,e.jsx)(t.ZP,{type:"primary",icon:(0,e.jsx)(K.Z,{}),onClick:function(){return h(!0)},disabled:(a==null?void 0:a.parentId)!=null,children:(0,e.jsx)("span",{children:(0,e.jsx)(O.FormattedMessage,{id:"general.new"})})},"3")]},metas:{title:{dataIndex:"name"},description:{dataIndex:"description"},actions:{render:function(d,o){return[(0,e.jsx)(t.ZP,{icon:(0,e.jsx)(re,{}),type:"dashed"}),(0,e.jsx)(t.ZP,{icon:(0,e.jsx)(q.Z,{}),type:"primary",onClick:function(){return U(o.id)}},1),(0,e.jsx)(b.Z,{title:"Are you sure?",onConfirm:function(){return W(o.id)},children:(0,e.jsx)(t.ZP,{icon:(0,e.jsx)(L.Z,{}),type:"primary",danger:!0})},2)]}}},request:function(d){return(0,k.A$)(de()(de()({},d),{},{parentId:E,locale:F.locale,type:a==null?void 0:a.type}),{})},pagination:{}}),(0,e.jsxs)(z.Y,{open:M,onOpenChange:h,onFinish:G,title:(0,e.jsx)(O.FormattedMessage,{id:"general.new"}),children:[(0,e.jsx)(u.Z,{name:"name",label:"Name",rules:[{required:!0}]}),(0,e.jsxs)(ce.Z,{gutter:16,children:[(0,e.jsx)(te.Z,{span:12,children:(0,e.jsx)(Pe.Z,{label:"Type",name:"type",initialValue:a==null?void 0:a.type.toString(),disabled:!0})}),(0,e.jsx)(te.Z,{span:12,children:(0,e.jsx)(Ze.Z,{label:"Parent",name:"parentId",initialValue:a==null?void 0:a.id})})]}),(0,e.jsx)(Oe.Z,{label:"Description",name:"description"})]})]})},Ie=Fe,De=n(34994),ie=n(31199),Ee=n(93421),Me=n(1913),Te=n(32545),Re=function(){var D=(0,O.useParams)(),a=D.id,N=(0,i.useState)(!1),E=I()(N,2),F=E[0],y=E[1],w=(0,i.useState)([]),M=I()(w,2),h=M[0],g=M[1];(0,i.useEffect)(function(){(0,k.NU)(a).then(function(c){c&&g(c.images)})},[]);var G=function(){return y(!1)},W=function(){var c=v()(r()().mark(function d(o){var p,f;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=h,p.push(o),s.next=4,(0,k.kn)(p,a);case 4:f=s.sent,f.succeeded?(g(p),l.ZP.success("Saved!")):l.ZP.error(f.errors[0].description);case 6:case"end":return s.stop()}},d)}));return function(o){return c.apply(this,arguments)}}(),U=function(){var c=v()(r()().mark(function d(o){var p,f;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=h.filter(function(ae){return ae!==o}),s.next=3,(0,k.kn)(p,a);case 3:f=s.sent,f.succeeded?(g(p),l.ZP.success("Saved!")):l.ZP.error(f.errors[0].description);case 5:case"end":return s.stop()}},d)}));return function(o){return c.apply(this,arguments)}}();return(0,e.jsxs)(oe.Z,{title:"Gallery",bordered:!0,headerBordered:!0,children:[(0,e.jsxs)("div",{className:"flex gap-4",children:[h.map(function(c,d){return(0,e.jsxs)("div",{className:"btn-upload p-2",children:[(0,e.jsx)(Te.Z,{src:c,alt:"IMG"}),(0,e.jsx)(t.ZP,{icon:(0,e.jsx)(L.Z,{}),size:"small",danger:!0,onClick:function(){return U(c)},style:{position:"absolute",right:6}})]},d)}),(0,e.jsxs)("button",{type:"button",className:"btn-upload",onClick:function(){return y(!0)},children:[(0,e.jsx)(K.Z,{}),(0,e.jsx)("div",{style:{marginTop:8},children:"Upload"})]})]}),(0,e.jsx)(Me.Z,{open:F,onCancel:G,onFinish:W})]})},be=Re,we=function(){var D=(0,O.useParams)(),a=D.id,N=(0,i.useRef)();(0,i.useEffect)(function(){(0,k.lI)(a).then(function(F){if(F){var y;(y=N.current)===null||y===void 0||y.setFields([{name:"sku",value:F.sku},{name:"price",value:F.price},{name:"salePrice",value:F.salePrice},{name:"unitInStock",value:F.unitInStock}])}})},[]);var E=function(){var F=v()(r()().mark(function y(w){var M;return r()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return w.catalogId=a,g.next=3,(0,k.gg)(w);case 3:M=g.sent,M.succeeded&&l.ZP.success("Saved");case 5:case"end":return g.stop()}},y)}));return function(w){return F.apply(this,arguments)}}();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(oe.Z,{title:"Details",headerBordered:!0,bordered:!0,className:"mb-4",children:(0,e.jsx)(De.A,{onFinish:E,formRef:N,children:(0,e.jsxs)(Ee.Z,{children:[(0,e.jsx)(u.Z,{name:"sku",label:"SKU"}),(0,e.jsx)(ie.Z,{name:"price",label:"Price"}),(0,e.jsx)(ie.Z,{name:"salePrice",label:"Sale price"}),(0,e.jsx)(ie.Z,{name:"unitInStock",label:"Stock"})]})})}),(0,e.jsx)(be,{})]})},Ae=we,$e=n(26554),me=function(D,a){return i.createElement(ne.Z,(0,B.Z)((0,B.Z)({},D),{},{ref:a,icon:$e.Z}))};me.displayName="LeftOutlined";var ke=i.forwardRef(me),Ne=function(){var D=(0,O.useParams)(),a=D.id,N=(0,i.useState)(!1),E=I()(N,2),F=E[0],y=E[1],w=(0,i.useState)(),M=I()(w,2),h=M[0],g=M[1],G=(0,i.useState)("content"),W=I()(G,2),U=W[0],c=W[1],d=function(){(0,k.R4)(a).then(function(S){return g(S)})};(0,i.useEffect)(function(){d()},[a]);var o=function(){var f=v()(r()().mark(function S(s){return r()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:(0,k.BP)(s).then(function(ue){ue.succeeded&&(l.ZP.success("Saved!"),y(!1))});case 1:case"end":return ee.stop()}},S)}));return function(s){return f.apply(this,arguments)}}(),p=function(S){c(S)};return(0,e.jsx)(ge._z,{title:h==null?void 0:h.name,extra:(0,e.jsx)(t.ZP,{icon:(0,e.jsx)(ke,{}),onClick:function(){return O.history.back()},children:(0,e.jsx)("span",{children:(0,e.jsx)(O.FormattedMessage,{id:"general.back"})})}),children:(0,e.jsxs)(ce.Z,{gutter:16,children:[(0,e.jsxs)(te.Z,{span:18,children:[(0,e.jsx)(oe.Z,{tabs:{tabPosition:"top",activeKey:U,items:[{label:"Content",key:"content",children:(0,e.jsx)(he,{})},{label:(0,e.jsx)(O.FormattedMessage,{id:"menu.settings"}),key:"setting",children:(0,e.jsx)(je.Z,{catalog:h,reload:d})},{label:(0,e.jsx)(O.FormattedMessage,{id:"pages.catalog.productDetail"}),key:"product-detail",children:(0,e.jsx)(Ae,{}),disabled:(h==null?void 0:h.type)!==Ce.HQ.Product},{label:"Trang con",key:"childen",children:(0,e.jsx)(Ie,{parent:h})}],onChange:p},className:"mb-4"}),(0,e.jsxs)(z.Y,{onFinish:o,open:F,onOpenChange:y,children:[(0,e.jsx)(u.Z,{name:"name",label:"Name"}),(0,e.jsx)(u.Z,{name:"normalizedName",label:"Normalized Name"})]})]}),(0,e.jsx)(te.Z,{span:6,children:(0,e.jsx)(xe.Z,{catalog:h})})]})})},Le=Ne},98364:function(le,V,n){n.d(V,{CO:function(){return _},Ef:function(){return se},KL:function(){return B},Xr:function(){return I},Z:function(){return ne},v7:function(){return re}});var Q=n(15009),r=n.n(Q),J=n(99289),v=n.n(J),A=n(35312);function I(u){return Z.apply(this,arguments)}function Z(){return Z=v()(r()().mark(function u(P){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,A.request)("component/".concat(P)));case 1:case"end":return t.stop()}},u)})),Z.apply(this,arguments)}function q(u){return L.apply(this,arguments)}function L(){return L=_asyncToGenerator(_regeneratorRuntime().mark(function u(P){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("component/add",{method:"POST",data:P}));case 1:case"end":return t.stop()}},u)})),L.apply(this,arguments)}function B(u){return i.apply(this,arguments)}function i(){return i=v()(r()().mark(function u(P){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,A.request)("component/update",{method:"POST",data:P}));case 1:case"end":return t.stop()}},u)})),i.apply(this,arguments)}function _(u){return $.apply(this,arguments)}function $(){return $=v()(r()().mark(function u(P){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,A.request)("component/list",{params:P}));case 1:case"end":return t.stop()}},u)})),$.apply(this,arguments)}function ne(u,P){return Y.apply(this,arguments)}function Y(){return Y=v()(r()().mark(function u(P,l){return r()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",(0,A.request)("component/list-work/".concat(l),{params:P}));case 1:case"end":return b.stop()}},u)})),Y.apply(this,arguments)}function re(u){return K.apply(this,arguments)}function K(){return K=v()(r()().mark(function u(P){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,A.request)("component/delete/".concat(P),{method:"POST"}));case 1:case"end":return t.stop()}},u)})),K.apply(this,arguments)}function se(u){return z.apply(this,arguments)}function z(){return z=v()(r()().mark(function u(P){var l;return r()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return l={searchTerm:P.keyWords},b.abrupt("return",(0,A.request)("component/form-select",{params:l}));case 2:case"end":return b.stop()}},u)})),z.apply(this,arguments)}}}]);
