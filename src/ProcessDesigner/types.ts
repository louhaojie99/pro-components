import { Graph } from '@antv/x6';

export type GraphOptions = Graph.Options;

export type HTMLDivElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type GraphData = {
  nodes: any[];
  edges: any[];
};
