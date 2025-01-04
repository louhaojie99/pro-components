/* eslint-disable react-hooks/rules-of-hooks */
/**
 * 可粉碎的容器（高阶组件）
 */
import React, { useEffect, useState } from 'react';

export interface DestructibleContainerProps {
  /** 可见性 */
  visible?: boolean;
  /** 同visible */
  open?: boolean;
  /** 可见性过渡动画后触发 */
  afterVisibleChange?: (visible: boolean) => void;
  /** 同 afterVisibleChange */
  afterOpenChange?: (open: boolean) => void;
  /** 可见性关闭过渡动画后触发 */
  afterClose?: (...args: any[]) => void;
}

const DestructibleContainer =
  <T extends DestructibleContainerProps>(Container: React.ComponentType<T>) =>
  (props: T) => {
    const {
      visible: propsVisible,
      open: propsOpen,
      afterVisibleChange: propsAfterVisibleChange,
      afterOpenChange: propsAfterOpenChange,
      afterClose,
    } = props;

    const visible = propsVisible ?? propsOpen;
    const afterVisibleChange = propsAfterVisibleChange ?? propsAfterOpenChange;

    const [innerVisible, setInnerVisible] = useState(visible);
    const [shouldDestroy, setShouldDestroy] = useState(visible === false);

    const handleAfterVisibleChange = (v: boolean) => {
      afterVisibleChange?.(v);
      if (!v) {
        // 在动画结束后再销毁组件
        setShouldDestroy(true);
      }
    };

    const handleAfterClose = () => {
      afterClose?.();
      // 在动画结束后再销毁组件
      setShouldDestroy(true);
    };

    useEffect(() => {
      if (visible) {
        setShouldDestroy(false);

        // 转为异步，确保先渲染了 Container ，再显示出来，防止 Container 入场动画不显示
        setTimeout(() => setInnerVisible(visible), 0);
      } else {
        setInnerVisible(visible);
      }
    }, [visible]);

    return !shouldDestroy ? (
      <Container
        {...props}
        open={innerVisible}
        afterOpenChange={handleAfterVisibleChange}
        afterClose={handleAfterClose}
      />
    ) : (
      <></>
    );
  };

export default DestructibleContainer;
