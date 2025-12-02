"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[9942],{23864:function(d,e,n){var a;n.r(e),n.d(e,{demos:function(){return m}});var s=n(90228),l=n.n(s),u=n(87999),p=n.n(u),o=n(75271),i=n(65850),c=n(43489),m={"fullcontainer-demo-demos":{component:o.memo(o.lazy(function(){return n.e(2900).then(n.bind(n,98156))})),asset:{type:"BLOCK",id:"fullcontainer-demo-demos",refAtomIds:["FullContainer"],dependencies:{"index.tsx":{type:"FILE",value:n(25398).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.3"},antd:{type:"NPM",value:"5.29.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":i,antd:c,react:a||(a=n.t(o,2))},renderOpts:{compile:function(){var _=p()(l()().mark(function v(){var r,x=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7457).then(n.bind(n,77457));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,x));case 3:case"end":return t.stop()}},v)}));function I(){return _.apply(this,arguments)}return I}()}}}},46810:function(d,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u5168\u5C4F\u5BB9\u5668\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u5F53\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u5168\u5C4F\u8986\u76D6\u7684\u5BB9\u5668\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u3002\u5B83\u57FA\u4E8E Portal \u5B9E\u73B0\uFF0C\u53EF\u4EE5\u5C06\u5185\u5BB9\u6E32\u67D3\u5230\u6307\u5B9A\u5BB9\u5668\u4E2D\u5E76\u5360\u6EE1\u6574\u4E2A\u89C6\u53E3\u3002",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u5B50\u5143\u7D20",paraId:2,tocIndex:3},{value:"React.ReactNode",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"getContainer",paraId:2,tocIndex:3},{value:"\u6307\u5B9A\u5BB9\u5668\u5143\u7D20",paraId:2,tocIndex:3},{value:"() => HTMLElement",paraId:2,tocIndex:3},{value:"() => document.body",paraId:2,tocIndex:3},{value:"zIndex",paraId:2,tocIndex:3},{value:"\u81EA\u5B9A\u4E49 z-index",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"1000",paraId:2,tocIndex:3},{value:"className",paraId:2,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"style",paraId:2,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:2,tocIndex:3},{value:"React.CSSProperties",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},25398:function(d,e){e.Z=`import { FullContainer } from '@louhaojie99/pro-components';
import { Button } from 'antd';
import React, { useState } from 'react';

const Demo: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(!visible)}>
        {visible ? '\u5173\u95ED\u5168\u5C4F\u5BB9\u5668' : '\u6253\u5F00\u5168\u5C4F\u5BB9\u5668'}
      </Button>

      {visible && (
        <FullContainer zIndex={1000}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              padding: '40px',
            }}
          >
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  padding: '40px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  maxWidth: '500px',
                  border: '1px solid #d9d9d9',
                }}
              >
                <h2>\u5168\u5C4F\u5BB9\u5668\u793A\u4F8B</h2>
                <p>\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E Portal \u5B9E\u73B0\u7684\u5168\u5C4F\u5BB9\u5668\u7EC4\u4EF6\u3002</p>
                <p>\u5185\u5BB9\u4F1A\u6E32\u67D3\u5230 document.body \u4E2D\uFF0C\u5E76\u5360\u6EE1\u6574\u4E2A\u89C6\u53E3\u3002</p>
                <p>\u5BB9\u5668\u9ED8\u8BA4\u6709\u767D\u8272\u80CC\u666F\u3002</p>
                <Button
                  type="primary"
                  onClick={() => setVisible(false)}
                  style={{ marginTop: '20px' }}
                >
                  \u5173\u95ED
                </Button>
              </div>
            </div>
          </div>
        </FullContainer>
      )}
    </div>
  );
};

export default Demo;
`}}]);
