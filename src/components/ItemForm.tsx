import { Item } from '@/interfaces';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Button, CustomInput, CustomSelect, CustomTextArea } from './common';
import { fabricantes, formaFarmaceutica, paises, titulares } from '@/data';
import { useRouter } from 'next/router';

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

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding-top: 1.5rem;
  gap: 2rem;
`;

export const ItemForm: FC<Props> = ({ handleSubmit, values, setValues }) => {
  const router = useRouter();
  const { pathname } = router;
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
      <CustomSelect
        label="Forma farmacéutica"
        value={values.forma_farmaceutica}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            forma_farmaceutica: e.target.value,
          }))
        }
      >
        <>
          <option value="">- Seleccione una forma farmacéutica -</option>
          <optgroup label="Formas">
            {formaFarmaceutica.map((forma) => (
              <option key={forma} value={forma}>
                {forma}
              </option>
            ))}
          </optgroup>
        </>
      </CustomSelect>
      <CustomSelect
        label="Fabricante"
        value={values.fabricante}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            fabricante: e.target.value,
          }))
        }
      >
        <>
          <option value="">- Seleccione un fabricante -</option>
          <optgroup label="Formas">
            {fabricantes.map((forma) => (
              <option key={forma} value={forma}>
                {forma}
              </option>
            ))}
          </optgroup>
        </>
      </CustomSelect>
      <CustomSelect
        label="Procedencia"
        value={values.procedencia}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            procedencia: e.target.value,
          }))
        }
      >
        <>
          <option value="">- Seleccione un país -</option>
          <optgroup label="Países">
            {paises.map((pais) => (
              <option key={pais} value={pais}>
                {pais}
              </option>
            ))}
          </optgroup>
        </>
      </CustomSelect>
      <CustomSelect
        label="Titular"
        value={values.titular}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            titular: e.target.value,
          }))
        }
      >
        <>
          <option value="">- Seleccione un titular -</option>
          <optgroup label="Titulares">
            {titulares.map((titular) => (
              <option key={titular} value={titular}>
                {titular}
              </option>
            ))}
          </optgroup>
        </>
      </CustomSelect>
      <CustomTextArea
        label="Descripción"
        value={values.descripcion}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            descripcion: e.target.value,
          }))
        }
      />
      <ButtonsWrapper>
        <Button
          onClick={() => {
            router.back();
          }}
          type="button"
          variant="secondary"
        >
          Cancelar
        </Button>
        <Button type="submit" variant="primary">
          {pathname.includes('edit') ? 'Modificar' : 'Crear'}
        </Button>
      </ButtonsWrapper>
    </Form>
  );
};
