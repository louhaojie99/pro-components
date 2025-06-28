"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[237],{49107:function(a,e,n){var t;n.r(e),n.d(e,{demos:function(){return l}});var r=n(90228),_=n.n(r),p=n(87999),m=n.n(p),s=n(75271),P=n(9705),d=n(44526),l={"asyncbutton-demo-demos":{component:s.memo(s.lazy(function(){return n.e(290).then(n.bind(n,44066))})),asset:{type:"BLOCK",id:"asyncbutton-demo-demos",refAtomIds:["AsyncButton"],dependencies:{"index.tsx":{type:"FILE",value:n(62878).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":d,react:t||(t=n.t(s,2))},renderOpts:{compile:function(){var c=m()(_()().mark(function v(){var u,I=arguments;return _()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(652).then(n.bind(n,43652));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,I));case 3:case"end":return o.stop()}},v)}));function i(){return c.apply(this,arguments)}return i}()}}}},62903:function(a,e,n){n.r(e),n.d(e,{texts:function(){return r}});var t=n(9705);const r=[{value:"\u4E00\u4E2A\u652F\u6301\u5F02\u6B65\u7684\u6309\u94AE\uFF0ConClick \u4F20\u5165\u5F02\u6B65\u51FD\u6570\u5219\u81EA\u52A8\u663E\u793A loading",paraId:0,tocIndex:0},{value:"\u5F53\u4F60\u9700\u8981\u5728\u6309\u94AE\u70B9\u51FB\u540E\u6267\u884C\u5F02\u6B65\u64CD\u4F5C\uFF08\u5982\u7F51\u7EDC\u8BF7\u6C42\uFF09\u5E76\u81EA\u52A8\u663E\u793A\u52A0\u8F7D\u72B6\u6001\u65F6\uFF0C\u4F7F\u7528 AsyncButton\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"onClick",paraId:2,tocIndex:3},{value:"\u70B9\u51FB\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A Promise\uFF0C\u6309\u94AE\u5C06\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\u3002",paraId:2,tocIndex:3},{value:"(event: React.MouseEvent<HTMLElement, MouseEvent>) => Promise<any>",paraId:2,tocIndex:3},{value:"AsyncButton \u57FA\u4E8E Ant Design \u7684 Button \u7EC4\u4EF6\u5F00\u53D1\uFF0C\u652F\u6301\u6240\u6709 Button \u7684\u5C5E\u6027\u3002\u66F4\u591A\u5C5E\u6027\u8BE6\u60C5\u53EF\u4EE5\u53C2\u8003 ",paraId:3,tocIndex:3},{value:"Ant Design Button API",paraId:3,tocIndex:3},{value:"\u3002",paraId:3,tocIndex:3}]},62878:function(a,e){e.Z=`import type { AsyncButtonProps } from '@louhaojie99/pro-components';\r
import { AsyncButton } from '@louhaojie99/pro-components';\r
import React from 'react';\r
\r
function sleep(time: number) {\r
  return new Promise((resolve) => {\r
    setTimeout(resolve, time);\r
  });\r
}\r
\r
const App: React.FC = () => {\r
  const handleClick: AsyncButtonProps['onClick'] = async () => {\r
    await sleep(2000);\r
  };\r
\r
  return (\r
    <div>\r
      <AsyncButton type="primary" onClick={handleClick}>\r
        AsyncButton\r
      </AsyncButton>\r
    </div>\r
  );\r
};\r
\r
export default App;\r
`}}]);
