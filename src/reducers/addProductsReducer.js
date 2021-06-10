import { ADD_PRODUCTS_TO_STORE } from "../action-types/tumbler_action_type";
const initialState = [];

export const products = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_TO_STORE:
      return (state = action.payload);
    default:
      return state;
  }
};
