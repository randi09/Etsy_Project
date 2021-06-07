import { SET_TUMBLER } from "../action-types/tumbler_action_type";

const initialState = [];

export const tumblerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TUMBLER:
      return (state = "");
    default:
      return state;
  }
};
