"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1816],{77198:function(X,C,e){var R=e(97857),t=e.n(R),x=e(5574),o=e.n(x),m=e(20385),h=e(15245),p=e(89050),A=e(55555),I=e(55287),L=e(82061),Z=e(14361),J=e(73403),B=e(88484),w=e(80527),T=e(35312),P=e(58301),D=e(85418),b=e(93421),f=e(86738),M=e(71577),W=e(98366),_=e(71230),d=e(15746),c=e(85673),i=e(96365),g=e(65419),O=e(62435),l=e(86074),S=function(E){var U=(0,T.useIntl)(),r=(0,O.useRef)(),z=(0,O.useState)(),N=o()(z,2),$=N[0],q=N[1],te={name:"file",action:m.kE,onChange:function(a){if(a.file.status!=="uploading"&&console.log(a.file,a.fileList),a.file.status==="done"){var n;P.ZP.success("".concat(a.file.name," file uploaded successfully")),(n=r.current)===null||n===void 0||n.reload()}else a.file.status==="error"&&P.ZP.error("".concat(a.file.name," file upload failed."))}},Q=[{key:"images",name:"Images",icon:(0,l.jsx)(h.Z,{twoToneColor:"#eb2f96"})},{key:"videos",name:"Videos",icon:(0,l.jsx)(p.Z,{})},{key:"text",name:"Documents",icon:(0,l.jsx)(A.Z,{twoToneColor:"#52c41a"})}],s=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:"Date modified",dataIndex:"modifiedDate"},{title:"Type",dataIndex:"type"},{title:"Size",dataIndex:"size"},{title:"Action",render:function(a,n){return(0,l.jsx)(D.Z,{menu:{items:[{key:1,label:(0,l.jsxs)(b.Z,{onClick:function(){return T.history.push("/files/center/".concat(n.id))},children:[(0,l.jsx)(I.Z,{}),(0,l.jsx)(T.FormattedMessage,{id:"general.preview"})]})},{key:2,label:(0,l.jsx)(f.Z,{title:"Are you sure?",children:(0,l.jsxs)(b.Z,{children:[(0,l.jsx)(L.Z,{}),"Delete"]})}),danger:!0}]},children:(0,l.jsx)(M.ZP,{icon:(0,l.jsx)(Z.Z,{}),type:"link",size:"small"})})}}];return(0,l.jsxs)(W.Z,{title:"File Explorer",open:E.open,onCancel:function(){return E.onOpenChange()},centered:!0,width:1100,footer:!1,children:[(0,l.jsx)("div",{className:"mb-4",children:(0,l.jsxs)(_.Z,{gutter:16,children:[(0,l.jsx)(d.Z,{span:4}),(0,l.jsx)(d.Z,{span:20,children:(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(c.Z.Item,{href:"",children:(0,l.jsx)(J.Z,{})}),(0,l.jsx)(c.Z.Item,{href:"",children:"Home"})]}),(0,l.jsx)("div",{children:(0,l.jsx)(i.Z.Search,{placeholder:"Search"})})]})})]})}),(0,l.jsxs)(_.Z,{gutter:16,children:[(0,l.jsx)(d.Z,{span:4,style:{borderRight:"1px solid #d1d1d1"},children:Q.map(function(u){return(0,l.jsx)("div",{className:"hover-light",children:(0,l.jsx)(M.ZP,{type:"link",icon:u.icon,children:u.name})},u.key)})}),(0,l.jsx)(d.Z,{span:20,children:(0,l.jsx)(w.Z,{rowSelection:{},toolBarRender:function(){return[(0,O.createElement)(g.Z,t()(t()({},te),{},{key:0}),(0,l.jsx)(M.ZP,{icon:(0,l.jsx)(B.Z,{}),type:"primary",children:"Upload"}))]},search:!1,columns:s,request:function(a){return(0,m.V6)(t()({},a),E.type)},pagination:{defaultPageSize:8},actionRef:r})})]})]})};C.Z=S},84697:function(X,C,e){var R=e(12361),t=e(64317),x=e(86074),o=function(h){return(0,x.jsx)(t.Z,{request:R.Z9,label:h.label,name:h.name,initialValue:h.initialValue,rules:[{required:!0}]})};C.Z=o},37097:function(X,C,e){e.d(C,{l:function(){return m}});var R=e(12361),t=e(64317),x=e(86074),o=function(A){return(0,x.jsx)(t.Z,{showSearch:!0,request:R.wu,label:A.label,name:A.name})},m=o,h=e(84697)},35003:function(X,C,e){var R=e(15009),t=e.n(R),x=e(99289),o=e.n(x),m=e(5574),h=e.n(m),p=e(12361),A=e(55725),I=e(34994),L=e(5966),Z=e(90672),J=e(63434),B=e(35312),w=e(58301),T=e(71577),P=e(62435),D=e(84697),b=e(77198),f=e(86074),M=function(){var _=(0,B.useParams)(),d=_.id,c=(0,P.useRef)(),i=(0,P.useState)(!1),g=h()(i,2),O=g[0],l=g[1];(0,P.useEffect)(function(){(0,p.R4)(d).then(function(E){var U;(U=c.current)===null||U===void 0||U.setFields([{name:"id",value:E.id},{name:"name",value:E.name},{name:"normalizedName",value:E.normalizedName},{name:"description",value:E.description},{name:"thumbnail",value:E.thumbnail},{name:"type",value:E.type.toString()},{name:"active",value:E.active}])})},[d]);var S=function(){var E=o()(t()().mark(function U(r){var z;return t()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return r.type=Number(r.type),$.next=3,(0,p.BA)(r);case 3:z=$.sent,z.succeeded&&w.ZP.success("Saved!");case 5:case"end":return $.stop()}},U)}));return function(r){return E.apply(this,arguments)}}(),k=function(U){var r;(r=c.current)===null||r===void 0||r.setFieldValue("thumbnail",U.url),l(!1)};return(0,f.jsxs)("div",{children:[(0,f.jsxs)(I.A,{formRef:c,onFinish:S,children:[(0,f.jsx)(L.Z,{name:"id",hidden:!0}),(0,f.jsx)(L.Z,{name:"name",label:"Name",rules:[{required:!0}]}),(0,f.jsx)(L.Z,{name:"normalizedName",label:"Normalized name",rules:[{required:!0}]}),(0,f.jsx)(Z.Z,{name:"description",label:"Description"}),(0,f.jsx)(L.Z,{name:"thumbnail",label:"Thumbnail",width:"lg",addonAfter:(0,f.jsx)(T.ZP,{icon:(0,f.jsx)(A.Z,{}),onClick:function(){return l(!0)},children:"File explorer"})}),(0,f.jsx)(D.Z,{name:"type",label:"Type"}),(0,f.jsx)(J.Z,{name:"active",label:"Active"})]}),(0,f.jsx)(b.Z,{open:O,onOpenChange:l,onSelect:k})]})};C.Z=M},74653:function(X,C,e){e.d(C,{Z:function(){return Q}});var R=e(15009),t=e.n(R),x=e(99289),o=e.n(x),m=e(5574),h=e.n(m),p=e(55287),A=e(43425),I=e(47389),L=e(3471),Z=e(51042),J=e(28199),B=e(37476),w=e(5966),T=e(31199),P=e(62435),D=e(55375),b=e(35312),f=e(12361),M=e(58301),W=e(83062),_=e(32983),d=e(32545),c=e(96074),i=e(26412),g=e(25514),O=e(71577),l=e(93421),S=e(5251),k=e(37097),E=e(66352),U=e(66309),r=e(86074),z=function(){var u=(0,b.useParams)(),a=u.id,n=(0,P.useState)(),y=h()(n,2),V=y[0],ee=y[1],le=(0,P.useState)(!1),re=h()(le,2),v=re[0],ae=re[1],ue=function(){(0,f.m_)(a).then(function(K){ee(K)})};(0,P.useEffect)(function(){ue()},[]);var ie=function(){var j=o()(t()().mark(function K(F){var Y;return t()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return ne.next=2,(0,E.jX)({workId:a,catalogId:F.id,sortOrder:F.sortOrder});case 2:Y=ne.sent,Y.succeeded?(M.ZP.success("Saved!"),ae(!1),ue()):M.ZP.error(Y.errors[0].description);case 4:case"end":return ne.stop()}},K)}));return function(F){return j.apply(this,arguments)}}(),H=function(){var j=o()(t()().mark(function K(F){var Y,G;return t()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,(0,E.wz)({catalogId:F,workId:a,sortOrder:0});case 2:Y=se.sent,Y.succeeded?(G=V==null?void 0:V.filter(function(oe){return oe.id!==F}),ee(G),M.ZP.success("Deleted")):M.ZP.error(Y.errors[0].description);case 4:case"end":return se.stop()}},K)}));return function(F){return j.apply(this,arguments)}}();return(0,r.jsxs)("div",{children:[V==null?void 0:V.map(function(j){return(0,r.jsx)(U.Z,{closable:!0,onClose:function(){return H(j.id)},children:j.name},j.id)}),(0,r.jsx)(O.ZP,{size:"small",type:"dashed",onClick:function(){return ae(!0)},children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(Z.Z,{}),(0,r.jsx)(b.FormattedMessage,{id:"general.new"})]})}),(0,r.jsxs)(B.Y,{open:v,onOpenChange:ae,onFinish:ie,title:"Th\xEAm m\u1EDBi",children:[(0,r.jsx)(k.l,{label:"Tag",name:"id"}),(0,r.jsx)(T.Z,{label:"Sort order",name:"sortOrder"})]})]})},N=z,$=function(){return localStorage.getItem("wf_URL")},q=$(),te=function(){var u=(0,b.useParams)(),a=u.id,n=(0,P.useState)(!1),y=h()(n,2),V=y[0],ee=y[1],le=(0,P.useState)(),re=h()(le,2),v=re[0],ae=re[1];(0,P.useEffect)(function(){(0,f.R4)(a).then(function(H){return ae(H)})},[a]);var ue=function(){var H=o()(t()().mark(function j(K){var F;return t()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return K.active=!0,G.next=3,(0,f.BP)(K);case 3:F=G.sent,F.succeeded?(M.ZP.success("Added!"),ee(!1)):M.ZP.error(F.errors[0].description);case 5:case"end":return G.stop()}},j)}));return function(K){return H.apply(this,arguments)}}(),ie=function(){var j="leaf";switch(v==null?void 0:v.type){case D.H.Article:j="article";break;case D.H.Location:j="locations";break;case D.H.Video:j="videos";break}return"".concat(q).concat(j,"/").concat(v==null?void 0:v.normalizedName)};return(0,r.jsxs)(J.Z,{title:"Summary",actions:[(0,r.jsx)(W.Z,{title:"Preview",children:(0,r.jsx)(p.Z,{onClick:function(){return window.open(ie())}})},"view"),(0,r.jsx)(A.Z,{},"setting"),(0,r.jsx)(I.Z,{},"edit"),(0,r.jsx)(L.Z,{},"ellipsis")],children:[(0,r.jsx)("div",{className:"flex items-center justify-center mt-4",children:v!=null&&v.thumbnail?(0,r.jsx)(d.Z,{src:(0,S.Er)(v==null?void 0:v.thumbnail),height:200,className:"object-fit-cover"}):(0,r.jsx)(_.Z,{})}),(0,r.jsx)(c.Z,{}),(0,r.jsxs)(i.Z,{title:"Information",column:1,children:[(0,r.jsx)(i.Z.Item,{label:"L\u01B0\u1EE3t xem",children:v==null?void 0:v.viewCount}),(0,r.jsx)(i.Z.Item,{label:"Created date",children:(0,S.p6)(v==null?void 0:v.createdDate)}),(0,r.jsx)(i.Z.Item,{label:"Modified date",children:(0,S.p6)(v==null?void 0:v.modifiedDate)})]}),((v==null?void 0:v.type)||D.H.Entry)===D.H.Tag?(0,r.jsx)(P.Fragment,{}):(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)(g.Z.Title,{level:5,children:"Tags"}),(0,r.jsx)(N,{}),(0,r.jsx)(c.Z,{dashed:!0}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(O.ZP,{size:"small",type:"dashed",onClick:function(){return ee(!0)},children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(Z.Z,{}),"T\u1EA1o tag"]})})})]}),(0,r.jsxs)(B.Y,{open:V,onOpenChange:ee,onFinish:ue,title:"Create tag",children:[(0,r.jsx)(w.Z,{name:"name",rules:[{required:!0}],label:"Name"}),(0,r.jsx)(T.Z,{name:"type",initialValue:D.H.Tag,hidden:!0})]})]})},Q=te},12361:function(X,C,e){e.d(C,{A$:function(){return L},BA:function(){return P},BP:function(){return A},M0:function(){return U},NU:function(){return te},R4:function(){return h},S8:function(){return w},Z9:function(){return g},_V:function(){return M},kn:function(){return $},m_:function(){return l},tD:function(){return z},wu:function(){return k}});var R=e(15009),t=e.n(R),x=e(99289),o=e.n(x),m=e(35312);function h(s){return p.apply(this,arguments)}function p(){return p=o()(t()().mark(function s(u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("catalog/".concat(u)));case 1:case"end":return n.stop()}},s)})),p.apply(this,arguments)}function A(s){return I.apply(this,arguments)}function I(){return I=o()(t()().mark(function s(u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("catalog/add",{method:"POST",data:u}));case 1:case"end":return n.stop()}},s)})),I.apply(this,arguments)}function L(s){return Z.apply(this,arguments)}function Z(){return Z=o()(t()().mark(function s(u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("catalog/list",{method:"GET",params:u}));case 1:case"end":return n.stop()}},s)})),Z.apply(this,arguments)}function J(){return B.apply(this,arguments)}function B(){return B=_asyncToGenerator(_regeneratorRuntime().mark(function s(){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("catalog/tree"));case 1:case"end":return a.stop()}},s)})),B.apply(this,arguments)}function w(s){return T.apply(this,arguments)}function T(){return T=o()(t()().mark(function s(u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("catalog/delete/".concat(u),{method:"POST"}));case 1:case"end":return n.stop()}},s)})),T.apply(this,arguments)}function P(s){return D.apply(this,arguments)}function D(){return D=o()(t()().mark(function s(u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("catalog/save",{method:"POST",data:u}));case 1:case"end":return n.stop()}},s)})),D.apply(this,arguments)}function b(s){return f.apply(this,arguments)}function f(){return f=_asyncToGenerator(_regeneratorRuntime().mark(function s(u){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("catalog/tree-drop",{method:"POST",data:u}));case 1:case"end":return n.stop()}},s)})),f.apply(this,arguments)}function M(){return W.apply(this,arguments)}function W(){return W=o()(t()().mark(function s(){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("catalog/view-count"));case 1:case"end":return a.stop()}},s)})),W.apply(this,arguments)}function _(s){return d.apply(this,arguments)}function d(){return d=_asyncToGenerator(_regeneratorRuntime().mark(function s(u){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("catalog/active/".concat(u),{method:"POST"}));case 1:case"end":return n.stop()}},s)})),d.apply(this,arguments)}function c(s){return i.apply(this,arguments)}function i(){return i=_asyncToGenerator(_regeneratorRuntime().mark(function s(u){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("catalog/update-thumbnail",{method:"POST",data:u}));case 1:case"end":return n.stop()}},s)})),i.apply(this,arguments)}function g(){return O.apply(this,arguments)}function O(){return O=o()(t()().mark(function s(){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("catalog/types"));case 1:case"end":return a.stop()}},s)})),O.apply(this,arguments)}function l(s){return S.apply(this,arguments)}function S(){return S=o()(t()().mark(function s(u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("catalog/list-tag/".concat(u)));case 1:case"end":return n.stop()}},s)})),S.apply(this,arguments)}function k(s){return E.apply(this,arguments)}function E(){return E=o()(t()().mark(function s(u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("catalog/list-tag-select",{params:u}));case 1:case"end":return n.stop()}},s)})),E.apply(this,arguments)}function U(s,u){return r.apply(this,arguments)}function r(){return r=o()(t()().mark(function s(u,a){return t()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",(0,m.request)("catalog/list-by-tag/".concat(u),{params:a}));case 1:case"end":return y.stop()}},s)})),r.apply(this,arguments)}function z(){return N.apply(this,arguments)}function N(){return N=o()(t()().mark(function s(){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("catalog/pie-chart"));case 1:case"end":return a.stop()}},s)})),N.apply(this,arguments)}function $(s,u){return q.apply(this,arguments)}function q(){return q=o()(t()().mark(function s(u,a){return t()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",(0,m.request)("/product/image/save",{method:"POST",data:{urls:u,catalogId:a}}));case 1:case"end":return y.stop()}},s)})),q.apply(this,arguments)}function te(s){return Q.apply(this,arguments)}function Q(){return Q=o()(t()().mark(function s(u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/product/image/".concat(u)));case 1:case"end":return n.stop()}},s)})),Q.apply(this,arguments)}},20385:function(X,C,e){e.d(C,{Ah:function(){return L},Cq:function(){return w},V6:function(){return A},kE:function(){return b},tg:function(){return M},z3:function(){return P}});var R=e(15009),t=e.n(R),x=e(97857),o=e.n(x),m=e(99289),h=e.n(m),p=e(35312);function A(_,d,c){return I.apply(this,arguments)}function I(){return I=h()(t()().mark(function _(d,c,i){return t()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.abrupt("return",(0,p.request)("fileExplorer/list",o()({method:"GET",params:o()({type:Object.keys(c!=null?c:[]).length>0?c==null?void 0:c.join(","):""},d)},i||{})));case 1:case"end":return O.stop()}},_)})),I.apply(this,arguments)}function L(_){return Z.apply(this,arguments)}function Z(){return Z=h()(t()().mark(function _(d){return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("fileExplorer/delete-file-content/".concat(d),{method:"POST"}));case 1:case"end":return i.stop()}},_)})),Z.apply(this,arguments)}function J(_){return B.apply(this,arguments)}function B(){return B=_asyncToGenerator(_regeneratorRuntime().mark(function _(d){return _regeneratorRuntime().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",request("fileExplorer/delete-file-item",{method:"POST",data:d}));case 1:case"end":return i.stop()}},_)})),B.apply(this,arguments)}function w(_){return T.apply(this,arguments)}function T(){return T=h()(t()().mark(function _(d){return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("fileExplorer/".concat(d)));case 1:case"end":return i.stop()}},_)})),T.apply(this,arguments)}function P(_,d){return D.apply(this,arguments)}function D(){return D=h()(t()().mark(function _(d,c){return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,p.request)("fileExplorer/file-items/".concat(c.id)));case 1:case"end":return g.stop()}},_)})),D.apply(this,arguments)}function b(_){return f.apply(this,arguments)}function f(){return f=h()(t()().mark(function _(d){var c;return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return c=new FormData,c.append("file",d),g.abrupt("return",(0,p.request)("fileExplorer/upload",{method:"POST",data:c}));case 3:case"end":return g.stop()}},_)})),f.apply(this,arguments)}function M(_){return W.apply(this,arguments)}function W(){return W=h()(t()().mark(function _(d){return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("fileexplorer/upload-from-url",{method:"POST",data:{url:d}}));case 1:case"end":return i.stop()}},_)})),W.apply(this,arguments)}},5251:function(X,C,e){e.d(C,{Er:function(){return o},p6:function(){return m}});var R=e(27484),t=e.n(R);function x(p){return p.trim()}function o(p){return new URL(p||"",localStorage.getItem("wf_URL")||"").href}function m(p){return p?t()(p).format("DD/MM/YYYY hh:mm:ss"):"-"}var h=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(I){setTimeout(function(){I(!0)},A)})}}}]);
