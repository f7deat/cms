"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4592],{82826:function(G,f,n){n.d(f,{Z:function(){return I}});var m=n(1413),l=n(62435),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},M=C,h=n(91146),g=function(L,r){return l.createElement(h.Z,(0,m.Z)((0,m.Z)({},L),{},{ref:r,icon:M}))};g.displayName="ArrowLeftOutlined";var I=l.forwardRef(g)},99200:function(G,f,n){n.d(f,{y:function(){return D}});var m=n(82534),l=n.n(m),C=n(29896),M=n.n(C),h=n(62964),g=n.n(h),I=n(33602),y=n.n(I),L=n(74787),r=n.n(L),E=n(66191),A=n.n(E),u=n(68172),t=n.n(u),F=n(4919),H=n.n(F),R=n(13058),T=n.n(R),B=n(55547),O=n.n(B),i=n(68309),W=n.n(i),P=n(56689),z=n.n(P),c=n(13023),N=n.n(c),J=n(88092),V=n.n(J),Q=n(12444),p=n.n(Q),b=n(72004),X=n.n(b),Y=n(9783),U=n.n(Y),S=n(35312),j=function(){function x(v){p()(this,x),U()(this,"data",void 0),U()(this,"api",void 0),U()(this,"bloggers",void 0),this.data=v.data,this.api=v.api}return X()(x,[{key:"makeSelectHolder",value:function(){var d=this,e=document.createElement("select");return e.classList.add(this.api.styles.input),(0,S.request)("/setting/blogger/blog-list").then(function(o){if(d.bloggers=o,e.id="blogId",o&&o.length>0){var a,s,Z,$="";o.forEach(function(k){$+='<option value="'.concat(k.id,'">').concat(k.name,"</option>")}),e.innerHTML=$,e.value=(a=(s=d.data)===null||s===void 0||(Z=s.blogger)===null||Z===void 0?void 0:Z.blogId)!==null&&a!==void 0?a:""}return e}),e}},{key:"render",value:function(){var d,e,o,a=document.createElement("div");a.classList.add("form-group");var s=document.createElement("input");s.placeholder="Post Id",s.id="postId",s.value=(d=(e=this.data)===null||e===void 0||(o=e.blogger)===null||o===void 0?void 0:o.postId)!==null&&d!==void 0?d:"",s.classList.add(this.api.styles.input);var Z=this.makeSelectHolder();return a.appendChild(Z),a.appendChild(s),a}},{key:"save",value:function(d){var e=d.querySelector("#blogId").value,o=d.querySelector("#postId").value;return{blogger:{blogId:e,postId:o}}}}],[{key:"toolbox",get:function(){return{title:"Blogger",icon:"\u{1F4F0}"}}}]),x}(),K=j,D={embed:l(),table:M(),list:g(),warning:y(),code:r(),linkTool:{class:A(),config:{endpoint:"".concat(localStorage.getItem("wf_URL"),"api/work/block-editor/fetch-url")}},raw:t(),header:H(),quote:T(),marker:O(),checklist:W(),delimiter:z(),inlineCode:N(),simpleImage:V(),blogger:K}},85335:function(G,f,n){var m=n(15009),l=n.n(m),C=n(99289),M=n.n(C),h=n(66352),g=n(28199),I=n(34994),y=n(5966),L=n(63434),r=n(35312),E=n(58301),A=n(62435),u=n(86074),t=function(){var H=(0,r.useParams)(),R=H.id,T=(0,A.useRef)();(0,A.useEffect)(function(){(0,h.Mk)(R).then(function(O){var i;(i=T.current)===null||i===void 0||i.setFields([{name:"name",value:O.name},{name:"active",value:O.active}])})},[R]);var B=function(){var O=M()(l()().mark(function i(W){var P;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,h.Qb)(W);case 2:P=c.sent,P.succeeded?E.ZP.success("Saved!"):E.ZP.error(P.errors[0].description);case 4:case"end":return c.stop()}},i)}));return function(W){return O.apply(this,arguments)}}();return(0,u.jsx)(g.Z,{title:"Info",children:(0,u.jsxs)(I.A,{formRef:T,onFinish:B,children:[(0,u.jsx)(y.Z,{hidden:!0,name:"id",initialValue:R}),(0,u.jsx)(y.Z,{name:"name",label:"Name"}),(0,u.jsx)(L.Z,{name:"active",label:"Active"})]})})};f.Z=t},3646:function(G,f,n){n.r(f),n.d(f,{default:function(){return Y}});var m=n(15009),l=n.n(m),C=n(99289),M=n.n(C),h=n(5574),g=n.n(h),I=n(97857),y=n.n(I),L=n(83820),r=n(62435),E=n(35312),A=n(66352),u=n(99200),t=n(86074),F=function(S){var j=(0,E.useParams)(),K=j.id,D=(0,r.useRef)(),x=function(){(0,A.t1)(K).then(function(d){var e=new L.Z({holder:"editorjs",data:{time:new Date().getTime(),blocks:d},onReady:function(){D.current=e},onChange:function(a){a.saver.save().then(function(s){var Z=y()({id:K},s);S.onChange(Z)})},autofocus:!0,tools:u.y})})};return(0,r.useEffect)(function(){return D.current||x(),function(){D.current.destroy(),D.current=null}},[]),(0,t.jsx)(r.Fragment,{children:(0,t.jsx)("div",{id:"editorjs",children:" "})})},H=F,R=n(85335),T=n(82826),B=n(1413),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},i=O,W=n(91146),P=function(S,j){return r.createElement(W.Z,(0,B.Z)((0,B.Z)({},S),{},{ref:j,icon:i}))};P.displayName="SaveOutlined";var z=r.forwardRef(P),c=n(63386),N=n(28199),J=n(58301),V=n(71577),Q=n(71230),p=n(15746),b=n(93421),X=function(){var S=(0,r.useState)(),j=g()(S,2),K=j[0],D=j[1],x=function(){var v=M()(l()().mark(function d(){var e;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,A.NA)(K);case 2:e=a.sent,e.succeeded&&J.ZP.success("Saved");case 4:case"end":return a.stop()}},d)}));return function(){return v.apply(this,arguments)}}();return(0,t.jsx)(c._z,{extra:(0,t.jsx)(V.ZP,{icon:(0,t.jsx)(T.Z,{}),onClick:function(){return E.history.back()},children:"Back"}),children:(0,t.jsxs)(Q.Z,{gutter:16,children:[(0,t.jsx)(p.Z,{span:18,children:(0,t.jsx)(N.Z,{title:"Start writing",extra:(0,t.jsx)(V.ZP,{type:"primary",onClick:x,children:(0,t.jsxs)(b.Z,{children:[(0,t.jsx)(z,{}),(0,t.jsx)(E.FormattedMessage,{id:"general.save"})]})}),children:(0,t.jsx)(H,{onChange:D})})}),(0,t.jsx)(p.Z,{span:6,children:(0,t.jsx)(R.Z,{})})]})})},Y=X}}]);
