import React, {PropsWithChildren} from 'react';
import {useContextValue} from './useContextValue';
import {Context} from './context';

export const ContextProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const contextValue = useContextValue();

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
