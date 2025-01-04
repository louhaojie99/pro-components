import { OverlaySpin } from '@louhaojie99/pro-components';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div style={{ position: 'relative' }}>
      <OverlaySpin spinning={loading} tip="数据加载中..." />

      <Button
        type="primary"
        loading={loading}
        onClick={() => {
          setLoading(true);
        }}
      >
        请求数据
      </Button>

      <header>Header</header>
      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
