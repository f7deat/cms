"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9319],{82061:function(I,p,e){var r=e(1413),t=e(62435),c=e(47046),u=e(91146),d=function(P,a){return t.createElement(u.Z,(0,r.Z)((0,r.Z)({},P),{},{ref:a,icon:c.Z}))};d.displayName="DeleteOutlined",p.Z=t.forwardRef(d)},51042:function(I,p,e){var r=e(1413),t=e(62435),c=e(42110),u=e(91146),d=function(P,a){return t.createElement(u.Z,(0,r.Z)((0,r.Z)({},P),{},{ref:a,icon:c.Z}))};d.displayName="PlusOutlined",p.Z=t.forwardRef(d)},63434:function(I,p,e){var r=e(1413),t=e(91),c=e(22270),u=e(84567),d=e(62435),E=e(90789),P=e(96987),a=e(86074),Z=["options","fieldProps","proFieldProps","valueEnum"],A=d.forwardRef(function(l,n){var v=l.options,_=l.fieldProps,C=l.proFieldProps,L=l.valueEnum,m=(0,t.Z)(l,Z);return(0,a.jsx)(P.Z,(0,r.Z)({ref:n,valueType:"checkbox",valueEnum:(0,c.h)(L,void 0),fieldProps:(0,r.Z)({options:v},_),lightProps:(0,r.Z)({labelFormatter:function(){return(0,a.jsx)(P.Z,(0,r.Z)({ref:n,valueType:"checkbox",mode:"read",valueEnum:(0,c.h)(L,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:v},_),proFieldProps:C},m))}},m.lightProps),proFieldProps:C},m))}),f=d.forwardRef(function(l,n){var v=l.fieldProps,_=l.children;return(0,a.jsx)(u.Z,(0,r.Z)((0,r.Z)({ref:n},v),{},{children:_}))}),M=(0,E.G)(f,{valuePropName:"checked"}),i=M;i.Group=A,p.Z=i},64317:function(I,p,e){var r=e(1413),t=e(91),c=e(22270),u=e(62435),d=e(66758),E=e(96987),P=e(86074),a=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],Z=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],A=u.forwardRef(function(n,v){var _=n.fieldProps,C=n.children,L=n.params,m=n.proFieldProps,O=n.mode,F=n.valueEnum,x=n.request,B=n.showSearch,s=n.options,K=(0,t.Z)(n,a),y=(0,u.useContext)(d.Z);return(0,P.jsx)(E.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,c.h)(F),request:x,params:L,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:s,mode:O,showSearch:B,getPopupContainer:y.getPopupContainer},_),ref:v,proFieldProps:m},K),{},{children:C}))}),f=u.forwardRef(function(n,v){var _=n.fieldProps,C=n.children,L=n.params,m=n.proFieldProps,O=n.mode,F=n.valueEnum,x=n.request,B=n.options,s=(0,t.Z)(n,Z),K=(0,r.Z)({options:B,mode:O||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},_),y=(0,u.useContext)(d.Z);return(0,P.jsx)(E.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,c.h)(F),request:x,params:L,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({getPopupContainer:y.getPopupContainer},K),ref:v,proFieldProps:m},s),{},{children:C}))}),M=A,i=f,l=M;l.SearchSelect=i,l.displayName="ProFormComponent",p.Z=l},5966:function(I,p,e){var r=e(1413),t=e(91),c=e(62435),u=e(96987),d=e(86074),E=["fieldProps","proFieldProps"],P=["fieldProps","proFieldProps"],a="text",Z=function(i){var l=i.fieldProps,n=i.proFieldProps,v=(0,t.Z)(i,E);return(0,d.jsx)(u.Z,(0,r.Z)({valueType:a,fieldProps:l,filedConfig:{valueType:a},proFieldProps:n},v))},A=function(i){var l=i.fieldProps,n=i.proFieldProps,v=(0,t.Z)(i,P);return(0,d.jsx)(u.Z,(0,r.Z)({valueType:"password",fieldProps:l,proFieldProps:n,filedConfig:{valueType:a}},v))},f=Z;f.Password=A,f.displayName="ProFormComponent",p.Z=f},33251:function(I,p,e){var r=e(15009),t=e.n(r),c=e(99289),u=e.n(c),d=e(37476),E=e(5966),P=e(64317),a=e(86074),Z=function(f){var M=function(){var i=u()(t()().mark(function l(n){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:f.onFinish(n);case 1:case"end":return _.stop()}},l)}));return function(n){return i.apply(this,arguments)}}();return(0,a.jsxs)(d.Y,{onFinish:M,open:f.open,onOpenChange:f.onOpenChange,children:[(0,a.jsx)(E.Z,{name:"name",label:"Name"}),(0,a.jsx)(E.Z,{name:"href",label:"URL",rules:[{required:!0}]}),(0,a.jsx)(P.Z,{name:"target",label:"Target",allowClear:!0,options:[{value:"_blank",label:"Open in new tab"}]})]})};p.Z=Z},85335:function(I,p,e){var r=e(15009),t=e.n(r),c=e(99289),u=e.n(c),d=e(66352),E=e(28199),P=e(34994),a=e(5966),Z=e(63434),A=e(35312),f=e(58301),M=e(62435),i=e(86074),l=function(){var v=(0,A.useParams)(),_=v.id,C=(0,M.useRef)();(0,M.useEffect)(function(){(0,d.Mk)(_).then(function(m){var O;(O=C.current)===null||O===void 0||O.setFields([{name:"name",value:m.name},{name:"active",value:m.active}])})},[_]);var L=function(){var m=u()(t()().mark(function O(F){var x;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,d.Qb)(F);case 2:x=s.sent,x.succeeded?f.ZP.success("Saved!"):f.ZP.error(x.errors[0].description);case 4:case"end":return s.stop()}},O)}));return function(F){return m.apply(this,arguments)}}();return(0,i.jsx)(E.Z,{title:"Info",children:(0,i.jsxs)(P.A,{formRef:C,onFinish:L,children:[(0,i.jsx)(a.Z,{hidden:!0,name:"id",initialValue:_}),(0,i.jsx)(a.Z,{name:"name",label:"Name"}),(0,i.jsx)(Z.Z,{name:"active",label:"Active"})]})})};p.Z=l},71641:function(I,p,e){e.r(p),e.d(p,{default:function(){return y}});var r=e(15009),t=e.n(r),c=e(99289),u=e.n(c),d=e(5574),E=e.n(d),P=e(85335),a=e(66352),Z=e(63386),A=e(28199),f=e(34994),M=e(5966),i=e(16309),l=e(35312),n=e(58301),v=e(71230),_=e(15746),C=e(71577),L=e(86738),m=e(62435),O=e(51042),F=e(82061),x=e(33251);function B(){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,function(G){return(G^crypto.getRandomValues(new Uint8Array(1))[0]&15>>G/4).toString(16)})}var s=e(86074),K=function(){var Q=(0,l.useParams)(),S=Q.id,Y=(0,m.useState)(),N=E()(Y,2),W=N[0],b=N[1],V=(0,m.useRef)();(0,m.useEffect)(function(){(0,a.Tu)(S).then(function(j){var D;b(j),(D=V.current)===null||D===void 0||D.setFields([{name:"name",value:j.name}])})},[S]);var H=(0,m.useRef)(),J=(0,m.useState)(!1),z=E()(J,2),X=z[0],$=z[1],w=function(){var j=u()(t()().mark(function D(h){var o,g,U,R;return t()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(o=W,!o){T.next=8;break}return g=o.items.filter(function(ne){return ne.id!==h}),o.items=g,T.next=6,(0,a.iH)(S,o);case 6:U=T.sent,U.succeeded&&(n.ZP.success("Deleted!"),b(o),(R=H.current)===null||R===void 0||R.reload());case 8:case"end":return T.stop()}},D)}));return function(h){return j.apply(this,arguments)}}(),k=function(){var j=u()(t()().mark(function D(h){var o,g,U,R;return t()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return o=W,g={id:B(),link:{href:h.href,name:h.name,target:h.target,id:B()}},o!=null&&o.items?o==null||(U=o.items)===null||U===void 0||U.push(g):o.items=[g],T.next=5,(0,a.iH)(S,o);case 5:R=T.sent,R.succeeded&&(b(o),n.ZP.success("Added!"),$(!1));case 7:case"end":return T.stop()}},D)}));return function(h){return j.apply(this,arguments)}}(),q=function(){var j=u()(t()().mark(function D(h){var o,g;return t()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return o=W,o&&(o.name=h.name),R.next=4,(0,a.iH)(S,o);case 4:g=R.sent,g.succeeded&&(b(o),n.ZP.success("Saved!"));case 6:case"end":return R.stop()}},D)}));return function(h){return j.apply(this,arguments)}}();return(0,s.jsx)(Z._z,{title:W==null?void 0:W.name,children:(0,s.jsxs)(v.Z,{gutter:16,children:[(0,s.jsxs)(_.Z,{span:16,children:[(0,s.jsx)(A.Z,{children:(0,s.jsxs)(f.A,{formRef:V,onFinish:q,children:[(0,s.jsx)(M.Z,{name:"name",label:"Name",rules:[{required:!0}]}),(0,s.jsx)(i.Rs,{toolBarRender:function(){return[(0,s.jsx)(C.ZP,{type:"primary",icon:(0,s.jsx)(O.Z,{}),onClick:function(){return $(!0)},children:(0,s.jsx)("span",{children:(0,s.jsx)(l.FormattedMessage,{id:"general.new"})})},0)]},ghost:!0,headerTitle:"Item",dataSource:W==null?void 0:W.items,metas:{title:{render:function(D,h){var o;return(o=h.link)===null||o===void 0?void 0:o.name}},actions:{render:function(D,h){return[(0,s.jsx)(L.Z,{title:"Are you sure?",onConfirm:function(){return w(h.id)},children:(0,s.jsx)(C.ZP,{icon:(0,s.jsx)(F.Z,{}),danger:!0,type:"primary"})},2)]}}},actionRef:H,className:"mb-4"})]})}),(0,s.jsx)(x.Z,{open:X,onOpenChange:$,onFinish:k})]}),(0,s.jsx)(_.Z,{span:8,children:(0,s.jsx)(P.Z,{})})]})})},y=K}}]);
