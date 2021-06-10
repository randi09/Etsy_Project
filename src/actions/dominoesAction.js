import { ADD_DOMINOES } from "../action-types/tumbler_action_type";

export const addDominoesToCart = (dispatch, ProductData) => {
  return dispatch({ type: ADD_DOMINOES, payload: ProductData });
};
