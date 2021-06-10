import { ADD_DOMINOES } from "../action-types/tumbler_action_type";

const initialState = [];

export const addDominoes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOMINOES:
      return (state = action.payload);
    default:
      return state;
  }
};
