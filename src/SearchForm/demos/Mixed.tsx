import { SearchForm, type SearchFormItem } from '@louhaojie99/pro-components';
import { Input, Table } from 'antd';
import React from 'react';

const Demo = () => {
  const items: SearchFormItem[] = [
    // --- 第一行：紧凑型 (colSpan: 6) ---
    // 3个输入框(18格) + 按钮区域(6格) = 24格，刚好一行
    {
      name: 'field_0',
      label: '测试选项0',
      colSpan: 6,
      children: <Input placeholder="colSpan: 6" />,
    },
    {
      name: 'field_1',
      label: '测试选项1',
      colSpan: 6,
      children: <Input placeholder="colSpan: 6" />,
    },
    {
      name: 'field_2',
      label: '测试选项2',
      colSpan: 6,
      children: <Input placeholder="colSpan: 6" />,
    },

    // --- 第二行：标准型 (colSpan: 8) ---
    // 3个输入框(24格) = 刚好一行
    {
      name: 'field_3',
      label: '测试选项3',
      colSpan: 8,
      children: <Input placeholder="colSpan: 8" />,
    },
    {
      name: 'field_4',
      label: '测试选项4',
      colSpan: 8,
      children: <Input placeholder="colSpan: 8" />,
    },
    {
      name: 'field_5',
      label: '测试选项5',
      colSpan: 8,
      children: <Input placeholder="colSpan: 8" />,
    },

    // --- 第三行：宽型 (colSpan: 12) ---
    // 2个输入框(24格) = 刚好一行
    {
      name: 'field_6',
      label: '测试选项6',
      colSpan: 12,
      children: <Input placeholder="colSpan: 12" />,
    },
    {
      name: 'field_7',
      label: '测试选项7',
      colSpan: 12,
      children: <Input placeholder="colSpan: 12" />,
    },
  ];

  return (
    <>
      <SearchForm
        items={items}
        // 默认显示前3个，刚好配合 colSpan:6 占满第一行
        defaultVisibleItemCount={5}
        showCollapse
        onSearch={(values) => console.log('Search:', values)}
        onReset={() => console.log('Reset')}
      />
      <Table
        style={{ marginTop: 16 }}
        rowKey="field_0"
        columns={[
          { title: '测试选项0', dataIndex: 'field_0' },
          { title: '测试选项1', dataIndex: 'field_1' },
          { title: '测试选项6', dataIndex: 'field_6' },
        ]}
        dataSource={[]}
      />
    </>
  );
};

export default Demo;
