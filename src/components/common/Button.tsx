import React, { Children, FC } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
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
  &:hover {
    cursor: pointer;
    background-color: var(--color-salmon-dark);
    transition: 0.3s;
  }
`;

export const Button: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Btn>{children}</Btn>
    </Wrapper>
  );
};
