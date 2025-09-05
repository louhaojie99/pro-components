import { useEffect } from 'react';

export const useWillUnmount = (callback: () => void) => {
  useEffect(() => {
    if (typeof callback !== 'function') return;
    return callback;
  }, []);
};
