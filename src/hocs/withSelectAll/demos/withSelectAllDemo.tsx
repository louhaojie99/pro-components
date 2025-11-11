import { HOCS } from '@louhaojie99/pro-components';
import { Select } from 'antd';
import React, { useState } from 'react';

const { withSelectAll } = HOCS;
const StatusSelect = withSelectAll(Select);

const Demo = () => {
  const [status, setStatus] = useState<string[]>(['all']);

  return (
    <div>
      <StatusSelect
        style={{ width: 300 }}
        mode="multiple"
        options={[
          {
            label: '全选',
            value: 'all',
          },
          {
            label: '成功',
            value: 'success',
          },
          {
            label: '失败',
            value: 'failed',
          },
        ]}
        allOptionValue="all"
        value={status}
        onChange={(val) => {
          setStatus(val as string[]);
        }}
      />
    </div>
  );
};

export default Demo;
