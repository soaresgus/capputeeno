'use client';

import Image from 'next/image';
import { Saira_Stencil_One } from 'next/font/google';

import { SearchBar } from '../SearchBar';
import { Cart, Container, Logo } from './styles';
import shoppingBag from '@/assets/shopping-bag.svg';

const sairaStencil = Saira_Stencil_One({ subsets: ['latin'], weight: '400' });

export function Header() {
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
          <span>2</span>
        </Cart>
      </div>
    </Container>
  );
}
