import { Item } from '../../interfaces';
import { ItemsState } from './ItemsProvider';

type ItemsActionType =
  | { type: '[ITEMS] GET ALL ITEMS'; payload: Item[] }
  | { type: '[ITEMS] ADD ITEM'; payload: Item }
  | { type: '[ITEMS] REMOVE ITEM'; payload: string }
  | { type: '[ITEMS] UPDATE ITEM'; payload: Item }
  | { type: '[ITEMS] DELETE ITEM'; payload: string };

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
    case '[ITEMS] UPDATE ITEM':
      const updatedItem = action.payload;
      const otherItems = state.items.filter((item) => {
        item.id !== updatedItem.id;
      });
      return {
        ...state,
        items: [...otherItems, updatedItem],
      };
    case '[ITEMS] DELETE ITEM':
      const itemToDelay = action.payload;
      const newItemsArray = state.items.filter((item) => {
        item.id !== itemToDelay;
      });
      return {
        ...state,
        items: newItemsArray,
      };
    default:
      return state;
  }
};
