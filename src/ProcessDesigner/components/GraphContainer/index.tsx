import React, { useEffect, useRef } from 'react';
import { useGraph, useGraphData, useGraphOperations } from '../../hooks';
import type { GraphData, HTMLDivElementProps } from '../../types';
import { Toolbar } from '../Toolbar';

interface GraphContainerProps
  extends Pick<HTMLDivElementProps, 'className' | 'style'> {
  graphData?: GraphData;
  onGraphReady?: (graph: any) => void;
}

export const GraphContainer: React.FC<GraphContainerProps> = (props) => {
  const { className, style, graphData, onGraphReady } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const { graph, initGraph, destroyGraph } = useGraph(containerRef);
  const { renderGraphData } = useGraphData(graph);

  const operations = useGraphOperations(graph);
  const { zoomIn, zoomOut, fitToContent, centerContent } = operations;

  useEffect(() => {
    const graphInstance = initGraph();
    onGraphReady?.(graphInstance);

    return () => {
      destroyGraph();
    };
  }, []);

  useEffect(() => {
    if (graphData) {
      renderGraphData(graphData);
    }
  }, [graphData, renderGraphData]);

  return (
    <div
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    >
      {false && (
        <Toolbar
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
          onFitToContent={fitToContent}
          onCenter={centerContent}
        />
      )}

      <div ref={containerRef} />
    </div>
  );
};
