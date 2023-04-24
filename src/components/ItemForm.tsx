import { Item } from '@/interfaces';
import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  values: Item;
  setValues: React.Dispatch<React.SetStateAction<Item>>;
}

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const ItemForm: FC<Props> = ({ handleSubmit, values, setValues }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Código del producto"
        value={values.codigo}
        required
        onChange={(e) =>
          setValues((prev) => ({ ...prev, codigo: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="Nombre del producto"
        value={values.nombre}
        required
        onChange={(e) =>
          setValues((prev) => ({ ...prev, nombre: e.target.value }))
        }
      />
      <button>Submit</button>
    </Form>
  );
};

// id: string;
// nombre: string;
// forma_farmaceutica: string;
// fabricante: string;
// procedencia: string;
// titular: string;
// descripcion: string;
// imagen: string;
