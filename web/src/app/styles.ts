import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  padding-top: 3.4rem;
  padding-bottom: 6rem;

  & > div:nth-child(2),
  & > div:nth-child(4) {
    justify-content: flex-end;
  }

  & > div:nth-child(2) {
    margin-top: 2.4rem;
  }
`;

export const ProductsList = styled.div`
  display: grid;
  justify-content: center;
  gap: 3.2rem;

  margin-top: 3.2rem;
  margin-bottom: 7.4rem;

  grid-template-columns: repeat(auto-fill, 25.6rem);
`;
