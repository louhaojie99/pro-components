import { Button, Space } from 'antd';
import React from 'react';
import styles from './index.module.less';

export const HeaderContainer = () => (
  <div className={styles.headerContainer}>
    <div>ProcessDesigner</div>
    <Space>
      <Button>保存</Button>
      <Button>提交</Button>
    </Space>
  </div>
);
