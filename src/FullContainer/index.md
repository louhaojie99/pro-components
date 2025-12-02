# FullContainer

全屏容器组件

## 何时使用

当需要创建一个全屏覆盖的容器时，可以使用该组件。它基于 Portal 实现，可以将内容渲染到指定容器中并占满整个视口。

## 代码演示

<code src="./demos"></code>

## API

| 参数         | 说明           | 类型                | 默认值              |
| ------------ | -------------- | ------------------- | ------------------- |
| children     | 子元素         | React.ReactNode     | -                   |
| getContainer | 指定容器元素   | () => HTMLElement   | () => document.body |
| zIndex       | 自定义 z-index | number              | 1000                |
| className    | 自定义类名     | string              | -                   |
| style        | 自定义样式     | React.CSSProperties | -                   |
