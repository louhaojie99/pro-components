import { ErrorBoundary } from '@louhaojie99/pro-components';
import React, { useState } from 'react';

/**
 * 一个会随机抛出错误的测试组件
 */
const BuggyComponent = () => {
  const [count, setCount] = useState(0);

  if (count === 3) {
    // 模拟运行时错误
    throw new Error('💥 模拟的运行时错误！');
  }

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <p>计数器：{count}</p>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => setCount((c) => c + 1)}>加一</button>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => setCount(3)}>模拟错误</button>
    </div>
  );
};

const Demo = () => {
  return (
    <ErrorBoundary
      onError={(error, info) => {
        console.error('捕获到错误：', error, info);
      }}
      fallbackRender={(error, info, resetError) => {
        console.log('Test: ', {
          error,
          info,
        });
        return (
          <div style={{ background: '#fee', padding: 16, borderRadius: 8 }}>
            <h3>🚨 出错啦！</h3>
            <p>错误信息：{error?.message}</p>
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
                console.log('自定义 fallbackRender 内触发 resetError');
                resetError?.(); // 调用 resetError 清空错误状态
              }}
            >
              重置错误
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
