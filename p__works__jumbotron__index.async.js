"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6497],{47389:function(F,D,e){var o=e(1413),r=e(62435),h=e(27363),E=e(91146),d=function(a,m){return r.createElement(E.Z,(0,o.Z)((0,o.Z)({},a),{},{ref:m,icon:h.Z}))};d.displayName="EditOutlined",D.Z=r.forwardRef(d)},88484:function(F,D,e){e.d(D,{Z:function(){return a}});var o=e(1413),r=e(62435),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},E=h,d=e(91146),u=function(f,I){return r.createElement(d.Z,(0,o.Z)((0,o.Z)({},f),{},{ref:I,icon:E}))};u.displayName="UploadOutlined";var a=r.forwardRef(u)},63434:function(F,D,e){var o=e(1413),r=e(91),h=e(22270),E=e(32808),d=e(62435),u=e(90789),a=e(19617),m=e(86074),f=["options","fieldProps","proFieldProps","valueEnum"],I=d.forwardRef(function(p,P){var g=p.options,O=p.fieldProps,W=p.proFieldProps,A=p.valueEnum,T=(0,r.Z)(p,f);return(0,m.jsx)(a.Z,(0,o.Z)({ref:P,valueType:"checkbox",valueEnum:(0,h.h)(A,void 0),fieldProps:(0,o.Z)({options:g},O),lightProps:(0,o.Z)({labelFormatter:function(){return(0,m.jsx)(a.Z,(0,o.Z)({ref:P,valueType:"checkbox",mode:"read",valueEnum:(0,h.h)(A,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:g},O),proFieldProps:W},T))}},T.lightProps),proFieldProps:W},T))}),M=d.forwardRef(function(p,P){var g=p.fieldProps,O=p.children;return(0,m.jsx)(E.Z,(0,o.Z)((0,o.Z)({ref:P},g),{},{children:O}))}),j=(0,u.G)(M,{valuePropName:"checked"}),n=j;n.Group=I,D.Z=n},5966:function(F,D,e){var o=e(1413),r=e(91),h=e(62435),E=e(19617),d=e(86074),u=["fieldProps","proFieldProps"],a=["fieldProps","proFieldProps"],m="text",f=function(n){var p=n.fieldProps,P=n.proFieldProps,g=(0,r.Z)(n,u);return(0,d.jsx)(E.Z,(0,o.Z)({valueType:m,fieldProps:p,filedConfig:{valueType:m},proFieldProps:P},g))},I=function(n){var p=n.fieldProps,P=n.proFieldProps,g=(0,r.Z)(n,a);return(0,d.jsx)(E.Z,(0,o.Z)({valueType:"password",fieldProps:p,proFieldProps:P,filedConfig:{valueType:m}},g))},M=f;M.Password=I,M.displayName="ProFormComponent",D.Z=M},85335:function(F,D,e){var o=e(15009),r=e.n(o),h=e(99289),E=e.n(h),d=e(66352),u=e(28199),a=e(34994),m=e(5966),f=e(63434),I=e(35312),M=e(27790),j=e(62435),n=e(86074),p=function(){var g=(0,I.useParams)(),O=g.id,W=(0,j.useRef)();(0,j.useEffect)(function(){(0,d.Mk)(O).then(function(T){var _;(_=W.current)===null||_===void 0||_.setFields([{name:"name",value:T.name},{name:"active",value:T.active}])})},[O]);var A=function(){var T=E()(r()().mark(function _(s){var i;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.Qb)(s);case 2:i=t.sent,i.succeeded?M.ZP.success("Saved!"):M.ZP.error(i.errors[0].description);case 4:case"end":return t.stop()}},_)}));return function(s){return T.apply(this,arguments)}}();return(0,n.jsx)(u.Z,{title:"Info",children:(0,n.jsxs)(a.A,{formRef:W,onFinish:A,children:[(0,n.jsx)(m.Z,{hidden:!0,name:"id",initialValue:O}),(0,n.jsx)(m.Z,{name:"name",label:"Name"}),(0,n.jsx)(f.Z,{name:"active",label:"Active"})]})})};D.Z=p},99270:function(F,D,e){var o=e(97857),r=e.n(o),h=e(15009),E=e.n(h),d=e(99289),u=e.n(d),a=e(20385),m=e(5251),f=e(88484),I=e(34994),M=e(5966),j=e(93933),n=e(16309),p=e(35312),P=e(27790),g=e(65419),O=e(71577),W=e(55241),A=e(90156),T=e(62435),_=e(86074),s=function(l){var t=(0,p.useIntl)(),R=(0,T.useRef)(),L={name:"file",action:a.kE,accept:"image/png, image/jpeg",onChange:function(c){if(c.file.status!=="uploading"&&console.log(c.file,c.fileList),c.file.status==="done"){var v;P.ZP.success("".concat(c.file.name," file uploaded successfully")),(v=R.current)===null||v===void 0||v.reload()}else c.file.status==="error"&&P.ZP.error("".concat(c.file.name," file upload failed."))}},U=function(){var B=u()(E()().mark(function c(v){var Z,K;return E()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(0,a.tg)(v.url);case 2:Z=C.sent,Z.succeeded&&(P.ZP.success("Uploaded!"),(K=R.current)===null||K===void 0||K.reload());case 4:case"end":return C.stop()}},c)}));return function(v){return B.apply(this,arguments)}}(),x=(0,_.jsx)(I.A,{onFinish:U,children:(0,_.jsx)(M.Z,{name:"url",rules:[{required:!0}],placeholder:"URL"})});return(0,_.jsx)(j.Y,{open:l.open,onOpenChange:l.onOpenChange,children:(0,_.jsx)(n.Rs,{ghost:!0,toolBarRender:function(){return[(0,T.createElement)(g.Z,r()(r()({},L),{},{key:0}),(0,_.jsx)(O.ZP,{icon:(0,_.jsx)(f.Z,{}),type:"primary",children:"Upload"})),(0,_.jsx)(W.Z,{trigger:"click",content:x,title:"Upload Via URL",children:(0,_.jsx)(O.ZP,{icon:(0,_.jsx)(f.Z,{}),onClick:U,children:"Via URL"})},2)]},headerTitle:t.formatMessage({id:"menu.fileManager"}),request:function(c){return(0,a.V6)(r()({},c),[".png",".jpg",".jpeg","image/jpeg"])},search:{layout:"vertical"},pagination:{pageSize:6},grid:{column:3},onItem:function(c){return{onClick:function(){l.onSelect&&l.onSelect(c)}}},metas:{content:{dataIndex:"name",title:"Name",render:function(c,v){return(0,_.jsx)(A.Z,{src:(0,m.Er)(v.url),height:100,preview:!1})}}},actionRef:R})})};D.Z=s},57892:function(F,D,e){e.r(D),e.d(D,{default:function(){return t}});var o=e(15009),r=e.n(o),h=e(99289),E=e.n(h),d=e(5574),u=e.n(d),a=e(99270),m=e(47389),f=e(34994),I=e(90156),M=e(71577),j=e(62435),n=e(86074),p=function(L){var U=f.A.useFormInstance(),x=(0,j.useState)(!1),B=u()(x,2),c=B[0],v=B[1],Z=(0,j.useState)(),K=u()(Z,2),y=K[0],C=K[1],G=function(S){U==null||U.setFieldValue("backgroundImage",S.url),C(S.url),v(!1)};return(0,j.useEffect)(function(){new Promise(function(b){setTimeout(function(){C(U==null?void 0:U.getFieldValue(L.name||"")),b(!0)},500)})},[]),(0,n.jsxs)(f.A.Item,{name:L.name,label:L.label,children:[(0,n.jsx)(I.Z,{src:y,height:150,width:150}),(0,n.jsx)(M.ZP,{icon:(0,n.jsx)(m.Z,{}),onClick:function(){return v(!0)}}),(0,n.jsx)(a.Z,{open:c,onOpenChange:v,onSelect:G})]})},P=p,g=e(85335),O=e(66352),W=e(63386),A=e(28199),T=e(35312),_=e(27790),s=e(71230),i=e(15746),l=function(){var L=(0,T.useParams)(),U=L.id,x=(0,j.useRef)();(0,j.useEffect)(function(){(0,O.jE)(U).then(function(c){var v;(v=x.current)===null||v===void 0||v.setFields([{name:"backgroundImage",value:c.backgroundImage}])})},[U]);var B=function(){var c=E()(r()().mark(function v(Z){var K;return r()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(0,O.iH)(U,Z);case 2:K=C.sent,K.succeeded&&_.ZP.success("Saved!");case 4:case"end":return C.stop()}},v)}));return function(Z){return c.apply(this,arguments)}}();return(0,n.jsx)(W._z,{children:(0,n.jsxs)(s.Z,{gutter:16,children:[(0,n.jsx)(i.Z,{span:16,children:(0,n.jsx)(A.Z,{children:(0,n.jsx)(f.A,{onFinish:B,formRef:x,children:(0,n.jsx)(P,{name:"backgroundImage",label:"Background image"})})})}),(0,n.jsx)(i.Z,{span:8,children:(0,n.jsx)(g.Z,{})})]})})},t=l},20385:function(F,D,e){e.d(D,{Ah:function(){return I},Cq:function(){return p},V6:function(){return m},kE:function(){return W},tg:function(){return T},z3:function(){return g}});var o=e(15009),r=e.n(o),h=e(97857),E=e.n(h),d=e(99289),u=e.n(d),a=e(35312);function m(s,i,l){return f.apply(this,arguments)}function f(){return f=u()(r()().mark(function s(i,l,t){return r()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.abrupt("return",(0,a.request)("fileExplorer/list",E()({method:"GET",params:E()({type:Object.keys(l!=null?l:[]).length>0?l==null?void 0:l.join(","):""},i)},t||{})));case 1:case"end":return L.stop()}},s)})),f.apply(this,arguments)}function I(s){return M.apply(this,arguments)}function M(){return M=u()(r()().mark(function s(i){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,a.request)("fileExplorer/delete-file-content/".concat(i),{method:"POST"}));case 1:case"end":return t.stop()}},s)})),M.apply(this,arguments)}function j(s){return n.apply(this,arguments)}function n(){return n=_asyncToGenerator(_regeneratorRuntime().mark(function s(i){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("fileExplorer/delete-file-item",{method:"POST",data:i}));case 1:case"end":return t.stop()}},s)})),n.apply(this,arguments)}function p(s){return P.apply(this,arguments)}function P(){return P=u()(r()().mark(function s(i){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,a.request)("fileExplorer/".concat(i)));case 1:case"end":return t.stop()}},s)})),P.apply(this,arguments)}function g(s,i){return O.apply(this,arguments)}function O(){return O=u()(r()().mark(function s(i,l){return r()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",(0,a.request)("fileExplorer/file-items/".concat(l.id)));case 1:case"end":return R.stop()}},s)})),O.apply(this,arguments)}function W(s){return A.apply(this,arguments)}function A(){return A=u()(r()().mark(function s(i){var l;return r()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return l=new FormData,l.append("file",i),R.abrupt("return",(0,a.request)("fileExplorer/upload",{method:"POST",data:l}));case 3:case"end":return R.stop()}},s)})),A.apply(this,arguments)}function T(s){return _.apply(this,arguments)}function _(){return _=u()(r()().mark(function s(i){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,a.request)("fileexplorer/upload-from-url",{method:"POST",data:{url:i}}));case 1:case"end":return t.stop()}},s)})),_.apply(this,arguments)}},5251:function(F,D,e){e.d(D,{Er:function(){return E},p6:function(){return d}});var o=e(27484),r=e.n(o);function h(a){return a.trim()}function E(a){return new URL(a||"",localStorage.getItem("wf_URL")||"").href}function d(a){return a?r()(a).format("DD/MM/YYYY hh:mm:ss"):"-"}var u=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(f){setTimeout(function(){f(!0)},m)})}}}]);
