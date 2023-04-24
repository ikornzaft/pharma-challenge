import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Item } from '@/interfaces';
import Image from 'next/image';
import { RightSquareOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

interface Props {
  item: Item;
}

const Item = styled.div`
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
  const router = useRouter();

  const handleClick = () => {
    router.push(`/item/${item.id}`);
  };

  return (
    <Item onClick={handleClick}>
      <ItemContent>
        <Image
          src={imgSrc}
          alt={nombre}
          width={100}
          height={100}
          onError={() => {
            setImgSrc('/fallbackImg.jpg');
          }}
        />
        <ItemTitle>{nombre}</ItemTitle>
        <Description>{descripcion}</Description>
      </ItemContent>
      <RightSquareOutlined />
    </Item>
  );
};
