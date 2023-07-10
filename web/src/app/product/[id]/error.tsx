'use client';

import { ErrorContainer } from './styles';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <ErrorContainer>
      <span>Não foi possível localizar o produto</span>
      <button onClick={reset}>Tentar novamente</button>
    </ErrorContainer>
  );
}
