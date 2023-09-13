"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7504],{82826:function(y,o,n){n.d(o,{Z:function(){return l}});var d=n(1413),s=n(62435),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},E=m,a=n(91146),r=function(P,f){return s.createElement(a.Z,(0,d.Z)((0,d.Z)({},P),{},{ref:f,icon:E}))};r.displayName="ArrowLeftOutlined";var l=s.forwardRef(r)},75735:function(y,o,n){var d=n(66352),s=n(34994),m=n(83820),E=n(35312),a=n(62435),r=n(99200),l=n(86074),c=function(){var f=(0,E.useParams)(),O=f.id,i=s.A.useFormInstance(),e=(0,a.useRef)(),D=function(){(0,d.Tu)(O).then(function(g){var t=new m.Z({holder:"editorjs",data:g,onReady:function(){e.current=t},onChange:function(C){C.saver.save().then(function(_){i==null||i.setFieldValue("blockEditor",_)})},autofocus:!0,tools:r.y})})};return(0,a.useEffect)(function(){return e.current||D(),function(){e.current.destroy(),e.current=null}},[]),(0,l.jsx)(s.A.Item,{name:"blockEditor",children:(0,l.jsx)("div",{id:"editorjs",children:" "})})};o.Z=c},99200:function(y,o,n){n.d(o,{y:function(){return Y}});var d=n(82534),s=n.n(d),m=n(29896),E=n.n(m),a=n(62964),r=n.n(a),l=n(33602),c=n.n(l),P=n(74787),f=n.n(P),O=n(66191),i=n.n(O),e=n(68172),D=n.n(e),A=n(4919),g=n.n(A),t=n(13058),M=n.n(t),C=n(55547),_=n.n(C),u=n(68309),L=n.n(u),h=n(56689),j=n.n(h),v=n(13023),b=n.n(v),S=n(88092),I=n.n(S),H=n(12444),z=n.n(H),N=n(72004),V=n.n(N),J=n(9783),G=n.n(J),Q=function(){function p(B){z()(this,p),G()(this,"data",void 0),G()(this,"api",void 0),this.data=B.data,this.api=B.api}return V()(p,[{key:"render",value:function(){var R,T,W,Z,$,F,x=document.createElement("div");x.classList.add("form-group");var U=document.createElement("input");U.placeholder="Blog Id",U.id="blogId",U.value=(R=(T=this.data)===null||T===void 0||(W=T.blogger)===null||W===void 0?void 0:W.blogId)!==null&&R!==void 0?R:"",U.classList.add(this.api.styles.input);var K=document.createElement("input");return K.placeholder="Post Id",K.id="postId",K.value=(Z=($=this.data)===null||$===void 0||(F=$.blogger)===null||F===void 0?void 0:F.postId)!==null&&Z!==void 0?Z:"",K.classList.add(this.api.styles.input),x.appendChild(U),x.appendChild(K),x}},{key:"save",value:function(R){var T=R.querySelector("#blogId").value,W=R.querySelector("#postId").value;return{blogger:{blogId:T,postId:W}}}}],[{key:"toolbox",get:function(){return{title:"Blogger",icon:"\u{1F4F0}"}}}]),p}(),X=Q,Y={embed:s(),table:E(),list:r(),warning:c(),code:f(),linkTool:{class:i(),config:{endpoint:"".concat(localStorage.getItem("wf_URL"),"api/work/block-editor/fetch-url")}},raw:D(),header:g(),quote:M(),marker:_(),checklist:L(),delimiter:j(),inlineCode:b(),simpleImage:I(),blogger:X}},85335:function(y,o,n){var d=n(15009),s=n.n(d),m=n(99289),E=n.n(m),a=n(66352),r=n(28199),l=n(34994),c=n(5966),P=n(63434),f=n(35312),O=n(58301),i=n(62435),e=n(86074),D=function(){var g=(0,f.useParams)(),t=g.id,M=(0,i.useRef)();(0,i.useEffect)(function(){(0,a.Mk)(t).then(function(_){var u;(u=M.current)===null||u===void 0||u.setFields([{name:"name",value:_.name},{name:"active",value:_.active}])})},[t]);var C=function(){var _=E()(s()().mark(function u(L){var h;return s()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,a.Qb)(L);case 2:h=v.sent,h.succeeded?O.ZP.success("Saved!"):O.ZP.error(h.errors[0].description);case 4:case"end":return v.stop()}},u)}));return function(L){return _.apply(this,arguments)}}();return(0,e.jsx)(r.Z,{title:"Info",children:(0,e.jsxs)(l.A,{formRef:M,onFinish:C,children:[(0,e.jsx)(c.Z,{hidden:!0,name:"id",initialValue:t}),(0,e.jsx)(c.Z,{name:"name",label:"Name"}),(0,e.jsx)(P.Z,{name:"active",label:"Active"})]})})};o.Z=D},10999:function(y,o,n){n.r(o);var d=n(15009),s=n.n(d),m=n(99289),E=n.n(m),a=n(35312),r=n(75735),l=n(66352),c=n(63386),P=n(28199),f=n(34994),O=n(58301),i=n(71577),e=n(71230),D=n(15746),A=n(85335),g=n(82826),t=n(86074),M=function(){var _=(0,a.useParams)(),u=_.id,L=function(){var h=E()(s()().mark(function j(v){var b;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,(0,l.iH)(u,v.blockEditor);case 2:b=I.sent,b.succeeded&&O.ZP.success("Saved");case 4:case"end":return I.stop()}},j)}));return function(v){return h.apply(this,arguments)}}();return(0,t.jsx)(c._z,{extra:(0,t.jsx)(i.ZP,{onClick:function(){return a.history.back()},icon:(0,t.jsx)(g.Z,{})}),children:(0,t.jsxs)(e.Z,{gutter:16,children:[(0,t.jsx)(D.Z,{md:16,children:(0,t.jsx)(P.Z,{children:(0,t.jsx)(f.A,{onFinish:L,children:(0,t.jsx)(r.Z,{})})})}),(0,t.jsx)(D.Z,{md:8,children:(0,t.jsx)(A.Z,{})})]})})};o.default=M}}]);
