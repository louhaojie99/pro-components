/**
 * 创建一个可脱离文档流组件
 *
 * 如模态框、气泡卡片等需要脱离文档流的组件，可以使用该组件将其包裹，从而实现脱离文档流的效果。
 */
import React from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  /**
   * 指定容器元素，默认为 document.body
   */
  getContainer?: () => HTMLElement;
  children: React.ReactNode;
}

export const Portal: React.FC<PortalProps> = (props) => {
  const { getContainer, children } = props;

  const container = getContainer ? getContainer() : document.body;

  return ReactDOM.createPortal(children, container);
};
