"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2042],{88284:function(C,i,e){var a=e(1413),n=e(62435),c=e(32857),s=e(91146),r=function(u,v){return n.createElement(s.Z,(0,a.Z)((0,a.Z)({},u),{},{ref:v,icon:c.Z}))};r.displayName="CheckOutlined",i.Z=n.forwardRef(r)},82061:function(C,i,e){var a=e(1413),n=e(62435),c=e(47046),s=e(91146),r=function(u,v){return n.createElement(s.Z,(0,a.Z)((0,a.Z)({},u),{},{ref:v,icon:c.Z}))};r.displayName="DeleteOutlined",i.Z=n.forwardRef(r)},73944:function(C,i,e){e.r(i),e.d(i,{default:function(){return x}});var a=e(15009),n=e.n(a),c=e(99289),s=e.n(c),r=e(35312);function O(){return u.apply(this,arguments)}function u(){return u=s()(n()().mark(function f(){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,r.request)("log/list"));case 1:case"end":return o.stop()}},f)})),u.apply(this,arguments)}function v(f){return E.apply(this,arguments)}function E(){return E=s()(n()().mark(function f(m){return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,r.request)("log/delete/".concat(m),{method:"POST"}));case 1:case"end":return d.stop()}},f)})),E.apply(this,arguments)}var M=e(88284),R=e(82061),T=e(63386),L=e(80527),y=e(58301),Z=e(71577),j=e(86738),I=e(62435),t=e(86074),A=function(){var m=(0,I.useRef)(),o=function(){var D=s()(n()().mark(function g(l){var p,P;return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,v(l);case 2:p=h.sent,p.succeeded?(y.ZP.success("Deleted!"),(P=m.current)===null||P===void 0||P.reload()):y.ZP.error(p[0].description);case 4:case"end":return h.stop()}},g)}));return function(l){return D.apply(this,arguments)}}(),d=[{title:"#",valueType:"indexBorder"},{title:"Content",render:function(g,l){return(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"text-muted",children:l.userName})})}},{title:"Message",dataIndex:"message"},{title:"Date",dataIndex:"createdDate",valueType:"fromNow"},{title:"",valueType:"option",render:function(g,l){return[(0,t.jsx)(Z.ZP,{icon:(0,t.jsx)(M.Z,{}),type:"primary",hidden:l.status!==0},"publish"),(0,t.jsx)(j.Z,{title:"Are you sure?",onConfirm:function(){return o(l.id)},children:(0,t.jsx)(Z.ZP,{icon:(0,t.jsx)(R.Z,{}),type:"primary",danger:!0})},2)]}}];return(0,t.jsx)(T._z,{children:(0,t.jsx)(L.Z,{request:O,columns:d,actionRef:m,rowSelection:{}})})},x=A}}]);
