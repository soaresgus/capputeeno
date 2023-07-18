'use client';

import Image from 'next/image';
import { Saira_Stencil_One } from 'next/font/google';

import { SearchBar } from '../SearchBar';
import { Cart, Container, Logo } from './styles';
import shoppingBag from '@/assets/shopping-bag.svg';
import { useCart } from '@/hooks/useCart';
import { useEffect, useState } from 'react';

const sairaStencil = Saira_Stencil_One({ subsets: ['latin'], weight: '400' });

export function Header() {
  const { items } = useCart();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Container>
      <Logo href="/" className={sairaStencil.className}>
        capputeeno
      </Logo>

      <div>
        <SearchBar />
        <Cart href="/cart">
          <Image
            src={shoppingBag}
            alt="Ícone carrinho"
            width={24}
            height={24}
          />
          <span>{isClient ? items?.length : 0}</span>
        </Cart>
      </div>
    </Container>
  );
}
