/**
 * 解析 json 字符串
 * @param str 字符串
 * @returns
 */
export const parseJSON = <
  ValueType extends Record<string, any> | Array<Record<string, any>> = Record<
    string,
    any
  >,
>(
  str: string | undefined | null,
  defaultValue: Partial<ValueType> = {},
): ValueType => {
  const isString = (val: any) => typeof val === 'string';

  try {
    if (!isString(str)) return defaultValue as ValueType;
    const parsedValue = JSON.parse(str ?? '') as ValueType;
    return parsedValue;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return defaultValue as ValueType;
  }
};
