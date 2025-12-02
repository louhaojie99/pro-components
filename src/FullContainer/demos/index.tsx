import { FullContainer } from '@louhaojie99/pro-components';
import { Button } from 'antd';
import React, { useState } from 'react';

const Demo: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(!visible)}>
        {visible ? '关闭全屏容器' : '打开全屏容器'}
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
                <h2>全屏容器示例</h2>
                <p>这是一个基于 Portal 实现的全屏容器组件。</p>
                <p>内容会渲染到 document.body 中，并占满整个视口。</p>
                <p>容器默认有白色背景。</p>
                <Button
                  type="primary"
                  onClick={() => setVisible(false)}
                  style={{ marginTop: '20px' }}
                >
                  关闭
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
