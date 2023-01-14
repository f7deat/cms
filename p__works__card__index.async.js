"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8587],{88484:function(b,h,e){e.d(h,{Z:function(){return d}});var v=e(1413),t=e(62435),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},p=O,C=e(84089),_=function(c,E){return t.createElement(C.Z,(0,v.Z)((0,v.Z)({},c),{},{ref:E,icon:p}))};_.displayName="UploadOutlined";var d=t.forwardRef(_)},90672:function(b,h,e){var v=e(1413),t=e(91),O=e(86074),p=e(62435),C=e(15790),_=["fieldProps","proFieldProps"],d=function(c,E){var n=c.fieldProps,f=c.proFieldProps,P=(0,t.Z)(c,_);return(0,O.jsx)(C.Z,(0,v.Z)({ref:E,valueType:"textarea",fieldProps:n,proFieldProps:f},P))};h.Z=p.forwardRef(d)},5966:function(b,h,e){var v=e(1413),t=e(91),O=e(86074),p=e(15790),C=["fieldProps","proFieldProps"],_=["fieldProps","proFieldProps"],d="text",g=function(f){var P=f.fieldProps,T=f.proFieldProps,D=(0,t.Z)(f,C);return(0,O.jsx)(p.Z,(0,v.Z)({valueType:d,fieldProps:P,filedConfig:{valueType:d},proFieldProps:T},D))},c=function(f){var P=f.fieldProps,T=f.proFieldProps,D=(0,t.Z)(f,_);return(0,O.jsx)(p.Z,(0,v.Z)({valueType:"password",fieldProps:P,proFieldProps:T,filedConfig:{valueType:d}},D))},E=g;E.Password=c,E.displayName="ProFormComponent",h.Z=E},12873:function(b,h,e){var v=e(97857),t=e.n(v),O=e(15009),p=e.n(O),C=e(99289),_=e.n(C),d=e(5574),g=e.n(d),c=e(20385),E=e(73403),n=e(88484),f=e(99611),P=e(48689),T=e(13728),D=e(99351),N=e(22538),M=e(90905),A=e(27790),U=e(75527),L=e(69677),R=e(71577),a=e(31365),o=e(26713),m=e(13013),s=e(86738),l=e(62435),r=e(86074),Q=function(W){var j=(0,M.useIntl)(),B=(0,l.useRef)(),F=(0,l.useState)(),z=g()(F,2),V=z[0],$=z[1],Y={name:"file",action:c.kE,onChange:function(u){if(u.file.status!=="uploading"&&console.log(u.file,u.fileList),u.file.status==="done"){var i;A.ZP.success("".concat(u.file.name," file uploaded successfully")),(i=B.current)===null||i===void 0||i.reload()}else u.file.status==="error"&&A.ZP.error("".concat(u.file.name," file upload failed."))}},K=function(){var I=_()(p()().mark(function u(){var i,Z;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(V){y.next=2;break}return y.abrupt("return");case 2:return y.next=4,(0,c.tg)(V);case 4:i=y.sent,i.succeeded&&(A.ZP.success("Uploaded!"),(Z=B.current)===null||Z===void 0||Z.reload());case 6:case"end":return y.stop()}},u)}));return function(){return I.apply(this,arguments)}}();return(0,r.jsxs)(D.Y,{open:W.open,onOpenChange:W.onOpenChange,onFinish:W.onFinish,submitter:!1,children:[(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsxs)(U.Z,{children:[(0,r.jsx)(U.Z.Item,{href:"",children:(0,r.jsx)(E.Z,{})}),(0,r.jsx)(U.Z.Item,{href:"",children:"Home"})]})}),(0,r.jsxs)(L.Z.Group,{compact:!0,className:"mb-4",children:[(0,r.jsx)(L.Z,{style:{width:"calc(100% - 200px)"},onChange:function(u){return $(u.currentTarget.value)}}),(0,r.jsx)(R.Z,{type:"primary",onClick:K,children:"Quick add"})]}),(0,r.jsx)(N.Rs,{toolBarRender:function(){return[(0,l.createElement)(a.Z,t()(t()({},Y),{},{key:0}),(0,r.jsx)(R.Z,{icon:(0,r.jsx)(n.Z,{}),type:"primary",children:"Upload"}))]},headerTitle:j.formatMessage({id:"menu.fileManager"}),request:c.V6,rowSelection:{},search:{layout:"vertical"},pagination:{pageSize:5},metas:{title:{dataIndex:"name",title:"Name",render:function(u,i){return(0,r.jsx)("a",{onClick:function(){W.onSelect&&(i.url=new URL(i.url,localStorage.getItem("wf_URL")||"").href,W.onSelect(i))},children:u})}},description:{search:!1,render:function(u,i){return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("span",{children:i.type}),(0,r.jsx)("span",{children:"|"}),(0,r.jsxs)("span",{children:[(i.size/1024).toFixed(2)," KB"]})]})}},actions:{render:function(u,i){return(0,r.jsx)(m.Z,{menu:{items:[{key:1,label:(0,r.jsxs)(o.Z,{onClick:function(){return M.history.push("/files/center/".concat(i.id))},children:[(0,r.jsx)(f.Z,{}),(0,r.jsx)(M.FormattedMessage,{id:"general.preview"})]})},{key:2,label:(0,r.jsx)(s.Z,{title:"Are you sure?",children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(P.Z,{}),"Delete"]})}),danger:!0}]},children:(0,r.jsx)(R.Z,{icon:(0,r.jsx)(T.Z,{}),type:"link",size:"small"})})}}},actionRef:B})]})};h.Z=Q},67721:function(b,h,e){e.r(h),e.d(h,{default:function(){return J}});var v=e(15009),t=e.n(v),O=e(99289),p=e.n(O),C=e(5574),_=e.n(C),d=e(48689),g=e(86738),c=e(71577),E=e(22850),n=e(86074),f=function(j){var B=function(){j.onRemove&&j.onRemove(j.src)};return(0,n.jsx)("div",{className:"flex",children:(0,n.jsxs)("div",{style:{padding:".5rem 2rem",backgroundColor:"#efefef",position:"relative",width:200,height:150,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:[(0,n.jsx)(g.Z,{title:"Are you sure?",onConfirm:B,children:(0,n.jsx)(c.Z,{icon:(0,n.jsx)(d.Z,{}),size:"small",type:"link",danger:!0,style:{position:"absolute",right:0,top:0}})}),(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("img",{style:{maxHeight:180,maxWidth:100},src:j.src.url,alt:j.src.name,onClick:j.onClick,className:"cursor-pointer"})}),(0,n.jsx)(E.Z.Text,{className:"truncate",children:j.src.name})]})})},P=f,T=e(12873),D=e(66352),N=e(62884),M=e(30029),A=e(97269),U=e(15790),L=e(5966),R=e(90672),a=e(90905),o=e(27790),m=e(32983),s=e(71230),l=e(15746),r=e(62435),Q=function(){var j=(0,a.useIntl)(),B=(0,a.useParams)(),F=B.id,z=(0,r.useRef)(),V=(0,r.useState)(!1),$=_()(V,2),Y=$[0],K=$[1],I=(0,r.useState)(),u=_()(I,2),i=u[0],Z=u[1];(0,r.useEffect)(function(){(0,D.nO)(F).then(function(S){if(S){var x;(x=z.current)===null||x===void 0||x.setFields([{name:"title",value:S.title},{name:"text",value:S.text}]),Z(S.image)}})},[F]);var X=function(){var S=p()(t()().mark(function x(H){var w;return t()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return H.id=F,H.image=i,G.next=4,(0,D.z_)(H);case 4:w=G.sent,w.succeeded&&o.ZP.success(j.formatMessage({id:"general.saved"}));case 6:case"end":return G.stop()}},x)}));return function(H){return S.apply(this,arguments)}}(),y=function(x){Z(x),K(!1)},k=function(){return i?(0,n.jsx)(P,{src:i,onClick:function(){return K(!0)}}):(0,n.jsx)("div",{className:"image-placeholder",onClick:function(){return K(!0)},children:(0,n.jsx)(m.Z,{})})};return(0,n.jsxs)(N._z,{title:j.formatMessage({id:"menu.component.card"}),children:[(0,n.jsxs)(s.Z,{gutter:16,children:[(0,n.jsx)(l.Z,{span:4,children:(0,n.jsx)(M.Z,{title:"Work contents",children:(0,n.jsx)(m.Z,{})})}),(0,n.jsx)(l.Z,{span:12,children:(0,n.jsx)(M.Z,{title:"Content",children:(0,n.jsxs)(A.A,{onFinish:X,formRef:z,children:[(0,n.jsx)(U.Z,{label:"Image",children:k()}),(0,n.jsx)(L.Z,{name:"title",label:"Title"}),(0,n.jsx)(R.Z,{name:"text",label:"Text"})]})})}),(0,n.jsx)(l.Z,{span:8,children:(0,n.jsx)(M.Z,{title:"Preview",children:(0,n.jsx)(m.Z,{})})})]}),(0,n.jsx)(T.Z,{open:Y,onOpenChange:K,onSelect:y})]})},J=Q},20385:function(b,h,e){e.d(h,{Ah:function(){return E},Cq:function(){return T},V6:function(){return g},kE:function(){return A},tg:function(){return L},z3:function(){return N}});var v=e(15009),t=e.n(v),O=e(97857),p=e.n(O),C=e(99289),_=e.n(C),d=e(90905);function g(a,o){return c.apply(this,arguments)}function c(){return c=_()(t()().mark(function a(o,m){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,d.request)("fileExplorer/list",p()({method:"GET",params:p()({},o)},m||{})));case 1:case"end":return l.stop()}},a)})),c.apply(this,arguments)}function E(a){return n.apply(this,arguments)}function n(){return n=_()(t()().mark(function a(o){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,d.request)("fileExplorer/delete-file-content/".concat(o),{method:"POST"}));case 1:case"end":return s.stop()}},a)})),n.apply(this,arguments)}function f(a){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function a(o){return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("fileExplorer/delete-file-item",{method:"POST",data:o}));case 1:case"end":return s.stop()}},a)})),P.apply(this,arguments)}function T(a){return D.apply(this,arguments)}function D(){return D=_()(t()().mark(function a(o){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,d.request)("fileExplorer/".concat(o)));case 1:case"end":return s.stop()}},a)})),D.apply(this,arguments)}function N(a,o){return M.apply(this,arguments)}function M(){return M=_()(t()().mark(function a(o,m){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,d.request)("fileExplorer/file-items/".concat(m.id)));case 1:case"end":return l.stop()}},a)})),M.apply(this,arguments)}function A(a){return U.apply(this,arguments)}function U(){return U=_()(t()().mark(function a(o){var m;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=new FormData,m.append("file",o),l.abrupt("return",(0,d.request)("fileExplorer/upload",{method:"POST",data:m}));case 3:case"end":return l.stop()}},a)})),U.apply(this,arguments)}function L(a){return R.apply(this,arguments)}function R(){return R=_()(t()().mark(function a(o){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,d.request)("fileexplorer/upload-from-url",{method:"POST",data:{url:o}}));case 1:case"end":return s.stop()}},a)})),R.apply(this,arguments)}}}]);
