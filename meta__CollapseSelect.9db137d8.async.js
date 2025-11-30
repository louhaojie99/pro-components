"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[862],{15368:function(t,e,n){var o;n.r(e),n.d(e,{demos:function(){return _}});var r=n(90228),s=n.n(r),u=n(87999),i=n.n(u),a=n(75271),d=n(87615),c=n(43489),p=n(89458),_={"collapseselect-demo-demos":{component:a.memo(a.lazy(function(){return n.e(957).then(n.bind(n,35777))})),asset:{type:"BLOCK",id:"collapseselect-demo-demos",refAtomIds:["CollapseSelect"],dependencies:{"index.tsx":{type:"FILE",value:n(73771).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.3"},antd:{type:"NPM",value:"5.29.1"},react:{type:"NPM",value:"18.3.1"},"./mock.ts":{type:"FILE",value:n(84768).Z}},entry:"index.tsx"},context:{"./mock.ts":p,"@louhaojie99/pro-components":d,antd:c,react:o||(o=n.t(a,2)),"/Users/hj/Desktop/pro-components/src/CollapseSelect/demos/mock.ts":p},renderOpts:{compile:function(){var v=i()(s()().mark(function b(){var m,f=arguments;return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(788).then(n.bind(n,53788));case 2:return l.abrupt("return",(m=l.sent).default.apply(m,f));case 3:case"end":return l.stop()}},b)}));function h(){return v.apply(this,arguments)}return h}()}}}},89458:function(t,e,n){n.r(e),n.d(e,{mockOptions:function(){return o}});var o=[{panelKey:"performance",panelLabel:"\u6027\u80FD\u4F18\u5316",panelOptions:[{label:"\u61D2\u52A0\u8F7D - \u8D44\u6E90\u6309\u9700\u52A0\u8F7D",value:"lazy-loading"},{label:"Immutable \u6570\u636E - \u65E0\u526F\u4F5C\u7528\u7684\u6570\u636E\u5904\u7406",value:"immutable"},{label:"Tree Shaking - \u7CBE\u7B80\u4EE3\u7801\u5305",value:"tree-shaking"},{label:"CDN - \u9759\u6001\u8D44\u6E90\u52A0\u901F",value:"cdn"}]},{panelKey:"engineering",panelLabel:"\u5DE5\u7A0B\u5316\u5B9E\u8DF5",panelOptions:[{label:"CI/CD - \u6301\u7EED\u96C6\u6210\u4E0E\u6301\u7EED\u90E8\u7F72",value:"ci-cd"},{label:"TDD - \u6D4B\u8BD5\u9A71\u52A8\u5F00\u53D1",value:"tdd"},{label:"Monorepo - \u591A\u9879\u76EE\u7684\u7EDF\u4E00\u7BA1\u7406",value:"monorepo"},{label:"ESLint/Prettier - \u4EE3\u7801\u8D28\u91CF",value:"linting"}]}]},94584:function(t,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"\u901A\u7528\u7684\u6298\u53E0\u9009\u62E9\u5668\u7EC4\u4EF6",paraId:0,tocIndex:0}]},73771:function(t,e){e.Z=`import type { CollapseSelectProps } from '@louhaojie99/pro-components';
import { CollapseSelect } from '@louhaojie99/pro-components';
import type { FormProps } from 'antd';
import { Button, Form } from 'antd';
import React, { useState } from 'react';
import { mockOptions } from './mock';

const Demo = () => {
  // \u5355\u9009
  const [value, setValue] = useState<CollapseSelectProps['value']>({
    activeKey: undefined,
    selectValue: undefined,
  });
  console.log('\u5355\u9009: ', value);

  // \u591A\u9009
  const [values, setValues] = useState<CollapseSelectProps['value']>({
    activeKey: undefined,
    selectValue: undefined,
  });
  console.log('\u591A\u9009: ', values);

  const handleSubmit: FormProps['onFinish'] = (formResult) => {
    console.log('\u8868\u5355\u63D0\u4EA4: ', formResult);
  };

  return (
    <>
      <p>
        <h2>\u5355\u9009: </h2>
        <CollapseSelect
          style={{ width: 300 }}
          options={mockOptions}
          value={value}
          onChange={setValue}
        />
      </p>

      <br />
      <br />
      <br />

      <p>
        <h2>\u591A\u9009: </h2>
        <CollapseSelect
          style={{ width: 300 }}
          options={mockOptions}
          value={values}
          onChange={setValues}
          mode="multiple"
        />
      </p>

      <br />
      <br />
      <br />

      <p>
        <h2>\u8868\u5355\u4E2D\u4F7F\u7528: </h2>
        <Form onFinish={handleSubmit}>
          <Form.Item name="select">
            <CollapseSelect style={{ width: 300 }} options={mockOptions} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            \u63D0\u4EA4
          </Button>
        </Form>
      </p>
    </>
  );
};

export default Demo;
`},84768:function(t,e){e.Z=`export const mockOptions = [
  {
    panelKey: 'performance',
    panelLabel: '\u6027\u80FD\u4F18\u5316',
    panelOptions: [
      {
        label: '\u61D2\u52A0\u8F7D - \u8D44\u6E90\u6309\u9700\u52A0\u8F7D',
        value: 'lazy-loading',
      },
      {
        label: 'Immutable \u6570\u636E - \u65E0\u526F\u4F5C\u7528\u7684\u6570\u636E\u5904\u7406',
        value: 'immutable',
      },
      {
        label: 'Tree Shaking - \u7CBE\u7B80\u4EE3\u7801\u5305',
        value: 'tree-shaking',
      },
      {
        label: 'CDN - \u9759\u6001\u8D44\u6E90\u52A0\u901F',
        value: 'cdn',
      },
    ],
  },
  {
    panelKey: 'engineering',
    panelLabel: '\u5DE5\u7A0B\u5316\u5B9E\u8DF5',
    panelOptions: [
      {
        label: 'CI/CD - \u6301\u7EED\u96C6\u6210\u4E0E\u6301\u7EED\u90E8\u7F72',
        value: 'ci-cd',
      },
      {
        label: 'TDD - \u6D4B\u8BD5\u9A71\u52A8\u5F00\u53D1',
        value: 'tdd',
      },
      {
        label: 'Monorepo - \u591A\u9879\u76EE\u7684\u7EDF\u4E00\u7BA1\u7406',
        value: 'monorepo',
      },
      {
        label: 'ESLint/Prettier - \u4EE3\u7801\u8D28\u91CF',
        value: 'linting',
      },
    ],
  },
];
`}}]);
