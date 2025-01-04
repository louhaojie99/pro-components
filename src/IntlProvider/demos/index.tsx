import { IntlProvider, LanguageEnum } from '@louhaojie99/pro-components';
import { Radio } from 'antd';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const App: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <p>{formatMessage({ id: 'welcome' })}</p>
      <FormattedMessage id="welcome" />
    </>
  );
};

const Root = () => {
  const [local, setLocal] = useState(LanguageEnum.ZH_CN);

  return (
    <>
      <Radio.Group
        value={local}
        options={[
          {
            label: '中文',
            value: LanguageEnum.ZH_CN,
          },
          {
            label: 'English',
            value: LanguageEnum.EN_US,
          },
        ]}
        onChange={(e) => {
          setLocal(e.target.value);
        }}
      />
      <IntlProvider locale={local}>
        <App />
      </IntlProvider>
    </>
  );
};

export default Root;
