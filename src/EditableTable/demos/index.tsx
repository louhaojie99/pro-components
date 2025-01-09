import type {
  EditableTableProps,
  EditableTableRef,
} from '@louhaojie99/pro-components';
import { EditableTable } from '@louhaojie99/pro-components';
import { Button, Divider, Form, Input, Select, Space, Typography } from 'antd';
import React, { useRef, useState } from 'react';

const { Title, Paragraph } = Typography;

type UserInfo = {
  name: string;
  age: number;
  gender: 'male' | 'female';
};

const App: React.FC = () => {
  const formRef = useRef<EditableTableRef<UserInfo>>(null);

  const [dataSource, setDataSource] = useState<UserInfo[]>([
    { name: '小酷', age: 20, gender: 'male' },
    { name: '小樱', age: 18, gender: 'female' },
  ]);

  const columns: EditableTableProps<UserInfo>['columns'] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => {
        return (
          <Form.Item
            style={{ padding: 0, margin: 0 }}
            name={[record.key, 'name']}
            rules={[{ required: true, message: '请输入' }]}
          >
            <Input allowClear placeholder="请输入" />
          </Form.Item>
        );
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      render: (_, record) => {
        return (
          <Form.Item
            style={{ padding: 0, margin: 0 }}
            name={[record.key, 'age']}
            rules={[{ required: true, message: '请输入' }]}
          >
            <Input allowClear placeholder="请输入" />
          </Form.Item>
        );
      },
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      render: (_, record) => {
        return (
          <Form.Item
            style={{ padding: 0, margin: 0 }}
            name={[record.key, 'gender']}
            rules={[{ required: true, message: '请选择' }]}
          >
            <Select
              allowClear
              options={[
                { label: '男生', value: 'male' },
                { label: '女生', value: 'female' },
              ]}
              placeholder="请选择"
            />
          </Form.Item>
        );
      },
    },
  ];

  return (
    <>
      <Space style={{ width: '100%' }} direction="vertical">
        <Title level={5}>学生列表</Title>

        <EditableTable<UserInfo>
          formRef={formRef}
          columns={columns}
          value={dataSource}
          onChange={setDataSource}
        />
      </Space>

      <Title level={5}>数据预览</Title>
      <Typography>
        <pre>{JSON.stringify(dataSource, null, 2)}</pre>
      </Typography>

      <Divider />

      <Paragraph>如果您想调用表单实例方法，可以通过 ref 来实现：</Paragraph>
      <Button
        type="primary"
        onClick={async () => {
          await formRef.current?.validateFields();
          console.log('提交的数据: ', dataSource);
        }}
      >
        表单验证
      </Button>
    </>
  );
};

export default App;
