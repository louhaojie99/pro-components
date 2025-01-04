"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[241],{21435:function(C,n,e){var p;e.r(n),e.d(n,{demos:function(){return v}});var s=e(90228),m=e.n(s),_=e(87999),E=e.n(_),r=e(75271),M=e(3966),h=e(65639),l=e(49423),g=e(19187),y=e(25826),v={"destructiblecontainer-demo-demos":{component:r.memo(r.lazy(function(){return e.e(920).then(e.bind(e,68714))})),asset:{type:"BLOCK",id:"destructiblecontainer-demo-demos",refAtomIds:["DestructibleContainer"],dependencies:{"index.tsx":{type:"FILE",value:e(11796).Z},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"},"./UserDetailsModal.tsx":{type:"FILE",value:e(52456).Z},"./UserDetailsDrawer.tsx":{type:"FILE",value:e(97265).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"./UserDetailsModal.tsx":l,"./UserDetailsDrawer.tsx":g,antd:h,react:p||(p=e.t(r,2)),"C:/Users/HJ/Desktop/pro-components/src/DestructibleContainer/demos/UserDetailsModal.tsx":l,"C:/Users/HJ/Desktop/pro-components/src/DestructibleContainer/demos/UserDetailsDrawer.tsx":g,"@louhaojie99/pro-components":y},renderOpts:{compile:function(){var i=E()(m()().mark(function B(){var j,R=arguments;return m()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(837).then(e.bind(e,57837));case 2:return d.abrupt("return",(j=d.sent).default.apply(j,R));case 3:case"end":return d.stop()}},B)}));function x(){return i.apply(this,arguments)}return x}()}}}},19187:function(C,n,e){e.r(n);var p=e(26068),s=e.n(p),m=e(25826),_=e(38706),E=e(75271),r=e(52676),M=function(l){return(0,E.useEffect)(function(){console.log("props: ",l)},[]),console.log("render: ",l),(0,r.jsxs)(_.Z,s()(s()({title:"\u7528\u6237\u8BE6\u60C5"},l),{},{children:[(0,r.jsx)("p",{children:"\u5C0F\u9177"}),(0,r.jsx)("p",{children:"\u5C0F\u6A31"}),(0,r.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};n.default=(0,m.DestructibleContainer)(M)},49423:function(C,n,e){e.r(n);var p=e(26068),s=e.n(p),m=e(25826),_=e(96934),E=e(75271),r=e(52676),M=function(l){return(0,E.useEffect)(function(){console.log("props: ",l)},[]),console.log("render: ",l),(0,r.jsxs)(_.Z,s()(s()({title:"\u7528\u6237\u8BE6\u60C5"},l),{},{children:[(0,r.jsx)("p",{children:"\u5C0F\u9177"}),(0,r.jsx)("p",{children:"\u5C0F\u6A31"}),(0,r.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};n.default=(0,m.DestructibleContainer)(M)},25826:function(C,n,e){e.r(n),e.d(n,{AsyncButton:function(){return j},DestructibleContainer:function(){return z},IntlProvider:function(){return ae},LanguageEnum:function(){return b},OverlaySpin:function(){return N}});var p=e(26068),s=e.n(p),m=e(90228),_=e.n(m),E=e(87999),r=e.n(E),M=e(48305),h=e.n(M),l=e(67825),g=e.n(l),y=e(27807),v=e(75271),i=e(52676),x=["onClick"],B=v.memo(function(a){var t=a.onClick,o=g()(a,x),c=(0,v.useState)(void 0),P=h()(c,2),f=P[0],U=P[1],I=function(){var D=r()(_()().mark(function O(A){return _()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(t){u.next=2;break}return u.abrupt("return");case 2:return u.prev=2,U(!0),u.next=6,t==null?void 0:t(A);case 6:return u.prev=6,U(!1),u.finish(6);case 9:case"end":return u.stop()}},O,null,[[2,,6,9]])}));return function(A){return D.apply(this,arguments)}}();return(0,i.jsx)(y.ZP,s()({loading:f,onClick:I},o))}),j=B,R=e(40023),T=["spinning","background","tip"],d="overlay-spin",F=function(t){var o=t.spinning,c=t.background,P=c===void 0?"#fff":c,f=t.tip,U=g()(t,T);return o?(0,i.jsxs)("div",{className:"".concat(d,"-container"),style:{"--background":P},children:[(0,i.jsx)(R.Z,s()({className:d,spinning:o},U)),f&&(0,i.jsx)("div",{className:"".concat(d,"-tip"),children:f})]}):null},N=F,J=function(t){return function(o){var c=o.visible,P=o.open,f=o.afterVisibleChange,U=o.afterOpenChange,I=o.afterClose,D=c!=null?c:P,O=f!=null?f:U,A=(0,v.useState)(D),S=h()(A,2),u=S[0],V=S[1],le=(0,v.useState)(D===!1),H=h()(le,2),ie=H[0],L=H[1],ue=function(Z){O==null||O(Z),Z||L(!0)},de=function(){I==null||I(),L(!0)};return(0,v.useEffect)(function(){D?(L(!1),setTimeout(function(){return V(D)},0)):V(D)},[D]),ie?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(t,s()(s()({},o),{},{open:u,afterOpenChange:ue,afterClose:de}))}},z=J,G=e(69417),$=e(35862),b=function(a){return a.ZH_CN="zh-CN",a.EN_US="en-US",a}({}),Q=e(82092),W=e.n(Q),X=e(66262),Y=e(20973),k=e(83144),w=e(78843),q={welcome:"hello world"},ee=q,ne={welcome:"\u4F60\u597D\u4E16\u754C"},te=ne,K=function(t){var o=W()(W()({},b.ZH_CN,{message:te,antd:Y.Z}),b.EN_US,{message:ee,antd:X.Z});return o[t]},re=(0,k.Sn)(),oe=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:b.ZH_CN;return(0,w.d)({locale:t,messages:K(t).message},re)},se=v.memo(function(a){var t=a.locale,o=a.children,c=oe(t);return(0,i.jsx)($.zt,{value:c,children:(0,i.jsx)(G.ZP,{locale:K(t).antd,children:o})})}),ae=se},16888:function(C,n,e){e.r(n),e.d(n,{texts:function(){return s}});var p=e(3966);const s=[{value:"\u53EF\u7C89\u788E\u7684\u5BB9\u5668\uFF08\u9AD8\u9636\u7EC4\u4EF6\uFF09",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u63A7\u5236\u5305\u88F9\u7684\u7EC4\u4EF6\u7684 props \u4E2D\u7684 visible \u6216\u8005 open \u53D8\u4E3A false \u65F6\u76F4\u63A5\u9500\u6BC1\u6574\u4E2A\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u4F1A\u4FDD\u7559\u4E0B\u4E00\u4E9B\u72B6\u6001\uFF0C",paraId:1,tocIndex:1},{value:"\u533A\u522B\u4E8E ",paraId:1,tocIndex:1},{value:"visible && <Container />",paraId:1,tocIndex:1},{value:" \u7684\u8FD9\u79CD\u5199\u6CD5\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u9AD8\u9636\u7EC4\u4EF6\u5904\u7406\u540E\u53EF\u4EE5\u4FDD\u7559\u539F\u672C\u7684\u52A8\u753B\u6548\u679C\uFF0C\u800C\u5E76\u4E14\u76F4\u63A5\u4E0D\u6E32\u67D3\uFF0C",paraId:1,tocIndex:1},{value:"\u652F\u6301 ant \u7EC4\u4EF6\u4EE5\u53CA\u6240\u6709\u5B9E\u73B0\u4E86 visible \u4EE5\u53CA afterVisibleChange \u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6",paraId:1,tocIndex:1}]},97265:function(C,n){n.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';
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
`},52456:function(C,n){n.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';
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
`},11796:function(C,n){n.Z=`import { Button, Space } from 'antd';
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
