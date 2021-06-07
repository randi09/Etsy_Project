export const cart = (dispatch, ProductData) => {
  return dispatch({ type: CART, ProductData: ProductData });
};
