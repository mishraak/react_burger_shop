import { combineReducers } from 'redux';

//import windowReducer from './windowReducer';
import choicesReducer from './choicesReducer';

const rootReducer = combineReducers({
  choices : choicesReducer
});

export default rootReducer;
