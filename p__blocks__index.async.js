"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2244],{82061:function(g,m,n){var c=n(1413),s=n(62435),p=n(47046),o=n(91146),u=function(l,M){return s.createElement(o.Z,(0,c.Z)((0,c.Z)({},l),{},{ref:M,icon:p.Z}))};u.displayName="DeleteOutlined",m.Z=s.forwardRef(u)},99519:function(g,m,n){n.r(m);var c=n(15009),s=n.n(c),p=n(99289),o=n.n(p),u=n(98364),v=n(82061),l=n(63386),M=n(88518),f=n(35312),C=n(27790),E=n(86738),R=n(71577),D=n(62435),i=n(86074),O=function(){var d=(0,D.useRef)(),T=function(){var r=o()(s()().mark(function t(_){var e,a;return s()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,u.v7)(_);case 2:e=P.sent,e.succeeded?(C.ZP.success("Deleted!"),(a=d.current)===null||a===void 0||a.reload()):C.ZP.error(e.errors[0].description);case 4:case"end":return P.stop()}},t)}));return function(_){return r.apply(this,arguments)}}(),h=[{title:"#",valueType:"indexBorder"},{title:"Name",render:function(t,_){return(0,i.jsx)("a",{onClick:function(){return f.history.push("/settings/component/center/".concat(_.id))},children:_.name})}},{title:"Normalized name",dataIndex:"normalizedName"},{title:"Status",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"",valueType:"option",render:function(t,_){return[(0,i.jsx)(E.Z,{title:"Are you sure?",onConfirm:function(){return T(_.id)},children:(0,i.jsx)(R.ZP,{icon:(0,i.jsx)(v.Z,{}),type:"primary",danger:!0})},2)]}}];return(0,i.jsx)(l._z,{children:(0,i.jsx)(M.Z,{actionRef:d,rowKey:"id",request:u.CO,columns:h,search:{layout:"vertical"}})})};m.default=O},98364:function(g,m,n){n.d(m,{CO:function(){return R},Ef:function(){return T},KL:function(){return C},Xr:function(){return v},Z:function(){return i},v7:function(){return y}});var c=n(15009),s=n.n(c),p=n(99289),o=n.n(p),u=n(35312);function v(r){return l.apply(this,arguments)}function l(){return l=o()(s()().mark(function r(t){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("component/".concat(t)));case 1:case"end":return e.stop()}},r)})),l.apply(this,arguments)}function M(r){return f.apply(this,arguments)}function f(){return f=_asyncToGenerator(_regeneratorRuntime().mark(function r(t){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("component/add",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),f.apply(this,arguments)}function C(r){return E.apply(this,arguments)}function E(){return E=o()(s()().mark(function r(t){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("component/update",{method:"POST",data:t}));case 1:case"end":return e.stop()}},r)})),E.apply(this,arguments)}function R(r){return D.apply(this,arguments)}function D(){return D=o()(s()().mark(function r(t){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("component/list",{params:t}));case 1:case"end":return e.stop()}},r)})),D.apply(this,arguments)}function i(r,t){return O.apply(this,arguments)}function O(){return O=o()(s()().mark(function r(t,_){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.request)("component/list-work/".concat(_),{params:t}));case 1:case"end":return a.stop()}},r)})),O.apply(this,arguments)}function y(r){return d.apply(this,arguments)}function d(){return d=o()(s()().mark(function r(t){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("component/delete/".concat(t),{method:"POST"}));case 1:case"end":return e.stop()}},r)})),d.apply(this,arguments)}function T(r){return h.apply(this,arguments)}function h(){return h=o()(s()().mark(function r(t){var _;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return _={searchTerm:t.keyWords},a.abrupt("return",(0,u.request)("component/form-select",{params:_}));case 2:case"end":return a.stop()}},r)})),h.apply(this,arguments)}}}]);
