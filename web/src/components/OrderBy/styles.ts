import * as Popover from '@radix-ui/react-popover';
import { keyframes, styled } from 'styled-components';

export const PopoverTrigger = styled(Popover.Trigger)`
  display: flex;
  gap: 0.8rem;

  width: fit-content;

  & > span {
    color: var(--text-secondary);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.2rem;
  }
`;

const openAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(3px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const closeAnimation = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: 0;
        transform: translateY(3px);
    }
`;

export const PopoverContent = styled(Popover.Content)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.4rem;

  padding: 1.2rem 1.6rem;

  border-radius: 0.4rem;
  background: #fff;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);

  &[data-state='open'] {
    animation: ${openAnimation} 0.2s ease-in-out;
  }

  &[data-state='closed'] {
    animation: ${closeAnimation} 0.2s ease-in-out;
  }

  & > button {
    color: var(--text-secondary);
    text-align: start;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.2rem;
  }
`;
