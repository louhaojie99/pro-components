import { useControllableValue } from 'ahooks';
import type { SelectProps, TabsProps } from 'antd';
import { Empty, Select, Spin, Tabs } from 'antd';
import { keyBy } from 'lodash';
import React, { useMemo } from 'react';
import type { OptionType, SelectValue, TabOptions } from './types';

export type * from './types';

export interface TabsSelectProps<
  ValueType extends SelectValue | undefined = SelectValue,
> extends Omit<
    SelectProps,
    'defaultValue' | 'value' | 'onChange' | 'onSelect' | 'options'
  > {
  /** 默认值 */
  defaultValue?: ValueType;
  /** 受控的值 */
  value?: ValueType;
  /** 状态变化的回调 */
  onChange?: (val: ValueType) => void;
  /** 选项卡配置 */
  tabsProps?: Omit<TabsProps, 'items' | 'activeKey' | 'onChange'>;
  /** 选项卡形式的选项数据 */
  options?: {
    /** 选项卡 Key */
    tabKey: string;
    /** 选项卡头显示文字 */
    tabLabel: string;
    /** 数据化配置选项内容 */
    tabOptions: TabOptions;
  }[];
}

export const TabsSelect = <
  ValueType extends SelectValue | undefined = SelectValue,
>(
  props: TabsSelectProps<ValueType>,
) => {
  const {
    loading = false,
    options: tabOptions,
    defaultValue: propsDefaultValue,
    tabsProps,
    ...restProps
  } = props;

  const defaultActionTab = tabOptions?.[0]?.tabKey ?? '';

  const [state, setState] = useControllableValue<SelectValue>(props, {
    defaultValue: propsDefaultValue || {
      activeTab: defaultActionTab,
      selectValue: undefined,
    },
    defaultValuePropName: 'defaultValue',
    valuePropName: 'value',
    trigger: 'onChange',
  });

  const { activeTab = defaultActionTab, selectValue } = state ?? {};

  const tabOptionsMap = useMemo(
    () => keyBy(tabOptions, 'tabKey'),
    [tabOptions],
  );

  const selectOptions = useMemo(
    () => (activeTab ? tabOptionsMap[activeTab]?.tabOptions ?? [] : []),
    [tabOptionsMap, activeTab],
  );

  const handleTabChange: TabsProps['onChange'] = (activeKey) => {
    setState((prev) => ({
      ...prev,
      activeTab: activeKey,
    }));
  };

  const handleSelectChang: SelectProps['onChange'] = (_, option) => {
    setState((prev) => ({
      ...prev,
      selectValue: option as OptionType,
    }));
  };

  return (
    <Select
      {...restProps}
      allowClear
      loading={loading}
      labelInValue
      value={selectValue}
      options={selectOptions}
      dropdownRender={(menu) => {
        const tabContent = <Spin spinning={loading}>{menu}</Spin>;
        return tabOptions ? (
          <Tabs
            style={{ padding: '0 8px' }}
            size="small"
            items={tabOptions?.map((tabOption) => ({
              key: tabOption.tabKey,
              label: tabOption.tabLabel,
              children: tabContent,
              disabled: loading,
            }))}
            activeKey={activeTab}
            onChange={handleTabChange}
            {...tabsProps}
          />
        ) : (
          tabContent
        );
      }}
      notFoundContent={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      placeholder="请选择"
      onChange={handleSelectChang}
    />
  );
};
