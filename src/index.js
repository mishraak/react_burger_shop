import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";

import App from './components/App';
import reducers from './reducers';

const initialState = {
	totalReducer : {
		total : 0,
		choices : []		
	},
	windowReducer : {
		window : 0
	}

}

const store = createStore(reducers, initialState, applyMiddleware(reduxLogger, reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
