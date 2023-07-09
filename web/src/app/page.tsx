'use client';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Container, ProductsList } from './styles';
import { FilterBar } from '@/components/FilterBar';
import { Pages } from '@/components/Pages';
import { ProductCard } from '@/components/ProductCard';
import { useProducts } from '@/hooks/useProduts';
import { useEffect, useState } from 'react';
import { useFilter } from '@/context/FilterProvider/useFilter';

export default function Home() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const pageQuery = urlParams.get('page');
  const { isLoading, products, productsPerPage } = useProducts();
  const { search } = useFilter();

  const [actualPage, setActualPage] = useState<number>((): number => {
    if (pageQuery) {
      return parseInt(pageQuery);
    }

    return 1;
  });

  useEffect(() => {
    setActualPage(1);
  }, [search]);

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
        {products!
          .filter((product) =>
            product.name.toLowerCase().includes(search!.toLowerCase())
          )
          .map((product, index) => {
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
