"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1181],{63434:function(B,T,e){var l=e(1413),_=e(91),v=e(86074),a=e(22270),m=e(32808),R=e(62435),i=e(90789),j=e(15790),O=["options","fieldProps","proFieldProps","valueEnum"],D=R.forwardRef(function(o,u){var U=o.options,E=o.fieldProps,A=o.proFieldProps,C=o.valueEnum,r=(0,_.Z)(o,O);return(0,v.jsx)(j.Z,(0,l.Z)({ref:u,valueType:"checkbox",valueEnum:(0,a.h)(C,void 0),fieldProps:(0,l.Z)({options:U},E),lightProps:(0,l.Z)({labelFormatter:function(){return(0,v.jsx)(j.Z,(0,l.Z)({ref:u,valueType:"checkbox",mode:"read",valueEnum:(0,a.h)(C,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,l.Z)({options:U},E),proFieldProps:A},r))}},r.lightProps),proFieldProps:A},r))}),h=R.forwardRef(function(o,u){var U=o.fieldProps,E=o.children;return(0,v.jsx)(m.Z,(0,l.Z)((0,l.Z)({ref:u},U),{},{children:E}))}),d=(0,i.G)(h,{valuePropName:"checked"}),c=d;c.Group=D,T.Z=c},5966:function(B,T,e){var l=e(1413),_=e(91),v=e(86074),a=e(15790),m=["fieldProps","proFieldProps"],R=["fieldProps","proFieldProps"],i="text",j=function(d){var c=d.fieldProps,o=d.proFieldProps,u=(0,_.Z)(d,m);return(0,v.jsx)(a.Z,(0,l.Z)({valueType:i,fieldProps:c,filedConfig:{valueType:i},proFieldProps:o},u))},O=function(d){var c=d.fieldProps,o=d.proFieldProps,u=(0,_.Z)(d,R);return(0,v.jsx)(a.Z,(0,l.Z)({valueType:"password",fieldProps:c,proFieldProps:o,filedConfig:{valueType:i}},u))},D=j;D.Password=O,D.displayName="ProFormComponent",T.Z=D},81479:function(B,T,e){e.r(T);var l=e(15009),_=e.n(l),v=e(99289),a=e.n(v),m=e(5574),R=e.n(m),i=e(98364),j=e(66352),O=e(86548),D=e(48689),h=e(62884),d=e(34545),c=e(30029),o=e(97269),u=e(5966),U=e(63434),E=e(90905),A=e(27790),C=e(71577),r=e(86738),s=e(71230),p=e(15746),n=e(62435),t=e(86074),F=function(){var S=(0,E.useParams)(),y=S.id,Z=(0,n.useRef)(),b=(0,n.useRef)(),$=(0,n.useState)(),x=R()($,2),g=x[0],G=x[1];(0,n.useEffect)(function(){(0,i.Xr)(y).then(function(f){var P;G(f),(P=b.current)===null||P===void 0||P.setFields([{name:"id",value:f.id},{name:"name",value:f.name},{name:"avtive",value:f.active}])})},[]);var N=function(){var f=a()(_()().mark(function P(M){var W,L;return _()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,(0,j.Js)(M);case 2:W=K.sent,W.succeeded&&(A.ZP.success("Deleted!"),(L=Z.current)===null||L===void 0||L.reload());case 4:case"end":return K.stop()}},P)}));return function(M){return f.apply(this,arguments)}}(),w=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:"Active",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"",valueType:"option",render:function(P,M){return[(0,t.jsx)(C.Z,{icon:(0,t.jsx)(O.Z,{}),type:"primary",onClick:function(){return E.history.push("/works/".concat(M.normalizedName,"/").concat(M.id))}},1),(0,t.jsx)(r.Z,{title:"Are you sure?",onConfirm:function(){return N(M.id)},children:(0,t.jsx)(C.Z,{icon:(0,t.jsx)(D.Z,{}),type:"primary",danger:!0})},3)]}}],z=function(){var f=a()(_()().mark(function P(M){var W;return _()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,(0,i.KL)(M);case 2:W=I.sent,W.succeeded&&A.ZP.success("Saved");case 4:case"end":return I.stop()}},P)}));return function(M){return f.apply(this,arguments)}}();return(0,t.jsx)(h._z,{title:g==null?void 0:g.name,children:(0,t.jsxs)(s.Z,{gutter:16,children:[(0,t.jsx)(p.Z,{span:16,children:(0,t.jsx)(d.Z,{actionRef:Z,columns:w,rowKey:"id",request:function(P){return(0,i.Z)(P,y)}})}),(0,t.jsx)(p.Z,{span:8,children:(0,t.jsx)(c.Z,{title:"Info",children:(0,t.jsxs)(o.A,{formRef:b,onFinish:z,children:[(0,t.jsx)(u.Z,{name:"id",hidden:!0}),(0,t.jsx)(u.Z,{label:"Name",name:"name"}),(0,t.jsx)(U.Z,{label:"Active",name:"active"})]})})})]})})};T.default=F},98364:function(B,T,e){e.d(T,{CO:function(){return d},Ef:function(){return A},KL:function(){return D},Xr:function(){return R},Z:function(){return o},v7:function(){return U}});var l=e(15009),_=e.n(l),v=e(99289),a=e.n(v),m=e(90905);function R(r){return i.apply(this,arguments)}function i(){return i=a()(_()().mark(function r(s){return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("component/".concat(s)));case 1:case"end":return n.stop()}},r)})),i.apply(this,arguments)}function j(r){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime().mark(function r(s){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("component/add",{method:"POST",data:s}));case 1:case"end":return n.stop()}},r)})),O.apply(this,arguments)}function D(r){return h.apply(this,arguments)}function h(){return h=a()(_()().mark(function r(s){return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("component/update",{method:"POST",data:s}));case 1:case"end":return n.stop()}},r)})),h.apply(this,arguments)}function d(r){return c.apply(this,arguments)}function c(){return c=a()(_()().mark(function r(s){return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("component/list",{params:s}));case 1:case"end":return n.stop()}},r)})),c.apply(this,arguments)}function o(r,s){return u.apply(this,arguments)}function u(){return u=a()(_()().mark(function r(s,p){return _()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,m.request)("component/list-work/".concat(p),{params:s}));case 1:case"end":return t.stop()}},r)})),u.apply(this,arguments)}function U(r){return E.apply(this,arguments)}function E(){return E=a()(_()().mark(function r(s){return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("component/delete/".concat(s),{method:"POST"}));case 1:case"end":return n.stop()}},r)})),E.apply(this,arguments)}function A(r){return C.apply(this,arguments)}function C(){return C=a()(_()().mark(function r(s){var p;return _()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p={searchTerm:s.keyWords},t.abrupt("return",(0,m.request)("component/form-select",{params:p}));case 2:case"end":return t.stop()}},r)})),C.apply(this,arguments)}}}]);
