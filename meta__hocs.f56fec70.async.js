"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[338],{15647:function(r,e,n){var o;n.r(e),n.d(e,{demos:function(){return i}});var _=n(90228),l=n.n(_),d=n(87999),t=n.n(d),a=n(75271),u=n(14216),p=n(17984),m=n(48173),i={"src-hocs-demo-demos":{component:a.memo(a.lazy(function(){return n.e(433).then(n.bind(n,51138))})),asset:{type:"BLOCK",id:"src-hocs-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(74545).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.1"},antd:{type:"NPM",value:"5.27.1"},react:{type:"NPM",value:"18.3.1"},"./UserDetailsModal.tsx":{type:"FILE",value:n(65046).Z}},entry:"index.tsx"},context:{"./UserDetailsModal.tsx":m,"@louhaojie99/pro-components":u,antd:p,react:o||(o=n.t(a,2)),"C:/Users/HJ/Desktop/pro-components/pro-components/src/hocs/destructibleContainer/demos/UserDetailsModal.tsx":m},renderOpts:{compile:function(){var M=t()(l()().mark(function E(){var c,f=arguments;return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(890).then(n.bind(n,2890));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,f));case 3:case"end":return s.stop()}},E)}));function D(){return M.apply(this,arguments)}return D}()}}}},48173:function(r,e,n){n.r(e);var o=n(26068),_=n.n(o),l=n(11763),d=n(75271),t=n(52676),a=function(p){return(0,d.useEffect)(function(){return alert("mount"),function(){alert("unmount")}},[]),(0,t.jsxs)(l.Z,_()(_()({},p),{},{children:[(0,t.jsx)("p",{children:"\u5C0F\u9177"}),(0,t.jsx)("p",{children:"\u5C0F\u6A31"}),(0,t.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};e.default=a},93560:function(r,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"destructibleContainer \u662F\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u80FD\u591F\u5728\u7EC4\u4EF6\u7684 visible \u6216 open \u5C5E\u6027\u53D8\u4E3A false \u65F6\uFF0C\u81EA\u52A8\u9500\u6BC1\u5E76\u91CD\u65B0\u521B\u5EFA\u5185\u90E8\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u662F\u4EC5\u4EC5\u9690\u85CF\u5B83\u3002\u8FD9\u6709\u52A9\u4E8E\u5F7B\u5E95\u9500\u6BC1\u7EC4\u4EF6\u72B6\u6001\uFF0C\u540C\u65F6\u4FDD\u7559\u539F\u6709\u7684\u52A8\u753B\u6548\u679C\u3002",paraId:0,tocIndex:1},{value:"\u5F53\u4F60\u5E0C\u671B\u5728\u7EC4\u4EF6\u5173\u95ED\u540E\u5B8C\u5168\u9500\u6BC1\u5176\u5185\u90E8\u72B6\u6001\u65F6",paraId:1,tocIndex:2},{value:"\u9700\u8981\u517C\u5BB9\u5E26\u6709\u52A8\u753B\u6548\u679C\u7684\u7EC4\u4EF6\uFF08\u5982 Modal\u3001Drawer \u7B49\uFF09",paraId:1,tocIndex:2},{value:"\u9002\u7528\u4E8E Ant Design \u7EC4\u4EF6\u6216\u4EFB\u4F55\u5B9E\u73B0\u4E86 visible / open \u5C5E\u6027\u53CA afterVisibleChange \u56DE\u8C03\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6",paraId:1,tocIndex:2},{value:"\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u4E86\u7EC4\u4EF6\u53EA\u6709\u5728\u6253\u5F00\u65F6\u624D\u4F1A\u88AB\u5B9E\u9645\u6E32\u67D3\u548C\u6302\u8F7D",paraId:2,tocIndex:3}]},65046:function(r,e){e.Z=`import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import React, { useEffect } from 'react';

const UserDetailsModal: React.FC<ModalProps> = (props) => {
  useEffect(() => {
    alert('mount');

    return () => {
      alert('unmount');
    };
  }, []);

  return (
    <Modal {...props}>
      <p>\u5C0F\u9177</p>
      <p>\u5C0F\u6A31</p>
      <p>\u5C0F\u7F8E</p>
    </Modal>
  );
};

export default UserDetailsModal;
`},74545:function(r,e){e.Z=`import { hocs } from '@louhaojie99/pro-components';
import { Button, Space } from 'antd';
import React, { useState } from 'react';
import BaseUserDetailsModal from './UserDetailsModal';
const { destructibleContainer } = hocs;

const UserDetailsModal = destructibleContainer(BaseUserDetailsModal);

const App: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const show = () => {
    setModalVisible(true);
  };

  const hidden = () => {
    setModalVisible(false);
  };

  return (
    <Space>
      <Button type="primary" onClick={show}>
        \u6253\u5F00\u5F39\u7A97
      </Button>

      <UserDetailsModal
        title="\u7528\u6237\u8BE6\u60C5"
        open={modalVisible}
        onCancel={hidden}
      />
    </Space>
  );
};

export default App;
`}}]);
