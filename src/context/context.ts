import React from 'react';
import {RequestUsers} from '../types';

export const Context = React.createContext<ContextValue>({
  request: null,
  setRequest: () => {
    throw new Error('Trying to finish session out of context');
  },
});

export type ContextValue = {
  request: RequestUsers | null;
  setRequest: (value: RequestUsers | null) => void;
};
