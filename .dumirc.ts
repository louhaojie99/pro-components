import { defineConfig } from 'dumi';

export default defineConfig({
  // 文档生成目录
  outputPath: 'docs-dist',
  // 主题配置
  themeConfig: {
    title: 'HJ',
    name: 'HJ',
    description: {
      'zh-CN': '基于 Ant Design 打造的高级组件。',
      'en-US': 'Advanced components built on Ant Design.',
    },
    logo: 'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
    socialLinks: {
      github: 'https://github.com/louhaojie99/pro-components',
    },
  },
  // 站点图标
  favicons: [
    'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
  ],
  // 依赖包工具选择
  npmClient: 'pnpm',
  // 部署到 GitHub Pages
  base: '/pro-components/',
  publicPath: '/pro-components/',
});
