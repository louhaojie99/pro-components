"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[316],{47486:function(a,n,e){var t;e.r(n),e.d(n,{demos:function(){return _}});var m=e(90228),l=e.n(m),d=e(87999),u=e.n(d),o=e(75271),p=e(8892),i=e(25327),_={"editabletable-demo-demos":{component:o.memo(o.lazy(function(){return e.e(794).then(e.bind(e,29084))})),asset:{type:"BLOCK",id:"editabletable-demo-demos",refAtomIds:["EditableTable"],dependencies:{"index.tsx":{type:"FILE",value:e(23833).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.2"},antd:{type:"NPM",value:"5.27.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":p,antd:i,react:t||(t=e.t(o,2))},renderOpts:{compile:function(){var c=u()(l()().mark(function g(){var s,y=arguments;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(222).then(e.bind(e,34222));case 2:return r.abrupt("return",(s=r.sent).default.apply(s,y));case 3:case"end":return r.stop()}},g)}));function f(){return c.apply(this,arguments)}return f}()}}}},37367:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u53EF\u7F16\u8F91\u8868\u683C",paraId:0,tocIndex:0},{value:"\u5F53\u60A8\u9700\u8981\u5728\u4E00\u4E2A\u7528\u6237\u754C\u9762\u4E2D\u5BF9\u8868\u683C\u6570\u636E\u8FDB\u884C\u5373\u65F6\u7F16\u8F91\u548C\u66F4\u65B0\u65F6\uFF0C\u53EF\u7F16\u8F91\u8868\u683C\uFF08EditableTable\uFF09\u662F\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u7EC4\u4EF6\u3002",paraId:1,tocIndex:1}]},23833:function(a,n){n.Z=`import type {\r
  EditableTableProps,\r
  EditableTableRef,\r
} from '@louhaojie99/pro-components';\r
import { EditableTable } from '@louhaojie99/pro-components';\r
import { Button, Divider, Form, Input, Select, Space, Typography } from 'antd';\r
import React, { useRef, useState } from 'react';\r
\r
const { Title, Paragraph } = Typography;\r
\r
type UserInfo = {\r
  name: string;\r
  age: number;\r
  gender: 'male' | 'female';\r
};\r
\r
const App: React.FC = () => {\r
  const formRef = useRef<EditableTableRef<UserInfo>>(null);\r
\r
  const [dataSource, setDataSource] = useState<UserInfo[]>([\r
    { name: '\u5C0F\u9177', age: 20, gender: 'male' },\r
    { name: '\u5C0F\u6A31', age: 18, gender: 'female' },\r
  ]);\r
\r
  const columns: EditableTableProps<UserInfo>['columns'] = [\r
    {\r
      title: '\u59D3\u540D',\r
      dataIndex: 'name',\r
      key: 'name',\r
      render: (_, record) => {\r
        return (\r
          <Form.Item\r
            style={{ padding: 0, margin: 0 }}\r
            name={[record.key, 'name']}\r
            rules={[{ required: true, message: '\u8BF7\u8F93\u5165' }]}\r
          >\r
            <Input allowClear placeholder="\u8BF7\u8F93\u5165" />\r
          </Form.Item>\r
        );\r
      },\r
    },\r
    {\r
      title: '\u5E74\u9F84',\r
      dataIndex: 'age',\r
      key: 'age',\r
      render: (_, record) => {\r
        return (\r
          <Form.Item\r
            style={{ padding: 0, margin: 0 }}\r
            name={[record.key, 'age']}\r
            rules={[{ required: true, message: '\u8BF7\u8F93\u5165' }]}\r
          >\r
            <Input allowClear placeholder="\u8BF7\u8F93\u5165" />\r
          </Form.Item>\r
        );\r
      },\r
    },\r
    {\r
      title: '\u6027\u522B',\r
      dataIndex: 'gender',\r
      key: 'gender',\r
      render: (_, record) => {\r
        return (\r
          <Form.Item\r
            style={{ padding: 0, margin: 0 }}\r
            name={[record.key, 'gender']}\r
            rules={[{ required: true, message: '\u8BF7\u9009\u62E9' }]}\r
          >\r
            <Select\r
              allowClear\r
              options={[\r
                { label: '\u7537\u751F', value: 'male' },\r
                { label: '\u5973\u751F', value: 'female' },\r
              ]}\r
              placeholder="\u8BF7\u9009\u62E9"\r
            />\r
          </Form.Item>\r
        );\r
      },\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <Space style={{ width: '100%' }} direction="vertical">\r
        <Title level={5}>\u5B66\u751F\u5217\u8868</Title>\r
\r
        <EditableTable<UserInfo>\r
          formRef={formRef}\r
          columns={columns}\r
          value={dataSource}\r
          onChange={setDataSource}\r
        />\r
      </Space>\r
\r
      <Title level={5}>\u6570\u636E\u9884\u89C8</Title>\r
      <Typography>\r
        <pre>{JSON.stringify(dataSource, null, 2)}</pre>\r
      </Typography>\r
\r
      <Divider />\r
\r
      <Paragraph>\u5982\u679C\u60A8\u60F3\u8C03\u7528\u8868\u5355\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7 ref \u6765\u5B9E\u73B0\uFF1A</Paragraph>\r
      <Button\r
        type="primary"\r
        onClick={async () => {\r
          await formRef.current?.validateFields();\r
          console.log('\u63D0\u4EA4\u7684\u6570\u636E: ', dataSource);\r
        }}\r
      >\r
        \u8868\u5355\u9A8C\u8BC1\r
      </Button>\r
    </>\r
  );\r
};\r
\r
export default App;\r
`}}]);
