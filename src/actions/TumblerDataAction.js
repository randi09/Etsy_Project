import { SET_TUMBLER } from "../action-types/tumbler_action_type";

export const setProductData = (dispatch, ProductData) => {
  return dispatch({ type: SET_TUMBLER, payload: ProductData });
};
