import { useMemoizedFn } from 'ahooks';
import { useState } from 'react';
import type { GraphData } from '../types';

const DEFAULT_GRAPH_DATA: GraphData = {
  nodes: [],
  edges: [],
};

export const useGraphState = (initialData?: GraphData) => {
  const [graphData, setGraphData] = useState<GraphData>(
    initialData ?? DEFAULT_GRAPH_DATA,
  );

  const [selectedNode, setSelectedNode] = useState<any>(null);

  const updateNode = useMemoizedFn((nodeId: string, updates: any) => {
    setGraphData((prev) => ({
      ...prev,
      nodes: prev.nodes.map((node) =>
        node.id === nodeId ? { ...node, ...updates } : node,
      ),
    }));
  });

  const updateEdge = useMemoizedFn((edgeId: string, updates: any) => {
    setGraphData((prev) => ({
      ...prev,
      edges: prev.edges.map((node) =>
        node.id === edgeId ? { ...node, ...updates } : node,
      ),
    }));
  });

  const addNode = useMemoizedFn((node: any) => {
    setGraphData((prev) => ({
      ...prev,
      nodes: [...prev.nodes, node],
    }));
  });

  const addEdge = useMemoizedFn((edge: any) => {
    setGraphData((prev) => ({
      ...prev,
      edges: [...prev.edges, edge],
    }));
  });

  return {
    graphData,
    selectedNode,
    setSelectedNode,
    updateNode,
    updateEdge,
    addNode,
    addEdge,
    setGraphData,
  };
};
