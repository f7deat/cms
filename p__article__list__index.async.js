"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9352],{63434:function(S,D,e){var l=e(1413),t=e(91),f=e(86074),s=e(22270),o=e(32808),v=e(62435),P=e(90789),g=e(15790),c=["options","fieldProps","proFieldProps","valueEnum"],E=v.forwardRef(function(i,m){var T=i.options,O=i.fieldProps,B=i.proFieldProps,y=i.valueEnum,M=(0,t.Z)(i,c);return(0,f.jsx)(g.Z,(0,l.Z)({ref:m,valueType:"checkbox",valueEnum:(0,s.h)(y,void 0),fieldProps:(0,l.Z)({options:T},O),lightProps:(0,l.Z)({labelFormatter:function(){return(0,f.jsx)(g.Z,(0,l.Z)({ref:m,valueType:"checkbox",mode:"read",valueEnum:(0,s.h)(y,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,l.Z)({options:T},O),proFieldProps:B},M))}},M.lightProps),proFieldProps:B},M))}),h=v.forwardRef(function(i,m){var T=i.fieldProps,O=i.children;return(0,f.jsx)(o.Z,(0,l.Z)((0,l.Z)({ref:m},T),{},{children:O}))}),d=(0,P.G)(h,{valuePropName:"checked"}),p=d;p.Group=E,D.Z=p},90672:function(S,D,e){var l=e(1413),t=e(91),f=e(86074),s=e(62435),o=e(15790),v=["fieldProps","proFieldProps"],P=function(c,E){var h=c.fieldProps,d=c.proFieldProps,p=(0,t.Z)(c,v);return(0,f.jsx)(o.Z,(0,l.Z)({ref:E,valueType:"textarea",fieldProps:h,proFieldProps:d},p))};D.Z=s.forwardRef(P)},5966:function(S,D,e){var l=e(1413),t=e(91),f=e(86074),s=e(15790),o=["fieldProps","proFieldProps"],v=["fieldProps","proFieldProps"],P="text",g=function(d){var p=d.fieldProps,i=d.proFieldProps,m=(0,t.Z)(d,o);return(0,f.jsx)(s.Z,(0,l.Z)({valueType:P,fieldProps:p,filedConfig:{valueType:P},proFieldProps:i},m))},c=function(d){var p=d.fieldProps,i=d.proFieldProps,m=(0,t.Z)(d,v);return(0,f.jsx)(s.Z,(0,l.Z)({valueType:"password",fieldProps:p,proFieldProps:i,filedConfig:{valueType:P}},m))},E=g;E.Password=c,E.displayName="ProFormComponent",D.Z=E},43668:function(S,D,e){e.r(D);var l=e(97857),t=e.n(l),f=e(15009),s=e.n(f),o=e(99289),v=e.n(o),P=e(5574),g=e.n(P),c=e(55375),E=e(61614),h=e(86548),d=e(48689),p=e(24969),i=e(62884),m=e(34545),T=e(99351),O=e(5966),B=e(90672),y=e(63434),M=e(90905),A=e(27790),I=e(71577),W=e(86738),Z=e(62435),u=e(86074),w=function(){var $=(0,M.useIntl)(),L=(0,Z.useState)(!1),n=g()(L,2),_=n[0],a=n[1],r=(0,Z.useRef)(),G=function(){var U=v()(s()().mark(function R(j){var C;return s()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,(0,E.BP)(j);case 2:C=b.sent,C.succeeded?(a(!1),M.history.push("/article/center/".concat(C.data.id))):A.ZP.error(C.errors[0].description);case 4:case"end":return b.stop()}},R)}));return function(j){return U.apply(this,arguments)}}(),V=function(){var U=v()(s()().mark(function R(j){var C,x;return s()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,(0,E.S8)(j);case 2:C=K.sent,C.succeeded?(A.ZP.success("Deleted"),(x=r.current)===null||x===void 0||x.reload()):A.ZP.error(C.errors[0].description);case 4:case"end":return K.stop()}},R)}));return function(j){return U.apply(this,arguments)}}(),N=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:"View count",dataIndex:"viewCount",search:!1,valueType:"digit"},{title:"Modified date",dataIndex:"modifiedDate",valueType:"fromNow",search:!1},{title:"Active",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"",valueType:"option",render:function(R,j){return[(0,u.jsx)(I.Z,{icon:(0,u.jsx)(h.Z,{}),type:"primary",onClick:function(){return M.history.push("/article/center/".concat(j.id))}},1),(0,u.jsx)(W.Z,{title:"Are you sure?",onConfirm:function(){return V(j.id)},children:(0,u.jsx)(I.Z,{icon:(0,u.jsx)(d.Z,{}),type:"primary",danger:!0})},2)]}}];return(0,u.jsxs)(i._z,{extra:(0,u.jsx)(I.Z,{type:"primary",icon:(0,u.jsx)(p.Z,{}),onClick:function(){return a(!0)},children:(0,u.jsx)(M.FormattedMessage,{id:"general.new"})}),children:[(0,u.jsx)(m.Z,{rowKey:"id",request:function(R){return(0,E.A$)(t()({type:c.H.Article},R))},columns:N,actionRef:r}),(0,u.jsxs)(T.Y,{open:_,onOpenChange:a,onFinish:G,title:$.formatMessage({id:"general.new"}),children:[(0,u.jsx)(O.Z,{label:"Name",name:"name",rules:[{required:!0}]}),(0,u.jsx)(B.Z,{label:"Description",name:"description"}),(0,u.jsx)(O.Z,{name:"type",initialValue:c.H.Article,hidden:!0}),(0,u.jsx)(y.Z,{name:"active",initialValue:!1,hidden:!0})]})]})};D.default=w},61614:function(S,D,e){e.d(D,{A$:function(){return E},BA:function(){return T},BP:function(){return g},R4:function(){return v},S8:function(){return i},Z9:function(){return $},_V:function(){return M},gY:function(){return I},r5:function(){return w},zo:function(){return Z}});var l=e(15009),t=e.n(l),f=e(99289),s=e.n(f),o=e(90905);function v(n){return P.apply(this,arguments)}function P(){return P=s()(t()().mark(function n(_){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/".concat(_)));case 1:case"end":return r.stop()}},n)})),P.apply(this,arguments)}function g(n){return c.apply(this,arguments)}function c(){return c=s()(t()().mark(function n(_){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/add",{method:"POST",data:_}));case 1:case"end":return r.stop()}},n)})),c.apply(this,arguments)}function E(n){return h.apply(this,arguments)}function h(){return h=s()(t()().mark(function n(_){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/list",{method:"GET",params:_}));case 1:case"end":return r.stop()}},n)})),h.apply(this,arguments)}function d(){return p.apply(this,arguments)}function p(){return p=_asyncToGenerator(_regeneratorRuntime().mark(function n(){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("catalog/tree"));case 1:case"end":return a.stop()}},n)})),p.apply(this,arguments)}function i(n){return m.apply(this,arguments)}function m(){return m=s()(t()().mark(function n(_){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/delete/".concat(_),{method:"POST"}));case 1:case"end":return r.stop()}},n)})),m.apply(this,arguments)}function T(n){return O.apply(this,arguments)}function O(){return O=s()(t()().mark(function n(_){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/save",{method:"POST",data:_}));case 1:case"end":return r.stop()}},n)})),O.apply(this,arguments)}function B(n){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime().mark(function n(_){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",request("catalog/tree-drop",{method:"POST",data:_}));case 1:case"end":return r.stop()}},n)})),y.apply(this,arguments)}function M(){return A.apply(this,arguments)}function A(){return A=s()(t()().mark(function n(){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,o.request)("catalog/view-count"));case 1:case"end":return a.stop()}},n)})),A.apply(this,arguments)}function I(n){return W.apply(this,arguments)}function W(){return W=s()(t()().mark(function n(_){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/active/".concat(_),{method:"POST"}));case 1:case"end":return r.stop()}},n)})),W.apply(this,arguments)}function Z(n){return u.apply(this,arguments)}function u(){return u=s()(t()().mark(function n(_){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/article/save",{method:"POST",data:_}));case 1:case"end":return r.stop()}},n)})),u.apply(this,arguments)}function w(n){return F.apply(this,arguments)}function F(){return F=s()(t()().mark(function n(_){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,o.request)("catalog/update-thumbnail",{method:"POST",data:_}));case 1:case"end":return r.stop()}},n)})),F.apply(this,arguments)}function $(){return L.apply(this,arguments)}function L(){return L=s()(t()().mark(function n(){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,o.request)("catalog/types"));case 1:case"end":return a.stop()}},n)})),L.apply(this,arguments)}}}]);
