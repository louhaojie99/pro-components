import { SearchOutlined } from '@ant-design/icons';
import type { TableColumnType as BaseTableColumnType } from 'antd';
import { Button, Input } from 'antd';
import { get, isString } from 'lodash';
import React from 'react';

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
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => (
    <div style={{ padding: 8 }}>
      <Input
        placeholder="搜索"
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => confirm()}
        style={{ width: 188, marginBottom: 8, display: 'block' }}
      />

      <Button
        size="small"
        type="primary"
        onClick={() => confirm()}
        style={{ width: 90, marginRight: 8 }}
      >
        搜索
      </Button>
      <Button
        size="small"
        type="default"
        onClick={() => clearFilters?.()}
        style={{ width: 90 }}
      >
        重置
      </Button>
    </div>
  ),
  filterIcon: (filtered) => (
    <SearchOutlined style={{ color: filtered ? '#2f54eb' : undefined }} />
  ),
  onFilter: (value, record) => commonFilter(value, record, dataIndex),
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
export const getColumnSorterProps = (dataIndex: DataIndex): TableColumnType => {
  return {
    sorter: (a, b) => {
      const valueA = get(a, dataIndex);
      const valueB = get(b, dataIndex);
      const numValueA = Number(valueA);
      const numValueB = Number(valueB);

      if (!Number.isNaN(numValueA) && !Number.isNaN(numValueB)) {
        return numValueA - numValueB;
      }

      if (isString(valueA) && isString(valueB)) {
        return valueA.localeCompare(valueB);
      }

      return 0;
    },
  };
};

/**
 * 合并相同数据的行
 * @param dataSource 数据源
 * @param dataIndex 字段名
 * @returns 合并相关的数据
 */
export const mergeSameValueRowCell = <
  DataType extends Record<string, any> = any,
>(
  dataSource: DataType[],
  dataIndex: string,
) => {
  const onCell = (record: any, rowIndex?: number) => {
    const currentName = record[dataIndex];
    const nextRowName = dataSource[rowIndex! + 1]?.[dataIndex];
    const prevRowName = dataSource[rowIndex! - 1]?.[dataIndex];
    const firstRowIndex = dataSource.findIndex(
      (item) => item[dataIndex] === currentName,
    );

    if (currentName === nextRowName && firstRowIndex === rowIndex) {
      const count = dataSource.filter(
        (item) => item[dataIndex] === currentName,
      ).length;
      return { rowSpan: count };
    }
    if (currentName === prevRowName) return { rowSpan: 0 };

    return {};
  };

  return {
    onCell,
  };
};
