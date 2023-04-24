import { Item } from '@/interfaces';
import React, { FC } from 'react';
import { ItemForm } from './ItemForm';

interface Props {
  item: Item;
}

export const EditComponent: FC<Props> = ({ item }) => {
  const [values, setValues] = React.useState(item);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Edit item');
  };

  return (
    <ItemForm
      handleSubmit={handleSubmit}
      values={values}
      setValues={setValues}
    />
  );
};
