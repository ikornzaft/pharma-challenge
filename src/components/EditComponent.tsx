import { Item } from '@/interfaces';
import React, { FC, useContext } from 'react';
import { ItemForm } from './ItemForm';
import { ItemsContext } from '@/context';

interface Props {
  item: Item;
}

export const EditComponent: FC<Props> = ({ item }) => {
  const [values, setValues] = React.useState(item);
  const { updateItem } = useContext(ItemsContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateItem(values);
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
