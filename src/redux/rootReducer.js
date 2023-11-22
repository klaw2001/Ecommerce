import { combineReducers } from "redux";
import productsArrReducer from "./products/Reducer";
import categoryReducer from "./category/Reducer";
import cartReducer from "./cart/Reducer";
// import userReducer from "./users/Reducer";
const rootReducer = combineReducers({
  productsArr: productsArrReducer,
  categories: categoryReducer,
  cart: cartReducer,
//   user: userReducer,
});

export default rootReducer;
