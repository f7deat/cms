"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9287],{77171:function(B,f,e){e.d(f,{Z:function(){return s}});var t=e(1413),r=e(62435),P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},a=P,u=e(84089),m=function(U,M){return r.createElement(u.Z,(0,t.Z)((0,t.Z)({},U),{},{ref:M,icon:a}))};m.displayName="ArrowDownOutlined";var s=r.forwardRef(m)},1912:function(B,f,e){e.d(f,{Z:function(){return s}});var t=e(1413),r=e(62435),P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"},a=P,u=e(84089),m=function(U,M){return r.createElement(u.Z,(0,t.Z)((0,t.Z)({},U),{},{ref:M,icon:a}))};m.displayName="ArrowUpOutlined";var s=r.forwardRef(m)},64317:function(B,f,e){var t=e(1413),r=e(91),P=e(86074),a=e(22270),u=e(62435),m=e(66758),s=e(15790),C=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],U=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],M=u.forwardRef(function(n,l){var i=n.fieldProps,p=n.children,c=n.params,_=n.proFieldProps,E=n.mode,g=n.valueEnum,Z=n.request,S=n.showSearch,j=n.options,W=(0,r.Z)(n,C),I=(0,u.useContext)(m.Z);return(0,P.jsx)(s.Z,(0,t.Z)((0,t.Z)({valueEnum:(0,a.h)(g),request:Z,params:c,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,t.Z)({options:j,mode:E,showSearch:S,getPopupContainer:I.getPopupContainer},i),ref:l,proFieldProps:_},W),{},{children:p}))}),A=u.forwardRef(function(n,l){var i=n.fieldProps,p=n.children,c=n.params,_=n.proFieldProps,E=n.mode,g=n.valueEnum,Z=n.request,S=n.options,j=(0,r.Z)(n,U),W=(0,t.Z)({options:S,mode:E||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},i),I=(0,u.useContext)(m.Z);return(0,P.jsx)(s.Z,(0,t.Z)((0,t.Z)({valueEnum:(0,a.h)(g),request:Z,params:c,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,t.Z)({getPopupContainer:I.getPopupContainer},W),ref:l,proFieldProps:_},j),{},{children:p}))}),O=M,v=A,D=O;D.SearchSelect=v,D.displayName="ProFormComponent",f.Z=D},5966:function(B,f,e){var t=e(1413),r=e(91),P=e(86074),a=e(15790),u=["fieldProps","proFieldProps"],m=["fieldProps","proFieldProps"],s="text",C=function(O){var v=O.fieldProps,D=O.proFieldProps,n=(0,r.Z)(O,u);return(0,P.jsx)(a.Z,(0,t.Z)({valueType:s,fieldProps:v,filedConfig:{valueType:s},proFieldProps:D},n))},U=function(O){var v=O.fieldProps,D=O.proFieldProps,n=(0,r.Z)(O,m);return(0,P.jsx)(a.Z,(0,t.Z)({valueType:"password",fieldProps:v,proFieldProps:D,filedConfig:{valueType:s}},n))},M=C;M.Password=U,M.displayName="ProFormComponent",f.Z=M},76131:function(B,f,e){var t=e(5574),r=e.n(t),P=e(98364),a=e(99351),u=e(5966),m=e(64317),s=e(62435),C=e(86074),U=function(A){var O=(0,s.useState)(),v=r()(O,2),D=v[0],n=v[1];return(0,s.useEffect)(function(){(0,P.eB)().then(function(l){n(l.map(function(i){return{label:i.name,value:i.id}}))})},[]),(0,C.jsxs)(a.Y,{open:A.open,title:"Add component",onFinish:A.onFinish,onOpenChange:A.onOpenChange,children:[(0,C.jsx)(u.Z,{name:"name",label:"Name"}),(0,C.jsx)(m.Z,{showSearch:!0,options:D,name:"componentId",label:"Component"})]})};f.Z=U},14027:function(B,f,e){var t=e(15009),r=e.n(t),P=e(99289),a=e.n(P),u=e(5574),m=e.n(u),s=e(66352),C=e(24969),U=e(86548),M=e(1912),A=e(77171),O=e(48689),v=e(22538),D=e(27790),n=e(71577),l=e(86738),i=e(90905),p=e(62435),c=e(76131),_=e(86074),E=function(){var Z=(0,i.useParams)(),S=Z.id,j=(0,p.useRef)(),W=(0,p.useState)(!1),I=m()(W,2),w=I[0],x=I[1];(0,p.useEffect)(function(){var d;(d=j.current)===null||d===void 0||d.reload()},[S]);var b=function(){var d=a()(r()().mark(function T(o){var R,h;return r()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,(0,s.zt)(o,S);case 2:R=L.sent,R.succeeded&&(D.ZP.success("Deleted!"),(h=j.current)===null||h===void 0||h.reload());case 4:case"end":return L.stop()}},T)}));return function(o){return d.apply(this,arguments)}}(),$=function(){var d=a()(r()().mark(function T(o,R){var h,y;return r()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return o.sortOrder=R?o.sortOrder-1:o.sortOrder+1,F.next=3,(0,s.aN)(o.id,o.catalogId,o.sortOrder);case 3:h=F.sent,h.succeeded&&(D.ZP.success("Sorted!"),(y=j.current)===null||y===void 0||y.reload());case 5:case"end":return F.stop()}},T)}));return function(o,R){return d.apply(this,arguments)}}(),K=function(){var d=a()(r()().mark(function T(o){var R,h;return r()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return o.catalogId=S,L.next=3,(0,s.yL)(o);case 3:R=L.sent,R.succeeded&&(D.ZP.success("Added!"),x(!1),(h=j.current)===null||h===void 0||h.reload());case 5:case"end":return L.stop()}},T)}));return function(o){return d.apply(this,arguments)}}();return(0,_.jsxs)("div",{children:[(0,_.jsx)(v.Rs,{toolBarRender:function(){return[(0,_.jsx)(n.Z,{onClick:function(){return x(!0)},type:"primary",icon:(0,_.jsx)(C.Z,{}),children:(0,_.jsx)(i.FormattedMessage,{id:"general.new"})},0)]},rowSelection:{},actionRef:j,request:a()(r()().mark(function d(){return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,s.KC)(S));case 1:case"end":return o.stop()}},d)})),headerTitle:"Work items",metas:{title:{dataIndex:"name"},actions:{render:function(T,o){return[(0,_.jsx)(n.Z,{type:"primary",icon:(0,_.jsx)(U.Z,{}),onClick:function(){i.history.push("/works/".concat(o.normalizedName.toLocaleLowerCase(),"/").concat(o.id))}},1),(0,_.jsx)(n.Z,{icon:(0,_.jsx)(M.Z,{}),onClick:function(){return $(o,!0)}},2),(0,_.jsx)(n.Z,{icon:(0,_.jsx)(A.Z,{}),onClick:function(){return $(o,!1)}},3),(0,_.jsxs)(l.Z,{title:"Are you sure?",onConfirm:function(){return b(o.id)},children:[(0,_.jsx)(n.Z,{icon:(0,_.jsx)(O.Z,{}),danger:!0,type:"primary"}),","]},4)]}}}}),(0,_.jsx)(c.Z,{open:w,onOpenChange:x,onFinish:K})]})};f.Z=E},94166:function(B,f,e){e.r(f);var t=e(15009),r=e.n(t),P=e(99289),a=e.n(P),u=e(5574),m=e.n(u),s=e(14027),C=e(66352),U=e(24969),M=e(62884),A=e(30029),O=e(97269),v=e(5966),D=e(99351),n=e(90905),l=e(27790),i=e(71577),p=e(71230),c=e(15746),_=e(62435),E=e(86074),g=function(){var S=(0,n.useParams)(),j=S.id,W=(0,_.useRef)(),I=(0,_.useState)(!1),w=m()(I,2),x=w[0],b=w[1];(0,_.useEffect)(function(){(0,C.TA)(j).then(function(K){var d;(d=W.current)===null||d===void 0||d.setFields([{name:"id",value:K.id},{name:"name",value:K.name}])})},[]);var $=function(){var K=a()(r()().mark(function d(T){var o;return r()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return T.id=j,h.next=3,(0,C.JN)(T);case 3:o=h.sent,o.succeeded&&(l.ZP.success("Added"),b(!1));case 5:case"end":return h.stop()}},d)}));return function(T){return K.apply(this,arguments)}}();return(0,E.jsxs)(M._z,{title:"Swiper",extra:(0,E.jsx)(i.Z,{type:"primary",icon:(0,E.jsx)(U.Z,{}),onClick:function(){return b(!0)},children:"Add image"}),children:[(0,E.jsxs)(p.Z,{gutter:16,children:[(0,E.jsx)(c.Z,{span:16,children:(0,E.jsx)(s.Z,{child:!0})}),(0,E.jsx)(c.Z,{span:8,children:(0,E.jsx)(A.Z,{title:"Setting",children:(0,E.jsx)(O.A,{formRef:W,children:(0,E.jsx)(v.Z,{name:"name",label:"Name"})})})})]}),(0,E.jsx)(D.Y,{open:x,onOpenChange:b,title:"Add items",onFinish:$,children:(0,E.jsx)(v.Z,{name:"name",label:"Name"})})]})};f.default=g},98364:function(B,f,e){e.d(f,{CO:function(){return M},Xr:function(){return m},Z:function(){return O},eB:function(){return C},v7:function(){return D}});var t=e(15009),r=e.n(t),P=e(99289),a=e.n(P),u=e(90905);function m(l){return s.apply(this,arguments)}function s(){return s=a()(r()().mark(function l(i){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,u.request)("component/".concat(i)));case 1:case"end":return c.stop()}},l)})),s.apply(this,arguments)}function C(){return(0,u.request)("component/list-all")}function U(l){return request("component/add",{method:"POST",data:l})}function M(){return A.apply(this,arguments)}function A(){return A=a()(r()().mark(function l(){return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,u.request)("component/list"));case 1:case"end":return p.stop()}},l)})),A.apply(this,arguments)}function O(l,i){return v.apply(this,arguments)}function v(){return v=a()(r()().mark(function l(i,p){return r()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,u.request)("component/list-work/".concat(p),{params:i}));case 1:case"end":return _.stop()}},l)})),v.apply(this,arguments)}function D(l){return n.apply(this,arguments)}function n(){return n=a()(r()().mark(function l(i){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,u.request)("component/delete/".concat(i),{method:"POST"}));case 1:case"end":return c.stop()}},l)})),n.apply(this,arguments)}}}]);