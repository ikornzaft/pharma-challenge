import { Item } from '../../interfaces';
import { ItemsState } from './ItemsProvider';

type ItemsActionType =
  | { type: '[ITEMS] GET ALL ITEMS'; payload: Item[] }
  | { type: '[ITEMS] ADD ITEM'; payload: Item }
  | { type: '[ITEMS] REMOVE ITEM'; payload: string };

export const itemsReducer = (
  state: ItemsState,
  action: ItemsActionType
): ItemsState => {
  switch (action.type) {
    case '[ITEMS] GET ALL ITEMS':
      return {
        ...state,
        items: [...action.payload],
      };
    case '[ITEMS] ADD ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};
