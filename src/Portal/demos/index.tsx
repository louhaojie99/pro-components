import { Portal } from '@louhaojie99/pro-components';
import React from 'react';

const Demo: React.FC = () => {
  return (
    <div>
      <p>测试测试测试测试啊啊啊啊啊</p>
      <Portal>
        <div
          data-name="modal-mask"
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
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
            这是通过 Portal 渲染的内容
          </div>
        </div>
      </Portal>
    </div>
  );
};

export default Demo;
