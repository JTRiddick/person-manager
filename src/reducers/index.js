import { combineReducers } from 'redux';
import peopleReducer from './people_reducer';


const initialState = {
  // initial state object
};


const rootReducer = combineReducers({
  people: peopleReducer

});

export default rootReducer;
