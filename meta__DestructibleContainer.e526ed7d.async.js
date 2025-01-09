"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[241],{21435:function(g,t,e){var f;e.r(t),e.d(t,{demos:function(){return R}});var p=e(90228),a=e.n(p),P=e(87999),C=e.n(P),l=e(75271),M=e(3966),A=e(57228),s=e(19187),T=e(49423),B=e(16458),R={"destructiblecontainer-demo-demos":{component:l.memo(l.lazy(function(){return e.e(920).then(e.bind(e,68714))})),asset:{type:"BLOCK",id:"destructiblecontainer-demo-demos",refAtomIds:["DestructibleContainer"],dependencies:{"index.tsx":{type:"FILE",value:e(11796).Z},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"},"./UserDetailsDrawer.tsx":{type:"FILE",value:e(97265).Z},"./UserDetailsModal.tsx":{type:"FILE",value:e(52456).Z},"@louhaojie99/pro-components":{type:"NPM",value:"0.0.3"}},entry:"index.tsx"},context:{"./UserDetailsDrawer.tsx":s,"./UserDetailsModal.tsx":T,antd:A,react:f||(f=e.t(l,2)),"C:/Users/HJ/Desktop/pro-components/src/DestructibleContainer/demos/UserDetailsDrawer.tsx":s,"C:/Users/HJ/Desktop/pro-components/src/DestructibleContainer/demos/UserDetailsModal.tsx":T,"@louhaojie99/pro-components":B},renderOpts:{compile:function(){var _=C()(a()().mark(function z(){var L,G=arguments;return a()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(837).then(e.bind(e,57837));case 2:return h.abrupt("return",(L=h.sent).default.apply(L,G));case 3:case"end":return h.stop()}},z)}));function o(){return _.apply(this,arguments)}return o}()}}}},19187:function(g,t,e){e.r(t);var f=e(26068),p=e.n(f),a=e(16458),P=e(38706),C=e(75271),l=e(52676),M=function(s){return(0,C.useEffect)(function(){console.log("props: ",s)},[]),console.log("render: ",s),(0,l.jsxs)(P.Z,p()(p()({title:"\u7528\u6237\u8BE6\u60C5"},s),{},{children:[(0,l.jsx)("p",{children:"\u5C0F\u9177"}),(0,l.jsx)("p",{children:"\u5C0F\u6A31"}),(0,l.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};t.default=(0,a.DestructibleContainer)(M)},49423:function(g,t,e){e.r(t);var f=e(26068),p=e.n(f),a=e(16458),P=e(96934),C=e(75271),l=e(52676),M=function(s){return(0,C.useEffect)(function(){console.log("props: ",s)},[]),console.log("render: ",s),(0,l.jsxs)(P.Z,p()(p()({title:"\u7528\u6237\u8BE6\u60C5"},s),{},{children:[(0,l.jsx)("p",{children:"\u5C0F\u9177"}),(0,l.jsx)("p",{children:"\u5C0F\u6A31"}),(0,l.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};t.default=(0,a.DestructibleContainer)(M)},16458:function(g,t,e){e.r(t),e.d(t,{AsyncButton:function(){return G},DestructibleContainer:function(){return ae},EditableTable:function(){return Ae},IntlProvider:function(){return he},LanguageEnum:function(){return V},OverlaySpin:function(){return re},utils:function(){return f}});var f={};e.r(f),e.d(f,{parseJSON:function(){return xe}});var p=e(26068),a=e.n(p),P=e(90228),C=e.n(P),l=e(87999),M=e.n(l),A=e(48305),s=e.n(A),T=e(67825),B=e.n(T),R=e(27807),_=e(75271),o=e(52676),z=["onClick"],L=_.memo(function(i){var n=i.onClick,r=B()(i,z),u=(0,_.useState)(void 0),D=s()(u,2),c=D[0],m=D[1],O=function(){var v=M()(C()().mark(function E(U){return C()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(n){d.next=2;break}return d.abrupt("return");case 2:return d.prev=2,m(!0),d.next=6,n==null?void 0:n(U);case 6:return d.prev=6,m(!1),d.finish(6);case 9:case"end":return d.stop()}},E,null,[[2,,6,9]])}));return function(U){return v.apply(this,arguments)}}();return(0,o.jsx)(R.ZP,a()({loading:c,onClick:O},r))}),G=L,q=e(40023),h=["spinning","background","tip"],Q="overlay-spin",te=function(n){var r=n.spinning,u=n.background,D=u===void 0?"#fff":u,c=n.tip,m=B()(n,h);return r?(0,o.jsxs)("div",{className:"".concat(Q,"-container"),style:{"--background":D},children:[(0,o.jsx)(q.Z,a()({className:Q,spinning:r},m)),c&&(0,o.jsx)("div",{className:"".concat(Q,"-tip"),children:c})]}):null},re=te,oe=function(n){return function(r){var u=r.visible,D=r.open,c=r.afterVisibleChange,m=r.afterOpenChange,O=r.afterClose,v=u!=null?u:D,E=c!=null?c:m,U=(0,_.useState)(v),b=s()(U,2),d=b[0],F=b[1],Y=(0,_.useState)(v===!1),K=s()(Y,2),y=K[0],x=K[1],W=function(N){E==null||E(N),N||x(!0)},j=function(){O==null||O(),x(!0)};return(0,_.useEffect)(function(){v?(x(!1),setTimeout(function(){return F(v)},0)):F(v)},[v]),y?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(n,a()(a()({},r),{},{open:d,afterOpenChange:W,afterClose:j}))}},ae=oe,se=e(69417),le=e(35862),V=function(i){return i.ZH_CN="zh-CN",i.EN_US="en-US",i}({}),ie=e(82092),ee=e.n(ie),ue=e(66262),de=e(20973),ce=e(83144),me=e(78843),ve={welcome:"hello world"},fe=ve,pe={welcome:"\u4F60\u597D\u4E16\u754C"},De=pe,ne=function(n){var r=ee()(ee()({},V.ZH_CN,{message:De,antd:de.Z}),V.EN_US,{message:fe,antd:ue.Z});return r[n]},Ce=(0,ce.Sn)(),_e=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V.ZH_CN;return(0,me.d)({locale:n,messages:ne(n).message},Ce)},Ee=_.memo(function(i){var n=i.locale,r=i.children,u=_e(n);return(0,o.jsx)(le.zt,{value:u,children:(0,o.jsx)(se.ZP,{locale:ne(n).antd,children:r})})}),he=Ee,ge=e(15558),Pe=e.n(ge),Me=e(29369),Oe=e(72149),Ue=e(72774),be=e(63801),X=e(42748),ye=e(77995),je=be.Z.Link,Ie=function(n){var r=n.className,u=n.style,D=n.bordered,c=D===void 0?!1:D,m=n.columns,O=n.formRef,v=n.options,E=v!=null?v:{},U=E.onlyPreview,b=U===void 0?!1:U,d=E.hideAdd,F=d===void 0?!1:d,Y=X.Z.useForm(),K=s()(Y,1),y=K[0],x=(0,Oe.Z)(n,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),W=s()(x,2),j=W[0],k=W[1];(0,_.useEffect)(function(){y.setFieldsValue({items:j!=null?j:[]})},[j]),(0,_.useImperativeHandle)(O,function(){return y});var N=(0,Ue.Z)(function(Z){var I=Z.remove;return[].concat(Pe()(m!=null?m:[]),[{title:"\u64CD\u4F5C",dataIndex:"action",fixed:"right",render:function(J,w){return(0,o.jsx)(je,{disabled:!!b,onClick:function(){return I(w.key)},children:"\u5220\u9664"})}}])}),Se=function(I){k(I)};return(0,o.jsx)(X.Z,{className:r,form:y,style:a()({},u),autoComplete:"off",component:!1,disabled:!!b,initialValues:{items:j},onValuesChange:function(I,S){var J=S.items;Se(J)},children:(0,o.jsx)(X.Z.List,{name:"items",children:function(I,S){var J=S.add,w=S.remove;return(0,o.jsx)(ye.Z,a()(a()({rowKey:"key",bordered:c,dataSource:I.map(function(H){return a()(a()({},y.getFieldValue(["items",H.key])),{},{key:H.name})}),columns:N({remove:w})},!F&&{footer:function(){return(0,o.jsx)(R.ZP,{block:!0,icon:(0,o.jsx)(Me.Z,{}),type:"dashed",disabled:!!b,onClick:M()(C()().mark(function Te(){return C()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,y.validateFields();case 2:J();case 3:case"end":return $.stop()}},Te)})),children:"\u6DFB\u52A0\u4E00\u884C"})}}),{},{pagination:!1,scroll:{x:"max-content"}}))}})})},Ae=Ie,xe=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=function(m){return typeof m=="string"};try{if(!u(n))return r;var D=JSON.parse(n!=null?n:"");return D}catch(c){return console.error("Error parsing JSON:",c),r}}},16888:function(g,t,e){e.r(t),e.d(t,{texts:function(){return p}});var f=e(3966);const p=[{value:"\u53EF\u7C89\u788E\u7684\u5BB9\u5668\uFF08\u9AD8\u9636\u7EC4\u4EF6\uFF09",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u63A7\u5236\u5305\u88F9\u7684\u7EC4\u4EF6\u7684 props \u4E2D\u7684 visible \u6216\u8005 open \u53D8\u4E3A false \u65F6\u76F4\u63A5\u9500\u6BC1\u6574\u4E2A\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u4F1A\u4FDD\u7559\u4E0B\u4E00\u4E9B\u72B6\u6001\uFF0C",paraId:1,tocIndex:1},{value:"\u533A\u522B\u4E8E ",paraId:1,tocIndex:1},{value:"visible && <Container />",paraId:1,tocIndex:1},{value:" \u7684\u8FD9\u79CD\u5199\u6CD5\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u9AD8\u9636\u7EC4\u4EF6\u5904\u7406\u540E\u53EF\u4EE5\u4FDD\u7559\u539F\u672C\u7684\u52A8\u753B\u6548\u679C\uFF0C\u800C\u5E76\u4E14\u76F4\u63A5\u4E0D\u6E32\u67D3\uFF0C",paraId:1,tocIndex:1},{value:"\u652F\u6301 ant \u7EC4\u4EF6\u4EE5\u53CA\u6240\u6709\u5B9E\u73B0\u4E86 visible \u4EE5\u53CA afterVisibleChange \u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6",paraId:1,tocIndex:1}]},97265:function(g,t){t.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';
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
`},52456:function(g,t){t.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';
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
`},11796:function(g,t){t.Z=`import { Button, Space } from 'antd';
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
