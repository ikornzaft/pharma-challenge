import { createContext } from 'react';
import { Item } from '../../interfaces';

interface ContextProps {
  items: Item[];
  addNewItem: (item: Item) => void;
}

export const ItemsContext = createContext({} as ContextProps);
