/**
 * 表格数据类型
 */
export type RowValueType = Record<string, any>;

/**
 * 表格表单实例类型
 */
export interface FormValuesType<ValueType> {
  /** 表单动态列表状态 */
  items: ValueType[];
}

/**
 * 状态管理, 基础标准属性
 */
export interface BaseStandardProps<ValueType> {
  /** 默认值，组件初始化时的默认数据 */
  defaultValue?: ValueType;
  /** 当前值，表示组件当前所持有的数据 */
  value?: ValueType;
  /** 值改变时的回调函数，用于处理值变化的逻辑  */
  onChange?: (val: ValueType) => void;
}

/**
 * 可编辑表格扩展的选项参数
 */
export interface EditableTableOptions {
  /** 只读模式 */
  onlyPreview?: boolean;
  /** 是否隐藏添加按钮 */
  hideAdd?: boolean;
}

/**
 * 允许引用到组件实例的类型
 */
export type LegacyRef<T> = React.Ref<T>;
