/**
 * 获取 url 参数
 */
export const getUrlParams = <
  T extends Record<string, string> = Record<string, string>,
>(): T => {
  const search = window.location.href.split('?')[1];
  const searchParams = new URLSearchParams(search);
  return Object.fromEntries(searchParams.entries()) as T;
};
