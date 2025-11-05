import { Button } from 'antd';
import React from 'react';

export interface ToolbarProps {
  /** 放大 */
  onZoomIn: () => void;
  /** 缩小 */
  onZoomOut: () => void;
  /** 适应画布 */
  onFitToContent: () => void;
  /** 居中 */
  onCenter: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onZoomIn,
  onZoomOut,
  onFitToContent,
  onCenter,
}) => {
  return (
    <div>
      <Button size="small" onClick={onZoomIn}>
        放大
      </Button>
      <Button size="small" onClick={onZoomOut}>
        缩小
      </Button>
      <Button size="small" onClick={onFitToContent}>
        适应画布
      </Button>
      <Button size="small" onClick={onCenter}>
        居中
      </Button>
    </div>
  );
};
