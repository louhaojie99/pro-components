"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[845],{69993:function(s,o,n){var t;n.r(o),n.d(o,{demos:function(){return u}});var m=n(90228),a=n.n(m),_=n(87999),l=n.n(_),r=n(75271),p=n(8892),u={"portal-demo-demos":{component:r.memo(r.lazy(function(){return n.e(742).then(n.bind(n,8116))})),asset:{type:"BLOCK",id:"portal-demo-demos",refAtomIds:["Portal"],dependencies:{"index.tsx":{type:"FILE",value:n(15915).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":p,react:t||(t=n.t(r,2))},renderOpts:{compile:function(){var i=l()(a()().mark(function h(){var d,P=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(222).then(n.bind(n,34222));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,P));case 3:case"end":return e.stop()}},h)}));function c(){return i.apply(this,arguments)}return c}()}}}},38241:function(s,o,n){n.r(o),n.d(o,{texts:function(){return t}});const t=[{value:"\u521B\u5EFA\u4E00\u4E2A\u53EF\u8131\u79BB\u6587\u6863\u6D41\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u5982\u6A21\u6001\u6846\u3001\u6C14\u6CE1\u5361\u7247\u7B49\u9700\u8981\u8131\u79BB\u6587\u6863\u6D41\u7684\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u5C06\u5176\u5305\u88F9\uFF0C\u4ECE\u800C\u5B9E\u73B0\u8131\u79BB\u6587\u6863\u6D41\u7684\u6548\u679C\u3002",paraId:1,tocIndex:1}]},15915:function(s,o){o.Z=`import { Portal } from '@louhaojie99/pro-components';
import React from 'react';

const Demo: React.FC = () => {
  return (
    <div>
      <p>\u6D4B\u8BD5\u6D4B\u8BD5\u6D4B\u8BD5\u6D4B\u8BD5\u554A\u554A\u554A\u554A\u554A</p>
      <Portal>
        <div
          data-name="modal-mask"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            width: '500px',
            height: '500px',
            backgroundColor: '#00000073',
            border: '1px solid #f50',
          }}
        >
          <div
            data-name="modal-content"
            style={{
              width: '300px',
              height: '200px',
              margin: '100px auto',
              padding: '20px',
              border: '1px solid #ccc',
              backgroundColor: '#fff',
            }}
          >
            \u8FD9\u662F\u901A\u8FC7 Portal \u6E32\u67D3\u7684\u5185\u5BB9
          </div>
        </div>
      </Portal>
    </div>
  );
};

export default Demo;
`}}]);
