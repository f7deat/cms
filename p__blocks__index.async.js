"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2244],{82061:function(j,m,n){var c=n(1413),t=n(62435),p=n(47046),i=n(91146),u=function(l,h){return t.createElement(i.Z,(0,c.Z)((0,c.Z)({},l),{},{ref:h,icon:p.Z}))};u.displayName="DeleteOutlined",m.Z=t.forwardRef(u)},99519:function(j,m,n){n.r(m);var c=n(15009),t=n.n(c),p=n(99289),i=n.n(p),u=n(98364),P=n(55725),l=n(82061),h=n(63386),E=n(88518),v=n(35312),d=n(27790),C=n(71577),f=n(86738),T=n(62435),o=n(86074),g=function(){var R=(0,T.useRef)(),D=function(){var s=i()(t()().mark(function a(e){var _,y;return t()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,u.v7)(e);case 2:_=O.sent,_.succeeded?(d.ZP.success("Deleted!"),(y=R.current)===null||y===void 0||y.reload()):d.ZP.error(_.errors[0].description);case 4:case"end":return O.stop()}},a)}));return function(e){return s.apply(this,arguments)}}(),r=[{title:"#",valueType:"indexBorder"},{title:"Name",render:function(a,e){return(0,o.jsx)("a",{onClick:function(){return v.history.push("/settings/component/center/".concat(e.id))},children:e.name})}},{title:"Normalized name",dataIndex:"normalizedName"},{title:"Status",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"",valueType:"option",render:function(a,e){return[(0,o.jsx)(C.ZP,{icon:(0,o.jsx)(P.Z,{}),onClick:function(){return v.history.push("/settings/component/center/".concat(e.id))}},"view"),(0,o.jsx)(f.Z,{title:"Are you sure?",onConfirm:function(){return D(e.id)},children:(0,o.jsx)(C.ZP,{icon:(0,o.jsx)(l.Z,{}),type:"primary",danger:!0})},2)]}}];return(0,o.jsx)(h._z,{children:(0,o.jsx)(E.Z,{actionRef:R,rowKey:"id",request:u.CO,columns:r,search:{layout:"vertical"}})})};m.default=g},98364:function(j,m,n){n.d(m,{CO:function(){return C},Ef:function(){return R},KL:function(){return v},Xr:function(){return P},Z:function(){return T},v7:function(){return g}});var c=n(15009),t=n.n(c),p=n(99289),i=n.n(p),u=n(35312);function P(r){return l.apply(this,arguments)}function l(){return l=i()(t()().mark(function r(s){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("component/".concat(s)));case 1:case"end":return e.stop()}},r)})),l.apply(this,arguments)}function h(r){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime().mark(function r(s){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("component/add",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),E.apply(this,arguments)}function v(r){return d.apply(this,arguments)}function d(){return d=i()(t()().mark(function r(s){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("component/update",{method:"POST",data:s}));case 1:case"end":return e.stop()}},r)})),d.apply(this,arguments)}function C(r){return f.apply(this,arguments)}function f(){return f=i()(t()().mark(function r(s){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("component/list",{params:s}));case 1:case"end":return e.stop()}},r)})),f.apply(this,arguments)}function T(r,s){return o.apply(this,arguments)}function o(){return o=i()(t()().mark(function r(s,a){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,u.request)("component/list-work/".concat(a),{params:s}));case 1:case"end":return _.stop()}},r)})),o.apply(this,arguments)}function g(r){return M.apply(this,arguments)}function M(){return M=i()(t()().mark(function r(s){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("component/delete/".concat(s),{method:"POST"}));case 1:case"end":return e.stop()}},r)})),M.apply(this,arguments)}function R(r){return D.apply(this,arguments)}function D(){return D=i()(t()().mark(function r(s){var a;return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return a={searchTerm:s.keyWords},_.abrupt("return",(0,u.request)("component/form-select",{params:a}));case 2:case"end":return _.stop()}},r)})),D.apply(this,arguments)}}}]);