import type { CollapseSelectProps } from '@louhaojie99/pro-components';
import { CollapseSelect } from '@louhaojie99/pro-components';
import type { FormProps } from 'antd';
import { Button, Form } from 'antd';
import React, { useState } from 'react';
import { mockOptions } from './mock';

const Demo = () => {
  // 单选
  const [value, setValue] = useState<CollapseSelectProps['value']>({
    activeKey: undefined,
    selectValue: undefined,
  });
  console.log('单选: ', value);

  // 多选
  const [values, setValues] = useState<CollapseSelectProps['value']>({
    activeKey: undefined,
    selectValue: undefined,
  });
  console.log('多选: ', values);

  const handleSubmit: FormProps['onFinish'] = (formResult) => {
    console.log('表单提交: ', formResult);
  };

  return (
    <>
      <p>
        <h2>单选: </h2>
        <CollapseSelect
          style={{ width: 300 }}
          options={mockOptions}
          value={value}
          onChange={setValue}
        />
      </p>

      <br />
      <br />
      <br />

      <p>
        <h2>多选: </h2>
        <CollapseSelect
          style={{ width: 300 }}
          options={mockOptions}
          value={values}
          onChange={setValues}
          mode="multiple"
        />
      </p>

      <br />
      <br />
      <br />

      <p>
        <h2>表单中使用: </h2>
        <Form onFinish={handleSubmit}>
          <Form.Item name="select">
            <CollapseSelect style={{ width: 300 }} options={mockOptions} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form>
      </p>
    </>
  );
};

export default Demo;
