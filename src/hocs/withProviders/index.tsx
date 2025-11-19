/**
 * 组合多个高阶组件
 *
 * 将多个高阶组件按顺序组合成一个高阶组件，简化多层嵌套的HOC调用。
 *
 * 执行顺序：C → B → A
 *
 * <A>
 *    <B>
 *       <C>
 *         <Component />
 *       </C>
 *    </B>
 * </A>
 */
import React from 'react';

type HOC = <P extends object>(
  Component: React.ComponentType<P>,
) => React.ComponentType<P>;

export const withProviders =
  (...providers: HOC[]) =>
  <P extends object>(
    Component: React.ComponentType<P>,
  ): React.ComponentType<P> => {
    return providers.reduce((WrappedComponent, provider) => {
      return provider(WrappedComponent);
    }, Component);
  };
