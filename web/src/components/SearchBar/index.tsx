'use client';

import Image from 'next/image';
import { Container, Input } from './styles';

import searchIcon from '@/assets/search.svg';
import { useFilter } from '@/context/FilterProvider/useFilter';
import { ChangeEvent } from 'react';

export function SearchBar() {
  const { search, setSearch } = useFilter();

  return (
    <Container>
      <Input
        placeholder="Procurando por algo específico?"
        value={search || ''}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearch(event.target.value)
        }
      />
      <Image src={searchIcon} alt="Ícone pesquisa" width={24} height={24} />
    </Container>
  );
}
