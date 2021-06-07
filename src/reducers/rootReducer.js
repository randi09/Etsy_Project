import { combineReducers } from "redux";
import { tumblerReducer } from "../reducers/tumblerReducer";
import { products } from "./addProductsReducer";
import { cart } from "./cartReducer";

// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({
  tumblerReducer,
  products,
  cart,
});
export default rootReducer;
