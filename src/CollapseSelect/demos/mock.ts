export const mockOptions = [
  {
    panelKey: 'performance',
    panelLabel: '性能优化',
    panelOptions: [
      {
        label: '懒加载 - 资源按需加载',
        value: 'lazy-loading',
      },
      {
        label: 'Immutable 数据 - 无副作用的数据处理',
        value: 'immutable',
      },
      {
        label: 'Tree Shaking - 精简代码包',
        value: 'tree-shaking',
      },
      {
        label: 'CDN - 静态资源加速',
        value: 'cdn',
      },
    ],
  },
  {
    panelKey: 'engineering',
    panelLabel: '工程化实践',
    panelOptions: [
      {
        label: 'CI/CD - 持续集成与持续部署',
        value: 'ci-cd',
      },
      {
        label: 'TDD - 测试驱动开发',
        value: 'tdd',
      },
      {
        label: 'Monorepo - 多项目的统一管理',
        value: 'monorepo',
      },
      {
        label: 'ESLint/Prettier - 代码质量',
        value: 'linting',
      },
    ],
  },
];
