/**
 * 一个支持异步的按钮，onClick 传入异步函数则自动显示loading
 */
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import React, { useState } from 'react';

type ClickArgs = Parameters<Required<ButtonProps>['onClick']>;

export interface AsyncButtonProps extends ButtonProps {
  onClick?: (...args: ClickArgs) => Promise<any> | void;
}

export const AsyncButton = React.memo<AsyncButtonProps>((props) => {
  const { onClick, ...restProps } = props;
  const [loading, setLoading] = useState<boolean | undefined>(undefined);

  const handleClick: ButtonProps['onClick'] = async (e) => {
    if (!onClick || typeof onClick !== 'function') return;

    const clickResult = onClick(e);

    if (clickResult instanceof Promise) {
      try {
        setLoading(true);
        await clickResult;
      } finally {
        setLoading(false);
      }
    }
  };

  return <Button loading={loading} onClick={handleClick} {...restProps} />;
});
