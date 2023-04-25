import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CustomInput } from './common';
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNameFilter(value.toLowerCase());
  };
  return (
    <Form onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        placeholder="Buscar"
        value={value}
        setValue={setValue}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Buscar</button>
    </Form>
  );
};
