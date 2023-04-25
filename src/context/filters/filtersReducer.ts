import { FilterState } from './FiltersProvider';

type FiltersActionType =
  | {
      type: '[FILTERS] SET NAME FILTER';
      payload: string;
    }
  | {
      type: '[FILTERS] SET FORMAS FILTER';
      payload: string[];
    }
  | {
      type: '[FILTERS] SET FABRICANTES FILTER';
      payload: string[];
    };

export const filtersReducer = (
  state: FilterState,
  action: FiltersActionType
): FilterState => {
  switch (action.type) {
    case '[FILTERS] SET NAME FILTER':
      return {
        ...state,
        nombre_filter: action.payload,
      };
    case '[FILTERS] SET FORMAS FILTER':
      return {
        ...state,
        forma_farmaceutica_filter: action.payload,
      };
    case '[FILTERS] SET FABRICANTES FILTER':
      return {
        ...state,
        fabricante_filter: action.payload,
      };
    default:
      return state;
  }
};
