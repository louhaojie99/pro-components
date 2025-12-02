/**
 * 全屏容器组件
 *
 * 基于 Portal 实现的全屏容器，可以将内容渲染到指定容器中并占满整个视口。
 */
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { Portal, PortalProps } from '../Portal';
import './index.less';

export interface FullContainerProps extends Omit<PortalProps, 'getContainer'> {
  /**
   * 指定容器元素，默认为 document.body
   */
  getContainer?: () => HTMLElement;
  /**
   * 自定义 z-index，默认为 1000
   */
  zIndex?: number;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
}

const prefixCls = 'full-container';

export const FullContainer: React.FC<FullContainerProps> = (props) => {
  const { children, getContainer, zIndex = 1000, className, style } = props;

  const { lock, unlock } = useLockBodyScroll();

  const containerStyle: React.CSSProperties = {
    zIndex,
    ...style,
  };

  useEffect(() => {
    lock();
    return () => {
      unlock();
    };
  }, [lock, unlock]);

  return (
    <Portal getContainer={getContainer}>
      <div className={classNames(prefixCls, className)} style={containerStyle}>
        {children}
      </div>
    </Portal>
  );
};
