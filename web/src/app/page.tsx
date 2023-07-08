'use client';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Container, ProductsList } from './styles';
import { FilterBar } from '@/components/FilterBar';
import { Pages } from '@/components/Pages';
import { ProductCard } from '@/components/ProductCard';
import { useProducts } from '@/hooks/useProduts';
import { useState } from 'react';

export default function Home() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const pageQuery = urlParams.get('page');
  const { isLoading, products, productsPerPage } = useProducts();

  const [actualPage, setActualPage] = useState<number>((): number => {
    if (pageQuery) {
      return parseInt(pageQuery);
    }

    return 1;
  });

  if (isLoading) {
    return (
      <Container>
        <Skeleton height={24} />
        <ProductsList>
          <Skeleton width={256} height={378} />
          <Skeleton width={256} height={378} />
          <Skeleton width={256} height={378} />
          <Skeleton width={256} height={378} />
          <Skeleton width={256} height={378} />
          <Skeleton width={256} height={378} />
          <Skeleton width={256} height={378} />
          <Skeleton width={256} height={378} />
          <Skeleton width={256} height={378} />
          <Skeleton width={256} height={378} />
          <Skeleton width={256} height={378} />
          <Skeleton width={256} height={378} />
        </ProductsList>
      </Container>
    );
  }

  return (
    <Container>
      <FilterBar />
      <Pages
        pages={products!.length / productsPerPage}
        actualPage={actualPage}
        setActualPage={setActualPage}
      />
      <ProductsList>
        {products!.map((product, index) => {
          if (
            index >= productsPerPage * (actualPage - 1) &&
            index <= productsPerPage * actualPage - 1
          ) {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </ProductsList>
      <Pages
        pages={products!.length / productsPerPage}
        actualPage={actualPage}
        setActualPage={setActualPage}
      />
    </Container>
  );
}
