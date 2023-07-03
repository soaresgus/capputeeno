'use client';

import { OrderBy } from '../OrderBy';
import { Container, ProductType, ProductTypes } from './styles';

export function FilterBar() {
  return (
    <Container>
      <ProductTypes>
        <ProductType selected>todos os produtos</ProductType>
        <ProductType>camisetas</ProductType>
        <ProductType>canecas</ProductType>
      </ProductTypes>

      <OrderBy />
    </Container>
  );
}
