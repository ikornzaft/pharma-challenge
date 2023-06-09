import { createContext } from 'react';

interface ContextProps {
  codigo_filter: string;
  nombre_filter: string;
  forma_farmaceutica_filter: string[];
  fabricante_filter: string[];
  procedencia_filter: string[];
  titular_filter: string[];
  setNameFilter: (name: string) => void;
  setFormasFilter: (formas: string[]) => void;
  setFabricantesFilter: (fabricantes: string[]) => void;
}

export const FiltersContext = createContext({} as ContextProps);
