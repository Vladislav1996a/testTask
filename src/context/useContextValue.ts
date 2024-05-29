import {useEffect, useMemo, useState} from 'react';
import {RequestUsers} from '../types';
import {ContextValue} from './context';

export const useContextValue = (): ContextValue => {
  const [request, setRequest] = useState<RequestUsers | null>(null);

  useEffect(() => {
    const getElements = async () => {
      let url = 'https://swapi.py4e.com/api/people';
      let response = await fetch(url);

      let elements = await response.json();
      setRequest(elements);
    };
    getElements();
  }, []);
  return useMemo<ContextValue>(
    () => ({
      request,
      setRequest,
    }),
    [request],
  );
};
