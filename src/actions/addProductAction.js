export const setProductData = (dispatch, ProductData) => {
  return dispatch({ type: "ADD_PRODUCTS_TO_STORE", ProductData: ProductData });
};
