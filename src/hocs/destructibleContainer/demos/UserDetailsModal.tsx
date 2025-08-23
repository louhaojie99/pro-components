import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import React, { useEffect } from 'react';

const UserDetailsModal: React.FC<ModalProps> = (props) => {
  useEffect(() => {
    alert('mount');

    return () => {
      alert('unmount');
    };
  }, []);

  return (
    <Modal {...props}>
      <p>小酷</p>
      <p>小樱</p>
      <p>小美</p>
    </Modal>
  );
};

export default UserDetailsModal;
