import React from 'react';

export interface DefaultErrorBoundaryProps {
  /** 捕获的错误对象 */
  error: Error | null;
  /** 错误的详细信息 */
  errorInfo: React.ErrorInfo | null;
  /** 重试错误 */
  resetError?: () => void;
}

export const DefaultErrorBoundary: React.FC<DefaultErrorBoundaryProps> = (
  props,
) => {
  const { error, errorInfo, resetError } = props;

  return (
    <div
      style={{
        padding: '20px',
        color: '#f00',
        backgroundColor: '#fdd',
        borderRadius: '6px',
      }}
    >
      <h3>出现错误啦 😢</h3>
      <p>{error?.message}</p>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{errorInfo?.componentStack}</pre>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => resetError?.()}>重试</button>
    </div>
  );
};
