import { device } from '@/styles';
import React, { Children, FC } from 'react';
import styled from 'styled-components';

interface Props {
  variant: 'primary';
  children: React.ReactNode;
  [x: string]: any;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-salmon);
  background-color: var(--color-salmon);
  color: var(--color-white);
  border-radius: 50%;
  font-size: 1.2rem;
  @media ${device.tablet} {
    font-size: 1.5rem;
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
