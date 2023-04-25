import { FiltersContext } from '@/context/filters';
import { Item } from '@/interfaces';
import { useContext } from 'react';

export const useFilterItems = (items: Item[]) => {
  let filteredItems = [...items];
  const { nombre_filter } = useContext(FiltersContext);
  if (nombre_filter) {
    filteredItems = filteredItems.filter((item) =>
      item.nombre.toLowerCase().includes(nombre_filter)
    );
  }
  return filteredItems;
};
