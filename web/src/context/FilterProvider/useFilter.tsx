import { useContext } from 'react';
import { FilterContext } from '.';

export function useFilter() {
  const context = useContext(FilterContext);

  return context;
}
