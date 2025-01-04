import type { AsyncButtonProps } from '@louhaojie99/pro-components';
import { AsyncButton } from '@louhaojie99/pro-components';
import React from 'react';

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const App: React.FC = () => {
  const handleClick: AsyncButtonProps['onClick'] = async () => {
    await sleep(2000);
  };

  return (
    <div>
      <AsyncButton type="primary" onClick={handleClick}>
        AsyncButton
      </AsyncButton>
    </div>
  );
};

export default App;
