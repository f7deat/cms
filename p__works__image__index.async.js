"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[165],{5966:function(N,g,a){var c=a(1413),u=a(91),h=a(86074),x=a(68507),T=["fieldProps","proFieldProps"],j=["fieldProps","proFieldProps"],i="text",y=function(t){var d=t.fieldProps,m=t.proFieldProps,e=(0,u.Z)(t,T);return(0,h.jsx)(x.Z,(0,c.Z)({valueType:i,fieldProps:d,filedConfig:{valueType:i},proFieldProps:m},e))},C=function(t){var d=t.fieldProps,m=t.proFieldProps,e=(0,u.Z)(t,j);return(0,h.jsx)(x.Z,(0,c.Z)({valueType:"password",fieldProps:d,proFieldProps:m,filedConfig:{valueType:i}},e))},v=y;v.Password=C,v.displayName="ProFormComponent",g.Z=v},19734:function(N,g,a){a.r(g),a.d(g,{default:function(){return Q}});var c=a(15009),u=a.n(c),h=a(99289),x=a.n(h),T=a(5574),j=a.n(T),i=a(66352),y=a(50888),C=a(24969),v=a(68015),U=a(97269),t=a(5966),d=a(1413),m=a(91),e=a(86074),f=a(62435),G=a(68507),K=["fieldProps","min","proFieldProps","max"],J=function(n,P){var R=n.fieldProps,F=n.min,D=n.proFieldProps,Z=n.max,O=(0,m.Z)(n,K);return(0,e.jsx)(G.Z,(0,d.Z)({valueType:"digit",fieldProps:(0,d.Z)({min:F,max:Z},R),ref:P,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:D},O))},L=f.forwardRef(J),z=a(90905),E=a(16536),$=a(71230),I=a(15746),H=a(78116),M=localStorage.getItem("wf_URL"),Y=function(){var n=(0,z.useParams)(),P=n.id,R=(0,f.useState)(!1),F=j()(R,2),D=F[0],Z=F[1],O=(0,f.useState)(),S=j()(O,2),A=S[0],B=S[1],W=(0,f.useRef)(),X=(0,e.jsxs)("div",{children:[D?(0,e.jsx)(y.Z,{}):(0,e.jsx)(C.Z,{}),(0,e.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),w=function(r,l){var o=new FileReader;o.addEventListener("load",function(){return l(o.result)}),o.readAsDataURL(r)},b=function(r){if(r.file.status==="uploading"){Z(!0);return}r.file.status==="done"&&w(r.file.originFileObj,function(l){Z(!1),B(l)})},k=function(r){var l=r.type==="image/jpeg"||r.type==="image/png"||r.type==="image/svg+xml";l||E.ZP.error("You can only upload JPG/PNG file!");var o=r.size/1024/1024<2;return o||E.ZP.error("Image must smaller than 2MB!"),l&&o},q=function(){var s=x()(u()().mark(function r(l){var o;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,i.DB)(l);case 2:o=p.sent,o.succeeded&&E.ZP.success("Saved!");case 4:case"end":return p.stop()}},r)}));return function(l){return s.apply(this,arguments)}}();return(0,f.useEffect)(function(){(0,i.gJ)(P).then(function(s){var r;(r=W.current)===null||r===void 0||r.setFields([{name:"id",value:P},{name:"height",value:s.height},{name:"width",value:s.width},{name:"alt",value:s.alt},{name:"url",value:s.url},{name:"className",value:s.className}]),s.src&&B(s.src)})},[]),(0,e.jsx)(v._z,{title:"Image",children:(0,e.jsxs)($.Z,{gutter:16,children:[(0,e.jsx)(I.Z,{children:(0,e.jsx)(H.Z,{name:"file",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"".concat(M,"api/image/upload/").concat(P),beforeUpload:k,onChange:b,children:A?(0,e.jsx)("img",{src:M+A,alt:"avatar",style:{width:"100%"}}):X})}),(0,e.jsx)(I.Z,{children:(0,e.jsxs)(U.A,{onFinish:q,formRef:W,children:[(0,e.jsx)(t.Z,{name:"id",hidden:!0}),(0,e.jsx)(t.Z,{name:"alt",label:"Alt"}),(0,e.jsx)(t.Z,{name:"url",label:"Url"}),(0,e.jsx)(t.Z,{name:"className",label:"Class Name"}),(0,e.jsx)(L,{label:"Width",name:"width"}),(0,e.jsx)(L,{label:"Height",name:"height"})]})})]})})},Q=Y}}]);
