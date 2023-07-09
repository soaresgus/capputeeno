'use client';

import * as Popover from '@radix-ui/react-popover';
import { PopoverContent, PopoverTrigger } from './styles';
import Image from 'next/image';

import arrowDown from '@/assets/arrow-down.svg';
import { useState } from 'react';
import { useFilter } from '@/context/FilterProvider/useFilter';
import { FilterTypes } from '@/context/FilterProvider/types';

export function OrderBy() {
  const [open, setOpen] = useState(false);
  const { setFilterBy } = useFilter();

  function handleClickOnOrder(filterBy: FilterTypes) {
    setOpen(false);
    setFilterBy(filterBy);
  }

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <span>Organizar por</span>
        <Image src={arrowDown} alt="ícone seta baixo" width={24} height={24} />
      </PopoverTrigger>

      <Popover.Portal>
        <PopoverContent align="end">
          <button onClick={() => handleClickOnOrder(FilterTypes.NEWNESS)}>
            Novidades
          </button>
          <button
            onClick={() =>
              handleClickOnOrder(FilterTypes['HIGH-PRICE-TO-LOW-PRICE'])
            }
          >
            Preço: Maior - menor
          </button>
          <button
            onClick={() =>
              handleClickOnOrder(FilterTypes['LOW-PRICE-TO-HIGH-PRICE'])
            }
          >
            Preço: Menor - maior
          </button>
          <button
            onClick={() => handleClickOnOrder(FilterTypes['BEST-SELLER'])}
          >
            Mais vendidos
          </button>
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
}
