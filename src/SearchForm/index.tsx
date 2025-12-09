/**
 * 通用搜索表单组件
 */
import {
  DownOutlined,
  RedoOutlined,
  SearchOutlined,
  UpOutlined,
} from '@ant-design/icons';
import type { FormItemProps, FormProps } from 'antd';
import { Button, Col, Form, Row, Space } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';

export interface SearchFormItem extends FormItemProps {
  /** 用于栅格布局, 占用的列数（如果不指定默认 8） */
  colSpan?: number;
}

export interface SearchFormProps extends Omit<FormProps, 'onFinish'> {
  /** 搜索表单配置项列表 */
  items: SearchFormItem[];
  /** 查询回调函数 */
  onSearch: (values: Record<string, any>) => void;
  /** 重置回调函数 */
  onReset?: () => void;
  /** 是否显示展开收起功能 */
  showCollapse?: boolean;
  /** 默认可展示项数量（超过此数量时启用“展开/收起”） */
  defaultVisibleItemCount?: number;
  searchLoading?: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = (props) => {
  const {
    className,
    style,
    items,
    onSearch,
    onReset,
    showCollapse,
    defaultVisibleItemCount = 3,
    searchLoading = false,
  } = props;

  const [searchForm] = Form.useForm();
  const [collapsed, setCollapsed] = useState(
    Boolean(showCollapse && items.length > defaultVisibleItemCount),
  );

  const handleSearch = useCallback(async () => {
    const values = await searchForm.validateFields();
    onSearch?.(values);
  }, [searchForm, onSearch]);

  const handleReset = useCallback(() => {
    searchForm.resetFields();
    onReset?.();
  }, [searchForm, onReset]);

  // 显示的表单项
  const displayedItems = useMemo(
    () =>
      (collapsed ? items.slice(0, defaultVisibleItemCount) : items).map(
        (item) => ({
          ...item,
          itemKey: Array.isArray(item.name)
            ? item.name.join('_')
            : (item.name as string),
        }),
      ),
    [collapsed, items, defaultVisibleItemCount],
  );

  // 操作按钮区域
  const ActionButtons = useMemo(
    () => (
      <Space size="middle">
        <Button
          type="primary"
          icon={<SearchOutlined />}
          loading={searchLoading}
          onClick={handleSearch}
        >
          查询
        </Button>
        <Button type="default" icon={<RedoOutlined />} onClick={handleReset}>
          重置
        </Button>
        {showCollapse && (
          <Button
            type="link"
            icon={collapsed ? <DownOutlined /> : <UpOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? '展开' : '收起'}
          </Button>
        )}
      </Space>
    ),
    [handleSearch, handleReset, collapsed, searchLoading, showCollapse],
  );

  return (
    <Form
      className={className}
      style={{ ...style }}
      form={searchForm}
      autoComplete="off"
    >
      <Row gutter={[16, 0]} align="top">
        {/* 渲染搜索项 */}
        {displayedItems?.map((item) => {
          const { itemKey, colSpan = 8, ...restItemProps } = item;
          return (
            <Col key={itemKey} span={colSpan}>
              <Form.Item {...restItemProps} />
            </Col>
          );
        })}

        {/*
          渲染操作按钮列
          flex="auto" 会自动占据当前行剩余空间。
          如果剩余空间不足（或刚好被填满），它会自动换行并占据整行（表现为右对齐）。
          这样就不需要复杂的取余计算了。
        */}
        <Col flex="auto" style={{ textAlign: 'right' }}>
          <Form.Item>{ActionButtons}</Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
