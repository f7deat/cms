"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9319],{63434:function(z,R,e){var a=e(1413),i=e(91),P=e(86074),l=e(22270),_=e(32808),C=e(62435),d=e(90789),O=e(15790),Z=["options","fieldProps","proFieldProps","valueEnum"],t=C.forwardRef(function(s,n){var m=s.options,c=s.fieldProps,v=s.proFieldProps,E=s.valueEnum,r=(0,i.Z)(s,Z);return(0,P.jsx)(O.Z,(0,a.Z)({ref:n,valueType:"checkbox",valueEnum:(0,l.h)(E,void 0),fieldProps:(0,a.Z)({options:m},c),lightProps:(0,a.Z)({labelFormatter:function(){return(0,P.jsx)(O.Z,(0,a.Z)({ref:n,valueType:"checkbox",mode:"read",valueEnum:(0,l.h)(E,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,a.Z)({options:m},c),proFieldProps:v},r))}},r.lightProps),proFieldProps:v},r))}),g=C.forwardRef(function(s,n){var m=s.fieldProps,c=s.children;return(0,P.jsx)(_.Z,(0,a.Z)((0,a.Z)({ref:n},m),{},{children:c}))}),o=(0,d.G)(g,{valuePropName:"checked"}),u=o;u.Group=t,R.Z=u},64317:function(z,R,e){var a=e(1413),i=e(91),P=e(86074),l=e(22270),_=e(62435),C=e(66758),d=e(15790),O=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],Z=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],t=_.forwardRef(function(n,m){var c=n.fieldProps,v=n.children,E=n.params,r=n.proFieldProps,f=n.mode,B=n.valueEnum,W=n.request,$=n.showSearch,D=n.options,N=(0,i.Z)(n,O),V=(0,_.useContext)(C.Z);return(0,P.jsx)(d.Z,(0,a.Z)((0,a.Z)({valueEnum:(0,l.h)(B),request:W,params:E,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,a.Z)({options:D,mode:f,showSearch:$,getPopupContainer:V.getPopupContainer},c),ref:m,proFieldProps:r},N),{},{children:v}))}),g=_.forwardRef(function(n,m){var c=n.fieldProps,v=n.children,E=n.params,r=n.proFieldProps,f=n.mode,B=n.valueEnum,W=n.request,$=n.options,D=(0,i.Z)(n,Z),N=(0,a.Z)({options:$,mode:f||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},c),V=(0,_.useContext)(C.Z);return(0,P.jsx)(d.Z,(0,a.Z)((0,a.Z)({valueEnum:(0,l.h)(B),request:W,params:E,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,a.Z)({getPopupContainer:V.getPopupContainer},N),ref:m,proFieldProps:r},D),{},{children:v}))}),o=t,u=g,s=o;s.SearchSelect=u,s.displayName="ProFormComponent",R.Z=s},5966:function(z,R,e){var a=e(1413),i=e(91),P=e(86074),l=e(15790),_=["fieldProps","proFieldProps"],C=["fieldProps","proFieldProps"],d="text",O=function(o){var u=o.fieldProps,s=o.proFieldProps,n=(0,i.Z)(o,_);return(0,P.jsx)(l.Z,(0,a.Z)({valueType:d,fieldProps:u,filedConfig:{valueType:d},proFieldProps:s},n))},Z=function(o){var u=o.fieldProps,s=o.proFieldProps,n=(0,i.Z)(o,C);return(0,P.jsx)(l.Z,(0,a.Z)({valueType:"password",fieldProps:u,proFieldProps:s,filedConfig:{valueType:d}},n))},t=O;t.Password=Z,t.displayName="ProFormComponent",R.Z=t},85335:function(z,R,e){var a=e(15009),i=e.n(a),P=e(99289),l=e.n(P),_=e(66352),C=e(30029),d=e(97269),O=e(5966),Z=e(63434),t=e(90905),g=e(27790),o=e(62435),u=e(86074),s=function(){var m=(0,t.useParams)(),c=m.id,v=(0,o.useRef)();(0,o.useEffect)(function(){(0,_.Mk)(c).then(function(r){var f;(f=v.current)===null||f===void 0||f.setFields([{name:"name",value:r.name},{name:"active",value:r.active}])})},[c]);var E=function(){var r=l()(i()().mark(function f(B){var W;return i()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,(0,_.Qb)(B);case 2:W=D.sent,W.succeeded?g.ZP.success("Saved!"):g.ZP.error(W.errors[0].description);case 4:case"end":return D.stop()}},f)}));return function(B){return r.apply(this,arguments)}}();return(0,u.jsx)(C.Z,{title:"Info",children:(0,u.jsxs)(d.A,{formRef:v,onFinish:E,children:[(0,u.jsx)(O.Z,{hidden:!0,name:"id",initialValue:c}),(0,u.jsx)(O.Z,{name:"name",label:"Name"}),(0,u.jsx)(Z.Z,{name:"active",label:"Active"})]})})};R.Z=s},96829:function(z,R,e){e.r(R),e.d(R,{default:function(){return q}});var a=e(5574),i=e.n(a),P=e(85335),l=e(66352),_=e(62884),C=e(30029),d=e(90905),O=e(71230),Z=e(15746),t=e(62435),g=e(15009),o=e.n(g),u=e(99289),s=e.n(u),n=e(97269),m=e(5966),c=e(64317),v=e(27790),E=e(71577),r=e(86074),f=function(T){var x=n.A.useFormInstance(),I=(0,t.useState)(!0),U=i()(I,2),M=U[0],S=U[1],K=(0,t.useState)(),L=i()(K,2),h=L[0],H=L[1],j=function(){var p=s()(o()().mark(function A(y){return o()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:if(T.name){G.next=2;break}return G.abrupt("return",v.ZP.warning("Name missing"));case 2:H(y),x==null||x.setFields([{name:T.name,value:y}]),S(!0);case 5:case"end":return G.stop()}},A)}));return function(y){return p.apply(this,arguments)}}();return(0,r.jsxs)(n.A.Item,{label:T.label,name:T.name,children:[(0,r.jsxs)("div",{style:{display:"flex",gap:16},children:[(0,r.jsx)("div",{style:{height:32,border:"1px dashed #d1d1d1",flex:1,padding:"4px 11px",borderRadius:4},children:h==null?void 0:h.name}),(0,r.jsx)(E.Z,{type:"primary",onClick:function(){return S(!M)},children:"Add link"},"primary")]}),(0,r.jsx)("div",{style:{backgroundColor:"#eee",padding:16,borderRadius:4,marginTop:16},hidden:M,children:(0,r.jsxs)(n.A,{onFinish:j,children:[(0,r.jsx)(m.Z,{name:"name",label:"Name"}),(0,r.jsx)(m.Z,{name:"href",label:"URL",rules:[{required:!0}]}),(0,r.jsx)(c.Z,{name:"target",label:"Target",allowClear:!0,options:[{value:"_blank",label:"Open in new tab"}]})]})})]})},B=f,W=e(24969),$=e(48689),D=e(22538),N=e(99351),V=e(86738),Y=function(){var T=(0,d.useParams)(),x=T.id,I=(0,t.useRef)(),U=(0,t.useRef)(),M=(0,t.useState)(!1),S=i()(M,2),K=S[0],L=S[1],h=function(){var j=s()(o()().mark(function p(A){var y,b;return o()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,(0,l.rB)(A);case 2:y=F.sent,y.succeeded&&(v.ZP.success("Deleted"),(b=I.current)===null||b===void 0||b.reload());case 4:case"end":return F.stop()}},p)}));return function(A){return j.apply(this,arguments)}}(),H=function(){var j=s()(o()().mark(function p(A){var y,b;return o()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,(0,l.ei)(x,A);case 2:y=F.sent,y.succeeded&&(v.ZP.success("Saved!"),(b=I.current)===null||b===void 0||b.reload(),L(!1));case 4:case"end":return F.stop()}},p)}));return function(A){return j.apply(this,arguments)}}();return(0,r.jsxs)("div",{children:[(0,r.jsx)(D.Rs,{request:function(p){return(0,l.Rl)(p,x)},toolBarRender:function(){return[(0,r.jsx)(E.Z,{type:"primary",icon:(0,r.jsx)(W.Z,{}),onClick:function(){return L(!0)},children:(0,r.jsx)(d.FormattedMessage,{id:"general.new"})},0)]},metas:{title:{dataIndex:"name"},actions:{render:function(p,A){return[(0,r.jsx)(V.Z,{title:"Are you sure?",onConfirm:function(){return h(A.id)},children:(0,r.jsx)(E.Z,{icon:(0,r.jsx)($.Z,{}),danger:!0,type:"primary"})},2)]}}},actionRef:I}),(0,r.jsxs)(N.Y,{open:K,onOpenChange:L,onFinish:H,formRef:U,children:[(0,r.jsx)(m.Z,{name:"icon",label:"Icon"}),(0,r.jsx)(B,{name:"link",label:"Link"})]})]})},J=Y,X=function(){var T=(0,d.useParams)(),x=T.id,I=function(){var U=s()(o()().mark(function M(S){var K;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,l.iH)(x,S);case 2:K=h.sent,K.succeeded&&v.ZP.success("Saved");case 4:case"end":return h.stop()}},M)}));return function(S){return U.apply(this,arguments)}}();return(0,r.jsx)(n.A,{onFinish:I,children:(0,r.jsx)(m.Z,{name:"name",label:"Name"})})},w=X,k=function(){var T=(0,d.useParams)(),x=T.id,I=(0,t.useState)(),U=i()(I,2),M=U[0],S=U[1],K=(0,t.useState)("content"),L=i()(K,2),h=L[0],H=L[1];return(0,t.useEffect)(function(){(0,l.Vb)(x).then(function(j){S(j)})},[x]),(0,r.jsx)(_._z,{title:M==null?void 0:M.name,children:(0,r.jsxs)(O.Z,{gutter:16,children:[(0,r.jsx)(Z.Z,{span:16,children:(0,r.jsx)(C.Z,{tabs:{activeKey:h,items:[{label:"Content",key:"content",children:(0,r.jsx)(J,{})},{label:"Setting",key:"setting",children:(0,r.jsx)(w,{})}],onChange:function(p){H(p)}}})}),(0,r.jsx)(Z.Z,{span:8,children:(0,r.jsx)(P.Z,{})})]})})},q=k}}]);
