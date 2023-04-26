import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Button, CustomInput, IconButton, Portal } from './common';
import { FiltersContext } from '@/context/filters';
import { device } from '@/styles';
import { PlusCircleOutlined } from '@ant-design/icons';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  @media ${device.tablet} {
    margin-top: 0;
  }
`;

const CreateButtonWrapper = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

const CreateIconButtonWrapper = styled.div`
  position: absolute;
  @media ${device.tablet} {
    display: none;
  }
`;

export const SearchForm = () => {
  const { setNameFilter } = useContext(FiltersContext);
  const [value, setValue] = useState('');
  const router = useRouter();
  console.log(router);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNameFilter(value.toLowerCase());
  };
  return (
    <Form onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        label=""
        placeholder="Buscar"
        value={value}
        setValue={setValue}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" variant="primary-small">
        Buscar
      </Button>
      {router.pathname === '/' && (
        <CreateButtonWrapper>
          <Button
            onClick={() => router.push('/create')}
            type="button"
            variant="secondary-small"
          >
            Agregar Item
          </Button>
        </CreateButtonWrapper>
      )}
      {router.pathname === '/' && (
        <Portal>
          <CreateIconButtonWrapper>
            <IconButton onClick={() => router.push('/create')} variant="big">
              <PlusCircleOutlined />
            </IconButton>
          </CreateIconButtonWrapper>
        </Portal>
      )}
    </Form>
  );
};
