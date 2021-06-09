import { SELECTED_PRODUCT } from "../action-types/tumbler_action_type";

const initialState = {};

export const setProduct = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return (state = action.payload);
    default:
      return state;
  }
};
