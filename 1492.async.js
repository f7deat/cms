(self.webpackChunk=self.webpackChunk||[]).push([[1492],{27363:function(q,x){"use strict";var a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};x.Z=a},96074:function(q,x,a){"use strict";a.d(x,{Z:function(){return M}});var n=a(94184),O=a.n(n),z=a(62435),oe=a(53124),N=a(14747),h=a(67968),b=a(45503);const C=s=>{const{componentCls:p,sizePaddingEdgeHorizontal:A,colorSplit:d,lineWidth:y}=s;return{[p]:Object.assign(Object.assign({},(0,N.Wf)(s)),{borderBlockStart:`${y}px solid ${d}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${s.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${y}px solid ${d}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${s.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${p}-with-text`]:{display:"flex",alignItems:"center",margin:`${s.dividerHorizontalWithTextGutterMargin}px 0`,color:s.colorTextHeading,fontWeight:500,fontSize:s.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${d}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${y}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${p}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${p}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${p}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:d,borderStyle:"dashed",borderWidth:`${y}px 0 0`},[`&-horizontal${p}-with-text${p}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${p}-dashed`]:{borderInlineStartWidth:y,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${p}-with-text`]:{color:s.colorText,fontWeight:"normal",fontSize:s.fontSize},[`&-horizontal${p}-with-text-left${p}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${p}-inner-text`]:{paddingInlineStart:A}},[`&-horizontal${p}-with-text-right${p}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${p}-inner-text`]:{paddingInlineEnd:A}}})}};var J=(0,h.Z)("Divider",s=>{const p=(0,b.TS)(s,{dividerVerticalGutterMargin:s.marginXS,dividerHorizontalWithTextGutterMargin:s.margin,dividerHorizontalGutterMargin:s.marginLG});return[C(p)]},{sizePaddingEdgeHorizontal:0}),ce=function(s,p){var A={};for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&p.indexOf(d)<0&&(A[d]=s[d]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,d=Object.getOwnPropertySymbols(s);y<d.length;y++)p.indexOf(d[y])<0&&Object.prototype.propertyIsEnumerable.call(s,d[y])&&(A[d[y]]=s[d[y]]);return A},M=s=>{const{getPrefixCls:p,direction:A}=z.useContext(oe.E_),{prefixCls:d,type:y="horizontal",orientation:ie="center",orientationMargin:F,className:he,rootClassName:be,children:ge,dashed:me,plain:Ee}=s,de=ce(s,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),B=p("divider",d),[ze,Ze]=J(B),xe=ie.length>0?`-${ie}`:ie,Se=!!ge,Oe=ie==="left"&&F!=null,Ce=ie==="right"&&F!=null,De=O()(B,Ze,`${B}-${y}`,{[`${B}-with-text`]:Se,[`${B}-with-text${xe}`]:Se,[`${B}-dashed`]:!!me,[`${B}-plain`]:!!Ee,[`${B}-rtl`]:A==="rtl",[`${B}-no-default-orientation-margin-left`]:Oe,[`${B}-no-default-orientation-margin-right`]:Ce},he,be),we=z.useMemo(()=>typeof F=="number"?F:/^\d+$/.test(F)?Number(F):F,[F]),Ne=Object.assign(Object.assign({},Oe&&{marginLeft:we}),Ce&&{marginRight:we});return ze(z.createElement("div",Object.assign({className:De},de,{role:"separator"}),ge&&y!=="vertical"&&z.createElement("span",{className:`${B}-inner-text`,style:Ne},ge)))}},49867:function(q,x,a){"use strict";a.d(x,{N:function(){return n}});const n=O=>({color:O.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${O.motionDurationSlow}`,"&:focus, &:hover":{color:O.colorLinkHover},"&:active":{color:O.colorLinkActive}})},25514:function(q,x,a){"use strict";a.d(x,{Z:function(){return zt}});var n=a(62435),O=a(35918),z=a(87462),oe=a(48820),N=a(93771),h=function(o,r){return n.createElement(N.Z,(0,z.Z)({},o,{ref:r,icon:oe.Z}))},b=n.forwardRef(h),C=a(27363),J=function(o,r){return n.createElement(N.Z,(0,z.Z)({},o,{ref:r,icon:C.Z}))},ce=n.forwardRef(J),re=a(94184),M=a.n(re),s=a(20640),p=a.n(s),A=a(9220),d=a(50344),y=a(8410),ie=a(21770),F=a(98423),he=a(42550),be=a(53124),ge=a(10110),me=a(83062),Ee=a(79370),de=a(15105),B=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const ze={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"};var xe=n.forwardRef((e,o)=>{const r=E=>{const{keyCode:f}=E;f===de.Z.ENTER&&E.preventDefault()},t=E=>{const{keyCode:f}=E,{onClick:P}=e;f===de.Z.ENTER&&P&&P()},{style:i,noStyle:v,disabled:w}=e,I=B(e,["style","noStyle","disabled"]);let m={};return v||(m=Object.assign({},ze)),w&&(m.pointerEvents="none"),m=Object.assign(Object.assign({},m),i),n.createElement("div",Object.assign({role:"button",tabIndex:0,ref:o},I,{onKeyDown:r,onKeyUp:t,style:m}))}),Se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Oe=Se,Ce=function(o,r){return n.createElement(N.Z,(0,z.Z)({},o,{ref:r,icon:Oe}))},De=n.forwardRef(Ce),we=a(22913),Ne=a(96159),We=a(49867),ot=a(67968),rt=a(78589),it=a(47673);const lt=(e,o,r,t)=>{const{titleMarginBottom:i,fontWeightStrong:v}=t;return{marginBottom:i,color:r,fontWeight:v,fontSize:e,lineHeight:o}},at=e=>{const o=[1,2,3,4,5],r={};return o.forEach(t=>{r[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `]=lt(e[`fontSizeHeading${t}`],e[`lineHeightHeading${t}`],e.colorTextHeading,e)}),r},st=e=>{const{componentCls:o}=e;return{"a&, a":Object.assign(Object.assign({},(0,We.N)(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${o}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},ct=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:rt.EV[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),dt=e=>{const{componentCls:o}=e,t=(0,it.e5)(e).inputPaddingVertical+1;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-t,marginBottom:`calc(1em - ${t}px)`},[`${o}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},ft=e=>({"&-copy-success":{[`
    &,
    &:hover,
    &:focus`]:{color:e.colorSuccess}}}),ut=()=>({[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),pt=e=>{const{componentCls:o,titleMarginTop:r}=e;return{[o]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${o}-secondary`]:{color:e.colorTextDescription},[`&${o}-success`]:{color:e.colorSuccess},[`&${o}-warning`]:{color:e.colorWarning},[`&${o}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${o}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"}},at(e)),{[`
      & + h1${o},
      & + h2${o},
      & + h3${o},
      & + h4${o},
      & + h5${o}
      `]:{marginTop:r},[`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]:{[`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]:{marginTop:r}}}),ct(e)),st(e)),{[`
        ${o}-expand,
        ${o}-edit,
        ${o}-copy
      `]:Object.assign(Object.assign({},(0,We.N)(e)),{marginInlineStart:e.marginXXS})}),dt(e)),ft(e)),ut()),{"&-rtl":{direction:"rtl"}})}};var Ae=(0,ot.Z)("Typography",e=>[pt(e)],e=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em",fontWeightStrong:e.fontWeightStrong})),gt=e=>{let{prefixCls:o,"aria-label":r,className:t,style:i,direction:v,maxLength:w,autoSize:I=!0,value:m,onSave:E,onCancel:f,onEnd:P,component:S,enterIcon:k=n.createElement(De,null)}=e;const R=n.useRef(null),H=n.useRef(!1),Y=n.useRef(),[G,Z]=n.useState(m);n.useEffect(()=>{Z(m)},[m]),n.useEffect(()=>{if(R.current&&R.current.resizableTextArea){const{textArea:D}=R.current.resizableTextArea;D.focus();const{length:U}=D.value;D.setSelectionRange(U,U)}},[]);const u=D=>{let{target:U}=D;Z(U.value.replace(/[\n\r]/g,""))},le=()=>{H.current=!0},ae=()=>{H.current=!1},T=D=>{let{keyCode:U}=D;H.current||(Y.current=U)},fe=()=>{E(G.trim())},$=D=>{let{keyCode:U,ctrlKey:He,altKey:ve,metaKey:ee,shiftKey:ue}=D;Y.current===U&&!H.current&&!He&&!ve&&!ee&&!ue&&(U===de.Z.ENTER?(fe(),P==null||P()):U===de.Z.ESC&&f())},g=()=>{fe()},W=S?`${o}-${S}`:"",[se,_]=Ae(o),Q=M()(o,`${o}-edit-content`,{[`${o}-rtl`]:v==="rtl"},t,W,_);return se(n.createElement("div",{className:Q,style:i},n.createElement(we.Z,{ref:R,maxLength:w,value:G,onChange:u,onKeyDown:T,onKeyUp:$,onCompositionStart:le,onCompositionEnd:ae,onBlur:g,"aria-label":r,rows:1,autoSize:I}),k!==null?(0,Ne.Tm)(k,{className:`${o}-edit-content-confirm`}):null))};function Me(e,o){return n.useMemo(()=>{const r=!!e;return[r,Object.assign(Object.assign({},o),r&&typeof e=="object"?e:null)]},[e])}var mt=(e,o)=>{const r=n.useRef(!1);n.useEffect(()=>{r.current?e():r.current=!0},o)},yt=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r},ke=n.forwardRef((e,o)=>{var{prefixCls:r,component:t="article",className:i,rootClassName:v,setContentRef:w,children:I,direction:m}=e,E=yt(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction"]);const{getPrefixCls:f,direction:P}=n.useContext(be.E_),S=m!=null?m:P;let k=o;w&&(k=(0,he.sQ)(o,w));const R=f("typography",r),[H,Y]=Ae(R),G=M()(R,{[`${R}-rtl`]:S==="rtl"},i,v,Y);return H(n.createElement(t,Object.assign({className:G,ref:k},E),I))});function Ue(e){const o=typeof e;return o==="string"||o==="number"}function vt(e){let o=0;return e.forEach(r=>{Ue(r)?o+=String(r).length:o+=1}),o}function Ke(e,o){let r=0;const t=[];for(let i=0;i<e.length;i+=1){if(r===o)return t;const v=e[i],I=Ue(v)?String(v).length:1,m=r+I;if(m>o){const E=o-r;return t.push(String(v).slice(0,E)),t}t.push(v),r=m}return e}const ht=0,Te=1,Fe=2,Be=3,Ge=4;var bt=e=>{let{enabledMeasure:o,children:r,text:t,width:i,fontSize:v,rows:w,onEllipsis:I}=e;const[[m,E,f],P]=n.useState([0,0,0]),[S,k]=n.useState(ht),[R,H]=n.useState(0),Y=n.useRef(null),G=n.useRef(null),Z=n.useMemo(()=>(0,d.Z)(t),[t]),u=n.useMemo(()=>vt(Z),[Z]),le=n.useMemo(()=>!o||S!==Be?r(Z,!1):r(Ke(Z,E),E<u),[o,S,r,Z,E,u]);(0,y.Z)(()=>{o&&i&&v&&u&&(k(Te),P([0,Math.ceil(u/2),u]))},[o,i,v,t,u,w]),(0,y.Z)(()=>{var $;S===Te&&H((($=Y.current)===null||$===void 0?void 0:$.offsetHeight)||0)},[S]),(0,y.Z)(()=>{var $,g;if(R){if(S===Te){const W=(($=G.current)===null||$===void 0?void 0:$.offsetHeight)||0,se=w*R;W<=se?(k(Ge),I(!1)):k(Fe)}else if(S===Fe)if(m!==f){const W=((g=G.current)===null||g===void 0?void 0:g.offsetHeight)||0,se=w*R;let _=m,Q=f;m===f-1?Q=m:W<=se?_=E:Q=E;const D=Math.ceil((_+Q)/2);P([_,D,Q])}else k(Be),I(!0)}},[S,m,f,w,R]);const ae={width:i,whiteSpace:"normal",margin:0,padding:0},T=($,g,W)=>n.createElement("span",{"aria-hidden":!0,ref:g,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(v/2)*2},W)},$),fe=($,g)=>{const W=Ke(Z,$);return T(r(W,!0),g,ae)};return n.createElement(n.Fragment,null,le,o&&S!==Be&&S!==Ge&&n.createElement(n.Fragment,null,T("lg",Y,{wordBreak:"keep-all",whiteSpace:"nowrap"}),S===Te?T(r(Z,!1),G,ae):fe(E,G)))},Et=e=>{let{enabledEllipsis:o,isEllipsis:r,children:t,tooltipProps:i}=e;return!(i!=null&&i.title)||!o?t:n.createElement(me.Z,Object.assign({open:r?void 0:!1},i),t)},xt=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};function St(e,o){let{mark:r,code:t,underline:i,delete:v,strong:w,keyboard:I,italic:m}=e,E=o;function f(P,S){S&&(E=n.createElement(P,{},E))}return f("strong",w),f("u",i),f("del",v),f("code",t),f("mark",r),f("kbd",I),f("i",m),E}function $e(e,o,r){return e===!0||e===void 0?o:e||r&&o}function Ve(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}const Ot="...";var je=n.forwardRef((e,o)=>{var r,t,i;const{prefixCls:v,className:w,style:I,type:m,disabled:E,children:f,ellipsis:P,editable:S,copyable:k,component:R,title:H}=e,Y=xt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:G,direction:Z}=n.useContext(be.E_),[u]=(0,ge.Z)("Text"),le=n.useRef(null),ae=n.useRef(null),T=G("typography",v),fe=(0,F.Z)(Y,["mark","code","delete","underline","strong","keyboard","italic"]),[$,g]=Me(S),[W,se]=(0,ie.Z)(!1,{value:g.editing}),{triggerType:_=["icon"]}=g,Q=l=>{var c;l&&((c=g.onStart)===null||c===void 0||c.call(g)),se(l)};mt(()=>{var l;W||(l=ae.current)===null||l===void 0||l.focus()},[W]);const D=l=>{l==null||l.preventDefault(),Q(!0)},U=l=>{var c;(c=g.onChange)===null||c===void 0||c.call(g,l),Q(!1)},He=()=>{var l;(l=g.onCancel)===null||l===void 0||l.call(g),Q(!1)},[ve,ee]=Me(k),[ue,Xe]=n.useState(!1),Je=n.useRef(),Qe={};ee.format&&(Qe.format=ee.format);const Ye=()=>{window.clearTimeout(Je.current)},Dt=l=>{var c;l==null||l.preventDefault(),l==null||l.stopPropagation(),p()(ee.text||String(f)||"",Qe),Xe(!0),Ye(),Je.current=window.setTimeout(()=>{Xe(!1)},3e3),(c=ee.onCopy)===null||c===void 0||c.call(ee,l)};n.useEffect(()=>Ye,[]);const[qe,Nt]=n.useState(!1),[_e,Mt]=n.useState(!1),[Bt,Ht]=n.useState(!1),[et,Zt]=n.useState(!1),[tt,Wt]=n.useState(!1),[At,kt]=n.useState(!0),[te,j]=Me(P,{expandable:!1}),V=te&&!Bt,{rows:pe=1}=j,Re=n.useMemo(()=>!V||j.suffix!==void 0||j.onEllipsis||j.expandable||$||ve,[V,j,$,ve]);(0,y.Z)(()=>{te&&!Re&&(Nt((0,Ee.G)("webkitLineClamp")),Mt((0,Ee.G)("textOverflow")))},[Re,te]);const X=n.useMemo(()=>Re?!1:pe===1?_e:qe,[Re,_e,qe]),nt=V&&(X?tt:et),Ut=V&&pe===1&&X,Ie=V&&pe>1&&X,Kt=l=>{var c;Ht(!0),(c=j.onExpand)===null||c===void 0||c.call(j,l)},[Ft,Gt]=n.useState(0),[Vt,Xt]=n.useState(0),Jt=(l,c)=>{let{offsetWidth:L}=l;var K;Gt(L),Xt(parseInt((K=window.getComputedStyle)===null||K===void 0?void 0:K.call(window,c).fontSize,10)||0)},Qt=l=>{var c;Zt(l),et!==l&&((c=j.onEllipsis)===null||c===void 0||c.call(j,l))};n.useEffect(()=>{const l=le.current;if(te&&X&&l){const c=Ie?l.offsetHeight<l.scrollHeight:l.offsetWidth<l.scrollWidth;tt!==c&&Wt(c)}},[te,X,f,Ie,At]),n.useEffect(()=>{const l=le.current;if(typeof IntersectionObserver=="undefined"||!l||!X||!V)return;const c=new IntersectionObserver(()=>{kt(!!l.offsetParent)});return c.observe(l),()=>{c.disconnect()}},[X,V]);let ne={};j.tooltip===!0?ne={title:(r=g.text)!==null&&r!==void 0?r:f}:n.isValidElement(j.tooltip)?ne={title:j.tooltip}:typeof j.tooltip=="object"?ne=Object.assign({title:(t=g.text)!==null&&t!==void 0?t:f},j.tooltip):ne={title:j.tooltip};const Pe=n.useMemo(()=>{const l=c=>["string","number"].includes(typeof c);if(!(!te||X)){if(l(g.text))return g.text;if(l(f))return f;if(l(H))return H;if(l(ne.title))return ne.title}},[te,X,H,ne.title,nt]);if(W)return n.createElement(gt,{value:(i=g.text)!==null&&i!==void 0?i:typeof f=="string"?f:"",onSave:U,onCancel:He,onEnd:g.onEnd,prefixCls:T,className:w,style:I,direction:Z,component:R,maxLength:g.maxLength,autoSize:g.autoSize,enterIcon:g.enterIcon});const Yt=()=>{const{expandable:l,symbol:c}=j;if(!l)return null;let L;return c?L=c:L=u==null?void 0:u.expand,n.createElement("a",{key:"expand",className:`${T}-expand`,onClick:Kt,"aria-label":u==null?void 0:u.expand},L)},qt=()=>{if(!$)return;const{icon:l,tooltip:c}=g,L=(0,d.Z)(c)[0]||(u==null?void 0:u.edit),K=typeof L=="string"?L:"";return _.includes("icon")?n.createElement(me.Z,{key:"edit",title:c===!1?"":L},n.createElement(xe,{ref:ae,className:`${T}-edit`,onClick:D,"aria-label":K},l||n.createElement(ce,{role:"button"}))):null},_t=()=>{if(!ve)return;const{tooltips:l,icon:c}=ee,L=Ve(l),K=Ve(c),Le=ue?$e(L[1],u==null?void 0:u.copied):$e(L[0],u==null?void 0:u.copy),nn=ue?u==null?void 0:u.copied:u==null?void 0:u.copy,on=typeof Le=="string"?Le:nn;return n.createElement(me.Z,{key:"copy",title:Le},n.createElement(xe,{className:M()(`${T}-copy`,ue&&`${T}-copy-success`),onClick:Dt,"aria-label":on},ue?$e(K[1],n.createElement(O.Z,null),!0):$e(K[0],n.createElement(b,null),!0)))},en=l=>[l&&Yt(),qt(),_t()],tn=l=>[l&&n.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Ot),j.suffix,en(l)];return n.createElement(A.Z,{onResize:Jt,disabled:!V||X},l=>n.createElement(Et,{tooltipProps:ne,enabledEllipsis:V,isEllipsis:nt},n.createElement(ke,Object.assign({className:M()({[`${T}-${m}`]:m,[`${T}-disabled`]:E,[`${T}-ellipsis`]:te,[`${T}-single-line`]:V&&pe===1,[`${T}-ellipsis-single-line`]:Ut,[`${T}-ellipsis-multiple-line`]:Ie},w),prefixCls:v,style:Object.assign(Object.assign({},I),{WebkitLineClamp:Ie?pe:void 0}),component:R,ref:(0,he.sQ)(l,le,o),direction:Z,onClick:_.includes("text")?D:void 0,"aria-label":Pe==null?void 0:Pe.toString(),title:H},fe),n.createElement(bt,{enabledMeasure:V&&!X,text:f,rows:pe,width:Ft,fontSize:Vt,onEllipsis:Qt},(c,L)=>{let K=c;return c.length&&L&&Pe&&(K=n.createElement("span",{key:"show-content","aria-hidden":!0},K)),St(e,n.createElement(n.Fragment,null,K,tn(L)))}))))}),Ct=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r},wt=n.forwardRef((e,o)=>{var{ellipsis:r,rel:t}=e,i=Ct(e,["ellipsis","rel"]);const v=Object.assign(Object.assign({},i),{rel:t===void 0&&i.target==="_blank"?"noopener noreferrer":t});return delete v.navigate,n.createElement(je,Object.assign({},v,{ref:o,ellipsis:!!r,component:"a"}))}),Tt=n.forwardRef((e,o)=>n.createElement(je,Object.assign({ref:o},e,{component:"div"}))),$t=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const jt=(e,o)=>{var{ellipsis:r}=e,t=$t(e,["ellipsis"]);const i=n.useMemo(()=>r&&typeof r=="object"?(0,F.Z)(r,["expandable","rows"]):r,[r]);return n.createElement(je,Object.assign({ref:o},t,{ellipsis:i,component:"span"}))};var Rt=n.forwardRef(jt),It=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const Pt=[1,2,3,4,5];var Lt=n.forwardRef((e,o)=>{const{level:r=1}=e,t=It(e,["level"]);let i;return Pt.includes(r)?i=`h${r}`:i="h1",n.createElement(je,Object.assign({ref:o},t,{component:i}))});const ye=ke;ye.Text=Rt,ye.Link=wt,ye.Title=Lt,ye.Paragraph=Tt;var zt=ye},20640:function(q,x,a){"use strict";var n=a(11742),O={"text/plain":"Text","text/html":"Url",default:"Text"},z="Copy to clipboard: #{key}, Enter";function oe(h){var b=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return h.replace(/#{\s*key\s*}/g,b)}function N(h,b){var C,J,ce,re,M,s,p=!1;b||(b={}),C=b.debug||!1;try{ce=n(),re=document.createRange(),M=document.getSelection(),s=document.createElement("span"),s.textContent=h,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(d){if(d.stopPropagation(),b.format)if(d.preventDefault(),typeof d.clipboardData=="undefined"){C&&console.warn("unable to use e.clipboardData"),C&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var y=O[b.format]||O.default;window.clipboardData.setData(y,h)}else d.clipboardData.clearData(),d.clipboardData.setData(b.format,h);b.onCopy&&(d.preventDefault(),b.onCopy(d.clipboardData))}),document.body.appendChild(s),re.selectNodeContents(s),M.addRange(re);var A=document.execCommand("copy");if(!A)throw new Error("copy command was unsuccessful");p=!0}catch(d){C&&console.error("unable to copy using execCommand: ",d),C&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(b.format||"text",h),b.onCopy&&b.onCopy(window.clipboardData),p=!0}catch(y){C&&console.error("unable to copy using clipboardData: ",y),C&&console.error("falling back to prompt"),J=oe("message"in b?b.message:z),window.prompt(J,h)}}finally{M&&(typeof M.removeRange=="function"?M.removeRange(re):M.removeAllRanges()),s&&document.body.removeChild(s),ce()}return p}q.exports=N},79370:function(q,x,a){"use strict";a.d(x,{G:function(){return oe}});var n=a(98924),O=function(h){if((0,n.Z)()&&window.document.documentElement){var b=Array.isArray(h)?h:[h],C=window.document.documentElement;return b.some(function(J){return J in C.style})}return!1},z=function(h,b){if(!O(h))return!1;var C=document.createElement("div"),J=C.style[h];return C.style[h]=b,C.style[h]!==J};function oe(N,h){return!Array.isArray(N)&&h!==void 0?z(N,h):O(N)}},11742:function(q){q.exports=function(){var x=document.getSelection();if(!x.rangeCount)return function(){};for(var a=document.activeElement,n=[],O=0;O<x.rangeCount;O++)n.push(x.getRangeAt(O));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return x.removeAllRanges(),function(){x.type==="Caret"&&x.removeAllRanges(),x.rangeCount||n.forEach(function(z){x.addRange(z)}),a&&a.focus()}}}}]);