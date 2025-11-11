/**
 * 高阶组件：为 Select 组件添加全选功能
 *
 * 用途：
 * 1. 当选择 "全选" 选项时, 自动清空其他选项，只保留全选选项
 * 2. 当已处于全选状态时选择其他选项，自动移除全选选项，保留所选的其他选项
 * 3. 清空所有选项时，自动恢复到只包含全选选项的状态
 * 4. 支持自定义全选选项的值
 *
 * <Select
 *   mode="multiple"
 *   options={[
 *     { label: '全选', value: 'all' },
 *     { label: '选项1', value: '1', },
 *     { label: '选项2', value: '2', },
 *   ]}
 *   allOptionValue="all"
 * />
 */
import type { SelectProps } from 'antd';
import { last } from 'lodash';

const DEFAULT_ALL_OPTION_VALUE = 'all' as const;

export interface WithSelectAllProps {
  /** 全选选项的值（默认 'all'） */
  allOptionValue?: string | number;
}

export const withSelectAll = <T extends SelectProps>(
  Select: React.ComponentType<T>,
) =>
  ((props: T & WithSelectAllProps) => {
    const {
      allOptionValue = DEFAULT_ALL_OPTION_VALUE,
      onChange,
      ...restProps
    } = props;

    const handleChange: SelectProps['onChange'] = (val, option) => {
      if (!Array.isArray(val) || !Array.isArray(option)) {
        onChange?.(val, option);
        return;
      }

      const lastValue = last(val);

      // 选中了全选 或 清空
      if (val.length === 0 || lastValue === allOptionValue) {
        onChange?.(
          [allOptionValue],
          option?.filter((o) => o.value === allOptionValue),
        );
        return;
      }

      // 选中非全选时，去掉全选
      onChange?.(
        val.filter((v) => v !== allOptionValue),
        option?.filter((v) => v.value !== allOptionValue),
      );
    };

    return (
      // @ts-ignore
      <Select mode="multiple" onChange={handleChange} {...restProps} />
    );
  }) as React.ComponentType<T & WithSelectAllProps>;
