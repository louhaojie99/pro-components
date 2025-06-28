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

export type Option = {
  /** 选项卡 Key */
  tabKey: string;
  /** 选项卡头显示文字 */
  tabLabel: string;
  /** 数据化配置选项内容 */
  tabOptions: TabOptions;
};
