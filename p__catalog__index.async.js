"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5690],{76131:function(ne,N,n){var z=n(97857),r=n.n(z),G=n(37476),d=n(5966),W=n(65675),v=n(86074),M=function($){return(0,v.jsxs)(G.Y,r()(r()({},$),{},{title:"Add component",children:[(0,v.jsx)(d.Z,{name:"name",label:"Name"}),(0,v.jsx)(W.Z,{name:"componentId",label:"Component"})]}))};N.Z=M},65675:function(ne,N,n){var z=n(98364),r=n(64317),G=n(86074),d=function(v){return(0,G.jsx)(r.Z,{showSearch:!0,request:z.Ef,name:v.name,label:v.label})};N.Z=d},75316:function(ne,N,n){n.r(N),n.d(N,{default:function(){return We}});var z=n(15009),r=n.n(z),G=n(99289),d=n.n(G),W=n(5574),v=n.n(W),M=n(66352),q=n(47389),$=n(82061),H=n(1413),u=n(62435),re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},Q=re,ee=n(91146),V=function(I,l){return u.createElement(ee.Z,(0,H.Z)((0,H.Z)({},I),{},{ref:l,icon:Q}))};V.displayName="MoreOutlined";var te=u.forwardRef(V),U=n(51042),ae=n(62639),_=n(37476),s=n(5966),Z=n(64317),i=n(58301),t=n(71577),w=n(86738),me=n(85418),S=n(35312),fe=n(76131),e=n(86074),pe=function(){var I=(0,S.useParams)(),l=I.id,k=(0,u.useState)([]),T=v()(k,2),y=T[0],h=T[1],E=(0,u.useState)(!1),R=v()(E,2),C=R[0],x=R[1],F=(0,u.useState)(!1),g=v()(F,2),m=g[0],o=g[1],j=(0,u.useState)(),b=v()(j,2),a=b[0],O=b[1],K=function(){(0,M.KC)(l).then(function(f){h(f.data)})};(0,u.useEffect)(function(){l&&K()},[l]);var D=function(){var A=d()(r()().mark(function f(c){var p;return r()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,M.zt)(c,l);case 2:p=P.sent,p.succeeded?(i.ZP.success("Deleted!"),K()):i.ZP.error(p.errors[0].description);case 4:case"end":return P.stop()}},f)}));return function(c){return A.apply(this,arguments)}}(),Y=function(){var A=d()(r()().mark(function f(c){var p;return r()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return c.catalogId=l,P.next=3,(0,M.yL)(c);case 3:p=P.sent,p.succeeded&&(i.ZP.success("Added!"),x(!1),K());case 5:case"end":return P.stop()}},f)}));return function(c){return A.apply(this,arguments)}}(),ie=function(){var A=d()(r()().mark(function f(){var c;return r()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,(0,M.x)();case 2:c=L.sent,O(c),o(!0);case 5:case"end":return L.stop()}},f)}));return function(){return A.apply(this,arguments)}}(),Be=function(){var A=d()(r()().mark(function f(c){var p;return r()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,M.jX)(c);case 2:p=P.sent,p.succeeded&&(i.ZP.success("Saved"),o(!1),K());case 4:case"end":return P.stop()}},f)}));return function(c){return A.apply(this,arguments)}}(),ke=[{key:"1",label:"Show / Hide"}],Ke=function(){var A=d()(r()().mark(function f(c,p){var L;return r()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:if(c.key!=="1"){J.next=5;break}return J.next=3,(0,M.Wv)(p);case 3:L=J.sent,L.succeeded&&(i.ZP.success("Actived!"),K());case 5:case"end":return J.stop()}},f)}));return function(c,p){return A.apply(this,arguments)}}(),$e=[{title:"#",dataIndex:"sort",className:"drag-visible"},{title:"Name",dataIndex:"name"},{title:"Status",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"Action",valueType:"option",render:function(f,c){return[(0,e.jsx)(t.ZP,{type:"primary",disabled:c.autoGenerateField,icon:(0,e.jsx)(q.Z,{}),onClick:function(){S.history.push("/works/".concat(c.normalizedName.toLocaleLowerCase(),"/").concat(c.id))}},1),(0,e.jsx)(w.Z,{title:"Are you sure?",onConfirm:function(){return D(c.id)},children:(0,e.jsx)(t.ZP,{icon:(0,e.jsx)($.Z,{}),danger:!0,type:"primary"})},4),(0,e.jsx)(me.Z,{menu:{items:ke,onClick:function(L){return Ke(L,c.id)}},children:(0,e.jsx)(t.ZP,{icon:(0,e.jsx)(te,{}),type:"dashed"})},"more")]}}],Ne=function(f){var c=f.map(function(p){return p.id||""});(0,M.P0)(c).then(function(p){p.succeeded&&(h(f),i.ZP.success("Saved!"))})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"mb-2 flex justify-end gap-2",children:[(0,e.jsx)(t.ZP,{onClick:function(){return x(!0)},type:"primary",icon:(0,e.jsx)(U.Z,{}),children:(0,e.jsx)("span",{children:(0,e.jsx)(S.FormattedMessage,{id:"general.new"})})},0),(0,e.jsx)(t.ZP,{onClick:ie,icon:(0,e.jsx)(U.Z,{}),children:"Ch\u1ECDn"},1)]}),(0,e.jsx)(ae.Z,{search:!1,rowKey:"id",columns:$e,pagination:!1,dataSource:y,dragSortKey:"sort",onDragSortEnd:Ne}),(0,e.jsx)(fe.Z,{open:C,onOpenChange:x,onFinish:Y}),(0,e.jsxs)(_.Y,{open:m,onOpenChange:o,onFinish:Be,children:[(0,e.jsx)(s.Z,{name:"catalogId",initialValue:l,hidden:!0}),(0,e.jsx)(Z.Z,{showSearch:!0,name:"workContentId",options:a,label:"Work"})]})]})},ve=pe,B=n(12361),he=n(63386),se=n(28199),ge=n(71230),ue=n(15746),je=n(35003),Ce=n(8811),le=n(55375),Pe=n(97857),ce=n.n(Pe),xe=n(84697),Ze=n(64176),ye=n(90672),Se=function(){var I=(0,S.useParams)(),l=I.id,k=(0,u.useState)(!1),T=v()(k,2),y=T[0],h=T[1],E=(0,u.useRef)(),R=function(){var F=d()(r()().mark(function g(m){var o,j;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return m.parentId=l,m.type=Number(m.type),a.next=4,(0,B.BP)(m);case 4:o=a.sent,o.succeeded&&(i.ZP.success("Added!"),(j=E.current)===null||j===void 0||j.reload(),h(!1));case 6:case"end":return a.stop()}},g)}));return function(m){return F.apply(this,arguments)}}(),C=function(){var F=d()(r()().mark(function g(m){var o,j;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,B.S8)(m);case 2:o=a.sent,o.succeeded?(i.ZP.success("Deleted"),(j=E.current)===null||j===void 0||j.reload()):i.ZP.error(o.errors[0].description);case 4:case"end":return a.stop()}},g)}));return function(m){return F.apply(this,arguments)}}(),x=function(g){var m;S.history.push("/catalog/".concat(g)),(m=E.current)===null||m===void 0||m.reload()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ze.Rs,{headerTitle:"Trang con",actionRef:E,toolBarRender:function(){return[(0,e.jsx)(t.ZP,{type:"primary",icon:(0,e.jsx)(U.Z,{}),onClick:function(){return h(!0)},children:(0,e.jsx)("span",{children:(0,e.jsx)(S.FormattedMessage,{id:"general.new"})})},"3")]},metas:{title:{dataIndex:"name"},description:{dataIndex:"id"},actions:{render:function(g,m){return[(0,e.jsx)(t.ZP,{icon:(0,e.jsx)(q.Z,{}),type:"primary",onClick:function(){return x(m.id)}},1),(0,e.jsx)(w.Z,{title:"Are you sure?",onConfirm:function(){return C(m.id)},children:(0,e.jsx)(t.ZP,{icon:(0,e.jsx)($.Z,{}),type:"primary",danger:!0})},2)]}}},request:function(g){return(0,B.A$)(ce()(ce()({},g),{},{parentId:l}))},pagination:{}}),(0,e.jsxs)(_.Y,{open:y,onOpenChange:h,onFinish:R,title:(0,e.jsx)(S.FormattedMessage,{id:"general.new"}),children:[(0,e.jsx)(s.Z,{name:"name",label:"Name",rules:[{required:!0}]}),(0,e.jsx)(xe.Z,{label:"Type",name:"type",initialValue:"".concat(le.H.Default)}),(0,e.jsx)(ye.Z,{label:"Description",name:"description"})]})]})},Ee=Se,Oe=n(34994),oe=n(31199),De=n(93421),Me=n(1913),Ie=n(32545),Te=function(){var I=(0,S.useParams)(),l=I.id,k=(0,u.useState)(!1),T=v()(k,2),y=T[0],h=T[1],E=(0,u.useState)([]),R=v()(E,2),C=R[0],x=R[1];(0,u.useEffect)(function(){(0,B.NU)(l).then(function(o){o&&x(o.images)})},[]);var F=function(){return h(!1)},g=function(){var o=d()(r()().mark(function j(b){var a,O;return r()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return a=C,a.push(b),D.next=4,(0,B.kn)(a,l);case 4:O=D.sent,O.succeeded?(x(a),i.ZP.success("Saved!")):i.ZP.error(O.errors[0].description);case 6:case"end":return D.stop()}},j)}));return function(b){return o.apply(this,arguments)}}(),m=function(){var o=d()(r()().mark(function j(b){var a,O;return r()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return a=C.filter(function(Y){return Y!==b}),D.next=3,(0,B.kn)(a,l);case 3:O=D.sent,O.succeeded?(x(a),i.ZP.success("Saved!")):i.ZP.error(O.errors[0].description);case 5:case"end":return D.stop()}},j)}));return function(b){return o.apply(this,arguments)}}();return(0,e.jsxs)(se.Z,{title:"Gallery",bordered:!0,headerBordered:!0,children:[(0,e.jsxs)("div",{className:"flex gap-4",children:[C.map(function(o,j){return(0,e.jsxs)("div",{className:"btn-upload p-2",children:[(0,e.jsx)(Ie.Z,{src:o,alt:"IMG"}),(0,e.jsx)(t.ZP,{icon:(0,e.jsx)($.Z,{}),size:"small",danger:!0,onClick:function(){return m(o)},style:{position:"absolute",right:6}})]},j)}),(0,e.jsxs)("button",{type:"button",className:"btn-upload",onClick:function(){return h(!0)},children:[(0,e.jsx)(U.Z,{}),(0,e.jsx)("div",{style:{marginTop:8},children:"Upload"})]})]}),(0,e.jsx)(Me.Z,{open:y,onCancel:F,onFinish:g})]})},Re=Te,Fe=function(){var I=(0,S.useParams)(),l=I.id,k=(0,u.useRef)();(0,u.useEffect)(function(){(0,B.lI)(l).then(function(y){if(y){var h;(h=k.current)===null||h===void 0||h.setFields([{name:"sku",value:y.sku},{name:"price",value:y.price},{name:"salePrice",value:y.salePrice},{name:"unitInStock",value:y.unitInStock}])}})},[]);var T=function(){var y=d()(r()().mark(function h(E){var R;return r()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return E.catalogId=l,x.next=3,(0,B.gg)(E);case 3:R=x.sent,R.succeeded&&i.ZP.success("Saved");case 5:case"end":return x.stop()}},h)}));return function(E){return y.apply(this,arguments)}}();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(se.Z,{title:"Details",headerBordered:!0,bordered:!0,className:"mb-4",children:(0,e.jsx)(Oe.A,{onFinish:T,formRef:k,children:(0,e.jsxs)(De.Z,{children:[(0,e.jsx)(s.Z,{name:"sku",label:"SKU"}),(0,e.jsx)(oe.Z,{name:"price",label:"Price"}),(0,e.jsx)(oe.Z,{name:"salePrice",label:"Sale price"}),(0,e.jsx)(oe.Z,{name:"unitInStock",label:"Stock"})]})})}),(0,e.jsx)(Re,{})]})},be=Fe,Ae=n(26554),de=function(I,l){return u.createElement(ee.Z,(0,H.Z)((0,H.Z)({},I),{},{ref:l,icon:Ae.Z}))};de.displayName="LeftOutlined";var Le=u.forwardRef(de),we=function(){var I=(0,S.useParams)(),l=I.id,k=(0,u.useState)(!1),T=v()(k,2),y=T[0],h=T[1],E=(0,u.useState)(),R=v()(E,2),C=R[0],x=R[1],F=(0,u.useState)("content"),g=v()(F,2),m=g[0],o=g[1];(0,u.useEffect)(function(){(0,B.R4)(l).then(function(a){return x(a)})},[l]);var j=function(){var a=d()(r()().mark(function O(K){return r()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:(0,B.BP)(K).then(function(ie){ie.succeeded&&(i.ZP.success("Saved!"),h(!1))});case 1:case"end":return Y.stop()}},O)}));return function(K){return a.apply(this,arguments)}}(),b=function(O){o(O)};return(0,e.jsx)(he._z,{title:C==null?void 0:C.name,extra:(0,e.jsx)(t.ZP,{icon:(0,e.jsx)(Le,{}),onClick:function(){return S.history.back()},children:(0,e.jsx)("span",{children:(0,e.jsx)(S.FormattedMessage,{id:"general.back"})})}),children:(0,e.jsxs)(ge.Z,{gutter:16,children:[(0,e.jsxs)(ue.Z,{span:18,children:[(0,e.jsx)(se.Z,{tabs:{tabPosition:"top",activeKey:m,items:[{label:"Content",key:"content",children:(0,e.jsx)(ve,{})},{label:(0,e.jsx)(S.FormattedMessage,{id:"menu.settings"}),key:"setting",children:(0,e.jsx)(je.Z,{})},{label:(0,e.jsx)(S.FormattedMessage,{id:"pages.catalog.productDetail"}),key:"product-detail",children:(0,e.jsx)(be,{}),disabled:(C==null?void 0:C.type)!==le.H.Product}],onChange:b},className:"mb-4"}),!(C!=null&&C.parentId)&&(0,e.jsx)(Ee,{}),(0,e.jsxs)(_.Y,{onFinish:j,open:y,onOpenChange:h,children:[(0,e.jsx)(s.Z,{name:"name",label:"Name"}),(0,e.jsx)(s.Z,{name:"normalizedName",label:"Normalized Name"})]})]}),(0,e.jsx)(ue.Z,{span:6,children:(0,e.jsx)(Ce.Z,{})})]})})},We=we},98364:function(ne,N,n){n.d(N,{CO:function(){return re},Ef:function(){return ae},KL:function(){return H},Xr:function(){return v},Z:function(){return ee},v7:function(){return te}});var z=n(15009),r=n.n(z),G=n(99289),d=n.n(G),W=n(35312);function v(s){return M.apply(this,arguments)}function M(){return M=d()(r()().mark(function s(Z){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,W.request)("component/".concat(Z)));case 1:case"end":return t.stop()}},s)})),M.apply(this,arguments)}function q(s){return $.apply(this,arguments)}function $(){return $=_asyncToGenerator(_regeneratorRuntime().mark(function s(Z){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("component/add",{method:"POST",data:Z}));case 1:case"end":return t.stop()}},s)})),$.apply(this,arguments)}function H(s){return u.apply(this,arguments)}function u(){return u=d()(r()().mark(function s(Z){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,W.request)("component/update",{method:"POST",data:Z}));case 1:case"end":return t.stop()}},s)})),u.apply(this,arguments)}function re(s){return Q.apply(this,arguments)}function Q(){return Q=d()(r()().mark(function s(Z){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,W.request)("component/list",{params:Z}));case 1:case"end":return t.stop()}},s)})),Q.apply(this,arguments)}function ee(s,Z){return V.apply(this,arguments)}function V(){return V=d()(r()().mark(function s(Z,i){return r()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.abrupt("return",(0,W.request)("component/list-work/".concat(i),{params:Z}));case 1:case"end":return w.stop()}},s)})),V.apply(this,arguments)}function te(s){return U.apply(this,arguments)}function U(){return U=d()(r()().mark(function s(Z){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,W.request)("component/delete/".concat(Z),{method:"POST"}));case 1:case"end":return t.stop()}},s)})),U.apply(this,arguments)}function ae(s){return _.apply(this,arguments)}function _(){return _=d()(r()().mark(function s(Z){var i;return r()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return i={searchTerm:Z.keyWords},w.abrupt("return",(0,W.request)("component/form-select",{params:i}));case 2:case"end":return w.stop()}},s)})),_.apply(this,arguments)}}}]);
