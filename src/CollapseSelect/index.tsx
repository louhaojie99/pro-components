import { CaretRightOutlined } from '@ant-design/icons';
import { useControllableValue } from 'ahooks';
import type { CollapseProps, SelectProps } from 'antd';
import { Collapse, Empty, Select, Spin } from 'antd';
import classNames from 'classnames';
import { keyBy, omit } from 'lodash';
import React, { useMemo } from 'react';
import './index.less';
import type {
  OmittedCollapseProps,
  OmittedSelectProps,
  Option,
  OptionType,
  SelectValue,
} from './types';

const prefixCls = 'collapse-select';

export interface CollapseSelectProps<
  ValueType extends SelectValue | undefined = SelectValue,
> extends Omit<SelectProps, OmittedSelectProps> {
  /** 默认值 */
  defaultValue?: ValueType;
  /** 受控的值 */
  value?: ValueType;
  /** 状态变化的回调 */
  onChange?: (val: ValueType) => void;
  /** 配置选项内容 */
  options?: Option[];
  /** 是否默认激活第一项面板 */
  defaultActiveFirst?: boolean;
  /** 折叠面板配置 */
  collapseProps?: Omit<CollapseProps, OmittedCollapseProps>;
}

export const CollapseSelect = <
  ValueType extends SelectValue | undefined = SelectValue,
>(
  props: CollapseSelectProps<ValueType>,
) => {
  const {
    loading = false,
    options: collapseOptions,
    defaultValue: propsDefaultValue,
    collapseProps: propsCollapseProps,
    defaultActiveFirst = false,
    ...restProps
  } = props;

  const { className: collapseClassName, ...restCollapseProps } =
    propsCollapseProps ?? {};

  const defaultActiveKey = defaultActiveFirst
    ? collapseOptions?.[0]?.panelKey
    : undefined;

  const [state, setState] = useControllableValue<SelectValue>(props, {
    defaultValue: propsDefaultValue || {
      activeKey: defaultActiveKey,
      selectValue: undefined,
    },
  });

  const { activeKey = defaultActiveKey, selectValue } = state ?? {};

  const collapseOptionsMap = useMemo(
    () => keyBy(collapseOptions, 'panelKey'),
    [collapseOptions],
  );

  const selectOptions = useMemo(
    () => (activeKey ? collapseOptionsMap[activeKey]?.panelOptions ?? [] : []),
    [collapseOptionsMap, activeKey],
  );

  const handleCollapseChange: CollapseProps['onChange'] = (keys) => {
    console.log('keys: ', keys);
    setState((prev) => ({
      ...prev,
      activeKey: keys[0],
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
      loading={loading}
      popupRender={(menu) => (
        <Spin spinning={loading}>
          <Collapse
            className={classNames(
              `${prefixCls}-collapse-wrapper-container`,
              collapseClassName,
            )}
            accordion
            ghost
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            activeKey={activeKey}
            items={Object.values(collapseOptionsMap).map((option) => ({
              key: option.panelKey,
              label: option.panelLabel || option.panelKey,
              children: menu,
            }))}
            onChange={handleCollapseChange}
            {...restCollapseProps}
          />
        </Spin>
      )}
      notFoundContent={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      labelInValue
      defaultActiveFirstOption={false}
      value={selectValue}
      onChange={handleSelectChang}
      options={selectOptions}
      {...omit(restProps, ['value', 'onChange'])}
    />
  );
};
