"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6498],{1912:function(Q,C,r){r.d(C,{Z:function(){return $}});var b=r(1413),l=r(62435),P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"},s=P,f=r(91146),Z=function(g,x){return l.createElement(f.Z,(0,b.Z)((0,b.Z)({},g),{},{ref:x,icon:s}))};Z.displayName="ArrowUpOutlined";var $=l.forwardRef(Z)},55287:function(Q,C,r){var b=r(1413),l=r(62435),P=r(5717),s=r(91146),f=function($,M){return l.createElement(s.Z,(0,b.Z)((0,b.Z)({},$),{},{ref:M,icon:P.Z}))};f.displayName="EyeOutlined",C.Z=l.forwardRef(f)},81565:function(Q,C,r){r.r(C),r.d(C,{default:function(){return H}});var b=r(15009),l=r.n(b),P=r(99289),s=r.n(P),f=r(43285),Z=r(55287),$=r(82061),M=r(51042),g=r(1413),x=r(62435),T={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},c=T,E=r(91146),w=function(O,h){return x.createElement(E.Z,(0,g.Z)((0,g.Z)({},O),{},{ref:h,icon:c}))};w.displayName="ExportOutlined";var u=x.forwardRef(w),k=r(1912),ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},te=ee,q=function(O,h){return x.createElement(E.Z,(0,g.Z)((0,g.Z)({},O),{},{ref:h,icon:te}))};q.displayName="ArrowDownOutlined";var U=x.forwardRef(q),re=r(63386),X=r(28199),ae=r(91),_=r(86190),ne=r(66758),de=r(96987),o=r(86074),ie=["fieldProps","proFieldProps"],oe="dateRange",se=x.forwardRef(function(S,O){var h=S.fieldProps,z=S.proFieldProps,A=(0,ae.Z)(S,ie),B=(0,x.useContext)(ne.Z);return(0,o.jsx)(de.Z,(0,g.Z)({ref:O,fieldProps:(0,g.Z)({getPopupContainer:B.getPopupContainer},h),valueType:oe,proFieldProps:z,filedConfig:{valueType:oe,customLightMode:!0,lightFilterLabelFormatter:function(j){return(0,_.c)(j,(h==null?void 0:h.format)||"YYYY-MM-DD")}}},A))}),V=se,le=r(56355),e=r(35312),n=r(58301),t=r(71577),a=r(86738),i=r(93421),m=r(71230),d=r(15746),y=r(4393),v=r(55054),R=r(32983),F=r(63012),W=function(){var O=(0,x.useRef)(),h=function(){var B=s()(l()().mark(function I(j){var G,Y;return l()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,(0,f.wH)(j);case 2:G=L.sent,G.succeeded&&(n.ZP.success("Deleted!"),(Y=O.current)===null||Y===void 0||Y.reload());case 4:case"end":return L.stop()}},I)}));return function(j){return B.apply(this,arguments)}}(),z=[{title:"#",valueType:"indexBorder"},{title:"Number",render:function(I,j){return(0,o.jsx)("a",{children:j.number})}},{title:"Date",dataIndex:"createdDate",valueType:"fromNow",search:!1},{title:"Status",dataIndex:"status",valueEnum:{0:{text:"Open",status:"Processing"},1:{text:"Confirmed",status:"Processing"},2:{text:"Paid",status:"Success"},3:{text:"Refunded",status:"Default"},4:{text:"Cancelled",status:"Error"}}},{title:"customer",dataIndex:"customer"},{title:"product",dataIndex:"product"},{title:"revenua",dataIndex:"revenua"},{title:"",valueType:"option",render:function(I,j){return[(0,o.jsx)(t.ZP,{icon:(0,o.jsx)(Z.Z,{}),type:"primary",onClick:function(){return e.history.push("/ecommerce/order/center/".concat(j.id))}},"view"),(0,o.jsx)(a.Z,{title:"Are you sure?",onConfirm:function(){return h(j.id)},children:(0,o.jsx)(t.ZP,{icon:(0,o.jsx)($.Z,{}),type:"primary",danger:!0})},"delete")]}}],A=[{type:"Jan",sales:38},{type:"Feb",sales:52},{type:"Mar",sales:61},{type:"Apr",sales:145},{type:"May",sales:48},{type:"Jun",sales:38},{type:"Jul",sales:38},{type:"Aug",sales:38}];return(0,o.jsx)(re._z,{extra:(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(t.ZP,{type:"primary",icon:(0,o.jsx)(M.Z,{}),children:"New order"}),(0,o.jsx)(t.ZP,{icon:(0,o.jsx)(u,{}),children:"Export"})]}),children:(0,o.jsxs)(m.Z,{gutter:16,children:[(0,o.jsxs)(d.Z,{span:18,children:[(0,o.jsx)(X.Z,{className:"mb-4",title:"Sales summary",extra:(0,o.jsx)(V,{label:"Showing"}),children:(0,o.jsx)(F.ColumnChart,{data:A,xField:"type",yField:"sales",label:{position:"middle",style:{fill:"#FFFFFF",opacity:.6}},xAxis:{label:{autoHide:!0,autoRotate:!1}},meta:{type:{alias:"\u0111"},sales:{alias:"Money"}}})}),(0,o.jsx)(le.Z,{actionRef:O,headerTitle:"Recent orders",rowKey:"id",columns:z,request:f.XB,search:{layout:"vertical"}})]}),(0,o.jsxs)(d.Z,{span:6,children:[(0,o.jsxs)(m.Z,{gutter:16,children:[(0,o.jsx)(d.Z,{span:12,className:"mb-4",children:(0,o.jsx)(y.Z,{bordered:!1,children:(0,o.jsx)(v.Z,{title:"Active",value:11.28,precision:2,valueStyle:{color:"#3f8600"},prefix:(0,o.jsx)(k.Z,{}),suffix:"%"})})}),(0,o.jsx)(d.Z,{span:12,className:"mb-4",children:(0,o.jsx)(y.Z,{bordered:!1,children:(0,o.jsx)(v.Z,{title:"Idle",value:9.3,precision:2,valueStyle:{color:"#cf1322"},prefix:(0,o.jsx)(U,{}),suffix:"%"})})}),(0,o.jsx)(d.Z,{span:12,className:"mb-4",children:(0,o.jsx)(y.Z,{bordered:!1,children:(0,o.jsx)(v.Z,{title:"Idle",value:9.3,precision:2,valueStyle:{color:"#cf1322"},prefix:(0,o.jsx)(U,{}),suffix:"%"})})}),(0,o.jsx)(d.Z,{span:12,className:"mb-4",children:(0,o.jsx)(y.Z,{bordered:!1,children:(0,o.jsx)(v.Z,{title:"Idle",value:9.3,precision:2,valueStyle:{color:"#cf1322"},prefix:(0,o.jsx)(U,{}),suffix:"%"})})})]}),(0,o.jsx)(X.Z,{title:"Earnings",className:"mb-4",children:(0,o.jsx)(R.Z,{})}),(0,o.jsx)(X.Z,{title:"Top products",className:"mb-4",children:(0,o.jsx)(R.Z,{})})]})]})})},H=W},43285:function(Q,C,r){r.d(C,{XB:function(){return Z},fn:function(){return M},wH:function(){return x}});var b=r(15009),l=r.n(b),P=r(99289),s=r.n(P),f=r(35312);function Z(c){return $.apply(this,arguments)}function $(){return $=s()(l()().mark(function c(E){return l()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,f.request)("order/list",{params:E}));case 1:case"end":return u.stop()}},c)})),$.apply(this,arguments)}function M(c){return g.apply(this,arguments)}function g(){return g=s()(l()().mark(function c(E){return l()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,f.request)("order/".concat(E)));case 1:case"end":return u.stop()}},c)})),g.apply(this,arguments)}function x(c){return T.apply(this,arguments)}function T(){return T=s()(l()().mark(function c(E){return l()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,f.request)("order/delete/".concat(E),{method:"POST"}));case 1:case"end":return u.stop()}},c)})),T.apply(this,arguments)}},4393:function(Q,C,r){r.d(C,{Z:function(){return le}});var b=r(94184),l=r.n(b),P=r(98423),s=r(62435),f=r(53124),Z=r(98675),$=r(99559),M=r(11941),g=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t},T=e=>{var{prefixCls:n,className:t,hoverable:a=!0}=e,i=g(e,["prefixCls","className","hoverable"]);const{getPrefixCls:m}=s.useContext(f.E_),d=m("card",n),y=l()(`${d}-grid`,t,{[`${d}-grid-hoverable`]:a});return s.createElement("div",Object.assign({},i,{className:y}))},c=r(14747),E=r(67968),w=r(45503);const u=e=>{const{antCls:n,componentCls:t,headerHeight:a,cardPaddingBase:i,tabsMarginBottom:m}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:a,marginBottom:-1,padding:`0 ${i}px`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},(0,c.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},c.vS),{[`
          > ${t}-typography,
          > ${t}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${n}-tabs-top`]:{clear:"both",marginBottom:m,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`}}})},k=e=>{const{cardPaddingBase:n,colorBorderSecondary:t,cardShadow:a,lineWidth:i}=e;return{width:"33.33%",padding:n,border:0,borderRadius:0,boxShadow:`
      ${i}px 0 0 0 ${t},
      0 ${i}px 0 0 ${t},
      ${i}px ${i}px 0 0 ${t},
      ${i}px 0 0 0 ${t} inset,
      0 ${i}px 0 0 ${t} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:a}}},ee=e=>{const{componentCls:n,iconCls:t,actionsLiMargin:a,cardActionsIconSize:i,colorBorderSecondary:m,actionsBg:d}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:d,borderTop:`${e.lineWidth}px ${e.lineType} ${m}`,display:"flex",borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `},(0,c.dF)()),{"& > li":{margin:a,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.cardActionsIconSize*2,fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${n}-btn), > ${t}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:`${e.fontSize*e.lineHeight}px`,transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${t}`]:{fontSize:i,lineHeight:`${i*e.lineHeight}px`}},"&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${m}`}}})},te=e=>Object.assign(Object.assign({margin:`-${e.marginXXS}px 0`,display:"flex"},(0,c.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},c.vS),"&-description":{color:e.colorTextDescription}}),q=e=>{const{componentCls:n,cardPaddingBase:t,colorFillAlter:a}=e;return{[`${n}-head`]:{padding:`0 ${t}px`,background:a,"&-title":{fontSize:e.fontSize}},[`${n}-body`]:{padding:`${e.padding}px ${t}px`}}},U=e=>{const{componentCls:n}=e;return{overflow:"hidden",[`${n}-body`]:{userSelect:"none"}}},re=e=>{const{antCls:n,componentCls:t,cardShadow:a,cardHeadPadding:i,colorBorderSecondary:m,boxShadowTertiary:d,cardPaddingBase:y,extraColor:v}=e;return{[t]:Object.assign(Object.assign({},(0,c.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:d},[`${t}-head`]:u(e),[`${t}-extra`]:{marginInlineStart:"auto",color:v,fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:Object.assign({padding:y,borderRadius:` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},(0,c.dF)()),[`${t}-grid`]:k(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${n}-image-mask`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}},[`${t}-actions`]:ee(e),[`${t}-meta`]:te(e)}),[`${t}-bordered`]:{border:`${e.lineWidth}px ${e.lineType} ${m}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:a}},[`${t}-contain-grid`]:{[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:-e.lineWidth,marginInlineStart:-e.lineWidth,padding:0}},[`${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:i}}},[`${t}-type-inner`]:q(e),[`${t}-loading`]:U(e),[`${t}-rtl`]:{direction:"rtl"}}},X=e=>{const{componentCls:n,cardPaddingSM:t,headerHeightSM:a,headerFontSizeSM:i}=e;return{[`${n}-small`]:{[`> ${n}-head`]:{minHeight:a,padding:`0 ${t}px`,fontSize:i,[`> ${n}-head-wrapper`]:{[`> ${n}-extra`]:{fontSize:e.fontSize}}},[`> ${n}-body`]:{padding:t}},[`${n}-small${n}-contain-tabs`]:{[`> ${n}-head`]:{[`${n}-head-title, ${n}-extra`]:{minHeight:a,paddingTop:0,display:"flex",alignItems:"center"}}}}};var ae=(0,E.Z)("Card",e=>{const n=(0,w.TS)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[re(n),X(n)]},e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText})),_=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};function ne(e){return e.map((n,t)=>s.createElement("li",{style:{width:`${100/e.length}%`},key:`action-${t}`},s.createElement("span",null,n)))}var o=s.forwardRef((e,n)=>{const{prefixCls:t,className:a,rootClassName:i,style:m,extra:d,headStyle:y={},bodyStyle:v={},title:R,loading:F,bordered:W=!0,size:H,type:S,cover:O,actions:h,tabList:z,children:A,activeTabKey:B,defaultActiveTabKey:I,tabBarExtraContent:j,hoverable:G,tabProps:Y={}}=e,ce=_(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),{getPrefixCls:L,direction:fe,card:K}=s.useContext(f.E_),ge=N=>{var D;(D=e.onTabChange)===null||D===void 0||D.call(e,N)},ve=s.useMemo(()=>{let N=!1;return s.Children.forEach(A,D=>{D&&D.type&&D.type===T&&(N=!0)}),N},[A]),p=L("card",t),[he,xe]=ae(p),ye=s.createElement($.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},A),ue=B!==void 0,be=Object.assign(Object.assign({},Y),{[ue?"activeKey":"defaultActiveKey"]:ue?B:I,tabBarExtraContent:j});let pe;const J=(0,Z.Z)(H),$e=!J||J==="default"?"large":J,me=z?s.createElement(M.Z,Object.assign({size:$e},be,{className:`${p}-head-tabs`,onChange:ge,items:z.map(N=>{var{tab:D}=N,Ze=_(N,["tab"]);return Object.assign({label:D},Ze)})})):null;(R||d||me)&&(pe=s.createElement("div",{className:`${p}-head`,style:y},s.createElement("div",{className:`${p}-head-wrapper`},R&&s.createElement("div",{className:`${p}-head-title`},R),d&&s.createElement("div",{className:`${p}-extra`},d)),me));const Se=O?s.createElement("div",{className:`${p}-cover`},O):null,Oe=s.createElement("div",{className:`${p}-body`,style:v},F?ye:A),je=h&&h.length?s.createElement("ul",{className:`${p}-actions`},ne(h)):null,Ce=(0,P.Z)(ce,["onTabChange"]),Ee=l()(p,K==null?void 0:K.className,{[`${p}-loading`]:F,[`${p}-bordered`]:W,[`${p}-hoverable`]:G,[`${p}-contain-grid`]:ve,[`${p}-contain-tabs`]:z&&z.length,[`${p}-${J}`]:J,[`${p}-type-${S}`]:!!S,[`${p}-rtl`]:fe==="rtl"},a,i,xe),Pe=Object.assign(Object.assign({},K==null?void 0:K.style),m);return he(s.createElement("div",Object.assign({ref:n},Ce,{className:Ee,style:Pe}),pe,Se,Oe,je))}),ie=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t},se=e=>{const{prefixCls:n,className:t,avatar:a,title:i,description:m}=e,d=ie(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:y}=s.useContext(f.E_),v=y("card",n),R=l()(`${v}-meta`,t),F=a?s.createElement("div",{className:`${v}-meta-avatar`},a):null,W=i?s.createElement("div",{className:`${v}-meta-title`},i):null,H=m?s.createElement("div",{className:`${v}-meta-description`},m):null,S=W||H?s.createElement("div",{className:`${v}-meta-detail`},W,H):null;return s.createElement("div",Object.assign({},d,{className:R}),F,S)};const V=o;V.Grid=T,V.Meta=se;var le=V}}]);
