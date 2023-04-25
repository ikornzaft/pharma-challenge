import { FiltersContext } from '@/context/filters';
import { Item } from '@/interfaces';
import { useContext } from 'react';

export const useFilterItems = (items: Item[]) => {
  let filteredItems = [...items];
  const { nombre_filter, forma_farmaceutica_filter, fabricante_filter } =
    useContext(FiltersContext);
  console.log(forma_farmaceutica_filter);
  if (nombre_filter) {
    filteredItems = filteredItems.filter((item) =>
      item.nombre.toLowerCase().includes(nombre_filter)
    );
  }
  if (forma_farmaceutica_filter.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      forma_farmaceutica_filter.includes(item.forma_farmaceutica)
    );
  }
  if (fabricante_filter.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      fabricante_filter.includes(item.fabricante)
    );
  }
  return filteredItems;
};
