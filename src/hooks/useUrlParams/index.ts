import { useSearchParams } from 'react-router-dom';

export const useUrlParams = () => {
  const [searchParams] = useSearchParams();

  return Object.fromEntries(searchParams);
};
