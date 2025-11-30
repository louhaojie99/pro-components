/**
 * React Context 简易模版
 */
import { useSetState } from 'ahooks';
import { SetState } from 'ahooks/es/useSetState';
import React, { createContext, useContext } from 'react';

const noop = () => {};

const DEFAULT_VALUE = {
  count: undefined as undefined | string,
} as const;

const ContextTemp = createContext({
  ...DEFAULT_VALUE,
  setContextState: noop as SetState<{
    count: undefined | string;
  }>,
});

const ContextTempProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [contextState, setContextState] = useSetState(DEFAULT_VALUE);

  return (
    <ContextTemp.Provider
      value={{
        ...contextState,
        setContextState,
      }}
    >
      {children}
    </ContextTemp.Provider>
  );
};

export const withContextTempProvider =
  <T extends Record<string, any>>(Component: React.ComponentType<T>) =>
  (props: T) => {
    <ContextTempProvider>
      <Component {...props} />
    </ContextTempProvider>;
  };

export const useContextTemp = () => {
  return useContext(ContextTemp);
};
