import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.8rem;
  background: #f3f5f6;

  padding-right: 1.6rem;

  width: 35.2rem;
`;

export const Input = styled.input`
  flex: 1;

  padding-block: 0.9rem;
  padding-left: 1.6rem;

  background: none;
  border: none;
  outline: none;

  color: var(--text-dark);

  font-size: 1.4rem;
  font-weight: 400;

  &::placeholder {
    color: var(--text-secondary);
  }
`;
