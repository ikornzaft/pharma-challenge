import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Button, CustomInput } from './common';
import { FiltersContext } from '@/context/filters';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SearchForm = () => {
  const { setNameFilter } = useContext(FiltersContext);
  const [value, setValue] = useState('');

  const router = useRouter();

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
      <Button
        onClick={() => router.push('/create')}
        type="button"
        variant="secondary-small"
      >
        Agregar Item
      </Button>
    </Form>
  );
};
