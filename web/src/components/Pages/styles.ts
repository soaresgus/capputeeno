import { css, styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const NumberContainer = styled.div`
  display: flex;
  gap: 0.2rem;
`;

export const ArrowContainer = styled.div`
  display: flex;
  gap: 0.4rem;
`;

interface IButtonProps {
  selected?: boolean;
}

export const Button = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.2rem;
  height: 3.2rem;

  font-size: 1.6rem;
  font-weight: 400;

  border-radius: 0.8rem;
  background: #e9e9f0;

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid var(--orange);
      background: #f5f5fa;

      color: var(--orange);
      font-weight: 600;
    `};
`;
