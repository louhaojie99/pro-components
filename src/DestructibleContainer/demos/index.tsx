import { Button, Space } from 'antd';
import React, { useState } from 'react';
import UserDetailsDrawer from './UserDetailsDrawer';
import UserDetailsModal from './UserDetailsModal';

const App: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Space>
      <Button
        type="primary"
        onClick={() => {
          setDrawerVisible(true);
        }}
      >
        打开抽屉
      </Button>

      <UserDetailsDrawer
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />

      <br />

      <Button
        type="primary"
        onClick={() => {
          setModalVisible(true);
        }}
      >
        打开弹窗
      </Button>

      <UserDetailsModal
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
      />
    </Space>
  );
};

export default App;
