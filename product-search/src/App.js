
import './App.css';
import {Provider as StoreProvider} from "react-redux"
import Main from './pages/Main';
import store from "./redux/store"

// import {createStore,applyMiddleware} from "redux"
// import thunk from "redux-thunk"

function App() {

  // const initialState = {
  //   loading : false ,
  //   productList : [],


  // }
  // const rootReducer = (state = initialState,{type,payload}) => {
  //   switch (type) {
  //     case "SET_LOADING_FALSE":
  //       return {
  //         ...state,
  //         loading:false,
  //       }
  //       case "SET_LOADING_TRUE":
  //       return {
  //         ...state,
  //         loading:true,
  //       }
  //       case "SET_PRODUCT_LIST":
  //       return {
  //         ...state,
  //         productList:payload,
  //       }
        
  //     default:
  //       return state;
  //   }
  // }
  // let store = createStore(rootReducer,applyMiddleware(thunk))

  
  return (
    <StoreProvider store = {store}>
        <Main/>
    </StoreProvider>
  );
}

export default App;
