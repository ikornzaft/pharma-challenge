import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Item } from '@/interfaces';
import Image from 'next/image';
import { CaretRightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

interface Props {
  item: Item;
}

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-salmon-light);
  border: 6px solid var(--color-white);
  width: 60%;
  height: 140px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 10px 7px -3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  padding: 1rem;
  &:hover {
    box-shadow: 0px 10px 7px -3px rgba(0, 0, 0, 0.1);
    transform: translate(2px, 2px);
  }
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 200px;
  max-width: 100px;
  min-width: 100px;
  height: auto;
  max-height: 100px;
  min-height: 100px;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  color: var(--color-gray-dark);
`;

const ItemTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 0.9rem;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-salmon);
  font-size: 3rem;
  margin-left: 1rem;
  ${Item}:hover & {
    color: var(--color-salmon-dark);
    transition: all 0.2s ease-in-out;
    transform: translatex(3px);
  }
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
        <ImageWrapper>
          <Image
            src={imgSrc}
            alt={nombre}
            width={100}
            height={100}
            onError={() => {
              setImgSrc('/fallbackImg.jpg');
            }}
          />
        </ImageWrapper>
        <ContentWrapper>
          <ItemTitle>{nombre}</ItemTitle>
          <Description>{descripcion}</Description>
        </ContentWrapper>
      </ItemContent>
      <IconWrapper>
        <CaretRightOutlined />
      </IconWrapper>
    </Item>
  );
};
