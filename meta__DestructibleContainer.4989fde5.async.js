"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[241],{21435:function(g,t,e){var m;e.r(t),e.d(t,{demos:function(){return L}});var p=e(90228),a=e.n(p),M=e(87999),f=e.n(M),i=e(75271),U=e(3966),x=e(57228),s=e(49423),T=e(19187),B=e(16458),L={"destructiblecontainer-demo-demos":{component:i.memo(i.lazy(function(){return e.e(920).then(e.bind(e,68714))})),asset:{type:"BLOCK",id:"destructiblecontainer-demo-demos",refAtomIds:["DestructibleContainer"],dependencies:{"index.tsx":{type:"FILE",value:e(11796).Z},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"},"./UserDetailsModal.tsx":{type:"FILE",value:e(52456).Z},"./UserDetailsDrawer.tsx":{type:"FILE",value:e(97265).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.4"}},entry:"index.tsx"},context:{"./UserDetailsModal.tsx":s,"./UserDetailsDrawer.tsx":T,antd:x,react:m||(m=e.t(i,2)),"C:/Users/HJ/Desktop/pro/pro-components/src/DestructibleContainer/demos/UserDetailsModal.tsx":s,"C:/Users/HJ/Desktop/pro/pro-components/src/DestructibleContainer/demos/UserDetailsDrawer.tsx":T,"@louhaojie99/pro-components":B},renderOpts:{compile:function(){var v=f()(a()().mark(function z(){var V,G=arguments;return a()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,e.e(837).then(e.bind(e,57837));case 2:return P.abrupt("return",(V=P.sent).default.apply(V,G));case 3:case"end":return P.stop()}},z)}));function o(){return v.apply(this,arguments)}return o}()}}}},19187:function(g,t,e){e.r(t);var m=e(26068),p=e.n(m),a=e(16458),M=e(38706),f=e(75271),i=e(52676),U=function(s){return(0,f.useEffect)(function(){console.log("props: ",s)},[]),console.log("render: ",s),(0,i.jsxs)(M.Z,p()(p()({title:"\u7528\u6237\u8BE6\u60C5"},s),{},{children:[(0,i.jsx)("p",{children:"\u5C0F\u9177"}),(0,i.jsx)("p",{children:"\u5C0F\u6A31"}),(0,i.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};t.default=(0,a.DestructibleContainer)(U)},49423:function(g,t,e){e.r(t);var m=e(26068),p=e.n(m),a=e(16458),M=e(96934),f=e(75271),i=e(52676),U=function(s){return(0,f.useEffect)(function(){console.log("props: ",s)},[]),console.log("render: ",s),(0,i.jsxs)(M.Z,p()(p()({title:"\u7528\u6237\u8BE6\u60C5"},s),{},{children:[(0,i.jsx)("p",{children:"\u5C0F\u9177"}),(0,i.jsx)("p",{children:"\u5C0F\u6A31"}),(0,i.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};t.default=(0,a.DestructibleContainer)(U)},16458:function(g,t,e){e.r(t),e.d(t,{AsyncButton:function(){return V},DestructibleContainer:function(){return G},EditableTable:function(){return ie},IntlProvider:function(){return ge},LanguageEnum:function(){return F},OverlaySpin:function(){return Oe},utils:function(){return m}});var m={};e.r(m),e.d(m,{getUrlSearchParams:function(){return ye},parseJson:function(){return be}});var p=e(26068),a=e.n(p),M=e(90228),f=e.n(M),i=e(87999),U=e.n(i),x=e(48305),s=e.n(x),T=e(67825),B=e.n(T),L=e(27807),v=e(75271),o=e(52676),z=["onClick"],V=v.memo(function(l){var n=l.onClick,r=B()(l,z),d=(0,v.useState)(void 0),h=s()(d,2),D=h[0],C=h[1],O=function(){var c=U()(f()().mark(function E(b){var _;return f()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!(!n||typeof n!="function")){u.next=2;break}return u.abrupt("return");case 2:if(_=n(b),!(_ instanceof Promise)){u.next=11;break}return u.prev=4,C(!0),u.next=8,_;case 8:return u.prev=8,C(!1),u.finish(8);case 11:case"end":return u.stop()}},E,null,[[4,,8,11]])}));return function(b){return c.apply(this,arguments)}}();return(0,o.jsx)(L.ZP,a()({loading:D,onClick:O},r))}),G=function(n){return function(r){var d=r.visible,h=r.open,D=r.afterVisibleChange,C=r.afterOpenChange,O=r.afterClose,c=d!=null?d:h,E=D!=null?D:C,b=(0,v.useState)(c),_=s()(b,2),A=_[0],u=_[1],Y=(0,v.useState)(c===!1),K=s()(Y,2),y=K[0],R=K[1],W=function(Z){E==null||E(Z),Z||R(!0)},j=function(){O==null||O(),R(!0)};return(0,v.useEffect)(function(){c?(R(!1),setTimeout(function(){return u(c)},0)):u(c)},[c]),y?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(n,a()(a()({},r),{},{open:A,afterOpenChange:W,afterClose:j}))}},q=e(15558),P=e.n(q),re=e(29369),te=e(72149),oe=e(72774),ae=e(63801),Q=e(42748),se=e(77995),le=ae.Z.Link,ie=function(n){var r=n.className,d=n.style,h=n.bordered,D=h===void 0?!1:h,C=n.columns,O=n.formRef,c=n.options,E=c!=null?c:{},b=E.onlyPreview,_=b===void 0?!1:b,A=E.hideAdd,u=A===void 0?!1:A,Y=Q.Z.useForm(),K=s()(Y,1),y=K[0],R=(0,te.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),W=s()(R,2),j=W[0],k=W[1];(0,v.useEffect)(function(){y.setFieldsValue({items:j!=null?j:[]})},[j]),(0,v.useImperativeHandle)(O,function(){return y});var Z=(0,oe.Z)(function(N){var I=N.remove;return[].concat(P()(C!=null?C:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(H,w){return(0,o.jsx)(le,{disabled:!!_,onClick:function(){return I(w.key)},children:"\u5220\u9664"})}}])}),je=function(I){k(I)};return(0,o.jsx)(Q.Z,{className:r,form:y,style:a()({},d),autoComplete:"off",component:!1,disabled:!!_,initialValues:{items:j},onValuesChange:function(I,S){var H=S.items;je(H)},children:(0,o.jsx)(Q.Z.List,{name:"items",children:function(I,S){var H=S.add,w=S.remove;return(0,o.jsx)(se.Z,a()(a()({rowKey:"key",bordered:D,dataSource:I.map(function(J){return a()(a()({},y.getFieldValue(["items",J.key])),{},{key:J.name})}),columns:Z({remove:w})},!u&&{footer:function(){return(0,o.jsx)(L.ZP,{block:!0,icon:(0,o.jsx)(re.Z,{}),type:"dashed",disabled:!!_,onClick:U()(f()().mark(function Ie(){return f()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,y.validateFields();case 2:H();case 3:case"end":return $.stop()}},Ie)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},ue=e(69417),de=e(35862),F=function(l){return l.ZH_CN="zh-CN",l.EN_US="en-US",l}({}),ce=e(82092),ee=e.n(ce),me=e(66262),pe=e(20973),fe=e(83144),ve=e(78843),De={welcome:"hello world"},Ce=De,_e={welcome:"\u4F60\u597D\u4E16\u754C"},he=_e,ne=function(n){var r=ee()(ee()({},F.ZH_CN,{message:he,antd:pe.Z}),F.EN_US,{message:Ce,antd:me.Z});return r[n]},Ee=(0,fe.Sn)(),Pe=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:F.ZH_CN;return(0,ve.d)({locale:n,messages:ne(n).message},Ee)},ge=v.memo(function(l){var n=l.locale,r=l.children,d=Pe(n);return(0,o.jsx)(de.zt,{value:d,children:(0,o.jsx)(ue.ZP,{locale:ne(n).antd,children:r})})}),Me=e(40023),Ue=["spinning","background","tip"],X="overlay-spin",Oe=function(n){var r=n.spinning,d=n.background,h=d===void 0?"#fff":d,D=n.tip,C=B()(n,Ue);return r?(0,o.jsxs)("div",{className:"".concat(X,"-container"),style:{"--background":h},children:[(0,o.jsx)(Me.Z,a()({className:X,spinning:r},C)),D&&(0,o.jsx)("div",{className:"".concat(X,"-tip"),children:D})]}):null},be=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof n!="string")return r;try{return JSON.parse(n)}catch(d){return console.error("parse json error:",d),r}},ye=function(){var n=window.location.href.split("?")[1],r=new URLSearchParams(n);return Object.fromEntries(r.entries())}},16888:function(g,t,e){e.r(t),e.d(t,{texts:function(){return p}});var m=e(3966);const p=[{value:"\u53EF\u7C89\u788E\u7684\u5BB9\u5668\uFF08\u9AD8\u9636\u7EC4\u4EF6\uFF09",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u63A7\u5236\u5305\u88F9\u7684\u7EC4\u4EF6\u7684 props \u4E2D\u7684 visible \u6216\u8005 open \u53D8\u4E3A false \u65F6\u76F4\u63A5\u9500\u6BC1\u6574\u4E2A\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u4F1A\u4FDD\u7559\u4E0B\u4E00\u4E9B\u72B6\u6001\uFF0C",paraId:1,tocIndex:1},{value:"\u533A\u522B\u4E8E ",paraId:1,tocIndex:1},{value:"visible && <Container />",paraId:1,tocIndex:1},{value:" \u7684\u8FD9\u79CD\u5199\u6CD5\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u9AD8\u9636\u7EC4\u4EF6\u5904\u7406\u540E\u53EF\u4EE5\u4FDD\u7559\u539F\u672C\u7684\u52A8\u753B\u6548\u679C\uFF0C\u800C\u5E76\u4E14\u76F4\u63A5\u4E0D\u6E32\u67D3\uFF0C",paraId:1,tocIndex:1},{value:"\u652F\u6301 ant \u7EC4\u4EF6\u4EE5\u53CA\u6240\u6709\u5B9E\u73B0\u4E86 visible \u4EE5\u53CA afterVisibleChange \u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6",paraId:1,tocIndex:1}]},97265:function(g,t){t.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';\r
import type { DrawerProps } from 'antd';\r
import { Drawer } from 'antd';\r
import React, { useEffect } from 'react';\r
\r
const UserDetailsDrawer: React.FC<DrawerProps> = (props) => {\r
  useEffect(() => {\r
    console.log('props: ', props);\r
  }, []);\r
\r
  console.log('render: ', props);\r
\r
  return (\r
    <Drawer title="\u7528\u6237\u8BE6\u60C5" {...props}>\r
      <p>\u5C0F\u9177</p>\r
      <p>\u5C0F\u6A31</p>\r
      <p>\u5C0F\u7F8E</p>\r
    </Drawer>\r
  );\r
};\r
\r
export default DestructibleContainer(UserDetailsDrawer);\r
`},52456:function(g,t){t.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';\r
import type { ModalProps } from 'antd';\r
import { Modal } from 'antd';\r
import React, { useEffect } from 'react';\r
\r
const UserDetailsModal: React.FC<ModalProps> = (props) => {\r
  useEffect(() => {\r
    console.log('props: ', props);\r
  }, []);\r
\r
  console.log('render: ', props);\r
\r
  return (\r
    <Modal title="\u7528\u6237\u8BE6\u60C5" {...props}>\r
      <p>\u5C0F\u9177</p>\r
      <p>\u5C0F\u6A31</p>\r
      <p>\u5C0F\u7F8E</p>\r
    </Modal>\r
  );\r
};\r
\r
export default DestructibleContainer(UserDetailsModal);\r
`},11796:function(g,t){t.Z=`import { Button, Space } from 'antd';\r
import React, { useState } from 'react';\r
import UserDetailsDrawer from './UserDetailsDrawer';\r
import UserDetailsModal from './UserDetailsModal';\r
\r
const App: React.FC = () => {\r
  const [drawerVisible, setDrawerVisible] = useState(false);\r
  const [modalVisible, setModalVisible] = useState(false);\r
\r
  return (\r
    <Space>\r
      <Button\r
        type="primary"\r
        onClick={() => {\r
          setDrawerVisible(true);\r
        }}\r
      >\r
        \u6253\u5F00\u62BD\u5C49\r
      </Button>\r
\r
      <UserDetailsDrawer\r
        open={drawerVisible}\r
        onClose={() => setDrawerVisible(false)}\r
      />\r
\r
      <br />\r
\r
      <Button\r
        type="primary"\r
        onClick={() => {\r
          setModalVisible(true);\r
        }}\r
      >\r
        \u6253\u5F00\u5F39\u7A97\r
      </Button>\r
\r
      <UserDetailsModal\r
        open={modalVisible}\r
        onCancel={() => setModalVisible(false)}\r
      />\r
    </Space>\r
  );\r
};\r
\r
export default App;\r
`}}]);
