import { useEffect } from 'react';

/**
 * 组件卸载生命周期钩子
 * @param callback 卸载时执行的回调函数（无参数，无返回值）
 */
export const useWillUnmount = (callback: () => void) => {
  useEffect(() => {
    if (typeof callback !== 'function') return;
    return callback;
  }, []);
};
