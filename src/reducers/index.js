import { combineReducers } from 'redux';

//import windowReducer from './windowReducer';
import choicesReducer from './choicesReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  choices : choicesReducer,
  simpleform: formReducer
});

export default rootReducer;
