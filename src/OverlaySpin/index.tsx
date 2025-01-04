/**
 * 自定义的遮罩加载（Loading）组件
 */
import type { SpinProps } from 'antd';
import { Spin } from 'antd';
import React from 'react';
import './index.less';

export interface OverlaySpinProps extends Omit<SpinProps, 'children'> {
  /**
   * 当前Spin背景的颜色（不包含透明度，默认组件内部会给背景添加一定的透明度），
   * 由于该Spin的实现方式为添加遮罩层，为了使遮罩层颜色与背景颜色协调统一，需要手动指定背景颜色
   */
  background?: string | undefined;
}

const prefixCls = 'overlay-spin';

const OverlaySpin: React.FC<OverlaySpinProps> = (props) => {
  const { spinning, background = '#fff', tip, ...restProps } = props;

  if (!spinning) {
    return null;
  }

  return (
    <div
      className={`${prefixCls}-container`}
      style={{
        // @ts-ignore
        '--background': background,
      }}
    >
      <Spin className={prefixCls} spinning={spinning} {...restProps} />
      {tip && <div className={`${prefixCls}-tip`}>{tip}</div>}
    </div>
  );
};

export default OverlaySpin;
