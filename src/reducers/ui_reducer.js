import _ from 'lodash';

import {
  MIN_PAGE,
  MAX_PAGE,
  TOGGLE_COL,
  SORT_LIST
} from '../actions';

const initialState = {
  // initial state object
  firstItem:0,
  lastItem:20,
  showColumns:['ID','First Name','Last Name','Email','Address','City','State',
    'Job','SSN','C_Number'],
  sortBy:[]
};

const uiReducer = (state=initialState,action={}) => {
  switch (action.type) {
    case MIN_PAGE:
      return Object.assign({},state,{firstItem:action.payload});
    case MAX_PAGE:
      return Object.assign({},state,{lastItem:action.payload});
    default:
      return state;

  }
}

export default uiReducer;
