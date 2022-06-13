
import './App.css';
import {Provider as StoreProvider} from "react-redux"
import Main from './pages/Main';
import store from "./redux/store"

function App() {
  return (
    <StoreProvider store = {store}>
        <Main/>
    </StoreProvider>
  );
}

export default App;
