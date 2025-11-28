"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[131],{6364:function(s,r,n){var t;n.r(r),n.d(r,{demos:function(){return M}});var v=n(90228),a=n.n(v),I=n(87999),i=n.n(I),o=n(75271),h=n(52259),m=n(58647),f=n(15058),M={"searchform-demo-base":{component:o.memo(o.lazy(function(){return n.e(343).then(n.bind(n,27433))})),asset:{type:"BLOCK",id:"searchform-demo-base",refAtomIds:["SearchForm"],dependencies:{"index.tsx":{type:"FILE",value:n(75287).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.2"},antd:{type:"NPM",value:"5.27.4"},react:{type:"NPM",value:"18.3.1"},"./helper.tsx":{type:"FILE",value:n(2177).Z}},entry:"index.tsx"},context:{"./helper.tsx":f,"@louhaojie99/pro-components":h,antd:m,react:t||(t=n.t(o,2)),"C:/Users/HJ/Desktop/pro-components/src/SearchForm/demos/helper.tsx":f},renderOpts:{compile:function(){var c=i()(a()().mark(function d(){var l,u=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(222).then(n.bind(n,34222));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,u));case 3:case"end":return e.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"searchform-demo-multiline":{component:o.memo(o.lazy(function(){return n.e(343).then(n.bind(n,72942))})),asset:{type:"BLOCK",id:"searchform-demo-multiline",refAtomIds:["SearchForm"],dependencies:{"index.tsx":{type:"FILE",value:n(58675).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.2"},antd:{type:"NPM",value:"5.27.4"},react:{type:"NPM",value:"18.3.1"},"./helper.tsx":{type:"FILE",value:n(2177).Z}},entry:"index.tsx"},context:{"./helper.tsx":f,"@louhaojie99/pro-components":h,antd:m,react:t||(t=n.t(o,2)),"C:/Users/HJ/Desktop/pro-components/src/SearchForm/demos/helper.tsx":f},renderOpts:{compile:function(){var c=i()(a()().mark(function d(){var l,u=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(222).then(n.bind(n,34222));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,u));case 3:case"end":return e.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"searchform-demo-mixed":{component:o.memo(o.lazy(function(){return n.e(343).then(n.bind(n,55227))})),asset:{type:"BLOCK",id:"searchform-demo-mixed",refAtomIds:["SearchForm"],dependencies:{"index.tsx":{type:"FILE",value:n(72733).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.2"},antd:{type:"NPM",value:"5.27.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":h,antd:m,react:t||(t=n.t(o,2))},renderOpts:{compile:function(){var c=i()(a()().mark(function d(){var l,u=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(222).then(n.bind(n,34222));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,u));case 3:case"end":return e.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}}}},15058:function(s,r,n){n.r(r),n.d(r,{createMockFormItems:function(){return I}});var t=n(69107),v=n(75271),a=n(52676),I=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return Array.from({length:o}).map(function(h,m){return{label:"\u6D4B\u8BD5\u9009\u9879"+m,name:"test"+m,children:(0,a.jsx)(t.Z,{}),rules:[{required:!0}]}})}},57248:function(s,r,n){n.r(r),n.d(r,{texts:function(){return t}});const t=[{value:"\u901A\u7528\u7684\u641C\u7D22\u8868\u5355\u7EC4\u4EF6\uFF0C\u5185\u7F6E\u597D\u7528\u7684\u5E03\u5C40\u6837\u5F0F\uFF0C\u5F00\u7BB1\u5373\u7528\uFF0C\u6EE1\u8DB3\u5E38\u89C1\u7684\u641C\u7D22\u573A\u666F\u9700\u6C42\u3002",paraId:0,tocIndex:0},{value:"\u5F53\u641C\u7D22\u9879\u8D85\u8FC7\u4E00\u884C\u65F6\uFF0C\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u6298\u53E0\u591A\u4F59\u7684\u8868\u5355\u9879\uFF0C\u5E76\u63D0\u4F9B \u201C\u5C55\u5F00/\u6536\u8D77\u201D \u7684\u5207\u6362\u80FD\u529B\u3002",paraId:1,tocIndex:3},{value:"\u6805\u683C\u5E03\u5C40\uFF1A(8/24, 12/24, 6/24)",paraId:2,tocIndex:4}]},75287:function(s,r){r.Z=`import { SearchForm } from '@louhaojie99/pro-components';
import { Table } from 'antd';
import React from 'react';
import { createMockFormItems } from './helper';

const Demo = () => {
  return (
    <>
      <SearchForm
        items={createMockFormItems(2)}
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
`},72733:function(s,r){r.Z=`import { SearchForm, type SearchFormItem } from '@louhaojie99/pro-components';\r
import { Input, Table } from 'antd';\r
import React from 'react';\r
\r
const Demo = () => {\r
  const items: SearchFormItem[] = [\r
    // --- \u7B2C\u4E00\u884C\uFF1A\u7D27\u51D1\u578B (colSpan: 6) ---\r
    // 3\u4E2A\u8F93\u5165\u6846(18\u683C) + \u6309\u94AE\u533A\u57DF(6\u683C) = 24\u683C\uFF0C\u521A\u597D\u4E00\u884C\r
    {\r
      name: 'field_0',\r
      label: '\u6D4B\u8BD5\u9009\u98790',\r
      colSpan: 6,\r
      children: <Input placeholder="colSpan: 6" />,\r
    },\r
    {\r
      name: 'field_1',\r
      label: '\u6D4B\u8BD5\u9009\u98791',\r
      colSpan: 6,\r
      children: <Input placeholder="colSpan: 6" />,\r
    },\r
    {\r
      name: 'field_2',\r
      label: '\u6D4B\u8BD5\u9009\u98792',\r
      colSpan: 6,\r
      children: <Input placeholder="colSpan: 6" />,\r
    },\r
\r
    // --- \u7B2C\u4E8C\u884C\uFF1A\u6807\u51C6\u578B (colSpan: 8) ---\r
    // 3\u4E2A\u8F93\u5165\u6846(24\u683C) = \u521A\u597D\u4E00\u884C\r
    {\r
      name: 'field_3',\r
      label: '\u6D4B\u8BD5\u9009\u98793',\r
      colSpan: 8,\r
      children: <Input placeholder="colSpan: 8" />,\r
    },\r
    {\r
      name: 'field_4',\r
      label: '\u6D4B\u8BD5\u9009\u98794',\r
      colSpan: 8,\r
      children: <Input placeholder="colSpan: 8" />,\r
    },\r
    {\r
      name: 'field_5',\r
      label: '\u6D4B\u8BD5\u9009\u98795',\r
      colSpan: 8,\r
      children: <Input placeholder="colSpan: 8" />,\r
    },\r
\r
    // --- \u7B2C\u4E09\u884C\uFF1A\u5BBD\u578B (colSpan: 12) ---\r
    // 2\u4E2A\u8F93\u5165\u6846(24\u683C) = \u521A\u597D\u4E00\u884C\r
    {\r
      name: 'field_6',\r
      label: '\u6D4B\u8BD5\u9009\u98796',\r
      colSpan: 12,\r
      children: <Input placeholder="colSpan: 12" />,\r
    },\r
    {\r
      name: 'field_7',\r
      label: '\u6D4B\u8BD5\u9009\u98797',\r
      colSpan: 12,\r
      children: <Input placeholder="colSpan: 12" />,\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <SearchForm\r
        items={items}\r
        // \u9ED8\u8BA4\u663E\u793A\u524D3\u4E2A\uFF0C\u521A\u597D\u914D\u5408 colSpan:6 \u5360\u6EE1\u7B2C\u4E00\u884C\r
        defaultVisibleItemCount={5}\r
        showCollapse\r
        onSearch={(values) => console.log('Search:', values)}\r
        onReset={() => console.log('Reset')}\r
      />\r
      <Table\r
        style={{ marginTop: 16 }}\r
        rowKey="field_0"\r
        columns={[\r
          { title: '\u6D4B\u8BD5\u9009\u98790', dataIndex: 'field_0' },\r
          { title: '\u6D4B\u8BD5\u9009\u98791', dataIndex: 'field_1' },\r
          { title: '\u6D4B\u8BD5\u9009\u98796', dataIndex: 'field_6' },\r
        ]}\r
        dataSource={[]}\r
      />\r
    </>\r
  );\r
};\r
\r
export default Demo;\r
`},58675:function(s,r){r.Z=`import { SearchForm } from '@louhaojie99/pro-components';
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
`},2177:function(s,r){r.Z=`import { Input } from 'antd';
import React from 'react';

export const createMockFormItems = (count = 1) =>
  Array.from({
    length: count,
  }).map((_, INDEX) => ({
    label: '\u6D4B\u8BD5\u9009\u9879' + INDEX,
    name: 'test' + INDEX,
    children: <Input />,
    rules: [
      {
        required: true,
      },
    ],
  }));
`}}]);
