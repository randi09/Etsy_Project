import { combineReducers } from "redux";
import { tumblerReducer } from "../reducers/tumblerReducer";
import { products } from "./addProductsReducer";

// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({
  tumblerReducer,
  products,
});
export default rootReducer;
