"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[241],{21435:function(M,t,e){var C;e.r(t),e.d(t,{demos:function(){return v}});var r=e(90228),P=e.n(r),m=e(87999),g=e.n(m),s=e(75271),j=e(3966),_=e(57228),u=e(49423),x=e(19187),R=e(85722),v={"destructiblecontainer-demo-demos":{component:s.memo(s.lazy(function(){return e.e(920).then(e.bind(e,68714))})),asset:{type:"BLOCK",id:"destructiblecontainer-demo-demos",refAtomIds:["DestructibleContainer"],dependencies:{"index.tsx":{type:"FILE",value:e(11796).Z},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"},"./UserDetailsModal.tsx":{type:"FILE",value:e(52456).Z},"./UserDetailsDrawer.tsx":{type:"FILE",value:e(97265).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.3"}},entry:"index.tsx"},context:{"./UserDetailsModal.tsx":u,"./UserDetailsDrawer.tsx":x,antd:_,react:C||(C=e.t(s,2)),"C:/Users/HJ/Desktop/pro-components/src/DestructibleContainer/demos/UserDetailsModal.tsx":u,"C:/Users/HJ/Desktop/pro-components/src/DestructibleContainer/demos/UserDetailsDrawer.tsx":x,"@louhaojie99/pro-components":R},renderOpts:{compile:function(){var o=g()(P()().mark(function z(){var L,G=arguments;return P()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(837).then(e.bind(e,57837));case 2:return p.abrupt("return",(L=p.sent).default.apply(L,G));case 3:case"end":return p.stop()}},z)}));function $(){return o.apply(this,arguments)}return $}()}}}},19187:function(M,t,e){e.r(t);var C=e(26068),r=e.n(C),P=e(85722),m=e(38706),g=e(75271),s=e(52676),j=function(u){return(0,g.useEffect)(function(){console.log("props: ",u)},[]),console.log("render: ",u),(0,s.jsxs)(m.Z,r()(r()({title:"\u7528\u6237\u8BE6\u60C5"},u),{},{children:[(0,s.jsx)("p",{children:"\u5C0F\u9177"}),(0,s.jsx)("p",{children:"\u5C0F\u6A31"}),(0,s.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};t.default=(0,P.DestructibleContainer)(j)},49423:function(M,t,e){e.r(t);var C=e(26068),r=e.n(C),P=e(85722),m=e(96934),g=e(75271),s=e(52676),j=function(u){return(0,g.useEffect)(function(){console.log("props: ",u)},[]),console.log("render: ",u),(0,s.jsxs)(m.Z,r()(r()({title:"\u7528\u6237\u8BE6\u60C5"},u),{},{children:[(0,s.jsx)("p",{children:"\u5C0F\u9177"}),(0,s.jsx)("p",{children:"\u5C0F\u6A31"}),(0,s.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};t.default=(0,P.DestructibleContainer)(j)},85722:function(M,t,e){e.r(t),e.d(t,{AsyncButton:function(){return L},DestructibleContainer:function(){return oe},EditableTable:function(){return je},IntlProvider:function(){return Ee},LanguageEnum:function(){return S},OverlaySpin:function(){return te}});var C=e(26068),r=e.n(C),P=e(90228),m=e.n(P),g=e(87999),s=e.n(g),j=e(48305),_=e.n(j),u=e(67825),x=e.n(u),R=e(27807),v=e(75271),o=e(52676),$=["onClick"],z=v.memo(function(l){var n=l.onClick,a=x()(l,$),d=(0,v.useState)(void 0),E=_()(d,2),f=E[0],D=E[1],U=function(){var c=s()(m()().mark(function h(b){return m()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n){i.next=2;break}return i.abrupt("return");case 2:return i.prev=2,D(!0),i.next=6,n==null?void 0:n(b);case 6:return i.prev=6,D(!1),i.finish(6);case 9:case"end":return i.stop()}},h,null,[[2,,6,9]])}));return function(b){return c.apply(this,arguments)}}();return(0,o.jsx)(R.ZP,r()({loading:f,onClick:U},a))}),L=z,G=e(40023),w=["spinning","background","tip"],p="overlay-spin",ne=function(n){var a=n.spinning,d=n.background,E=d===void 0?"#fff":d,f=n.tip,D=x()(n,w);return a?(0,o.jsxs)("div",{className:"".concat(p,"-container"),style:{"--background":E},children:[(0,o.jsx)(G.Z,r()({className:p,spinning:a},D)),f&&(0,o.jsx)("div",{className:"".concat(p,"-tip"),children:f})]}):null},te=ne,re=function(n){return function(a){var d=a.visible,E=a.open,f=a.afterVisibleChange,D=a.afterOpenChange,U=a.afterClose,c=d!=null?d:E,h=f!=null?f:D,b=(0,v.useState)(c),O=_()(b,2),i=O[0],V=O[1],X=(0,v.useState)(c===!1),F=_()(X,2),y=F[0],T=F[1],K=function(W){h==null||h(W),W||T(!0)},I=function(){U==null||U(),T(!0)};return(0,v.useEffect)(function(){c?(T(!1),setTimeout(function(){return V(c)},0)):V(c)},[c]),y?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(n,r()(r()({},a),{},{open:i,afterOpenChange:K,afterClose:I}))}},oe=re,ae=e(69417),se=e(35862),S=function(l){return l.ZH_CN="zh-CN",l.EN_US="en-US",l}({}),le=e(82092),q=e.n(le),ie=e(66262),ue=e(20973),de=e(83144),ce=e(78843),me={welcome:"hello world"},ve=me,pe={welcome:"\u4F60\u597D\u4E16\u754C"},fe=pe,ee=function(n){var a=q()(q()({},S.ZH_CN,{message:fe,antd:ue.Z}),S.EN_US,{message:ve,antd:ie.Z});return a[n]},De=(0,de.Sn)(),Ce=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:S.ZH_CN;return(0,ce.d)({locale:n,messages:ee(n).message},De)},_e=v.memo(function(l){var n=l.locale,a=l.children,d=Ce(n);return(0,o.jsx)(se.zt,{value:d,children:(0,o.jsx)(ae.ZP,{locale:ee(n).antd,children:a})})}),Ee=_e,he=e(15558),Pe=e.n(he),Me=e(29369),ge=e(72149),Ue=e(72774),be=e(63801),Q=e(42748),Oe=e(77995),ye=be.Z.Link,Ie=function(n){var a=n.className,d=n.style,E=n.bordered,f=E===void 0?!1:E,D=n.columns,U=n.formRef,c=n.options,h=c!=null?c:{},b=h.onlyPreview,O=b===void 0?!1:b,i=h.hideAdd,V=i===void 0?!1:i,X=Q.Z.useForm(),F=_()(X,1),y=F[0],T=(0,ge.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),K=_()(T,2),I=K[0],Y=K[1];(0,v.useEffect)(function(){y.setFieldsValue({items:I!=null?I:[]})},[I]),(0,v.useImperativeHandle)(U,function(){return y});var W=(0,Ue.Z)(function(Z){var A=Z.remove;return[].concat(Pe()(D!=null?D:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(N,k){return(0,o.jsx)(ye,{disabled:!!O,onClick:function(){return A(k.key)},children:"\u5220\u9664"})}}])}),Ae=function(A){Y(A)};return(0,o.jsx)(Q.Z,{className:a,form:y,style:r()({},d),autoComplete:"off",component:!1,disabled:!!O,initialValues:{items:I},onValuesChange:function(A,B){var N=B.items;Ae(N)},children:(0,o.jsx)(Q.Z.List,{name:"items",children:function(A,B){var N=B.add,k=B.remove;return(0,o.jsx)(Oe.Z,r()(r()({rowKey:"key",bordered:f,dataSource:A.map(function(H){return r()(r()({},y.getFieldValue(["items",H.key])),{},{key:H.name})}),columns:W({remove:k})},!V&&{footer:function(){return(0,o.jsx)(R.ZP,{block:!0,icon:(0,o.jsx)(Me.Z,{}),type:"dashed",disabled:!!O,onClick:s()(m()().mark(function xe(){return m()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,y.validateFields();case 2:N();case 3:case"end":return J.stop()}},xe)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},je=Ie},16888:function(M,t,e){e.r(t),e.d(t,{texts:function(){return r}});var C=e(3966);const r=[{value:"\u53EF\u7C89\u788E\u7684\u5BB9\u5668\uFF08\u9AD8\u9636\u7EC4\u4EF6\uFF09",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u63A7\u5236\u5305\u88F9\u7684\u7EC4\u4EF6\u7684 props \u4E2D\u7684 visible \u6216\u8005 open \u53D8\u4E3A false \u65F6\u76F4\u63A5\u9500\u6BC1\u6574\u4E2A\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u4F1A\u4FDD\u7559\u4E0B\u4E00\u4E9B\u72B6\u6001\uFF0C",paraId:1,tocIndex:1},{value:"\u533A\u522B\u4E8E ",paraId:1,tocIndex:1},{value:"visible && <Container />",paraId:1,tocIndex:1},{value:" \u7684\u8FD9\u79CD\u5199\u6CD5\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u9AD8\u9636\u7EC4\u4EF6\u5904\u7406\u540E\u53EF\u4EE5\u4FDD\u7559\u539F\u672C\u7684\u52A8\u753B\u6548\u679C\uFF0C\u800C\u5E76\u4E14\u76F4\u63A5\u4E0D\u6E32\u67D3\uFF0C",paraId:1,tocIndex:1},{value:"\u652F\u6301 ant \u7EC4\u4EF6\u4EE5\u53CA\u6240\u6709\u5B9E\u73B0\u4E86 visible \u4EE5\u53CA afterVisibleChange \u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6",paraId:1,tocIndex:1}]},97265:function(M,t){t.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';
import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';
import React, { useEffect } from 'react';

const UserDetailsDrawer: React.FC<DrawerProps> = (props) => {
  useEffect(() => {
    console.log('props: ', props);
  }, []);

  console.log('render: ', props);

  return (
    <Drawer title="\u7528\u6237\u8BE6\u60C5" {...props}>
      <p>\u5C0F\u9177</p>
      <p>\u5C0F\u6A31</p>
      <p>\u5C0F\u7F8E</p>
    </Drawer>
  );
};

export default DestructibleContainer(UserDetailsDrawer);
`},52456:function(M,t){t.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';
import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import React, { useEffect } from 'react';

const UserDetailsModal: React.FC<ModalProps> = (props) => {
  useEffect(() => {
    console.log('props: ', props);
  }, []);

  console.log('render: ', props);

  return (
    <Modal title="\u7528\u6237\u8BE6\u60C5" {...props}>
      <p>\u5C0F\u9177</p>
      <p>\u5C0F\u6A31</p>
      <p>\u5C0F\u7F8E</p>
    </Modal>
  );
};

export default DestructibleContainer(UserDetailsModal);
`},11796:function(M,t){t.Z=`import { Button, Space } from 'antd';
import React, { useState } from 'react';
import UserDetailsDrawer from './UserDetailsDrawer';
import UserDetailsModal from './UserDetailsModal';

const App: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Space>
      <Button
        type="primary"
        onClick={() => {
          setDrawerVisible(true);
        }}
      >
        \u6253\u5F00\u62BD\u5C49
      </Button>

      <UserDetailsDrawer
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />

      <br />

      <Button
        type="primary"
        onClick={() => {
          setModalVisible(true);
        }}
      >
        \u6253\u5F00\u5F39\u7A97
      </Button>

      <UserDetailsModal
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
      />
    </Space>
  );
};

export default App;
`}}]);
