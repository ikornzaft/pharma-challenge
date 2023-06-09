import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const ListWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  padding-top: 4rem;
`;

export const ListContainer: FC<Props> = ({ children }) => {
  return <ListWrapper>{children}</ListWrapper>;
};
