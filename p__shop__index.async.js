"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6597],{5966:function(B,f,r){var O=r(1413),_=r(91),D=r(86074),s=r(15790),u=["fieldProps","proFieldProps"],g=["fieldProps","proFieldProps"],c="text",M=function(o){var d=o.fieldProps,E=o.proFieldProps,l=(0,_.Z)(o,u);return(0,D.jsx)(s.Z,(0,O.Z)({valueType:c,fieldProps:d,filedConfig:{valueType:c},proFieldProps:E},l))},m=function(o){var d=o.fieldProps,E=o.proFieldProps,l=(0,_.Z)(o,g);return(0,D.jsx)(s.Z,(0,O.Z)({valueType:"password",fieldProps:d,proFieldProps:E,filedConfig:{valueType:c}},l))},p=M;p.Password=m,p.displayName="ProFormComponent",f.Z=p},58765:function(B,f,r){r.r(f);var O=r(97857),_=r.n(O),D=r(15009),s=r.n(D),u=r(99289),g=r.n(u),c=r(5574),M=r.n(c),m=r(55375),p=r(61614),P=r(24969),o=r(62884),d=r(22257),E=r(99351),l=r(5966),b=r(90905),h=r(27790),U=r(71577),v=r(62435),i=r(86074),C=function(){var t=(0,b.useIntl)(),a=(0,v.useState)(!1),e=M()(a,2),K=e[0],R=e[1],I=(0,v.useRef)(),L=function(){var y=g()(s()().mark(function j(W){var S,A;return s()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,(0,p.BP)(W);case 2:S=T.sent,S.succeeded?(h.ZP.success(t.formatMessage({id:"general.added"})),R(!1),(A=I.current)===null||A===void 0||A.reload()):h.ZP.error(S.errors[0].description);case 4:case"end":return T.stop()}},j)}));return function(W){return y.apply(this,arguments)}}(),F=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"}];return(0,i.jsxs)(o._z,{extra:(0,i.jsx)(U.Z,{type:"primary",icon:(0,i.jsx)(P.Z,{}),onClick:function(){return R(!0)},children:(0,i.jsx)(b.FormattedMessage,{id:"general.new"})}),children:[(0,i.jsx)(d.Z,{rowKey:"id",columns:F,actionRef:I,request:function(j){return(0,p.A$)(_()({type:m.H.Shop},j))}}),(0,i.jsxs)(E.Y,{onFinish:L,open:K,onOpenChange:R,title:t.formatMessage({id:"general.new"}),children:[(0,i.jsx)(l.Z,{label:"Name",name:"name",required:!0}),(0,i.jsx)(l.Z,{label:"Normalized name",name:"normalizedName"}),(0,i.jsx)(l.Z,{name:"type",initialValue:m.H.Shop,hidden:!0})]})]})};f.default=C},61614:function(B,f,r){r.d(f,{A$:function(){return o},BA:function(){return U},BP:function(){return p},R4:function(){return M},j7:function(){return g},jr:function(){return E},m6:function(){return i}});var O=r(15009),_=r.n(O),D=r(99289),s=r.n(D),u=r(90905);function g(n){return c.apply(this,arguments)}function c(){return c=s()(_()().mark(function n(t){return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/entry/".concat(t)));case 1:case"end":return e.stop()}},n)})),c.apply(this,arguments)}function M(n){return m.apply(this,arguments)}function m(){return m=s()(_()().mark(function n(t){return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/".concat(t)));case 1:case"end":return e.stop()}},n)})),m.apply(this,arguments)}function p(n){return P.apply(this,arguments)}function P(){return P=s()(_()().mark(function n(t){return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/add",{method:"POST",data:t}));case 1:case"end":return e.stop()}},n)})),P.apply(this,arguments)}function o(n){return d.apply(this,arguments)}function d(){return d=s()(_()().mark(function n(t){return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/list",{method:"GET",params:t}));case 1:case"end":return e.stop()}},n)})),d.apply(this,arguments)}function E(){return l.apply(this,arguments)}function l(){return l=s()(_()().mark(function n(){return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.request)("catalog/tree"));case 1:case"end":return a.stop()}},n)})),l.apply(this,arguments)}function b(n){return h.apply(this,arguments)}function h(){return h=_asyncToGenerator(_regeneratorRuntime().mark(function n(t){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/delete/".concat(t),{method:"POST"}));case 1:case"end":return e.stop()}},n)})),h.apply(this,arguments)}function U(n){return v.apply(this,arguments)}function v(){return v=s()(_()().mark(function n(t){return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/save",{method:"POST",data:t}));case 1:case"end":return e.stop()}},n)})),v.apply(this,arguments)}function i(n){return C.apply(this,arguments)}function C(){return C=s()(_()().mark(function n(t){return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/tree-drop",{method:"POST",data:t}));case 1:case"end":return e.stop()}},n)})),C.apply(this,arguments)}}}]);