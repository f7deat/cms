"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3578],{99200:function(N,c,n){n.d(c,{y:function(){return k}});var C=n(82534),v=n.n(C),M=n(29896),R=n.n(M),m=n(62964),h=n.n(m),f=n(33602),g=n.n(f),E=n(74787),y=n.n(E),t=n(66191),P=n.n(t),e=n(68172),B=n.n(e),K=n(4919),T=n.n(K),l=n(13058),I=n.n(l),A=n(55547),r=n.n(A),d=n(68309),i=n.n(d),s=n(56689),u=n.n(s),a=n(13023),D=n.n(a),L=n(88092),j=n.n(L),b=n(12444),o=n.n(b),S=n(72004),p=n.n(S),z=n(9783),Q=n.n(z),X=function(){function G(x){o()(this,G),Q()(this,"data",void 0),Q()(this,"api",void 0),this.data=x.data,this.api=x.api}return p()(G,[{key:"render",value:function(){var O,W,$,V,H,J,F=document.createElement("div");F.classList.add("form-group");var U=document.createElement("input");U.placeholder="Blog Id",U.id="blogId",U.value=(O=(W=this.data)===null||W===void 0||($=W.blogger)===null||$===void 0?void 0:$.blogId)!==null&&O!==void 0?O:"",U.classList.add(this.api.styles.input);var Z=document.createElement("input");return Z.placeholder="Post Id",Z.id="postId",Z.value=(V=(H=this.data)===null||H===void 0||(J=H.blogger)===null||J===void 0?void 0:J.postId)!==null&&V!==void 0?V:"",Z.classList.add(this.api.styles.input),F.appendChild(U),F.appendChild(Z),F}},{key:"save",value:function(O){var W=O.querySelector("#blogId").value,$=O.querySelector("#postId").value;return{blogger:{blogId:W,postId:$}}}}],[{key:"toolbox",get:function(){return{title:"Blogger",icon:"\u{1F4F0}"}}}]),G}(),Y=X,k={embed:v(),table:R(),list:h(),warning:g(),code:y(),linkTool:{class:P(),config:{endpoint:"".concat(localStorage.getItem("wf_URL"),"api/work/block-editor/fetch-url")}},raw:B(),header:T(),quote:I(),marker:r(),checklist:i(),delimiter:u(),inlineCode:D(),simpleImage:j(),blogger:Y}},85335:function(N,c,n){var C=n(15009),v=n.n(C),M=n(99289),R=n.n(M),m=n(66352),h=n(28199),f=n(34994),g=n(5966),E=n(63434),y=n(35312),t=n(27790),P=n(62435),e=n(86074),B=function(){var T=(0,y.useParams)(),l=T.id,I=(0,P.useRef)();(0,P.useEffect)(function(){(0,m.Mk)(l).then(function(r){var d;(d=I.current)===null||d===void 0||d.setFields([{name:"name",value:r.name},{name:"active",value:r.active}])})},[l]);var A=function(){var r=R()(v()().mark(function d(i){var s;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,m.Qb)(i);case 2:s=a.sent,s.succeeded?t.ZP.success("Saved!"):t.ZP.error(s.errors[0].description);case 4:case"end":return a.stop()}},d)}));return function(i){return r.apply(this,arguments)}}();return(0,e.jsx)(h.Z,{title:"Info",children:(0,e.jsxs)(f.A,{formRef:I,onFinish:A,children:[(0,e.jsx)(g.Z,{hidden:!0,name:"id",initialValue:l}),(0,e.jsx)(g.Z,{name:"name",label:"Name"}),(0,e.jsx)(E.Z,{name:"active",label:"Active"})]})})};c.Z=B},46980:function(N,c,n){n.r(c),n.d(c,{default:function(){return r}});var C=n(15009),v=n.n(C),M=n(99289),R=n.n(M),m=n(35312),h=n(66352),f=n(34994),g=n(83820),E=n(62435),y=n(99200),t=n(86074),P=function(){var i=(0,m.useParams)(),s=i.id,u=f.A.useFormInstance(),a=(0,E.useRef)(),D=function(){(0,h.Tu)(s).then(function(j){var b=new g.Z({holder:"editorjs",data:j,onReady:function(){a.current=b},onChange:function(S){S.saver.save().then(function(p){u==null||u.setFieldValue("blockEditor",p)})},autofocus:!0,tools:y.y})})};return(0,E.useEffect)(function(){return a.current||D(),function(){a.current.destroy(),a.current=null}},[]),(0,t.jsx)(f.A.Item,{name:"blockEditor",children:(0,t.jsx)("div",{id:"editorjs",children:" "})})},e=P,B=n(28199),K=n(27790),T=n(71230),l=n(15746),I=n(85335),A=function(){var i=(0,m.useParams)(),s=i.id,u=function(){var a=R()(v()().mark(function D(L){var j;return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,h.iH)(s,L.blockEditor);case 2:j=o.sent,j.succeeded&&K.ZP.success("Saved");case 4:case"end":return o.stop()}},D)}));return function(L){return a.apply(this,arguments)}}();return(0,t.jsxs)(T.Z,{gutter:16,children:[(0,t.jsx)(l.Z,{md:16,children:(0,t.jsx)(B.Z,{children:(0,t.jsx)(f.A,{onFinish:u,children:(0,t.jsx)(e,{})})})}),(0,t.jsx)(l.Z,{md:8,children:(0,t.jsx)(I.Z,{})})]})},r=A}}]);
