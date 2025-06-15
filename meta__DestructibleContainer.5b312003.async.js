"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[241],{55010:function(A,o,e){var _;e.r(o),e.d(o,{demos:function(){return H}});var E=e(90228),t=e.n(E),S=e(87999),b=e.n(S),c=e(75271),V=e(84983),Z=e(33628),u=e(34078),N=e(95654),F=e(43727),H={"destructiblecontainer-demo-demos":{component:c.memo(c.lazy(function(){return e.e(920).then(e.bind(e,6844))})),asset:{type:"BLOCK",id:"destructiblecontainer-demo-demos",refAtomIds:["DestructibleContainer"],dependencies:{"index.tsx":{type:"FILE",value:e(80170).Z},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"},"./UserDetailsDrawer.tsx":{type:"FILE",value:e(34535).Z},"./UserDetailsModal.tsx":{type:"FILE",value:e(98724).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.4"}},entry:"index.tsx"},context:{"./UserDetailsDrawer.tsx":u,"./UserDetailsModal.tsx":N,antd:Z,react:_||(_=e.t(c,2)),"C:/Users/HJ/Desktop/ProComponents/pro-components/src/DestructibleContainer/demos/UserDetailsDrawer.tsx":u,"C:/Users/HJ/Desktop/ProComponents/pro-components/src/DestructibleContainer/demos/UserDetailsModal.tsx":N,"@louhaojie99/pro-components":F},renderOpts:{compile:function(){var f=b()(t()().mark(function Q(){var J,X=arguments;return t()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,e.e(652).then(e.bind(e,43652));case 2:return x.abrupt("return",(J=x.sent).default.apply(J,X));case 3:case"end":return x.stop()}},Q)}));function a(){return f.apply(this,arguments)}return a}()}}}},34078:function(A,o,e){e.r(o);var _=e(26068),E=e.n(_),t=e(43727),S=e(38706),b=e(75271),c=e(52676),V=function(u){return(0,b.useEffect)(function(){console.log("props: ",u)},[]),console.log("render: ",u),(0,c.jsxs)(S.Z,E()(E()({title:"\u7528\u6237\u8BE6\u60C5"},u),{},{children:[(0,c.jsx)("p",{children:"\u5C0F\u9177"}),(0,c.jsx)("p",{children:"\u5C0F\u6A31"}),(0,c.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};o.default=(0,t.DestructibleContainer)(V)},95654:function(A,o,e){e.r(o);var _=e(26068),E=e.n(_),t=e(43727),S=e(96934),b=e(75271),c=e(52676),V=function(u){return(0,b.useEffect)(function(){console.log("props: ",u)},[]),console.log("render: ",u),(0,c.jsxs)(S.Z,E()(E()({title:"\u7528\u6237\u8BE6\u60C5"},u),{},{children:[(0,c.jsx)("p",{children:"\u5C0F\u9177"}),(0,c.jsx)("p",{children:"\u5C0F\u6A31"}),(0,c.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};o.default=(0,t.DestructibleContainer)(V)},43727:function(A,o,e){e.r(o),e.d(o,{AsyncButton:function(){return J},DestructibleContainer:function(){return X},EditableTable:function(){return ce},IntlProvider:function(){return Oe},LanguageEnum:function(){return $},OverlaySpin:function(){return ye},TabsSelect:function(){return Ae},utils:function(){return _}});var _={};e.r(_),e.d(_,{getUrlSearchParams:function(){return Ve},parseJson:function(){return Se}});var E=e(26068),t=e.n(E),S=e(90228),b=e.n(S),c=e(87999),V=e.n(c),Z=e(48305),u=e.n(Z),N=e(67825),F=e.n(N),H=e(27807),f=e(75271),a=e(52676),Q=["onClick"],J=f.memo(function(d){var n=d.onClick,r=F()(d,Q),i=(0,f.useState)(void 0),C=u()(i,2),v=C[0],s=C[1],j=function(){var p=V()(b()().mark(function P(M){var D;return b()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(!n||typeof n!="function")){l.next=2;break}return l.abrupt("return");case 2:if(D=n(M),!(D instanceof Promise)){l.next=11;break}return l.prev=4,s(!0),l.next=8,D;case 8:return l.prev=8,s(!1),l.finish(8);case 11:case"end":return l.stop()}},P,null,[[4,,8,11]])}));return function(M){return p.apply(this,arguments)}}();return(0,a.jsx)(H.ZP,t()({loading:v,onClick:j},r))}),X=function(n){return function(r){var i=r.visible,C=r.open,v=r.afterVisibleChange,s=r.afterOpenChange,j=r.afterClose,p=i!=null?i:C,P=v!=null?v:s,M=(0,f.useState)(p),D=u()(M,2),T=D[0],l=D[1],B=(0,f.useState)(p===!1),R=u()(B,2),O=R[0],U=R[1],L=function(K){P==null||P(K),K||U(!0)},y=function(){j==null||j(),U(!0)};return(0,f.useEffect)(function(){p?(U(!1),setTimeout(function(){return l(p)},0)):l(p)},[p]),O?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(n,t()(t()({},r),{},{open:T,afterOpenChange:L,afterClose:y}))}},ee=e(15558),x=e.n(ee),se=e(68474),ne=e(72149),le=e(72774),ie=e(17857),Y=e(90663),ue=e(98267),de=ie.Z.Link,ce=function(n){var r=n.className,i=n.style,C=n.bordered,v=C===void 0?!1:C,s=n.columns,j=n.formRef,p=n.options,P=p!=null?p:{},M=P.onlyPreview,D=M===void 0?!1:M,T=P.hideAdd,l=T===void 0?!1:T,B=Y.Z.useForm(),R=u()(B,1),O=R[0],U=(0,ne.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),L=u()(U,2),y=L[0],W=L[1];(0,f.useEffect)(function(){O.setFieldsValue({items:y!=null?y:[]})},[y]),(0,f.useImperativeHandle)(j,function(){return O});var K=(0,le.Z)(function(g){var m=g.remove;return[].concat(x()(s!=null?s:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(I,q){return(0,a.jsx)(de,{disabled:!!D,onClick:function(){return m(q.key)},children:"\u5220\u9664"})}}])}),w=function(m){W(m)};return(0,a.jsx)(Y.Z,{className:r,form:O,style:t()({},i),autoComplete:"off",component:!1,disabled:!!D,initialValues:{items:y},onValuesChange:function(m,h){var I=h.items;w(I)},children:(0,a.jsx)(Y.Z.List,{name:"items",children:function(m,h){var I=h.add,q=h.remove;return(0,a.jsx)(ue.Z,t()(t()({rowKey:"key",bordered:v,dataSource:m.map(function(z){return t()(t()({},O.getFieldValue(["items",z.key])),{},{key:z.name})}),columns:K({remove:q})},!l&&{footer:function(){return(0,a.jsx)(H.ZP,{block:!0,icon:(0,a.jsx)(se.Z,{}),type:"dashed",disabled:!!D,onClick:V()(b()().mark(function Re(){return b()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,O.validateFields();case 2:I();case 3:case"end":return G.stop()}},Re)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},me=e(69417),ve=e(35862),$=function(d){return d.ZH_CN="zh-CN",d.EN_US="en-US",d}({}),pe=e(82092),re=e.n(pe),fe=e(66262),Ce=e(21563),De=e(83144),he=e(78843),_e={welcome:"hello world"},Ee=_e,Pe={welcome:"\u4F60\u597D\u4E16\u754C"},ge=Pe,te=function(n){var r=re()(re()({},$.ZH_CN,{message:ge,antd:Ce.Z}),$.EN_US,{message:Ee,antd:fe.Z});return r[n]},be=(0,De.Sn)(),Me=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$.ZH_CN;return(0,he.d)({locale:n,messages:te(n).message},be)},Oe=f.memo(function(d){var n=d.locale,r=d.children,i=Me(n);return(0,a.jsx)(ve.zt,{value:i,children:(0,a.jsx)(me.ZP,{locale:te(n).antd,children:r})})}),ae=e(40023),Ue=["spinning","background","tip"],k="overlay-spin",ye=function(n){var r=n.spinning,i=n.background,C=i===void 0?"#fff":i,v=n.tip,s=F()(n,Ue);return r?(0,a.jsxs)("div",{className:"".concat(k,"-container"),style:{"--background":C},children:[(0,a.jsx)(ae.Z,t()({className:k,spinning:r},s)),v&&(0,a.jsx)("div",{className:"".concat(k,"-tip"),children:v})]}):null},je=e(44675),Ie=e(95627),oe=e(44763),xe=e(32699),Te=["loading","options","defaultValue","tabsProps"],Ae=function(n){var r,i,C=n.loading,v=C===void 0?!1:C,s=n.options,j=n.defaultValue,p=n.tabsProps,P=F()(n,Te),M=(r=s==null||(i=s[0])===null||i===void 0?void 0:i.tabKey)!==null&&r!==void 0?r:"",D=(0,ne.Z)(n,{defaultValue:j||{activeTab:M,selectValue:void 0},defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),T=u()(D,2),l=T[0],B=T[1],R=l!=null?l:{},O=R.activeTab,U=O===void 0?M:O,L=R.selectValue,y=(0,f.useMemo)(function(){return(0,xe.keyBy)(s,"tabKey")},[s]),W=(0,f.useMemo)(function(){var g,m;return U?(g=(m=y[U])===null||m===void 0?void 0:m.tabOptions)!==null&&g!==void 0?g:[]:[]},[y,U]),K=function(m){B(function(h){return t()(t()({},h),{},{activeTab:m})})},w=function(m,h){B(function(I){return t()(t()({},I),{},{selectValue:h})})};return(0,a.jsx)(je.default,t()(t()({},P),{},{allowClear:!0,loading:v,labelInValue:!0,value:L,options:W,dropdownRender:function(m){var h=(0,a.jsx)(ae.Z,{spinning:v,children:m});return s?(0,a.jsx)(Ie.Z,t()({style:{padding:"0 8px"},size:"small",items:s==null?void 0:s.map(function(I){return{key:I.tabKey,label:I.tabLabel,children:h,disabled:v}}),activeKey:U,onChange:K},p)):h},notFoundContent:(0,a.jsx)(oe.Z,{image:oe.Z.PRESENTED_IMAGE_SIMPLE}),placeholder:"\u8BF7\u9009\u62E9",onChange:w}))},Se=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof n!="string")return r;try{return JSON.parse(n)}catch(i){return console.error("parse json error:",i),r}},Ve=function(){var n=window.location.href.split("?")[1],r=new URLSearchParams(n);return Object.fromEntries(r.entries())}},97414:function(A,o,e){e.r(o),e.d(o,{texts:function(){return E}});var _=e(84983);const E=[{value:"\u53EF\u7C89\u788E\u7684\u5BB9\u5668\uFF08\u9AD8\u9636\u7EC4\u4EF6\uFF09",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u63A7\u5236\u5305\u88F9\u7684\u7EC4\u4EF6\u7684 props \u4E2D\u7684 visible \u6216\u8005 open \u53D8\u4E3A false \u65F6\u76F4\u63A5\u9500\u6BC1\u6574\u4E2A\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u4F1A\u4FDD\u7559\u4E0B\u4E00\u4E9B\u72B6\u6001\uFF0C",paraId:1,tocIndex:1},{value:"\u533A\u522B\u4E8E ",paraId:1,tocIndex:1},{value:"visible && <Container />",paraId:1,tocIndex:1},{value:" \u7684\u8FD9\u79CD\u5199\u6CD5\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u9AD8\u9636\u7EC4\u4EF6\u5904\u7406\u540E\u53EF\u4EE5\u4FDD\u7559\u539F\u672C\u7684\u52A8\u753B\u6548\u679C\uFF0C\u800C\u5E76\u4E14\u76F4\u63A5\u4E0D\u6E32\u67D3\uFF0C",paraId:1,tocIndex:1},{value:"\u652F\u6301 ant \u7EC4\u4EF6\u4EE5\u53CA\u6240\u6709\u5B9E\u73B0\u4E86 visible \u4EE5\u53CA afterVisibleChange \u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6",paraId:1,tocIndex:1}]},34535:function(A,o){o.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';\r
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
`},98724:function(A,o){o.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';\r
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
`},80170:function(A,o){o.Z=`import { Button, Space } from 'antd';\r
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
