# hocs

## destructibleContainer

destructibleContainer 是一个高阶组件，能够在组件的 visible 或 open 属性变为 false 时，自动销毁并重新创建内部组件，而不是仅仅隐藏它。这有助于彻底销毁组件状态，同时保留原有的动画效果。

何时使用

- 当你希望在组件关闭后完全销毁其内部状态时
- 需要兼容带有动画效果的组件（如 Modal、Drawer 等）
- 适用于 Ant Design 组件或任何实现了 visible / open 属性及 afterVisibleChange 回调的自定义组件

代码演示

以下示例展示了组件只有在打开时才会被实际渲染和挂载

<code src="./destructibleContainer/demos/destructibleContainerBasic.tsx"></code>

## optionInValueSelect

何时使用

- 该高阶组件支持给 Select 组件添加 optionInValue 的 props，添加后组件的 value 将自动自动变为 option

代码演示

<code src="./optionInValueSelect/demos/optionInValueSelectBasic.tsx"></code>

## withSelectAll

何时使用

- 为 Select 组件添加全选功能

代码演示

<code src="./withSelectAll/demos/withSelectAllDemo.tsx"></code>

## withProviders

何时使用

- 将多个高阶组件按顺序组合成一个高阶组件，简化多层嵌套的 HOC 调用。
