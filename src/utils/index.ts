/**
 * 安全解析 json 字符串
 * @param str 字符串
 * @paras defaultValue 默认值
 * @returns
 */
export const parseJson = <
  ValueType extends Record<string, any> = Record<string, any>,
>(
  str: string | undefined | null,
  defaultValue: ValueType = {} as ValueType,
): ValueType => {
  if (typeof str !== 'string') return defaultValue;

  try {
    return JSON.parse(str) as ValueType;
  } catch (error) {
    console.error('parse json error:', error);
    return defaultValue as ValueType;
  }
};

/**
 * 获取 url 参数
 */
export const getUrlSearchParams = <
  T extends Record<string, string> = Record<string, string>,
>(): T => {
  const search = window.location.href.split('?')[1];
  const searchParams = new URLSearchParams(search);
  return Object.fromEntries(searchParams.entries()) as T;
};
