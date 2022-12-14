"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[287],{77171:function(y,p,e){e.d(p,{Z:function(){return i}});var s=e(1413),t=e(62435),P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},d=P,m=e(84089),l=function(O,E){return t.createElement(m.Z,(0,s.Z)((0,s.Z)({},O),{},{ref:E,icon:d}))};l.displayName="ArrowDownOutlined";var i=t.forwardRef(l)},1912:function(y,p,e){e.d(p,{Z:function(){return i}});var s=e(1413),t=e(62435),P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"},d=P,m=e(84089),l=function(O,E){return t.createElement(m.Z,(0,s.Z)((0,s.Z)({},O),{},{ref:E,icon:d}))};l.displayName="ArrowUpOutlined";var i=t.forwardRef(l)},64317:function(y,p,e){var s=e(1413),t=e(91),P=e(86074),d=e(22270),m=e(62435),l=e(66758),i=e(15790),A=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],O=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],E=m.forwardRef(function(n,R){var h=n.fieldProps,C=n.children,U=n.params,r=n.proFieldProps,_=n.mode,g=n.valueEnum,x=n.request,B=n.showSearch,M=n.options,D=(0,t.Z)(n,A),Z=(0,m.useContext)(l.Z);return(0,P.jsx)(i.Z,(0,s.Z)((0,s.Z)({valueEnum:(0,d.h)(g),request:x,params:U,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,s.Z)({options:M,mode:_,showSearch:B,getPopupContainer:Z.getPopupContainer},h),ref:R,proFieldProps:r},D),{},{children:C}))}),I=m.forwardRef(function(n,R){var h=n.fieldProps,C=n.children,U=n.params,r=n.proFieldProps,_=n.mode,g=n.valueEnum,x=n.request,B=n.options,M=(0,t.Z)(n,O),D=(0,s.Z)({options:B,mode:_||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},h),Z=(0,m.useContext)(l.Z);return(0,P.jsx)(i.Z,(0,s.Z)((0,s.Z)({valueEnum:(0,d.h)(g),request:x,params:U,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,s.Z)({getPopupContainer:Z.getPopupContainer},D),ref:R,proFieldProps:r},M),{},{children:C}))}),W=E,T=I,v=W;v.SearchSelect=T,v.displayName="ProFormComponent",p.Z=v},16507:function(y,p,e){e.d(p,{Z:function(){return W}});var s=e(5574),t=e.n(s),P=e(90905);function d(){return(0,P.request)("component/list")}function m(T){return request("component/add",{method:"POST",data:T})}var l=e(37476),i=e(5966),A=e(64317),O=e(62435),E=e(86074),I=function(v){var n=(0,O.useState)(),R=t()(n,2),h=R[0],C=R[1];return(0,O.useEffect)(function(){d().then(function(U){C(U.map(function(r){return{label:r.name,value:r.id}}))})},[]),(0,E.jsxs)(l.Y,{open:v.visible,title:"Add component",onFinish:v.onFinish,onOpenChange:v.onVisibleChange,children:[(0,E.jsx)(i.Z,{name:"name",label:"Name"}),(0,E.jsx)(A.Z,{showSearch:!0,options:h,name:"componentId",label:"Component"})]})},W=I},14027:function(y,p,e){var s=e(15009),t=e.n(s),P=e(99289),d=e.n(P),m=e(5574),l=e.n(m),i=e(66352),A=e(24969),O=e(86548),E=e(1912),I=e(77171),W=e(48689),T=e(22538),v=e(2453),n=e(71577),R=e(86738),h=e(90905),C=e(62435),U=e(16507),r=e(86074),_=function(x){var B=(0,h.useParams)(),M=B.id,D=(0,C.useRef)(),Z=(0,C.useState)(!1),F=l()(Z,2),N=F[0],K=F[1];(0,C.useEffect)(function(){var u;(u=D.current)===null||u===void 0||u.reload()},[M]);var V=function(){var u=d()(t()().mark(function c(o){var a,j;return t()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,i.zt)(o,M);case 2:a=f.sent,a.succeeded&&(v.ZP.success("Deleted!"),(j=D.current)===null||j===void 0||j.reload());case 4:case"end":return f.stop()}},c)}));return function(o){return u.apply(this,arguments)}}(),S=function(){var u=d()(t()().mark(function c(o,a){var j,b;return t()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return o.sortOrder=a?o.sortOrder-1:o.sortOrder+1,$.next=3,(0,i.aN)(o.id,o.catalogId,o.sortOrder);case 3:j=$.sent,j.succeeded&&(v.ZP.success("Sorted!"),(b=D.current)===null||b===void 0||b.reload());case 5:case"end":return $.stop()}},c)}));return function(o,a){return u.apply(this,arguments)}}(),L=function(){var u=d()(t()().mark(function c(o){var a,j;return t()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return o.catalogId=M,f.next=3,(0,i.yL)(o);case 3:a=f.sent,a.succeeded&&(v.ZP.success("Added!"),K(!1),(j=D.current)===null||j===void 0||j.reload());case 5:case"end":return f.stop()}},c)}));return function(o){return u.apply(this,arguments)}}();return(0,r.jsxs)("div",{children:[(0,r.jsx)(T.Rs,{toolBarRender:function(){return[(0,r.jsx)(n.Z,{onClick:function(){return K(!0)},type:"primary",icon:(0,r.jsx)(A.Z,{}),children:(0,r.jsx)(h.FormattedMessage,{id:"general.new"})},0)]},rowSelection:{},actionRef:D,request:d()(t()().mark(function u(){return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,i.KC)(M,x.child));case 1:case"end":return o.stop()}},u)})),headerTitle:"Work items",metas:{title:{dataIndex:"name"},actions:{render:function(c,o){return[(0,r.jsx)(n.Z,{type:"primary",icon:(0,r.jsx)(O.Z,{}),onClick:function(){h.history.push("/works/".concat(o.normalizedName.toLocaleLowerCase(),"/").concat(o.id))}},1),(0,r.jsx)(n.Z,{icon:(0,r.jsx)(E.Z,{}),onClick:function(){return S(o,!0)}},2),(0,r.jsx)(n.Z,{icon:(0,r.jsx)(I.Z,{}),onClick:function(){return S(o,!1)}},3),(0,r.jsxs)(R.Z,{title:"Are you sure?",onConfirm:function(){return V(o.id)},children:[(0,r.jsx)(n.Z,{icon:(0,r.jsx)(W.Z,{}),danger:!0,type:"primary"}),","]},4)]}}}}),(0,r.jsx)(U.Z,{visible:N,onVisibleChange:K,onFinish:L})]})};p.Z=_},94166:function(y,p,e){e.r(p);var s=e(15009),t=e.n(s),P=e(99289),d=e.n(P),m=e(5574),l=e.n(m),i=e(14027),A=e(66352),O=e(24969),E=e(62884),I=e(30029),W=e(97269),T=e(5966),v=e(37476),n=e(90905),R=e(2453),h=e(71577),C=e(71230),U=e(15746),r=e(62435),_=e(86074),g=function(){var B=(0,n.useParams)(),M=B.id,D=(0,r.useRef)(),Z=(0,r.useState)(!1),F=l()(Z,2),N=F[0],K=F[1];(0,r.useEffect)(function(){(0,A.TA)(M).then(function(S){var L;(L=D.current)===null||L===void 0||L.setFields([{name:"id",value:S.id},{name:"name",value:S.name}])})},[]);var V=function(){var S=d()(t()().mark(function L(u){var c;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u.id=M,a.next=3,(0,A.JN)(u);case 3:c=a.sent,c.succeeded&&(R.ZP.success("Added"),K(!1));case 5:case"end":return a.stop()}},L)}));return function(u){return S.apply(this,arguments)}}();return(0,_.jsxs)(E._z,{title:"Swiper",extra:(0,_.jsx)(h.Z,{type:"primary",icon:(0,_.jsx)(O.Z,{}),onClick:function(){return K(!0)},children:"Add image"}),children:[(0,_.jsxs)(C.Z,{gutter:16,children:[(0,_.jsx)(U.Z,{span:16,children:(0,_.jsx)(i.Z,{child:!0})}),(0,_.jsx)(U.Z,{span:8,children:(0,_.jsx)(I.Z,{title:"Setting",children:(0,_.jsx)(W.A,{formRef:D,children:(0,_.jsx)(T.Z,{name:"name",label:"Name"})})})})]}),(0,_.jsx)(v.Y,{open:N,onOpenChange:K,title:"Add items",onFinish:V,children:(0,_.jsx)(T.Z,{name:"name",label:"Name"})})]})};p.default=g}}]);