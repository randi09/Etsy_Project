const initialState = [];

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case "CART":
      return (state = action.ProductData);
    default:
      return state;
  }
};
