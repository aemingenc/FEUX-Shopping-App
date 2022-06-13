import { combineReducers } from "redux";
import { productReducers } from "./productReducers";
import boxReducer from "./boxReducer";

const rootReducer = combineReducers({
  box: boxReducer,
  product: productReducers,
});
export default rootReducer;
