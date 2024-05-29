import {useEffect} from 'react';
import {useStore} from '../context/useStore';

export const useGetUsers = (url: string) => {
  const {setRequest} = useStore();
  useEffect(() => {
    const getElements = async () => {
      let response = await fetch(url);

      let elements = await response.json();

      setRequest(elements);
    };
    getElements();
  }, []);
};
