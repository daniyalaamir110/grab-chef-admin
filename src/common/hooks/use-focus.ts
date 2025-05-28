import { RefObject, useEffect, useRef } from 'react';

export const useFocus = <T extends HTMLElement>(): RefObject<T> => {
  const inputRef = useRef<T>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return inputRef as RefObject<T>;
};
