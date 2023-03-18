"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2814],{27511:function(ue,k,g){g.d(k,{K:function(){return X},Z:function(){return a}});var o=g(4942),P=g(97685),O=g(71002),_=g(94184),L=g.n(_),V=g(50344),s=g(62435),Y=g(53124),J=g(96159),$=g(24308),ee=function(e){var l=e.children;return l},te=ee,C=g(87462);function W(t){return t!=null}var re=function(e){var l=e.itemPrefixCls,n=e.component,i=e.span,m=e.className,c=e.style,u=e.labelStyle,f=e.contentStyle,h=e.bordered,v=e.label,b=e.content,E=e.colon,Z=n;if(h){var y;return s.createElement(Z,{className:L()((y={},(0,o.Z)(y,l+"-item-label",W(v)),(0,o.Z)(y,l+"-item-content",W(b)),y),m),style:c,colSpan:i},W(v)&&s.createElement("span",{style:u},v),W(b)&&s.createElement("span",{style:f},b))}return s.createElement(Z,{className:L()(l+"-item",m),style:c,colSpan:i},s.createElement("div",{className:l+"-item-container"},(v||v===0)&&s.createElement("span",{className:L()(l+"-item-label",(0,o.Z)({},l+"-item-no-colon",!E)),style:u},v),(b||b===0)&&s.createElement("span",{className:L()(l+"-item-content"),style:f},b)))},N=re;function F(t,e,l){var n=e.colon,i=e.prefixCls,m=e.bordered,c=l.component,u=l.type,f=l.showLabel,h=l.showContent,v=l.labelStyle,b=l.contentStyle;return t.map(function(E,Z){var y=E.props,I=y.label,z=y.children,T=y.prefixCls,B=T===void 0?i:T,M=y.className,S=y.style,x=y.labelStyle,R=y.contentStyle,w=y.span,j=w===void 0?1:w,D=E.key;return typeof c=="string"?s.createElement(N,{key:u+"-"+(D||Z),className:M,style:S,labelStyle:(0,C.Z)((0,C.Z)({},v),x),contentStyle:(0,C.Z)((0,C.Z)({},b),R),span:j,colon:n,component:c,itemPrefixCls:B,bordered:m,label:f?I:null,content:h?z:null}):[s.createElement(N,{key:"label-"+(D||Z),className:M,style:(0,C.Z)((0,C.Z)((0,C.Z)({},v),S),x),span:1,colon:n,component:c[0],itemPrefixCls:B,bordered:m,label:I}),s.createElement(N,{key:"content-"+(D||Z),className:M,style:(0,C.Z)((0,C.Z)((0,C.Z)({},b),S),R),span:j*2-1,component:c[1],itemPrefixCls:B,bordered:m,content:z})]})}var ne=function(e){var l=s.useContext(X),n=e.prefixCls,i=e.vertical,m=e.row,c=e.index,u=e.bordered;return i?s.createElement(s.Fragment,null,s.createElement("tr",{key:"label-"+c,className:n+"-row"},F(m,e,(0,C.Z)({component:"th",type:"label",showLabel:!0},l))),s.createElement("tr",{key:"content-"+c,className:n+"-row"},F(m,e,(0,C.Z)({component:"td",type:"content",showContent:!0},l)))):s.createElement("tr",{key:c,className:n+"-row"},F(m,e,(0,C.Z)({component:u?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},l)))},Q=ne,le=g(67968),oe=g(45503),K=g(14747),ae=function(e){var l,n=e.componentCls,i=e.descriptionsSmallPadding,m=e.descriptionsDefaultPadding,c=e.descriptionsMiddlePadding,u=e.descriptionsBg;return(0,o.Z)({},"&"+n+"-bordered",(l={},(0,o.Z)(l,n+"-view",{border:e.lineWidth+"px "+e.lineType+" "+e.colorSplit,"> table":{tableLayout:"auto",borderCollapse:"collapse"}}),(0,o.Z)(l,n+"-item-label, "+n+"-item-content",{padding:m,borderInlineEnd:e.lineWidth+"px "+e.lineType+" "+e.colorSplit,"&:last-child":{borderInlineEnd:"none"}}),(0,o.Z)(l,n+"-item-label",{backgroundColor:u,"&::after":{display:"none"}}),(0,o.Z)(l,n+"-row",{borderBottom:e.lineWidth+"px "+e.lineType+" "+e.colorSplit,"&:last-child":{borderBottom:"none"}}),(0,o.Z)(l,"&"+n+"-middle",(0,o.Z)({},n+"-item-label, "+n+"-item-content",{padding:c})),(0,o.Z)(l,"&"+n+"-small",(0,o.Z)({},n+"-item-label, "+n+"-item-content",{padding:i})),l))},ie=function(e){var l,n,i=e.componentCls,m=e.descriptionsExtraColor,c=e.descriptionItemPaddingBottom,u=e.descriptionsItemLabelColonMarginRight,f=e.descriptionsItemLabelColonMarginLeft,h=e.descriptionsTitleMarginBottom;return(0,o.Z)({},i,(0,C.Z)((0,C.Z)((0,C.Z)({},(0,K.Wf)(e)),ae(e)),(n={},(0,o.Z)(n,"&-rtl",{direction:"rtl"}),(0,o.Z)(n,i+"-header",{display:"flex",alignItems:"center",marginBottom:h}),(0,o.Z)(n,i+"-title",(0,C.Z)((0,C.Z)({},K.vS),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),(0,o.Z)(n,i+"-extra",{marginInlineStart:"auto",color:m,fontSize:e.fontSize}),(0,o.Z)(n,i+"-view",{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}}),(0,o.Z)(n,i+"-row",{"> th, > td":{paddingBottom:c},"&:last-child":{borderBottom:"none"}}),(0,o.Z)(n,i+"-item-label",(0,o.Z)({color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:f+"px "+u+"px"}},"&"+i+"-item-no-colon::after",{content:'""'})),(0,o.Z)(n,i+"-item-no-label",{"&::after":{margin:0,content:'""'}}),(0,o.Z)(n,i+"-item-content",{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),(0,o.Z)(n,i+"-item",{paddingBottom:0,verticalAlign:"top","&-container":(l={display:"flex"},(0,o.Z)(l,i+"-item-label",{display:"inline-flex",alignItems:"baseline"}),(0,o.Z)(l,i+"-item-content",{display:"inline-flex",alignItems:"baseline"}),l)}),(0,o.Z)(n,"&-middle",(0,o.Z)({},i+"-row",{"> th, > td":{paddingBottom:e.paddingSM}})),(0,o.Z)(n,"&-small",(0,o.Z)({},i+"-row",{"> th, > td":{paddingBottom:e.paddingXS}})),n)))},se=(0,le.Z)("Descriptions",function(t){var e=t.colorFillAlter,l=t.fontSizeSM*t.lineHeightSM,n=t.colorText,i=t.paddingXS+"px "+t.padding+"px",m=t.padding+"px "+t.paddingLG+"px",c=t.paddingSM+"px "+t.paddingLG+"px",u=t.padding,f=t.marginXS,h=t.marginXXS/2,v=(0,oe.TS)(t,{descriptionsBg:e,descriptionsTitleMarginBottom:l,descriptionsExtraColor:n,descriptionItemPaddingBottom:u,descriptionsSmallPadding:i,descriptionsDefaultPadding:m,descriptionsMiddlePadding:c,descriptionsItemLabelColonMarginRight:f,descriptionsItemLabelColonMarginLeft:h});return[ie(v)]}),X=s.createContext({}),G={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function ce(t,e){if(typeof t=="number")return t;if((0,O.Z)(t)==="object")for(var l=0;l<$.c4.length;l++){var n=$.c4[l];if(e[n]&&t[n]!==void 0)return t[n]||G[n]}return 3}function d(t,e,l){var n=t;return(e===void 0||e>l)&&(n=(0,J.Tm)(t,{span:l})),n}function r(t,e){var l=(0,V.Z)(t).filter(function(c){return c}),n=[],i=[],m=e;return l.forEach(function(c,u){var f,h=(f=c.props)===null||f===void 0?void 0:f.span,v=h||1;if(u===l.length-1){i.push(d(c,h,m)),n.push(i);return}v<m?(m-=v,i.push(c)):(i.push(d(c,v,m)),n.push(i),m=e,i=[])}),n}function p(t){var e,l=t.prefixCls,n=t.title,i=t.extra,m=t.column,c=m===void 0?G:m,u=t.colon,f=u===void 0?!0:u,h=t.bordered,v=t.layout,b=t.children,E=t.className,Z=t.style,y=t.size,I=t.labelStyle,z=t.contentStyle,T=s.useContext(Y.E_),B=T.getPrefixCls,M=T.direction,S=B("descriptions",l),x=s.useState({}),R=(0,P.Z)(x,2),w=R[0],j=R[1],D=ce(c,w),de=se(S),U=(0,P.Z)(de,2),me=U[0],ge=U[1];s.useEffect(function(){var A=$.ZP.subscribe(function(H){(0,O.Z)(c)==="object"&&j(H)});return function(){$.ZP.unsubscribe(A)}},[]);var q=r(b,D),pe=s.useMemo(function(){return{labelStyle:I,contentStyle:z}},[I,z]);return me(s.createElement(X.Provider,{value:pe},s.createElement("div",{className:L()(S,(e={},(0,o.Z)(e,S+"-"+y,y&&y!=="default"),(0,o.Z)(e,S+"-bordered",!!h),(0,o.Z)(e,S+"-rtl",M==="rtl"),e),E,ge),style:Z},(n||i)&&s.createElement("div",{className:S+"-header"},n&&s.createElement("div",{className:S+"-title"},n),i&&s.createElement("div",{className:S+"-extra"},i)),s.createElement("div",{className:S+"-view"},s.createElement("table",null,s.createElement("tbody",null,q.map(function(A,H){return s.createElement(Q,{key:H,index:H,colon:f,prefixCls:S,vertical:v==="vertical",bordered:h,row:A})})))))))}p.Item=te;var a=p},51904:function(ue,k,g){g.d(k,{Z:function(){return ce}});var o=g(4942),P=g(87462),O=g(97685),_=g(97937),L=g(94184),V=g.n(L),s=g(62435),Y=g(53124),J=g(98787),$=g(28704),ee=g(8796),te=g(67968),C=g(45503);function W(d){if(typeof d!="string")return d;var r=d.charAt(0).toUpperCase()+d.slice(1);return r}var re=g(14747),N=function(r,p,a){var t=W(a);return(0,o.Z)({},r.componentCls+"-"+p,{color:r["color"+a],background:r["color"+t+"Bg"],borderColor:r["color"+t+"Border"]})},F=function(r){return ee.i.reduce(function(p,a){var t,e=r[a+"-1"],l=r[a+"-3"],n=r[a+"-6"],i=r[a+"-7"];return(0,P.Z)((0,P.Z)({},p),(t={},(0,o.Z)(t,r.componentCls+"-"+a,{color:i,background:e,borderColor:l}),(0,o.Z)(t,r.componentCls+"-"+a+"-inverse",{color:r.colorTextLightSolid,background:n,borderColor:n}),t))},{})},ne=function(r){var p,a=r.paddingXXS,t=r.lineWidth,e=r.tagPaddingHorizontal,l=e-t,n=a-t;return(0,o.Z)({},r.componentCls,(0,P.Z)((0,P.Z)({},(0,re.Wf)(r)),(p={display:"inline-block",height:"auto",marginInlineEnd:r.marginXS,paddingInline:l,fontSize:r.tagFontSize,lineHeight:r.tagLineHeight+"px",whiteSpace:"nowrap",background:r.tagDefaultBg,border:r.lineWidth+"px "+r.lineType+" "+r.colorBorder,borderRadius:r.borderRadiusSM,opacity:1,transition:"all "+r.motionDurationMid,textAlign:"start","&&-rtl":{direction:"rtl"},"&, a, a:hover":{color:r.tagDefaultColor}},(0,o.Z)(p,r.componentCls+"-close-icon",{marginInlineStart:n,color:r.colorTextDescription,fontSize:r.tagIconSize,cursor:"pointer",transition:"all "+r.motionDurationMid,"&:hover":{color:r.colorTextHeading}}),(0,o.Z)(p,"&&-has-color",(0,o.Z)({borderColor:"transparent"},"&, a, a:hover, "+r.iconCls+"-close, "+r.iconCls+"-close:hover",{color:r.colorTextLightSolid})),(0,o.Z)(p,"&-checkable",{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer","&:not(&-checked):hover":{color:r.colorPrimary,backgroundColor:r.colorFillSecondary},"&:active, &-checked":{color:r.colorTextLightSolid},"&-checked":{backgroundColor:r.colorPrimary,"&:hover":{backgroundColor:r.colorPrimaryHover}},"&:active":{backgroundColor:r.colorPrimaryActive}}),(0,o.Z)(p,"&-hidden",{display:"none"}),(0,o.Z)(p,"> "+r.iconCls+" + span, > span + "+r.iconCls,{marginInlineStart:l}),p)))},Q=(0,te.Z)("Tag",function(d){var r=d.fontSize,p=d.lineHeight,a=d.lineWidth,t=d.fontSizeIcon,e=Math.round(r*p),l=d.fontSizeSM,n=e-a*2,i=d.colorFillAlter,m=d.colorText,c=(0,C.TS)(d,{tagFontSize:l,tagLineHeight:n,tagDefaultBg:i,tagDefaultColor:m,tagIconSize:t-2*a,tagPaddingHorizontal:8});return[ne(c),F(c),N(c,"success","Success"),N(c,"processing","Info"),N(c,"error","Error"),N(c,"warning","Warning")]}),le=function(d,r){var p={};for(var a in d)Object.prototype.hasOwnProperty.call(d,a)&&r.indexOf(a)<0&&(p[a]=d[a]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(d);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(d,a[t])&&(p[a[t]]=d[a[t]]);return p},oe=function(r){var p,a=r.prefixCls,t=r.className,e=r.checked,l=r.onChange,n=r.onClick,i=le(r,["prefixCls","className","checked","onChange","onClick"]),m=s.useContext(Y.E_),c=m.getPrefixCls,u=function(I){l==null||l(!e),n==null||n(I)},f=c("tag",a),h=Q(f),v=(0,O.Z)(h,2),b=v[0],E=v[1],Z=V()(f,(p={},(0,o.Z)(p,f+"-checkable",!0),(0,o.Z)(p,f+"-checkable-checked",e),p),t,E);return b(s.createElement("span",(0,P.Z)({},i,{className:Z,onClick:u})))},K=oe,ae=function(d,r){var p={};for(var a in d)Object.prototype.hasOwnProperty.call(d,a)&&r.indexOf(a)<0&&(p[a]=d[a]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(d);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(d,a[t])&&(p[a[t]]=d[a[t]]);return p},ie=new RegExp("^("+J.Y.join("|")+")(-inverse)?$"),se=new RegExp("^("+J.E.join("|")+")$"),X=function(r,p){var a,t=r.prefixCls,e=r.className,l=r.style,n=r.children,i=r.icon,m=r.color,c=r.onClose,u=r.closeIcon,f=r.closable,h=f===void 0?!1:f,v=ae(r,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),b=s.useContext(Y.E_),E=b.getPrefixCls,Z=b.direction,y=s.useState(!0),I=(0,O.Z)(y,2),z=I[0],T=I[1];s.useEffect(function(){"visible"in v&&T(v.visible)},[v.visible]);var B=function(){return m?ie.test(m)||se.test(m):!1},M=(0,P.Z)({backgroundColor:m&&!B()?m:void 0},l),S=B(),x=E("tag",t),R=Q(x),w=(0,O.Z)(R,2),j=w[0],D=w[1],de=V()(x,(a={},(0,o.Z)(a,x+"-"+m,S),(0,o.Z)(a,x+"-has-color",m&&!S),(0,o.Z)(a,x+"-hidden",!z),(0,o.Z)(a,x+"-rtl",Z==="rtl"),a),e,D),U=function(ve){ve.stopPropagation(),c==null||c(ve),!ve.defaultPrevented&&T(!1)},me=function(){return h?u?s.createElement("span",{className:x+"-close-icon",onClick:U},u):s.createElement(_.Z,{className:x+"-close-icon",onClick:U}):null},ge="onClick"in v||n&&n.type==="a",q=i||null,pe=q?s.createElement(s.Fragment,null,q,s.createElement("span",null,n)):n,A=s.createElement("span",(0,P.Z)({},v,{ref:p,className:de,style:M}),pe,me());return j(ge?s.createElement($.Z,null,A):A)},G=s.forwardRef(X);G.CheckableTag=K;var ce=G}}]);
