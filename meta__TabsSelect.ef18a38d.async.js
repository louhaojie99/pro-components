"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[2096],{91495:function(a,e,n){var o;n.r(e),n.d(e,{demos:function(){return c}});var u=n(90228),l=n.n(u),p=n(87999),r=n.n(p),s=n(75271),m=n(65850),c={"tabsselect-demo-demos":{component:s.memo(s.lazy(function(){return n.e(1724).then(n.bind(n,40235))})),asset:{type:"BLOCK",id:"tabsselect-demo-demos",refAtomIds:["TabsSelect"],dependencies:{"index.tsx":{type:"FILE",value:n(79003).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":m,react:o||(o=n.t(s,2))},renderOpts:{compile:function(){var d=r()(l()().mark(function b(){var i,v=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7457).then(n.bind(n,77457));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,v));case 3:case"end":return t.stop()}},b)}));function _(){return d.apply(this,arguments)}return _}()}}}},50685:function(a,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"\u57FA\u4E8E Ant Design Select \u5C01\u88C5\u7684\u5E26\u9009\u9879\u5361\u5207\u6362\u529F\u80FD\u7684\u4E0B\u62C9\u9009\u62E9\u5668\u3002",paraId:0,tocIndex:0},{value:"\u6570\u636E\u552F\u4E00\u6027\uFF08\u81F3\u5173\u91CD\u8981\uFF09\u7531\u4E8E\u7EC4\u4EF6\u652F\u6301\u8DE8 Tab \u56DE\u663E\u4EE5\u53CA\u6784\u5EFA \u201C\u5168\u90E8\u201D \u9009\u9879\u5361\uFF0C\u6240\u6709\u9009\u9879\u7684 value \u5FC5\u987B\u5728\u5168\u5C40\u8303\u56F4\u5185\u552F\u4E00\u3002",paraId:1,tocIndex:1}]},79003:function(a,e){e.Z=`import { TabsSelect, type TabsSelectProps } from '@louhaojie99/pro-components';
import React, { useMemo, useState } from 'react';

const baseOptions: TabsSelectProps['options'] = [
  {
    tabKey: 'fanren',
    tabLabel: '\u51E1\u4EBA\u4FEE\u4ED9\u4F20',
    tabOptions: [
      {
        label: '\u97E9\u7ACB',
        value: '1',
        item: {
          id: '1',
          description: '\u4E3B\u89D2\uFF0C\u7075\u6839\u666E\u901A\u4F46\u5FC3\u667A\u575A\u97E7\uFF0C\u64C5\u957F\u70BC\u4E39\u3001\u9635\u6CD5\uFF0C\u4EBA\u79F0"\u97E9\u8001\u9B54"',
          cultivation: '\u5927\u4E58\u671F',
          specialSkills: ['\u9752\u5143\u5251\u8BC0', '\u7384\u5929\u65A9\u7075\u5251', '\u65F6\u95F4\u6CD5\u5219'],
          nickname: '\u97E9\u8DD1\u8DD1',
        },
      },
      {
        label: '\u5357\u5BAB\u5A49',
        value: '2',
        item: {
          id: '2',
          description: '\u97E9\u7ACB\u9053\u4FA3\uFF0C\u63A9\u6708\u5B97\u5929\u624D\u4FEE\u58EB\uFF0C\u51B0\u7075\u6839',
          cultivation: '\u5143\u5A74\u671F',
          specialSkills: ['\u51B0\u7CFB\u795E\u901A', '\u53CC\u4FEE\u529F\u6CD5'],
          nickname: '\u5357\u5BAB\u4ED9\u5B50',
        },
      },
    ],
  },
  {
    tabKey: 'xianni',
    tabLabel: '\u4ED9\u9006',
    tabOptions: [
      {
        label: '\u738B\u6797',
        value: '4',
        item: {
          id: '4',
          description: '\u4E3B\u89D2\uFF0C\u56E0\u5BB6\u65CF\u88AB\u706D\u8E0F\u4E0A\u4FEE\u4ED9\u8DEF\uFF0C\u6027\u683C\u51B7\u9177\u679C\u65AD',
          cultivation: '\u8E0F\u5929\u5883',
          specialSkills: ['\u6740\u622E\u4ED9\u8BC0', '\u53E4\u795E\u4E4B\u4F53', '\u56E0\u679C\u4E4B\u9053'],
          nickname: '\u738B\u8001\u9B54',
        },
      },
      {
        label: '\u674E\u6155\u5A49',
        value: '5',
        item: {
          id: '5',
          description: '\u738B\u6797\u631A\u7231\uFF0C\u6E29\u67D4\u5584\u826F\uFF0C\u56E0\u7279\u6B8A\u4F53\u8D28\u88AB\u5404\u65B9\u89CA\u89CE',
          cultivation: '\u5316\u795E\u671F',
          specialSkills: ['\u70BC\u4E39\u672F'],
          nickname: '\u5A49\u513F',
        },
      },
    ],
  },
];

const App: React.FC = () => {
  // \u5355\u9009\u72B6\u6001
  const [singleValue, setSingleValue] = useState<TabsSelectProps['value']>({
    activeTab: 'all',
    selectValue: undefined,
  });

  // \u591A\u9009\u72B6\u6001
  const [multiValue, setMultiValue] = useState<TabsSelectProps['value']>({
    activeTab: 'all',
    selectValue: [],
  });

  const options = useMemo(() => {
    // \u63D0\u53D6\u6240\u6709 Tab \u4E0B\u7684 options \u5E76\u6241\u5E73\u5316
    const allOptions = baseOptions.flatMap((tab) => tab.tabOptions || []);

    return [
      {
        tabKey: 'all',
        tabLabel: '\u5168\u90E8',
        tabOptions: allOptions,
      },
      ...baseOptions,
    ];
  }, [baseOptions]);

  console.log('singleValue: ', singleValue);
  console.log('values: ', multiValue);

  return (
    <div>
      <h4>\u5355\u9009\uFF1A</h4>
      <TabsSelect
        style={{ width: 400 }}
        value={singleValue}
        options={options}
        onChange={setSingleValue}
      />

      <h4>\u591A\u9009\uFF1A</h4>
      <TabsSelect
        style={{ width: 400 }}
        mode="multiple"
        value={multiValue}
        options={options}
        onChange={setMultiValue}
      />
    </div>
  );
};

export default App;
`}}]);
