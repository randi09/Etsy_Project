import { ADD_PYRAMID } from "../action-types/tumbler_action_type";

const initialState = [];

export const addPyramid = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PYRAMID:
      return (state = action.ProductData);
    default:
      return state;
  }
};
