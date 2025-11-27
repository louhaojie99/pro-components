import { Input } from 'antd';
import React from 'react';

export const createMockFormItems = (count = 1) =>
  Array.from({
    length: count,
  }).map((_, INDEX) => ({
    label: '测试选项' + INDEX,
    name: 'test' + INDEX,
    children: <Input />,
    rules: [
      {
        required: true,
      },
    ],
  }));
