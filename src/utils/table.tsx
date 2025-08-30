import type { TableColumnType as BaseTableColumnType } from 'antd';
import { get } from 'lodash';

type TableColumnType = BaseTableColumnType<any>;
type DataIndex = TableColumnType['dataIndex'];
type FilterProps = Parameters<Required<TableColumnType>['onFilter']>;

const commonFilter = (
  value: FilterProps[0],
  record: FilterProps[1],
  dataIndex: DataIndex,
) => {
  const columnValue = get(record, dataIndex);

  return String(columnValue ?? '')
    .toUpperCase()
    .includes(String(value ?? '').toUpperCase());
};

/**
 * 获取表格搜索相关参数
 * @param dataIndex 列数据在数据项中对应的路径
 */
export const getColumnSearchProps = (
  dataIndex: DataIndex,
): TableColumnType => ({
  dataIndex,
});

/**
 * 获取表格筛选相关参数
 * @param dataIndex 列数据在数据项中对应的路径
 * @param filterOptions 筛选配置选项
 */
export const getColumnFilterProps = (
  dataIndex: DataIndex,
  filterOptions: {
    filters: TableColumnType['filters'];
    filterMultiple?: boolean;
  },
): TableColumnType => {
  const { filters, filterMultiple } = filterOptions ?? {};
  return {
    onFilter: (value, record) => commonFilter(value, record, dataIndex),
    filters,
    filterMultiple,
  };
};

/**
 * 获取表格排序相关参数
 * @param dataIndex 列数据在数据项中对应的路径
 */
export const getColumnSortedProps = (dataIndex: DataIndex): TableColumnType => {
  return {
    sorter: (a, b) => get(a, dataIndex) - get(b, dataIndex),
  };
};
