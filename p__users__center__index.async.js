"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[846],{5966:function(b,m,e){var p=e(1413),n=e(91),c=e(86074),f=e(25338),t=["fieldProps","proFieldProps"],h=["fieldProps","proFieldProps"],o="text",x=function(s){var i=s.fieldProps,a=s.proFieldProps,l=(0,n.Z)(s,t);return(0,c.jsx)(f.Z,(0,p.Z)({valueType:o,fieldProps:i,filedConfig:{valueType:o},proFieldProps:a},l))},T=function(s){var i=s.fieldProps,a=s.proFieldProps,l=(0,n.Z)(s,h);return(0,c.jsx)(f.Z,(0,p.Z)({valueType:"password",fieldProps:i,proFieldProps:a,filedConfig:{valueType:o}},l))},d=x;d.Password=T,d.displayName="ProFormComponent",m.Z=d},12213:function(b,m,e){e.r(m),e.d(m,{default:function(){return U}});var p=e(5574),n=e.n(p),c=e(62884),f=e(30029),t=e(32983),h=e(62435),o=e(15009),x=e.n(o),T=e(99289),d=e.n(T),j=e(6742),s=e(22538),i=e(99351),a=e(5966),l=e(90905),M=e(27790),A=e(71577),r=e(86074),R=function(E){var C=(0,l.useParams)(),Z=C.id,F=(0,h.useState)(!1),S=n()(F,2),O=S[0],g=S[1],I=[{id:"password",name:"M\u1EADt kh\u1EA9u"},{id:"email",name:"Email"},{id:"phone",name:"S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"},{id:"question",name:"C\xE2u h\u1ECFi b\u1EA3o m\u1EADt"}],L=function(u){switch(u){case"password":g(!0);break;default:break}},w=function(){var D=d()(x()().mark(function u(v){var y;return x()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,j.Cp)(v);case 2:y=P.sent,y.succeeded?(M.ZP.success("Saved"),g(!1)):M.ZP.error(y.errors[0].description);case 4:case"end":return P.stop()}},u)}));return function(v){return D.apply(this,arguments)}}();return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Rs,{dataSource:I,rowKey:"id",headerTitle:E.headerTitle,metas:{title:{dataIndex:"name"},actions:{render:function(u,v){return[(0,r.jsx)(A.Z,{type:"link",onClick:function(){return L(v.id)},children:"Ch\u1EC9nh s\u1EEDa"},v.id)]}}}}),(0,r.jsxs)(i.Y,{open:O,onOpenChange:g,onFinish:w,children:[(0,r.jsx)(a.Z,{name:"id",initialValue:Z,hidden:!0}),(0,r.jsx)(a.Z.Password,{name:"oldPassword",label:"Old password",rules:[{required:!0}]}),(0,r.jsx)(a.Z.Password,{name:"newPassword",label:"New password",rules:[{required:!0}]}),(0,r.jsx)(a.Z.Password,{name:"confirmPassword",label:"Confirm password",rules:[{required:!0}]})]})]})},B=R,K=function(){var E=(0,h.useState)("basic"),C=n()(E,2),Z=C[0],F=C[1];return(0,r.jsx)(c._z,{children:(0,r.jsx)(f.Z,{tabs:{tabPosition:"left",activeKey:Z,items:[{label:"C\u01A1 b\u1EA3n",key:"basic",children:(0,r.jsx)(t.Z,{})},{label:"B\u1EA3o m\u1EADt",key:"tab2",children:(0,r.jsx)(B,{headerTitle:"B\u1EA3o m\u1EADt"})},{label:"Li\xEAn k\u1EBFt",key:"tab3",children:(0,r.jsx)(t.Z,{})},{label:"Th\xF4ng b\xE1o",key:"tab4",children:(0,r.jsx)(t.Z,{})}],onChange:function(O){F(O)}}})})},U=K}}]);
