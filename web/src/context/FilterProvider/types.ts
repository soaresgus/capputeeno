import { ReactNode } from 'react';

export enum CategoryTypes {
  'ALL',
  'SHIRTS',
  'MUGS',
}

export enum FilterTypes {
  'NEWNESS',
  'HIGH-PRICE-TO-LOW-PRICE',
  'LOW-PRICE-TO-HIGH-PRICE',
  'BEST-SELLER',
}

export interface IFilterContext {
  category: CategoryTypes;
  setCategory: (category: CategoryTypes) => void;
  filterBy: FilterTypes;
  setFilterBy: (filter: FilterTypes) => void;
  search: string | null;
  setSearch: (search: string) => void;
}

export interface IFilterProvider {
  children: ReactNode;
}
