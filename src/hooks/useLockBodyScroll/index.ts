import { useCallback, useRef } from 'react';

/**
 * useLockBodyScroll hook
 * @description 用于锁定或解锁 body 和 html 的滚动
 * @returns 返回一个对象，包含 lock 和 unlock 方法
 */
export const useLockBodyScroll = () => {
  const originalHtmlOverflow = useRef<string>('');
  const originalBodyOverflow = useRef<string>('');

  const lock = useCallback(() => {
    const html = document.documentElement;
    const body = document.body;

    // 保存原始的 overflow 值
    originalHtmlOverflow.current = html.style.overflow;
    originalBodyOverflow.current = body.style.overflow;

    // 禁用滚动
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
  }, []);

  const unlock = useCallback(() => {
    const html = document.documentElement;
    const body = document.body;

    // 恢复原始的 overflow 值
    html.style.overflow = originalHtmlOverflow.current;
    body.style.overflow = originalBodyOverflow.current;
  }, []);

  return { lock, unlock };
};
