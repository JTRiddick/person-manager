import { combineReducers } from 'redux';
import peopleReducer from './people_reducer';
import uiReducer from './ui_reducer';

const initialState = {
  // initial state object
};


const rootReducer = combineReducers({
  people: peopleReducer,
  ui: uiReducer
});

export default rootReducer;
