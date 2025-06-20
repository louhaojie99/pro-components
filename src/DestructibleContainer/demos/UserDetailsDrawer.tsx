import { DestructibleContainer } from '@louhaojie99/pro-components';
import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';
import React, { useEffect } from 'react';

const UserDetailsDrawer: React.FC<DrawerProps> = (props) => {
  useEffect(() => {
    console.log('mount: ', props);

    return () => {
      console.log('unmount: ', props);
    };
  }, []);

  return (
    <Drawer title="用户详情" {...props}>
      <p>小酷</p>
      <p>小樱</p>
      <p>小美</p>
    </Drawer>
  );
};

export default DestructibleContainer(UserDetailsDrawer);
