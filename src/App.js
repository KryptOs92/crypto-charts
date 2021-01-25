import logo from './logo.svg';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import CryptoReducer from './state/reducers/CryptoReducer';
import reducers from './state/reducers/index'
import './App.css';
import ApplicationWrapper from './ApplicationWrapper';

function App() {
  let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  store.subscribe(() => {console.log(store.getState())})
  store.dispatch({type: "FETCH_CRYPTO_LIST"})
  store.dispatch({type: "FETCH_CRYPTO_LIST_ERROR"})
  store.dispatch({type: "TEST"})
  return (
    <div className="App">
      <Provider store={store}>
        <ApplicationWrapper />
      </Provider>
        
</div>
  );
}

export default App;
