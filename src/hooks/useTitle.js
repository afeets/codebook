import { useEffect } from 'react';

export const UseTitle = (title) => {
  
  useEffect(() => {
    document.title = `${title} - CodeBook`;
  }, [ title]);

  return null;
}
