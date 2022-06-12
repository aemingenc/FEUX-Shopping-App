import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/index";

let store = createStore(rootReducer, applyMiddleware(thunk));
// Eger development aşamasındaysa thunk ve devtools kullan değilse sadece thunk
// if (process.env.NODE_ENV === "development"){
//     store = createStore(rootReducer,compose(applyMiddleware(thunk),window.__REDUX__DEVTOOLS__EXTENSION__&& window.__REDUX__DEVTOOLS__EXTENSION__()))
// }
// else{
//     store = createStore(rootReducer,applyMiddleware(thunk))
// }

export default store;
