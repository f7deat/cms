"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6597],{5966:function(W,E,r){var O=r(1413),t=r(91),v=r(86074),s=r(15790),u=["fieldProps","proFieldProps"],T=["fieldProps","proFieldProps"],c="text",b=function(i){var d=i.fieldProps,f=i.proFieldProps,o=(0,t.Z)(i,u);return(0,v.jsx)(s.Z,(0,O.Z)({valueType:c,fieldProps:d,filedConfig:{valueType:c},proFieldProps:f},o))},m=function(i){var d=i.fieldProps,f=i.proFieldProps,o=(0,t.Z)(i,T);return(0,v.jsx)(s.Z,(0,O.Z)({valueType:"password",fieldProps:d,proFieldProps:f,filedConfig:{valueType:c}},o))},p=b;p.Password=m,p.displayName="ProFormComponent",E.Z=p},58765:function(W,E,r){r.r(E);var O=r(97857),t=r.n(O),v=r(15009),s=r.n(v),u=r(99289),T=r.n(u),c=r(5574),b=r.n(c),m=r(55375),p=r(61614),P=r(24969),i=r(62884),d=r(34545),f=r(99351),o=r(5966),j=r(90905),g=r(27790),K=r(71577),D=r(62435),l=r(86074),y=function(){var C=(0,j.useIntl)(),U=(0,D.useState)(!1),M=b()(U,2),A=M[0],h=M[1],n=(0,D.useRef)(),a=function(){var e=T()(s()().mark(function R(w){var B,I;return s()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,(0,p.BP)(w);case 2:B=S.sent,B.succeeded?(g.ZP.success(C.formatMessage({id:"general.added"})),h(!1),(I=n.current)===null||I===void 0||I.reload()):g.ZP.error(B.errors[0].description);case 4:case"end":return S.stop()}},R)}));return function(w){return e.apply(this,arguments)}}(),_=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"}];return(0,l.jsxs)(i._z,{extra:(0,l.jsx)(K.Z,{type:"primary",icon:(0,l.jsx)(P.Z,{}),onClick:function(){return h(!0)},children:(0,l.jsx)(j.FormattedMessage,{id:"general.new"})}),children:[(0,l.jsx)(d.Z,{rowKey:"id",columns:_,actionRef:n,request:function(R){return(0,p.A$)(t()({type:m.H.Shop},R))}}),(0,l.jsxs)(f.Y,{onFinish:a,open:A,onOpenChange:h,title:C.formatMessage({id:"general.new"}),children:[(0,l.jsx)(o.Z,{label:"Name",name:"name",required:!0}),(0,l.jsx)(o.Z,{label:"Normalized name",name:"normalizedName"}),(0,l.jsx)(o.Z,{name:"type",initialValue:m.H.Shop,hidden:!0})]})]})};E.default=y},61614:function(W,E,r){r.d(E,{A$:function(){return p},BA:function(){return j},BP:function(){return b},R4:function(){return T},S8:function(){return f},_V:function(){return l},gY:function(){return L},r5:function(){return A},zo:function(){return U}});var O=r(15009),t=r.n(O),v=r(99289),s=r.n(v),u=r(90905);function T(n){return c.apply(this,arguments)}function c(){return c=s()(t()().mark(function n(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/".concat(a)));case 1:case"end":return e.stop()}},n)})),c.apply(this,arguments)}function b(n){return m.apply(this,arguments)}function m(){return m=s()(t()().mark(function n(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/add",{method:"POST",data:a}));case 1:case"end":return e.stop()}},n)})),m.apply(this,arguments)}function p(n){return P.apply(this,arguments)}function P(){return P=s()(t()().mark(function n(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/list",{method:"GET",params:a}));case 1:case"end":return e.stop()}},n)})),P.apply(this,arguments)}function i(){return d.apply(this,arguments)}function d(){return d=_asyncToGenerator(_regeneratorRuntime().mark(function n(){return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",request("catalog/tree"));case 1:case"end":return _.stop()}},n)})),d.apply(this,arguments)}function f(n){return o.apply(this,arguments)}function o(){return o=s()(t()().mark(function n(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/delete/".concat(a),{method:"POST"}));case 1:case"end":return e.stop()}},n)})),o.apply(this,arguments)}function j(n){return g.apply(this,arguments)}function g(){return g=s()(t()().mark(function n(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},n)})),g.apply(this,arguments)}function K(n){return D.apply(this,arguments)}function D(){return D=_asyncToGenerator(_regeneratorRuntime().mark(function n(a){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("catalog/tree-drop",{method:"POST",data:a}));case 1:case"end":return e.stop()}},n)})),D.apply(this,arguments)}function l(){return y.apply(this,arguments)}function y(){return y=s()(t()().mark(function n(){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,u.request)("catalog/view-count"));case 1:case"end":return _.stop()}},n)})),y.apply(this,arguments)}function L(n){return C.apply(this,arguments)}function C(){return C=s()(t()().mark(function n(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/active/".concat(a),{method:"POST"}));case 1:case"end":return e.stop()}},n)})),C.apply(this,arguments)}function U(n){return M.apply(this,arguments)}function M(){return M=s()(t()().mark(function n(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/article/save",{method:"POST",data:a}));case 1:case"end":return e.stop()}},n)})),M.apply(this,arguments)}function A(n){return h.apply(this,arguments)}function h(){return h=s()(t()().mark(function n(a){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("catalog/update-thumbnail",{method:"POST",data:a}));case 1:case"end":return e.stop()}},n)})),h.apply(this,arguments)}}}]);
