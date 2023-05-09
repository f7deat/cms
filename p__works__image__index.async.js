"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4165],{19489:function(b,g,e){var C=e(5251),t=e(23430),A=e(30029),D=e(90905),U=e(78613),E=e(32983),l=e(71577),R=e(96074),m=e(27511),c=e(86074),I=function(P){var T,M=["image/jpeg","image/png","image/webp",".svg",".jpg",".png",".jpeg"],j=(0,D.useIntl)(),r=P.file,L=function(){P.onChange&&P.onChange()},O=function(){var u;return M.includes((u=r==null?void 0:r.type)!==null&&u!==void 0?u:"")?(0,c.jsx)("div",{className:"flex justify-center items-center",style:{minHeight:130},children:(0,c.jsx)(U.Z,{src:(0,C.Er)(r==null?void 0:r.url)})}):(0,c.jsx)("div",{onClick:L,children:(0,c.jsx)(E.Z,{})})};return(0,c.jsxs)(A.Z,{title:j.formatMessage({id:"general.preview"}),extra:(0,c.jsx)(l.Z,{type:"dashed",icon:(0,c.jsx)(t.Z,{}),onClick:function(){return window.location.href=(0,C.Er)(r==null?void 0:r.url)},children:"Download"}),children:[O(),(0,c.jsx)(R.Z,{}),(0,c.jsxs)(m.Z,{title:"File info",column:1,children:[(0,c.jsx)(m.Z.Item,{label:"Name",children:r==null?void 0:r.name}),(0,c.jsxs)(m.Z.Item,{label:"Size",children:[(((T=r==null?void 0:r.size)!==null&&T!==void 0?T:0)/1024).toFixed(2)," KB"]}),(0,c.jsx)(m.Z.Item,{label:"Type",children:r==null?void 0:r.type})]})]})};g.Z=I},99270:function(b,g,e){var C=e(97857),t=e.n(C),A=e(15009),D=e.n(A),U=e(99289),E=e.n(U),l=e(20385),R=e(5251),m=e(88484),c=e(97269),I=e(5966),Z=e(99351),P=e(22538),T=e(90905),M=e(27790),j=e(31365),r=e(71577),L=e(55241),O=e(78613),p=e(62435),u=e(86074),s=function(a){var _=(0,T.useIntl)(),i=(0,p.useRef)(),n={name:"file",action:l.kE,accept:"image/png, image/jpeg",onChange:function(d){if(d.file.status!=="uploading"&&console.log(d.file,d.fileList),d.file.status==="done"){var v;M.ZP.success("".concat(d.file.name," file uploaded successfully")),(v=i.current)===null||v===void 0||v.reload()}else d.file.status==="error"&&M.ZP.error("".concat(d.file.name," file upload failed."))}},F=function(){var B=E()(D()().mark(function d(v){var $,S;return D()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,(0,l.tg)(v.url);case 2:$=W.sent,$.succeeded&&(M.ZP.success("Uploaded!"),(S=i.current)===null||S===void 0||S.reload());case 4:case"end":return W.stop()}},d)}));return function(v){return B.apply(this,arguments)}}(),V=(0,u.jsx)(c.A,{onFinish:F,children:(0,u.jsx)(I.Z,{name:"url",rules:[{required:!0}],placeholder:"URL"})});return(0,u.jsx)(Z.Y,{open:a.open,onOpenChange:a.onOpenChange,children:(0,u.jsx)(P.Rs,{ghost:!0,toolBarRender:function(){return[(0,p.createElement)(j.Z,t()(t()({},n),{},{key:0}),(0,u.jsx)(r.Z,{icon:(0,u.jsx)(m.Z,{}),type:"primary",children:"Upload"})),(0,u.jsx)(L.Z,{trigger:"click",content:V,title:"Upload Via URL",children:(0,u.jsx)(r.Z,{icon:(0,u.jsx)(m.Z,{}),onClick:F,children:"Via URL"})},2)]},headerTitle:_.formatMessage({id:"menu.fileManager"}),request:function(d){return(0,l.V6)(t()({},d),[".png",".jpg",".jpeg","image/jpeg"])},search:{layout:"vertical"},pagination:{pageSize:6},grid:{column:3},onItem:function(d){return{onClick:function(){!a.onSelect||a.onSelect(d)}}},metas:{content:{dataIndex:"name",title:"Name",render:function(d,v){return(0,u.jsx)(O.Z,{src:(0,R.Er)(v.url),height:100,preview:!1})}}},actionRef:i})})};g.Z=s},28301:function(b,g,e){e.r(g);var C=e(15009),t=e.n(C),A=e(99289),D=e.n(A),U=e(5574),E=e.n(U),l=e(19489),R=e(99270),m=e(66352),c=e(48689),I=e(82826),Z=e(13728),P=e(62884),T=e(30029),M=e(97269),j=e(5966),r=e(90672),L=e(31199),O=e(90905),p=e(27790),u=e(26713),s=e(86738),o=e(71577),a=e(71230),_=e(15746),i=e(62435),n=e(86074),F=function(){var B=(0,O.useParams)(),d=B.id,v=(0,O.useIntl)(),$=(0,i.useState)(),S=E()($,2),N=S[0],W=S[1],J=(0,i.useState)(!1),Y=E()(J,2),Q=Y[0],z=Y[1],H=(0,i.useRef)(),X=function(){var f=D()(t()().mark(function h(K){var G;return t()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return K.file=N,y.next=3,(0,m.DB)(K);case 3:G=y.sent,G.succeeded?p.ZP.success("Saved!"):p.ZP.error(G.errors[0].description);case 5:case"end":return y.stop()}},h)}));return function(K){return f.apply(this,arguments)}}();(0,i.useEffect)(function(){(0,m.gJ)(d).then(function(f){var h;W(f.file),(h=H.current)===null||h===void 0||h.setFields([{name:"height",value:f.height},{name:"width",value:f.width},{name:"alt",value:f.alt},{name:"description",value:f.description},{name:"className",value:f.className},{name:"wrapper",value:f.wrapper}])})},[]);var w=function(){var f=D()(t()().mark(function h(){var K;return t()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,(0,m.Js)(d);case 2:K=x.sent,K.succeeded?(p.ZP.success(v.formatMessage({id:"general.deleted"})),O.history.back()):p.ZP.error(K.errors[0].description);case 4:case"end":return x.stop()}},h)}));return function(){return f.apply(this,arguments)}}(),k=(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(s.Z,{title:"Are you sure?",onConfirm:w,children:(0,n.jsx)(o.Z,{type:"primary",danger:!0,icon:(0,n.jsx)(c.Z,{}),children:"Delete"})}),(0,n.jsx)(o.Z,{icon:(0,n.jsx)(I.Z,{}),onClick:function(){return O.history.back()},children:"Back"}),(0,n.jsx)(o.Z,{icon:(0,n.jsx)(Z.Z,{})})]}),q=function(h){W(h),z(!1)};return(0,n.jsxs)(P._z,{title:"Image",extra:k,children:[(0,n.jsxs)(a.Z,{gutter:16,children:[(0,n.jsx)(_.Z,{span:6,children:(0,n.jsx)(l.Z,{file:N,onChange:function(){return z(!0)}})}),(0,n.jsx)(_.Z,{span:18,children:(0,n.jsx)(T.Z,{title:v.formatMessage({id:"menu.settings"}),children:(0,n.jsxs)(M.A,{onFinish:X,formRef:H,children:[(0,n.jsx)(j.Z,{name:"id",hidden:!0,initialValue:d}),(0,n.jsx)(j.Z,{name:"alt",label:"Alt"}),(0,n.jsx)(r.Z,{name:"description",label:"Description"}),(0,n.jsx)(j.Z,{name:"className",label:"Class Name"}),(0,n.jsx)(L.Z,{label:"Width",name:"width"}),(0,n.jsx)(L.Z,{label:"Height",name:"height"}),(0,n.jsx)(j.Z,{label:"Wrapper",name:"wrapper"})]})})})]}),(0,n.jsx)(R.Z,{open:Q,onOpenChange:z,onSelect:q})]})};g.default=F},20385:function(b,g,e){e.d(g,{Ah:function(){return c},Cq:function(){return T},V6:function(){return R},kE:function(){return L},tg:function(){return p},z3:function(){return j}});var C=e(15009),t=e.n(C),A=e(97857),D=e.n(A),U=e(99289),E=e.n(U),l=e(90905);function R(s,o,a){return m.apply(this,arguments)}function m(){return m=E()(t()().mark(function s(o,a,_){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("fileExplorer/list",D()({method:"GET",params:D()({type:Object.keys(a!=null?a:[]).length>0?a==null?void 0:a.join(","):""},o)},_||{})));case 1:case"end":return n.stop()}},s)})),m.apply(this,arguments)}function c(s){return I.apply(this,arguments)}function I(){return I=E()(t()().mark(function s(o){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,l.request)("fileExplorer/delete-file-content/".concat(o),{method:"POST"}));case 1:case"end":return _.stop()}},s)})),I.apply(this,arguments)}function Z(s){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function s(o){return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",request("fileExplorer/delete-file-item",{method:"POST",data:o}));case 1:case"end":return _.stop()}},s)})),P.apply(this,arguments)}function T(s){return M.apply(this,arguments)}function M(){return M=E()(t()().mark(function s(o){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,l.request)("fileExplorer/".concat(o)));case 1:case"end":return _.stop()}},s)})),M.apply(this,arguments)}function j(s,o){return r.apply(this,arguments)}function r(){return r=E()(t()().mark(function s(o,a){return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,l.request)("fileExplorer/file-items/".concat(a.id)));case 1:case"end":return i.stop()}},s)})),r.apply(this,arguments)}function L(s){return O.apply(this,arguments)}function O(){return O=E()(t()().mark(function s(o){var a;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=new FormData,a.append("file",o),i.abrupt("return",(0,l.request)("fileExplorer/upload",{method:"POST",data:a}));case 3:case"end":return i.stop()}},s)})),O.apply(this,arguments)}function p(s){return u.apply(this,arguments)}function u(){return u=E()(t()().mark(function s(o){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,l.request)("fileexplorer/upload-from-url",{method:"POST",data:{url:o}}));case 1:case"end":return _.stop()}},s)})),u.apply(this,arguments)}},5251:function(b,g,e){e.d(g,{Er:function(){return D},p6:function(){return U}});var C=e(27484),t=e.n(C);function A(l){return l.trim()}function D(l){return new URL(l||"",localStorage.getItem("wf_URL")||"").href}function U(l){return l?t()(l).format("DD/MM/YYYY hh:mm:ss"):"-"}var E=function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(m){setTimeout(function(){m(!0)},R)})}}}]);
