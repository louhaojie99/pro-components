import type { SelectProps } from 'antd';
import type { BaseOptionType } from 'antd/lib/select';

export type RawValue = string | number;

export interface OptionType extends BaseOptionType {
  label?: React.ReactNode;
  value: RawValue;
  items?: Record<string, any>;
}

export type SelectValue = {
  activeTab: string;
  selectValue?: OptionType | OptionType[];
};

export type TabOptions = SelectProps<RawValue, OptionType>['options'];
