'use client';

import * as Popover from '@radix-ui/react-popover';
import { PopoverContent, PopoverTrigger } from './styles';
import Image from 'next/image';

import arrowDown from '@/assets/arrow-down.svg';
import { useState } from 'react';

export function OrderBy() {
  const [open, setOpen] = useState(false);

  function handleClickOnOrder() {
    setOpen(false);
  }

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <span>Organizar por</span>
        <Image src={arrowDown} alt="ícone seta baixo" width={24} height={24} />
      </PopoverTrigger>

      <Popover.Portal>
        <PopoverContent align="end">
          <button onClick={() => handleClickOnOrder()}>Novidades</button>
          <button onClick={() => handleClickOnOrder()}>
            Preço: Maior - menor
          </button>
          <button onClick={() => handleClickOnOrder()}>
            Preço: Menor - maior
          </button>
          <button onClick={() => handleClickOnOrder()}>Mais vendidos</button>
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
}
