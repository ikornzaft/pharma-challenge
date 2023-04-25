import { FilterState } from './FiltersProvider';

type FiltersActionType = {
  type: '[FILTERS] SET NAME FILTER';
  payload: string;
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
    default:
      return state;
  }
};
