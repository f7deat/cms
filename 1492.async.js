(self.webpackChunk=self.webpackChunk||[]).push([[1492],{27363:function(ne,S){"use strict";var a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};S.Z=a},96074:function(ne,S,a){"use strict";a.d(S,{Z:function(){return H}});var n=a(94184),O=a.n(n),N=a(62435),ae=a(53124),B=a(14747),v=a(67968),h=a(45503);const C=s=>{const{componentCls:p,sizePaddingEdgeHorizontal:K,colorSplit:d,lineWidth:b,textPaddingInline:ue,orientationMargin:Z,verticalMarginInline:W}=s;return{[p]:Object.assign(Object.assign({},(0,B.Wf)(s)),{borderBlockStart:`${b}px solid ${d}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:W,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${b}px solid ${d}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${s.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${p}-with-text`]:{display:"flex",alignItems:"center",margin:`${s.dividerHorizontalWithTextGutterMargin}px 0`,color:s.colorTextHeading,fontWeight:500,fontSize:s.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${d}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${b}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${p}-with-text-left`]:{"&::before":{width:`${Z*100}%`},"&::after":{width:`${100-Z*100}%`}},[`&-horizontal${p}-with-text-right`]:{"&::before":{width:`${100-Z*100}%`},"&::after":{width:`${Z*100}%`}},[`${p}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:ue},"&-dashed":{background:"none",borderColor:d,borderStyle:"dashed",borderWidth:`${b}px 0 0`},[`&-horizontal${p}-with-text${p}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${p}-dashed`]:{borderInlineStartWidth:b,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${p}-with-text`]:{color:s.colorText,fontWeight:"normal",fontSize:s.fontSize},[`&-horizontal${p}-with-text-left${p}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${p}-inner-text`]:{paddingInlineStart:K}},[`&-horizontal${p}-with-text-right${p}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${p}-inner-text`]:{paddingInlineEnd:K}}})}};var q=(0,v.Z)("Divider",s=>{const p=(0,h.TS)(s,{dividerHorizontalWithTextGutterMargin:s.margin,dividerHorizontalGutterMargin:s.marginLG,sizePaddingEdgeHorizontal:0});return[C(p)]},s=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:s.marginXS})),de=function(s,p){var K={};for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&p.indexOf(d)<0&&(K[d]=s[d]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,d=Object.getOwnPropertySymbols(s);b<d.length;b++)p.indexOf(d[b])<0&&Object.prototype.propertyIsEnumerable.call(s,d[b])&&(K[d[b]]=s[d[b]]);return K},H=s=>{const{getPrefixCls:p,direction:K,divider:d}=N.useContext(ae.E_),{prefixCls:b,type:ue="horizontal",orientation:Z="center",orientationMargin:W,className:xe,rootClassName:fe,children:me,dashed:De,plain:Ke,style:Se}=s,Oe=de(s,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),A=p("divider",b),[ye,Me]=q(A),Ne=Z.length>0?`-${Z}`:Z,Ce=!!me,we=Z==="left"&&W!=null,$e=Z==="right"&&W!=null,Be=O()(A,d==null?void 0:d.className,Me,`${A}-${ue}`,{[`${A}-with-text`]:Ce,[`${A}-with-text${Ne}`]:Ce,[`${A}-dashed`]:!!De,[`${A}-plain`]:!!Ke,[`${A}-rtl`]:K==="rtl",[`${A}-no-default-orientation-margin-left`]:we,[`${A}-no-default-orientation-margin-right`]:$e},xe,fe),ve=N.useMemo(()=>typeof W=="number"?W:/^\d+$/.test(W)?Number(W):W,[W]),He=Object.assign(Object.assign({},we&&{marginLeft:ve}),$e&&{marginRight:ve});return ye(N.createElement("div",Object.assign({className:Be,style:Object.assign(Object.assign({},d==null?void 0:d.style),Se)},Oe,{role:"separator"}),me&&ue!=="vertical"&&N.createElement("span",{className:`${A}-inner-text`,style:He},me)))}},49867:function(ne,S,a){"use strict";a.d(S,{N:function(){return n}});const n=O=>({color:O.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${O.motionDurationSlow}`,"&:focus, &:hover":{color:O.colorLinkHover},"&:active":{color:O.colorLinkActive}})},25514:function(ne,S,a){"use strict";a.d(S,{Z:function(){return Pt}});var n=a(62435),O=a(64894),N=a(87462),ae=a(48820),B=a(93771),v=function(o,r){return n.createElement(B.Z,(0,N.Z)({},o,{ref:r,icon:ae.Z}))},h=n.forwardRef(v),C=a(27363),q=function(o,r){return n.createElement(B.Z,(0,N.Z)({},o,{ref:r,icon:C.Z}))},de=n.forwardRef(q),se=a(94184),H=a.n(se),s=a(20640),p=a.n(s),K=a(9220),d=a(50344),b=a(8410),ue=a(21770),Z=a(98423),W=a(42550),xe=a(79370),fe=a(15105),me=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const De={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"};var Se=n.forwardRef((e,o)=>{const r=y=>{const{keyCode:u}=y;u===fe.Z.ENTER&&y.preventDefault()},t=y=>{const{keyCode:u}=y,{onClick:z}=e;u===fe.Z.ENTER&&z&&z()},{style:i,noStyle:m,disabled:w}=e,P=me(e,["style","noStyle","disabled"]);let g={};return m||(g=Object.assign({},De)),w&&(g.pointerEvents="none"),g=Object.assign(Object.assign({},g),i),n.createElement("div",Object.assign({role:"button",tabIndex:0,ref:o},P,{onKeyDown:r,onKeyUp:t,style:g}))}),Oe=a(53124),A=a(10110),ye=a(83062),Me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Ne=Me,Ce=function(o,r){return n.createElement(B.Z,(0,N.Z)({},o,{ref:r,icon:Ne}))},we=n.forwardRef(Ce),$e=a(96159),Be=a(22913),ve=a(49867),He=a(67968),rt=a(78589);const it=(e,o,r,t)=>{const{titleMarginBottom:i,fontWeightStrong:m}=t;return{marginBottom:i,color:r,fontWeight:m,fontSize:e,lineHeight:o}},lt=e=>{const o=[1,2,3,4,5],r={};return o.forEach(t=>{r[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `]=it(e[`fontSizeHeading${t}`],e[`lineHeightHeading${t}`],e.colorTextHeading,e)}),r},at=e=>{const{componentCls:o}=e;return{"a&, a":Object.assign(Object.assign({},(0,ve.N)(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${o}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},st=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:rt.EV[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),ct=e=>{const{componentCls:o,paddingSM:r}=e,t=r;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-t,marginBottom:`calc(1em - ${t}px)`},[`${o}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},dt=e=>({"&-copy-success":{[`
    &,
    &:hover,
    &:focus`]:{color:e.colorSuccess}}}),ut=()=>({[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),ft=e=>{const{componentCls:o,titleMarginTop:r}=e;return{[o]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${o}-secondary`]:{color:e.colorTextDescription},[`&${o}-success`]:{color:e.colorSuccess},[`&${o}-warning`]:{color:e.colorWarning},[`&${o}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${o}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"}},lt(e)),{[`
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
        `]:{marginTop:r}}}),st(e)),at(e)),{[`
        ${o}-expand,
        ${o}-edit,
        ${o}-copy
      `]:Object.assign(Object.assign({},(0,ve.N)(e)),{marginInlineStart:e.marginXXS})}),ct(e)),dt(e)),ut()),{"&-rtl":{direction:"rtl"}})}};var Fe=(0,He.Z)("Typography",e=>[ft(e)],()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"})),pt=e=>{const{prefixCls:o,"aria-label":r,className:t,style:i,direction:m,maxLength:w,autoSize:P=!0,value:g,onSave:y,onCancel:u,onEnd:z,component:F,enterIcon:k=n.createElement(we,null)}=e,x=n.useRef(null),$=n.useRef(!1),U=n.useRef(),[oe,_]=n.useState(g);n.useEffect(()=>{_(g)},[g]),n.useEffect(()=>{if(x.current&&x.current.resizableTextArea){const{textArea:L}=x.current.resizableTextArea;L.focus();const{length:j}=L.value;L.setSelectionRange(j,j)}},[]);const f=L=>{let{target:j}=L;_(j.value.replace(/[\n\r]/g,""))},R=()=>{$.current=!0},G=()=>{$.current=!1},D=L=>{let{keyCode:j}=L;$.current||(U.current=j)},ce=()=>{y(oe.trim())},ee=L=>{let{keyCode:j,ctrlKey:be,altKey:Ee,metaKey:re,shiftKey:pe}=L;U.current===j&&!$.current&&!be&&!Ee&&!re&&!pe&&(j===fe.Z.ENTER?(ce(),z==null||z()):j===fe.Z.ESC&&u())},E=()=>{ce()},T=F?`${o}-${F}`:"",[J,V]=Fe(o),te=H()(o,`${o}-edit-content`,{[`${o}-rtl`]:m==="rtl"},t,T,V);return J(n.createElement("div",{className:te,style:i},n.createElement(Be.Z,{ref:x,maxLength:w,value:oe,onChange:f,onKeyDown:D,onKeyUp:ee,onCompositionStart:R,onCompositionEnd:G,onBlur:E,"aria-label":r,rows:1,autoSize:P}),k!==null?(0,$e.Tm)(k,{className:`${o}-edit-content-confirm`}):null))},gt=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r},Ge=n.forwardRef((e,o)=>{const{prefixCls:r,component:t="article",className:i,rootClassName:m,setContentRef:w,children:P,direction:g,style:y}=e,u=gt(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:z,direction:F,typography:k}=n.useContext(Oe.E_),x=g!=null?g:F;let $=o;w&&($=(0,W.sQ)(o,w));const U=z("typography",r),[oe,_]=Fe(U),f=H()(U,k==null?void 0:k.className,{[`${U}-rtl`]:x==="rtl"},i,m,_),R=Object.assign(Object.assign({},k==null?void 0:k.style),y);return oe(n.createElement(t,Object.assign({className:f,style:R,ref:$},u),P))});function Ze(e,o){return n.useMemo(()=>{const r=!!e;return[r,Object.assign(Object.assign({},o),r&&typeof e=="object"?e:null)]},[e])}var mt=(e,o)=>{const r=n.useRef(!1);n.useEffect(()=>{r.current?e():r.current=!0},o)};function Ve(e){const o=typeof e;return o==="string"||o==="number"}function yt(e){let o=0;return e.forEach(r=>{Ve(r)?o+=String(r).length:o+=1}),o}function We(e,o){let r=0;const t=[];for(let i=0;i<e.length;i+=1){if(r===o)return t;const m=e[i],P=Ve(m)?String(m).length:1,g=r+P;if(g>o){const y=o-r;return t.push(String(m).slice(0,y)),t}t.push(m),r=g}return e}const vt=0,Te=1,Xe=2,Ae=3,ke=4;var ht=e=>{let{enabledMeasure:o,children:r,text:t,width:i,fontSize:m,rows:w,onEllipsis:P}=e;const[[g,y,u],z]=n.useState([0,0,0]),[F,k]=n.useState(0),[x,$]=n.useState(vt),[U,oe]=n.useState(0),_=n.useRef(null),f=n.useRef(null),R=n.useMemo(()=>(0,d.Z)(t),[t]),G=n.useMemo(()=>yt(R),[R]),D=n.useMemo(()=>!o||x!==Ae?F&&x!==ke&&o?r(We(R,F),F<G):r(R,!1):r(We(R,y),y<G),[o,x,r,R,y,G]);(0,b.Z)(()=>{o&&i&&m&&G&&($(Te),z([0,Math.ceil(G/2),G]))},[o,i,m,t,G,w]),(0,b.Z)(()=>{var T;x===Te&&oe(((T=_.current)===null||T===void 0?void 0:T.offsetHeight)||0)},[x]),(0,b.Z)(()=>{var T,J;if(U){if(x===Te){const V=((T=f.current)===null||T===void 0?void 0:T.offsetHeight)||0,te=w*U;V<=te?($(ke),P(!1)):$(Xe)}else if(x===Xe)if(g!==u){const V=((J=f.current)===null||J===void 0?void 0:J.offsetHeight)||0,te=w*U;let L=g,j=u;g===u-1?j=g:V<=te?L=y:j=y;const be=Math.ceil((L+j)/2);z([L,be,j])}else $(Ae),k(y),P(!0)}},[x,g,u,w,U]);const ce={width:i,whiteSpace:"normal",margin:0,padding:0},ee=(T,J,V)=>n.createElement("span",{"aria-hidden":!0,ref:J,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(m/2)*2},V)},T),E=(T,J)=>{const V=We(R,T);return ee(r(V,!0),J,ce)};return n.createElement(n.Fragment,null,D,o&&x!==Ae&&x!==ke&&n.createElement(n.Fragment,null,ee("lg",_,{wordBreak:"keep-all",whiteSpace:"nowrap"}),x===Te?ee(r(R,!1),f,ce):E(y,f)))},bt=e=>{let{enabledEllipsis:o,isEllipsis:r,children:t,tooltipProps:i}=e;return!(i!=null&&i.title)||!o?t:n.createElement(ye.Z,Object.assign({open:r?void 0:!1},i),t)},Et=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};function xt(e,o){let{mark:r,code:t,underline:i,delete:m,strong:w,keyboard:P,italic:g}=e,y=o;function u(z,F){F&&(y=n.createElement(z,{},y))}return u("strong",w),u("u",i),u("del",m),u("code",t),u("mark",r),u("kbd",P),u("i",g),y}function je(e,o,r){return e===!0||e===void 0?o:e||r&&o}function Je(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}const St="...";var Ie=n.forwardRef((e,o)=>{var r,t,i;const{prefixCls:m,className:w,style:P,type:g,disabled:y,children:u,ellipsis:z,editable:F,copyable:k,component:x,title:$}=e,U=Et(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:oe,direction:_}=n.useContext(Oe.E_),[f]=(0,A.Z)("Text"),R=n.useRef(null),G=n.useRef(null),D=oe("typography",m),ce=(0,Z.Z)(U,["mark","code","delete","underline","strong","keyboard","italic"]),[ee,E]=Ze(F),[T,J]=(0,ue.Z)(!1,{value:E.editing}),{triggerType:V=["icon"]}=E,te=l=>{var c;l&&((c=E.onStart)===null||c===void 0||c.call(E)),J(l)};mt(()=>{var l;T||(l=G.current)===null||l===void 0||l.focus()},[T]);const L=l=>{l==null||l.preventDefault(),te(!0)},j=l=>{var c;(c=E.onChange)===null||c===void 0||c.call(E,l),te(!1)},be=()=>{var l;(l=E.onCancel)===null||l===void 0||l.call(E),te(!1)},[Ee,re]=Ze(k),[pe,Qe]=n.useState(!1),Ue=n.useRef(null),Ye={};re.format&&(Ye.format=re.format);const qe=()=>{Ue.current&&clearTimeout(Ue.current)},zt=l=>{var c;l==null||l.preventDefault(),l==null||l.stopPropagation(),p()(re.text||String(u)||"",Ye),Qe(!0),qe(),Ue.current=setTimeout(()=>{Qe(!1)},3e3),(c=re.onCopy)===null||c===void 0||c.call(re,l)};n.useEffect(()=>qe,[]);const[_e,Dt]=n.useState(!1),[et,Mt]=n.useState(!1),[Nt,Bt]=n.useState(!1),[tt,Ht]=n.useState(!1),[nt,Zt]=n.useState(!1),[Wt,At]=n.useState(!0),[ie,I]=Ze(z,{expandable:!1}),Q=ie&&!Nt,{rows:ge=1}=I,Re=n.useMemo(()=>!Q||I.suffix!==void 0||I.onEllipsis||I.expandable||ee||Ee,[Q,I,ee,Ee]);(0,b.Z)(()=>{ie&&!Re&&(Dt((0,xe.G)("webkitLineClamp")),Mt((0,xe.G)("textOverflow")))},[Re,ie]);const Y=n.useMemo(()=>Re?!1:ge===1?et:_e,[Re,et,_e]),ot=Q&&(Y?nt:tt),kt=Q&&ge===1&&Y,Le=Q&&ge>1&&Y,Ut=l=>{var c;Bt(!0),(c=I.onExpand)===null||c===void 0||c.call(I,l)},[Kt,Ft]=n.useState(0),[Gt,Vt]=n.useState(0),Xt=(l,c)=>{let{offsetWidth:M}=l;var X;Ft(M),Vt(parseInt((X=window.getComputedStyle)===null||X===void 0?void 0:X.call(window,c).fontSize,10)||0)},Jt=l=>{var c;Ht(l),tt!==l&&((c=I.onEllipsis)===null||c===void 0||c.call(I,l))};n.useEffect(()=>{const l=R.current;if(ie&&Y&&l){const c=Le?l.offsetHeight<l.scrollHeight:l.offsetWidth<l.scrollWidth;nt!==c&&Zt(c)}},[ie,Y,u,Le,Wt]),n.useEffect(()=>{const l=R.current;if(typeof IntersectionObserver=="undefined"||!l||!Y||!Q)return;const c=new IntersectionObserver(()=>{At(!!l.offsetParent)});return c.observe(l),()=>{c.disconnect()}},[Y,Q]);let le={};I.tooltip===!0?le={title:(r=E.text)!==null&&r!==void 0?r:u}:n.isValidElement(I.tooltip)?le={title:I.tooltip}:typeof I.tooltip=="object"?le=Object.assign({title:(t=E.text)!==null&&t!==void 0?t:u},I.tooltip):le={title:I.tooltip};const Pe=n.useMemo(()=>{const l=c=>["string","number"].includes(typeof c);if(!(!ie||Y)){if(l(E.text))return E.text;if(l(u))return u;if(l($))return $;if(l(le.title))return le.title}},[ie,Y,$,le.title,ot]);if(T)return n.createElement(pt,{value:(i=E.text)!==null&&i!==void 0?i:typeof u=="string"?u:"",onSave:j,onCancel:be,onEnd:E.onEnd,prefixCls:D,className:w,style:P,direction:_,component:x,maxLength:E.maxLength,autoSize:E.autoSize,enterIcon:E.enterIcon});const Qt=()=>{const{expandable:l,symbol:c}=I;if(!l)return null;let M;return c?M=c:M=f==null?void 0:f.expand,n.createElement("a",{key:"expand",className:`${D}-expand`,onClick:Ut,"aria-label":f==null?void 0:f.expand},M)},Yt=()=>{if(!ee)return;const{icon:l,tooltip:c}=E,M=(0,d.Z)(c)[0]||(f==null?void 0:f.edit),X=typeof M=="string"?M:"";return V.includes("icon")?n.createElement(ye.Z,{key:"edit",title:c===!1?"":M},n.createElement(Se,{ref:G,className:`${D}-edit`,onClick:L,"aria-label":X},l||n.createElement(de,{role:"button"}))):null},qt=()=>{if(!Ee)return;const{tooltips:l,icon:c}=re,M=Je(l),X=Je(c),ze=pe?je(M[1],f==null?void 0:f.copied):je(M[0],f==null?void 0:f.copy),tn=pe?f==null?void 0:f.copied:f==null?void 0:f.copy,nn=typeof ze=="string"?ze:tn;return n.createElement(ye.Z,{key:"copy",title:ze},n.createElement(Se,{className:H()(`${D}-copy`,pe&&`${D}-copy-success`),onClick:zt,"aria-label":nn},pe?je(X[1],n.createElement(O.Z,null),!0):je(X[0],n.createElement(h,null),!0)))},_t=l=>[l&&Qt(),Yt(),qt()],en=l=>[l&&n.createElement("span",{"aria-hidden":!0,key:"ellipsis"},St),I.suffix,_t(l)];return n.createElement(K.Z,{onResize:Xt,disabled:!Q||Y},l=>n.createElement(bt,{tooltipProps:le,enabledEllipsis:Q,isEllipsis:ot},n.createElement(Ge,Object.assign({className:H()({[`${D}-${g}`]:g,[`${D}-disabled`]:y,[`${D}-ellipsis`]:ie,[`${D}-single-line`]:Q&&ge===1,[`${D}-ellipsis-single-line`]:kt,[`${D}-ellipsis-multiple-line`]:Le},w),prefixCls:m,style:Object.assign(Object.assign({},P),{WebkitLineClamp:Le?ge:void 0}),component:x,ref:(0,W.sQ)(l,R,o),direction:_,onClick:V.includes("text")?L:void 0,"aria-label":Pe==null?void 0:Pe.toString(),title:$},ce),n.createElement(ht,{enabledMeasure:Q&&!Y,text:u,rows:ge,width:Kt,fontSize:Gt,onEllipsis:Jt},(c,M)=>{let X=c;return c.length&&M&&Pe&&(X=n.createElement("span",{key:"show-content","aria-hidden":!0},X)),xt(e,n.createElement(n.Fragment,null,X,en(M)))}))))}),Ot=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r},Ct=n.forwardRef((e,o)=>{var{ellipsis:r,rel:t}=e,i=Ot(e,["ellipsis","rel"]);const m=Object.assign(Object.assign({},i),{rel:t===void 0&&i.target==="_blank"?"noopener noreferrer":t});return delete m.navigate,n.createElement(Ie,Object.assign({},m,{ref:o,ellipsis:!!r,component:"a"}))}),wt=n.forwardRef((e,o)=>n.createElement(Ie,Object.assign({ref:o},e,{component:"div"}))),$t=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const Tt=(e,o)=>{var{ellipsis:r}=e,t=$t(e,["ellipsis"]);const i=n.useMemo(()=>r&&typeof r=="object"?(0,Z.Z)(r,["expandable","rows"]):r,[r]);return n.createElement(Ie,Object.assign({ref:o},t,{ellipsis:i,component:"span"}))};var jt=n.forwardRef(Tt),It=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const Rt=[1,2,3,4,5];var Lt=n.forwardRef((e,o)=>{const{level:r=1}=e,t=It(e,["level"]);let i;return Rt.includes(r)?i=`h${r}`:i="h1",n.createElement(Ie,Object.assign({ref:o},t,{component:i}))});const he=Ge;he.Text=jt,he.Link=Ct,he.Title=Lt,he.Paragraph=wt;var Pt=he},20640:function(ne,S,a){"use strict";var n=a(11742),O={"text/plain":"Text","text/html":"Url",default:"Text"},N="Copy to clipboard: #{key}, Enter";function ae(v){var h=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return v.replace(/#{\s*key\s*}/g,h)}function B(v,h){var C,q,de,se,H,s,p=!1;h||(h={}),C=h.debug||!1;try{de=n(),se=document.createRange(),H=document.getSelection(),s=document.createElement("span"),s.textContent=v,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(d){if(d.stopPropagation(),h.format)if(d.preventDefault(),typeof d.clipboardData=="undefined"){C&&console.warn("unable to use e.clipboardData"),C&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var b=O[h.format]||O.default;window.clipboardData.setData(b,v)}else d.clipboardData.clearData(),d.clipboardData.setData(h.format,v);h.onCopy&&(d.preventDefault(),h.onCopy(d.clipboardData))}),document.body.appendChild(s),se.selectNodeContents(s),H.addRange(se);var K=document.execCommand("copy");if(!K)throw new Error("copy command was unsuccessful");p=!0}catch(d){C&&console.error("unable to copy using execCommand: ",d),C&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(h.format||"text",v),h.onCopy&&h.onCopy(window.clipboardData),p=!0}catch(b){C&&console.error("unable to copy using clipboardData: ",b),C&&console.error("falling back to prompt"),q=ae("message"in h?h.message:N),window.prompt(q,v)}}finally{H&&(typeof H.removeRange=="function"?H.removeRange(se):H.removeAllRanges()),s&&document.body.removeChild(s),de()}return p}ne.exports=B},79370:function(ne,S,a){"use strict";a.d(S,{G:function(){return ae}});var n=a(98924),O=function(v){if((0,n.Z)()&&window.document.documentElement){var h=Array.isArray(v)?v:[v],C=window.document.documentElement;return h.some(function(q){return q in C.style})}return!1},N=function(v,h){if(!O(v))return!1;var C=document.createElement("div"),q=C.style[v];return C.style[v]=h,C.style[v]!==q};function ae(B,v){return!Array.isArray(B)&&v!==void 0?N(B,v):O(B)}},11742:function(ne){ne.exports=function(){var S=document.getSelection();if(!S.rangeCount)return function(){};for(var a=document.activeElement,n=[],O=0;O<S.rangeCount;O++)n.push(S.getRangeAt(O));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return S.removeAllRanges(),function(){S.type==="Caret"&&S.removeAllRanges(),S.rangeCount||n.forEach(function(N){S.addRange(N)}),a&&a.focus()}}}}]);