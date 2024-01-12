"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[649],{82826:function(K,O,e){e.d(O,{Z:function(){return l}});var u=e(1413),a=e(62435),D={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},i=D,d=e(91146),j=function(Z,M){return a.createElement(d.Z,(0,u.Z)((0,u.Z)({},Z),{},{ref:M,icon:i}))};j.displayName="ArrowLeftOutlined";var l=a.forwardRef(j)},47389:function(K,O,e){var u=e(1413),a=e(62435),D=e(27363),i=e(91146),d=function(l,h){return a.createElement(i.Z,(0,u.Z)((0,u.Z)({},l),{},{ref:h,icon:D.Z}))};d.displayName="EditOutlined",O.Z=a.forwardRef(d)},64317:function(K,O,e){var u=e(1413),a=e(91),D=e(22270),i=e(62435),d=e(66758),j=e(96987),l=e(86074),h=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],Z=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],M=i.forwardRef(function(r,F){var _=r.fieldProps,C=r.children,y=r.params,s=r.proFieldProps,o=r.mode,p=r.valueEnum,t=r.request,v=r.showSearch,x=r.options,A=(0,a.Z)(r,h),B=(0,i.useContext)(d.Z);return(0,l.jsx)(j.Z,(0,u.Z)((0,u.Z)({valueEnum:(0,D.h)(p),request:t,params:y,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,u.Z)({options:x,mode:o,showSearch:v,getPopupContainer:B.getPopupContainer},_),ref:F,proFieldProps:s},A),{},{children:C}))}),m=i.forwardRef(function(r,F){var _=r.fieldProps,C=r.children,y=r.params,s=r.proFieldProps,o=r.mode,p=r.valueEnum,t=r.request,v=r.options,x=(0,a.Z)(r,Z),A=(0,u.Z)({options:v,mode:o||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},_),B=(0,i.useContext)(d.Z);return(0,l.jsx)(j.Z,(0,u.Z)((0,u.Z)({valueEnum:(0,D.h)(p),request:t,params:y,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,u.Z)({getPopupContainer:B.getPopupContainer},A),ref:F,proFieldProps:s},x),{},{children:C}))}),T=M,c=m,b=T;b.SearchSelect=c,b.displayName="ProFormComponent",O.Z=b},18576:function(K,O,e){e.d(O,{Z:function(){return m}});var u=e(97857),a=e.n(u),D=e(37476),i=e(5966),d=e(98364),j=e(64317),l=e(86074),h=function(c){return(0,l.jsx)(j.Z,{showSearch:!0,request:d.Ef,name:c.name,label:c.label})},Z=h,M=function(c){return(0,l.jsxs)(D.Y,a()(a()({},c),{},{title:"Add component",children:[(0,l.jsx)(i.Z,{name:"name",label:"Name"}),(0,l.jsx)(Z,{name:"componentId",label:"Component"})]}))},m=M},85335:function(K,O,e){var u=e(15009),a=e.n(u),D=e(99289),i=e.n(D),d=e(66352),j=e(28199),l=e(34994),h=e(5966),Z=e(63434),M=e(35312),m=e(58301),T=e(62435),c=e(86074),b=function(){var F=(0,M.useParams)(),_=F.id,C=(0,T.useRef)();(0,T.useEffect)(function(){(0,d.Mk)(_).then(function(s){var o;(o=C.current)===null||o===void 0||o.setFields([{name:"name",value:s.name},{name:"active",value:s.active}])})},[_]);var y=function(){var s=i()(a()().mark(function o(p){var t;return a()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,(0,d.Qb)(p);case 2:t=x.sent,t.succeeded?m.ZP.success("Saved!"):m.ZP.error(t.errors[0].description);case 4:case"end":return x.stop()}},o)}));return function(p){return s.apply(this,arguments)}}();return(0,c.jsx)(j.Z,{title:"Info",children:(0,c.jsxs)(l.A,{formRef:C,onFinish:y,children:[(0,c.jsx)(h.Z,{hidden:!0,name:"id",initialValue:_}),(0,c.jsx)(h.Z,{name:"name",label:"Name"}),(0,c.jsx)(Z.Z,{name:"active",label:"Active"})]})})};O.Z=b},60168:function(K,O,e){e.r(O),e.d(O,{default:function(){return ie}});var u=e(5574),a=e.n(u),D=e(85335),i=e(82826),d=e(63386),j=e(28199),l=e(35312),h=e(71577),Z=e(71230),M=e(15746),m=e(62435),T=e(97857),c=e.n(T),b=e(15009),r=e.n(b),F=e(99289),_=e.n(F),C=e(66352),y=e(47389),s=e(82061),o=e(51042),p=e(62639),t=e(37476),v=e(5966),x=e(64317),A=e(58301),B=e(86738),ne=e(32983),te=e(18576),n=e(86074),re=function(){var w=(0,l.useParams)(),L=w.id,U=(0,l.useIntl)(),N=(0,m.useState)([]),R=a()(N,2),I=R[0],$=R[1],z=(0,m.useState)(!1),Q=a()(z,2),W=Q[0],X=Q[1],de=(0,m.useState)(""),k=a()(de,2),me=k[0],ce=k[1],pe=(0,m.useState)(!1),q=a()(pe,2),ve=q[0],Y=q[1],G=function(){(0,C.RI)(L).then(function(P){$(P||[])})};(0,m.useEffect)(function(){L&&G()},[L]);var fe=function(){var f=_()(r()().mark(function P(E){var g;return r()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return E.rowId=L,S.next=3,(0,C.Wf)(E);case 3:g=S.sent,g.succeeded?(A.ZP.success("Added!"),Y(!1),G()):A.ZP.error(g.errors[0].description);case 5:case"end":return S.stop()}},P)}));return function(E){return f.apply(this,arguments)}}(),he=function(){var f=_()(r()().mark(function P(E){var g,H;return r()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return g=c()({active:!0,parentId:me},E),V.next=3,(0,C.XQ)(g);case 3:H=V.sent,H.succeeded&&(A.ZP.success("Added!"),X(!1),G());case 5:case"end":return V.stop()}},P)}));return function(E){return f.apply(this,arguments)}}(),ee=function(){var f=_()(r()().mark(function P(E){var g;return r()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,(0,C.Js)(E);case 2:g=S.sent,g.succeeded?(A.ZP.success(U.formatMessage({id:"general.deleted"})),G()):A.ZP.error(g.errors[0].description);case 4:case"end":return S.stop()}},P)}));return function(E){return f.apply(this,arguments)}}(),Pe=function(P){return Number(P.split("-")[2])*2},Ee=[{title:"#",dataIndex:"sort",className:"drag-visible"},{title:"Name",dataIndex:"name"},{title:"Status",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"Action",valueType:"option",render:function(P,E){return[(0,n.jsx)(h.ZP,{type:"primary",icon:(0,n.jsx)(y.Z,{}),onClick:function(){l.history.push("/works/".concat(E.normalizedName.toLocaleLowerCase(),"/").concat(E.id))}},1),(0,n.jsx)(B.Z,{title:"Are you sure?",onConfirm:function(){return ee(E.id)},children:(0,n.jsx)(h.ZP,{icon:(0,n.jsx)(s.Z,{}),danger:!0,type:"primary"})},4)]}}],_e=function(P){var E=P.map(function(g){return g.id||""});(0,C.pd)(E).then(function(g){g.succeeded&&(G(),A.ZP.success("Saved!"))})};return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"mb-4 flex justify-end",children:(0,n.jsx)(h.ZP,{icon:(0,n.jsx)(o.Z,{}),type:"primary",onClick:function(){return Y(!0)},children:(0,n.jsx)("span",{children:(0,n.jsx)(l.FormattedMessage,{id:"general.new"})})})}),(0,n.jsx)(Z.Z,{gutter:16,children:I.map(function(f,P){return(0,n.jsx)(M.Z,{span:Pe(f.className),children:(0,n.jsx)(j.Z,{title:f.name,bordered:!0,headerBordered:!0,extra:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.ZP,{type:"link",icon:(0,n.jsx)(o.Z,{}),onClick:function(){ce(f.id||""),X(!0)}}),(0,n.jsx)(B.Z,{title:"Are you sure?",onConfirm:function(){return ee(f.id)},children:(0,n.jsx)(h.ZP,{type:"link",danger:!0,icon:(0,n.jsx)(s.Z,{})})})]}),children:f.items&&f.items.length>0?(0,n.jsx)(p.Z,{ghost:!0,search:!1,columns:Ee,dataSource:f.items,rowKey:"id",dragSortKey:"sort",onDragSortEnd:_e}):(0,n.jsx)(ne.Z,{})})},P)})}),(0,n.jsx)(te.Z,{open:W,onOpenChange:X,onFinish:he}),(0,n.jsxs)(t.Y,{open:ve,onOpenChange:Y,onFinish:fe,children:[(0,n.jsx)(v.Z,{name:"name",label:"Name",rules:[{required:!0}]}),(0,n.jsx)(x.Z,{label:"Collumn",options:[{label:"col-md-1",value:"col-md-1"},{label:"col-md-2",value:"col-md-2"},{label:"col-md-3",value:"col-md-3"},{label:"col-md-4",value:"col-md-4"},{label:"col-md-5",value:"col-md-5"},{label:"col-md-6",value:"col-md-6"},{label:"col-md-7",value:"col-md-7"},{label:"col-md-8",value:"col-md-8"},{label:"col-md-9",value:"col-md-9"},{label:"col-md-10",value:"col-md-10"},{label:"col-md-11",value:"col-md-11"},{label:"col-md-12",value:"col-md-12"}],name:"className"})]})]})},ae=re,se=e(34994),oe=function(){var w=(0,l.useParams)(),L=w.id,U=(0,m.useRef)();(0,m.useEffect)(function(){(0,C.dM)(L).then(function(R){var I;(I=U.current)===null||I===void 0||I.setFields([{name:"name",value:R.name},{name:"layout",value:R.layout},{name:"className",value:R.className},{name:"gap",value:R.gap}])})},[]);var N=function(){var R=_()(r()().mark(function I($){var z;return r()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return $.id=L,W.next=3,(0,C.n5)($);case 3:z=W.sent,z.succeeded&&A.ZP.success("Saved!");case 5:case"end":return W.stop()}},I)}));return function($){return R.apply(this,arguments)}}();return(0,n.jsxs)(se.A,{onFinish:N,formRef:U,children:[(0,n.jsx)(v.Z,{name:"name",label:"Name"}),(0,n.jsx)(v.Z,{name:"className",label:"Class name"}),(0,n.jsx)(x.Z,{name:"layout",label:"Layout",options:[{label:"Full width",value:"container-fluid"},{label:"Container",value:"container"}]}),(0,n.jsx)(x.Z,{name:"gap",label:"Gap",options:[{label:"0",value:"gap-0"},{label:"4",value:"gap-4"}]})]})},le=oe,ue=function(){var w=(0,m.useState)("content"),L=a()(w,2),U=L[0],N=L[1];return(0,n.jsx)(d._z,{extra:(0,n.jsx)(h.ZP,{icon:(0,n.jsx)(i.Z,{}),onClick:function(){return l.history.back()},children:(0,n.jsx)("span",{children:(0,n.jsx)(l.FormattedMessage,{id:"general.back"})})}),children:(0,n.jsxs)(Z.Z,{gutter:16,children:[(0,n.jsx)(M.Z,{span:18,children:(0,n.jsx)(j.Z,{tabs:{activeKey:U,items:[{label:"Content",key:"content",children:(0,n.jsx)(ae,{})},{label:(0,n.jsx)(l.FormattedMessage,{id:"menu.settings"}),key:"setting",children:(0,n.jsx)(le,{})}],onChange:function(I){N(I)}}})}),(0,n.jsx)(M.Z,{span:6,children:(0,n.jsx)(D.Z,{})})]})})},ie=ue},98364:function(K,O,e){e.d(O,{CO:function(){return T},Ef:function(){return C},KL:function(){return M},Xr:function(){return j},Z:function(){return b},v7:function(){return F}});var u=e(15009),a=e.n(u),D=e(99289),i=e.n(D),d=e(35312);function j(s){return l.apply(this,arguments)}function l(){return l=i()(a()().mark(function s(o){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,d.request)("component/".concat(o)));case 1:case"end":return t.stop()}},s)})),l.apply(this,arguments)}function h(s){return Z.apply(this,arguments)}function Z(){return Z=_asyncToGenerator(_regeneratorRuntime().mark(function s(o){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("component/add",{method:"POST",data:o}));case 1:case"end":return t.stop()}},s)})),Z.apply(this,arguments)}function M(s){return m.apply(this,arguments)}function m(){return m=i()(a()().mark(function s(o){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,d.request)("component/update",{method:"POST",data:o}));case 1:case"end":return t.stop()}},s)})),m.apply(this,arguments)}function T(s){return c.apply(this,arguments)}function c(){return c=i()(a()().mark(function s(o){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,d.request)("component/list",{params:o}));case 1:case"end":return t.stop()}},s)})),c.apply(this,arguments)}function b(s,o){return r.apply(this,arguments)}function r(){return r=i()(a()().mark(function s(o,p){return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,d.request)("component/list-work/".concat(p),{params:o}));case 1:case"end":return v.stop()}},s)})),r.apply(this,arguments)}function F(s){return _.apply(this,arguments)}function _(){return _=i()(a()().mark(function s(o){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,d.request)("component/delete/".concat(o),{method:"POST"}));case 1:case"end":return t.stop()}},s)})),_.apply(this,arguments)}function C(s){return y.apply(this,arguments)}function y(){return y=i()(a()().mark(function s(o){var p;return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return p={searchTerm:o.keyWords},v.abrupt("return",(0,d.request)("component/form-select",{params:p}));case 2:case"end":return v.stop()}},s)})),y.apply(this,arguments)}}}]);
