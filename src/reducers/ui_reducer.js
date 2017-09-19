
import {
  SET_RANGE,
  TOGGLE_COL,
  SORT_LIST,
  TOGGLE_ALL_ROWS,
  TOGGLE_PAGE_CONTROL,
  TOGGLE_SEARCH_FORM
} from '../actions';

const initialState = {
  // initial state object
  firstItem:0,
  lastItem:9,
  resultsPerPage:10,
  showColumns:['name-detail','contact-detail','location-detail','SSN'],
  sortBy:[],
  collapsed:false,
  showPageControls:true,
  showSearchForm:true
};

const uiReducer = (state=initialState,action={}) => {
  switch (action.type) {
    case SET_RANGE:
      console.log('new page range ...', action.payload.min,action.payload.max);
      return Object.assign({},state,{
        firstItem:action.payload.min,
        lastItem:action.payload.max
      });
    case TOGGLE_PAGE_CONTROL:
      console.log('toggled page control');
      return {...state};
    case TOGGLE_SEARCH_FORM:
      console.log('toggled search form');
      return {...state};
    case TOGGLE_ALL_ROWS:
      const collapsedState = state.collapsed ? false : true;
      return Object.assign({},state,{ collapsed:collapsedState })
    default:
      return state;

  }
}

export default uiReducer;
