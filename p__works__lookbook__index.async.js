"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5945],{82061:function(x,i,e){var r=e(1413),t=e(62435),v=e(47046),d=e(91146),o=function(u,a){return t.createElement(d.Z,(0,r.Z)((0,r.Z)({},u),{},{ref:a,icon:v.Z}))};o.displayName="DeleteOutlined",i.Z=t.forwardRef(o)},51042:function(x,i,e){var r=e(1413),t=e(62435),v=e(42110),d=e(91146),o=function(u,a){return t.createElement(d.Z,(0,r.Z)((0,r.Z)({},u),{},{ref:a,icon:v.Z}))};o.displayName="PlusOutlined",i.Z=t.forwardRef(o)},5966:function(x,i,e){var r=e(1413),t=e(91),v=e(62435),d=e(19617),o=e(86074),P=["fieldProps","proFieldProps"],u=["fieldProps","proFieldProps"],a="text",Z=function(l){var n=l.fieldProps,f=l.proFieldProps,p=(0,t.Z)(l,P);return(0,o.jsx)(d.Z,(0,r.Z)({valueType:a,fieldProps:n,filedConfig:{valueType:a},proFieldProps:f},p))},T=function(l){var n=l.fieldProps,f=l.proFieldProps,p=(0,t.Z)(l,u);return(0,o.jsx)(d.Z,(0,r.Z)({valueType:"password",fieldProps:n,proFieldProps:f,filedConfig:{valueType:a}},p))},s=Z;s.Password=T,s.displayName="ProFormComponent",i.Z=s},96980:function(x,i,e){e.r(i),e.d(i,{default:function(){return X}});var r=e(15009),t=e.n(r),v=e(99289),d=e.n(v),o=e(5574),P=e.n(o),u=e(66352),a=e(55725),Z=e(82061),T=e(16309),s=e(35312),m=e(71577),l=e(86738),n=e(86074),f=function(y){var R=(0,s.useParams)(),C=R.id,c=function(){};return(0,n.jsx)(T.Rs,{search:{},rowSelection:{},request:function(E){return(0,u.Rl)(E,C)},actionRef:y.actionRef,metas:{title:{dataIndex:"name",title:"Name"},actions:{render:function(E,D){return[(0,n.jsx)(m.ZP,{type:"primary",icon:(0,n.jsx)(a.Z,{}),onClick:function(){return s.history.push("/works/".concat(D.normalizedName.toLocaleLowerCase(),"/").concat(D.id))}},0),(0,n.jsx)(l.Z,{title:"Are you sure?",onConfirm:function(){return c()},children:(0,n.jsx)(m.ZP,{type:"primary",danger:!0,icon:(0,n.jsx)(Z.Z,{})})},1)]}}}})},p=f,S=e(51042),N=e(63386),z=e(28199),G=e(93933),W=e(5966),B=e(27790),$=e(32983),g=e(62435),V=function(){var y=(0,s.useParams)(),R=y.id,C=(0,g.useRef)(),c=(0,s.useIntl)(),M=(0,g.useState)("content"),E=P()(M,2),D=E[0],j=E[1],H=(0,g.useState)(!1),K=P()(H,2),J=K[0],F=K[1],Q=(0,n.jsx)(m.ZP,{icon:(0,n.jsx)(S.Z,{}),type:"primary",onClick:function(){return F(!0)},children:(0,n.jsx)(s.FormattedMessage,{id:"general.new"})}),_=function(){var A=d()(t()().mark(function h(U){var I,L;return t()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,u.zX)(U);case 2:I=O.sent,I.succeeded?(B.ZP.success(c.formatMessage({id:"general.added"})),F(!1),(L=C.current)===null||L===void 0||L.reload()):B.ZP.error(I.errors[0].description);case 4:case"end":return O.stop()}},h)}));return function(U){return A.apply(this,arguments)}}();return(0,n.jsxs)(N._z,{extra:Q,children:[(0,n.jsx)(z.Z,{tabs:{tabPosition:"top",activeKey:D,items:[{label:c.formatMessage({id:"general.content"}),key:"content",children:(0,n.jsx)(p,{actionRef:C})},{label:c.formatMessage({id:"menu.settings"}),key:"setting",children:(0,n.jsx)($.Z,{})}],onChange:function(h){j(h)}}}),(0,n.jsxs)(G.Y,{title:c.formatMessage({id:"general.new"}),onFinish:_,open:J,onOpenChange:F,children:[(0,n.jsx)(W.Z,{name:"id",hidden:!0,initialValue:R}),(0,n.jsx)(W.Z,{name:"name",label:"Name"})]})]})},X=V}}]);
