"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7325],{63434:function(L,M,e){var r=e(1413),t=e(91),l=e(86074),P=e(22270),d=e(32808),p=e(62435),E=e(90789),h=e(15790),u=["options","fieldProps","proFieldProps","valueEnum"],c=p.forwardRef(function(o,_){var v=o.options,i=o.fieldProps,s=o.proFieldProps,T=o.valueEnum,D=(0,t.Z)(o,u);return(0,l.jsx)(h.Z,(0,r.Z)({ref:_,valueType:"checkbox",valueEnum:(0,P.h)(T,void 0),fieldProps:(0,r.Z)({options:v},i),lightProps:(0,r.Z)({labelFormatter:function(){return(0,l.jsx)(h.Z,(0,r.Z)({ref:_,valueType:"checkbox",mode:"read",valueEnum:(0,P.h)(T,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:v},i),proFieldProps:s},D))}},D.lightProps),proFieldProps:s},D))}),f=p.forwardRef(function(o,_){var v=o.fieldProps,i=o.children;return(0,l.jsx)(d.Z,(0,r.Z)((0,r.Z)({ref:_},v),{},{children:i}))}),n=(0,E.G)(f,{valuePropName:"checked"}),a=n;a.Group=c,M.Z=a},31199:function(L,M,e){var r=e(1413),t=e(91),l=e(86074),P=e(62435),d=e(15790),p=["fieldProps","min","proFieldProps","max"],E=function(u,c){var f=u.fieldProps,n=u.min,a=u.proFieldProps,o=u.max,_=(0,t.Z)(u,p);return(0,l.jsx)(d.Z,(0,r.Z)({valueType:"digit",fieldProps:(0,r.Z)({min:n,max:o},f),ref:c,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:a},_))};M.Z=P.forwardRef(E)},64317:function(L,M,e){var r=e(1413),t=e(91),l=e(86074),P=e(22270),d=e(62435),p=e(66758),E=e(15790),h=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],u=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],c=d.forwardRef(function(_,v){var i=_.fieldProps,s=_.children,T=_.params,D=_.proFieldProps,O=_.mode,R=_.valueEnum,W=_.request,A=_.showSearch,m=_.options,U=(0,t.Z)(_,h),C=(0,d.useContext)(p.Z);return(0,l.jsx)(E.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,P.h)(R),request:W,params:T,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:m,mode:O,showSearch:A,getPopupContainer:C.getPopupContainer},i),ref:v,proFieldProps:D},U),{},{children:s}))}),f=d.forwardRef(function(_,v){var i=_.fieldProps,s=_.children,T=_.params,D=_.proFieldProps,O=_.mode,R=_.valueEnum,W=_.request,A=_.options,m=(0,t.Z)(_,u),U=(0,r.Z)({options:A,mode:O||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},i),C=(0,d.useContext)(p.Z);return(0,l.jsx)(E.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,P.h)(R),request:W,params:T,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({getPopupContainer:C.getPopupContainer},U),ref:v,proFieldProps:D},m),{},{children:s}))}),n=c,a=f,o=n;o.SearchSelect=a,o.displayName="ProFormComponent",M.Z=o},5966:function(L,M,e){var r=e(1413),t=e(91),l=e(86074),P=e(15790),d=["fieldProps","proFieldProps"],p=["fieldProps","proFieldProps"],E="text",h=function(n){var a=n.fieldProps,o=n.proFieldProps,_=(0,t.Z)(n,d);return(0,l.jsx)(P.Z,(0,r.Z)({valueType:E,fieldProps:a,filedConfig:{valueType:E},proFieldProps:o},_))},u=function(n){var a=n.fieldProps,o=n.proFieldProps,_=(0,t.Z)(n,p);return(0,l.jsx)(P.Z,(0,r.Z)({valueType:"password",fieldProps:a,proFieldProps:o,filedConfig:{valueType:E}},_))},c=h;c.Password=u,c.displayName="ProFormComponent",M.Z=c},85335:function(L,M,e){var r=e(15009),t=e.n(r),l=e(99289),P=e.n(l),d=e(66352),p=e(30029),E=e(97269),h=e(5966),u=e(63434),c=e(90905),f=e(27790),n=e(62435),a=e(86074),o=function(){var v=(0,c.useParams)(),i=v.id,s=(0,n.useRef)();(0,n.useEffect)(function(){(0,d.Mk)(i).then(function(D){var O;(O=s.current)===null||O===void 0||O.setFields([{name:"name",value:D.name},{name:"active",value:D.active}])})},[i]);var T=function(){var D=P()(t()().mark(function O(R){var W;return t()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,d.Qb)(R);case 2:W=m.sent,W.succeeded?f.ZP.success("Saved!"):f.ZP.error(W.errors[0].description);case 4:case"end":return m.stop()}},O)}));return function(R){return D.apply(this,arguments)}}();return(0,a.jsx)(p.Z,{title:"Info",children:(0,a.jsxs)(E.A,{formRef:s,onFinish:T,children:[(0,a.jsx)(h.Z,{hidden:!0,name:"id",initialValue:i}),(0,a.jsx)(h.Z,{name:"name",label:"Name"}),(0,a.jsx)(u.Z,{name:"active",label:"Active"})]})})};M.Z=o},91409:function(L,M,e){e.r(M);var r=e(15009),t=e.n(r),l=e(99289),P=e.n(l),d=e(85335),p=e(66352),E=e(62884),h=e(30029),u=e(97269),c=e(5966),f=e(64317),n=e(31199),a=e(90905),o=e(27790),_=e(71230),v=e(15746),i=e(62435),s=e(86074),T=function(){var O=(0,a.useParams)(),R=O.id,W=(0,i.useRef)();(0,i.useEffect)(function(){(0,p.Tu)(R).then(function(m){var U,C;(U=W.current)===null||U===void 0||U.setFields([{name:"name",value:m.name},{name:"type",value:(C=m.type)!==null&&C!==void 0?C:0},{name:"pageSize",value:m.pageSize}])})},[R]);var A=function(){var m=P()(t()().mark(function U(C){var I;return t()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return C.type=Number(C.type),F.next=3,(0,p.iH)(R,C);case 3:I=F.sent,I.succeeded&&o.ZP.success("Saved!");case 5:case"end":return F.stop()}},U)}));return function(C){return m.apply(this,arguments)}}();return(0,s.jsx)(E._z,{children:(0,s.jsxs)(_.Z,{gutter:16,children:[(0,s.jsx)(v.Z,{span:16,children:(0,s.jsx)(h.Z,{children:(0,s.jsxs)(u.A,{formRef:W,onFinish:A,children:[(0,s.jsx)(c.Z,{name:"name",label:"Name",rules:[{required:!0}]}),(0,s.jsx)(f.Z,{name:"type",label:"Type",rules:[{required:!0}],options:[{value:0,label:"Default"},{value:1,label:"Artice"},{value:2,label:"Shop"},{value:11,label:"Game"}]}),(0,s.jsx)(n.Z,{name:"pageSize",label:"Page size"})]})})}),(0,s.jsx)(v.Z,{span:8,children:(0,s.jsx)(d.Z,{})})]})})};M.default=T}}]);
