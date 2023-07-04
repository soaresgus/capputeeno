'use client';

import { FilterBar } from '@/components/FilterBar';
import { Container } from './styles';
import { Pages } from '@/components/Pages';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  return (
    <Container>
      <FilterBar />
      <Pages />
      <ProductCard
        product={{
          id: '4894bf62-acf0-41c7-9a0f-b3f00c7a5f2c',
          name: 'Camiseta Broken Saints',
          image_url:
            'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg',
          price_in_cents: 2695,
          category: 't-shirts',
        }}
      />
    </Container>
  );
}
