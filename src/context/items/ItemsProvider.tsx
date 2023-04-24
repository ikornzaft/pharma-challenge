import React, { FC, useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';
import { itemsReducer } from './itemsReducer';
import { ItemsContext } from './ItemsContext';
import { Item } from '../../interfaces';
import { itemsApi } from '@/apis';
import { useRouter } from 'next/router';

export interface ItemsState {
  items: Item[];
}

export interface Props {
  children: React.ReactNode;
}

const Items_INITIAL_STATE = {
  items: [],
};

export const ItemsProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(itemsReducer, Items_INITIAL_STATE);
  const router = useRouter();

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    const { data } = await itemsApi.get<Item[]>('v1/item');
    dispatch({ type: '[ITEMS] GET ALL ITEMS', payload: data });
  };

  const addNewItem = async (item: Item) => {
    try {
      const res = await itemsApi.post('v1/item', item);
      dispatch({ type: '[ITEMS] ADD ITEM', payload: item });
      toast.success('Item creado correctamente', {
        autoClose: 2000,
      });
      setTimeout(() => {
        router.push('/');
      }, 2100);
    } catch (error) {
      toast.error('Error creando el item', {
        autoClose: 2000,
      });
      console.log(error);
    }
  };

  const updateItem = async (item: Item) => {
    try {
      const res = await itemsApi.put(`v1/item/${item.id}`, item);
      dispatch({ type: '[ITEMS] UPDATE ITEM', payload: item });
      toast.success('Item modificado correctamente', {
        autoClose: 2000,
      });
      setTimeout(() => {
        router.push(`/item/${item.id}`);
      }, 2100);
    } catch (error) {
      toast.error('Error modificando el item', {
        autoClose: 2000,
      });
      console.log(error);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const res = await itemsApi.delete(`v1/item/${id}`);
      dispatch({ type: '[ITEMS] DELETE ITEM', payload: id });
      toast.success('Item borrado correctamente', {
        autoClose: 2000,
      });
      setTimeout(() => {
        getAllItems();
        router.push('/');
      }, 2100);
    } catch (error) {
      toast.error('Error borrando el item', {
        autoClose: 2000,
      });
      console.log(error);
    }
  };

  return (
    <ItemsContext.Provider
      value={{ ...state, addNewItem, getAllItems, updateItem, deleteItem }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
