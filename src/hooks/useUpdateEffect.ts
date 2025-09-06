import type { DependencyList, EffectCallback } from 'react';
import { useEffect, useRef } from 'react';

/**
 * useUpdateEffect 用法等同于 useEffect，但是会忽略首次执行，只在依赖更新时执行。
 * @param callback
 * @param deps
 */
export const useUpdateEffect = (
  callback: EffectCallback,
  deps: DependencyList,
) => {
  const isDidMounted = useRef(false);

  useEffect(() => {
    if (!isDidMounted.current) {
      isDidMounted.current = true;
      return;
    }

    if (typeof callback === 'function') {
      return callback();
    }

    return () => {
      isDidMounted.current = false;
    };
  }, [deps]);
};
