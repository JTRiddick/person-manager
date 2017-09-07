
import {
  SET_RANGE,
  TOGGLE_COL,
  SORT_LIST
} from '../actions';

const initialState = {
  // initial state object
  firstItem:0,
  lastItem:9,
  resultsPerPage:10,
  showColumns:['ID','First Name','Last Name','Email','Address','City','State',
    'Job','SSN','C_Number'],
  sortBy:[]
};

const uiReducer = (state=initialState,action={}) => {
  switch (action.type) {
    case SET_RANGE:
      console.log('new page range ...', action.payload.min,action.payload.max);
      return Object.assign({},state,{
        firstItem:action.payload.min,
        lastItem:action.payload.max
      });
    default:
      return state;

  }
}

export default uiReducer;
