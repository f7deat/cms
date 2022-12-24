"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3859],{5454:function(Zt,W,n){n.r(W),n.d(W,{default:function(){return Gt}});var M=n(97857),d=n.n(M),G=n(15009),z=n.n(G),O=n(99289),B=n.n(O),F=n(5574),V=n.n(F),w=n(78710),X=n(23430),b=n(1413),v=n(62435),H={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}}]},name:"inbox",theme:"outlined"},K=H,$=n(84089),S=function(t,i){return v.createElement($.Z,(0,b.Z)((0,b.Z)({},t),{},{ref:i,icon:K}))};S.displayName="InboxOutlined";var u=v.forwardRef(S),o=n(62884),c=n(30029),e=n(4942),T=n(91),a=n(86074),Y=n(25035),Q=n(46986),k=n(83062),L=n(76521),N=n(87462),lt=n(57838),J=n(96159),q=n(97685),st=n(94184),P=n.n(st),D=n(53124),ct=n(21687),_=function(t){var i=t.value,r=t.formatter,s=t.precision,h=t.decimalSeparator,g=t.groupSeparator,j=g===void 0?"":g,l=t.prefixCls,m;if(typeof r=="function")m=r(i);else{var y=String(i),x=y.match(/^(-?)(\d*)(\.(\d+))?$/);if(!x||y==="-")m=y;else{var Z=x[1],C=x[2]||"0",f=x[4]||"";C=C.replace(/\B(?=(\d{3})+(?!\d))/g,j),typeof s=="number"&&(f=f.padEnd(s,"0").slice(0,s>0?s:0)),f&&(f=""+h+f),m=[v.createElement("span",{key:"int",className:l+"-content-value-int"},Z,C),f&&v.createElement("span",{key:"decimal",className:l+"-content-value-decimal"},f)]}}return v.createElement("span",{className:l+"-content-value"},m)},dt=_,ut=n(67968),ft=n(45503),tt=n(14747),et=function(t){var i,r,s=t.componentCls,h=t.marginXXS,g=t.padding,j=t.colorTextDescription,l=t.statisticTitleFontSize,m=t.colorTextHeading,y=t.statisticContentFontSize,x=t.statisticFontFamily;return(0,e.Z)({},""+s,(0,N.Z)((0,N.Z)({},(0,tt.Wf)(t)),(r={},(0,e.Z)(r,s+"-title",{marginBottom:h,color:j,fontSize:l}),(0,e.Z)(r,s+"-skeleton",{paddingTop:g}),(0,e.Z)(r,s+"-content",(i={color:m,fontSize:y,fontFamily:x},(0,e.Z)(i,s+"-content-value",{display:"inline-block",direction:"ltr"}),(0,e.Z)(i,s+"-content-prefix, "+s+"-content-suffix",{display:"inline-block"}),(0,e.Z)(i,s+"-content-prefix",{marginInlineEnd:h}),(0,e.Z)(i,s+"-content-suffix",{marginInlineStart:h}),i)),r)))},nt=(0,ut.Z)("Statistic",function(p){var t=p.fontSizeHeading3,i=p.fontSize,r=p.fontFamily,s=(0,ft.TS)(p,{statisticTitleFontSize:i,statisticContentFontSize:t,statisticFontFamily:r});return[et(s)]}),vt=function(t){var i=t.prefixCls,r=t.className,s=t.style,h=t.valueStyle,g=t.value,j=g===void 0?0:g,l=t.title,m=t.valueRender,y=t.prefix,x=t.suffix,Z=t.loading,C=Z===void 0?!1:Z,f=t.direction,R=t.onMouseEnter,ht=t.onMouseLeave,at=t.decimalSeparator,gt=at===void 0?".":at,E=t.groupSeparator,rt=E===void 0?",":E,it=v.createElement(dt,(0,N.Z)({decimalSeparator:gt,groupSeparator:rt},t,{value:j})),I=nt(String(i)),ot=(0,q.Z)(I,2),xt=ot[0],St=ot[1],yt=P()(i,(0,e.Z)({},i+"-rtl",f==="rtl"),r,St);return xt(v.createElement("div",{className:yt,style:s,onMouseEnter:R,onMouseLeave:ht},l&&v.createElement("div",{className:i+"-title"},l),v.createElement(ct.Z,{paragraph:!1,loading:C,className:i+"-skeleton"},v.createElement("div",{style:h,className:i+"-content"},y&&v.createElement("span",{className:i+"-content-prefix"},y),m?m(it):it,x&&v.createElement("span",{className:i+"-content-suffix"},x)))))},mt=(0,D.PG)({prefixCls:"statistic"})(vt),pt=mt,Tt=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function Dt(p,t){var i=p,r=/\[[^\]]*]/g,s=(t.match(r)||[]).map(function(l){return l.slice(1,-1)}),h=t.replace(r,"[]"),g=Tt.reduce(function(l,m){var y=(0,q.Z)(m,2),x=y[0],Z=y[1];if(l.includes(x)){var C=Math.floor(i/Z);return i-=C*Z,l.replace(new RegExp(x+"+","g"),function(f){var R=f.length;return C.toString().padStart(R,"0")})}return l},h),j=0;return g.replace(r,function(){var l=s[j];return j+=1,l})}function zt(p,t){var i=t.format,r=i===void 0?"":i,s=new Date(p).getTime(),h=Date.now(),g=Math.max(s-h,0);return Dt(g,r)}var bt=1e3/30;function Nt(p){return new Date(p).getTime()}var It=function(t){var i=t.value,r=t.format,s=r===void 0?"HH:mm:ss":r,h=t.onChange,g=t.onFinish,j=(0,lt.Z)(),l=v.useRef(null),m=function(){g==null||g(),l.current&&(clearInterval(l.current),l.current=null)},y=function(){var f=Nt(i);f>=Date.now()&&(l.current=setInterval(function(){j(),h==null||h(f-Date.now()),f<Date.now()&&m()},bt))};v.useEffect(function(){return y(),function(){l.current&&(clearInterval(l.current),l.current=null)}},[i]);var x=function(f,R){return zt(f,(0,N.Z)((0,N.Z)({},R),{format:s}))},Z=function(f){return(0,J.Tm)(f,{title:void 0})};return v.createElement(pt,(0,N.Z)({},t,{valueRender:Z,formatter:x}))},Ot=v.memo(It);pt.Countdown=Ot;var Pt=pt,Mt=n(46575),wt=function(t){var i,r,s;return(0,e.Z)({},t.componentCls,(s={display:"flex",fontSize:t.fontSize,"& + &":{marginBlockStart:4},"&-tip":{marginInlineStart:4},"&-wrapper":(0,e.Z)({display:"flex",width:"100%"},"".concat(t.componentCls,"-status"),{width:"14px"}),"&-icon":{marginInlineEnd:16},"&-trend-icon":{width:0,height:0,borderInlineEnd:"3.5px solid transparent",borderBlockEnd:"9px solid #000",borderInlineStart:"3.5px solid transparent","&-up":{transform:"rotate(0deg)"},"&-down":{transform:"rotate(180deg)"}},"&-content":{width:"100%"},"&-description":{width:"100%"}},(0,e.Z)(s,"".concat(t.antCls,"-statistic-title"),{color:t.colorText}),(0,e.Z)(s,"&-trend-up",(0,e.Z)({},"".concat(t.antCls,"-statistic-content"),(0,e.Z)({color:"#f5222d"},"".concat(t.componentCls,"-trend-icon"),{borderBlockEndColor:"#f5222d"}))),(0,e.Z)(s,"&-trend-down",(0,e.Z)({},"".concat(t.antCls,"-statistic-content"),(0,e.Z)({color:"#389e0d"},"".concat(t.componentCls,"-trend-icon"),{borderBlockEndColor:"#52c41a"}))),(0,e.Z)(s,"& &-layout-horizontal",(i={display:"flex",justifyContent:"space-between"},(0,e.Z)(i,"".concat(t.antCls,"-statistic-title"),{marginBlockEnd:0}),(0,e.Z)(i,"".concat(t.antCls,"-statistic-content-value"),{fontWeight:500}),(0,e.Z)(i,"".concat(t.antCls,"-statistic-title,").concat(t.antCls,"-statistic-content,").concat(t.antCls,"-statistic-content-suffix,").concat(t.antCls,"-statistic-content-prefix,").concat(t.antCls,"-statistic-content-value-decimal"),{fontSize:t.fontSize}),i)),(0,e.Z)(s,"& &-layout-inline",(r={display:"inline-flex",color:t.colorTextSecondary},(0,e.Z)(r,"".concat(t.antCls,"-statistic-title"),{marginInlineEnd:"6px",marginBlockEnd:0}),(0,e.Z)(r,"".concat(t.antCls,"-statistic-content"),{color:t.colorTextSecondary}),(0,e.Z)(r,"".concat(t.antCls,"-statistic-title,").concat(t.antCls,"-statistic-content,").concat(t.antCls,"-statistic-content-suffix,").concat(t.antCls,"-statistic-content-prefix,").concat(t.antCls,"-statistic-content-value-decimal"),{fontSize:t.fontSizeSM}),r)),s))};function Rt(p){return(0,Mt.Xj)("Statistic",function(t){var i=(0,b.Z)((0,b.Z)({},t),{},{componentCls:".".concat(p)});return[wt(i)]})}var Bt=["className","layout","style","description","children","title","tip","status","trend","prefix","icon"],Ft=function(t){var i,r=t.className,s=t.layout,h=s===void 0?"inline":s,g=t.style,j=g===void 0?{}:g,l=t.description,m=t.children,y=t.title,x=t.tip,Z=t.status,C=t.trend,f=t.prefix,R=t.icon,ht=(0,T.Z)(t,Bt),at=(0,v.useContext)(Q.ZP.ConfigContext),gt=at.getPrefixCls,E=gt("pro-card-statistic"),rt=Rt(E),it=rt.wrapSSR,I=rt.hashId,ot=P()(E,r,I),xt=P()("".concat(E,"-status"),I),St=P()("".concat(E,"-icon"),I),yt=P()("".concat(E,"-wrapper"),I),Vt=P()("".concat(E,"-content"),I),Xt=P()((i={hashId:I},(0,e.Z)(i,"".concat(E,"-layout-").concat(h),h),(0,e.Z)(i,"".concat(E,"-trend-").concat(C),C),i)),jt=x&&(0,a.jsx)(k.Z,{title:x,children:(0,a.jsx)(Y.Z,{className:"".concat(E,"-tip ").concat(I)})}),Kt=P()("".concat(E,"-trend-icon"),I,(0,e.Z)({},"".concat(E,"-trend-icon-").concat(C),C)),Et=C&&(0,a.jsx)("div",{className:Kt}),Jt=Z&&(0,a.jsx)("div",{className:xt,children:(0,a.jsx)(L.Z,{status:Z,text:null})}),Yt=R&&(0,a.jsx)("div",{className:St,children:R});return it((0,a.jsxs)("div",{className:ot,style:j,children:[Yt,(0,a.jsxs)("div",{className:yt,children:[Jt,(0,a.jsxs)("div",{className:Vt,children:[(0,a.jsx)(Pt,(0,b.Z)({title:(y||jt)&&(0,a.jsxs)(a.Fragment,{children:[y,jt]}),prefix:(Et||f)&&(0,a.jsxs)(a.Fragment,{children:[Et,f]}),className:Xt},ht)),l&&(0,a.jsx)("div",{className:"".concat(E,"-description ").concat(I),children:l})]})]})]}))},U=Ft,Ht=n(31365),Ct=n(27790),$t=n(71577),Lt=n(71230),A=n(15746),Wt=n(96074),Ut=Ht.Z.Dragger,At=function(){var t=(0,v.useState)(),i=V()(t,2),r=i[0],s=i[1];(0,v.useEffect)(function(){(0,w.rZ)().then(function(j){s(j)})},[]);var h=function(){var j=B()(z()().mark(function l(){var m,y,x,Z;return z()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,w._O)();case 2:m=f.sent,y=new Blob([JSON.stringify(m)],{type:"application/json"}),x=URL.createObjectURL(y),Z=document.createElement("a"),Z.href=x,Z.download="file-".concat(Date.now(),".json"),document.body.appendChild(Z),Z.click(),document.body.removeChild(Z);case 11:case"end":return f.stop()}},l)}));return function(){return j.apply(this,arguments)}}(),g={action:w.dk,onChange:function(l){var m=l.file.status;m!=="uploading"&&console.log(l.file,l.fileList),m==="done"?Ct.ZP.success("".concat(l.file.name," file uploaded successfully.")):m==="error"&&Ct.ZP.error("".concat(l.file.name," file upload failed."))},onDrop:function(l){console.log("Dropped files",l.dataTransfer.files)}};return(0,a.jsxs)(o._z,{title:"Backup",extra:(0,a.jsx)($t.Z,{type:"primary",icon:(0,a.jsx)(X.Z,{}),onClick:h,children:"Export"}),children:[(0,a.jsxs)(Lt.Z,{gutter:16,children:[(0,a.jsx)(A.Z,{span:4,children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(U,{title:"Catalog",value:r==null?void 0:r.catalog})})}),(0,a.jsx)(A.Z,{span:4,children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(U,{title:"Component",value:r==null?void 0:r.component})})}),(0,a.jsx)(A.Z,{span:4,children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(U,{title:"Work content",value:r==null?void 0:r.workContent})})}),(0,a.jsx)(A.Z,{span:4,children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(U,{title:"Work item",value:r==null?void 0:r.workItem})})}),(0,a.jsx)(A.Z,{span:4,children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(U,{title:"File",value:r==null?void 0:r.fileContent})})}),(0,a.jsx)(A.Z,{span:4,children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(U,{title:"File item",value:r==null?void 0:r.fileItem})})})]}),(0,a.jsx)(Wt.Z,{}),(0,a.jsx)(c.Z,{title:"Import",children:(0,a.jsxs)(Ut,d()(d()({},g),{},{children:[(0,a.jsx)("p",{className:"ant-upload-drag-icon",children:(0,a.jsx)(u,{})}),(0,a.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),(0,a.jsx)("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"})]}))})]})},Gt=At},78710:function(Zt,W,n){n.d(W,{Jx:function(){return v},_O:function(){return V},_s:function(){return X},dk:function(){return S},gn:function(){return K},rZ:function(){return B}});var M=n(15009),d=n.n(M),G=n(99289),z=n.n(G),O=n(90905);function B(){return F.apply(this,arguments)}function F(){return F=z()(d()().mark(function o(){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,O.request)("backup/statistic"));case 1:case"end":return e.stop()}},o)})),F.apply(this,arguments)}function V(){return w.apply(this,arguments)}function w(){return w=z()(d()().mark(function o(){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,O.request)("backup/export",{method:"POST"}));case 1:case"end":return e.stop()}},o)})),w.apply(this,arguments)}function X(){return b.apply(this,arguments)}function b(){return b=z()(d()().mark(function o(){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,O.request)("backup/upgrade",{method:"POST"}));case 1:case"end":return e.stop()}},o)})),b.apply(this,arguments)}function v(){return H.apply(this,arguments)}function H(){return H=z()(d()().mark(function o(){return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,O.request)("backup/upgrade/list"));case 1:case"end":return e.stop()}},o)})),H.apply(this,arguments)}function K(o){return $.apply(this,arguments)}function $(){return $=z()(d()().mark(function o(c){return d()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",(0,O.request)(c,{method:"POST"}));case 1:case"end":return T.stop()}},o)})),$.apply(this,arguments)}function S(o){return u.apply(this,arguments)}function u(){return u=z()(d()().mark(function o(c){var e;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=new FormData,e.append("file",c),a.abrupt("return",(0,O.request)("backup/import",{method:"POST",data:e}));case 3:case"end":return a.stop()}},o)})),u.apply(this,arguments)}},96074:function(Zt,W,n){n.d(W,{Z:function(){return $}});var M=n(87462),d=n(4942),G=n(97685),z=n(94184),O=n.n(z),B=n(62435),F=n(53124),V=n(67968),w=n(45503),X=n(14747),b=function(u){var o,c=u.componentCls,e=u.sizePaddingEdgeHorizontal,T=u.colorSplit,a=u.lineWidth;return(0,d.Z)({},c,(0,M.Z)((0,M.Z)({},(0,X.Wf)(u)),(o={borderBlockStart:a+"px solid "+T,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:"0 "+u.dividerVerticalGutterMargin+"px",verticalAlign:"middle",borderTop:0,borderInlineStart:a+"px solid "+T},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:u.dividerHorizontalGutterMargin+"px 0"},"&-horizontal&-with-text":{display:"flex",alignItems:"center",margin:u.dividerHorizontalWithTextGutterMargin+"px 0",color:u.colorTextHeading,fontWeight:500,fontSize:u.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 "+T,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:a+"px solid transparent",borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},"&-horizontal&-with-text-left":{"&::before":{width:"5%"},"&::after":{width:"95%"}},"&-horizontal&-with-text-right":{"&::before":{width:"95%"},"&::after":{width:"5%"}}},(0,d.Z)(o,c+"-inner-text",{display:"inline-block",padding:"0 1em"}),(0,d.Z)(o,"&-dashed",{background:"none",borderColor:T,borderStyle:"dashed",borderWidth:a+"px 0 0"}),(0,d.Z)(o,"&-horizontal&-with-text&-dashed",{"&::before, &::after":{borderStyle:"dashed none none"}}),(0,d.Z)(o,"&-vertical&-dashed",{borderInlineStart:a,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),(0,d.Z)(o,"&-plain&-with-text",{color:u.colorText,fontWeight:"normal",fontSize:u.fontSize}),(0,d.Z)(o,"&-horizontal&-with-text-left&-no-default-orientation-margin-left",(0,d.Z)({"&::before":{width:0},"&::after":{width:"100%"}},c+"-inner-text",{paddingInlineStart:e})),(0,d.Z)(o,"&-horizontal&-with-text-right&-no-default-orientation-margin-right",(0,d.Z)({"&::before":{width:"100%"},"&::after":{width:0}},c+"-inner-text",{paddingInlineEnd:e})),o)))},v=(0,V.Z)("Divider",function(S){var u=(0,w.TS)(S,{dividerVerticalGutterMargin:S.marginXS,dividerHorizontalWithTextGutterMargin:S.margin,dividerHorizontalGutterMargin:S.marginLG});return[b(u)]},{sizePaddingEdgeHorizontal:0}),H=function(S,u){var o={};for(var c in S)Object.prototype.hasOwnProperty.call(S,c)&&u.indexOf(c)<0&&(o[c]=S[c]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,c=Object.getOwnPropertySymbols(S);e<c.length;e++)u.indexOf(c[e])<0&&Object.prototype.propertyIsEnumerable.call(S,c[e])&&(o[c[e]]=S[c[e]]);return o},K=function(u){var o,c=B.useContext(F.E_),e=c.getPrefixCls,T=c.direction,a=u.prefixCls,Y=u.type,Q=Y===void 0?"horizontal":Y,k=u.orientation,L=k===void 0?"center":k,N=u.orientationMargin,lt=u.className,J=u.children,q=u.dashed,st=u.plain,P=H(u,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),D=e("divider",a),ct=v(D),_=(0,G.Z)(ct,2),dt=_[0],ut=_[1],ft=L.length>0?"-"+L:L,tt=!!J,et=L==="left"&&N!=null,nt=L==="right"&&N!=null,vt=O()(D,ut,D+"-"+Q,(o={},(0,d.Z)(o,D+"-with-text",tt),(0,d.Z)(o,D+"-with-text"+ft,tt),(0,d.Z)(o,D+"-dashed",!!q),(0,d.Z)(o,D+"-plain",!!st),(0,d.Z)(o,D+"-rtl",T==="rtl"),(0,d.Z)(o,D+"-no-default-orientation-margin-left",et),(0,d.Z)(o,D+"-no-default-orientation-margin-right",nt),o),lt),mt=(0,M.Z)((0,M.Z)({},et&&{marginLeft:N}),nt&&{marginRight:N});return dt(B.createElement("div",(0,M.Z)({className:vt},P,{role:"separator"}),J&&Q!=="vertical"&&B.createElement("span",{className:D+"-inner-text",style:mt},J)))},$=K}}]);
