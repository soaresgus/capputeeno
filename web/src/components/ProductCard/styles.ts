import Link from 'next/link';
import { styled } from 'styled-components';

export const Container = styled(Link)`
  background: #fff;

  border-radius: 0.4rem;

  overflow: hidden;

  width: 25.6rem;
  height: 37.8rem;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  padding-inline: 1.2rem;
`;

export const Title = styled.span`
  color: var(--text-dark);
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 150%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.1rem;

  background: #dce2e5;
`;

export const Price = styled.span`
  color: #09090a;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 150%;
`;
