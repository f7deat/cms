"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9054],{1912:function(b,c,r){r.d(c,{Z:function(){return p}});var m=r(1413),n=r(62435),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"},_=v,s=r(91146),o=function(d,f){return n.createElement(s.Z,(0,m.Z)((0,m.Z)({},d),{},{ref:f,icon:_}))};o.displayName="ArrowUpOutlined";var p=n.forwardRef(o)},1209:function(b,c,r){r.r(c);var m=r(15009),n=r.n(m),v=r(99289),_=r.n(v),s=r(78710),o=r(1912),p=r(63386),M=r(30009),d=r(35312),f=r(58301),h=r(71577),l=r(86074),D=function(){var g=(0,d.useIntl)(),U=function(){var u=_()(n()().mark(function e(){var a;return n()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(0,s._s)();case 2:a=E.sent,a.succeeded&&f.ZP.success("Upgraded!");case 4:case"end":return E.stop()}},e)}));return function(){return u.apply(this,arguments)}}(),O=function(){var u=_()(n()().mark(function e(a){var i;return n()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,s.gn)(a);case 2:i=P.sent,i.succeeded&&f.ZP.success(g.formatMessage({id:"general.saved"}));case 4:case"end":return P.stop()}},e)}));return function(a){return u.apply(this,arguments)}}(),t=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:"Option",valueType:"option",render:function(e,a){return[(0,l.jsx)(h.ZP,{icon:(0,l.jsx)(o.Z,{}),type:"primary",onClick:function(){return O(a.url)}},0)]}}];return(0,l.jsx)(p._z,{title:g.formatMessage({id:"menu.help.upgrade"}),extra:(0,l.jsx)(h.ZP,{icon:(0,l.jsx)(o.Z,{}),type:"primary",onClick:U,children:"Upgrade all"}),children:(0,l.jsx)(M.Z,{rowKey:"name",columns:t,request:s.Jx})})};c.default=D},78710:function(b,c,r){r.d(c,{Jx:function(){return l},_O:function(){return M},_s:function(){return f},dk:function(){return U},gn:function(){return j},rZ:function(){return o}});var m=r(15009),n=r.n(m),v=r(99289),_=r.n(v),s=r(35312);function o(){return p.apply(this,arguments)}function p(){return p=_()(n()().mark(function t(){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("backup/statistic"));case 1:case"end":return e.stop()}},t)})),p.apply(this,arguments)}function M(){return d.apply(this,arguments)}function d(){return d=_()(n()().mark(function t(){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("backup/export"));case 1:case"end":return e.stop()}},t)})),d.apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return h=_()(n()().mark(function t(){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("backup/upgrade",{method:"POST"}));case 1:case"end":return e.stop()}},t)})),h.apply(this,arguments)}function l(){return D.apply(this,arguments)}function D(){return D=_()(n()().mark(function t(){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("backup/upgrade/list"));case 1:case"end":return e.stop()}},t)})),D.apply(this,arguments)}function j(t){return g.apply(this,arguments)}function g(){return g=_()(n()().mark(function t(u){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,s.request)(u,{method:"POST"}));case 1:case"end":return a.stop()}},t)})),g.apply(this,arguments)}function U(t){return O.apply(this,arguments)}function O(){return O=_()(n()().mark(function t(u){var e;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return e=new FormData,e.append("file",u),i.abrupt("return",(0,s.request)("backup/import",{method:"POST",data:e}));case 3:case"end":return i.stop()}},t)})),O.apply(this,arguments)}}}]);
