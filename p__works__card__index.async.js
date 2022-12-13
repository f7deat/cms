"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[587],{90672:function(I,j,e){var E=e(1413),t=e(91),h=e(86074),P=e(62435),g=e(68507),o=["fieldProps","proFieldProps"],i=function(m,v){var r=m.fieldProps,u=m.proFieldProps,f=(0,t.Z)(m,o);return(0,h.jsx)(g.Z,(0,E.Z)({ref:v,valueType:"textarea",fieldProps:r,proFieldProps:u},f))};j.Z=P.forwardRef(i)},5966:function(I,j,e){var E=e(1413),t=e(91),h=e(86074),P=e(68507),g=["fieldProps","proFieldProps"],o=["fieldProps","proFieldProps"],i="text",F=function(u){var f=u.fieldProps,D=u.proFieldProps,p=(0,t.Z)(u,g);return(0,h.jsx)(P.Z,(0,E.Z)({valueType:i,fieldProps:f,filedConfig:{valueType:i},proFieldProps:D},p))},m=function(u){var f=u.fieldProps,D=u.proFieldProps,p=(0,t.Z)(u,o);return(0,h.jsx)(P.Z,(0,E.Z)({valueType:"password",fieldProps:f,proFieldProps:D,filedConfig:{valueType:i}},p))},v=F;v.Password=m,v.displayName="ProFormComponent",j.Z=v},5410:function(I,j,e){e.d(j,{Z:function(){return U}});var E=e(97857),t=e.n(E),h=e(20385),P=e(73403),g=e(1413),o=e(62435),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},F=i,m=e(84089),v=function(C,T){return o.createElement(m.Z,(0,g.Z)((0,g.Z)({},C),{},{ref:T,icon:F}))};v.displayName="UploadOutlined";var r=o.forwardRef(v),u=e(13728),f=e(47375),D=e(30029),p=e(48390),M=e(69677),Z=e(16536),a=e(58492),c=e(78116),d=e(71577),n=e(86074),s=M.Z.Search,K=function(C){var T=(0,o.useRef)(),b={name:"file",action:h.kE,onChange:function(x){if(x.file.status!=="uploading"&&console.log(x.file,x.fileList),x.file.status==="done"){var l;Z.ZP.success("".concat(x.file.name," file uploaded successfully")),(l=T.current)===null||l===void 0||l.reload()}else x.file.status==="error"&&Z.ZP.error("".concat(x.file.name," file upload failed."))}};return(0,n.jsxs)(f.Y,{title:"Select content",open:C.visible,onOpenChange:C.onVisibleChange,onFinish:C.onFinish,children:[(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(a.Z.Item,{href:"",children:(0,n.jsx)(P.Z,{})}),(0,n.jsx)(a.Z.Item,{href:"",children:"Home"})]})}),(0,n.jsxs)(D.Z,{title:"List",extra:(0,n.jsx)(c.Z,t()(t()({},b),{},{children:(0,n.jsx)(d.Z,{icon:(0,n.jsx)(r,{}),type:"primary",children:"Upload"})})),children:[(0,n.jsx)(s,{}),(0,n.jsx)(p.Rs,{request:h.V6,metas:{title:{dataIndex:"name",render:function(x,l){return(0,n.jsx)(d.Z,{type:"link",size:"small",onClick:function(){C.onSelect&&(l.url=new URL(l.url,localStorage.getItem("wf_URL")||"").href,C.onSelect(l))},children:x})}},actions:{render:function(){return(0,n.jsx)(d.Z,{icon:(0,n.jsx)(u.Z,{}),type:"link",size:"small"})}}},actionRef:T})]})]})},U=K},67721:function(I,j,e){e.r(j),e.d(j,{default:function(){return R}});var E=e(15009),t=e.n(E),h=e(99289),P=e.n(h),g=e(5574),o=e.n(g),i=e(48689),F=e(65360),m=e(71577),v=e(84485),r=e(86074),u=function(l){var A=function(){l.onRemove&&l.onRemove(l.src)};return(0,r.jsx)("div",{className:"flex",children:(0,r.jsxs)("div",{style:{padding:".5rem 2rem",backgroundColor:"#efefef",position:"relative",width:200,height:150,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)(F.Z,{title:"Are you sure?",onConfirm:A,children:(0,r.jsx)(m.Z,{icon:(0,r.jsx)(i.Z,{}),size:"small",type:"link",danger:!0,style:{position:"absolute",right:0,top:0}})}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("img",{style:{maxHeight:180,maxWidth:100},src:l.src.url,alt:l.src.name,onClick:l.onClick,className:"cursor-pointer"})}),(0,r.jsx)(v.Z.Text,{className:"truncate",children:l.src.name})]})})},f=u,D=e(5410),p=e(66352),M=e(68015),Z=e(30029),a=e(97269),c=e(68507),d=e(5966),n=e(90672),s=e(90905),K=e(16536),U=e(62986),_=e(71230),C=e(15746),T=e(62435),b=function(){var l=(0,s.useIntl)(),A=(0,s.useParams)(),W=A.id,z=(0,T.useRef)(),$=(0,T.useState)(!1),N=o()($,2),Y=N[0],L=N[1],J=(0,T.useState)(),G=o()(J,2),V=G[0],Q=G[1];(0,T.useEffect)(function(){(0,p.nO)(W).then(function(y){if(y){var O;(O=z.current)===null||O===void 0||O.setFields([{name:"title",value:y.title},{name:"text",value:y.text}])}})},[W]);var X=function(){var y=P()(t()().mark(function O(B){var H;return t()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return B.id=W,B.image=V,S.next=4,(0,p.z_)(B);case 4:H=S.sent,H.succeeded&&K.ZP.success(l.formatMessage({id:"general.saved"}));case 6:case"end":return S.stop()}},O)}));return function(B){return y.apply(this,arguments)}}(),w=function(O){Q(O),L(!1)},k=function(){return V?(0,r.jsx)(f,{src:V,onClick:function(){return L(!0)}}):(0,r.jsx)("div",{className:"image-placeholder",onClick:function(){return L(!0)},children:(0,r.jsx)(U.Z,{})})};return(0,r.jsxs)(M._z,{title:l.formatMessage({id:"menu.component.card"}),children:[(0,r.jsxs)(_.Z,{gutter:16,children:[(0,r.jsx)(C.Z,{span:16,children:(0,r.jsx)(Z.Z,{title:"Content",children:(0,r.jsxs)(a.A,{onFinish:X,formRef:z,children:[(0,r.jsx)(c.Z,{label:"Image",children:k()}),(0,r.jsx)(d.Z,{name:"title",label:"Title"}),(0,r.jsx)(n.Z,{name:"text",label:"Text"})]})})}),(0,r.jsx)(C.Z,{span:8,children:(0,r.jsx)(Z.Z,{title:"Preview",children:(0,r.jsx)(U.Z,{})})})]}),(0,r.jsx)(D.Z,{visible:Y,onVisibleChange:L,onSelect:w})]})},R=b},20385:function(I,j,e){e.d(j,{Ah:function(){return v},Cq:function(){return u},V6:function(){return F},kE:function(){return M},z3:function(){return D}});var E=e(15009),t=e.n(E),h=e(97857),P=e.n(h),g=e(99289),o=e.n(g),i=e(90905);function F(a,c){return m.apply(this,arguments)}function m(){return m=o()(t()().mark(function a(c,d){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,i.request)("fileExplorer/list",P()({method:"GET",params:P()({},c)},d||{})));case 1:case"end":return s.stop()}},a)})),m.apply(this,arguments)}function v(a){return r.apply(this,arguments)}function r(){return r=o()(t()().mark(function a(c){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("fileExplorer/delete-file-content/".concat(c),{method:"POST"}));case 1:case"end":return n.stop()}},a)})),r.apply(this,arguments)}function u(a){return f.apply(this,arguments)}function f(){return f=o()(t()().mark(function a(c){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("fileExplorer/".concat(c)));case 1:case"end":return n.stop()}},a)})),f.apply(this,arguments)}function D(a,c){return p.apply(this,arguments)}function p(){return p=o()(t()().mark(function a(c,d){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,i.request)("fileExplorer/file-items/".concat(d.id)));case 1:case"end":return s.stop()}},a)})),p.apply(this,arguments)}function M(a){return Z.apply(this,arguments)}function Z(){return Z=o()(t()().mark(function a(c){var d;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=new FormData,d.append("file",c),s.abrupt("return",(0,i.request)("fileExplorer/upload",{method:"POST",data:d}));case 3:case"end":return s.stop()}},a)})),Z.apply(this,arguments)}}}]);
