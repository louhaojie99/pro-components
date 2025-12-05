# @louhaojie99/pro-components

[![NPM version](https://img.shields.io/npm/v/@louhaojie99/pro-components.svg?style=flat)](https://npmjs.org/package/@louhaojie99/pro-components)
[![NPM downloads](http://img.shields.io/npm/dm/@louhaojie99/pro-components.svg?style=flat)](https://npmjs.org/package/@louhaojie99/pro-components)

基于 Ant Design 的业务增强组件库，涵盖常用高阶组件、Hook、工具方法。更多示例与指南可查看[在线文档](https://louhaojie99.github.io/pro-components)。

## 安装

```bash
pnpm add @louhaojie99/pro-components
```

## 本地开发

```bash
pnpm install
pnpm dev          # 启动文档站与示例调试
```

## 文档构建与发布

```bash
pnpm run docs:build   # 生成静态文档到 dist
pnpm run deploy       # 将文档发布到 GitHub Pages
```

## 组件包构建与发布

```bash
pnpm run build   # 打包组件库到 dist
npm login
npm publish
```

## 常用脚本

```bash
pnpm run build:watch   # 监听模式打包
pnpm run docs:preview  # 预览构建后的文档
pnpm run doctor        # 健康检查
```

## LICENSE

MIT
