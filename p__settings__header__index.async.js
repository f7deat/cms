"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1557],{88484:function(H,y,e){e.d(y,{Z:function(){return E}});var v=e(1413),r=e(62435),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},o=S,i=e(84089),h=function(D,U){return r.createElement(i.Z,(0,v.Z)((0,v.Z)({},D),{},{ref:U,icon:o}))};h.displayName="UploadOutlined";var E=r.forwardRef(h)},64317:function(H,y,e){var v=e(1413),r=e(91),S=e(86074),o=e(22270),i=e(62435),h=e(66758),E=e(25338),R=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],D=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],U=i.forwardRef(function(a,K){var g=a.fieldProps,A=a.children,T=a.params,j=a.proFieldProps,c=a.mode,l=a.valueEnum,p=a.request,m=a.showSearch,_=a.options,f=(0,r.Z)(a,R),s=(0,i.useContext)(h.Z);return(0,S.jsx)(E.Z,(0,v.Z)((0,v.Z)({valueEnum:(0,o.h)(l),request:p,params:T,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,v.Z)({options:_,mode:c,showSearch:m,getPopupContainer:s.getPopupContainer},g),ref:K,proFieldProps:j},f),{},{children:A}))}),b=i.forwardRef(function(a,K){var g=a.fieldProps,A=a.children,T=a.params,j=a.proFieldProps,c=a.mode,l=a.valueEnum,p=a.request,m=a.options,_=(0,r.Z)(a,D),f=(0,v.Z)({options:m,mode:c||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},g),s=(0,i.useContext)(h.Z);return(0,S.jsx)(E.Z,(0,v.Z)((0,v.Z)({valueEnum:(0,o.h)(l),request:p,params:T,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,v.Z)({getPopupContainer:s.getPopupContainer},f),ref:K,proFieldProps:j},_),{},{children:A}))}),M=U,C=b,L=M;L.SearchSelect=C,L.displayName="ProFormComponent",y.Z=L},5966:function(H,y,e){var v=e(1413),r=e(91),S=e(86074),o=e(25338),i=["fieldProps","proFieldProps"],h=["fieldProps","proFieldProps"],E="text",R=function(M){var C=M.fieldProps,L=M.proFieldProps,a=(0,r.Z)(M,i);return(0,S.jsx)(o.Z,(0,v.Z)({valueType:E,fieldProps:C,filedConfig:{valueType:E},proFieldProps:L},a))},D=function(M){var C=M.fieldProps,L=M.proFieldProps,a=(0,r.Z)(M,h);return(0,S.jsx)(o.Z,(0,v.Z)({valueType:"password",fieldProps:C,proFieldProps:L,filedConfig:{valueType:E}},a))},U=R;U.Password=D,U.displayName="ProFormComponent",y.Z=U},12873:function(H,y,e){var v=e(97857),r=e.n(v),S=e(15009),o=e.n(S),i=e(99289),h=e.n(i),E=e(5574),R=e.n(E),D=e(20385),U=e(73403),b=e(88484),M=e(99611),C=e(48689),L=e(13728),a=e(99351),K=e(22538),g=e(90905),A=e(27790),T=e(75527),j=e(69677),c=e(71577),l=e(31365),p=e(26713),m=e(13013),_=e(86738),f=e(62435),s=e(86074),V=function(Z){var $=(0,g.useIntl)(),w=(0,f.useRef)(),G=(0,f.useState)(),t=R()(G,2),d=t[0],u=t[1],n={name:"file",action:D.kE,onChange:function(O){if(O.file.status!=="uploading"&&console.log(O.file,O.fileList),O.file.status==="done"){var P;A.ZP.success("".concat(O.file.name," file uploaded successfully")),(P=w.current)===null||P===void 0||P.reload()}else O.file.status==="error"&&A.ZP.error("".concat(O.file.name," file upload failed."))}},N=function(){var F=h()(o()().mark(function O(){var P,I;return o()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:if(d){W.next=2;break}return W.abrupt("return");case 2:return W.next=4,(0,D.tg)(d);case 4:P=W.sent,P.succeeded&&(A.ZP.success("Uploaded!"),(I=w.current)===null||I===void 0||I.reload());case 6:case"end":return W.stop()}},O)}));return function(){return F.apply(this,arguments)}}();return(0,s.jsxs)(a.Y,{open:Z.open,onOpenChange:Z.onOpenChange,onFinish:Z.onFinish,submitter:!1,children:[(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsxs)(T.Z,{children:[(0,s.jsx)(T.Z.Item,{href:"",children:(0,s.jsx)(U.Z,{})}),(0,s.jsx)(T.Z.Item,{href:"",children:"Home"})]})}),(0,s.jsxs)(j.Z.Group,{compact:!0,className:"mb-4",children:[(0,s.jsx)(j.Z,{style:{width:"calc(100% - 200px)"},onChange:function(O){return u(O.currentTarget.value)}}),(0,s.jsx)(c.Z,{type:"primary",onClick:N,children:"Quick add"})]}),(0,s.jsx)(K.Rs,{toolBarRender:function(){return[(0,f.createElement)(l.Z,r()(r()({},n),{},{key:0}),(0,s.jsx)(c.Z,{icon:(0,s.jsx)(b.Z,{}),type:"primary",children:"Upload"}))]},headerTitle:$.formatMessage({id:"menu.fileManager"}),request:function(O){return(0,D.V6)(r()({},O),Z.type)},rowSelection:{},search:{layout:"vertical"},pagination:{pageSize:5},metas:{title:{dataIndex:"name",title:"Name",render:function(O,P){return(0,s.jsx)("a",{onClick:function(){Z.onSelect&&(P.url=new URL(P.url,localStorage.getItem("wf_URL")||"").href,Z.onSelect(P))},children:O})}},description:{search:!1,render:function(O,P){return(0,s.jsxs)(p.Z,{children:[(0,s.jsx)("span",{children:P.type}),(0,s.jsx)("span",{children:"|"}),(0,s.jsxs)("span",{children:[(P.size/1024).toFixed(2)," KB"]})]})}},actions:{render:function(O,P){return(0,s.jsx)(m.Z,{menu:{items:[{key:1,label:(0,s.jsxs)(p.Z,{onClick:function(){return g.history.push("/files/center/".concat(P.id))},children:[(0,s.jsx)(M.Z,{}),(0,s.jsx)(g.FormattedMessage,{id:"general.preview"})]})},{key:2,label:(0,s.jsx)(_.Z,{title:"Are you sure?",children:(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(C.Z,{}),"Delete"]})}),danger:!0}]},children:(0,s.jsx)(c.Z,{icon:(0,s.jsx)(L.Z,{}),type:"link",size:"small"})})}}},actionRef:w})]})};y.Z=V},17302:function(H,y,e){e.r(y);var v=e(15009),r=e.n(v),S=e(99289),o=e.n(S),i=e(5574),h=e.n(i),E=e(12873),R=e(31266),D=e(62884),U=e(30029),b=e(97269),M=e(5966),C=e(64317),L=e(90905),a=e(27790),K=e(71230),g=e(15746),A=e(71577),T=e(78613),j=e(62435),c=e(86074),l=function(){var m=(0,L.useParams)(),_=m.id,f=(0,j.useRef)(),s=(0,j.useState)(),V=h()(s,2),z=V[0],Z=V[1],$=(0,j.useState)(""),w=h()($,2),G=w[0],t=w[1],d=(0,j.useState)(!1),u=h()(d,2),n=u[0],N=u[1];(0,j.useEffect)(function(){(0,R.lX)().then(function(P){Z(P),(0,R.Pg)(_).then(function(I){var B;(B=f.current)===null||B===void 0||B.setFields([{name:"template",value:I.template},{name:"logo",value:I.logo}]),t(I.logo)})})},[]);var F=function(){var P=o()(r()().mark(function I(B){var W;return r()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,(0,R.ad)(B);case 2:W=x.sent,W.succeeded&&a.ZP.success("Saved!");case 4:case"end":return x.stop()}},I)}));return function(B){return P.apply(this,arguments)}}(),O=function(){var P=o()(r()().mark(function I(B){var W,J,x;return r()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return W={id:_,logo:B.url},X.next=3,(0,R.TJ)(W);case 3:J=X.sent,J.succeeded&&(a.ZP.success("Saved!"),N(!1),t(B.url),(x=f.current)===null||x===void 0||x.setFieldValue("logo",B.url));case 5:case"end":return X.stop()}},I)}));return function(B){return P.apply(this,arguments)}}();return(0,c.jsxs)(D._z,{children:[(0,c.jsxs)(K.Z,{gutter:16,children:[(0,c.jsx)(g.Z,{span:18,children:(0,c.jsx)(U.Z,{children:(0,c.jsxs)(b.A,{onFinish:F,formRef:f,children:[(0,c.jsx)(M.Z,{name:"id",initialValue:_,hidden:!0}),(0,c.jsx)(M.Z,{name:"logo",hidden:!0}),(0,c.jsx)(C.Z,{options:z,name:"template"})]})})}),(0,c.jsx)(g.Z,{span:6,children:(0,c.jsx)(U.Z,{extra:(0,c.jsx)(A.Z,{onClick:function(){return N(!0)},children:"Choose"}),children:(0,c.jsx)(T.Z,{src:G,width:250})})})]}),(0,c.jsx)(E.Z,{open:n,onOpenChange:N,onSelect:O})]})};y.default=l},20385:function(H,y,e){e.d(y,{Ah:function(){return U},Cq:function(){return L},V6:function(){return R},kE:function(){return A},tg:function(){return j},z3:function(){return K}});var v=e(15009),r=e.n(v),S=e(97857),o=e.n(S),i=e(99289),h=e.n(i),E=e(90905);function R(l,p,m){return D.apply(this,arguments)}function D(){return D=h()(r()().mark(function l(p,m,_){return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,E.request)("fileExplorer/list",o()({method:"GET",params:o()({type:Object.keys(m!=null?m:[]).length>0?m==null?void 0:m.join(","):""},p)},_||{})));case 1:case"end":return s.stop()}},l)})),D.apply(this,arguments)}function U(l){return b.apply(this,arguments)}function b(){return b=h()(r()().mark(function l(p){return r()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,E.request)("fileExplorer/delete-file-content/".concat(p),{method:"POST"}));case 1:case"end":return _.stop()}},l)})),b.apply(this,arguments)}function M(l){return C.apply(this,arguments)}function C(){return C=_asyncToGenerator(_regeneratorRuntime().mark(function l(p){return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",request("fileExplorer/delete-file-item",{method:"POST",data:p}));case 1:case"end":return _.stop()}},l)})),C.apply(this,arguments)}function L(l){return a.apply(this,arguments)}function a(){return a=h()(r()().mark(function l(p){return r()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,E.request)("fileExplorer/".concat(p)));case 1:case"end":return _.stop()}},l)})),a.apply(this,arguments)}function K(l,p){return g.apply(this,arguments)}function g(){return g=h()(r()().mark(function l(p,m){return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,E.request)("fileExplorer/file-items/".concat(m.id)));case 1:case"end":return f.stop()}},l)})),g.apply(this,arguments)}function A(l){return T.apply(this,arguments)}function T(){return T=h()(r()().mark(function l(p){var m;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return m=new FormData,m.append("file",p),f.abrupt("return",(0,E.request)("fileExplorer/upload",{method:"POST",data:m}));case 3:case"end":return f.stop()}},l)})),T.apply(this,arguments)}function j(l){return c.apply(this,arguments)}function c(){return c=h()(r()().mark(function l(p){return r()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,E.request)("fileexplorer/upload-from-url",{method:"POST",data:{url:p}}));case 1:case"end":return _.stop()}},l)})),c.apply(this,arguments)}},31266:function(H,y,e){e.d(y,{I7:function(){return M},Is:function(){return Z},KU:function(){return h},N7:function(){return f},OT:function(){return U},PX:function(){return L},Pg:function(){return l},TJ:function(){return m},Uo:function(){return R},ad:function(){return j},fW:function(){return V},lX:function(){return A},lp:function(){return K},tr:function(){return w}});var v=e(15009),r=e.n(v),S=e(99289),o=e.n(S),i=e(90905);function h(){return E.apply(this,arguments)}function E(){return E=o()(r()().mark(function t(){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,i.request)("appsetting/list"));case 1:case"end":return u.stop()}},t)})),E.apply(this,arguments)}function R(t){return D.apply(this,arguments)}function D(){return D=o()(r()().mark(function t(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("appsetting/layout/head/save",{method:"POST",data:d}));case 1:case"end":return n.stop()}},t)})),D.apply(this,arguments)}function U(t){return b.apply(this,arguments)}function b(){return b=o()(r()().mark(function t(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("appsetting/telegram/save",{method:"POST",data:d}));case 1:case"end":return n.stop()}},t)})),b.apply(this,arguments)}function M(){return C.apply(this,arguments)}function C(){return C=o()(r()().mark(function t(){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,i.request)("appsetting/telegram/configuration"));case 1:case"end":return u.stop()}},t)})),C.apply(this,arguments)}function L(t){return a.apply(this,arguments)}function a(){return a=o()(r()().mark(function t(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("appsetting/footer/".concat(d)));case 1:case"end":return n.stop()}},t)})),a.apply(this,arguments)}function K(t){return g.apply(this,arguments)}function g(){return g=o()(r()().mark(function t(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("appsetting/footer/save",{method:"POST",data:d}));case 1:case"end":return n.stop()}},t)})),g.apply(this,arguments)}function A(){return T.apply(this,arguments)}function T(){return T=o()(r()().mark(function t(){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,i.request)("appsetting/header/templates"));case 1:case"end":return u.stop()}},t)})),T.apply(this,arguments)}function j(t){return c.apply(this,arguments)}function c(){return c=o()(r()().mark(function t(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("appsetting/header/save",{method:"POST",data:d}));case 1:case"end":return n.stop()}},t)})),c.apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return p=o()(r()().mark(function t(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("appsetting/header/".concat(d)));case 1:case"end":return n.stop()}},t)})),p.apply(this,arguments)}function m(t){return _.apply(this,arguments)}function _(){return _=o()(r()().mark(function t(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("appsetting/header/logo",{method:"POST",data:d}));case 1:case"end":return n.stop()}},t)})),_.apply(this,arguments)}function f(t){return s.apply(this,arguments)}function s(){return s=o()(r()().mark(function t(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("appsetting/facebook/".concat(d)));case 1:case"end":return n.stop()}},t)})),s.apply(this,arguments)}function V(t){return z.apply(this,arguments)}function z(){return z=o()(r()().mark(function t(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("appsetting/facebook/save",{method:"POST",data:d}));case 1:case"end":return n.stop()}},t)})),z.apply(this,arguments)}function Z(){return $.apply(this,arguments)}function $(){return $=o()(r()().mark(function t(){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,i.request)("appsetting/sendgrid"));case 1:case"end":return u.stop()}},t)})),$.apply(this,arguments)}function w(t){return G.apply(this,arguments)}function G(){return G=o()(r()().mark(function t(d){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("appsetting/sendgrid/save",{method:"POST",data:d}));case 1:case"end":return n.stop()}},t)})),G.apply(this,arguments)}}}]);
