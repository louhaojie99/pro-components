import type { SelectProps } from 'antd';
import type { BaseOptionType } from 'antd/lib/select';

export type RawValue = string | number;

export interface OptionType extends BaseOptionType {
  customLabel?: React.ReactNode;
  label: React.ReactNode;
  value: RawValue;
  item?: Record<string, any>;
}

export type SelectValue = {
  activeKey?: string;
  selectValue?: OptionType | OptionType[];
};

export type PanelOptions = SelectProps<RawValue, OptionType>['options'];

export type Option = {
  /** 选项组的唯一标识符 */
  panelKey: string;
  /** 选项组的显示标签 */
  panelLabel: string;
  /** 选项组内的具体选项配置 */
  panelOptions: PanelOptions;
};

export type OmittedSelectProps =
  | 'defaultValue'
  | 'value'
  | 'onSelect'
  | 'onChange'
  | 'options';

export type OmittedCollapseProps =
  | 'defaultActiveKey'
  | 'activeKey'
  | 'onChange'
  | 'accordion';
