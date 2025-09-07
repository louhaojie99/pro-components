import { useEffect } from 'react';

const disableSwipeFn = (editing: boolean) => {
  const html = document.querySelector('html');
  const body = document.querySelector('body');
  if (html && body) {
    if (editing) {
      html.style.overscrollBehaviorX = 'none';
      body.style.overscrollBehaviorX = 'none';
    } else {
      html.style.overscrollBehaviorX = 'auto';
      body.style.overscrollBehaviorX = 'auto';
    }
  }
};

/**
 * useDisableSwipe hook
 * @description 用于在访问页面时禁用浏览器的两指横向滑动功能 (防止在编辑期间意外地触发浏览器的前进或后退操作，从而防止数据丢失)
 */
export const useDisableSwipe = () => {
  useEffect(() => {
    // 组件挂载时, 禁用滑动功能
    disableSwipeFn(true);

    // 组件卸载时, 恢复滑动功能
    return () => {
      disableSwipeFn(false);
    };
  }, []);
};
