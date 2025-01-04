# OverlaySpin

自定义的遮罩加载（Loading）组件

## 何时使用

解决使用 Ant Design 库的 Spin 组件通过包裹目标组件来实现加载效果，这有时会破坏被包裹组件的原始 DOM 结构和样式; 不干扰 DOM 结构、样式独立; 该组件采用遮罩的实现方式实现，从而避免该问题，因为采用绝对定位的方式来实现遮罩，所以**父级需要设置相应的定位**。

## 代码演示

<code src="./demos"></code>

## API

该组件是基于 Ant Design 的 Spin 组件构建的，所以它也继承了所有 Spin 组件的属性。有关更多详细信息，请参阅 [Ant Design Spin API](https://ant.design/components/spin-cn#api)。
