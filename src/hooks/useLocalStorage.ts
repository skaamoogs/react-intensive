import { useEffect, useState } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorage';

interface UseLocalStorageOptions {
  key?: string;
}

export const useLocalStorage = <T>({ key }: UseLocalStorageOptions) => {
  const initialState = key ? getFromLocalStorage<T>(key) : null;
  const [state, setState] = useState<T | null>(initialState);

  useEffect(() => {
    if (key) {
      setToLocalStorage(key, state);
    }
  }, [key, state]);

  return [state, setState] as const;
};
