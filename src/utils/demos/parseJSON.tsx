import { utils } from '@louhaojie99/pro-components';
import React from 'react';

type User = { name: string; age: number };

const { parseJSON } = utils;

const App: React.FC = () => {
  const userJsonString = JSON.stringify({ name: '小酷', age: 20 });
  const userListJsonString = JSON.stringify([{ name: '小酷', age: 20 }]);

  const parsedUser = parseJSON<User>(userJsonString, {});
  const parsedUserList = parseJSON<User[]>(userListJsonString, []);

  return (
    <div>
      <pre>{JSON.stringify(parsedUser, null, 2)}</pre>

      <br />

      <pre>{JSON.stringify(parsedUserList, null, 2)}</pre>
    </div>
  );
};

export default App;
