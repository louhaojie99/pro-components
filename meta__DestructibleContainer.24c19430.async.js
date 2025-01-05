"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[241],{71251:function(g,t,e){var C;e.r(t),e.d(t,{demos:function(){return h}});var r=e(90228),P=e.n(r),v=e(87999),O=e.n(v),s=e(75271),j=e(13456),E=e(95325),u=e(18806),I=e(68227),T=e(91265),h={"destructiblecontainer-demo-demos":{component:s.memo(s.lazy(function(){return e.e(920).then(e.bind(e,55752))})),asset:{type:"BLOCK",id:"destructiblecontainer-demo-demos",refAtomIds:["DestructibleContainer"],dependencies:{"index.tsx":{type:"FILE",value:e(93069).Z},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"},"./UserDetailsModal.tsx":{type:"FILE",value:e(9482).Z},"./UserDetailsDrawer.tsx":{type:"FILE",value:e(98005).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"./UserDetailsModal.tsx":u,"./UserDetailsDrawer.tsx":I,antd:E,react:C||(C=e.t(s,2)),"C:/Users/HJ/Desktop/pro-components/src/DestructibleContainer/demos/UserDetailsModal.tsx":u,"C:/Users/HJ/Desktop/pro-components/src/DestructibleContainer/demos/UserDetailsDrawer.tsx":I,"@louhaojie99/pro-components":T},renderOpts:{compile:function(){var o=O()(P()().mark(function F(){var L,N=arguments;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(363).then(e.bind(e,71363));case 2:return f.abrupt("return",(L=f.sent).default.apply(L,N));case 3:case"end":return f.stop()}},F)}));function Z(){return o.apply(this,arguments)}return Z}()}}}},68227:function(g,t,e){e.r(t);var C=e(26068),r=e.n(C),P=e(91265),v=e(38706),O=e(75271),s=e(52676),j=function(u){return(0,O.useEffect)(function(){console.log("props: ",u)},[]),console.log("render: ",u),(0,s.jsxs)(v.Z,r()(r()({title:"\u7528\u6237\u8BE6\u60C5"},u),{},{children:[(0,s.jsx)("p",{children:"\u5C0F\u9177"}),(0,s.jsx)("p",{children:"\u5C0F\u6A31"}),(0,s.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};t.default=(0,P.DestructibleContainer)(j)},18806:function(g,t,e){e.r(t);var C=e(26068),r=e.n(C),P=e(91265),v=e(96934),O=e(75271),s=e(52676),j=function(u){return(0,O.useEffect)(function(){console.log("props: ",u)},[]),console.log("render: ",u),(0,s.jsxs)(v.Z,r()(r()({title:"\u7528\u6237\u8BE6\u60C5"},u),{},{children:[(0,s.jsx)("p",{children:"\u5C0F\u9177"}),(0,s.jsx)("p",{children:"\u5C0F\u6A31"}),(0,s.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};t.default=(0,P.DestructibleContainer)(j)},91265:function(g,t,e){e.r(t),e.d(t,{AsyncButton:function(){return L},DestructibleContainer:function(){return ne},EditableTable:function(){return Oe},IntlProvider:function(){return De},LanguageEnum:function(){return R},OverlaySpin:function(){return q}});var C=e(26068),r=e.n(C),P=e(90228),v=e.n(P),O=e(87999),s=e.n(O),j=e(48305),E=e.n(j),u=e(67825),I=e.n(u),T=e(27807),h=e(75271),o=e(52676),Z=["onClick"],F=h.memo(function(l){var n=l.onClick,a=I()(l,Z),d=(0,h.useState)(void 0),D=E()(d,2),c=D[0],M=D[1],U=function(){var m=s()(v()().mark(function _(b){return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n){i.next=2;break}return i.abrupt("return");case 2:return i.prev=2,M(!0),i.next=6,n==null?void 0:n(b);case 6:return i.prev=6,M(!1),i.finish(6);case 9:case"end":return i.stop()}},_,null,[[2,,6,9]])}));return function(b){return m.apply(this,arguments)}}();return(0,o.jsx)(T.ZP,r()({loading:c,onClick:U},a))}),L=F,N=e(40023),G=["spinning","background","tip"],f="overlay-spin",w=function(n){var a=n.spinning,d=n.background,D=d===void 0?"#fff":d,c=n.tip,M=I()(n,G);return a?(0,o.jsxs)("div",{className:"".concat(f,"-container"),style:{"--background":D},children:[(0,o.jsx)(N.Z,r()({className:f,spinning:a},M)),c&&(0,o.jsx)("div",{className:"".concat(f,"-tip"),children:c})]}):null},q=w,ee=function(n){return function(a){var d=a.visible,D=a.open,c=a.afterVisibleChange,M=a.afterOpenChange,U=a.afterClose,m=d!=null?d:D,_=c!=null?c:M,b=(0,h.useState)(m),A=E()(b,2),i=A[0],S=A[1],x=(0,h.useState)(m===!1),V=E()(x,2),K=V[0],p=V[1],J=function(y){_==null||_(y),y||p(!0)},$=function(){U==null||U(),p(!0)};return(0,h.useEffect)(function(){m?(p(!1),setTimeout(function(){return S(m)},0)):S(m)},[m]),K?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(n,r()(r()({},a),{},{open:i,afterOpenChange:J,afterClose:$}))}},ne=ee,te=e(69417),re=e(67572),R=function(l){return l.ZH_CN="zh-CN",l.EN_US="en-US",l}({}),oe=e(82092),Q=e.n(oe),ae=e(66262),se=e(20973),le=e(62230),ie=e(38001),ue={welcome:"hello world"},de=ue,ce={welcome:"\u4F60\u597D\u4E16\u754C"},me=ce,X=function(n){var a=Q()(Q()({},R.ZH_CN,{message:me,antd:se.Z}),R.EN_US,{message:de,antd:ae.Z});return a[n]},pe=(0,le.Sn)(),ve=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:R.ZH_CN;return(0,ie.d)({locale:n,messages:X(n).message},pe)},fe=h.memo(function(l){var n=l.locale,a=l.children,d=ve(n);return(0,o.jsx)(re.zt,{value:d,children:(0,o.jsx)(te.ZP,{locale:X(n).antd,children:a})})}),De=fe,_e=e(15558),Ce=e.n(_e),Ee=e(29369),he=e(56630),Pe=e(63801),H=e(42748),Me=e(77995),Ue=Pe.Z.Link,ge=function(n){var a=n.className,d=n.style,D=n.columns,c=n.options,M=n.tableProps,U=c!=null?c:{},m=U.onlyPreview,_=m===void 0?!1:m,b=U.hideAdd,A=b===void 0?!1:b,i=H.Z.useForm(),S=E()(i,1),x=S[0],V=(0,he.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),K=E()(V,2),p=K[0],J=K[1];return(0,h.useEffect)(function(){x.setFieldsValue({items:p!=null?p:[]})},[p]),(0,o.jsx)(H.Z,{className:a,style:r()({},d),autoComplete:"off",component:!1,form:x,disabled:!!_,initialValues:{items:p!=null?p:[]},onValuesChange:function(W,y){var z=y.items;J(z)},children:(0,o.jsx)(H.Z.List,{name:"items",children:function(W,y){var z=y.add,be=y.remove;return(0,o.jsx)(Me.Z,r()(r()({pagination:!1,scroll:{x:"max-content"}},M),{},{rowKey:"key",dataSource:W,columns:[].concat(Ce()(D!=null?D:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",render:function(Y,k){return(0,o.jsx)(Ue,{disabled:!!_,onClick:function(){return be(k.key)},children:"\u5220\u9664"})}}])},!A&&{footer:function(){return(0,o.jsx)(T.ZP,{block:!0,icon:(0,o.jsx)(Ee.Z,{}),type:"dashed",disabled:!!_,onClick:s()(v()().mark(function Y(){return v()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,x.validateFields();case 2:z();case 3:case"end":return B.stop()}},Y)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}))}})})},Oe=ge},92583:function(g,t,e){e.r(t),e.d(t,{texts:function(){return r}});var C=e(13456);const r=[{value:"\u53EF\u7C89\u788E\u7684\u5BB9\u5668\uFF08\u9AD8\u9636\u7EC4\u4EF6\uFF09",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u63A7\u5236\u5305\u88F9\u7684\u7EC4\u4EF6\u7684 props \u4E2D\u7684 visible \u6216\u8005 open \u53D8\u4E3A false \u65F6\u76F4\u63A5\u9500\u6BC1\u6574\u4E2A\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u4F1A\u4FDD\u7559\u4E0B\u4E00\u4E9B\u72B6\u6001\uFF0C",paraId:1,tocIndex:1},{value:"\u533A\u522B\u4E8E ",paraId:1,tocIndex:1},{value:"visible && <Container />",paraId:1,tocIndex:1},{value:" \u7684\u8FD9\u79CD\u5199\u6CD5\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u9AD8\u9636\u7EC4\u4EF6\u5904\u7406\u540E\u53EF\u4EE5\u4FDD\u7559\u539F\u672C\u7684\u52A8\u753B\u6548\u679C\uFF0C\u800C\u5E76\u4E14\u76F4\u63A5\u4E0D\u6E32\u67D3\uFF0C",paraId:1,tocIndex:1},{value:"\u652F\u6301 ant \u7EC4\u4EF6\u4EE5\u53CA\u6240\u6709\u5B9E\u73B0\u4E86 visible \u4EE5\u53CA afterVisibleChange \u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6",paraId:1,tocIndex:1}]},98005:function(g,t){t.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';
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
`},9482:function(g,t){t.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';
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
`},93069:function(g,t){t.Z=`import { Button, Space } from 'antd';
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
