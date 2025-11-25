/**
 * 错误边界
 */
import React from 'react';
import { DefaultErrorBoundary } from './DefaultErrorBoundary';

export interface ErrorBoundaryProps {
  /** 降级UI渲染函数，当有错误时显示 */
  fallbackRender?: (
    error: Error | null,
    errorInfo: React.ErrorInfo | null,
    resetError?: () => void,
  ) => React.ReactNode;
  /** 错误发生时的回调函数 */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  /** 子组件 */
  children?: React.ReactNode;
}

export interface ErrorBoundaryState {
  /** 是否发生了错误 */
  hasError: boolean;
  /** 捕获的错误对象 */
  error: Error | null;
  /** 错误的详细信息 */
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: Readonly<ErrorBoundaryState> = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  /**
   * 静态方法，用于更新状态以便下一次渲染显示降级UI
   * 当子组件抛出错误时，此方法会被调用
   */
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  /**
   * 生命周期方法，在组件更新后调用
   */
  componentDidUpdate(
    _prevProps: Readonly<ErrorBoundaryProps>,
    prevState: Readonly<ErrorBoundaryState>,
  ): void {
    // 如果错误状态从有错误变为无错误，重置错误状态
    if (prevState.hasError && !this.state.hasError) {
      this.setState({
        error: null,
        errorInfo: null,
      });
    }
  }

  /**
   * 生命周期方法，捕获子组件抛出的错误
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    const { onError } = this.props;

    this.setState({
      error,
      errorInfo,
    });

    onError?.(error, errorInfo);
  }

  /**
   * 重置错误状态
   */
  resetError = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { fallbackRender, children } = this.props;

    // 如果发生了错误，显示降级UI
    if (hasError) {
      if (fallbackRender) {
        return (
          <div className="error-boundary">
            {fallbackRender(error, errorInfo, this.resetError)}
          </div>
        );
      }

      // 默认兜底 UI，可根据需求美化
      return (
        <DefaultErrorBoundary
          error={error}
          errorInfo={errorInfo}
          resetError={this.resetError}
        />
      );
    }

    // 正常渲染子组件
    return children;
  }
}
