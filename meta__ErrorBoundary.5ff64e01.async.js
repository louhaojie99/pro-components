"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[508],{92093:function(s,e,n){var r;n.r(e),n.d(e,{demos:function(){return _}});var l=n(90228),a=n.n(l),d=n(87999),p=n.n(d),t=n(75271),m=n(52259),_={"errorboundary-demo-demos":{component:t.memo(t.lazy(function(){return n.e(781).then(n.bind(n,94595))})),asset:{type:"BLOCK",id:"errorboundary-demo-demos",refAtomIds:["ErrorBoundary"],dependencies:{"index.tsx":{type:"FILE",value:n(9334).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":m,react:r||(r=n.t(t,2))},renderOpts:{compile:function(){var c=p()(a()().mark(function f(){var u,E=arguments;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(222).then(n.bind(n,34222));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,E));case 3:case"end":return o.stop()}},f)}));function i(){return c.apply(this,arguments)}return i}()}}}},69167:function(s,e,n){n.r(e),n.d(e,{texts:function(){return r}});const r=[{value:"\u9519\u8BEF\u8FB9\u754C",paraId:0,tocIndex:0},{value:"\u63A7\u5236\u9875\u9762\u5C40\u90E8\u8303\u56F4\u53D1\u751F\u9519\u8BEF\uFF0C\u4E0D\u5F71\u54CD\u6574\u4E2A\u5E94\u7528\u5D29\u6E83\u3002",paraId:1,tocIndex:1}]},9334:function(s,e){e.Z=`import { ErrorBoundary } from '@louhaojie99/pro-components';
import React, { useState } from 'react';

/**
 * \u4E00\u4E2A\u4F1A\u968F\u673A\u629B\u51FA\u9519\u8BEF\u7684\u6D4B\u8BD5\u7EC4\u4EF6
 */
const BuggyComponent = () => {
  const [count, setCount] = useState(0);

  if (count === 3) {
    // \u6A21\u62DF\u8FD0\u884C\u65F6\u9519\u8BEF
    throw new Error('\u{1F4A5} \u6A21\u62DF\u7684\u8FD0\u884C\u65F6\u9519\u8BEF\uFF01');
  }

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <p>\u8BA1\u6570\u5668\uFF1A{count}</p>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => setCount((c) => c + 1)}>\u52A0\u4E00</button>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => setCount(3)}>\u6A21\u62DF\u9519\u8BEF</button>
    </div>
  );
};

const Demo = () => {
  return (
    <ErrorBoundary
      onError={(error, info) => {
        console.error('\u6355\u83B7\u5230\u9519\u8BEF\uFF1A', error, info);
      }}
      fallbackRender={(error, info, resetError) => {
        console.log('Test: ', {
          error,
          info,
        });
        return (
          <div style={{ background: '#fee', padding: 16, borderRadius: 8 }}>
            <h3>\u{1F6A8} \u51FA\u9519\u5566\uFF01</h3>
            <p>\u9519\u8BEF\u4FE1\u606F\uFF1A{error?.message}</p>
            <pre style={{ whiteSpace: 'pre-wrap', color: '#a33' }}>
              {info?.componentStack}
            </pre>
            {/* eslint-disable-next-line react/button-has-type */}
            <button
              style={{
                background: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '6px 12px',
                borderRadius: 4,
              }}
              onClick={() => {
                console.log('\u81EA\u5B9A\u4E49 fallbackRender \u5185\u89E6\u53D1 resetError');
                resetError?.(); // \u8C03\u7528 resetError \u6E05\u7A7A\u9519\u8BEF\u72B6\u6001
              }}
            >
              \u91CD\u7F6E\u9519\u8BEF
            </button>
          </div>
        );
      }}
    >
      <BuggyComponent />
    </ErrorBoundary>
  );
};

export default Demo;
`}}]);
