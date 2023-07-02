'use client';

import Image from 'next/image';
import { Container, Input } from './styles';

import searchIcon from '@/assets/search.svg';

export function SearchBar() {
  return (
    <Container>
      <Input placeholder="Procurando por algo específico?" />
      <Image src={searchIcon} alt="Ícone pesquisa" width={24} height={24} />
    </Container>
  );
}
