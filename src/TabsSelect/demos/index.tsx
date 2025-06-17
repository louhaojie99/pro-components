import { TabsSelect, type TabsSelectProps } from '@louhaojie99/pro-components';
import React, { useState } from 'react';

const selectOptions: TabsSelectProps['options'] = [
  {
    tabKey: 'fanren',
    tabLabel: '凡人修仙传',
    tabOptions: [
      {
        label: '韩立（韩跑跑）',
        value: '1',
        item: {
          id: '1',
          description: '主角，灵根普通但心智坚韧，擅长炼丹、阵法，人称"韩老魔"',
          cultivation: '大乘期',
          specialSkills: ['青元剑诀', '玄天斩灵剑', '时间法则'],
          nickname: '韩跑跑',
        },
      },
      {
        label: '南宫婉',
        value: '2',
        item: {
          id: '2',
          description: '韩立道侣，掩月宗天才修士，冰灵根',
          cultivation: '元婴期',
          specialSkills: ['冰系神通', '双修功法'],
          nickname: '南宫仙子',
        },
      },
    ],
  },
  {
    tabKey: 'xianni',
    tabLabel: '仙逆',
    tabOptions: [
      {
        label: '王林',
        value: '4',
        item: {
          id: '4',
          description: '主角，因家族被灭踏上修仙路，性格冷酷果断',
          cultivation: '踏天境',
          specialSkills: ['杀戮仙诀', '古神之体', '因果之道'],
          nickname: '王老魔',
        },
      },
      {
        label: '李慕婉',
        value: '5',
        item: {
          id: '5',
          description: '王林挚爱，温柔善良，因特殊体质被各方觊觎',
          cultivation: '化神期',
          specialSkills: ['炼丹术'],
          nickname: '婉儿',
        },
      },
    ],
  },
];

const App: React.FC = () => {
  const [value, setValue] = useState<TabsSelectProps['value']>({
    activeTab: 'fanren',
    selectValue: { value: '1' },
  });
  const [values, setValues] = useState<TabsSelectProps['value']>({
    activeTab: 'fanren',
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
