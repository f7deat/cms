"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9054],{1912:function(b,m,r){r.d(m,{Z:function(){return c}});var f=r(1413),t=r(62435),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"},_=v,u=r(91146),p=function(d,h){return t.createElement(u.Z,(0,f.Z)((0,f.Z)({},d),{},{ref:h,icon:_}))};p.displayName="ArrowUpOutlined";var c=t.forwardRef(p)},1209:function(b,m,r){r.r(m);var f=r(15009),t=r.n(f),v=r(99289),_=r.n(v),u=r(78710),p=r(1912),c=r(63386),P=r(80527),d=r(35312),h=r(58301),g=r(71577),l=r(86074),D=function(){var E=(0,d.useIntl)(),M=function(){var o=_()(t()().mark(function n(){var a;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,u._s)();case 2:a=s.sent,a.succeeded&&h.ZP.success("Upgraded!");case 4:case"end":return s.stop()}},n)}));return function(){return o.apply(this,arguments)}}(),O=function(){var o=_()(t()().mark(function n(a){var e;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,u.gn)(a);case 2:e=i.sent,e.succeeded&&h.ZP.success(E.formatMessage({id:"general.saved"}));case 4:case"end":return i.stop()}},n)}));return function(a){return o.apply(this,arguments)}}(),U=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:"Option",valueType:"option",render:function(n,a){return[(0,l.jsx)(g.ZP,{icon:(0,l.jsx)(p.Z,{}),type:"primary",onClick:function(){return O(a.url)}},0)]}}];return(0,l.jsx)(c._z,{title:E.formatMessage({id:"menu.help.upgrade"}),extra:(0,l.jsx)(g.ZP,{icon:(0,l.jsx)(p.Z,{}),type:"primary",onClick:M,children:"Upgrade all"}),children:(0,l.jsx)(P.Z,{rowKey:"name",columns:U,request:u.Jx})})};m.default=D},78710:function(b,m,r){r.d(m,{Jx:function(){return l},W:function(){return U},_O:function(){return P},_s:function(){return h},dk:function(){return M},gn:function(){return y},rZ:function(){return p}});var f=r(15009),t=r.n(f),v=r(99289),_=r.n(v),u=r(35312);function p(){return c.apply(this,arguments)}function c(){return c=_()(t()().mark(function n(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("backup/statistic"));case 1:case"end":return e.stop()}},n)})),c.apply(this,arguments)}function P(){return d.apply(this,arguments)}function d(){return d=_()(t()().mark(function n(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("backup/export",{method:"POST"}));case 1:case"end":return e.stop()}},n)})),d.apply(this,arguments)}function h(){return g.apply(this,arguments)}function g(){return g=_()(t()().mark(function n(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("backup/upgrade",{method:"POST"}));case 1:case"end":return e.stop()}},n)})),g.apply(this,arguments)}function l(){return D.apply(this,arguments)}function D(){return D=_()(t()().mark(function n(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("backup/upgrade/list"));case 1:case"end":return e.stop()}},n)})),D.apply(this,arguments)}function y(n){return E.apply(this,arguments)}function E(){return E=_()(t()().mark(function n(a){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,u.request)(a,{method:"POST"}));case 1:case"end":return s.stop()}},n)})),E.apply(this,arguments)}function M(n){return O.apply(this,arguments)}function O(){return O=_()(t()().mark(function n(a){var e;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return e=new FormData,e.append("file",a),i.abrupt("return",(0,u.request)("backup/import",{method:"POST",data:e}));case 3:case"end":return i.stop()}},n)})),O.apply(this,arguments)}function U(n){return o.apply(this,arguments)}function o(){return o=_()(t()().mark(function n(a){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,u.request)("backup/export/catalog/".concat(a),{method:"POST"}));case 1:case"end":return s.stop()}},n)})),o.apply(this,arguments)}}}]);
