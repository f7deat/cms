"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1557],{88484:function(F,I,e){e.d(I,{Z:function(){return m}});var f=e(1413),n=e(62435),U={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},l=U,c=e(84089),p=function(h,C){return n.createElement(c.Z,(0,f.Z)((0,f.Z)({},h),{},{ref:C,icon:l}))};p.displayName="UploadOutlined";var m=n.forwardRef(p)},64317:function(F,I,e){var f=e(1413),n=e(91),U=e(86074),l=e(22270),c=e(62435),p=e(66758),m=e(15790),j=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],h=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],C=c.forwardRef(function(s,y){var v=s.fieldProps,A=s.children,g=s.params,T=s.proFieldProps,o=s.mode,u=s.valueEnum,i=s.request,P=s.showSearch,_=s.options,r=(0,n.Z)(s,j),t=(0,c.useContext)(p.Z);return(0,U.jsx)(m.Z,(0,f.Z)((0,f.Z)({valueEnum:(0,l.h)(u),request:i,params:g,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,f.Z)({options:_,mode:o,showSearch:P,getPopupContainer:t.getPopupContainer},v),ref:y,proFieldProps:T},r),{},{children:A}))}),S=c.forwardRef(function(s,y){var v=s.fieldProps,A=s.children,g=s.params,T=s.proFieldProps,o=s.mode,u=s.valueEnum,i=s.request,P=s.options,_=(0,n.Z)(s,h),r=(0,f.Z)({options:P,mode:o||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},v),t=(0,c.useContext)(p.Z);return(0,U.jsx)(m.Z,(0,f.Z)((0,f.Z)({valueEnum:(0,l.h)(u),request:i,params:g,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,f.Z)({getPopupContainer:t.getPopupContainer},r),ref:y,proFieldProps:T},_),{},{children:A}))}),D=C,M=S,R=D;R.SearchSelect=M,R.displayName="ProFormComponent",I.Z=R},5966:function(F,I,e){var f=e(1413),n=e(91),U=e(86074),l=e(15790),c=["fieldProps","proFieldProps"],p=["fieldProps","proFieldProps"],m="text",j=function(D){var M=D.fieldProps,R=D.proFieldProps,s=(0,n.Z)(D,c);return(0,U.jsx)(l.Z,(0,f.Z)({valueType:m,fieldProps:M,filedConfig:{valueType:m},proFieldProps:R},s))},h=function(D){var M=D.fieldProps,R=D.proFieldProps,s=(0,n.Z)(D,p);return(0,U.jsx)(l.Z,(0,f.Z)({valueType:"password",fieldProps:M,proFieldProps:R,filedConfig:{valueType:m}},s))},C=j;C.Password=h,C.displayName="ProFormComponent",I.Z=C},12873:function(F,I,e){var f=e(97857),n=e.n(f),U=e(15009),l=e.n(U),c=e(99289),p=e.n(c),m=e(5574),j=e.n(m),h=e(20385),C=e(73403),S=e(88484),D=e(99611),M=e(48689),R=e(13728),s=e(99351),y=e(22538),v=e(90905),A=e(27790),g=e(75527),T=e(69677),o=e(71577),u=e(31365),i=e(26713),P=e(13013),_=e(86738),r=e(62435),t=e(86074),d=function(Z){var z=(0,v.useIntl)(),x=(0,r.useRef)(),N=(0,r.useState)(),$=j()(N,2),G=$[0],V=$[1],X={name:"file",action:h.kE,onChange:function(O){if(O.file.status!=="uploading"&&console.log(O.file,O.fileList),O.file.status==="done"){var E;A.ZP.success("".concat(O.file.name," file uploaded successfully")),(E=x.current)===null||E===void 0||E.reload()}else O.file.status==="error"&&A.ZP.error("".concat(O.file.name," file upload failed."))}},w=function(){var B=p()(l()().mark(function O(){var E,L;return l()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(G){b.next=2;break}return b.abrupt("return");case 2:return b.next=4,(0,h.tg)(G);case 4:E=b.sent,E.succeeded&&(A.ZP.success("Uploaded!"),(L=x.current)===null||L===void 0||L.reload());case 6:case"end":return b.stop()}},O)}));return function(){return B.apply(this,arguments)}}();return(0,t.jsxs)(s.Y,{open:Z.open,onOpenChange:Z.onOpenChange,onFinish:Z.onFinish,submitter:!1,children:[(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsxs)(g.Z,{children:[(0,t.jsx)(g.Z.Item,{href:"",children:(0,t.jsx)(C.Z,{})}),(0,t.jsx)(g.Z.Item,{href:"",children:"Home"})]})}),(0,t.jsxs)(T.Z.Group,{compact:!0,className:"mb-4",children:[(0,t.jsx)(T.Z,{style:{width:"calc(100% - 200px)"},onChange:function(O){return V(O.currentTarget.value)}}),(0,t.jsx)(o.Z,{type:"primary",onClick:w,children:"Quick add"})]}),(0,t.jsx)(y.Rs,{toolBarRender:function(){return[(0,r.createElement)(u.Z,n()(n()({},X),{},{key:0}),(0,t.jsx)(o.Z,{icon:(0,t.jsx)(S.Z,{}),type:"primary",children:"Upload"}))]},headerTitle:z.formatMessage({id:"menu.fileManager"}),request:h.V6,rowSelection:{},search:{layout:"vertical"},pagination:{pageSize:5},metas:{title:{dataIndex:"name",title:"Name",render:function(O,E){return(0,t.jsx)("a",{onClick:function(){Z.onSelect&&(E.url=new URL(E.url,localStorage.getItem("wf_URL")||"").href,Z.onSelect(E))},children:O})}},description:{search:!1,render:function(O,E){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("span",{children:E.type}),(0,t.jsx)("span",{children:"|"}),(0,t.jsxs)("span",{children:[(E.size/1024).toFixed(2)," KB"]})]})}},actions:{render:function(O,E){return(0,t.jsx)(P.Z,{menu:{items:[{key:1,label:(0,t.jsxs)(i.Z,{onClick:function(){return v.history.push("/files/center/".concat(E.id))},children:[(0,t.jsx)(D.Z,{}),(0,t.jsx)(v.FormattedMessage,{id:"general.preview"})]})},{key:2,label:(0,t.jsx)(_.Z,{title:"Are you sure?",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(M.Z,{}),"Delete"]})}),danger:!0}]},children:(0,t.jsx)(o.Z,{icon:(0,t.jsx)(R.Z,{}),type:"link",size:"small"})})}}},actionRef:x})]})};I.Z=d},17302:function(F,I,e){e.r(I);var f=e(15009),n=e.n(f),U=e(99289),l=e.n(U),c=e(5574),p=e.n(c),m=e(12873),j=e(31266),h=e(62884),C=e(30029),S=e(97269),D=e(5966),M=e(64317),R=e(90905),s=e(27790),y=e(71230),v=e(15746),A=e(71577),g=e(78613),T=e(62435),o=e(86074),u=function(){var P=(0,R.useParams)(),_=P.id,r=(0,T.useRef)(),t=(0,T.useState)(),d=p()(t,2),a=d[0],Z=d[1],z=(0,T.useState)(""),x=p()(z,2),N=x[0],$=x[1],G=(0,T.useState)(!1),V=p()(G,2),X=V[0],w=V[1];(0,T.useEffect)(function(){(0,j.lX)().then(function(E){Z(E),(0,j.Pg)(_).then(function(L){var W;(W=r.current)===null||W===void 0||W.setFields([{name:"template",value:L.template},{name:"logo",value:L.logo}]),$(L.logo)})})},[]);var B=function(){var E=l()(n()().mark(function L(W){var b;return n()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,(0,j.ad)(W);case 2:b=K.sent,b.succeeded&&s.ZP.success("Saved!");case 4:case"end":return K.stop()}},L)}));return function(W){return E.apply(this,arguments)}}(),O=function(){var E=l()(n()().mark(function L(W){var b,J,K;return n()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return b={id:_,logo:W.url},H.next=3,(0,j.TJ)(b);case 3:J=H.sent,J.succeeded&&(s.ZP.success("Saved!"),w(!1),$(W.url),(K=r.current)===null||K===void 0||K.setFieldValue("logo",W.url));case 5:case"end":return H.stop()}},L)}));return function(W){return E.apply(this,arguments)}}();return(0,o.jsxs)(h._z,{children:[(0,o.jsxs)(y.Z,{gutter:16,children:[(0,o.jsx)(v.Z,{span:18,children:(0,o.jsx)(C.Z,{children:(0,o.jsxs)(S.A,{onFinish:B,formRef:r,children:[(0,o.jsx)(D.Z,{name:"id",initialValue:_,hidden:!0}),(0,o.jsx)(D.Z,{name:"logo",hidden:!0}),(0,o.jsx)(M.Z,{options:a,name:"template"})]})})}),(0,o.jsx)(v.Z,{span:6,children:(0,o.jsx)(C.Z,{extra:(0,o.jsx)(A.Z,{onClick:function(){return w(!0)},children:"Choose"}),children:(0,o.jsx)(g.Z,{src:N,width:250})})})]}),(0,o.jsx)(m.Z,{open:X,onOpenChange:w,onSelect:O})]})};I.default=u},20385:function(F,I,e){e.d(I,{Ah:function(){return C},Cq:function(){return R},V6:function(){return j},kE:function(){return A},tg:function(){return T},z3:function(){return y}});var f=e(15009),n=e.n(f),U=e(97857),l=e.n(U),c=e(99289),p=e.n(c),m=e(90905);function j(u,i){return h.apply(this,arguments)}function h(){return h=p()(n()().mark(function u(i,P){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.request)("fileExplorer/list",l()({method:"GET",params:l()({},i)},P||{})));case 1:case"end":return r.stop()}},u)})),h.apply(this,arguments)}function C(u){return S.apply(this,arguments)}function S(){return S=p()(n()().mark(function u(i){return n()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,m.request)("fileExplorer/delete-file-content/".concat(i),{method:"POST"}));case 1:case"end":return _.stop()}},u)})),S.apply(this,arguments)}function D(u){return M.apply(this,arguments)}function M(){return M=_asyncToGenerator(_regeneratorRuntime().mark(function u(i){return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",request("fileExplorer/delete-file-item",{method:"POST",data:i}));case 1:case"end":return _.stop()}},u)})),M.apply(this,arguments)}function R(u){return s.apply(this,arguments)}function s(){return s=p()(n()().mark(function u(i){return n()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,m.request)("fileExplorer/".concat(i)));case 1:case"end":return _.stop()}},u)})),s.apply(this,arguments)}function y(u,i){return v.apply(this,arguments)}function v(){return v=p()(n()().mark(function u(i,P){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.request)("fileExplorer/file-items/".concat(P.id)));case 1:case"end":return r.stop()}},u)})),v.apply(this,arguments)}function A(u){return g.apply(this,arguments)}function g(){return g=p()(n()().mark(function u(i){var P;return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return P=new FormData,P.append("file",i),r.abrupt("return",(0,m.request)("fileExplorer/upload",{method:"POST",data:P}));case 3:case"end":return r.stop()}},u)})),g.apply(this,arguments)}function T(u){return o.apply(this,arguments)}function o(){return o=p()(n()().mark(function u(i){return n()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,m.request)("fileexplorer/upload-from-url",{method:"POST",data:{url:i}}));case 1:case"end":return _.stop()}},u)})),o.apply(this,arguments)}},31266:function(F,I,e){e.d(I,{I7:function(){return D},KU:function(){return p},OT:function(){return C},PX:function(){return R},Pg:function(){return u},TJ:function(){return P},Uo:function(){return j},ad:function(){return T},lX:function(){return A},lp:function(){return y}});var f=e(15009),n=e.n(f),U=e(99289),l=e.n(U),c=e(90905);function p(){return m.apply(this,arguments)}function m(){return m=l()(n()().mark(function r(){return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,c.request)("appsetting/list"));case 1:case"end":return d.stop()}},r)})),m.apply(this,arguments)}function j(r){return h.apply(this,arguments)}function h(){return h=l()(n()().mark(function r(t){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,c.request)("appsetting/layout/head/save",{method:"POST",data:t}));case 1:case"end":return a.stop()}},r)})),h.apply(this,arguments)}function C(r){return S.apply(this,arguments)}function S(){return S=l()(n()().mark(function r(t){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,c.request)("appsetting/telegram/save",{method:"POST",data:t}));case 1:case"end":return a.stop()}},r)})),S.apply(this,arguments)}function D(){return M.apply(this,arguments)}function M(){return M=l()(n()().mark(function r(){return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,c.request)("appsetting/telegram/configuration"));case 1:case"end":return d.stop()}},r)})),M.apply(this,arguments)}function R(r){return s.apply(this,arguments)}function s(){return s=l()(n()().mark(function r(t){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,c.request)("appsetting/footer/".concat(t)));case 1:case"end":return a.stop()}},r)})),s.apply(this,arguments)}function y(r){return v.apply(this,arguments)}function v(){return v=l()(n()().mark(function r(t){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,c.request)("appsetting/footer/save",{method:"POST",data:t}));case 1:case"end":return a.stop()}},r)})),v.apply(this,arguments)}function A(){return g.apply(this,arguments)}function g(){return g=l()(n()().mark(function r(){return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,c.request)("appsetting/header/templates"));case 1:case"end":return d.stop()}},r)})),g.apply(this,arguments)}function T(r){return o.apply(this,arguments)}function o(){return o=l()(n()().mark(function r(t){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,c.request)("appsetting/header/save",{method:"POST",data:t}));case 1:case"end":return a.stop()}},r)})),o.apply(this,arguments)}function u(r){return i.apply(this,arguments)}function i(){return i=l()(n()().mark(function r(t){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,c.request)("appsetting/header/".concat(t)));case 1:case"end":return a.stop()}},r)})),i.apply(this,arguments)}function P(r){return _.apply(this,arguments)}function _(){return _=l()(n()().mark(function r(t){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,c.request)("appsetting/header/logo",{method:"POST",data:t}));case 1:case"end":return a.stop()}},r)})),_.apply(this,arguments)}}}]);
