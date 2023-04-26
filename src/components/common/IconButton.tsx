import { device } from '@/styles';
import React, { Children, FC } from 'react';
import styled from 'styled-components';

interface Props {
  variant: 'big' | 'small';
  children: React.ReactNode;
  [x: string]: any;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-salmon);
  background-color: var(--color-salmon);
  color: var(--color-white);
  border-radius: 50%;
  &.big {
    width: 3rem;
    height: 3rem;
    font-size: 1.2rem;
    @media ${device.tablet} {
      font-size: 1.5rem;
    }
  }
  &.small {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    font-size: 1rem;
    @media ${device.tablet} {
      font-size: 1.2rem;
    }
  }
  &:hover {
    cursor: pointer;
    background-color: var(--color-salmon-dark);
    transition: 0.3s;
  }
`;

export const IconButton: FC<Props> = ({ variant, children, ...rest }) => {
  return (
    <Wrapper>
      <Btn className={variant} type="button" {...rest}>
        {children}
      </Btn>
    </Wrapper>
  );
};
