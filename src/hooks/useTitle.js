import React, { useEffect } from 'react';

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Bookshop - ${title}`;
  }, [title]);
  return null;
};
