import { createContext } from 'react';
import { Item } from '../../interfaces';

interface ContextProps {
  items: Item[];
  addNewItem: (item: Item) => void;
  getAllItems: () => void;
}

export const ItemsContext = createContext({} as ContextProps);
