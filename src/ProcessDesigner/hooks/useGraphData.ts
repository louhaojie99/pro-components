import type { Graph } from '@antv/x6';
import { useMemoizedFn } from 'ahooks';

export const useGraphData = (graph?: Graph) => {
  // 渲染节点
  const renderNodes = useMemoizedFn((nodes: any[]) => {
    if (!graph) return;

    const nodeInstances = nodes.map((nodeData) =>
      graph.createNode({
        id: nodeData.id,
        shape: nodeData.shape,
        x: nodeData.x,
        y: nodeData.y,
        ...nodeData,
        // 其他节点配置...
      }),
    );

    graph.addNode(nodeInstances);
  });

  // 渲染边
  const renderEdges = useMemoizedFn((edges: any[]) => {
    if (!graph) return;

    const edgeInstances = edges.map((edgeData) =>
      graph.createEdge({
        source: edgeData.source,
        target: edgeData.target,
        // 其他边配置...
      }),
    );

    graph.addEdge(edgeInstances);
  });

  // 完整数据回显
  const renderGraphData = useMemoizedFn(
    (data: { nodes: any[]; edges: any[] }) => {
      if (!graph) return;

      console.log('data: ', data);
      graph.clearCells();
      renderNodes(data.nodes);
      renderEdges(data.edges);
    },
  );

  return {
    renderNodes,
    renderEdges,
    renderGraphData,
  };
};
