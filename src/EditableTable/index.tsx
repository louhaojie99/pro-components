/**
 * 可编辑表格
 */
import { PlusOutlined } from '@ant-design/icons';
import { useControllableValue, useMemoizedFn } from 'ahooks';
import type {
  FormInstance,
  FormListFieldData,
  FormListOperation,
  TableProps,
} from 'antd';
import { Button, Form, Table, Typography } from 'antd';
import React, { useEffect, useImperativeHandle } from 'react';
import type {
  BaseStandardProps,
  EditableTableOptions,
  FormValuesType,
  RowValueType,
} from './types';

const { Link } = Typography;

export interface EditableTableRef<Values = any> {
  form: FormInstance<Values>;
}

export interface EditableTableProps<
  ValueType extends RowValueType = RowValueType,
> extends BaseStandardProps<ValueType[]>,
    Pick<
      TableProps<ValueType & Pick<FormListFieldData, 'key'>>,
      'className' | 'style' | 'bordered' | 'columns'
    > {
  /** 表单实例 */
  formRef?: React.Ref<EditableTableRef>;
  /** 可编辑表格扩展的选项参数 */
  options?: EditableTableOptions;
}

const EditableTable = <ValueType extends RowValueType = RowValueType>(
  props: EditableTableProps<ValueType>,
) => {
  const {
    className,
    style,
    bordered = false,
    columns,
    formRef,
    options,
  } = props;
  const { onlyPreview = false, hideAdd = false } = options ?? {};

  const [form] = Form.useForm<FormValuesType<ValueType>>();

  const [tableData, setTableData] = useControllableValue<
    ValueType[] | undefined
  >(props, {
    defaultValuePropName: 'defaultValue',
    valuePropName: 'value',
    trigger: 'onChange',
  });

  useEffect(() => {
    form.setFieldsValue({ items: tableData ?? [] });
  }, [tableData]);

  useImperativeHandle(formRef, () => ({
    form,
  }));

  const getTableColumns = useMemoizedFn(
    ({ remove }: Pick<FormListOperation, 'remove'>) =>
      [
        ...(columns ?? []),
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
      ] as TableProps<ValueType>['columns'],
  );

  const handleFormTableChange = (changedTableData: ValueType[]) => {
    setTableData(changedTableData);
  };

  return (
    <Form<FormValuesType<ValueType>>
      className={className}
      form={form}
      style={{ ...style }}
      autoComplete="off"
      component={false}
      disabled={!!onlyPreview}
      initialValues={{ items: tableData }}
      onValuesChange={(_, { items }) => {
        handleFormTableChange(items);
      }}
    >
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <Table<ValueType>
            // 这部分是内置的配置
            rowKey="key"
            bordered={bordered}
            dataSource={fields.map((field) => ({
              ...form.getFieldValue(['items', field.key]),
              key: field.name,
            }))}
            columns={getTableColumns({ remove })}
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
                  添加一行
                </Button>
              ),
            })}
            pagination={false}
            scroll={{ x: 'max-content' }}
          />
        )}
      </Form.List>
    </Form>
  );
};

export default EditableTable;
