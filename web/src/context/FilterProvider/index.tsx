import { createContext, useState } from 'react';
import {
  CategoryTypes,
  FilterTypes,
  IFilterContext,
  IFilterProvider,
} from './types';

export const FilterContext = createContext({} as IFilterContext);

export function FilterProvider({ children }: IFilterProvider) {
  const [category, setCategory] = useState<CategoryTypes>(CategoryTypes.ALL);
  const [filterBy, setFilterBy] = useState<FilterTypes>(FilterTypes.NEWNESS);
  const [search, setSearch] = useState<string | null>('');

  return (
    <FilterContext.Provider
      value={{
        category,
        setCategory,
        filterBy,
        setFilterBy,
        search,
        setSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
