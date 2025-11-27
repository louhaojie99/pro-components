import { SearchForm } from '@louhaojie99/pro-components';
import { Table } from 'antd';
import React from 'react';
import { createMockFormItems } from './helper';

const Demo = () => {
  return (
    <>
      <SearchForm
        items={createMockFormItems(10)}
        showCollapse
        defaultVisibleItemCount={2}
        onSearch={(v) => {
          console.log('onSearch: ', v);
        }}
        onReset={() => {
          console.log('onReset: ');
        }}
      />
      <Table columns={[{ title: 'username', dataIndex: 'username' }]} />
    </>
  );
};

export default Demo;
