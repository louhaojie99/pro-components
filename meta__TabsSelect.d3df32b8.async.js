"use strict";(self.webpackChunk_louhaojie99_pro_components=self.webpackChunk_louhaojie99_pro_components||[]).push([[133],{38127:function(o,e,n){var t;n.r(e),n.d(e,{demos:function(){return m}});var u=n(90228),l=n.n(u),i=n(87999),p=n.n(i),s=n(75271),c=n(52259),m={"tabsselect-demo-demos":{component:s.memo(s.lazy(function(){return n.e(724).then(n.bind(n,77905))})),asset:{type:"BLOCK",id:"tabsselect-demo-demos",refAtomIds:["TabsSelect"],dependencies:{"index.tsx":{type:"FILE",value:n(11013).Z},"@louhaojie99/pro-components":{type:"NPM",value:"1.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/pro-components":c,react:t||(t=n.t(s,2))},renderOpts:{compile:function(){var _=p()(l()().mark(function v(){var a,b=arguments;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(222).then(n.bind(n,34222));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,b));case 3:case"end":return r.stop()}},v)}));function d(){return _.apply(this,arguments)}return d}()}}}},71841:function(o,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]},11013:function(o,e){e.Z=`import { TabsSelect, type TabsSelectProps } from '@louhaojie99/pro-components';\r
import React, { useState } from 'react';\r
\r
const selectOptions: TabsSelectProps['options'] = [\r
  {\r
    tabKey: 'fanren',\r
    tabLabel: '\u51E1\u4EBA\u4FEE\u4ED9\u4F20',\r
    tabOptions: [\r
      {\r
        label: '\u97E9\u7ACB',\r
        value: '1',\r
        item: {\r
          id: '1',\r
          description: '\u4E3B\u89D2\uFF0C\u7075\u6839\u666E\u901A\u4F46\u5FC3\u667A\u575A\u97E7\uFF0C\u64C5\u957F\u70BC\u4E39\u3001\u9635\u6CD5\uFF0C\u4EBA\u79F0"\u97E9\u8001\u9B54"',\r
          cultivation: '\u5927\u4E58\u671F',\r
          specialSkills: ['\u9752\u5143\u5251\u8BC0', '\u7384\u5929\u65A9\u7075\u5251', '\u65F6\u95F4\u6CD5\u5219'],\r
          nickname: '\u97E9\u8DD1\u8DD1',\r
        },\r
      },\r
      {\r
        label: '\u5357\u5BAB\u5A49',\r
        value: '2',\r
        item: {\r
          id: '2',\r
          description: '\u97E9\u7ACB\u9053\u4FA3\uFF0C\u63A9\u6708\u5B97\u5929\u624D\u4FEE\u58EB\uFF0C\u51B0\u7075\u6839',\r
          cultivation: '\u5143\u5A74\u671F',\r
          specialSkills: ['\u51B0\u7CFB\u795E\u901A', '\u53CC\u4FEE\u529F\u6CD5'],\r
          nickname: '\u5357\u5BAB\u4ED9\u5B50',\r
        },\r
      },\r
    ],\r
  },\r
  {\r
    tabKey: 'xianni',\r
    tabLabel: '\u4ED9\u9006',\r
    tabOptions: [\r
      {\r
        label: '\u738B\u6797',\r
        value: '4',\r
        item: {\r
          id: '4',\r
          description: '\u4E3B\u89D2\uFF0C\u56E0\u5BB6\u65CF\u88AB\u706D\u8E0F\u4E0A\u4FEE\u4ED9\u8DEF\uFF0C\u6027\u683C\u51B7\u9177\u679C\u65AD',\r
          cultivation: '\u8E0F\u5929\u5883',\r
          specialSkills: ['\u6740\u622E\u4ED9\u8BC0', '\u53E4\u795E\u4E4B\u4F53', '\u56E0\u679C\u4E4B\u9053'],\r
          nickname: '\u738B\u8001\u9B54',\r
        },\r
      },\r
      {\r
        label: '\u674E\u6155\u5A49',\r
        value: '5',\r
        item: {\r
          id: '5',\r
          description: '\u738B\u6797\u631A\u7231\uFF0C\u6E29\u67D4\u5584\u826F\uFF0C\u56E0\u7279\u6B8A\u4F53\u8D28\u88AB\u5404\u65B9\u89CA\u89CE',\r
          cultivation: '\u5316\u795E\u671F',\r
          specialSkills: ['\u70BC\u4E39\u672F'],\r
          nickname: '\u5A49\u513F',\r
        },\r
      },\r
    ],\r
  },\r
];\r
\r
const App: React.FC = () => {\r
  const [value, setValue] = useState<TabsSelectProps['value']>({\r
    activeTab: 'fanren',\r
    selectValue: { value: '1' },\r
  });\r
  const [values, setValues] = useState<TabsSelectProps['value']>({\r
    activeTab: 'fanren',\r
    selectValue: [{ value: '1' }],\r
  });\r
\r
  console.log('value: ', value);\r
  console.log('values: ', values);\r
\r
  return (\r
    <div>\r
      <h4>\u5355\u9009\uFF1A</h4>\r
      <TabsSelect\r
        style={{ width: 400 }}\r
        value={value}\r
        options={selectOptions}\r
        onChange={setValue}\r
      />\r
\r
      <h4>\u591A\u9009\uFF1A</h4>\r
      <TabsSelect\r
        style={{ width: 400 }}\r
        mode="multiple"\r
        value={values}\r
        options={selectOptions}\r
        onChange={setValues}\r
      />\r
    </div>\r
  );\r
};\r
\r
export default App;\r
`}}]);
