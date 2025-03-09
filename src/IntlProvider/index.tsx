/**
 * 国际化提供器
 */
import { ConfigProvider } from 'antd';
import React from 'react';
import { RawIntlProvider as RcIntlProvider } from 'react-intl';
import { LanguageEnum } from './constants';
import { getIntl, getLocalItem } from './utils';

export type IntlProviderProps = {
  /** 语言。应传入 'en-US' 或 'zh-CN’，不支持的语言会视为 'zh-CN'。 */
  locale: `${LanguageEnum}`;
  children: React.ReactNode;
};

export const IntlProvider = React.memo<IntlProviderProps>((props) => {
  const { locale, children } = props;
  const intl = getIntl(locale);

  return (
    <RcIntlProvider value={intl}>
      <ConfigProvider locale={getLocalItem(locale).antd}>
        {children}
      </ConfigProvider>
    </RcIntlProvider>
  );
});
export { LanguageEnum };
