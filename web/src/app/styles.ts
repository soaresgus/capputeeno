import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  padding-top: 3.4rem;
  padding-bottom: 6rem;

  & > div + div {
    margin-top: 2.4rem;
    justify-content: flex-end;
  }
`;
