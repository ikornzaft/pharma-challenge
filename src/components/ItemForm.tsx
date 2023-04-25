import { Item } from '@/interfaces';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Button, CustomInput, Select } from './common';
import { formaFarmaceutica } from '@/data';

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
  background-color: var(--color-white);
  padding: 32px;
  border-radius: 8px;
  width: 700px;
`;

export const ItemForm: FC<Props> = ({ handleSubmit, values, setValues }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <CustomInput
        onChange={(e) =>
          setValues((prev) => ({ ...prev, codigo: e.target.value }))
        }
        type="text"
        label="Código"
        placeholder="A11111A"
        value={values.codigo}
        required
      />
      <CustomInput
        type="text"
        label="Nombre"
        value={values.nombre}
        required
        onChange={(e) =>
          setValues((prev) => ({ ...prev, nombre: e.target.value }))
        }
      />
      <Select
        label="Forma farmacéutica"
        value={values.forma_farmaceutica}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            forma_farmaceutica: e.target.value,
          }))
        }
      >
        {formaFarmaceutica.map((forma) => (
          <option key={forma} value={forma}>
            {forma}
          </option>
        ))}
      </Select>
      <Button>Modificar</Button>
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
