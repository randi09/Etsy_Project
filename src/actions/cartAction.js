import { CART } from "../action-types/tumbler_action_type";

export const addToCart = (dispatch, ProductData) => {
  return dispatch({ type: CART, payload: ProductData });
};
