import { CART, REMOVE_FROM_CART } from "../action-types/tumbler_action_type";

const initialState = [];

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((productItem) => productItem.id !== action.payload);
    default:
      return state;
  }
};
