import { TabsSelect, type TabsSelectProps } from '@louhaojie99/pro-components';
import React, { useState } from 'react';

const selectOptions: TabsSelectProps['options'] = [
  {
    tabKey: 'tab1',
    tabLabel: '男生',
    tabOptions: [
      {
        label: '小酷',
        value: '1',
        item: {
          id: '1',
          description: '这里可以放置选中后的跟更多信息...',
        },
      },
      {
        label: '小张',
        value: '2',
        item: {
          id: '2',
          description: '这里可以放置选中后的跟更多信息...',
        },
      },
    ],
  },
  {
    tabKey: 'tab2',
    tabLabel: '女生',
    tabOptions: [
      {
        label: '小樱',
        value: '3',
        item: {
          id: '3',
          description: '这里可以放置选中后的跟更多信息...',
        },
      },
      {
        label: '小刘',
        value: '4',
        item: {
          id: '4',
          description: '这里可以放置选中后的跟更多信息...',
        },
      },
    ],
  },
];

const App: React.FC = () => {
  const [value, setValue] = useState<TabsSelectProps['value']>({
    activeTab: 'tab1',
    selectValue: { value: '1' },
  });
  const [values, setValues] = useState<TabsSelectProps['value']>({
    activeTab: 'tab1',
    selectValue: [{ value: '1' }],
  });

  console.log('value: ', value);
  console.log('values: ', values);

  return (
    <div>
      <h4>单选：</h4>
      <TabsSelect
        style={{ width: 400 }}
        value={value}
        options={selectOptions}
        onChange={setValue}
      />

      <h4>多选：</h4>
      <TabsSelect
        style={{ width: 400 }}
        mode="multiple"
        value={values}
        options={selectOptions}
        onChange={setValues}
      />
    </div>
  );
};

export default App;
