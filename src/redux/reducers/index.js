import appReducer from "./appReducers";
import { combineReducers } from "redux";
import { productReducers } from "./productReducers";

const rootReducer = combineReducers({
  app: appReducer,
  product: productReducers,
});
export default rootReducer;
