(self.webpackChunk=self.webpackChunk||[]).push([[2477],{80882:function(q,ie,f){"use strict";f.d(ie,{Z:function(){return F}});var a=f(1413),g=f(62435),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},Y=y,J=f(84089),X=function(k,le){return g.createElement(J.Z,(0,a.Z)((0,a.Z)({},k),{},{ref:le,icon:Y}))};X.displayName="DownOutlined";var F=g.forwardRef(X)},24969:function(q,ie,f){"use strict";f.d(ie,{Z:function(){return F}});var a=f(1413),g=f(62435),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},Y=y,J=f(84089),X=function(k,le){return g.createElement(J.Z,(0,a.Z)((0,a.Z)({},k),{},{ref:le,icon:Y}))};X.displayName="PlusOutlined";var F=g.forwardRef(X)},67875:function(q,ie,f){"use strict";f.d(ie,{Z:function(){return Ta}});var a=f(4942),g=f(87462),y=f(97685),Y=f(97937),J=f(89705),X=f(24969),F=f(94184),G=f.n(F),k=f(1413),le=f(71002),Ee=f(91),l=f(62435),Pt=f(31131),$e=f(21770),Et=f(62874),Re=(0,l.createContext)(null),Rt=l.forwardRef(function(t,e){var n=t.prefixCls,r=t.className,i=t.style,o=t.id,s=t.active,c=t.tabKey,d=t.children;return l.createElement("div",{id:o&&"".concat(o,"-panel-").concat(c),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(c),"aria-hidden":!s,style:i,className:G()(n,s&&"".concat(n,"-active"),r),ref:e},d)}),Fe=Rt,wt=["key","forceRender","style","className"];function Nt(t){var e=t.id,n=t.activeKey,r=t.animated,i=t.tabPosition,o=t.destroyInactiveTabPane,s=l.useContext(Re),c=s.prefixCls,d=s.tabs,v=r.tabPane,u="".concat(c,"-tabpane");return l.createElement("div",{className:G()("".concat(c,"-content-holder"))},l.createElement("div",{className:G()("".concat(c,"-content"),"".concat(c,"-content-").concat(i),(0,a.Z)({},"".concat(c,"-content-animated"),v))},d.map(function(p){var h=p.key,z=p.forceRender,T=p.style,O=p.className,D=(0,Ee.Z)(p,wt),W=h===n;return l.createElement(Et.Z,(0,g.Z)({key:h,visible:W,forceRender:z,removeOnLeave:!!o,leavedClassName:"".concat(u,"-hidden")},r.tabPaneMotion),function(M,I){var A=M.style,B=M.className;return l.createElement(Fe,(0,g.Z)({},D,{prefixCls:u,id:e,tabKey:h,animated:v,active:W,style:(0,k.Z)((0,k.Z)({},T),A),className:G()(O,B),ref:I}))})})))}var _e=f(74902),ge=f(75164),It=f(42550),Ue=f(48555);function Ye(t){var e=(0,l.useRef)(),n=(0,l.useRef)(!1);function r(){for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];n.current||(ge.Z.cancel(e.current),e.current=(0,ge.Z)(function(){t.apply(void 0,o)}))}return(0,l.useEffect)(function(){return n.current=!1,function(){n.current=!0,ge.Z.cancel(e.current)}},[]),r}function Lt(t){var e=(0,l.useRef)([]),n=(0,l.useState)({}),r=(0,y.Z)(n,2),i=r[1],o=(0,l.useRef)(typeof t=="function"?t():t),s=Ye(function(){var d=o.current;e.current.forEach(function(v){d=v(d)}),e.current=[],o.current=d,i({})});function c(d){e.current.push(d),s()}return[o.current,c]}var ee=f(15105);function Ot(t,e){var n,r=t.prefixCls,i=t.id,o=t.active,s=t.tab,c=s.key,d=s.label,v=s.disabled,u=s.closeIcon,p=t.closable,h=t.renderWrapper,z=t.removeAriaLabel,T=t.editable,O=t.onClick,D=t.onRemove,W=t.onFocus,M=t.style,I="".concat(r,"-tab");l.useEffect(function(){return D},[]);var A=T&&p!==!1&&!v;function B(P){v||O(P)}function K(P){P.preventDefault(),P.stopPropagation(),T.onEdit("remove",{key:c,event:P})}var j=l.createElement("div",{key:c,ref:e,className:G()(I,(n={},(0,a.Z)(n,"".concat(I,"-with-remove"),A),(0,a.Z)(n,"".concat(I,"-active"),o),(0,a.Z)(n,"".concat(I,"-disabled"),v),n)),style:M,onClick:B},l.createElement("div",{role:"tab","aria-selected":o,id:i&&"".concat(i,"-tab-").concat(c),className:"".concat(I,"-btn"),"aria-controls":i&&"".concat(i,"-panel-").concat(c),"aria-disabled":v,tabIndex:v?null:0,onClick:function(m){m.stopPropagation(),B(m)},onKeyDown:function(m){[ee.Z.SPACE,ee.Z.ENTER].includes(m.which)&&(m.preventDefault(),B(m))},onFocus:W},d),A&&l.createElement("button",{type:"button","aria-label":z||"remove",tabIndex:0,className:"".concat(I,"-remove"),onClick:function(m){m.stopPropagation(),K(m)}},u||T.removeIcon||"\xD7"));return h?h(j):j}var Dt=l.forwardRef(Ot),Qe={width:0,height:0,left:0,top:0};function At(t,e,n){return(0,l.useMemo)(function(){for(var r,i=new Map,o=e.get((r=t[0])===null||r===void 0?void 0:r.key)||Qe,s=o.left+o.width,c=0;c<t.length;c+=1){var d=t[c].key,v=e.get(d);if(!v){var u;v=e.get((u=t[c-1])===null||u===void 0?void 0:u.key)||Qe}var p=i.get(d)||(0,k.Z)({},v);p.right=s-p.left-p.width,i.set(d,p)}return i},[t.map(function(r){return r.key}).join("_"),e,n])}var Je={width:0,height:0,left:0,top:0,right:0};function zt(t,e,n,r,i,o,s){var c=s.tabs,d=s.tabPosition,v=s.rtl,u,p,h;return["top","bottom"].includes(d)?(u="width",p=v?"right":"left",h=Math.abs(n)):(u="height",p="top",h=-n),(0,l.useMemo)(function(){if(!c.length)return[0,0];for(var z=c.length,T=z,O=0;O<z;O+=1){var D=t.get(c[O].key)||Je;if(D[p]+D[u]>h+e){T=O-1;break}}for(var W=0,M=z-1;M>=0;M-=1){var I=t.get(c[M].key)||Je;if(I[p]<h){W=M+1;break}}return[W,T]},[t,e,r,i,o,h,d,c.map(function(z){return z.key}).join("_"),v])}var qe=f(97868),Mt=f(60057);function Bt(t,e){var n=t.prefixCls,r=t.editable,i=t.locale,o=t.style;return!r||r.showAdd===!1?null:l.createElement("button",{ref:e,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(c){r.onEdit("add",{event:c})}},r.addIcon||"+")}var et=l.forwardRef(Bt);function Ht(t,e){var n=t.prefixCls,r=t.id,i=t.tabs,o=t.locale,s=t.mobile,c=t.moreIcon,d=c===void 0?"More":c,v=t.moreTransitionName,u=t.style,p=t.className,h=t.editable,z=t.tabBarGutter,T=t.rtl,O=t.removeAriaLabel,D=t.onTabClick,W=t.getPopupContainer,M=t.popupClassName,I=(0,l.useState)(!1),A=(0,y.Z)(I,2),B=A[0],K=A[1],j=(0,l.useState)(null),P=(0,y.Z)(j,2),m=P[0],w=P[1],N="".concat(r,"-more-popup"),R="".concat(n,"-dropdown"),Z=m!==null?"".concat(N,"-").concat(m):null,E=o==null?void 0:o.dropdownAriaLabel;function S(b,H){b.preventDefault(),b.stopPropagation(),h.onEdit("remove",{key:H,event:b})}var de=l.createElement(qe.ZP,{onClick:function(H){var ae=H.key,Q=H.domEvent;D(ae,Q),K(!1)},prefixCls:"".concat(R,"-menu"),id:N,tabIndex:-1,role:"listbox","aria-activedescendant":Z,selectedKeys:[m],"aria-label":E!==void 0?E:"expanded dropdown"},i.map(function(b){var H=h&&b.closable!==!1&&!b.disabled;return l.createElement(qe.sN,{key:b.key,id:"".concat(N,"-").concat(b.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(b.key),disabled:b.disabled},l.createElement("span",null,b.label),H&&l.createElement("button",{type:"button","aria-label":O||"remove",tabIndex:0,className:"".concat(R,"-menu-item-remove"),onClick:function(Q){Q.stopPropagation(),S(Q,b.key)}},b.closeIcon||h.removeIcon||"\xD7"))}));function te(b){for(var H=i.filter(function(fe){return!fe.disabled}),ae=H.findIndex(function(fe){return fe.key===m})||0,Q=H.length,ve=0;ve<Q;ve+=1){ae=(ae+b+Q)%Q;var me=H[ae];if(!me.disabled){w(me.key);return}}}function $(b){var H=b.which;if(!B){[ee.Z.DOWN,ee.Z.SPACE,ee.Z.ENTER].includes(H)&&(K(!0),b.preventDefault());return}switch(H){case ee.Z.UP:te(-1),b.preventDefault();break;case ee.Z.DOWN:te(1),b.preventDefault();break;case ee.Z.ESC:K(!1);break;case ee.Z.SPACE:case ee.Z.ENTER:m!==null&&D(m,b);break}}(0,l.useEffect)(function(){var b=document.getElementById(Z);b&&b.scrollIntoView&&b.scrollIntoView(!1)},[m]),(0,l.useEffect)(function(){B||w(null)},[B]);var re=(0,a.Z)({},T?"marginRight":"marginLeft",z);i.length||(re.visibility="hidden",re.order=1);var Ze=G()((0,a.Z)({},"".concat(R,"-rtl"),T)),ue=s?null:l.createElement(Mt.Z,{prefixCls:R,overlay:de,trigger:["hover"],visible:i.length?B:!1,transitionName:v,onVisibleChange:K,overlayClassName:G()(Ze,M),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:W},l.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:re,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":N,id:"".concat(r,"-more"),"aria-expanded":B,onKeyDown:$},d));return l.createElement("div",{className:G()("".concat(n,"-nav-operations"),p),style:u,ref:e},ue,l.createElement(et,{prefixCls:n,locale:o,editable:h}))}var Wt=l.memo(l.forwardRef(Ht),function(t,e){return e.tabMoving}),Gt=.1,tt=.01,we=20,at=Math.pow(.995,we);function Kt(t,e){var n=(0,l.useState)(),r=(0,y.Z)(n,2),i=r[0],o=r[1],s=(0,l.useState)(0),c=(0,y.Z)(s,2),d=c[0],v=c[1],u=(0,l.useState)(0),p=(0,y.Z)(u,2),h=p[0],z=p[1],T=(0,l.useState)(),O=(0,y.Z)(T,2),D=O[0],W=O[1],M=(0,l.useRef)();function I(m){var w=m.touches[0],N=w.screenX,R=w.screenY;o({x:N,y:R}),window.clearInterval(M.current)}function A(m){if(!!i){m.preventDefault();var w=m.touches[0],N=w.screenX,R=w.screenY;o({x:N,y:R});var Z=N-i.x,E=R-i.y;e(Z,E);var S=Date.now();v(S),z(S-d),W({x:Z,y:E})}}function B(){if(!!i&&(o(null),W(null),D)){var m=D.x/h,w=D.y/h,N=Math.abs(m),R=Math.abs(w);if(Math.max(N,R)<Gt)return;var Z=m,E=w;M.current=window.setInterval(function(){if(Math.abs(Z)<tt&&Math.abs(E)<tt){window.clearInterval(M.current);return}Z*=at,E*=at,e(Z*we,E*we)},we)}}var K=(0,l.useRef)();function j(m){var w=m.deltaX,N=m.deltaY,R=0,Z=Math.abs(w),E=Math.abs(N);Z===E?R=K.current==="x"?w:N:Z>E?(R=w,K.current="x"):(R=N,K.current="y"),e(-R,-R)&&m.preventDefault()}var P=(0,l.useRef)(null);P.current={onTouchStart:I,onTouchMove:A,onTouchEnd:B,onWheel:j},l.useEffect(function(){function m(Z){P.current.onTouchStart(Z)}function w(Z){P.current.onTouchMove(Z)}function N(Z){P.current.onTouchEnd(Z)}function R(Z){P.current.onWheel(Z)}return document.addEventListener("touchmove",w,{passive:!1}),document.addEventListener("touchend",N,{passive:!1}),t.current.addEventListener("touchstart",m,{passive:!1}),t.current.addEventListener("wheel",R),function(){document.removeEventListener("touchmove",w),document.removeEventListener("touchend",N)}},[])}function jt(){var t=(0,l.useRef)(new Map);function e(r){return t.current.has(r)||t.current.set(r,l.createRef()),t.current.get(r)}function n(r){t.current.delete(r)}return[e,n]}function nt(t,e){var n=l.useRef(t),r=l.useState({}),i=(0,y.Z)(r,2),o=i[1];function s(c){var d=typeof c=="function"?c(n.current):c;d!==n.current&&e(d,n.current),n.current=d,o({})}return[n.current,s]}function rt(t){var e;return t instanceof Map?(e={},t.forEach(function(n,r){e[r]=n})):e=t,JSON.stringify(e)}var Xt=l.forwardRef(function(t,e){var n=t.position,r=t.prefixCls,i=t.extra;if(!i)return null;var o,s={};return(0,le.Z)(i)==="object"&&!l.isValidElement(i)?s=i:s.right=i,n==="right"&&(o=s.right),n==="left"&&(o=s.left),o?l.createElement("div",{className:"".concat(r,"-extra-content"),ref:e},o):null}),ot=Xt,be=function(e){var n=e.current||{},r=n.offsetWidth,i=r===void 0?0:r,o=n.offsetHeight,s=o===void 0?0:o;return[i,s]},Ne=function(e,n){return e[n?0:1]};function Vt(t,e){var n,r=l.useContext(Re),i=r.prefixCls,o=r.tabs,s=t.className,c=t.style,d=t.id,v=t.animated,u=t.activeKey,p=t.rtl,h=t.extra,z=t.editable,T=t.locale,O=t.tabPosition,D=t.tabBarGutter,W=t.children,M=t.onTabClick,I=t.onTabScroll,A=(0,l.useRef)(),B=(0,l.useRef)(),K=(0,l.useRef)(),j=(0,l.useRef)(),P=(0,l.useRef)(),m=(0,l.useRef)(),w=(0,l.useRef)(),N=jt(),R=(0,y.Z)(N,2),Z=R[0],E=R[1],S=O==="top"||O==="bottom",de=nt(0,function(C,_){S&&I&&I({direction:C>_?"left":"right"})}),te=(0,y.Z)(de,2),$=te[0],re=te[1],Ze=nt(0,function(C,_){!S&&I&&I({direction:C>_?"top":"bottom"})}),ue=(0,y.Z)(Ze,2),b=ue[0],H=ue[1],ae=(0,l.useState)([0,0]),Q=(0,y.Z)(ae,2),ve=Q[0],me=Q[1],fe=(0,l.useState)([0,0]),xe=(0,y.Z)(fe,2),Ie=xe[0],ze=xe[1],Me=(0,l.useState)([0,0]),ye=(0,y.Z)(Me,2),Be=ye[0],He=ye[1],L=(0,l.useState)([0,0]),se=(0,y.Z)(L,2),Se=se[0],Pa=se[1],Ea=Lt(new Map),dt=(0,y.Z)(Ea,2),Ra=dt[0],wa=dt[1],Le=At(o,Ra,Ie[0]),pe=Ne(ve,S),oe=Ne(Ie,S),We=Ne(Be,S),ut=Ne(Se,S),Na=pe<oe+We,ne=Na?pe-ut:pe-We,Ia="".concat(i,"-nav-operations-hidden"),Ce=0,Te=0;S&&p?(Ce=0,Te=Math.max(0,oe-ne)):(Ce=Math.min(0,ne-oe),Te=0);function Ge(C){return C<Ce?Ce:C>Te?Te:C}var vt=(0,l.useRef)(),La=(0,l.useState)(),ft=(0,y.Z)(La,2),Oe=ft[0],pt=ft[1];function Ke(){pt(Date.now())}function je(){window.clearTimeout(vt.current)}Kt(j,function(C,_){function x(V,U){V(function(Ae){var Ka=Ge(Ae+U);return Ka})}return pe>=oe?!1:(S?x(re,C):x(H,_),je(),Ke(),!0)}),(0,l.useEffect)(function(){return je(),Oe&&(vt.current=window.setTimeout(function(){pt(0)},100)),je},[Oe]);var Oa=zt(Le,ne,S?$:b,oe,We,ut,(0,k.Z)((0,k.Z)({},t),{},{tabs:o})),bt=(0,y.Z)(Oa,2),Da=bt[0],Aa=bt[1],mt=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u,x=Le.get(_)||{width:0,height:0,left:0,right:0,top:0};if(S){var V=$;p?x.right<$?V=x.right:x.right+x.width>$+ne&&(V=x.right+x.width-ne):x.left<-$?V=-x.left:x.left+x.width>-$+ne&&(V=-(x.left+x.width-ne)),H(0),re(Ge(V))}else{var U=b;x.top<-b?U=-x.top:x.top+x.height>-b+ne&&(U=-(x.top+x.height-ne)),re(0),H(Ge(U))}},De={};O==="top"||O==="bottom"?De[p?"marginRight":"marginLeft"]=D:De.marginTop=D;var gt=o.map(function(C,_){var x=C.key;return l.createElement(Dt,{id:d,prefixCls:i,key:x,tab:C,style:_===0?void 0:De,closable:C.closable,editable:z,active:x===u,renderWrapper:W,removeAriaLabel:T==null?void 0:T.removeAriaLabel,ref:Z(x),onClick:function(U){M(x,U)},onRemove:function(){E(x)},onFocus:function(){mt(x),Ke(),j.current&&(p||(j.current.scrollLeft=0),j.current.scrollTop=0)}})}),za=function(){return wa(function(){var _=new Map;return o.forEach(function(x){var V=x.key,U=Z(V).current;U&&_.set(V,{width:U.offsetWidth,height:U.offsetHeight,left:U.offsetLeft,top:U.offsetTop})}),_})};(0,l.useEffect)(function(){za()},[o.map(function(C){return C.key}).join("_")]);var Xe=Ye(function(){var C=be(A),_=be(B),x=be(K);me([C[0]-_[0]-x[0],C[1]-_[1]-x[1]]);var V=be(w);He(V);var U=be(m);Pa(U);var Ae=be(P);ze([Ae[0]-V[0],Ae[1]-V[1]])}),Ma=o.slice(0,Da),Ba=o.slice(Aa+1),ht=[].concat((0,_e.Z)(Ma),(0,_e.Z)(Ba)),Ha=(0,l.useState)(),Zt=(0,y.Z)(Ha,2),Wa=Zt[0],Ga=Zt[1],ce=Le.get(u),xt=(0,l.useRef)();function yt(){ge.Z.cancel(xt.current)}(0,l.useEffect)(function(){var C={};return ce&&(S?(p?C.right=ce.right:C.left=ce.left,C.width=ce.width):(C.top=ce.top,C.height=ce.height)),yt(),xt.current=(0,ge.Z)(function(){Ga(C)}),yt},[ce,S,p]),(0,l.useEffect)(function(){mt()},[u,rt(ce),rt(Le),S]),(0,l.useEffect)(function(){Xe()},[p]);var St=!!ht.length,Pe="".concat(i,"-nav-wrap"),Ve,ke,Ct,Tt;return S?p?(ke=$>0,Ve=$+pe<oe):(Ve=$<0,ke=-$+pe<oe):(Ct=b<0,Tt=-b+pe<oe),l.createElement(Ue.Z,{onResize:Xe},l.createElement("div",{ref:(0,It.x1)(e,A),role:"tablist",className:G()("".concat(i,"-nav"),s),style:c,onKeyDown:function(){Ke()}},l.createElement(ot,{ref:B,position:"left",extra:h,prefixCls:i}),l.createElement("div",{className:G()(Pe,(n={},(0,a.Z)(n,"".concat(Pe,"-ping-left"),Ve),(0,a.Z)(n,"".concat(Pe,"-ping-right"),ke),(0,a.Z)(n,"".concat(Pe,"-ping-top"),Ct),(0,a.Z)(n,"".concat(Pe,"-ping-bottom"),Tt),n)),ref:j},l.createElement(Ue.Z,{onResize:Xe},l.createElement("div",{ref:P,className:"".concat(i,"-nav-list"),style:{transform:"translate(".concat($,"px, ").concat(b,"px)"),transition:Oe?"none":void 0}},gt,l.createElement(et,{ref:w,prefixCls:i,locale:T,editable:z,style:(0,k.Z)((0,k.Z)({},gt.length===0?void 0:De),{},{visibility:St?"hidden":null})}),l.createElement("div",{className:G()("".concat(i,"-ink-bar"),(0,a.Z)({},"".concat(i,"-ink-bar-animated"),v.inkBar)),style:Wa})))),l.createElement(Wt,(0,g.Z)({},t,{removeAriaLabel:T==null?void 0:T.removeAriaLabel,ref:m,prefixCls:i,tabs:ht,className:!St&&Ia,tabMoving:!!Oe})),l.createElement(ot,{ref:K,position:"right",extra:h,prefixCls:i})))}var it=l.forwardRef(Vt),kt=["renderTabBar"],$t=["label","key"];function Ft(t){var e=t.renderTabBar,n=(0,Ee.Z)(t,kt),r=(0,l.useContext)(Re),i=r.tabs;if(e){var o=(0,k.Z)((0,k.Z)({},n),{},{panes:i.map(function(s){var c=s.label,d=s.key,v=(0,Ee.Z)(s,$t);return l.createElement(Fe,(0,g.Z)({tab:c,key:d,tabKey:d},v))})});return e(o,it)}return l.createElement(it,n)}var ja=f(80334);function _t(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},e;return t===!1?e={inkBar:!1,tabPane:!1}:t===!0?e={inkBar:!0,tabPane:!1}:e=(0,k.Z)({inkBar:!0},(0,le.Z)(t)==="object"?t:{}),e.tabPaneMotion&&e.tabPane===void 0&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}var Ut=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],lt=0;function Yt(t,e){var n,r=t.id,i=t.prefixCls,o=i===void 0?"rc-tabs":i,s=t.className,c=t.items,d=t.direction,v=t.activeKey,u=t.defaultActiveKey,p=t.editable,h=t.animated,z=t.tabPosition,T=z===void 0?"top":z,O=t.tabBarGutter,D=t.tabBarStyle,W=t.tabBarExtraContent,M=t.locale,I=t.moreIcon,A=t.moreTransitionName,B=t.destroyInactiveTabPane,K=t.renderTabBar,j=t.onChange,P=t.onTabClick,m=t.onTabScroll,w=t.getPopupContainer,N=t.popupClassName,R=(0,Ee.Z)(t,Ut),Z=l.useMemo(function(){return(c||[]).filter(function(L){return L&&(0,le.Z)(L)==="object"&&"key"in L})},[c]),E=d==="rtl",S=_t(h),de=(0,l.useState)(!1),te=(0,y.Z)(de,2),$=te[0],re=te[1];(0,l.useEffect)(function(){re((0,Pt.Z)())},[]);var Ze=(0,$e.Z)(function(){var L;return(L=Z[0])===null||L===void 0?void 0:L.key},{value:v,defaultValue:u}),ue=(0,y.Z)(Ze,2),b=ue[0],H=ue[1],ae=(0,l.useState)(function(){return Z.findIndex(function(L){return L.key===b})}),Q=(0,y.Z)(ae,2),ve=Q[0],me=Q[1];(0,l.useEffect)(function(){var L=Z.findIndex(function(Se){return Se.key===b});if(L===-1){var se;L=Math.max(0,Math.min(ve,Z.length-1)),H((se=Z[L])===null||se===void 0?void 0:se.key)}me(L)},[Z.map(function(L){return L.key}).join("_"),b,ve]);var fe=(0,$e.Z)(null,{value:r}),xe=(0,y.Z)(fe,2),Ie=xe[0],ze=xe[1];(0,l.useEffect)(function(){r||(ze("rc-tabs-".concat(lt)),lt+=1)},[]);function Me(L,se){P==null||P(L,se);var Se=L!==b;H(L),Se&&(j==null||j(L))}var ye={id:Ie,activeKey:b,animated:S,tabPosition:T,rtl:E,mobile:$},Be,He=(0,k.Z)((0,k.Z)({},ye),{},{editable:p,locale:M,moreIcon:I,moreTransitionName:A,tabBarGutter:O,onTabClick:Me,onTabScroll:m,extra:W,style:D,panes:null,getPopupContainer:w,popupClassName:N});return l.createElement(Re.Provider,{value:{tabs:Z,prefixCls:o}},l.createElement("div",(0,g.Z)({ref:e,id:r,className:G()(o,"".concat(o,"-").concat(T),(n={},(0,a.Z)(n,"".concat(o,"-mobile"),$),(0,a.Z)(n,"".concat(o,"-editable"),p),(0,a.Z)(n,"".concat(o,"-rtl"),E),n),s)},R),Be,l.createElement(Ft,(0,g.Z)({},He,{renderTabBar:K})),l.createElement(Nt,(0,g.Z)({destroyInactiveTabPane:B},ye,{animated:S}))))}var Qt=l.forwardRef(Yt),Jt=Qt,qt=Jt,ea=f(53124),ta=f(97647),aa=f(33603),na={motionAppear:!1,motionEnter:!0,motionLeave:!0};function ra(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},n;return e===!1?n={inkBar:!1,tabPane:!1}:e===!0?n={inkBar:!0,tabPane:!0}:n=(0,g.Z)({inkBar:!0},(0,le.Z)(e)==="object"?e:{}),n.tabPane&&(n.tabPaneMotion=(0,g.Z)((0,g.Z)({},na),{motionName:(0,aa.mL)(t,"switch")})),n}var oa=f(50344),ia=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function la(t){return t.filter(function(e){return e})}function sa(t,e){if(t)return t;var n=(0,oa.Z)(e).map(function(r){if(l.isValidElement(r)){var i=r.key,o=r.props,s=o||{},c=s.tab,d=ia(s,["tab"]),v=(0,g.Z)((0,g.Z)({key:String(i)},d),{label:c});return v}return null});return la(n)}var ca=function(){return null},da=ca,ua=f(67968),va=f(45503),he=f(14747),st=f(67771),fa=function(e){var n=e.componentCls,r=e.motionDurationSlow;return[(0,a.Z)({},n,(0,a.Z)({},n+"-switch",{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:"opacity "+r}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:"opacity "+r}}})),[(0,st.oN)(e,"slide-up"),(0,st.oN)(e,"slide-down")]]},pa=fa,ba=function(e){var n,r,i,o,s,c,d=e.componentCls,v=e.tabsCardHorizontalPadding,u=e.tabsCardHeadBackground,p=e.tabsCardGutter,h=e.colorSplit;return(0,a.Z)({},d+"-card",(c={},(0,a.Z)(c,"> "+d+"-nav, > div > "+d+"-nav",(n={},(0,a.Z)(n,d+"-tab",{margin:0,padding:v,background:u,border:e.lineWidth+"px "+e.lineType+" "+h,transition:"all "+e.motionDurationSlow+" "+e.motionEaseInOut}),(0,a.Z)(n,d+"-tab-active",{color:e.colorPrimary,background:e.colorBgContainer}),(0,a.Z)(n,d+"-ink-bar",{visibility:"hidden"}),n)),(0,a.Z)(c,"&"+d+"-top, &"+d+"-bottom",(0,a.Z)({},"> "+d+"-nav, > div > "+d+"-nav",(0,a.Z)({},d+"-tab + "+d+"-tab",{marginLeft:{_skip_check_:!0,value:p+"px"}}))),(0,a.Z)(c,"&"+d+"-top",(0,a.Z)({},"> "+d+"-nav, > div > "+d+"-nav",(r={},(0,a.Z)(r,d+"-tab",{borderRadius:e.borderRadiusLG+"px "+e.borderRadiusLG+"px 0 0"}),(0,a.Z)(r,d+"-tab-active",{borderBottomColor:e.colorBgContainer}),r))),(0,a.Z)(c,"&"+d+"-bottom",(0,a.Z)({},"> "+d+"-nav, > div > "+d+"-nav",(i={},(0,a.Z)(i,d+"-tab",{borderRadius:"0 0 "+e.borderRadiusLG+"px "+e.borderRadiusLG+"px"}),(0,a.Z)(i,d+"-tab-active",{borderTopColor:e.colorBgContainer}),i))),(0,a.Z)(c,"&"+d+"-left, &"+d+"-right",(0,a.Z)({},"> "+d+"-nav, > div > "+d+"-nav",(0,a.Z)({},d+"-tab + "+d+"-tab",{marginTop:p+"px"}))),(0,a.Z)(c,"&"+d+"-left",(0,a.Z)({},"> "+d+"-nav, > div > "+d+"-nav",(o={},(0,a.Z)(o,d+"-tab",{borderRadius:{_skip_check_:!0,value:e.borderRadiusLG+"px 0 0 "+e.borderRadiusLG+"px"}}),(0,a.Z)(o,d+"-tab-active",{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}),o))),(0,a.Z)(c,"&"+d+"-right",(0,a.Z)({},"> "+d+"-nav, > div > "+d+"-nav",(s={},(0,a.Z)(s,d+"-tab",{borderRadius:{_skip_check_:!0,value:"0 "+e.borderRadiusLG+"px "+e.borderRadiusLG+"px 0"}}),(0,a.Z)(s,d+"-tab-active",{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}),s))),c))},ma=function(e){var n=e.componentCls,r=e.tabsHoverColor,i=e.dropdownEdgeChildVerticalPadding;return(0,a.Z)({},n+"-dropdown",(0,g.Z)((0,g.Z)({},(0,he.Wf)(e)),(0,a.Z)({position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"}},n+"-dropdown-menu",{maxHeight:e.tabsDropdownHeight,margin:0,padding:i+"px 0",overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadow,"&-item":(0,g.Z)((0,g.Z)({},he.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:e.paddingXXS+"px "+e.paddingSM+"px",color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:"all "+e.motionDurationSlow,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:r}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})})))},ga=function(e){var n,r,i,o,s,c,d,v,u=e.componentCls,p=e.margin,h=e.colorSplit;return v={},(0,a.Z)(v,u+"-top, "+u+"-bottom",(0,a.Z)({flexDirection:"column"},"> "+u+"-nav, > div > "+u+"-nav",(r={margin:"0 0 "+p+"px 0","&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:e.lineWidth+"px "+e.lineType+" "+h,content:"''"}},(0,a.Z)(r,u+"-ink-bar",{height:e.lineWidthBold,"&-animated":{transition:"width "+e.motionDurationSlow+", left "+e.motionDurationSlow+`,
            right `+e.motionDurationSlow}}),(0,a.Z)(r,u+"-nav-wrap",(n={"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight}},(0,a.Z)(n,"&"+u+"-nav-wrap-ping-left::before",{opacity:1}),(0,a.Z)(n,"&"+u+"-nav-wrap-ping-right::after",{opacity:1}),n)),r))),(0,a.Z)(v,u+"-top",(0,a.Z)({},"> "+u+`-nav,
        > div > `+u+"-nav",(0,a.Z)({"&::before":{bottom:0}},u+"-ink-bar",{bottom:0}))),(0,a.Z)(v,u+"-bottom",(i={},(0,a.Z)(i,"> "+u+"-nav, > div > "+u+"-nav",(0,a.Z)({order:1,marginTop:p+"px",marginBottom:0,"&::before":{top:0}},u+"-ink-bar",{top:0})),(0,a.Z)(i,"> "+u+"-content-holder, > div > "+u+"-content-holder",{order:0}),i)),(0,a.Z)(v,u+"-left, "+u+"-right",(0,a.Z)({},"> "+u+"-nav, > div > "+u+"-nav",(s={flexDirection:"column",minWidth:e.controlHeight*1.25},(0,a.Z)(s,u+"-tab",{padding:e.paddingXS+"px "+e.paddingLG+"px",textAlign:"center"}),(0,a.Z)(s,u+"-tab + "+u+"-tab",{margin:e.margin+"px 0 0 0"}),(0,a.Z)(s,u+"-nav-wrap",(o={flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom}},(0,a.Z)(o,"&"+u+"-nav-wrap-ping-top::before",{opacity:1}),(0,a.Z)(o,"&"+u+"-nav-wrap-ping-bottom::after",{opacity:1}),o)),(0,a.Z)(s,u+"-ink-bar",{width:e.lineWidthBold,"&-animated":{transition:"height "+e.motionDurationSlow+", top "+e.motionDurationSlow}}),(0,a.Z)(s,u+"-nav-list, "+u+"-nav-operations",{flex:"1 0 auto",flexDirection:"column"}),s))),(0,a.Z)(v,u+"-left",(c={},(0,a.Z)(c,"> "+u+"-nav, > div > "+u+"-nav",(0,a.Z)({},u+"-ink-bar",{right:{_skip_check_:!0,value:0}})),(0,a.Z)(c,"> "+u+"-content-holder, > div > "+u+"-content-holder",(0,a.Z)({marginLeft:{_skip_check_:!0,value:"-"+e.lineWidth+"px"},borderLeft:{_skip_check_:!0,value:e.lineWidth+"px "+e.lineType+" "+e.colorBorder}},"> "+u+"-content > "+u+"-tabpane",{paddingLeft:{_skip_check_:!0,value:e.paddingLG}})),c)),(0,a.Z)(v,u+"-right",(d={},(0,a.Z)(d,"> "+u+"-nav, > div > "+u+"-nav",(0,a.Z)({order:1},u+"-ink-bar",{left:{_skip_check_:!0,value:0}})),(0,a.Z)(d,"> "+u+"-content-holder, > div > "+u+"-content-holder",(0,a.Z)({order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:e.lineWidth+"px "+e.lineType+" "+e.colorBorder}},"> "+u+"-content > "+u+"-tabpane",{paddingRight:{_skip_check_:!0,value:e.paddingLG}})),d)),v},ha=function(e){var n,r,i,o=e.componentCls,s=e.padding;return i={},(0,a.Z)(i,o,{"&-small":(0,a.Z)({},"> "+o+"-nav",(0,a.Z)({},o+"-tab",{padding:e.paddingXS+"px 0",fontSize:e.fontSize})),"&-large":(0,a.Z)({},"> "+o+"-nav",(0,a.Z)({},o+"-tab",{padding:s+"px 0",fontSize:e.fontSizeLG}))}),(0,a.Z)(i,o+"-card",(r={},(0,a.Z)(r,"&"+o+"-small",(n={},(0,a.Z)(n,"> "+o+"-nav",(0,a.Z)({},o+"-tab",{padding:e.paddingXXS*1.5+"px "+s+"px"})),(0,a.Z)(n,"&"+o+"-bottom",(0,a.Z)({},"> "+o+"-nav "+o+"-tab",{borderRadius:"0 0 "+e.borderRadius+"px "+e.borderRadius+"px"})),(0,a.Z)(n,"&"+o+"-top",(0,a.Z)({},"> "+o+"-nav "+o+"-tab",{borderRadius:e.borderRadius+"px "+e.borderRadius+"px 0 0"})),(0,a.Z)(n,"&"+o+"-right",(0,a.Z)({},"> "+o+"-nav "+o+"-tab",{borderRadius:{_skip_check_:!0,value:"0 "+e.borderRadius+"px "+e.borderRadius+"px 0"}})),(0,a.Z)(n,"&"+o+"-left",(0,a.Z)({},"> "+o+"-nav "+o+"-tab",{borderRadius:{_skip_check_:!0,value:e.borderRadius+"px 0 0 "+e.borderRadius+"px"}})),n)),(0,a.Z)(r,"&"+o+"-large",(0,a.Z)({},"> "+o+"-nav",(0,a.Z)({},o+"-tab",{padding:e.paddingXS+"px "+s+"px "+e.paddingXXS*1.5+"px"}))),r)),i},Za=function(e){var n,r,i=e.componentCls,o=e.tabsActiveColor,s=e.tabsHoverColor,c=e.iconCls,d=e.tabsHorizontalGutter,v=i+"-tab";return r={},(0,a.Z)(r,v,(n={position:"relative",display:"inline-flex",alignItems:"center",padding:e.paddingSM+"px 0",fontSize:e.fontSize+"px",background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":(0,g.Z)({"&:focus:not(:focus-visible), &:active":{color:o}},(0,he.Qy)(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:"all "+e.motionDurationSlow,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:s}},(0,a.Z)(n,"&"+v+"-active "+v+"-btn",{color:e.colorPrimary,textShadow:e.tabsActiveTextShadow}),(0,a.Z)(n,"&"+v+"-disabled",{color:e.colorTextDisabled,cursor:"not-allowed"}),(0,a.Z)(n,"&"+v+"-disabled "+v+"-btn, &"+v+"-disabled "+i+"-remove",{"&:focus, &:active":{color:e.colorTextDisabled}}),(0,a.Z)(n,"& "+v+"-remove "+c,{margin:0}),(0,a.Z)(n,c,{marginRight:{_skip_check_:!0,value:e.marginSM}}),n)),(0,a.Z)(r,v+" + "+v,{margin:{_skip_check_:!0,value:"0 0 0 "+d+"px"}}),r},xa=function(e){var n,r,i,o,s,c=e.componentCls,d=e.tabsHorizontalGutter,v=e.iconCls,u=e.tabsCardGutter,p=c+"-rtl";return s={},(0,a.Z)(s,p,(o={direction:"rtl"},(0,a.Z)(o,c+"-nav",(0,a.Z)({},c+"-tab",(n={margin:{_skip_check_:!0,value:"0 0 0 "+d+"px"}},(0,a.Z)(n,c+"-tab:last-of-type",{marginLeft:{_skip_check_:!0,value:0}}),(0,a.Z)(n,v,{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:e.marginSM+"px"}}),(0,a.Z)(n,c+"-tab-remove",(0,a.Z)({marginRight:{_skip_check_:!0,value:e.marginXS+"px"},marginLeft:{_skip_check_:!0,value:"-"+e.marginXXS+"px"}},v,{margin:0})),n))),(0,a.Z)(o,"&"+c+"-left",(r={},(0,a.Z)(r,"> "+c+"-nav",{order:1}),(0,a.Z)(r,"> "+c+"-content-holder",{order:0}),r)),(0,a.Z)(o,"&"+c+"-right",(i={},(0,a.Z)(i,"> "+c+"-nav",{order:0}),(0,a.Z)(i,"> "+c+"-content-holder",{order:1}),i)),(0,a.Z)(o,"&"+c+"-card"+c+"-top, &"+c+"-card"+c+"-bottom",(0,a.Z)({},"> "+c+"-nav, > div > "+c+"-nav",(0,a.Z)({},c+"-tab + "+c+"-tab",{marginRight:{_skip_check_:!0,value:u+"px"},marginLeft:{_skip_check_:!0,value:0}}))),o)),(0,a.Z)(s,c+"-dropdown-rtl",{direction:"rtl"}),(0,a.Z)(s,c+"-menu-item",(0,a.Z)({},c+"-dropdown-rtl",{textAlign:{_skip_check_:!0,value:"right"}})),s},ya=function(e){var n,r,i,o,s=e.componentCls,c=e.tabsCardHorizontalPadding,d=e.tabsCardHeight,v=e.tabsCardGutter,u=e.tabsHoverColor,p=e.tabsActiveColor,h=e.colorSplit;return o={},(0,a.Z)(o,s,(0,g.Z)((0,g.Z)((0,g.Z)((0,g.Z)({},(0,he.Wf)(e)),(r={display:"flex"},(0,a.Z)(r,"> "+s+"-nav, > div > "+s+"-nav",(n={position:"relative",display:"flex",flex:"none",alignItems:"center"},(0,a.Z)(n,s+"-nav-wrap",{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:"opacity "+e.motionDurationSlow,content:"''",pointerEvents:"none"}}),(0,a.Z)(n,s+"-nav-list",{position:"relative",display:"flex",transition:"opacity "+e.motionDurationSlow}),(0,a.Z)(n,s+"-nav-operations",{display:"flex",alignSelf:"stretch"}),(0,a.Z)(n,s+"-nav-operations-hidden",{position:"absolute",visibility:"hidden",pointerEvents:"none"}),(0,a.Z)(n,s+"-nav-more",{position:"relative",padding:c,background:"transparent",border:0,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}}),(0,a.Z)(n,s+"-nav-add",(0,g.Z)({minWidth:d+"px",marginLeft:{_skip_check_:!0,value:v+"px"},padding:"0 "+e.paddingXS+"px",background:"transparent",border:e.lineWidth+"px "+e.lineType+" "+h,borderRadius:e.borderRadiusLG+"px "+e.borderRadiusLG+"px 0 0",outline:"none",cursor:"pointer",transition:"all "+e.motionDurationSlow+" "+e.motionEaseInOut,"&:hover":{color:u},"&:active, &:focus:not(:focus-visible)":{color:p}},(0,he.Qy)(e))),n)),(0,a.Z)(r,s+"-extra-content",{flex:"none"}),(0,a.Z)(r,s+"-ink-bar",{position:"absolute",background:e.colorPrimary,pointerEvents:"none"}),r)),Za(e)),(i={},(0,a.Z)(i,s+"-content",{position:"relative",width:"100%"}),(0,a.Z)(i,s+"-content-holder",{flex:"auto",minWidth:0,minHeight:0}),(0,a.Z)(i,s+"-tabpane",{outline:"none","&-hidden":{display:"none"}}),i))),(0,a.Z)(o,s+"-centered",(0,a.Z)({},"> "+s+"-nav, > div > "+s+"-nav",(0,a.Z)({},s+"-nav-wrap",(0,a.Z)({},"&:not([class*='"+s+"-nav-wrap-ping'])",{justifyContent:"center"})))),o},Sa=(0,ua.Z)("Tabs",function(t){var e=t.controlHeightLG,n=(0,va.TS)(t,{tabsHoverColor:t.colorPrimaryHover,tabsActiveColor:t.colorPrimaryActive,tabsCardHorizontalPadding:(e-Math.round(t.fontSize*t.lineHeight))/2-t.lineWidth+"px "+t.padding+"px",tabsCardHeight:e,tabsCardGutter:t.marginXXS/2,tabsHorizontalGutter:32,tabsCardHeadBackground:t.colorFillAlter,dropdownEdgeChildVerticalPadding:t.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120});return[ha(n),xa(n),ga(n),ma(n),ba(n),ya(n),pa(n)]},function(t){return{zIndexPopup:t.zIndexPopupBase+50}}),Ca=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function ct(t){var e=t.type,n=t.className,r=t.size,i=t.onEdit,o=t.hideAdd,s=t.centered,c=t.addIcon,d=t.popupClassName,v=t.children,u=t.items,p=t.animated,h=Ca(t,["type","className","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated"]),z=h.prefixCls,T=h.moreIcon,O=T===void 0?l.createElement(J.Z,null):T,D=l.useContext(ea.E_),W=D.getPrefixCls,M=D.direction,I=D.getPopupContainer,A=W("tabs",z),B=Sa(A),K=(0,y.Z)(B,2),j=K[0],P=K[1],m;e==="editable-card"&&(m={onEdit:function(E,S){var de=S.key,te=S.event;i==null||i(E==="add"?te:de,E)},removeIcon:l.createElement(Y.Z,null),addIcon:c||l.createElement(X.Z,null),showAdd:o!==!0});var w=W(),N=sa(u,v),R=ra(A,p);return j(l.createElement(ta.Z.Consumer,null,function(Z){var E,S=r!==void 0?r:Z;return l.createElement(qt,(0,g.Z)({direction:M,getPopupContainer:I,moreTransitionName:w+"-slide-up"},h,{items:N,className:G()((E={},(0,a.Z)(E,A+"-"+S,S),(0,a.Z)(E,A+"-card",["card","editable-card"].includes(e)),(0,a.Z)(E,A+"-editable-card",e==="editable-card"),(0,a.Z)(E,A+"-centered",s),E),n,P),popupClassName:G()(d,P),editable:m,moreIcon:O,prefixCls:A,animated:R}))}))}ct.TabPane=da;var Ta=ct},38416:function(q){function ie(f,a,g){return a in f?Object.defineProperty(f,a,{value:g,enumerable:!0,configurable:!0,writable:!0}):f[a]=g,f}q.exports=ie,q.exports.__esModule=!0,q.exports.default=q.exports},42122:function(q,ie,f){var a=f(38416);function g(Y,J){var X=Object.keys(Y);if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(Y);J&&(F=F.filter(function(G){return Object.getOwnPropertyDescriptor(Y,G).enumerable})),X.push.apply(X,F)}return X}function y(Y){for(var J=1;J<arguments.length;J++){var X=arguments[J]!=null?arguments[J]:{};J%2?g(Object(X),!0).forEach(function(F){a(Y,F,X[F])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Y,Object.getOwnPropertyDescriptors(X)):g(Object(X)).forEach(function(F){Object.defineProperty(Y,F,Object.getOwnPropertyDescriptor(X,F))})}return Y}q.exports=y,q.exports.__esModule=!0,q.exports.default=q.exports}}]);
