'use client';

import { FilterBar } from '@/components/FilterBar';
import { Container } from './styles';
import { Pages } from '@/components/Pages';

export default function Home() {
  return (
    <Container>
      <FilterBar />
      <Pages />
    </Container>
  );
}
