const initialState = [];

export const products = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS_TO_STORE":
      return (state = action.ProductData);
    default:
      return state;
  }
};
