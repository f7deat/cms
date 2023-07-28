"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7980],{82061:function(C,f,e){var o=e(1413),n=e(62435),P=e(47046),a=e(91146),u=function(t,c){return n.createElement(a.Z,(0,o.Z)((0,o.Z)({},t),{},{ref:c,icon:P.Z}))};u.displayName="DeleteOutlined",f.Z=n.forwardRef(u)},47389:function(C,f,e){var o=e(1413),n=e(62435),P=e(27363),a=e(91146),u=function(t,c){return n.createElement(a.Z,(0,o.Z)((0,o.Z)({},t),{},{ref:c,icon:P.Z}))};u.displayName="EditOutlined",f.Z=n.forwardRef(u)},51042:function(C,f,e){var o=e(1413),n=e(62435),P=e(42110),a=e(91146),u=function(t,c){return n.createElement(a.Z,(0,o.Z)((0,o.Z)({},t),{},{ref:c,icon:P.Z}))};u.displayName="PlusOutlined",f.Z=n.forwardRef(u)},5966:function(C,f,e){var o=e(1413),n=e(91),P=e(62435),a=e(19617),u=e(86074),y=["fieldProps","proFieldProps"],t=["fieldProps","proFieldProps"],c="text",Z=function(v){var R=v.fieldProps,h=v.proFieldProps,g=(0,n.Z)(v,y);return(0,u.jsx)(a.Z,(0,o.Z)({valueType:c,fieldProps:R,filedConfig:{valueType:c},proFieldProps:h},g))},A=function(v){var R=v.fieldProps,h=v.proFieldProps,g=(0,n.Z)(v,t);return(0,u.jsx)(a.Z,(0,o.Z)({valueType:"password",fieldProps:R,proFieldProps:h,filedConfig:{valueType:c}},g))},O=Z;O.Password=A,O.displayName="ProFormComponent",f.Z=O},85325:function(C,f,e){e.r(f),e.d(f,{default:function(){return Y}});var o=e(15009),n=e.n(o),P=e(99289),a=e.n(P),u=e(5574),y=e.n(u),t=e(35312);function c(d){return Z.apply(this,arguments)}function Z(){return Z=a()(n()().mark(function d(p){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,t.request)("localization/list",{params:p}));case 1:case"end":return r.stop()}},d)})),Z.apply(this,arguments)}function A(d){return O.apply(this,arguments)}function O(){return O=a()(n()().mark(function d(p){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,t.request)("localization/add",{method:"POST",data:p}));case 1:case"end":return r.stop()}},d)})),O.apply(this,arguments)}function j(d){return v.apply(this,arguments)}function v(){return v=a()(n()().mark(function d(p){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,t.request)("localization/save",{method:"POST",data:p}));case 1:case"end":return r.stop()}},d)})),v.apply(this,arguments)}function R(d){return h.apply(this,arguments)}function h(){return h=a()(n()().mark(function d(p){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,t.request)("localization/delete/".concat(p),{method:"POST"}));case 1:case"end":return r.stop()}},d)})),h.apply(this,arguments)}var g=e(47389),z=e(82061),B=e(51042),S=e(63386),$=e(88518),N=e(93933),x=e(5966),I=e(27790),F=e(71577),G=e(86738),K=e(62435),s=e(86074),V=function(){var p=(0,t.useIntl)(),D=(0,K.useRef)(),r=(0,K.useRef)(),w=(0,K.useState)(!1),W=y()(w,2),H=W[0],L=W[1],J=function(){var l;(l=D.current)===null||l===void 0||l.resetFields(),L(!0)},Q=function(l){var i;(i=D.current)===null||i===void 0||i.setFields([{name:"id",value:l.id},{name:"key",value:l.key},{name:"value",value:l.value}]),L(!0)},X=function(){var _=a()(n()().mark(function l(i){var E,M;return n()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,R(i);case 2:E=T.sent,E.succeeded&&(I.ZP.success("Deleted!"),(M=r.current)===null||M===void 0||M.reload());case 4:case"end":return T.stop()}},l)}));return function(i){return _.apply(this,arguments)}}(),b=[{title:"#",valueType:"indexBorder"},{title:"Key",dataIndex:"key"},{title:"Value",dataIndex:"value"},{title:"",valueType:"option",render:function(l,i){return[(0,s.jsx)(F.ZP,{icon:(0,s.jsx)(g.Z,{}),type:"primary",onClick:function(){return Q(i)}},1),(0,s.jsx)(G.Z,{title:"Are you sure?",onConfirm:function(){return X(i.id)},children:(0,s.jsx)(F.ZP,{icon:(0,s.jsx)(z.Z,{}),type:"primary",danger:!0})},2)]}}],k=function(){var _=a()(n()().mark(function l(i){var E,M,U;return n()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(i.id){m.next=7;break}return m.next=3,A(i);case 3:M=m.sent,M.succeeded&&I.ZP.success("Saved!"),m.next=11;break;case 7:return m.next=9,j(i);case 9:U=m.sent,U.succeeded&&I.ZP.success("Saved!");case 11:L(!1),(E=r.current)===null||E===void 0||E.reload();case 13:case"end":return m.stop()}},l)}));return function(i){return _.apply(this,arguments)}}();return(0,s.jsxs)(S._z,{extra:(0,s.jsx)(F.ZP,{type:"primary",className:"flex gap-2 items-center",icon:(0,s.jsx)(B.Z,{}),onClick:J,children:(0,s.jsx)(t.FormattedMessage,{id:"general.new"})}),children:[(0,s.jsx)($.Z,{pagination:{defaultPageSize:8},actionRef:r,columns:b,request:c,rowKey:"id"}),(0,s.jsxs)(N.Y,{title:p.formatMessage({id:"menu.settings.localization"}),formRef:D,open:H,onOpenChange:L,onFinish:k,children:[(0,s.jsx)(x.Z,{name:"id",disabled:!0}),(0,s.jsx)(x.Z,{name:"key",label:"Key",rules:[{required:!0}]}),(0,s.jsx)(x.Z,{name:"value",label:"Value",rules:[{required:!0}]})]})]})},Y=V}}]);