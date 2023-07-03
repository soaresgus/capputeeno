import { css, styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ProductTypes = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

interface IProductTypeProps {
  selected?: boolean;
}

export const ProductType = styled.button<IProductTypeProps>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  width: fit-content;

  color: var(--text-dark);
  font-size: 1.6rem;
  line-height: 2.2rem;
  text-transform: uppercase;

  ${(props) =>
    props.selected &&
    css`
      font-weight: 600;

      &::after {
        content: '';
        width: 100%;
        height: 0.4rem;
        background-color: var(--orange);
      }
    `}
`;
