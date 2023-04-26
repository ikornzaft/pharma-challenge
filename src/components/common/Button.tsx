import { device } from '@/styles';
import React, { Children, FC } from 'react';
import styled from 'styled-components';

interface Props {
  type: 'button' | 'submit' | 'reset';
  variant:
    | 'primary'
    | 'primary-small'
    | 'secondary'
    | 'secondary-small'
    | 'warning';
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
  padding: 1rem 3rem;
  border: 1px solid var(--color-salmon);
  background-color: var(--color-salmon);
  color: var(--color-white);
  border-radius: 8px;
  font-size: 0.8rem;
  @media ${device.tablet} {
    font-size: 1rem;
  }
  &:hover {
    cursor: pointer;
    background-color: var(--color-salmon-dark);
    transition: 0.3s;
  }
  &.primary-small {
    padding: 0.3rem 1rem;
  }
  &.secondary {
    border: 1px solid var(--color-gray);
    background-color: var(--color-white);
    color: var(--color-gray);
    &:hover {
      background-color: var(--color-salmon-light);
      color: var(--color-salmon);
      border-color: var(--color-salmon);
      transition: 0.3s;
    }
  }
  &.secondary-small {
    border: 1px solid var(--color-gray);
    background-color: var(--color-white);
    color: var(--color-gray);
    padding: 0.3rem 1rem;
    white-space: nowrap;
    &:hover {
      background-color: var(--color-salmon-light);
      color: var(--color-salmon);
      border-color: var(--color-salmon);
      transition: 0.3s;
    }
  }
  &.warning {
    border: 1px solid var(--color-gray);
    background-color: var(--color-red);
    color: var(--color-white);
    &:hover {
      background-color: var(--color-red-dark);
      border-color: var(--color-red-dark);
      transition: 0.3s;
    }
  }
`;

export const Button: FC<Props> = ({ type, variant, children, ...rest }) => {
  return (
    <Wrapper>
      <Btn className={variant} type={type} {...rest}>
        {children}
      </Btn>
    </Wrapper>
  );
};
