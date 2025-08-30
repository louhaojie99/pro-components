/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @file 该高阶组件支持给Select组件添加 optionInValue 的props，添加后组件的value将自动自动变为 option
 */
import type { SelectProps } from 'antd';
import { isNil } from 'lodash';
import React from 'react';

export interface OptionInValueProps {
  optionInValue?: boolean;
}

export const optionInValueSelect = <T extends SelectProps>(
  Select: React.ComponentType<T>,
) =>
  ((props: T & OptionInValueProps) => {
    const { optionInValue, value, labelInValue, onChange, ...restProps } =
      props;

    const handleChange: SelectProps['onChange'] = (v, option) => {
      if (!isNil(v) && optionInValue) {
        onChange?.(option, option);
      } else {
        onChange?.(v, option);
      }
    };

    return (
      // @ts-ignore
      <Select
        value={value}
        labelInValue={labelInValue ?? optionInValue}
        onChange={handleChange}
        {...restProps}
      />
    );
  }) as React.ComponentType<T & OptionInValueProps>;
