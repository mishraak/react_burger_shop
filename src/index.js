import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";

import App from './components/App';
import reducers from './reducers';

const initialState = {		
	choices : []
}


const store = createStore(reducers, applyMiddleware(reduxLogger, reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
