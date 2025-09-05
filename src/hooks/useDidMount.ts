import type { EffectCallback } from 'react';
import { useEffect } from 'react';

export const useDidMount = (callback: EffectCallback) => {
  useEffect(() => {
    if (typeof callback === 'function') {
      callback();
    }
  }, []);
};
