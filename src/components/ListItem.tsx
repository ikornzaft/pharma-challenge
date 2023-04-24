import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Item } from '@/interfaces';
import Image from 'next/image';
import { RightSquareOutlined } from '@ant-design/icons';

interface Props {
  item: Item;
}

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: red;
  width: 600px;
  height: 100px;
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: blue;
  width: 70%;
`;

const ItemTitle = styled.h2`
  font-size: 1.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
`;

export const ListItem: FC<Props> = ({ item }) => {
  const { nombre, descripcion, imagen } = item;
  const [imgSrc, setImgSrc] = useState(imagen);
  return (
    <Item>
      <ItemContent>
        <Image
          src={imgSrc}
          alt={nombre}
          width={100}
          height={100}
          onError={() => {
            setImgSrc('https://i.stack.imgur.com/7W5Wq.png?s=64&g=1');
          }}
        />
        <ItemTitle>{nombre}</ItemTitle>
        <Description>{descripcion}</Description>
        <RightSquareOutlined />
      </ItemContent>
    </Item>
  );
};
