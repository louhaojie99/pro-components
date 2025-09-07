import type { EffectCallback } from 'react';
import { useEffect } from 'react';

/**
 * useDidMount hooks
 * @description 只在组件初始化时执行的 Hook。
 * @param callback 初始化时执行的回调函数（无参数，无返回值）
 */
export const useDidMount = (callback: EffectCallback) => {
  useEffect(() => {
    if (typeof callback === 'function') {
      callback();
    }
  }, []);
};
