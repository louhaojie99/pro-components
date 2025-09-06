import type { AnyObject } from '@/typings';
import { useCallback, useMemo, useState } from 'react';

type InitialState<S> = S | (() => S);

/**
 * 核心概详解:
 * 1. 泛型约束 S extends AnyObject
 *    - 确保 S 必须是对象类型（如 { name: string, age: number }）
 *    - 排除原始类型（number/string等）
 *
 *
 * 2. 动态键约束 <K extends keyof S>
 *    - K 是 S 的键的子集（如 S = {name, age} 则 K 可以是 'name' 或 'age'）
 *    - 允许部分更新时指定需要修改的字段
 *
 *
 * 3. 参数的 state 的三种形态
 *    - 形态1：直接部分更新 { name: 'newName' }  // Pick<S, 'name'>
 *    - 形态2：清空状态
 *    - 形态3：函数式更新 (prevState) => ({ age: prevState.age + 1  // 基于前状态计算 })
 */
export type SetState<S extends AnyObject> = <K extends keyof S>(
  state:
    | Pick<S, K>
    | null
    | ((prevState: Readonly<S>) => Pick<S, K> | S | null),
) => void;

export type UseSetStateReturnValue<S extends AnyObject> = [S, SetState<S>];

/**
 * useSetState hook
 * @description 管理 object 类型 state 的 Hooks，用法与 class 组件的 this.setState 基本一致
 * @param initialState 初始值
 * @returns [state, setState]
 */
export const useSetState = <S extends AnyObject>(
  initialState: InitialState<S>,
): UseSetStateReturnValue<S> => {
  const [state, setState] = useState<S>(initialState);

  const setMergeState = useCallback<SetState<S>>(
    (patch) => {
      setState((prevState) => {
        const newState = typeof patch === 'function' ? patch(prevState) : patch;
        return newState ? { ...prevState, ...newState } : prevState;
      });
    },
    [setState],
  );

  const returnValue = useMemo<UseSetStateReturnValue<S>>(
    () => [state, setMergeState],
    [state, setMergeState],
  );

  return returnValue;
};
