"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6498],{82061:function(f,d,e){var r=e(1413),n=e(62435),l=e(47046),o=e(91146),a=function(s,i){return n.createElement(o.Z,(0,r.Z)((0,r.Z)({},s),{},{ref:i,icon:l.Z}))};a.displayName="DeleteOutlined",d.Z=n.forwardRef(a)},55287:function(f,d,e){var r=e(1413),n=e(62435),l=e(5717),o=e(91146),a=function(s,i){return n.createElement(o.Z,(0,r.Z)((0,r.Z)({},s),{},{ref:i,icon:l.Z}))};a.displayName="EyeOutlined",d.Z=n.forwardRef(a)},97404:function(f,d,e){e.r(d),e.d(d,{default:function(){return I}});var r=e(15009),n=e.n(r),l=e(99289),o=e.n(l),a=e(35312);function E(m){return s.apply(this,arguments)}function s(){return s=o()(n()().mark(function m(O){return n()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,a.request)("order/list",{params:O}));case 1:case"end":return u.stop()}},m)})),s.apply(this,arguments)}var i=e(55287),P=e(82061),x=e(63386),y=e(88518),c=e(71577),p=e(42075),t=e(86074),Z=function(){var O=[{title:"#",valueType:"indexBorder"},{title:"ID",render:function(u,v){return(0,t.jsx)("a",{children:v.id})}},{title:"Date",dataIndex:"createdDate",valueType:"fromNow",search:!1},{title:"status",dataIndex:"status",valueEnum:{0:{text:"Open",status:"Processing"},1:{text:"Confirmed",status:"Processing"},2:{text:"Paid",status:"Success"},3:{text:"Refunded",status:"Default"},4:{text:"Cancelled",status:"Error"}}},{title:"customer",dataIndex:"customer"},{title:"product",dataIndex:"product"},{title:"revenua",dataIndex:"revenua"},{title:"",valueType:"option",render:function(u,v){return[(0,t.jsx)(c.ZP,{icon:(0,t.jsx)(i.Z,{}),type:"primary"},v.id),(0,t.jsx)(c.ZP,{icon:(0,t.jsx)(P.Z,{}),type:"primary",danger:!0},v.id)]}}];return(0,t.jsx)(x._z,{extra:(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(c.ZP,{type:"primary",children:"New order"}),(0,t.jsx)(c.ZP,{children:"Export"})]}),children:(0,t.jsx)(y.Z,{rowKey:"id",columns:O,request:E})})},I=Z}}]);