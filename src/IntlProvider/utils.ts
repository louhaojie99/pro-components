import enUSAntd from 'antd/es/locale/en_US';
import zhCNAntd from 'antd/es/locale/zh_CN';
import { createIntl, createIntlCache } from 'react-intl';
import enUSMessage from '../locales/en-US';
import zhCNMessage from '../locales/zh-CN';
import { Language } from './constants';

/**
 * 获取当前语言的一些国际化配置项
 * @param locale 当前语言环境
 * @returns 国际化配置项
 */
export const getLocalItem = (locale: string) => {
  const localeMap: Record<
    string,
    { message: Record<string, any>; antd: typeof zhCNAntd }
  > = {
    [Language.ZH_CN]: {
      message: zhCNMessage,
      antd: zhCNAntd,
    },
    [Language.EN_US]: {
      message: enUSMessage,
      antd: enUSAntd,
    },
  };

  return localeMap[locale];
};

const intlCache = createIntlCache();

/**
 * 获取 Intl
 * @param locale 当前语言环境
 * @returns 获取到IntlShape，详情见 https://formatjs.io/docs/react-intl/api
 */
export const getIntl = (locale: string = Language.ZH_CN) =>
  createIntl(
    {
      locale,
      messages: getLocalItem(locale).message,
    },
    intlCache,
  );
