import { SELECTED_PRODUCT } from "../action-types/tumbler_action_type";

export const setProductData = (dispatch, product) => {
  return dispatch({ type: SELECTED_PRODUCT, payload: product });
};
