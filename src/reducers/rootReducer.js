import { combineReducers } from "redux";
import { tumblerReducer } from "../reducers/tumblerReducer";
import { setProduct } from "../reducers/setProductReducer";
import { products } from "./addProductsReducer";
import { cart } from "./cartReducer";
import { addPyramid } from "./addPyramidReducer";

// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({
  tumblerReducer,
  products,
  cart,
  setProduct,
  addPyramid,
});
export default rootReducer;
