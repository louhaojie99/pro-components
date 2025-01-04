# DestructibleContainer

可粉碎的容器（高阶组件）

## 何时使用

- 可以控制包裹的组件的 props 中的 visible 或者 open 变为 false 时直接销毁整个组件，而不会保留下一些状态，
- 区别于 `visible && <Container />` 的这种写法，通过这个高阶组件处理后可以保留原本的动画效果，而并且直接不渲染，
- 支持 ant 组件以及所有实现了 visible 以及 afterVisibleChange 的自定义组件

## 代码演示

<code src="./demos"></code>
