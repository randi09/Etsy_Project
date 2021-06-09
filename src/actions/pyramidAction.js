import { ADD_PYRAMID } from "../action-types/tumbler_action_type";

export const addPyramidToCart = (dispatch, ProductData) => {
  return dispatch({ type: ADD_PYRAMID, payload: ProductData });
};
