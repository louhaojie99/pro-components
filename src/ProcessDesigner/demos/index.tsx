import { ProcessDesigner } from '@louhaojie99/pro-components';
import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ height: 600, border: '1px solid red', overflow: 'hidden' }}>
      <ProcessDesigner
        loading={{
          spinning: false,
          tip: '加载中....',
        }}
        initialData={{
          nodes: [
            {
              x: 200,
              y: 100,
              width: 100,
              height: 40,

              label: 'Rect',
              attrs: {
                body: {
                  stroke: '#8f8f8f',
                  strokeWidth: 1,
                  fill: '#fff',
                  rx: 6,
                  ry: 6,
                },
              },
            },
          ],
          edges: [],
        }}
      />
    </div>
  );
};

export default App;
