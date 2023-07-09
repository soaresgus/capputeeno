'use client';

import { useFilter } from '@/context/FilterProvider/useFilter';
import { OrderBy } from '../OrderBy';
import { Container, ProductType, ProductTypes } from './styles';
import { CategoryTypes } from '@/context/FilterProvider/types';

export function FilterBar() {
  const { category, setCategory } = useFilter();

  function onChangeFilter(category: CategoryTypes) {
    setCategory(category);
  }

  return (
    <Container>
      <ProductTypes>
        <ProductType
          selected={category === CategoryTypes.ALL}
          onClick={() => onChangeFilter(CategoryTypes.ALL)}
        >
          todos os produtos
        </ProductType>
        <ProductType
          selected={category === CategoryTypes.SHIRTS}
          onClick={() => onChangeFilter(CategoryTypes.SHIRTS)}
        >
          camisetas
        </ProductType>
        <ProductType
          selected={category === CategoryTypes.MUGS}
          onClick={() => onChangeFilter(CategoryTypes.MUGS)}
        >
          canecas
        </ProductType>
      </ProductTypes>

      <OrderBy />
    </Container>
  );
}
