/**
 * 可编辑表格
 */
import { PlusOutlined } from '@ant-design/icons';
import { useControllableValue, useMemoizedFn } from 'ahooks';
import type { FormInstance, FormListOperation } from 'antd';
import { Button, Form, Table, Typography } from 'antd';
import { omit } from 'lodash';
import React, { useEffect, useImperativeHandle, useMemo } from 'react';
import type { AnyObject } from '../typings';
import { DEFAULT_ARRAY_VALUE } from './constants';
import type {
  BaseStandardProps,
  EditableTableOptions,
  FormValuesType,
  LegacyRef,
  TableProps,
} from './types';

const { Link } = Typography;

export type EditableTableRef<RecordType = AnyObject> = FormInstance<
  FormValuesType<RecordType>
>;

export interface EditableTableProps<RecordType extends AnyObject = AnyObject>
  extends BaseStandardProps<RecordType[]> {
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
  bordered?: boolean;
  columns?: TableProps<RecordType>['columns'];
  /** 表单实例 */
  formRef?: LegacyRef<EditableTableRef>;
  /** 可编辑表格扩展的选项参数 */
  options?: EditableTableOptions;
  tableProps?: Omit<
    TableProps<RecordType>,
    'rowKey' | 'bordered' | 'dataSource' | 'columns' | 'footer'
  >;
}

export const EditableTable = <RecordType extends AnyObject = AnyObject>(
  props: EditableTableProps<RecordType>,
) => {
  const {
    className,
    style,
    bordered = false,
    columns: propsColumns = DEFAULT_ARRAY_VALUE,
    formRef,
    options,
    tableProps: propsTableProps,
  } = props;

  const { onlyPreview = false, hideAdd = false, addButtonText } = options ?? {};

  const tableProps = useMemo(
    () =>
      omit(propsTableProps, [
        'rowKey',
        'bordered',
        'dataSource',
        'columns',
        'footer',
      ]),
    [propsTableProps],
  );

  const [form] = Form.useForm<FormValuesType<RecordType>>();

  const [innerTableData, setInnerTableData] = useControllableValue<
    RecordType[] | undefined
  >(props, {
    defaultValuePropName: 'defaultValue',
    valuePropName: 'value',
    trigger: 'onChange',
  });

  useEffect(() => {
    form.setFieldsValue({ items: innerTableData ?? [] });
  }, [innerTableData]);

  useImperativeHandle(formRef, () => form);

  const genTableColumns = useMemoizedFn(
    ({ remove }: Pick<FormListOperation, 'remove'>) =>
      [
        ...propsColumns,
        {
          title: '操作',
          dataIndex: 'action',
          fixed: 'right',
          render: (_, field) => (
            <Link disabled={!!onlyPreview} onClick={() => remove(field.key)}>
              删除
            </Link>
          ),
        },
      ] as TableProps['columns'],
  );

  const handleChange = useMemoizedFn((changedTableData: RecordType[]) => {
    setInnerTableData(changedTableData);
  });

  return (
    <Form<FormValuesType<RecordType>>
      className={className}
      form={form}
      style={{ ...style }}
      autoComplete="off"
      component={false}
      disabled={!!onlyPreview}
      initialValues={{ items: innerTableData }}
      onValuesChange={(_, { items }) => {
        handleChange(items);
      }}
    >
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <Table<RecordType>
            rowKey="key"
            bordered={bordered}
            dataSource={fields.map((field) => ({
              ...form.getFieldValue(['items', field.key]),
              key: field.name,
            }))}
            columns={genTableColumns({ remove })}
            {...(!hideAdd && {
              footer: () => (
                <Button
                  block
                  icon={<PlusOutlined />}
                  type="dashed"
                  disabled={!!onlyPreview}
                  onClick={async () => {
                    await form.validateFields();
                    add();
                  }}
                >
                  {addButtonText || '添加一行'}
                </Button>
              ),
            })}
            pagination={false}
            scroll={{ x: 'max-content' }}
            {...tableProps}
          />
        )}
      </Form.List>
    </Form>
  );
};
