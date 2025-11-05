import React from 'react';

interface NodeConfigPanelProps {
  selectedNode: any;
  onNodeUpdate: (nodeId: string, data: any) => void;
}

export const NodeConfigPanel: React.FC<NodeConfigPanelProps> = ({
  selectedNode,
}) => {
  if (!selectedNode) {
    return <div className="config-panel">请选择节点</div>;
  }

  return (
    <div className="config-panel">
      <h3>节点配置</h3>
    </div>
  );
};
