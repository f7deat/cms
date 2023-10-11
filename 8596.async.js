"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8596],{66023:function(we,le){var d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"};le.Z=d},42110:function(we,le){var d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};le.Z=d},11941:function(we,le,d){d.d(le,{Z:function(){return Ia}});var Ie=d(84481),he=d(48001),F=d(87462),n=d(62435),Ze=d(42110),Xe=d(93771),Le=function(t,a){return n.createElement(Xe.Z,(0,F.Z)({},t,{ref:a,icon:Ze.Z}))},ze=n.forwardRef(Le),Rt=d(94184),j=d.n(Rt),k=d(4942),V=d(1413),w=d(97685),Ne=d(71002),$e=d(91),wt=d(31131),Ve=d(21770),It=d(82225),Se=(0,n.createContext)(null),Zt=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.className,i=e.style,o=e.id,l=e.active,s=e.tabKey,c=e.children;return n.createElement("div",{id:o&&"".concat(o,"-panel-").concat(s),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(s),"aria-hidden":!l,style:i,className:j()(a,l&&"".concat(a,"-active"),r),ref:t},c)}),Ue=Zt,Lt=["key","forceRender","style","className"];function zt(e){var t=e.id,a=e.activeKey,r=e.animated,i=e.tabPosition,o=e.destroyInactiveTabPane,l=n.useContext(Se),s=l.prefixCls,c=l.tabs,u=r.tabPane,S="".concat(s,"-tabpane");return n.createElement("div",{className:j()("".concat(s,"-content-holder"))},n.createElement("div",{className:j()("".concat(s,"-content"),"".concat(s,"-content-").concat(i),(0,k.Z)({},"".concat(s,"-content-animated"),u))},c.map(function(v){var $=v.key,b=v.forceRender,m=v.style,I=v.className,D=(0,$e.Z)(v,Lt),R=$===a;return n.createElement(It.ZP,(0,F.Z)({key:$,visible:R,forceRender:b,removeOnLeave:!!o,leavedClassName:"".concat(S,"-hidden")},r.tabPaneMotion),function(L,y){var G=L.style,A=L.className;return n.createElement(Ue,(0,F.Z)({},D,{prefixCls:S,id:t,tabKey:$,animated:u,active:R,style:(0,V.Z)((0,V.Z)({},m),G),className:j()(I,A),ref:y}))})})))}var Fe=d(74902),Me=d(9220),Nt=d(66680),Mt=d(42550),Ye={width:0,height:0,left:0,top:0};function Ot(e,t,a){return(0,n.useMemo)(function(){for(var r,i=new Map,o=t.get((r=e[0])===null||r===void 0?void 0:r.key)||Ye,l=o.left+o.width,s=0;s<e.length;s+=1){var c=e[s].key,u=t.get(c);if(!u){var S;u=t.get((S=e[s-1])===null||S===void 0?void 0:S.key)||Ye}var v=i.get(c)||(0,V.Z)({},u);v.right=l-v.left-v.width,i.set(c,v)}return i},[e.map(function(r){return r.key}).join("_"),t,a])}function Qe(e,t){var a=n.useRef(e),r=n.useState({}),i=(0,w.Z)(r,2),o=i[1];function l(s){var c=typeof s=="function"?s(a.current):s;c!==a.current&&t(c,a.current),a.current=c,o({})}return[a.current,l]}var Bt=.1,Je=.01,ye=20,qe=Math.pow(.995,ye);function Dt(e,t){var a=(0,n.useState)(),r=(0,w.Z)(a,2),i=r[0],o=r[1],l=(0,n.useState)(0),s=(0,w.Z)(l,2),c=s[0],u=s[1],S=(0,n.useState)(0),v=(0,w.Z)(S,2),$=v[0],b=v[1],m=(0,n.useState)(),I=(0,w.Z)(m,2),D=I[0],R=I[1],L=(0,n.useRef)();function y(h){var T=h.touches[0],E=T.screenX,f=T.screenY;o({x:E,y:f}),window.clearInterval(L.current)}function G(h){if(i){h.preventDefault();var T=h.touches[0],E=T.screenX,f=T.screenY;o({x:E,y:f});var C=E-i.x,P=f-i.y;t(C,P);var N=Date.now();u(N),b(N-c),R({x:C,y:P})}}function A(){if(i&&(o(null),R(null),D)){var h=D.x/$,T=D.y/$,E=Math.abs(h),f=Math.abs(T);if(Math.max(E,f)<Bt)return;var C=h,P=T;L.current=window.setInterval(function(){if(Math.abs(C)<Je&&Math.abs(P)<Je){window.clearInterval(L.current);return}C*=qe,P*=qe,t(C*ye,P*ye)},ye)}}var g=(0,n.useRef)();function z(h){var T=h.deltaX,E=h.deltaY,f=0,C=Math.abs(T),P=Math.abs(E);C===P?f=g.current==="x"?T:E:C>P?(f=T,g.current="x"):(f=E,g.current="y"),t(-f,-f)&&h.preventDefault()}var O=(0,n.useRef)(null);O.current={onTouchStart:y,onTouchMove:G,onTouchEnd:A,onWheel:z},n.useEffect(function(){function h(C){O.current.onTouchStart(C)}function T(C){O.current.onTouchMove(C)}function E(C){O.current.onTouchEnd(C)}function f(C){O.current.onWheel(C)}return document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",E,{passive:!1}),e.current.addEventListener("touchstart",h,{passive:!1}),e.current.addEventListener("wheel",f),function(){document.removeEventListener("touchmove",T),document.removeEventListener("touchend",E)}},[])}var At=d(8410);function et(e){var t=(0,n.useState)(0),a=(0,w.Z)(t,2),r=a[0],i=a[1],o=(0,n.useRef)(0),l=(0,n.useRef)();return l.current=e,(0,At.o)(function(){var s;(s=l.current)===null||s===void 0||s.call(l)},[r]),function(){o.current===r&&(o.current+=1,i(o.current))}}function Wt(e){var t=(0,n.useRef)([]),a=(0,n.useState)({}),r=(0,w.Z)(a,2),i=r[1],o=(0,n.useRef)(typeof e=="function"?e():e),l=et(function(){var c=o.current;t.current.forEach(function(u){c=u(c)}),t.current=[],o.current=c,i({})});function s(c){t.current.push(c),l()}return[o.current,s]}var tt={width:0,height:0,left:0,top:0,right:0};function Gt(e,t,a,r,i,o,l){var s=l.tabs,c=l.tabPosition,u=l.rtl,S,v,$;return["top","bottom"].includes(c)?(S="width",v=u?"right":"left",$=Math.abs(a)):(S="height",v="top",$=-a),(0,n.useMemo)(function(){if(!s.length)return[0,0];for(var b=s.length,m=b,I=0;I<b;I+=1){var D=e.get(s[I].key)||tt;if(D[v]+D[S]>$+t){m=I-1;break}}for(var R=0,L=b-1;L>=0;L-=1){var y=e.get(s[L].key)||tt;if(y[v]<$){R=L+1;break}}return R>=m?[0,0]:[R,m]},[e,t,r,i,o,$,c,s.map(function(b){return b.key}).join("_"),u])}function at(e){var t;return e instanceof Map?(t={},e.forEach(function(a,r){t[r]=a})):t=e,JSON.stringify(t)}var Ht="TABS_DQ";function nt(e){return String(e).replace(/"/g,Ht)}function rt(e,t,a,r){return!(!a||r||e===!1||e===void 0&&(t===!1||t===null))}function jt(e,t){var a=e.prefixCls,r=e.editable,i=e.locale,o=e.style;return!r||r.showAdd===!1?null:n.createElement("button",{ref:t,type:"button",className:"".concat(a,"-nav-add"),style:o,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(s){r.onEdit("add",{event:s})}},r.addIcon||"+")}var it=n.forwardRef(jt),kt=n.forwardRef(function(e,t){var a=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var o,l={};return(0,Ne.Z)(i)==="object"&&!n.isValidElement(i)?l=i:l.right=i,a==="right"&&(o=l.right),a==="left"&&(o=l.left),o?n.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},o):null}),ot=kt,_t=d(29171),lt=d(72512),Y=d(15105);function Kt(e,t){var a=e.prefixCls,r=e.id,i=e.tabs,o=e.locale,l=e.mobile,s=e.moreIcon,c=s===void 0?"More":s,u=e.moreTransitionName,S=e.style,v=e.className,$=e.editable,b=e.tabBarGutter,m=e.rtl,I=e.removeAriaLabel,D=e.onTabClick,R=e.getPopupContainer,L=e.popupClassName,y=(0,n.useState)(!1),G=(0,w.Z)(y,2),A=G[0],g=G[1],z=(0,n.useState)(null),O=(0,w.Z)(z,2),h=O[0],T=O[1],E="".concat(r,"-more-popup"),f="".concat(a,"-dropdown"),C=h!==null?"".concat(E,"-").concat(h):null,P=o==null?void 0:o.dropdownAriaLabel;function N(x,B){x.preventDefault(),x.stopPropagation(),$.onEdit("remove",{key:B,event:x})}var Q=n.createElement(lt.ZP,{onClick:function(B){var K=B.key,U=B.domEvent;D(K,U),g(!1)},prefixCls:"".concat(f,"-menu"),id:E,tabIndex:-1,role:"listbox","aria-activedescendant":C,selectedKeys:[h],"aria-label":P!==void 0?P:"expanded dropdown"},i.map(function(x){var B=x.closable,K=x.disabled,U=x.closeIcon,X=x.key,J=x.label,ae=rt(B,U,$,K);return n.createElement(lt.sN,{key:X,id:"".concat(E,"-").concat(X),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(X),disabled:K},n.createElement("span",null,J),ae&&n.createElement("button",{type:"button","aria-label":I||"remove",tabIndex:0,className:"".concat(f,"-menu-item-remove"),onClick:function(re){re.stopPropagation(),N(re,X)}},U||$.removeIcon||"\xD7"))}));function ne(x){for(var B=i.filter(function(ae){return!ae.disabled}),K=B.findIndex(function(ae){return ae.key===h})||0,U=B.length,X=0;X<U;X+=1){K=(K+x+U)%U;var J=B[K];if(!J.disabled){T(J.key);return}}}function te(x){var B=x.which;if(!A){[Y.Z.DOWN,Y.Z.SPACE,Y.Z.ENTER].includes(B)&&(g(!0),x.preventDefault());return}switch(B){case Y.Z.UP:ne(-1),x.preventDefault();break;case Y.Z.DOWN:ne(1),x.preventDefault();break;case Y.Z.ESC:g(!1);break;case Y.Z.SPACE:case Y.Z.ENTER:h!==null&&D(h,x);break}}(0,n.useEffect)(function(){var x=document.getElementById(C);x&&x.scrollIntoView&&x.scrollIntoView(!1)},[h]),(0,n.useEffect)(function(){A||T(null)},[A]);var _=(0,k.Z)({},m?"marginRight":"marginLeft",b);i.length||(_.visibility="hidden",_.order=1);var se=j()((0,k.Z)({},"".concat(f,"-rtl"),m)),be=l?null:n.createElement(_t.Z,{prefixCls:f,overlay:Q,trigger:["hover"],visible:i.length?A:!1,transitionName:u,onVisibleChange:g,overlayClassName:j()(se,L),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:R},n.createElement("button",{type:"button",className:"".concat(a,"-nav-more"),style:_,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":E,id:"".concat(r,"-more"),"aria-expanded":A,onKeyDown:te},c));return n.createElement("div",{className:j()("".concat(a,"-nav-operations"),v),style:S,ref:t},be,n.createElement(it,{prefixCls:a,locale:o,editable:$}))}var Xt=n.memo(n.forwardRef(Kt),function(e,t){return t.tabMoving});function Vt(e){var t,a=e.prefixCls,r=e.id,i=e.active,o=e.tab,l=o.key,s=o.label,c=o.disabled,u=o.closeIcon,S=e.closable,v=e.renderWrapper,$=e.removeAriaLabel,b=e.editable,m=e.onClick,I=e.onFocus,D=e.style,R="".concat(a,"-tab"),L=rt(S,u,b,c);function y(g){c||m(g)}function G(g){g.preventDefault(),g.stopPropagation(),b.onEdit("remove",{key:l,event:g})}var A=n.createElement("div",{key:l,"data-node-key":nt(l),className:j()(R,(t={},(0,k.Z)(t,"".concat(R,"-with-remove"),L),(0,k.Z)(t,"".concat(R,"-active"),i),(0,k.Z)(t,"".concat(R,"-disabled"),c),t)),style:D,onClick:y},n.createElement("div",{role:"tab","aria-selected":i,id:r&&"".concat(r,"-tab-").concat(l),className:"".concat(R,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(l),"aria-disabled":c,tabIndex:c?null:0,onClick:function(z){z.stopPropagation(),y(z)},onKeyDown:function(z){[Y.Z.SPACE,Y.Z.ENTER].includes(z.which)&&(z.preventDefault(),y(z))},onFocus:I},s),L&&n.createElement("button",{type:"button","aria-label":$||"remove",tabIndex:0,className:"".concat(R,"-remove"),onClick:function(z){z.stopPropagation(),G(z)}},u||b.removeIcon||"\xD7"));return v?v(A):A}var Ut=Vt,st=d(75164),Ft=function(t){var a=t.activeTabOffset,r=t.horizontal,i=t.rtl,o=t.indicatorSize,l=(0,n.useState)(),s=(0,w.Z)(l,2),c=s[0],u=s[1],S=(0,n.useRef)(),v=function(m){return typeof o=="function"?o(m):typeof o=="number"?o:m};function $(){st.Z.cancel(S.current)}return(0,n.useEffect)(function(){var b={};return a&&(r?(i?(b.right=a.right+a.width/2,b.transform="translateX(50%)"):(b.left=a.left+a.width/2,b.transform="translateX(-50%)"),b.width=v(a.width)):(b.top=a.top+a.height/2,b.transform="translateY(-50%)",b.height=v(a.height))),$(),S.current=(0,st.Z)(function(){u(b)}),$},[a,r,i,o]),{style:c}},Yt=Ft,ue=function(t){var a=t.current||{},r=a.offsetWidth,i=r===void 0?0:r,o=a.offsetHeight,l=o===void 0?0:o;return[i,l]},xe=function(t,a){return t[a?0:1]};function Qt(e,t){var a,r=n.useContext(Se),i=r.prefixCls,o=r.tabs,l=e.className,s=e.style,c=e.id,u=e.animated,S=e.activeKey,v=e.rtl,$=e.extra,b=e.editable,m=e.locale,I=e.tabPosition,D=e.tabBarGutter,R=e.children,L=e.onTabClick,y=e.onTabScroll,G=e.indicatorSize,A=(0,n.useRef)(),g=(0,n.useRef)(),z=(0,n.useRef)(),O=(0,n.useRef)(),h=(0,n.useRef)(),T=(0,n.useRef)(),E=(0,n.useRef)(),f=I==="top"||I==="bottom",C=Qe(0,function(M,p){f&&y&&y({direction:M>p?"left":"right"})}),P=(0,w.Z)(C,2),N=P[0],Q=P[1],ne=Qe(0,function(M,p){!f&&y&&y({direction:M>p?"top":"bottom"})}),te=(0,w.Z)(ne,2),_=te[0],se=te[1],be=(0,n.useState)([0,0]),x=(0,w.Z)(be,2),B=x[0],K=x[1],U=(0,n.useState)([0,0]),X=(0,w.Z)(U,2),J=X[0],ae=X[1],Ce=(0,n.useState)([0,0]),re=(0,w.Z)(Ce,2),Oe=re[0],Be=re[1],De=(0,n.useState)([0,0]),pe=(0,w.Z)(De,2),Ae=pe[0],Z=pe[1],ce=Wt(new Map),ve=(0,w.Z)(ce,2),Za=ve[0],La=ve[1],Te=Ot(o,Za,J[0]),We=xe(B,f),me=xe(J,f),Ge=xe(Oe,f),ft=xe(Ae,f),bt=We<me+Ge,q=bt?We-ft:We-Ge,za="".concat(i,"-nav-operations-hidden"),ie=0,de=0;f&&v?(ie=0,de=Math.max(0,me-q)):(ie=Math.min(0,q-me),de=0);function He(M){return M<ie?ie:M>de?de:M}var pt=(0,n.useRef)(),Na=(0,n.useState)(),mt=(0,w.Z)(Na,2),Ee=mt[0],gt=mt[1];function je(){gt(Date.now())}function ke(){window.clearTimeout(pt.current)}Dt(O,function(M,p){function W(H,oe){H(function(ee){var Ha=He(ee+oe);return Ha})}return bt?(f?W(Q,M):W(se,p),ke(),je(),!0):!1}),(0,n.useEffect)(function(){return ke(),Ee&&(pt.current=window.setTimeout(function(){gt(0)},100)),ke},[Ee]);var Ma=Gt(Te,q,f?N:_,me,Ge,ft,(0,V.Z)((0,V.Z)({},e),{},{tabs:o})),ht=(0,w.Z)(Ma,2),Oa=ht[0],Ba=ht[1],$t=(0,Nt.Z)(function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:S,p=Te.get(M)||{width:0,height:0,left:0,right:0,top:0};if(f){var W=N;v?p.right<N?W=p.right:p.right+p.width>N+q&&(W=p.right+p.width-q):p.left<-N?W=-p.left:p.left+p.width>-N+q&&(W=-(p.left+p.width-q)),se(0),Q(He(W))}else{var H=_;p.top<-_?H=-p.top:p.top+p.height>-_+q&&(H=-(p.top+p.height-q)),Q(0),se(He(H))}}),Pe={};I==="top"||I==="bottom"?Pe[v?"marginRight":"marginLeft"]=D:Pe.marginTop=D;var St=o.map(function(M,p){var W=M.key;return n.createElement(Ut,{id:c,prefixCls:i,key:W,tab:M,style:p===0?void 0:Pe,closable:M.closable,editable:b,active:W===S,renderWrapper:R,removeAriaLabel:m==null?void 0:m.removeAriaLabel,onClick:function(oe){L(W,oe)},onFocus:function(){$t(W),je(),O.current&&(v||(O.current.scrollLeft=0),O.current.scrollTop=0)}})}),yt=function(){return La(function(){var p=new Map;return o.forEach(function(W){var H,oe=W.key,ee=(H=h.current)===null||H===void 0?void 0:H.querySelector('[data-node-key="'.concat(nt(oe),'"]'));ee&&p.set(oe,{width:ee.offsetWidth,height:ee.offsetHeight,left:ee.offsetLeft,top:ee.offsetTop})}),p})};(0,n.useEffect)(function(){yt()},[o.map(function(M){return M.key}).join("_")]);var Re=et(function(){var M=ue(A),p=ue(g),W=ue(z);K([M[0]-p[0]-W[0],M[1]-p[1]-W[1]]);var H=ue(E);Be(H);var oe=ue(T);Z(oe);var ee=ue(h);ae([ee[0]-H[0],ee[1]-H[1]]),yt()}),Da=o.slice(0,Oa),Aa=o.slice(Ba+1),xt=[].concat((0,Fe.Z)(Da),(0,Fe.Z)(Aa)),Ct=Te.get(S),Wa=Yt({activeTabOffset:Ct,horizontal:f,rtl:v,indicatorSize:G}),Ga=Wa.style;(0,n.useEffect)(function(){$t()},[S,ie,de,at(Ct),at(Te),f]),(0,n.useEffect)(function(){Re()},[v]);var Tt=!!xt.length,ge="".concat(i,"-nav-wrap"),_e,Ke,Et,Pt;return f?v?(Ke=N>0,_e=N!==de):(_e=N<0,Ke=N!==ie):(Et=_<0,Pt=_!==ie),n.createElement(Me.Z,{onResize:Re},n.createElement("div",{ref:(0,Mt.x1)(t,A),role:"tablist",className:j()("".concat(i,"-nav"),l),style:s,onKeyDown:function(){je()}},n.createElement(ot,{ref:g,position:"left",extra:$,prefixCls:i}),n.createElement(Me.Z,{onResize:Re},n.createElement("div",{className:j()(ge,(a={},(0,k.Z)(a,"".concat(ge,"-ping-left"),_e),(0,k.Z)(a,"".concat(ge,"-ping-right"),Ke),(0,k.Z)(a,"".concat(ge,"-ping-top"),Et),(0,k.Z)(a,"".concat(ge,"-ping-bottom"),Pt),a)),ref:O},n.createElement(Me.Z,{onResize:Re},n.createElement("div",{ref:h,className:"".concat(i,"-nav-list"),style:{transform:"translate(".concat(N,"px, ").concat(_,"px)"),transition:Ee?"none":void 0}},St,n.createElement(it,{ref:E,prefixCls:i,locale:m,editable:b,style:(0,V.Z)((0,V.Z)({},St.length===0?void 0:Pe),{},{visibility:Tt?"hidden":null})}),n.createElement("div",{className:j()("".concat(i,"-ink-bar"),(0,k.Z)({},"".concat(i,"-ink-bar-animated"),u.inkBar)),style:Ga}))))),n.createElement(Xt,(0,F.Z)({},e,{removeAriaLabel:m==null?void 0:m.removeAriaLabel,ref:T,prefixCls:i,tabs:xt,className:!Tt&&za,tabMoving:!!Ee})),n.createElement(ot,{ref:z,position:"right",extra:$,prefixCls:i})))}var ct=n.forwardRef(Qt),Jt=["renderTabBar"],qt=["label","key"];function ea(e){var t=e.renderTabBar,a=(0,$e.Z)(e,Jt),r=n.useContext(Se),i=r.tabs;if(t){var o=(0,V.Z)((0,V.Z)({},a),{},{panes:i.map(function(l){var s=l.label,c=l.key,u=(0,$e.Z)(l,qt);return n.createElement(Ue,(0,F.Z)({tab:s,key:c,tabKey:c},u))})});return t(o,ct)}return n.createElement(ct,a)}var ja=d(80334);function ta(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=(0,V.Z)({inkBar:!0},(0,Ne.Z)(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var aa=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicatorSize"],dt=0;function na(e,t){var a,r=e.id,i=e.prefixCls,o=i===void 0?"rc-tabs":i,l=e.className,s=e.items,c=e.direction,u=e.activeKey,S=e.defaultActiveKey,v=e.editable,$=e.animated,b=e.tabPosition,m=b===void 0?"top":b,I=e.tabBarGutter,D=e.tabBarStyle,R=e.tabBarExtraContent,L=e.locale,y=e.moreIcon,G=e.moreTransitionName,A=e.destroyInactiveTabPane,g=e.renderTabBar,z=e.onChange,O=e.onTabClick,h=e.onTabScroll,T=e.getPopupContainer,E=e.popupClassName,f=e.indicatorSize,C=(0,$e.Z)(e,aa),P=n.useMemo(function(){return(s||[]).filter(function(Z){return Z&&(0,Ne.Z)(Z)==="object"&&"key"in Z})},[s]),N=c==="rtl",Q=ta($),ne=(0,n.useState)(!1),te=(0,w.Z)(ne,2),_=te[0],se=te[1];(0,n.useEffect)(function(){se((0,wt.Z)())},[]);var be=(0,Ve.Z)(function(){var Z;return(Z=P[0])===null||Z===void 0?void 0:Z.key},{value:u,defaultValue:S}),x=(0,w.Z)(be,2),B=x[0],K=x[1],U=(0,n.useState)(function(){return P.findIndex(function(Z){return Z.key===B})}),X=(0,w.Z)(U,2),J=X[0],ae=X[1];(0,n.useEffect)(function(){var Z=P.findIndex(function(ve){return ve.key===B});if(Z===-1){var ce;Z=Math.max(0,Math.min(J,P.length-1)),K((ce=P[Z])===null||ce===void 0?void 0:ce.key)}ae(Z)},[P.map(function(Z){return Z.key}).join("_"),B,J]);var Ce=(0,Ve.Z)(null,{value:r}),re=(0,w.Z)(Ce,2),Oe=re[0],Be=re[1];(0,n.useEffect)(function(){r||(Be("rc-tabs-".concat(dt)),dt+=1)},[]);function De(Z,ce){O==null||O(Z,ce);var ve=Z!==B;K(Z),ve&&(z==null||z(Z))}var pe={id:Oe,activeKey:B,animated:Q,tabPosition:m,rtl:N,mobile:_},Ae=(0,V.Z)((0,V.Z)({},pe),{},{editable:v,locale:L,moreIcon:y,moreTransitionName:G,tabBarGutter:I,onTabClick:De,onTabScroll:h,extra:R,style:D,panes:null,getPopupContainer:T,popupClassName:E,indicatorSize:f});return n.createElement(Se.Provider,{value:{tabs:P,prefixCls:o}},n.createElement("div",(0,F.Z)({ref:t,id:r,className:j()(o,"".concat(o,"-").concat(m),(a={},(0,k.Z)(a,"".concat(o,"-mobile"),_),(0,k.Z)(a,"".concat(o,"-editable"),v),(0,k.Z)(a,"".concat(o,"-rtl"),N),a),l)},C),n.createElement(ea,(0,F.Z)({},Ae,{renderTabBar:g})),n.createElement(zt,(0,F.Z)({destroyInactiveTabPane:A},pe,{animated:Q}))))}var ra=n.forwardRef(na),ia=ra,oa=ia,la=d(53124),sa=d(98675),ca=()=>null,da=d(33603);const ua={motionAppear:!1,motionEnter:!0,motionLeave:!0};function va(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},a;return t===!1?a={inkBar:!1,tabPane:!1}:t===!0?a={inkBar:!0,tabPane:!0}:a=Object.assign({inkBar:!0},typeof t=="object"?t:{}),a.tabPane&&(a.tabPaneMotion=Object.assign(Object.assign({},ua),{motionName:(0,da.m)(e,"switch")})),a}var fa=d(50344),ba=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};function pa(e){return e.filter(t=>t)}function ma(e,t){if(e)return e;const a=(0,fa.Z)(t).map(r=>{if(n.isValidElement(r)){const{key:i,props:o}=r,l=o||{},{tab:s}=l,c=ba(l,["tab"]);return Object.assign(Object.assign({key:String(i)},c),{label:s})}return null});return pa(a)}var fe=d(14747),ga=d(67968),ha=d(45503),ut=d(67771),$a=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[(0,ut.oN)(e,"slide-up"),(0,ut.oN)(e,"slide-down")]]};const Sa=e=>{const{componentCls:t,tabsCardPadding:a,cardBg:r,cardGutter:i,colorBorderSecondary:o,itemSelectedColor:l}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:r,border:`${e.lineWidth}px ${e.lineType} ${o}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:l,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${i}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${i}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},ya=e=>{const{componentCls:t,itemHoverColor:a,dropdownEdgeChildVerticalPadding:r}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,fe.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${r}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},fe.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},xa=e=>{const{componentCls:t,margin:a,colorBorderSecondary:r,horizontalMargin:i,verticalItemPadding:o,verticalItemMargin:l}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:i,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${r}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${a}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:e.controlHeight*1.25,[`${t}-tab`]:{padding:o,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:l},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Ca=e=>{const{componentCls:t,cardPaddingSM:a,cardPaddingLG:r,horizontalItemPaddingSM:i,horizontalItemPaddingLG:o}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:o,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:a}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r}}}}}},Ta=e=>{const{componentCls:t,itemActiveColor:a,itemHoverColor:r,iconCls:i,tabsHorizontalItemMargin:o,horizontalItemPadding:l,itemSelectedColor:s,itemColor:c}=e,u=`${t}-tab`;return{[u]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:l,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:c,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:a}},(0,fe.Qy)(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:r},[`&${u}-active ${u}-btn`]:{color:s,textShadow:e.tabsActiveTextShadow},[`&${u}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${u}-disabled ${u}-btn, &${u}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${u}-remove ${i}`]:{margin:0},[i]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${u} + ${u}`]:{margin:{_skip_check_:!0,value:o}}}},Ea=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:a,iconCls:r,cardGutter:i}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:a},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[r]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[r]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:i},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Pa=e=>{const{componentCls:t,tabsCardPadding:a,cardHeight:r,cardGutter:i,itemHoverColor:o,itemActiveColor:l,colorBorderSecondary:s}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,fe.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:r,marginLeft:{_skip_check_:!0,value:i},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${s}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:o},"&:active, &:focus:not(:focus-visible)":{color:l}},(0,fe.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),Ta(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}};var Ra=(0,ga.Z)("Tabs",e=>{const t=(0,ha.TS)(e,{tabsCardPadding:e.cardPadding||`${(e.cardHeight-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${e.horizontalItemGutter}px`,tabsHorizontalItemMarginRTL:`0 0 0 ${e.horizontalItemGutter}px`});return[Ca(t),Ea(t),xa(t),ya(t),Sa(t),Pa(t),$a(t)]},e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:"",cardPaddingSM:`${e.paddingXXS*1.5}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${e.paddingXXS*1.5}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}}),wa=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};const vt=e=>{const{type:t,className:a,rootClassName:r,size:i,onEdit:o,hideAdd:l,centered:s,addIcon:c,popupClassName:u,children:S,items:v,animated:$,style:b,indicatorSize:m}=e,I=wa(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated","style","indicatorSize"]),{prefixCls:D,moreIcon:R=n.createElement(he.Z,null)}=I,{direction:L,tabs:y,getPrefixCls:G,getPopupContainer:A}=n.useContext(la.E_),g=G("tabs",D),[z,O]=Ra(g);let h;t==="editable-card"&&(h={onEdit:(N,Q)=>{let{key:ne,event:te}=Q;o==null||o(N==="add"?te:ne,N)},removeIcon:n.createElement(Ie.Z,null),addIcon:c||n.createElement(ze,null),showAdd:l!==!0});const T=G(),E=ma(v,S),f=va(g,$),C=(0,sa.Z)(i),P=Object.assign(Object.assign({},y==null?void 0:y.style),b);return z(n.createElement(oa,Object.assign({direction:L,getPopupContainer:A,moreTransitionName:`${T}-slide-up`},I,{items:E,className:j()({[`${g}-${C}`]:C,[`${g}-card`]:["card","editable-card"].includes(t),[`${g}-editable-card`]:t==="editable-card",[`${g}-centered`]:s},y==null?void 0:y.className,a,r,O),popupClassName:j()(u,O),style:P,editable:h,moreIcon:R,prefixCls:g,animated:f,indicatorSize:m!=null?m:y==null?void 0:y.indicatorSize})))};vt.TabPane=ca;var Ia=vt},13622:function(we,le,d){var Ie=d(87462),he=d(62435),F=d(66023),n=d(93771),Ze=function(Le,ze){return he.createElement(n.Z,(0,Ie.Z)({},Le,{ref:ze,icon:F.Z}))};le.Z=he.forwardRef(Ze)}}]);
