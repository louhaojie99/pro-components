import { useEffect, useRef } from 'react';
import { isBrowser } from './helper';

export type Options = {
  /** 组件卸载时，是否恢复上一个页面标题 */
  restoreOnUnmount?: boolean;
};

/**
 * useTitle hook
 * @description 用于设置页面标题
 */
export const useTitle = (title: string, options?: Options) => {
  const { restoreOnUnmount = false } = options ?? {};

  const titleRef = useRef(isBrowser ? document.title : '');

  useEffect(() => {
    document.title = title;

    return () => {
      if (restoreOnUnmount) {
        document.title = titleRef.current;
      }
    };
  }, [title]);
};
