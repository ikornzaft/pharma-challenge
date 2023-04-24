import React, { FC, useContext, useState } from 'react';
import { ItemForm } from './';
import { ItemsContext } from '@/context';

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

export const CreateComponent: FC = () => {
  const { addNewItem } = useContext(ItemsContext);
  const [values, setValues] = useState(emptyValues);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewItem(values);
  };

  return (
    <div>
      <ItemForm
        handleSubmit={handleSubmit}
        values={values}
        setValues={setValues}
      />
    </div>
  );
};
