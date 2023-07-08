'use client';
import { ArrowContainer, Button, Container, NumberContainer } from './styles';

import Image from 'next/image';

import arrowLeft from '@/assets/arrow-left.svg';
import arrowRight from '@/assets/arrow-right.svg';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface IPagesProps {
  pages?: number;
  actualPage: number;
  setActualPage(page: number): void;
}

export function Pages({ pages = 1, actualPage, setActualPage }: IPagesProps) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/?page=${actualPage}`);
  }, [actualPage]);

  return (
    <Container>
      <NumberContainer>
        {Array.from({ length: pages }).map((_, index) => (
          <Button
            key={index}
            selected={actualPage === index + 1}
            onClick={() => setActualPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </NumberContainer>
      <ArrowContainer>
        <Button
          onClick={() => {
            if (actualPage > 1) {
              setActualPage(actualPage - 1);
            }
          }}
        >
          <Image src={arrowLeft} alt="Seta esquerda" width={24} height={24} />
        </Button>
        <Button
          onClick={() => {
            if (actualPage < pages) {
              setActualPage(actualPage + 1);
            }
          }}
        >
          <Image src={arrowRight} alt="Seta direita" width={24} height={24} />
        </Button>
      </ArrowContainer>
    </Container>
  );
}
