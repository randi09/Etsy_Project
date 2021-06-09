import { REMOVE_FROM_CART } from "../action-types/tumbler_action_type";

export const removeFromCart = (dispatch, ProductDataId) => {
  return dispatch({ type: REMOVE_FROM_CART, payload: ProductDataId });
};
