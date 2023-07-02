import Link from 'next/link';
import { styled } from 'styled-components';

export const Container = styled.header`
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16rem;
  height: 8rem;

  & > div {
    display: flex;
    align-items: center;

    gap: 2.4rem;
  }
`;

export const Logo = styled(Link)`
  color: #5d5d6d;
  font-size: 4rem;
  font-weight: 400;
  line-height: 150%;
`;

export const Cart = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;

  & > span {
    position: absolute;

    color: #fff;
    font-size: 1rem;

    width: 1.7rem;
    height: 1.7rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--delete);

    border-radius: 200rem;

    top: 1.5rem;
    left: 1.6rem;
  }
`;
