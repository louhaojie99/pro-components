"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[4316],{46545:function(r,n,e){var a;e.r(n),e.d(n,{demos:function(){return _}});var d=e(90228),l=e.n(d),m=e(87999),u=e.n(m),o=e(75271),p=e(65850),i=e(43489),_={"editabletable-demo-demos":{component:o.memo(o.lazy(function(){return e.e(1794).then(e.bind(e,40768))})),asset:{type:"BLOCK",id:"editabletable-demo-demos",refAtomIds:["EditableTable"],dependencies:{"index.tsx":{type:"FILE",value:e(64070).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.3"},antd:{type:"NPM",value:"5.29.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":p,antd:i,react:a||(a=e.t(o,2))},renderOpts:{compile:function(){var c=u()(l()().mark(function g(){var s,h=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7457).then(e.bind(e,77457));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,h));case 3:case"end":return t.stop()}},g)}));function f(){return c.apply(this,arguments)}return f}()}}}},92911:function(r,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u53EF\u7F16\u8F91\u8868\u683C",paraId:0,tocIndex:0},{value:"\u5F53\u60A8\u9700\u8981\u5728\u4E00\u4E2A\u7528\u6237\u754C\u9762\u4E2D\u5BF9\u8868\u683C\u6570\u636E\u8FDB\u884C\u5373\u65F6\u7F16\u8F91\u548C\u66F4\u65B0\u65F6\uFF0C\u53EF\u7F16\u8F91\u8868\u683C\uFF08EditableTable\uFF09\u662F\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u7EC4\u4EF6\u3002",paraId:1,tocIndex:1}]},64070:function(r,n){n.Z=`import type {
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
    { name: '\u5C0F\u9177', age: 20, gender: 'male' },
    { name: '\u5C0F\u6A31', age: 18, gender: 'female' },
  ]);

  const columns: EditableTableProps<UserInfo>['columns'] = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => {
        return (
          <Form.Item
            style={{ padding: 0, margin: 0 }}
            name={[record.key, 'name']}
            rules={[{ required: true, message: '\u8BF7\u8F93\u5165' }]}
          >
            <Input allowClear placeholder="\u8BF7\u8F93\u5165" />
          </Form.Item>
        );
      },
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      key: 'age',
      render: (_, record) => {
        return (
          <Form.Item
            style={{ padding: 0, margin: 0 }}
            name={[record.key, 'age']}
            rules={[{ required: true, message: '\u8BF7\u8F93\u5165' }]}
          >
            <Input allowClear placeholder="\u8BF7\u8F93\u5165" />
          </Form.Item>
        );
      },
    },
    {
      title: '\u6027\u522B',
      dataIndex: 'gender',
      key: 'gender',
      render: (_, record) => {
        return (
          <Form.Item
            style={{ padding: 0, margin: 0 }}
            name={[record.key, 'gender']}
            rules={[{ required: true, message: '\u8BF7\u9009\u62E9' }]}
          >
            <Select
              allowClear
              options={[
                { label: '\u7537\u751F', value: 'male' },
                { label: '\u5973\u751F', value: 'female' },
              ]}
              placeholder="\u8BF7\u9009\u62E9"
            />
          </Form.Item>
        );
      },
    },
  ];

  return (
    <>
      <Space style={{ width: '100%' }} direction="vertical">
        <Title level={5}>\u5B66\u751F\u5217\u8868</Title>

        <EditableTable<UserInfo>
          formRef={formRef}
          columns={columns}
          value={dataSource}
          onChange={setDataSource}
        />
      </Space>

      <Title level={5}>\u6570\u636E\u9884\u89C8</Title>
      <Typography>
        <pre>{JSON.stringify(dataSource, null, 2)}</pre>
      </Typography>

      <Divider />

      <Paragraph>\u5982\u679C\u60A8\u60F3\u8C03\u7528\u8868\u5355\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7 ref \u6765\u5B9E\u73B0\uFF1A</Paragraph>
      <Button
        type="primary"
        onClick={async () => {
          await formRef.current?.validateFields();
          console.log('\u63D0\u4EA4\u7684\u6570\u636E: ', dataSource);
        }}
      >
        \u8868\u5355\u9A8C\u8BC1
      </Button>
    </>
  );
};

export default App;
`}}]);
