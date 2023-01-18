"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6122],{76131:function(ee,I,e){var B=e(5574),t=e.n(B),$=e(98364),a=e(99351),f=e(5966),i=e(64317),C=e(62435),R=e(86074),x=function(j){var z=(0,C.useState)(),P=t()(z,2),F=P[0],U=P[1];return(0,C.useEffect)(function(){(0,$.eB)().then(function(E){U(E.map(function(l){return{label:l.name,value:l.id}}))})},[]),(0,R.jsxs)(a.Y,{open:j.open,title:"Add component",onFinish:j.onFinish,onOpenChange:j.onOpenChange,children:[(0,R.jsx)(f.Z,{name:"name",label:"Name"}),(0,R.jsx)(i.Z,{showSearch:!0,options:F,name:"componentId",label:"Component"})]})};I.Z=x},24817:function(ee,I,e){e.r(I),e.d(I,{default:function(){return Oe}});var B=e(97857),t=e.n(B),$=e(15009),a=e.n($),f=e(99289),i=e.n(f),C=e(5574),R=e.n(C),x=e(12873),L=e(61614),j=e(5251),z=e(13728),P=e(86548),F=e(48689),U=e(62884),E=e(30029),l=e(90905),g=e(27790),h=e(13013),M=e(71577),W=e(71230),d=e(15746),v=e(26713),A=e(32983),o=e(78613),O=e(96074),s=e(27511),u=e(22850),c=e(62435),p=e(76131),r=e(66352),se=e(24969),ce=e(40666),le=e(22538),oe=e(99351),ue=e(5966),_e=e(64317),de=e(86738),n=e(86074),T=function(){var X=(0,l.useParams)(),w=X.id,G=(0,c.useRef)(),k=(0,c.useState)(!1),N=R()(k,2),_=N[0],Q=N[1],ne=(0,c.useState)(!1),H=R()(ne,2),q=H[0],re=H[1],Y=function(){var K=i()(a()().mark(function Z(D){var S,y;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return D.catalogId=w,m.next=3,(0,r.yL)(D);case 3:S=m.sent,S.succeeded&&(g.ZP.success("Added!"),Q(!1),(y=G.current)===null||y===void 0||y.reload());case 5:case"end":return m.stop()}},Z)}));return function(D){return K.apply(this,arguments)}}(),ie=function(){var K=i()(a()().mark(function Z(D){var S,y;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,r.zt)(D,w);case 2:S=m.sent,S.succeeded&&(g.ZP.success("Deleted!"),(y=G.current)===null||y===void 0||y.reload());case 4:case"end":return m.stop()}},Z)}));return function(D){return K.apply(this,arguments)}}(),me=function(){var K=i()(a()().mark(function Z(D){var S,y;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,r.jX)(D);case 2:S=m.sent,S.succeeded&&(g.ZP.success("Saved!"),re(!1),(y=G.current)===null||y===void 0||y.reload());case 4:case"end":return m.stop()}},Z)}));return function(D){return K.apply(this,arguments)}}();return(0,n.jsxs)("div",{children:[(0,n.jsx)(le.Rs,{toolBarRender:function(){return[(0,n.jsx)(M.Z,{onClick:function(){return Q(!0)},type:"primary",icon:(0,n.jsx)(se.Z,{}),children:(0,n.jsx)(l.FormattedMessage,{id:"general.new"})},0),(0,n.jsx)(M.Z,{icon:(0,n.jsx)(ce.Z,{}),onClick:function(){return re(!0)},children:"Tag"},1)]},rowSelection:{},actionRef:G,request:i()(a()().mark(function K(){return a()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,r.KC)(w));case 1:case"end":return D.stop()}},K)})),headerTitle:"Work items",metas:{title:{dataIndex:"name"},actions:{render:function(Z,D){return[(0,n.jsx)(M.Z,{type:"primary",icon:(0,n.jsx)(P.Z,{}),onClick:function(){l.history.push("/works/".concat(D.normalizedName.toLocaleLowerCase(),"/").concat(D.id))}},1),(0,n.jsxs)(de.Z,{title:"Are you sure?",onConfirm:function(){return ie(D.id)},children:[(0,n.jsx)(M.Z,{icon:(0,n.jsx)(F.Z,{}),danger:!0,type:"primary"}),","]},4)]}}}}),(0,n.jsx)(p.Z,{open:_,onOpenChange:Q,onFinish:Y}),(0,n.jsxs)(oe.Y,{open:q,onOpenChange:re,onFinish:me,children:[(0,n.jsx)(ue.Z,{name:"catalogId",initialValue:w,hidden:!0}),(0,n.jsx)(_e.Z,{request:r.QL,label:"Tag",name:"workContentId"})]})]})},b=T,J=e(97269),pe=e(90672),V=e(63434),ve=function(X){var w,G,k,N,_=function(){var Q=i()(a()().mark(function ne(H){var q;return a()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,(0,L.zo)(H);case 2:q=Y.sent,q.succeeded?g.ZP.success("Saved!"):g.ZP.error(q.errors[0].description);case 4:case"end":return Y.stop()}},ne)}));return function(H){return Q.apply(this,arguments)}}();return(0,n.jsxs)(J.A,{onFinish:_,children:[(0,n.jsx)(ue.Z,{name:"id",hidden:!0,initialValue:(w=X.data)===null||w===void 0?void 0:w.id}),(0,n.jsx)(ue.Z,{required:!0,name:"name",label:"Name",initialValue:(G=X.data)===null||G===void 0?void 0:G.name}),(0,n.jsx)(pe.Z,{name:"description",label:"Description",initialValue:(k=X.data)===null||k===void 0?void 0:k.description}),(0,n.jsx)(V.Z,{name:"active",label:"Active",initialValue:(N=X.data)===null||N===void 0?void 0:N.active})]})},Ee=ve,ge=function(){var X=(0,l.useParams)(),w=X.id,G=(0,l.useIntl)(),k=(0,c.useState)(),N=R()(k,2),_=N[0],Q=N[1],ne=(0,c.useState)("content"),H=R()(ne,2),q=H[0],re=H[1],Y=(0,c.useState)(!1),ie=R()(Y,2),me=ie[0],K=ie[1];(0,c.useEffect)(function(){(0,L.R4)(w).then(function(S){Q(S)})},[]);var Z=[{key:"1",label:(0,n.jsx)("a",{onClick:function(){return l.history.push("".concat(localStorage.getItem("wf_URL"),"article/").concat(_==null?void 0:_.normalizedName))},children:(0,n.jsx)(l.FormattedMessage,{id:"general.preview"})})},{key:"2",label:(0,n.jsx)("a",{onClick:i()(a()().mark(function S(){var y;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,L.gY)(w);case 2:y=m.sent,y.succeeded&&g.ZP.success("Saved!");case 4:case"end":return m.stop()}},S)})),children:"Xu\u1EA5t b\u1EA3n"})},{key:"3",label:(0,n.jsx)("a",{children:"X\xF3a"}),danger:!0}],D=function(){var S=i()(a()().mark(function y(te){var m,he;return a()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:if(!_){ae.next=7;break}return m=t()(t()({},_),{},{thumbnail:te.url}),ae.next=4,(0,L.r5)(m);case 4:he=ae.sent,he.succeeded&&(g.ZP.success("Saved!"),Q(m)),K(!1);case 7:case"end":return ae.stop()}},y)}));return function(te){return S.apply(this,arguments)}}();return(0,n.jsxs)(U._z,{title:_==null?void 0:_.name,extra:(0,n.jsx)(h.Z,{menu:{items:Z},children:(0,n.jsx)(M.Z,{icon:(0,n.jsx)(z.Z,{})})}),children:[(0,n.jsxs)(W.Z,{gutter:16,children:[(0,n.jsx)(d.Z,{span:18,children:(0,n.jsx)(E.Z,{tabs:{tabPosition:"top",activeKey:q,items:[{label:"Content",key:"content",children:(0,n.jsx)(b,{})},{label:G.formatMessage({id:"menu.settings"}),key:"setting",children:(0,n.jsx)(Ee,{data:_})}],onChange:function(y){re(y)}}})}),(0,n.jsx)(d.Z,{span:6,children:(0,n.jsxs)(E.Z,{title:"Th\u1ED1ng k\xEA",children:[(0,n.jsxs)(v.Z,{children:[(0,n.jsx)(M.Z,{icon:(0,n.jsx)(P.Z,{}),onClick:function(){return K(!0)}}),(0,n.jsx)(M.Z,{icon:(0,n.jsx)(F.Z,{}),danger:!0,type:"primary"})]}),(0,n.jsx)("div",{className:"flex items-center justify-center",children:_!=null&&_.thumbnail?(0,n.jsx)(o.Z,{src:(0,j.Er)(_==null?void 0:_.thumbnail),width:200,height:200,className:"object-fit-cover"}):(0,n.jsx)(A.Z,{})}),(0,n.jsx)(O.Z,{}),(0,n.jsxs)(s.Z,{title:"Information",column:1,children:[(0,n.jsx)(s.Z.Item,{label:"L\u01B0\u1EE3t xem",children:_==null?void 0:_.viewCount}),(0,n.jsx)(s.Z.Item,{label:"Created date",children:(0,j.p6)(_==null?void 0:_.createdDate)}),(0,n.jsx)(s.Z.Item,{label:"Modified date",children:(0,j.p6)(_==null?void 0:_.modifiedDate)})]}),(0,n.jsx)(O.Z,{}),(0,n.jsx)(u.Z.Title,{level:5,children:"Tags"})]})})]}),(0,n.jsx)(x.Z,{open:me,onOpenChange:K,onSelect:D})]})},Oe=ge},12873:function(ee,I,e){var B=e(97857),t=e.n(B),$=e(15009),a=e.n($),f=e(99289),i=e.n(f),C=e(5574),R=e.n(C),x=e(20385),L=e(73403),j=e(88484),z=e(99611),P=e(48689),F=e(13728),U=e(99351),E=e(22538),l=e(90905),g=e(27790),h=e(75527),M=e(69677),W=e(71577),d=e(31365),v=e(26713),A=e(13013),o=e(86738),O=e(62435),s=e(86074),u=function(p){var r=(0,l.useIntl)(),se=(0,O.useRef)(),ce=(0,O.useState)(),le=R()(ce,2),oe=le[0],ue=le[1],_e={name:"file",action:x.kE,onChange:function(T){if(T.file.status!=="uploading"&&console.log(T.file,T.fileList),T.file.status==="done"){var b;g.ZP.success("".concat(T.file.name," file uploaded successfully")),(b=se.current)===null||b===void 0||b.reload()}else T.file.status==="error"&&g.ZP.error("".concat(T.file.name," file upload failed."))}},de=function(){var n=i()(a()().mark(function T(){var b,J;return a()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(oe){V.next=2;break}return V.abrupt("return");case 2:return V.next=4,(0,x.tg)(oe);case 4:b=V.sent,b.succeeded&&(g.ZP.success("Uploaded!"),(J=se.current)===null||J===void 0||J.reload());case 6:case"end":return V.stop()}},T)}));return function(){return n.apply(this,arguments)}}();return(0,s.jsxs)(U.Y,{open:p.open,onOpenChange:p.onOpenChange,onFinish:p.onFinish,submitter:!1,children:[(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(h.Z.Item,{href:"",children:(0,s.jsx)(L.Z,{})}),(0,s.jsx)(h.Z.Item,{href:"",children:"Home"})]})}),(0,s.jsxs)(M.Z.Group,{compact:!0,className:"mb-4",children:[(0,s.jsx)(M.Z,{style:{width:"calc(100% - 200px)"},onChange:function(T){return ue(T.currentTarget.value)}}),(0,s.jsx)(W.Z,{type:"primary",onClick:de,children:"Quick add"})]}),(0,s.jsx)(E.Rs,{toolBarRender:function(){return[(0,O.createElement)(d.Z,t()(t()({},_e),{},{key:0}),(0,s.jsx)(W.Z,{icon:(0,s.jsx)(j.Z,{}),type:"primary",children:"Upload"}))]},headerTitle:r.formatMessage({id:"menu.fileManager"}),request:x.V6,rowSelection:{},search:{layout:"vertical"},pagination:{pageSize:5},metas:{title:{dataIndex:"name",title:"Name",render:function(T,b){return(0,s.jsx)("a",{onClick:function(){p.onSelect&&(b.url=new URL(b.url,localStorage.getItem("wf_URL")||"").href,p.onSelect(b))},children:T})}},description:{search:!1,render:function(T,b){return(0,s.jsxs)(v.Z,{children:[(0,s.jsx)("span",{children:b.type}),(0,s.jsx)("span",{children:"|"}),(0,s.jsxs)("span",{children:[(b.size/1024).toFixed(2)," KB"]})]})}},actions:{render:function(T,b){return(0,s.jsx)(A.Z,{menu:{items:[{key:1,label:(0,s.jsxs)(v.Z,{onClick:function(){return l.history.push("/files/center/".concat(b.id))},children:[(0,s.jsx)(z.Z,{}),(0,s.jsx)(l.FormattedMessage,{id:"general.preview"})]})},{key:2,label:(0,s.jsx)(o.Z,{title:"Are you sure?",children:(0,s.jsxs)(v.Z,{children:[(0,s.jsx)(P.Z,{}),"Delete"]})}),danger:!0}]},children:(0,s.jsx)(W.Z,{icon:(0,s.jsx)(F.Z,{}),type:"link",size:"small"})})}}},actionRef:se})]})};I.Z=u},61614:function(ee,I,e){e.d(I,{A$:function(){return L},BA:function(){return E},BP:function(){return R},R4:function(){return i},S8:function(){return F},_V:function(){return M},gY:function(){return d},r5:function(){return O},zo:function(){return A}});var B=e(15009),t=e.n(B),$=e(99289),a=e.n($),f=e(90905);function i(u){return C.apply(this,arguments)}function C(){return C=a()(t()().mark(function u(c){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,f.request)("catalog/".concat(c)));case 1:case"end":return r.stop()}},u)})),C.apply(this,arguments)}function R(u){return x.apply(this,arguments)}function x(){return x=a()(t()().mark(function u(c){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,f.request)("catalog/add",{method:"POST",data:c}));case 1:case"end":return r.stop()}},u)})),x.apply(this,arguments)}function L(u){return j.apply(this,arguments)}function j(){return j=a()(t()().mark(function u(c){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,f.request)("catalog/list",{method:"GET",params:c}));case 1:case"end":return r.stop()}},u)})),j.apply(this,arguments)}function z(){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function u(){return _regeneratorRuntime().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",request("catalog/tree"));case 1:case"end":return p.stop()}},u)})),P.apply(this,arguments)}function F(u){return U.apply(this,arguments)}function U(){return U=a()(t()().mark(function u(c){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,f.request)("catalog/delete/".concat(c),{method:"POST"}));case 1:case"end":return r.stop()}},u)})),U.apply(this,arguments)}function E(u){return l.apply(this,arguments)}function l(){return l=a()(t()().mark(function u(c){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,f.request)("catalog/save",{method:"POST",data:c}));case 1:case"end":return r.stop()}},u)})),l.apply(this,arguments)}function g(u){return h.apply(this,arguments)}function h(){return h=_asyncToGenerator(_regeneratorRuntime().mark(function u(c){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/tree-drop",{method:"POST",data:c}));case 1:case"end":return r.stop()}},u)})),h.apply(this,arguments)}function M(){return W.apply(this,arguments)}function W(){return W=a()(t()().mark(function u(){return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,f.request)("catalog/view-count"));case 1:case"end":return p.stop()}},u)})),W.apply(this,arguments)}function d(u){return v.apply(this,arguments)}function v(){return v=a()(t()().mark(function u(c){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,f.request)("catalog/active/".concat(c),{method:"POST"}));case 1:case"end":return r.stop()}},u)})),v.apply(this,arguments)}function A(u){return o.apply(this,arguments)}function o(){return o=a()(t()().mark(function u(c){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,f.request)("catalog/article/save",{method:"POST",data:c}));case 1:case"end":return r.stop()}},u)})),o.apply(this,arguments)}function O(u){return s.apply(this,arguments)}function s(){return s=a()(t()().mark(function u(c){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,f.request)("catalog/update-thumbnail",{method:"POST",data:c}));case 1:case"end":return r.stop()}},u)})),s.apply(this,arguments)}},98364:function(ee,I,e){e.d(I,{CO:function(){return L},Xr:function(){return i},Z:function(){return z},eB:function(){return R},v7:function(){return F}});var B=e(15009),t=e.n(B),$=e(99289),a=e.n($),f=e(90905);function i(E){return C.apply(this,arguments)}function C(){return C=a()(t()().mark(function E(l){return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,f.request)("component/".concat(l)));case 1:case"end":return h.stop()}},E)})),C.apply(this,arguments)}function R(){return(0,f.request)("component/list-all")}function x(E){return request("component/add",{method:"POST",data:E})}function L(){return j.apply(this,arguments)}function j(){return j=a()(t()().mark(function E(){return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,f.request)("component/list"));case 1:case"end":return g.stop()}},E)})),j.apply(this,arguments)}function z(E,l){return P.apply(this,arguments)}function P(){return P=a()(t()().mark(function E(l,g){return t()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.abrupt("return",(0,f.request)("component/list-work/".concat(g),{params:l}));case 1:case"end":return M.stop()}},E)})),P.apply(this,arguments)}function F(E){return U.apply(this,arguments)}function U(){return U=a()(t()().mark(function E(l){return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,f.request)("component/delete/".concat(l),{method:"POST"}));case 1:case"end":return h.stop()}},E)})),U.apply(this,arguments)}},20385:function(ee,I,e){e.d(I,{Ah:function(){return L},Cq:function(){return F},V6:function(){return R},kE:function(){return g},tg:function(){return M},z3:function(){return E}});var B=e(15009),t=e.n(B),$=e(97857),a=e.n($),f=e(99289),i=e.n(f),C=e(90905);function R(d,v){return x.apply(this,arguments)}function x(){return x=i()(t()().mark(function d(v,A){return t()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.abrupt("return",(0,C.request)("fileExplorer/list",a()({method:"GET",params:a()({},v)},A||{})));case 1:case"end":return O.stop()}},d)})),x.apply(this,arguments)}function L(d){return j.apply(this,arguments)}function j(){return j=i()(t()().mark(function d(v){return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,C.request)("fileExplorer/delete-file-content/".concat(v),{method:"POST"}));case 1:case"end":return o.stop()}},d)})),j.apply(this,arguments)}function z(d){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function d(v){return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",request("fileExplorer/delete-file-item",{method:"POST",data:v}));case 1:case"end":return o.stop()}},d)})),P.apply(this,arguments)}function F(d){return U.apply(this,arguments)}function U(){return U=i()(t()().mark(function d(v){return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,C.request)("fileExplorer/".concat(v)));case 1:case"end":return o.stop()}},d)})),U.apply(this,arguments)}function E(d,v){return l.apply(this,arguments)}function l(){return l=i()(t()().mark(function d(v,A){return t()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.abrupt("return",(0,C.request)("fileExplorer/file-items/".concat(A.id)));case 1:case"end":return O.stop()}},d)})),l.apply(this,arguments)}function g(d){return h.apply(this,arguments)}function h(){return h=i()(t()().mark(function d(v){var A;return t()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return A=new FormData,A.append("file",v),O.abrupt("return",(0,C.request)("fileExplorer/upload",{method:"POST",data:A}));case 3:case"end":return O.stop()}},d)})),h.apply(this,arguments)}function M(d){return W.apply(this,arguments)}function W(){return W=i()(t()().mark(function d(v){return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,C.request)("fileexplorer/upload-from-url",{method:"POST",data:{url:v}}));case 1:case"end":return o.stop()}},d)})),W.apply(this,arguments)}},5251:function(ee,I,e){e.d(I,{Er:function(){return a},p6:function(){return f}});var B=e(27484),t=e.n(B);function $(i){return i.trim()}function a(i){return new URL(i||"",localStorage.getItem("wf_URL")||"").href}function f(i){return i?t()(i).format("DD/MM/YYYY hh:mm:ss"):"-"}}}]);
