import { HOCS } from '@louhaojie99/pro-components';
import { Select } from 'antd';
import React from 'react';

const { optionInValueSelect } = HOCS;

const UserSelect = optionInValueSelect((props) => {
  return (
    <Select
      {...props}
      options={[
        {
          label: '小酷',
          value: '1',
          item: {
            like: '小樱',
          },
        },
        {
          label: '小樱',
          value: '2',
          item: {
            like: '小酷',
          },
        },
      ]}
    />
  );
});

const App: React.FC = () => {
  return (
    <>
      <UserSelect
        style={{
          width: 200,
        }}
        optionInValue
        onChange={(val) => {
          console.log('change: ', val);
        }}
      />
    </>
  );
};

export default App;
