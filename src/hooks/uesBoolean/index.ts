import { useMemo, useState } from 'react';

/**
 * useBoolean hook
 * @description 优雅的管理 boolean 状态的 Hook。
 * @param defaultValue 可选项，传入默认的状态值
 * @returns [state, { toggle, set, setTrue, setFalse }]
 */
export const useBoolean = (defaultValue?: boolean) => {
  const [state, setState] = useState(defaultValue);

  const actions = useMemo(() => {
    const toggle = () => {
      setState((prev) => !prev);
    };

    const set = (value: boolean) => {
      setState(!!value);
    };

    const setTrue = () => {
      setState(true);
    };

    const setFalse = () => {
      setState(false);
    };

    return { toggle, set, setTrue, setFalse };
  }, []);

  const returnValue = useMemo(() => [state, actions], [state, actions]);

  return returnValue;
};
