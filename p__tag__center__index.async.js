"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[546],{67689:function(g,s,t){t.r(s);var c=t(5574),m=t.n(c),D=t(74350),o=t(61614),P=t(86548),M=t(48689),O=t(62884),v=t(34545),r=t(90905),d=t(71577),C=t(86738),T=t(71230),u=t(15746),i=t(62435),e=t(86074),f=function(){var A=(0,r.useParams)(),n=A.id,x=(0,i.useState)(),l=m()(x,2),_=l[0],I=l[1];(0,i.useEffect)(function(){(0,o.R4)(n).then(function(a){I(a)})},[n]);var j=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:"View count",dataIndex:"viewCount",search:!1,valueType:"digit"},{title:"Modified date",dataIndex:"modifiedDate",valueType:"fromNow",search:!1},{title:"Active",dataIndex:"active",valueEnum:{false:{text:"Draft",status:"Default"},true:{text:"Active",status:"Processing"}}},{title:"",valueType:"option",render:function(E,U){return[(0,e.jsx)(d.Z,{icon:(0,e.jsx)(P.Z,{}),type:"primary",onClick:function(){return r.history.push("/article/center/".concat(U.id))}},1),(0,e.jsx)(C.Z,{title:"Are you sure?",children:(0,e.jsx)(d.Z,{icon:(0,e.jsx)(M.Z,{}),type:"primary",danger:!0})},2)]}}];return(0,e.jsx)(O._z,{title:_==null?void 0:_.name,children:(0,e.jsxs)(T.Z,{gutter:16,children:[(0,e.jsx)(u.Z,{span:16,children:(0,e.jsx)(v.Z,{rowKey:"id",request:function(E){return(0,o.M0)(n,E)},columns:j})}),(0,e.jsx)(u.Z,{span:8,children:(0,e.jsx)(D.Z,{catalog:_})})]})})};s.default=f}}]);
