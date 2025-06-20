"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[241],{55010:function(A,o,e){var E;e.r(o),e.d(o,{demos:function(){return J}});var _=e(90228),r=e.n(_),S=e(87999),P=e.n(S),c=e(75271),V=e(84983),W=e(33628),i=e(95654),H=e(34078),N=e(43727),J={"destructiblecontainer-demo-demos":{component:c.memo(c.lazy(function(){return e.e(920).then(e.bind(e,6844))})),asset:{type:"BLOCK",id:"destructiblecontainer-demo-demos",refAtomIds:["DestructibleContainer"],dependencies:{"index.tsx":{type:"FILE",value:e(80170).Z},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"},"./UserDetailsModal.tsx":{type:"FILE",value:e(98724).Z},"./UserDetailsDrawer.tsx":{type:"FILE",value:e(34535).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.4"}},entry:"index.tsx"},context:{"./UserDetailsModal.tsx":i,"./UserDetailsDrawer.tsx":H,antd:W,react:E||(E=e.t(c,2)),"C:/Users/HJ/Desktop/pro-components/src/DestructibleContainer/demos/UserDetailsModal.tsx":i,"C:/Users/HJ/Desktop/pro-components/src/DestructibleContainer/demos/UserDetailsDrawer.tsx":H,"@louhaojie99/pro-components":N},renderOpts:{compile:function(){var D=P()(r()().mark(function X(){var $,Y=arguments;return r()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,e.e(652).then(e.bind(e,43652));case 2:return I.abrupt("return",($=I.sent).default.apply($,Y));case 3:case"end":return I.stop()}},X)}));function a(){return D.apply(this,arguments)}return a}()}}}},34078:function(A,o,e){e.r(o);var E=e(26068),_=e.n(E),r=e(43727),S=e(38706),P=e(75271),c=e(52676),V=function(i){return(0,P.useEffect)(function(){return console.log("mount: ",i),function(){console.log("unmount: ",i)}},[]),(0,c.jsxs)(S.Z,_()(_()({title:"\u7528\u6237\u8BE6\u60C5"},i),{},{children:[(0,c.jsx)("p",{children:"\u5C0F\u9177"}),(0,c.jsx)("p",{children:"\u5C0F\u6A31"}),(0,c.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};o.default=(0,r.DestructibleContainer)(V)},95654:function(A,o,e){e.r(o);var E=e(26068),_=e.n(E),r=e(43727),S=e(96934),P=e(75271),c=e(52676),V=function(i){return(0,P.useEffect)(function(){return console.log("mount: ",i),function(){console.log("unmount: ",i)}},[]),(0,c.jsxs)(S.Z,_()(_()({title:"\u7528\u6237\u8BE6\u60C5"},i),{},{children:[(0,c.jsx)("p",{children:"\u5C0F\u9177"}),(0,c.jsx)("p",{children:"\u5C0F\u6A31"}),(0,c.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};o.default=(0,r.DestructibleContainer)(V)},43727:function(A,o,e){e.r(o),e.d(o,{AsyncButton:function(){return $},DestructibleContainer:function(){return Y},EditableTable:function(){return me},IntlProvider:function(){return Ue},LanguageEnum:function(){return z},OverlaySpin:function(){return je},TabsSelect:function(){return Ae},utils:function(){return E}});var E={};e.r(E),e.d(E,{getUrlSearchParams:function(){return Ve},parseJson:function(){return Se}});var _=e(26068),r=e.n(_),S=e(90228),P=e.n(S),c=e(87999),V=e.n(c),W=e(48305),i=e.n(W),H=e(67825),N=e.n(H),J=e(27807),D=e(75271),a=e(52676),X=["onClick"],$=D.memo(function(d){var n=d.onClick,t=N()(d,X),l=(0,D.useState)(void 0),h=i()(l,2),m=h[0],s=h[1],O=function(){var v=V()(P()().mark(function g(U){var p;return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!(!n||typeof n!="function")){u.next=2;break}return u.abrupt("return");case 2:if(p=n(U),!(p instanceof Promise)){u.next=11;break}return u.prev=4,s(!0),u.next=8,p;case 8:return u.prev=8,s(!1),u.finish(8);case 11:case"end":return u.stop()}},g,null,[[4,,8,11]])}));return function(U){return v.apply(this,arguments)}}();return(0,a.jsx)(J.ZP,r()({loading:m,onClick:O},t))}),Y=function(n){return function(t){var l=t.visible,h=t.open,m=t.afterVisibleChange,s=t.afterOpenChange,O=t.afterClose,v=l!=null?l:h,g=m!=null?m:s,U=(0,D.useState)(v),p=i()(U,2),R=p[0],u=p[1],B=(0,D.useState)(v===!1),L=i()(B,2),M=L[0],x=L[1],y=function(Z){g==null||g(Z),Z||x(!0)},j=function(){O==null||O(),x(!0)};return(0,D.useEffect)(function(){v?(x(!1),setTimeout(function(){return u(v)},0)):u(v)},[v]),M?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(n,r()(r()({},t),{},{open:R,afterOpenChange:y,afterClose:j}))}},ee=e(15558),I=e.n(ee),le=e(68474),ne=e(72149),ue=e(72774),ie=e(17857),k=e(90663),de=e(98267),ce=ie.Z.Link,me=function(n){var t=n.className,l=n.style,h=n.bordered,m=h===void 0?!1:h,s=n.columns,O=n.formRef,v=n.options,g=v!=null?v:{},U=g.onlyPreview,p=U===void 0?!1:U,R=g.hideAdd,u=R===void 0?!1:R,B=k.Z.useForm(),L=i()(B,1),M=L[0],x=(0,ne.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),y=i()(x,2),j=y[0],K=y[1];(0,D.useEffect)(function(){M.setFieldsValue({items:j!=null?j:[]})},[j]),(0,D.useImperativeHandle)(O,function(){return M});var Z=(0,ue.Z)(function(F){var C=F.remove;return[].concat(I()(s!=null?s:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(b,T){return(0,a.jsx)(ce,{disabled:!!p,onClick:function(){return C(T.key)},children:"\u5220\u9664"})}}])}),q=function(C){K(C)};return(0,a.jsx)(k.Z,{className:t,form:M,style:r()({},l),autoComplete:"off",component:!1,disabled:!!p,initialValues:{items:j},onValuesChange:function(C,f){var b=f.items;q(b)},children:(0,a.jsx)(k.Z.List,{name:"items",children:function(C,f){var b=f.add,T=f.remove;return(0,a.jsx)(de.Z,r()(r()({rowKey:"key",bordered:m,dataSource:C.map(function(G){return r()(r()({},M.getFieldValue(["items",G.key])),{},{key:G.name})}),columns:Z({remove:T})},!u&&{footer:function(){return(0,a.jsx)(J.ZP,{block:!0,icon:(0,a.jsx)(le.Z,{}),type:"dashed",disabled:!!p,onClick:V()(P()().mark(function Re(){return P()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,M.validateFields();case 2:b();case 3:case"end":return Q.stop()}},Re)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},ve=e(69417),fe=e(35862),z=function(d){return d.ZH_CN="zh-CN",d.EN_US="en-US",d}({}),pe=e(82092),te=e.n(pe),Ce=e(66262),De=e(21563),he=e(83144),Ee=e(78843),_e={welcome:"hello world"},ge=_e,be={welcome:"\u4F60\u597D\u4E16\u754C"},Pe=be,re=function(n){var t=te()(te()({},z.ZH_CN,{message:Pe,antd:De.Z}),z.EN_US,{message:ge,antd:Ce.Z});return t[n]},Me=(0,he.Sn)(),Oe=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:z.ZH_CN;return(0,Ee.d)({locale:n,messages:re(n).message},Me)},Ue=D.memo(function(d){var n=d.locale,t=d.children,l=Oe(n);return(0,a.jsx)(fe.zt,{value:l,children:(0,a.jsx)(ve.ZP,{locale:re(n).antd,children:t})})}),ae=e(40023),ye=["spinning","background","tip"],w="overlay-spin",je=function(n){var t=n.spinning,l=n.background,h=l===void 0?"#fff":l,m=n.tip,s=N()(n,ye);return t?(0,a.jsxs)("div",{className:"".concat(w,"-container"),style:{"--background":h},children:[(0,a.jsx)(ae.Z,r()({className:w,spinning:t},s)),m&&(0,a.jsx)("div",{className:"".concat(w,"-tip"),children:m})]}):null},Ie=e(44675),xe=e(95627),oe=e(44763),se=e(32699),Te=["loading","options","defaultValue","tabsProps"],Ae=function(n){var t,l,h=n.loading,m=h===void 0?!1:h,s=n.options,O=n.defaultValue,v=n.tabsProps,g=N()(n,Te),U=(0,se.omit)(g,["value","onChange"]),p=(t=s==null||(l=s[0])===null||l===void 0?void 0:l.tabKey)!==null&&t!==void 0?t:"",R=(0,ne.Z)(n,{defaultValue:O||{activeTab:p,selectValue:void 0},defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),u=i()(R,2),B=u[0],L=u[1],M=B!=null?B:{},x=M.activeTab,y=x===void 0?p:x,j=M.selectValue,K=(0,D.useMemo)(function(){return(0,se.keyBy)(s,"tabKey")},[s]),Z=(0,D.useMemo)(function(){var C,f;return y?(C=(f=K[y])===null||f===void 0?void 0:f.tabOptions)!==null&&C!==void 0?C:[]:[]},[K,y]),q=function(f){L(function(b){return r()(r()({},b),{},{activeTab:f})})},F=function(f,b){L(function(T){return r()(r()({},T),{},{selectValue:b})})};return(0,a.jsx)(Ie.default,r()({allowClear:!0,loading:m,labelInValue:!0,value:j,options:Z,dropdownRender:function(f){var b=(0,a.jsx)(ae.Z,{spinning:m,children:f});return s?(0,a.jsx)(xe.Z,r()({style:{padding:"0 8px"},size:"small",items:s==null?void 0:s.map(function(T){return{key:T.tabKey,label:T.tabLabel,children:b,disabled:m}}),activeKey:y,onChange:q},v)):b},notFoundContent:(0,a.jsx)(oe.Z,{image:oe.Z.PRESENTED_IMAGE_SIMPLE}),placeholder:"\u8BF7\u9009\u62E9",onChange:F},U))},Se=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof n!="string")return t;try{return JSON.parse(n)}catch(l){return console.error("parse json error:",l),t}},Ve=function(){var n=window.location.href.split("?")[1],t=new URLSearchParams(n);return Object.fromEntries(t.entries())}},97414:function(A,o,e){e.r(o),e.d(o,{texts:function(){return _}});var E=e(84983);const _=[{value:"\u53EF\u7C89\u788E\u7684\u5BB9\u5668\uFF08\u9AD8\u9636\u7EC4\u4EF6\uFF09",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u63A7\u5236\u5305\u88F9\u7684\u7EC4\u4EF6\u7684 props \u4E2D\u7684 visible \u6216\u8005 open \u53D8\u4E3A false \u65F6\u76F4\u63A5\u9500\u6BC1\u6574\u4E2A\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u4F1A\u4FDD\u7559\u4E0B\u4E00\u4E9B\u72B6\u6001\uFF0C",paraId:1,tocIndex:1},{value:"\u533A\u522B\u4E8E ",paraId:1,tocIndex:1},{value:"visible && <Container />",paraId:1,tocIndex:1},{value:" \u7684\u8FD9\u79CD\u5199\u6CD5\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u9AD8\u9636\u7EC4\u4EF6\u5904\u7406\u540E\u53EF\u4EE5\u4FDD\u7559\u539F\u672C\u7684\u52A8\u753B\u6548\u679C\uFF0C\u800C\u5E76\u4E14\u76F4\u63A5\u4E0D\u6E32\u67D3\uFF0C",paraId:1,tocIndex:1},{value:"\u652F\u6301 ant \u7EC4\u4EF6\u4EE5\u53CA\u6240\u6709\u5B9E\u73B0\u4E86 visible \u4EE5\u53CA afterVisibleChange \u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6",paraId:1,tocIndex:1}]},34535:function(A,o){o.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';
import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';
import React, { useEffect } from 'react';

const UserDetailsDrawer: React.FC<DrawerProps> = (props) => {
  useEffect(() => {
    console.log('mount: ', props);

    return () => {
      console.log('unmount: ', props);
    };
  }, []);

  return (
    <Drawer title="\u7528\u6237\u8BE6\u60C5" {...props}>
      <p>\u5C0F\u9177</p>
      <p>\u5C0F\u6A31</p>
      <p>\u5C0F\u7F8E</p>
    </Drawer>
  );
};

export default DestructibleContainer(UserDetailsDrawer);
`},98724:function(A,o){o.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';
import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import React, { useEffect } from 'react';

const UserDetailsModal: React.FC<ModalProps> = (props) => {
  useEffect(() => {
    console.log('mount: ', props);

    return () => {
      console.log('unmount: ', props);
    };
  }, []);

  return (
    <Modal title="\u7528\u6237\u8BE6\u60C5" {...props}>
      <p>\u5C0F\u9177</p>
      <p>\u5C0F\u6A31</p>
      <p>\u5C0F\u7F8E</p>
    </Modal>
  );
};

export default DestructibleContainer(UserDetailsModal);
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
