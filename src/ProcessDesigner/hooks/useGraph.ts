import { Graph } from '@antv/x6';
import { Snapline } from '@antv/x6-plugin-snapline';
import { useMemoizedFn } from 'ahooks';
import React, { useRef } from 'react';
import type { GraphOptions } from '../types';

export const useGraph = (
  containerRef: React.RefObject<HTMLDivElement>,
  options?: GraphOptions,
) => {
  const graphRef = useRef<Graph>();

  const initGraph = useMemoizedFn(() => {
    const graph = new Graph({
      container: containerRef.current!,
      width: 800,
      height: 600,
      autoResize: true,
      grid: {
        visible: false,
        type: 'dot',
        size: 10,
      },
      // 背景颜色
      background: {
        color: '#f1f1f1',
      },

      // 画布缩放
      mousewheel: {
        enabled: true,
        modifiers: ['ctrl', 'meta'],
      },
      ...options,
    });

    graph.use(
      new Snapline({
        enabled: true,
      }),
    );

    graphRef.current = graph;
    return graph;
  });

  const destroyGraph = useMemoizedFn(() => {
    graphRef.current?.dispose();
  });

  return {
    graph: graphRef.current,
    initGraph,
    destroyGraph,
  };
};
