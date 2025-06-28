"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[862],{1489:function(t,e,n){var r;n.r(e),n.d(e,{demos:function(){return i}});var l=n(90228),a=n.n(l),u=n(87999),_=n.n(u),s=n(75271),P=n(78346),c=n(44526),d=n(33628),p=n(43112),i={"collapseselect-demo-demos":{component:s.memo(s.lazy(function(){return n.e(957).then(n.bind(n,47262))})),asset:{type:"BLOCK",id:"collapseselect-demo-demos",refAtomIds:["CollapseSelect"],dependencies:{"index.tsx":{type:"FILE",value:n(70798).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.0"},antd:{type:"NPM",value:"5.22.7"},react:{type:"NPM",value:"18.3.1"},"./mock.ts":{type:"FILE",value:n(90882).Z}},entry:"index.tsx"},context:{"./mock.ts":p,"@louhaojie99/pro-components":c,antd:d,react:r||(r=n.t(s,2)),"C:/Users/HJ/Desktop/ProComponents/pro-components/src/CollapseSelect/demos/mock.ts":p},renderOpts:{compile:function(){var v=_()(a()().mark(function h(){var m,D=arguments;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(652).then(n.bind(n,43652));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,D));case 3:case"end":return o.stop()}},h)}));function C(){return v.apply(this,arguments)}return C}()}}}},43112:function(t,e,n){n.r(e),n.d(e,{mockOptions:function(){return r}});var r=[{panelKey:"performance",panelLabel:"\u6027\u80FD\u4F18\u5316",panelOptions:[{label:"\u61D2\u52A0\u8F7D - \u8D44\u6E90\u6309\u9700\u52A0\u8F7D",value:"lazy-loading"},{label:"Immutable \u6570\u636E - \u65E0\u526F\u4F5C\u7528\u7684\u6570\u636E\u5904\u7406",value:"immutable"},{label:"Tree Shaking - \u7CBE\u7B80\u4EE3\u7801\u5305",value:"tree-shaking"},{label:"CDN - \u9759\u6001\u8D44\u6E90\u52A0\u901F",value:"cdn"}]},{panelKey:"engineering",panelLabel:"\u5DE5\u7A0B\u5316\u5B9E\u8DF5",panelOptions:[{label:"CI/CD - \u6301\u7EED\u96C6\u6210\u4E0E\u6301\u7EED\u90E8\u7F72",value:"ci-cd"},{label:"TDD - \u6D4B\u8BD5\u9A71\u52A8\u5F00\u53D1",value:"tdd"},{label:"Monorepo - \u591A\u9879\u76EE\u7684\u7EDF\u4E00\u7BA1\u7406",value:"monorepo"},{label:"ESLint/Prettier - \u4EE3\u7801\u8D28\u91CF",value:"linting"}]}]},59613:function(t,e,n){n.r(e),n.d(e,{texts:function(){return l}});var r=n(78346);const l=[{value:"\u901A\u7528\u7684\u6298\u53E0\u9009\u62E9\u5668\u7EC4\u4EF6",paraId:0,tocIndex:0}]},70798:function(t,e){e.Z=`import type { CollapseSelectProps } from '@louhaojie99/pro-components';\r
import { CollapseSelect } from '@louhaojie99/pro-components';\r
import type { FormProps } from 'antd';\r
import { Button, Form } from 'antd';\r
import React, { useState } from 'react';\r
import { mockOptions } from './mock';\r
\r
const Demo = () => {\r
  // \u5355\u9009\r
  const [value, setValue] = useState<CollapseSelectProps['value']>({\r
    activeKey: undefined,\r
    selectValue: undefined,\r
  });\r
  console.log('\u5355\u9009: ', value);\r
\r
  // \u591A\u9009\r
  const [values, setValues] = useState<CollapseSelectProps['value']>({\r
    activeKey: undefined,\r
    selectValue: undefined,\r
  });\r
  console.log('\u591A\u9009: ', values);\r
\r
  const handleSubmit: FormProps['onFinish'] = (formResult) => {\r
    console.log('\u8868\u5355\u63D0\u4EA4: ', formResult);\r
  };\r
\r
  return (\r
    <>\r
      <p>\r
        <h2>\u5355\u9009: </h2>\r
        <CollapseSelect\r
          style={{ width: 300 }}\r
          options={mockOptions}\r
          value={value}\r
          onChange={setValue}\r
        />\r
      </p>\r
\r
      <br />\r
      <br />\r
      <br />\r
\r
      <p>\r
        <h2>\u591A\u9009: </h2>\r
        <CollapseSelect\r
          style={{ width: 300 }}\r
          options={mockOptions}\r
          value={values}\r
          onChange={setValues}\r
          mode="multiple"\r
        />\r
      </p>\r
\r
      <br />\r
      <br />\r
      <br />\r
\r
      <p>\r
        <h2>\u8868\u5355\u4E2D\u4F7F\u7528: </h2>\r
        <Form onFinish={handleSubmit}>\r
          <Form.Item name="select">\r
            <CollapseSelect style={{ width: 300 }} options={mockOptions} />\r
          </Form.Item>\r
\r
          <Button type="primary" htmlType="submit">\r
            \u63D0\u4EA4\r
          </Button>\r
        </Form>\r
      </p>\r
    </>\r
  );\r
};\r
\r
export default Demo;\r
`},90882:function(t,e){e.Z=`export const mockOptions = [\r
  {\r
    panelKey: 'performance',\r
    panelLabel: '\u6027\u80FD\u4F18\u5316',\r
    panelOptions: [\r
      {\r
        label: '\u61D2\u52A0\u8F7D - \u8D44\u6E90\u6309\u9700\u52A0\u8F7D',\r
        value: 'lazy-loading',\r
      },\r
      {\r
        label: 'Immutable \u6570\u636E - \u65E0\u526F\u4F5C\u7528\u7684\u6570\u636E\u5904\u7406',\r
        value: 'immutable',\r
      },\r
      {\r
        label: 'Tree Shaking - \u7CBE\u7B80\u4EE3\u7801\u5305',\r
        value: 'tree-shaking',\r
      },\r
      {\r
        label: 'CDN - \u9759\u6001\u8D44\u6E90\u52A0\u901F',\r
        value: 'cdn',\r
      },\r
    ],\r
  },\r
  {\r
    panelKey: 'engineering',\r
    panelLabel: '\u5DE5\u7A0B\u5316\u5B9E\u8DF5',\r
    panelOptions: [\r
      {\r
        label: 'CI/CD - \u6301\u7EED\u96C6\u6210\u4E0E\u6301\u7EED\u90E8\u7F72',\r
        value: 'ci-cd',\r
      },\r
      {\r
        label: 'TDD - \u6D4B\u8BD5\u9A71\u52A8\u5F00\u53D1',\r
        value: 'tdd',\r
      },\r
      {\r
        label: 'Monorepo - \u591A\u9879\u76EE\u7684\u7EDF\u4E00\u7BA1\u7406',\r
        value: 'monorepo',\r
      },\r
      {\r
        label: 'ESLint/Prettier - \u4EE3\u7801\u8D28\u91CF',\r
        value: 'linting',\r
      },\r
    ],\r
  },\r
];\r
`}}]);
