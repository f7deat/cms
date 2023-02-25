"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4027],{77171:function(W,M,e){e.d(M,{Z:function(){return o}});var _=e(1413),n=e(62435),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},s=f,u=e(84089),m=function(R,C){return n.createElement(u.Z,(0,_.Z)((0,_.Z)({},R),{},{ref:C,icon:s}))};m.displayName="ArrowDownOutlined";var o=n.forwardRef(m)},1912:function(W,M,e){e.d(M,{Z:function(){return o}});var _=e(1413),n=e(62435),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"},s=f,u=e(84089),m=function(R,C){return n.createElement(u.Z,(0,_.Z)((0,_.Z)({},R),{},{ref:C,icon:s}))};m.displayName="ArrowUpOutlined";var o=n.forwardRef(m)},64317:function(W,M,e){var _=e(1413),n=e(91),f=e(86074),s=e(22270),u=e(62435),m=e(66758),o=e(25338),A=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],R=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],C=u.forwardRef(function(r,l){var d=r.fieldProps,c=r.children,v=r.params,U=r.proFieldProps,j=r.mode,B=r.valueEnum,a=r.request,Z=r.showSearch,x=r.options,K=(0,n.Z)(r,A),L=(0,u.useContext)(m.Z);return(0,f.jsx)(o.Z,(0,_.Z)((0,_.Z)({valueEnum:(0,s.h)(B),request:a,params:v,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,_.Z)({options:x,mode:j,showSearch:Z,getPopupContainer:L.getPopupContainer},d),ref:l,proFieldProps:U},K),{},{children:c}))}),T=u.forwardRef(function(r,l){var d=r.fieldProps,c=r.children,v=r.params,U=r.proFieldProps,j=r.mode,B=r.valueEnum,a=r.request,Z=r.options,x=(0,n.Z)(r,R),K=(0,_.Z)({options:Z,mode:j||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},d),L=(0,u.useContext)(m.Z);return(0,f.jsx)(o.Z,(0,_.Z)((0,_.Z)({valueEnum:(0,s.h)(B),request:a,params:v,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,_.Z)({getPopupContainer:L.getPopupContainer},K),ref:l,proFieldProps:U},x),{},{children:c}))}),h=C,D=T,S=h;S.SearchSelect=D,S.displayName="ProFormComponent",M.Z=S},5966:function(W,M,e){var _=e(1413),n=e(91),f=e(86074),s=e(25338),u=["fieldProps","proFieldProps"],m=["fieldProps","proFieldProps"],o="text",A=function(h){var D=h.fieldProps,S=h.proFieldProps,r=(0,n.Z)(h,u);return(0,f.jsx)(s.Z,(0,_.Z)({valueType:o,fieldProps:D,filedConfig:{valueType:o},proFieldProps:S},r))},R=function(h){var D=h.fieldProps,S=h.proFieldProps,r=(0,n.Z)(h,m);return(0,f.jsx)(s.Z,(0,_.Z)({valueType:"password",fieldProps:D,proFieldProps:S,filedConfig:{valueType:o}},r))},C=A;C.Password=R,C.displayName="ProFormComponent",M.Z=C},76131:function(W,M,e){var _=e(5574),n=e.n(_),f=e(98364),s=e(99351),u=e(5966),m=e(64317),o=e(62435),A=e(86074),R=function(T){var h=(0,o.useState)(),D=n()(h,2),S=D[0],r=D[1];return(0,o.useEffect)(function(){(0,f.eB)().then(function(l){r(l.map(function(d){return{label:d.name,value:d.id}}))})},[]),(0,A.jsxs)(s.Y,{open:T.open,title:"Add component",onFinish:T.onFinish,onOpenChange:T.onOpenChange,children:[(0,A.jsx)(u.Z,{name:"name",label:"Name"}),(0,A.jsx)(m.Z,{showSearch:!0,options:S,name:"componentId",label:"Component"})]})};M.Z=R},14027:function(W,M,e){var _=e(15009),n=e.n(_),f=e(99289),s=e.n(f),u=e(5574),m=e.n(u),o=e(66352),A=e(24969),R=e(86548),C=e(1912),T=e(77171),h=e(48689),D=e(22538),S=e(99351),r=e(5966),l=e(64317),d=e(27790),c=e(71577),v=e(86738),U=e(90905),j=e(62435),B=e(76131),a=e(86074),Z=function(){var K=(0,U.useParams)(),L=K.id,g=(0,j.useRef)(),z=(0,j.useState)(!1),F=m()(z,2),G=F[0],b=F[1],X=(0,j.useState)(!1),$=m()(X,2),Y=$[0],w=$[1],H=(0,j.useState)(),N=m()(H,2),J=N[0],Q=N[1];(0,j.useEffect)(function(){var E;(E=g.current)===null||E===void 0||E.reload()},[L]);var k=function(){var E=s()(n()().mark(function P(t){var O,i;return n()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,o.zt)(t,L);case 2:O=p.sent,O.succeeded&&(d.ZP.success("Deleted!"),(i=g.current)===null||i===void 0||i.reload());case 4:case"end":return p.stop()}},P)}));return function(t){return E.apply(this,arguments)}}(),V=function(){var E=s()(n()().mark(function P(t,O){var i,I;return n()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return t.sortOrder=O?t.sortOrder-1:t.sortOrder+1,y.next=3,(0,o.aN)(t.id,t.catalogId,t.sortOrder);case 3:i=y.sent,i.succeeded&&(d.ZP.success("Sorted!"),(I=g.current)===null||I===void 0||I.reload());case 5:case"end":return y.stop()}},P)}));return function(t,O){return E.apply(this,arguments)}}(),q=function(){var E=s()(n()().mark(function P(t){var O,i;return n()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return t.catalogId=L,p.next=3,(0,o.yL)(t);case 3:O=p.sent,O.succeeded&&(d.ZP.success("Added!"),b(!1),(i=g.current)===null||i===void 0||i.reload());case 5:case"end":return p.stop()}},P)}));return function(t){return E.apply(this,arguments)}}(),ee=function(){var E=s()(n()().mark(function P(){var t;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,o.x)();case 2:t=i.sent,Q(t),w(!0);case 5:case"end":return i.stop()}},P)}));return function(){return E.apply(this,arguments)}}(),ne=function(){var E=s()(n()().mark(function P(t){var O,i;return n()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,o.jX)(t);case 2:O=p.sent,O.succeeded&&(d.ZP.success("Saved"),w(!1),(i=g.current)===null||i===void 0||i.reload());case 4:case"end":return p.stop()}},P)}));return function(t){return E.apply(this,arguments)}}();return(0,a.jsxs)("div",{children:[(0,a.jsx)(D.Rs,{toolBarRender:function(){return[(0,a.jsx)(c.Z,{onClick:function(){return b(!0)},type:"primary",icon:(0,a.jsx)(A.Z,{}),children:(0,a.jsx)(U.FormattedMessage,{id:"general.new"})},0),(0,a.jsx)(c.Z,{onClick:ee,children:"Select"},1)]},rowSelection:{},actionRef:g,request:s()(n()().mark(function E(){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.KC)(L));case 1:case"end":return t.stop()}},E)})),headerTitle:"Work items",metas:{title:{dataIndex:"name"},actions:{render:function(P,t){return[(0,a.jsx)(c.Z,{type:"primary",icon:(0,a.jsx)(R.Z,{}),onClick:function(){U.history.push("/works/".concat(t.normalizedName.toLocaleLowerCase(),"/").concat(t.id))}},1),(0,a.jsx)(c.Z,{icon:(0,a.jsx)(C.Z,{}),onClick:function(){return V(t,!0)}},2),(0,a.jsx)(c.Z,{icon:(0,a.jsx)(T.Z,{}),onClick:function(){return V(t,!1)}},3),(0,a.jsxs)(v.Z,{title:"Are you sure?",onConfirm:function(){return k(t.id)},children:[(0,a.jsx)(c.Z,{icon:(0,a.jsx)(h.Z,{}),danger:!0,type:"primary"}),","]},4)]}}}}),(0,a.jsx)(B.Z,{open:G,onOpenChange:b,onFinish:q}),(0,a.jsxs)(S.Y,{open:Y,onOpenChange:w,onFinish:ne,children:[(0,a.jsx)(r.Z,{name:"catalogId",initialValue:L,hidden:!0}),(0,a.jsx)(l.Z,{showSearch:!0,name:"workContentId",options:J,label:"Work"})]})]})};M.Z=Z},98364:function(W,M,e){e.d(M,{CO:function(){return C},Xr:function(){return m},Z:function(){return h},eB:function(){return A},v7:function(){return S}});var _=e(15009),n=e.n(_),f=e(99289),s=e.n(f),u=e(90905);function m(l){return o.apply(this,arguments)}function o(){return o=s()(n()().mark(function l(d){return n()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,u.request)("component/".concat(d)));case 1:case"end":return v.stop()}},l)})),o.apply(this,arguments)}function A(){return(0,u.request)("component/list-all")}function R(l){return request("component/add",{method:"POST",data:l})}function C(){return T.apply(this,arguments)}function T(){return T=s()(n()().mark(function l(){return n()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,u.request)("component/list"));case 1:case"end":return c.stop()}},l)})),T.apply(this,arguments)}function h(l,d){return D.apply(this,arguments)}function D(){return D=s()(n()().mark(function l(d,c){return n()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.abrupt("return",(0,u.request)("component/list-work/".concat(c),{params:d}));case 1:case"end":return U.stop()}},l)})),D.apply(this,arguments)}function S(l){return r.apply(this,arguments)}function r(){return r=s()(n()().mark(function l(d){return n()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,u.request)("component/delete/".concat(d),{method:"POST"}));case 1:case"end":return v.stop()}},l)})),r.apply(this,arguments)}}}]);
