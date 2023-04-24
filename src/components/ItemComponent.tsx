import { Item } from '@/interfaces';
import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  item: Item;
}

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  width: 600px;
  height: 100px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 10px 7px -3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 10px 7px -3px rgba(0, 0, 0, 0.1);
    transform: translate(2px, 2px);
  }
`;

const ItemTitle = styled.h2`
  font-size: 1.5rem;
`;

const ItemDescription = styled.p`
  font-size: 1rem;
`;

export const ItemComponent: FC<Props> = ({ item }) => {
  return (
    <ItemWrapper>
      <ItemTitle>{item.nombre}</ItemTitle>
      <ItemDescription>{item.codigo}</ItemDescription>
      <ItemDescription>{item.descripcion}</ItemDescription>
    </ItemWrapper>
  );
};
