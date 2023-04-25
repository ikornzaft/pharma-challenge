import { Item } from '@/interfaces';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from './common';
import { LeftCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface Props {
  item: Item;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
`;

const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white);
  width: 70%;
  height: fit-content;
  padding: 2rem;
  overflow: hidden;
  border-radius: 8px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  min-width: 300px;
  max-width: 300px;
  min-height: 300px;
  max-height: 300px;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--color-white);
`;

const DataWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: var(--color-gray-dark);
`;

const ItemTitle = styled.h2`
  grid-column-start: span 3;
  font-weight: 600;
  font-size: 1.2rem;
`;

const ItemDescription = styled.p`
  grid-column-start: span 3;
  font-size: 1rem;
`;

const SecondaryDescription = styled.p`
  font-size: 0.9rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-right: 4rem;
`;

const BackIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0.3rem;
  left: 1rem;
  cursor: pointer;
  color: var(--color-salmon);
  font-size: 2rem;
  &:hover {
    color: var(--color-salmon-dark);
    transition: all 0.2s ease-in-out;
    transform: translateX(-3px);
  }
`;

export const ItemComponent: FC<Props> = ({ item }) => {
  const router = useRouter();

  console.log(item);

  const handleClick = () => {
    router.push(`/edit/${item.id}`);
  };
  return (
    <Wrapper>
      <Item>
        <BackIconWrapper>
          <Link href="/">
            <LeftCircleOutlined />
          </Link>
        </BackIconWrapper>
        <ContentWrapper>
          <ImageWrapper>
            <Image
              src={item.imagen}
              alt={item.nombre}
              width={300}
              height={300}
            />
          </ImageWrapper>
          <DataWrapper>
            <ItemTitle>{item.nombre}</ItemTitle>
            <ItemDescription>{item.descripcion}</ItemDescription>
            <SecondaryDescription>
              <strong>Presentación</strong>: {item.forma_farmaceutica}
            </SecondaryDescription>
            <SecondaryDescription>
              <strong>Laboratorio</strong>: {item.fabricante}
            </SecondaryDescription>
            <SecondaryDescription>
              <strong>Procedencia</strong>: {item.procedencia}
            </SecondaryDescription>
            <SecondaryDescription>
              <strong>Titular</strong>: {item.titular}
            </SecondaryDescription>
          </DataWrapper>
        </ContentWrapper>
        <ButtonWrapper>
          <Button type="button" variant="primary" onClick={handleClick}>
            Editar este item
          </Button>
        </ButtonWrapper>
      </Item>
    </Wrapper>
  );
};
