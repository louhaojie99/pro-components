# AsyncButton

一个支持异步的按钮，onClick 传入异步函数则自动显示 loading

## 何时使用

当你需要在按钮点击后执行异步操作（如网络请求）并自动显示加载状态时，使用 AsyncButton。

## 代码演示

<code src="./demos"></code>

## API

| 属性                                              | 说明                                                                 | 默认值                                                               |
| ------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| <span style="white-space: nowrap;">onClick</span> | 点击按钮时触发的回调函数，应该返回一个 Promise，按钮将处于加载状态。 | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => Promise<any>` |

AsyncButton 基于 Ant Design 的 Button 组件开发，支持所有 Button 的属性。更多属性详情可以参考 [Ant Design Button API](https://ant.design/components/button-cn#api)。
