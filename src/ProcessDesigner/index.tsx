import type { OverlaySpinProps } from '@/OverlaySpin';
import { OverlaySpin } from '@/OverlaySpin';
import { Layout } from 'antd';
import React, { useMemo } from 'react';
import { GraphContainer } from './components/GraphContainer';
import { HeaderContainer } from './components/HeaderContainer';
import { NodeConfigPanel } from './components/NodeConfigPanel';
import { getOverlaySpinProps } from './helper';
import { useGraphState } from './hooks/useGraphState';
import type { GraphData, HTMLDivElementProps } from './types';

const { Sider, Content } = Layout;

const layoutStyle = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
};

const siderStyle: React.CSSProperties = {
  backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
  height: '100%',
};

export interface ProcessDesignerProps
  extends Pick<HTMLDivElementProps, 'className' | 'style'> {
  /** 加载状态 */
  loading?: boolean | OverlaySpinProps;
  /** 初始化数据 */
  initialData?: GraphData;
}

export const ProcessDesigner: React.FC<ProcessDesignerProps> = (props) => {
  const { className, style, loading, initialData } = props;

  const { graphData, selectedNode, setSelectedNode, updateNode } =
    useGraphState(initialData);

  const handleGraphReady = (graph: any) => {
    // 注册事件监听
    graph.on('node:selected', ({ node }: any) => {
      setSelectedNode(node.getData());
    });
  };

  const overlaySpinProps = useMemo(
    () => getOverlaySpinProps(loading),
    [loading],
  );

  return (
    <div
      className={className}
      style={{ position: 'relative', width: '100%', height: '100%', ...style }}
    >
      {loading && <OverlaySpin {...overlaySpinProps} />}

      <Layout style={layoutStyle}>
        <HeaderContainer />

        <Layout>
          <Sider width="20%" style={siderStyle}>
            <NodeConfigPanel
              selectedNode={selectedNode}
              onNodeUpdate={updateNode}
            />
          </Sider>
          <Content style={contentStyle}>
            <GraphContainer
              graphData={graphData}
              onGraphReady={handleGraphReady}
            />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
