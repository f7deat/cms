"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6122],{64317:function(F,R,e){var i=e(1413),r=e(91),M=e(86074),u=e(22270),l=e(62435),T=e(66758),m=e(15790),A=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],P=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],f=l.forwardRef(function(a,h){var C=a.fieldProps,L=a.children,v=a.params,U=a.proFieldProps,D=a.mode,o=a.valueEnum,I=a.request,K=a.showSearch,W=a.options,t=(0,r.Z)(a,A),s=(0,l.useContext)(T.Z);return(0,M.jsx)(m.Z,(0,i.Z)((0,i.Z)({valueEnum:(0,u.h)(o),request:I,params:v,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,i.Z)({options:W,mode:D,showSearch:K,getPopupContainer:s.getPopupContainer},C),ref:h,proFieldProps:U},t),{},{children:L}))}),S=l.forwardRef(function(a,h){var C=a.fieldProps,L=a.children,v=a.params,U=a.proFieldProps,D=a.mode,o=a.valueEnum,I=a.request,K=a.options,W=(0,r.Z)(a,P),t=(0,i.Z)({options:K,mode:D||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},C),s=(0,l.useContext)(T.Z);return(0,M.jsx)(m.Z,(0,i.Z)((0,i.Z)({valueEnum:(0,u.h)(o),request:I,params:v,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,i.Z)({getPopupContainer:s.getPopupContainer},t),ref:h,proFieldProps:U},W),{},{children:L}))}),d=f,E=S,p=d;p.SearchSelect=E,p.displayName="ProFormComponent",R.Z=p},5966:function(F,R,e){var i=e(1413),r=e(91),M=e(86074),u=e(15790),l=["fieldProps","proFieldProps"],T=["fieldProps","proFieldProps"],m="text",A=function(d){var E=d.fieldProps,p=d.proFieldProps,a=(0,r.Z)(d,l);return(0,M.jsx)(u.Z,(0,i.Z)({valueType:m,fieldProps:E,filedConfig:{valueType:m},proFieldProps:p},a))},P=function(d){var E=d.fieldProps,p=d.proFieldProps,a=(0,r.Z)(d,T);return(0,M.jsx)(u.Z,(0,i.Z)({valueType:"password",fieldProps:E,proFieldProps:p,filedConfig:{valueType:m}},a))},f=A;f.Password=P,f.displayName="ProFormComponent",R.Z=f},16507:function(F,R,e){e.d(R,{Z:function(){return d}});var i=e(5574),r=e.n(i),M=e(90905);function u(){return(0,M.request)("component/list-all")}function l(E){return request("component/add",{method:"POST",data:E})}var T=e(99351),m=e(5966),A=e(64317),P=e(62435),f=e(86074),S=function(p){var a=(0,P.useState)(),h=r()(a,2),C=h[0],L=h[1];return(0,P.useEffect)(function(){u().then(function(v){L(v.map(function(U){return{label:U.name,value:U.id}}))})},[]),(0,f.jsxs)(T.Y,{open:p.open,title:"Add component",onFinish:p.onFinish,onOpenChange:p.onOpenChange,children:[(0,f.jsx)(m.Z,{name:"name",label:"Name"}),(0,f.jsx)(A.Z,{showSearch:!0,options:C,name:"componentId",label:"Component"})]})},d=S},27161:function(F,R,e){e.r(R);var i=e(15009),r=e.n(i),M=e(99289),u=e.n(M),l=e(5574),T=e.n(l),m=e(16507),A=e(61614),P=e(66352),f=e(13728),S=e(24969),d=e(86548),E=e(48689),p=e(62884),a=e(22538),h=e(90905),C=e(27790),L=e(13013),v=e(71577),U=e(86738),D=e(62435),o=e(86074),I=function(){var W=(0,h.useParams)(),t=W.id,s=(0,D.useRef)(),_=(0,D.useState)(!1),n=T()(_,2),w=n[0],b=n[1],$=(0,D.useState)(),x=T()($,2),Z=x[0],G=x[1];(0,D.useEffect)(function(){(0,A.R4)(t).then(function(g){G(g)})},[]);var N=function(){var g=u()(r()().mark(function j(c){var O,B;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return c.catalogId=t,y.next=3,(0,P.yL)(c);case 3:O=y.sent,O.succeeded&&(C.ZP.success("Added!"),b(!1),(B=s.current)===null||B===void 0||B.reload());case 5:case"end":return y.stop()}},j)}));return function(c){return g.apply(this,arguments)}}(),V=function(){var g=u()(r()().mark(function j(c){var O,B;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,(0,P.zt)(c,t);case 2:O=y.sent,O.succeeded&&(C.ZP.success("Deleted!"),(B=s.current)===null||B===void 0||B.reload());case 4:case"end":return y.stop()}},j)}));return function(c){return g.apply(this,arguments)}}(),z=[{key:"1",label:(0,o.jsx)("a",{onClick:function(){return h.history.push("".concat(localStorage.getItem("wf_URL"),"article/").concat(Z==null?void 0:Z.normalizedName))},children:(0,o.jsx)(h.FormattedMessage,{id:"general.preview"})})},{key:"2",label:(0,o.jsx)("a",{onClick:u()(r()().mark(function g(){var j;return r()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,A.gY)(t);case 2:j=O.sent,j.succeeded&&C.ZP.success("Saved!");case 4:case"end":return O.stop()}},g)})),children:"Xu\u1EA5t b\u1EA3n"})},{key:"3",label:(0,o.jsx)("a",{children:"X\xF3a"}),danger:!0}];return(0,o.jsxs)(p._z,{title:Z==null?void 0:Z.name,extra:(0,o.jsx)(L.Z,{menu:{items:z},children:(0,o.jsx)(v.Z,{icon:(0,o.jsx)(f.Z,{})})}),children:[(0,o.jsx)(a.Rs,{toolBarRender:function(){return[(0,o.jsx)(v.Z,{onClick:function(){return b(!0)},type:"primary",icon:(0,o.jsx)(S.Z,{}),children:(0,o.jsx)(h.FormattedMessage,{id:"general.new"})},0)]},rowSelection:{},actionRef:s,request:u()(r()().mark(function g(){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,P.KC)(t));case 1:case"end":return c.stop()}},g)})),headerTitle:"Work items",metas:{title:{dataIndex:"name"},actions:{render:function(j,c){return[(0,o.jsx)(v.Z,{type:"primary",icon:(0,o.jsx)(d.Z,{}),onClick:function(){h.history.push("/works/".concat(c.normalizedName.toLocaleLowerCase(),"/").concat(c.id))}},1),(0,o.jsxs)(U.Z,{title:"Are you sure?",onConfirm:function(){return V(c.id)},children:[(0,o.jsx)(v.Z,{icon:(0,o.jsx)(E.Z,{}),danger:!0,type:"primary"}),","]},4)]}}}}),(0,o.jsx)(m.Z,{open:w,onOpenChange:b,onFinish:N})]})};R.default=I},61614:function(F,R,e){e.d(R,{A$:function(){return d},BA:function(){return L},BP:function(){return f},R4:function(){return A},S8:function(){return h},_V:function(){return o},gY:function(){return K},j7:function(){return T},jr:function(){return p},m6:function(){return U}});var i=e(15009),r=e.n(i),M=e(99289),u=e.n(M),l=e(90905);function T(t){return m.apply(this,arguments)}function m(){return m=u()(r()().mark(function t(s){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("catalog/entry/".concat(s)));case 1:case"end":return n.stop()}},t)})),m.apply(this,arguments)}function A(t){return P.apply(this,arguments)}function P(){return P=u()(r()().mark(function t(s){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("catalog/".concat(s)));case 1:case"end":return n.stop()}},t)})),P.apply(this,arguments)}function f(t){return S.apply(this,arguments)}function S(){return S=u()(r()().mark(function t(s){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("catalog/add",{method:"POST",data:s}));case 1:case"end":return n.stop()}},t)})),S.apply(this,arguments)}function d(t){return E.apply(this,arguments)}function E(){return E=u()(r()().mark(function t(s){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("catalog/list",{method:"GET",params:s}));case 1:case"end":return n.stop()}},t)})),E.apply(this,arguments)}function p(){return a.apply(this,arguments)}function a(){return a=u()(r()().mark(function t(){return r()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,l.request)("catalog/tree"));case 1:case"end":return _.stop()}},t)})),a.apply(this,arguments)}function h(t){return C.apply(this,arguments)}function C(){return C=u()(r()().mark(function t(s){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("catalog/delete/".concat(s),{method:"POST"}));case 1:case"end":return n.stop()}},t)})),C.apply(this,arguments)}function L(t){return v.apply(this,arguments)}function v(){return v=u()(r()().mark(function t(s){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("catalog/save",{method:"POST",data:s}));case 1:case"end":return n.stop()}},t)})),v.apply(this,arguments)}function U(t){return D.apply(this,arguments)}function D(){return D=u()(r()().mark(function t(s){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("catalog/tree-drop",{method:"POST",data:s}));case 1:case"end":return n.stop()}},t)})),D.apply(this,arguments)}function o(){return I.apply(this,arguments)}function I(){return I=u()(r()().mark(function t(){return r()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,l.request)("catalog/view-count"));case 1:case"end":return _.stop()}},t)})),I.apply(this,arguments)}function K(t){return W.apply(this,arguments)}function W(){return W=u()(r()().mark(function t(s){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("catalog/active/".concat(s),{method:"POST"}));case 1:case"end":return n.stop()}},t)})),W.apply(this,arguments)}}}]);
