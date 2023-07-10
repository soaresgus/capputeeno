import Link from 'next/link';
import { styled } from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 20rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.35rem;

  padding-top: 2.85rem;
  padding-bottom: 8.9rem;
`;

export const BackButton = styled(Link)`
  display: flex;
  gap: 0.8rem;

  color: #617480;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 150%;
`;

export const ProductContainer = styled.div`
  display: grid;
  gap: 3.2rem;

  justify-items: center;

  grid-template-columns: 1fr 1fr;

  & > img {
    position: relative !important;
    border-radius: 1rem;
    aspect-ratio: 1 / 1;
    max-width: 64rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductDetails = styled.div`
  display: grid;

  grid-template-rows:
    calc(2.4rem + 1.2rem) calc(4.8rem + 0.4rem) calc(3rem + 2.4rem)
    calc(1.8rem + 5.8rem) calc(2.4rem + 0.8rem) 1fr;
`;

export const ProductCategory = styled.span`
  color: var(--text-dark);
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 1.2rem;
`;

export const ProductTitle = styled.span`
  color: var(--text-dark);
  font-size: 3.2rem;
  font-weight: 300;
  line-height: 150%;

  margin-bottom: 0.4rem;
`;

export const ProductPrice = styled.span`
  color: #09090a;
  font-size: 2rem;
  font-weight: 600;
  line-height: 150%;

  margin-bottom: 2.4rem;
`;

export const ProductShipping = styled.span`
  color: var(--text-dark);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 5.8rem;
`;

export const ProductDescriptionTitle = styled.span`
  color: var(--text-secondary);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
  text-transform: uppercase;

  margin-bottom: 0.8rem;
`;

export const ProductDescription = styled.span`
  color: var(--text-secondary);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 150%;

  @media (max-width: 1024px) {
    margin-bottom: 2rem;
  }
`;

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 1.2rem;

  width: 100%;

  border-radius: 0.4rem;
  background: #115d8c;

  padding-block: 1rem;

  color: #f5f5fa;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
  text-transform: uppercase;
`;
