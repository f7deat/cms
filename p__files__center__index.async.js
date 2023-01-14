"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4136],{23430:function(z,Z,t){t.d(Z,{Z:function(){return i}});var a=t(1413),p=t(62435),T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},I=T,y=t(84089),f=function(D,v){return p.createElement(y.Z,(0,a.Z)((0,a.Z)({},D),{},{ref:v,icon:I}))};f.displayName="DownloadOutlined";var i=p.forwardRef(f)},27895:function(z,Z,t){t.r(Z);var a=t(15009),p=t.n(a),T=t(99289),I=t.n(T),y=t(5574),f=t.n(y),i=t(20385),w=t(32319),D=t(48689),v=t(62884),U=t(34545),$=t(30029),c=t(90905),M=t(71577),B=t(86738),R=t(27790),u=t(71230),A=t(15746),W=t(32983),K=t(62435),L=t(19489),s=t(86074),h=function(){var _=(0,c.useParams)(),E=_.id,G=(0,c.useIntl)(),ae=(0,K.useState)(),H=f()(ae,2),ie=H[0],ee=H[1];(0,K.useEffect)(function(){(0,i.Cq)(E).then(function(r){ee(r)})},[]);var oe=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:G.formatMessage({id:"general.status"}),dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"",valueType:"option",width:120,render:function(n,o){return[(0,s.jsx)(M.Z,{icon:(0,s.jsx)(w.Z,{}),type:"primary",onClick:function(){c.history.push("/works/".concat(o.normalizedName.toLocaleLowerCase(),"/").concat(o.id))}},1),(0,s.jsx)(B.Z,{title:"Are you sure?",children:(0,s.jsx)(M.Z,{icon:(0,s.jsx)(D.Z,{}),type:"primary",danger:!0})},2)]}}],l=function(){var r=I()(p()().mark(function n(){var o;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,i.Ah)(E);case 2:o=d.sent,o.succeeded?(R.ZP.success(G.formatMessage({id:"general.deleted"})),c.history.back()):R.ZP.error(o.errors[0].description);case 4:case"end":return d.stop()}},n)}));return function(){return r.apply(this,arguments)}}(),e=(0,s.jsx)(B.Z,{title:"Are you sure?",onConfirm:l,children:(0,s.jsxs)(M.Z,{type:"primary",danger:!0,icon:(0,s.jsx)(D.Z,{}),children:[" ","Delete"]})});return(0,s.jsx)(v._z,{title:"Center",extra:e,children:(0,s.jsxs)(u.Z,{gutter:16,children:[(0,s.jsx)(A.Z,{span:4,children:(0,s.jsx)(L.Z,{file:ie})}),(0,s.jsx)(A.Z,{span:16,children:(0,s.jsx)(U.Z,{columns:oe,request:function(n){return(0,i.z3)(n,{id:E})},rowKey:"id"})}),(0,s.jsx)(A.Z,{span:4,children:(0,s.jsx)($.Z,{title:"Work content",children:(0,s.jsx)(W.Z,{})})})]})})};Z.default=h},19489:function(z,Z,t){var a=t(5251),p=t(23430),T=t(30029),I=t(90905),y=t(78613),f=t(32983),i=t(71577),w=t(96074),D=t(27511),v=t(86074),U=function(c){var M,B=["image/jpeg","image/png","image/webp",".svg"],R=(0,I.useIntl)(),u=c.file,A=function(){c.onChange&&c.onChange()},W=function(){var L;return B.includes((L=u==null?void 0:u.type)!==null&&L!==void 0?L:"")?(0,v.jsx)("div",{className:"flex justify-center items-center",style:{minHeight:130},children:(0,v.jsx)(y.Z,{src:(0,a.Er)(u==null?void 0:u.url)})}):(0,v.jsx)("div",{onClick:A,children:(0,v.jsx)(f.Z,{})})};return(0,v.jsxs)(T.Z,{title:R.formatMessage({id:"general.preview"}),extra:(0,v.jsx)(i.Z,{type:"dashed",icon:(0,v.jsx)(p.Z,{}),onClick:function(){return window.location.href=(0,a.Er)(u==null?void 0:u.url)},children:"Download"}),children:[W(),(0,v.jsx)(w.Z,{}),(0,v.jsxs)(D.Z,{title:"File info",column:1,children:[(0,v.jsx)(D.Z.Item,{label:"Name",children:u==null?void 0:u.name}),(0,v.jsxs)(D.Z.Item,{label:"Size",children:[(((M=u==null?void 0:u.size)!==null&&M!==void 0?M:0)/1024).toFixed(2)," KB"]}),(0,v.jsx)(D.Z.Item,{label:"Type",children:u==null?void 0:u.type})]})]})};Z.Z=U},20385:function(z,Z,t){t.d(Z,{Ah:function(){return v},Cq:function(){return M},V6:function(){return w},kE:function(){return A},tg:function(){return K},z3:function(){return R}});var a=t(15009),p=t.n(a),T=t(97857),I=t.n(T),y=t(99289),f=t.n(y),i=t(90905);function w(s,h){return D.apply(this,arguments)}function D(){return D=f()(p()().mark(function s(h,x){return p()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,i.request)("fileExplorer/list",I()({method:"GET",params:I()({},h)},x||{})));case 1:case"end":return E.stop()}},s)})),D.apply(this,arguments)}function v(s){return U.apply(this,arguments)}function U(){return U=f()(p()().mark(function s(h){return p()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,i.request)("fileExplorer/delete-file-content/".concat(h),{method:"POST"}));case 1:case"end":return _.stop()}},s)})),U.apply(this,arguments)}function $(s){return c.apply(this,arguments)}function c(){return c=_asyncToGenerator(_regeneratorRuntime().mark(function s(h){return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",request("fileExplorer/delete-file-item",{method:"POST",data:h}));case 1:case"end":return _.stop()}},s)})),c.apply(this,arguments)}function M(s){return B.apply(this,arguments)}function B(){return B=f()(p()().mark(function s(h){return p()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,i.request)("fileExplorer/".concat(h)));case 1:case"end":return _.stop()}},s)})),B.apply(this,arguments)}function R(s,h){return u.apply(this,arguments)}function u(){return u=f()(p()().mark(function s(h,x){return p()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,i.request)("fileExplorer/file-items/".concat(x.id)));case 1:case"end":return E.stop()}},s)})),u.apply(this,arguments)}function A(s){return W.apply(this,arguments)}function W(){return W=f()(p()().mark(function s(h){var x;return p()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return x=new FormData,x.append("file",h),E.abrupt("return",(0,i.request)("fileExplorer/upload",{method:"POST",data:x}));case 3:case"end":return E.stop()}},s)})),W.apply(this,arguments)}function K(s){return L.apply(this,arguments)}function L(){return L=f()(p()().mark(function s(h){return p()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,i.request)("fileexplorer/upload-from-url",{method:"POST",data:{url:h}}));case 1:case"end":return _.stop()}},s)})),L.apply(this,arguments)}},5251:function(z,Z,t){t.d(Z,{Er:function(){return I},p6:function(){return y}});var a=t(27484),p=t.n(a);function T(f){return f.trim()}function I(f){return new URL(f||"",localStorage.getItem("wf_URL")||"").href}function y(f){return f?p()(f).format("DD/MM/YYYY hh:mm:ss"):"-"}},27511:function(z,Z,t){t.d(Z,{K:function(){return E},Z:function(){return oe}});var a=t(4942),p=t(97685),T=t(71002),I=t(94184),y=t.n(I),f=t(50344),i=t(62435),w=t(53124),D=t(96159),v=t(24308),U=function(e){var r=e.children;return r},$=U,c=t(87462);function M(l){return l!=null}var B=function(e){var r=e.itemPrefixCls,n=e.component,o=e.span,m=e.className,d=e.style,g=e.labelStyle,O=e.contentStyle,b=e.bordered,C=e.label,j=e.content,F=e.colon,N=n;if(b){var P;return i.createElement(N,{className:y()((P={},(0,a.Z)(P,r+"-item-label",M(C)),(0,a.Z)(P,r+"-item-content",M(j)),P),m),style:d,colSpan:o},M(C)&&i.createElement("span",{style:g},C),M(j)&&i.createElement("span",{style:O},j))}return i.createElement(N,{className:y()(r+"-item",m),style:d,colSpan:o},i.createElement("div",{className:r+"-item-container"},(C||C===0)&&i.createElement("span",{className:y()(r+"-item-label",(0,a.Z)({},r+"-item-no-colon",!F)),style:g},C),(j||j===0)&&i.createElement("span",{className:y()(r+"-item-content"),style:O},j)))},R=B;function u(l,e,r){var n=e.colon,o=e.prefixCls,m=e.bordered,d=r.component,g=r.type,O=r.showLabel,b=r.showContent,C=r.labelStyle,j=r.contentStyle;return l.map(function(F,N){var P=F.props,V=P.label,X=P.children,Y=P.prefixCls,J=Y===void 0?o:Y,Q=P.className,S=P.style,te=P.labelStyle,q=P.contentStyle,ne=P.span,re=ne===void 0?1:ne,k=F.key;return typeof d=="string"?i.createElement(R,{key:g+"-"+(k||N),className:Q,style:S,labelStyle:(0,c.Z)((0,c.Z)({},C),te),contentStyle:(0,c.Z)((0,c.Z)({},j),q),span:re,colon:n,component:d,itemPrefixCls:J,bordered:m,label:O?V:null,content:b?X:null}):[i.createElement(R,{key:"label-"+(k||N),className:Q,style:(0,c.Z)((0,c.Z)((0,c.Z)({},C),S),te),span:1,colon:n,component:d[0],itemPrefixCls:J,bordered:m,label:V}),i.createElement(R,{key:"content-"+(k||N),className:Q,style:(0,c.Z)((0,c.Z)((0,c.Z)({},j),S),q),span:re*2-1,component:d[1],itemPrefixCls:J,bordered:m,content:X})]})}var A=function(e){var r=i.useContext(E),n=e.prefixCls,o=e.vertical,m=e.row,d=e.index,g=e.bordered;return o?i.createElement(i.Fragment,null,i.createElement("tr",{key:"label-"+d,className:n+"-row"},u(m,e,(0,c.Z)({component:"th",type:"label",showLabel:!0},r))),i.createElement("tr",{key:"content-"+d,className:n+"-row"},u(m,e,(0,c.Z)({component:"td",type:"content",showContent:!0},r)))):i.createElement("tr",{key:d,className:n+"-row"},u(m,e,(0,c.Z)({component:g?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},r)))},W=A,K=t(67968),L=t(45503),s=t(14747),h=function(e){var r,n=e.componentCls,o=e.descriptionsSmallPadding,m=e.descriptionsDefaultPadding,d=e.descriptionsMiddlePadding,g=e.descriptionsBg;return(0,a.Z)({},"&"+n+"-bordered",(r={},(0,a.Z)(r,n+"-view",{border:e.lineWidth+"px "+e.lineType+" "+e.colorSplit,"> table":{tableLayout:"auto",borderCollapse:"collapse"}}),(0,a.Z)(r,n+"-item-label, "+n+"-item-content",{padding:m,borderInlineEnd:e.lineWidth+"px "+e.lineType+" "+e.colorSplit,"&:last-child":{borderInlineEnd:"none"}}),(0,a.Z)(r,n+"-item-label",{backgroundColor:g,"&::after":{display:"none"}}),(0,a.Z)(r,n+"-row",{borderBottom:e.lineWidth+"px "+e.lineType+" "+e.colorSplit,"&:last-child":{borderBottom:"none"}}),(0,a.Z)(r,"&"+n+"-middle",(0,a.Z)({},n+"-item-label, "+n+"-item-content",{padding:d})),(0,a.Z)(r,"&"+n+"-small",(0,a.Z)({},n+"-item-label, "+n+"-item-content",{padding:o})),r))},x=function(e){var r,n,o=e.componentCls,m=e.descriptionsExtraColor,d=e.descriptionItemPaddingBottom,g=e.descriptionsItemLabelColonMarginRight,O=e.descriptionsItemLabelColonMarginLeft,b=e.descriptionsTitleMarginBottom;return(0,a.Z)({},o,(0,c.Z)((0,c.Z)((0,c.Z)({},(0,s.Wf)(e)),h(e)),(n={},(0,a.Z)(n,"&-rtl",{direction:"rtl"}),(0,a.Z)(n,o+"-header",{display:"flex",alignItems:"center",marginBottom:b}),(0,a.Z)(n,o+"-title",(0,c.Z)((0,c.Z)({},s.vS),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),(0,a.Z)(n,o+"-extra",{marginInlineStart:"auto",color:m,fontSize:e.fontSize}),(0,a.Z)(n,o+"-view",{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}}),(0,a.Z)(n,o+"-row",{"> th, > td":{paddingBottom:d},"&:last-child":{borderBottom:"none"}}),(0,a.Z)(n,o+"-item-label",(0,a.Z)({color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:O+"px "+g+"px"}},"&"+o+"-item-no-colon::after",{content:'""'})),(0,a.Z)(n,o+"-item-no-label",{"&::after":{margin:0,content:'""'}}),(0,a.Z)(n,o+"-item-content",{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),(0,a.Z)(n,o+"-item",{paddingBottom:0,verticalAlign:"top","&-container":(r={display:"flex"},(0,a.Z)(r,o+"-item-label",{display:"inline-flex",alignItems:"baseline"}),(0,a.Z)(r,o+"-item-content",{display:"inline-flex",alignItems:"baseline"}),r)}),(0,a.Z)(n,"&-middle",(0,a.Z)({},o+"-row",{"> th, > td":{paddingBottom:e.paddingSM}})),(0,a.Z)(n,"&-small",(0,a.Z)({},o+"-row",{"> th, > td":{paddingBottom:e.paddingXS}})),n)))},_=(0,K.Z)("Descriptions",function(l){var e=l.colorFillAlter,r=l.fontSizeSM*l.lineHeightSM,n=l.colorText,o=l.paddingXS+"px "+l.padding+"px",m=l.padding+"px "+l.paddingLG+"px",d=l.paddingSM+"px "+l.paddingLG+"px",g=l.padding,O=l.marginXS,b=l.marginXXS/2,C=(0,L.TS)(l,{descriptionsBg:e,descriptionsTitleMarginBottom:r,descriptionsExtraColor:n,descriptionItemPaddingBottom:g,descriptionsSmallPadding:o,descriptionsDefaultPadding:m,descriptionsMiddlePadding:d,descriptionsItemLabelColonMarginRight:O,descriptionsItemLabelColonMarginLeft:b});return[x(C)]}),E=i.createContext({}),G={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function ae(l,e){if(typeof l=="number")return l;if((0,T.Z)(l)==="object")for(var r=0;r<v.c4.length;r++){var n=v.c4[r];if(e[n]&&l[n]!==void 0)return l[n]||G[n]}return 3}function H(l,e,r){var n=l;return(e===void 0||e>r)&&(n=(0,D.Tm)(l,{span:r})),n}function ie(l,e){var r=(0,f.Z)(l).filter(function(d){return d}),n=[],o=[],m=e;return r.forEach(function(d,g){var O,b=(O=d.props)===null||O===void 0?void 0:O.span,C=b||1;if(g===r.length-1){o.push(H(d,b,m)),n.push(o);return}C<m?(m-=C,o.push(d)):(o.push(H(d,C,m)),n.push(o),m=e,o=[])}),n}function ee(l){var e,r=l.prefixCls,n=l.title,o=l.extra,m=l.column,d=m===void 0?G:m,g=l.colon,O=g===void 0?!0:g,b=l.bordered,C=l.layout,j=l.children,F=l.className,N=l.style,P=l.size,V=l.labelStyle,X=l.contentStyle,Y=i.useContext(w.E_),J=Y.getPrefixCls,Q=Y.direction,S=J("descriptions",r),te=i.useState({}),q=(0,p.Z)(te,2),ne=q[0],re=q[1],k=ae(d,ne),ce=_(S),de=(0,p.Z)(ce,2),ue=de[0],me=de[1];i.useEffect(function(){var se=v.ZP.subscribe(function(le){(0,T.Z)(d)==="object"&&re(le)});return function(){v.ZP.unsubscribe(se)}},[]);var _e=ie(j,k),pe=i.useMemo(function(){return{labelStyle:V,contentStyle:X}},[V,X]);return ue(i.createElement(E.Provider,{value:pe},i.createElement("div",{className:y()(S,(e={},(0,a.Z)(e,S+"-"+P,P&&P!=="default"),(0,a.Z)(e,S+"-bordered",!!b),(0,a.Z)(e,S+"-rtl",Q==="rtl"),e),F,me),style:N},(n||o)&&i.createElement("div",{className:S+"-header"},n&&i.createElement("div",{className:S+"-title"},n),o&&i.createElement("div",{className:S+"-extra"},o)),i.createElement("div",{className:S+"-view"},i.createElement("table",null,i.createElement("tbody",null,_e.map(function(se,le){return i.createElement(W,{key:le,index:le,colon:O,prefixCls:S,vertical:C==="vertical",bordered:b,row:se})})))))))}ee.Item=$;var oe=ee}}]);
