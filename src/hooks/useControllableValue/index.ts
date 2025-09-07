import type {
  AnyObject,
  Dispatch,
  SetStateAction,
  StateUpdater,
} from '@/typings';
import { useMemo, useState } from 'react';

const DEFAULT_PROPS = {};
const DEFAULT_OPTIONS = {};

export type Options<ValueType> = {
  /** 默认值，会被 props.defaultValue 和 props.value 覆盖 */
  defaultValue?: ValueType;
  /** 默认值的属性名 */
  defaultValuePropName?: string;
  /** 值的属性名 */
  valuePropName?: string;
  /** 修改值时，触发的函数	 */
  trigger?: string;
};

export interface StandardProps<ValueType> {
  defaultValue?: ValueType;
  value?: ValueType;
  onChange?: StateUpdater<ValueType>;
}

export type UseControllableValueReturnValue<ValueType> = [
  ValueType,
  Dispatch<SetStateAction<ValueType>>,
];

function useControllableValue<ValueType>(
  props: StandardProps<ValueType>,
): UseControllableValueReturnValue<ValueType>;

function useControllableValue<ValueType = any>(
  props: AnyObject,
  options: Options<ValueType>,
): UseControllableValueReturnValue<ValueType>;

/**
 * useControllableValue hook
 * @description 在某些组件开发时，我们需要组件的状态既可以自己管理，也可以被外部控制，useControllableValue 就是帮你管理这种状态的 Hook。
 * @param options 可选配置项
 * @returns
 */
function useControllableValue<ValueType = any>(
  props: AnyObject = DEFAULT_PROPS,
  options: Options<ValueType> = DEFAULT_OPTIONS,
): UseControllableValueReturnValue<ValueType> {
  const {
    defaultValue,
    defaultValuePropName = 'defaultValue',
    valuePropName = 'value',
    trigger = 'onChange',
  } = options ?? {};

  const value = props[valuePropName] as ValueType;
  const onChange = props[trigger];

  // 是否是受控模式
  const isControlled = Object.prototype.hasOwnProperty.call(
    props,
    valuePropName,
  );

  // 初始值
  const initialValue = useMemo<ValueType>(() => {
    if (isControlled) {
      return value;
    }
    if (Object.prototype.hasOwnProperty.call(props, defaultValuePropName)) {
      return props[defaultValuePropName];
    }
    return defaultValue;
  }, []);

  // 组件内部状态
  const [innerState, setInnerState] = useState<ValueType>(initialValue);

  const returnValue = useMemo<UseControllableValueReturnValue<ValueType>>(
    /**
     * 模式一：外部受控
     * 模式二：外部不受控
     */
    () => (isControlled ? [value, onChange] : [innerState, setInnerState]),
    [isControlled, value, innerState, onChange],
  );

  return returnValue;
}

export { useControllableValue };
