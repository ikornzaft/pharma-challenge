import React, { FC, useContext, useState } from 'react';
import { ItemForm } from './';
import { ItemsContext } from '@/context';
import styled from 'styled-components';

const emptyValues = {
  id: '',
  codigo: '',
  nombre: '',
  forma_farmaceutica: '',
  fabricante: '',
  procedencia: '',
  titular: '',
  descripcion: '',
  imagen: '',
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
`;

export const CreateComponent: FC = () => {
  const { addNewItem } = useContext(ItemsContext);
  const [values, setValues] = useState(emptyValues);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewItem(values);
  };

  return (
    <Wrapper>
      <ItemForm
        handleSubmit={handleSubmit}
        values={values}
        setValues={setValues}
      />
    </Wrapper>
  );
};
