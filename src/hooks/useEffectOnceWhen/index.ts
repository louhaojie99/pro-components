import { useEffect, useRef } from 'react';

/**
 * useEffectOnceWhen hook
 * @description 只在某个条件满足时执行一次副作用，比如首次加载、权限校验等
 * @param callback 要执行的副作用函数
 * @param when 条件，只有为 true 时才会执行 callback（默认为 true）
 */
export const useEffectOnceWhen = (callback: () => void, when = true) => {
  const callbackRef = useRef(callback);
  const hasRunOnceRef = useRef(false);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    if (
      when &&
      !hasRunOnceRef.current &&
      typeof callbackRef.current === 'function'
    ) {
      callbackRef.current();

      hasRunOnceRef.current = true;
    }
  }, [when]);
};
