import { Graph } from '@antv/x6';
import { useMemoizedFn } from 'ahooks';

export const useGraphOperations = (graph?: Graph) => {
  /** 放大 */
  const zoomIn = useMemoizedFn(() => {
    if (!graph) return;
    graph.zoom(0.1);
  });

  /** 缩小 */
  const zoomOut = useMemoizedFn(() => {
    if (!graph) return;
    graph.zoom(-0.1);
  });

  /** 适应画布 */
  const fitToContent = useMemoizedFn(() => {
    if (!graph) return;
    graph.zoomToFit();
  });

  /** 居中 */
  const centerContent = useMemoizedFn(() => {
    if (!graph) return;
    graph.centerContent();
  });

  return {
    zoomIn,
    zoomOut,
    fitToContent,
    centerContent,
  };
};
