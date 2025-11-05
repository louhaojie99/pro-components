import type { GraphOptions } from './types';

export const LINE_HEIGHT = 24;

export const NODE_WIDTH = 150;

export const defaultOptions: GraphOptions = {
  autoResize: true,
  grid: {
    visible: true,
    type: 'dot',
    size: 10,
  },
  background: {
    color: '#F2F7FA',
  },
} as const;
