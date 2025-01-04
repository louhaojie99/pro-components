# AsyncButton

一个支持异步的按钮，onClick 传入异步函数则自动显示 loading

## 何时使用

AsyncButton 是一个专门设计用于处理异步操作的按钮组件。当你需要在用户点击按钮后执行一些耗时的操作（如网络请求、文件上传等），并且希望在此期间给用户提供视觉上的反馈（比如显示加载状态），那么 AsyncButton 就非常适合你的需求。

## 代码演示

<code src="./demos"></code>

## API

| 属性                                              | 说明                                                                 | 默认值                                                               |
| ------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| <span style="white-space: nowrap;">onClick</span> | 点击按钮时触发的回调函数，应该返回一个 Promise，按钮将处于加载状态。 | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => Promise<any>` |

该组件是基于 Ant Design 的 Button 组件构建的，所以它也继承了所有 Button 组件的属性。有关更多详细信息，请参阅 [Ant Design Button API](https://ant.design/components/button-cn#api)。
