import { HOCS } from '@louhaojie99/pro-components';
import { Button, Space } from 'antd';
import React, { useState } from 'react';
import BaseUserDetailsModal from './UserDetailsModal';

const { destructibleContainer } = HOCS;

const UserDetailsModal = destructibleContainer(BaseUserDetailsModal);

const App: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const show = () => {
    setModalVisible(true);
  };

  const hidden = () => {
    setModalVisible(false);
  };

  return (
    <Space>
      <Button type="primary" onClick={show}>
        打开弹窗
      </Button>

      <UserDetailsModal
        title="用户详情"
        open={modalVisible}
        onCancel={hidden}
      />
    </Space>
  );
};

export default App;
