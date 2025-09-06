import { useEffect, useRef } from 'react';

export const useEffectOnceWhen = (callback: () => void, when = true) => {
  const callbackRef = useRef(callback);
  const hasRunOnceRef = useRef(false);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    if (
      when &&
      !hasRunOnceRef.current &&
      typeof callbackRef.current === 'function'
    ) {
      callbackRef.current();

      hasRunOnceRef.current = true;
    }
  }, [when]);
};
