"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[131],{6364:function(m,n,e){var t;e.r(n),e.d(n,{demos:function(){return v}});var _=e(90228),s=e.n(_),c=e(87999),p=e.n(c),r=e(75271),d=e(52259),a=e(58647),u=e(15058),v={"searchform-demo-base":{component:r.memo(r.lazy(function(){return e.e(343).then(e.bind(e,27433))})),asset:{type:"BLOCK",id:"searchform-demo-base",refAtomIds:["SearchForm"],dependencies:{"index.tsx":{type:"FILE",value:e(75287).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.2"},antd:{type:"NPM",value:"5.27.4"},react:{type:"NPM",value:"18.3.1"},"./helper.tsx":{type:"FILE",value:e(2177).Z}},entry:"index.tsx"},context:{"./helper.tsx":u,"@louhaojie99/pro-components":d,antd:a,react:t||(t=e.t(r,2)),"C:/Users/HJ/Desktop/pro-components/src/SearchForm/demos/helper.tsx":u},renderOpts:{compile:function(){var i=p()(s()().mark(function f(){var l,E=arguments;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(222).then(e.bind(e,34222));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,E));case 3:case"end":return o.stop()}},f)}));function h(){return i.apply(this,arguments)}return h}()}},"searchform-demo-multiline":{component:r.memo(r.lazy(function(){return e.e(343).then(e.bind(e,72942))})),asset:{type:"BLOCK",id:"searchform-demo-multiline",refAtomIds:["SearchForm"],dependencies:{"index.tsx":{type:"FILE",value:e(58675).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.2"},antd:{type:"NPM",value:"5.27.4"},react:{type:"NPM",value:"18.3.1"},"./helper.tsx":{type:"FILE",value:e(2177).Z}},entry:"index.tsx"},context:{"./helper.tsx":u,"@louhaojie99/pro-components":d,antd:a,react:t||(t=e.t(r,2)),"C:/Users/HJ/Desktop/pro-components/src/SearchForm/demos/helper.tsx":u},renderOpts:{compile:function(){var i=p()(s()().mark(function f(){var l,E=arguments;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(222).then(e.bind(e,34222));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,E));case 3:case"end":return o.stop()}},f)}));function h(){return i.apply(this,arguments)}return h}()}}}},15058:function(m,n,e){e.r(n),e.d(n,{createMockFormItems:function(){return c}});var t=e(69107),_=e(75271),s=e(52676),c=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return Array.from({length:r}).map(function(d,a){return{label:"\u6D4B\u8BD5\u9009\u9879"+a,name:"test"+a,children:(0,s.jsx)(t.Z,{}),rules:[{required:!0}]}})}},57248:function(m,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u901A\u7528\u7684\u641C\u7D22\u8868\u5355\u7EC4\u4EF6\uFF0C\u5185\u7F6E\u597D\u7528\u7684\u5E03\u5C40\u6837\u5F0F\uFF0C\u5F00\u7BB1\u5373\u7528\uFF0C\u6EE1\u8DB3\u5E38\u89C1\u7684\u641C\u7D22\u573A\u666F\u9700\u6C42\u3002",paraId:0,tocIndex:0},{value:"\u5F53\u641C\u7D22\u9879\u8D85\u8FC7\u4E00\u884C\u65F6\uFF0C\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u6298\u53E0\u591A\u4F59\u7684\u8868\u5355\u9879\uFF0C\u5E76\u63D0\u4F9B \u201C\u5C55\u5F00/\u6536\u8D77\u201D \u7684\u5207\u6362\u80FD\u529B\u3002",paraId:1,tocIndex:3}]},75287:function(m,n){n.Z=`import { SearchForm } from '@louhaojie99/pro-components';
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
`},58675:function(m,n){n.Z=`import { SearchForm } from '@louhaojie99/pro-components';
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
`},2177:function(m,n){n.Z=`import { Input } from 'antd';
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
