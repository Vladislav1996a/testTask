import {useCallback} from 'react';
import {useStore} from '../context/useStore';

const {request, setRequest} = useStore();

export const nextPage = useCallback(async () => {
  if (!request?.next) return;
  let response = await fetch(request?.next);

  let elements = await response.json();
  setRequest(elements);
}, [request, setRequest]);
