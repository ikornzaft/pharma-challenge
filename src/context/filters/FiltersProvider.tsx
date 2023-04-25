import React, { FC, useReducer } from 'react';
import { filtersReducer } from './filtersReducer';
import { FiltersContext } from './FiltersContext';

export interface FilterState {
  codigo_filter: string;
  nombre_filter: string;
  forma_farmaceutica_filter: string[];
  fabricante_filter: string[];
  procedencia_filter: string[];
  titular_filter: string[];
}

export interface Props {
  children: React.ReactNode;
}

const Filters_INITIAL_STATE = {
  codigo_filter: '',
  nombre_filter: '',
  forma_farmaceutica_filter: [],
  fabricante_filter: [],
  procedencia_filter: [],
  titular_filter: [],
};

export const FiltersProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(filtersReducer, Filters_INITIAL_STATE);

  const setNameFilter = (name: string) => {
    dispatch({ type: '[FILTERS] SET NAME FILTER', payload: name });
  };

  const setFormasFilter = (formas: string[]) => {
    dispatch({ type: '[FILTERS] SET FORMAS FILTER', payload: formas });
  };

  const setFabricantesFilter = (fabricantes: string[]) => {
    dispatch({
      type: '[FILTERS] SET FABRICANTES FILTER',
      payload: fabricantes,
    });
  };

  // const getAllItems = async () => {
  //   const { data } = await itemsApi.get<Item[]>('v1/item');
  //   dispatch({ type: '[ITEMS] GET ALL ITEMS', payload: data });
  // };

  // const addNewItem = async (item: Item) => {
  //   try {
  //     const res = await itemsApi.post('v1/item', item);
  //     dispatch({ type: '[ITEMS] ADD ITEM', payload: item });
  //     toast.success('Item creado correctamente', {
  //       autoClose: 2000,
  //     });
  //     getAllItems();
  //     setTimeout(() => {
  //       router.push('/');
  //     }, 2100);
  //   } catch (error) {
  //     toast.error('Error creando el item', {
  //       autoClose: 2000,
  //     });
  //     console.log(error);
  //   }
  // };

  // const updateItem = async (item: Item) => {
  //   try {
  //     const res = await itemsApi.put(`v1/item/${item.id}`, item);
  //     dispatch({ type: '[ITEMS] UPDATE ITEM', payload: item });
  //     toast.success('Item modificado correctamente', {
  //       autoClose: 2000,
  //     });
  //     getAllItems();
  //     setTimeout(() => {
  //       router.push(`/item/${item.id}`);
  //     }, 2100);
  //   } catch (error) {
  //     toast.error('Error modificando el item', {
  //       autoClose: 2000,
  //     });
  //     console.log(error);
  //   }
  // };

  // const deleteItem = async (id: string) => {
  //   try {
  //     const res = await itemsApi.delete(`v1/item/${id}`);
  //     dispatch({ type: '[ITEMS] DELETE ITEM', payload: id });
  //     toast.success('Item borrado correctamente', {
  //       autoClose: 2000,
  //     });
  //     setTimeout(() => {
  //       getAllItems();
  //       router.push('/');
  //     }, 2100);
  //   } catch (error) {
  //     toast.error('Error borrando el item', {
  //       autoClose: 2000,
  //     });
  //     console.log(error);
  //   }
  // };

  return (
    <FiltersContext.Provider
      value={{ ...state, setNameFilter, setFormasFilter, setFabricantesFilter }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
