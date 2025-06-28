"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[241],{55010:function(_,n,e){var s;e.r(n),e.d(n,{demos:function(){return C}});var t=e(90228),a=e.n(t),p=e(87999),u=e.n(p),r=e(75271),m=e(84983),d=e(33628),o=e(34078),i=e(95654),c=e(44526),C={"destructiblecontainer-demo-demos":{component:r.memo(r.lazy(function(){return e.e(920).then(e.bind(e,6844))})),asset:{type:"BLOCK",id:"destructiblecontainer-demo-demos",refAtomIds:["DestructibleContainer"],dependencies:{"index.tsx":{type:"FILE",value:e(80170).Z},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"},"./UserDetailsDrawer.tsx":{type:"FILE",value:e(34535).Z},"./UserDetailsModal.tsx":{type:"FILE",value:e(98724).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"./UserDetailsDrawer.tsx":o,"./UserDetailsModal.tsx":i,antd:d,react:s||(s=e.t(r,2)),"C:/Users/HJ/Desktop/ProComponents/pro-components/src/DestructibleContainer/demos/UserDetailsDrawer.tsx":o,"C:/Users/HJ/Desktop/ProComponents/pro-components/src/DestructibleContainer/demos/UserDetailsModal.tsx":i,"@louhaojie99/pro-components":c},renderOpts:{compile:function(){var E=u()(a()().mark(function P(){var D,f=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(652).then(e.bind(e,43652));case 2:return l.abrupt("return",(D=l.sent).default.apply(D,f));case 3:case"end":return l.stop()}},P)}));function M(){return E.apply(this,arguments)}return M}()}}}},34078:function(_,n,e){e.r(n);var s=e(26068),t=e.n(s),a=e(44526),p=e(38706),u=e(75271),r=e(52676),m=function(o){return(0,u.useEffect)(function(){return console.log("mount: ",o),function(){console.log("unmount: ",o)}},[]),(0,r.jsxs)(p.Z,t()(t()({title:"\u7528\u6237\u8BE6\u60C5"},o),{},{children:[(0,r.jsx)("p",{children:"\u5C0F\u9177"}),(0,r.jsx)("p",{children:"\u5C0F\u6A31"}),(0,r.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};n.default=(0,a.DestructibleContainer)(m)},95654:function(_,n,e){e.r(n);var s=e(26068),t=e.n(s),a=e(44526),p=e(96934),u=e(75271),r=e(52676),m=function(o){return(0,u.useEffect)(function(){return console.log("mount: ",o),function(){console.log("unmount: ",o)}},[]),(0,r.jsxs)(p.Z,t()(t()({title:"\u7528\u6237\u8BE6\u60C5"},o),{},{children:[(0,r.jsx)("p",{children:"\u5C0F\u9177"}),(0,r.jsx)("p",{children:"\u5C0F\u6A31"}),(0,r.jsx)("p",{children:"\u5C0F\u7F8E"})]}))};n.default=(0,a.DestructibleContainer)(m)},97414:function(_,n,e){e.r(n),e.d(n,{texts:function(){return t}});var s=e(84983);const t=[{value:"\u53EF\u7C89\u788E\u7684\u5BB9\u5668\uFF08\u9AD8\u9636\u7EC4\u4EF6\uFF09",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u63A7\u5236\u5305\u88F9\u7684\u7EC4\u4EF6\u7684 props \u4E2D\u7684 visible \u6216\u8005 open \u53D8\u4E3A false \u65F6\u76F4\u63A5\u9500\u6BC1\u6574\u4E2A\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u4F1A\u4FDD\u7559\u4E0B\u4E00\u4E9B\u72B6\u6001\uFF0C",paraId:1,tocIndex:1},{value:"\u533A\u522B\u4E8E ",paraId:1,tocIndex:1},{value:"visible && <Container />",paraId:1,tocIndex:1},{value:" \u7684\u8FD9\u79CD\u5199\u6CD5\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u9AD8\u9636\u7EC4\u4EF6\u5904\u7406\u540E\u53EF\u4EE5\u4FDD\u7559\u539F\u672C\u7684\u52A8\u753B\u6548\u679C\uFF0C\u800C\u5E76\u4E14\u76F4\u63A5\u4E0D\u6E32\u67D3\uFF0C",paraId:1,tocIndex:1},{value:"\u652F\u6301 ant \u7EC4\u4EF6\u4EE5\u53CA\u6240\u6709\u5B9E\u73B0\u4E86 visible \u4EE5\u53CA afterVisibleChange \u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6",paraId:1,tocIndex:1}]},34535:function(_,n){n.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';\r
import type { DrawerProps } from 'antd';\r
import { Drawer } from 'antd';\r
import React, { useEffect } from 'react';\r
\r
const UserDetailsDrawer: React.FC<DrawerProps> = (props) => {\r
  useEffect(() => {\r
    console.log('mount: ', props);\r
\r
    return () => {\r
      console.log('unmount: ', props);\r
    };\r
  }, []);\r
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
`},98724:function(_,n){n.Z=`import { DestructibleContainer } from '@louhaojie99/pro-components';\r
import type { ModalProps } from 'antd';\r
import { Modal } from 'antd';\r
import React, { useEffect } from 'react';\r
\r
const UserDetailsModal: React.FC<ModalProps> = (props) => {\r
  useEffect(() => {\r
    console.log('mount: ', props);\r
\r
    return () => {\r
      console.log('unmount: ', props);\r
    };\r
  }, []);\r
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
`},80170:function(_,n){n.Z=`import { Button, Space } from 'antd';\r
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
