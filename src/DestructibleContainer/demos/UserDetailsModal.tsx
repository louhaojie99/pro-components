import { DestructibleContainer } from '@louhaojie99/pro-components';
import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import React, { useEffect } from 'react';

const UserDetailsModal: React.FC<ModalProps> = (props) => {
  useEffect(() => {
    console.log('props: ', props);
  }, []);

  console.log('render: ', props);

  return (
    <Modal title="用户详情" {...props}>
      <p>小酷</p>
      <p>小樱</p>
      <p>小美</p>
    </Modal>
  );
};

export default DestructibleContainer(UserDetailsModal);
