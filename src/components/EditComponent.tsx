import { Item } from '@/interfaces';
import React, { FC, useContext } from 'react';
import { ItemForm } from './ItemForm';
import { ItemsContext } from '@/context';
import styled from 'styled-components';
import { Button } from './common';
import { WarningOutlined } from '@ant-design/icons';

interface Props {
  item: Item;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
`;

const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const EditComponent: FC<Props> = ({ item }) => {
  const [values, setValues] = React.useState(item);
  const { updateItem, deleteItem } = useContext(ItemsContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateItem(values);
  };

  const handleDelete = () => {
    deleteItem(values.id);
  };

  return (
    <Wrapper>
      <ItemForm
        handleSubmit={handleSubmit}
        values={values}
        setValues={setValues}
      />
      <Button
        style={{ margin: '1rem 0  ' }}
        type="button"
        variant="warning"
        onClick={handleDelete}
      >
        <ButtonContent>
          <WarningOutlined />
          Eliminar
        </ButtonContent>
      </Button>
    </Wrapper>
  );
};
