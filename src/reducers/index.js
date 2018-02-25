import { combineReducers } from 'redux';
import totalReducer from './totalReducer';
import windowReducer from './windowReducer';

const rootReducer = combineReducers({
  totalReducer : totalReducer,
  windowReducer : windowReducer
});

export default rootReducer;
