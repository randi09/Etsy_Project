import { ADD_PRODUCTS_TO_STORE } from "../action-types/tumbler_action_type";

export const setProductData = (dispatch, ProductData) => {
  return dispatch({ type: ADD_PRODUCTS_TO_STORE, ProductData: ProductData });
};
