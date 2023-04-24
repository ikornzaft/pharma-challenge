import React, { FC, useEffect, useReducer } from 'react';
import { itemsReducer } from './itemsReducer';
import { ItemsContext } from './ItemsContext';
import { Item } from '../../interfaces';
import { itemsApi } from '@/apis';

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

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    const { data } = await itemsApi.get<Item[]>('v1/item');
    dispatch({ type: '[ITEMS] GET ALL ITEMS', payload: data });
  };

  const addNewItem = async (item: Item) => {
    console.log('Add new item');
  };

  return (
    <ItemsContext.Provider value={{ ...state, addNewItem, getAllItems }}>
      {children}
    </ItemsContext.Provider>
  );
};
