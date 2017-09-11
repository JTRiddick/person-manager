import _ from 'lodash';
import {GET_MASTER_LIST,
  GET_INDIVIDUAL,
  GET_PAGED_LIST,
  RESET_RESULTS,
  SEARCH_LIST,
  FILTER_LIST
} from '../actions';

export default function(state = {},action){
  switch(action.type){
    case GET_MASTER_LIST:
      const people = _.mapKeys(action.payload,'ID');
      return Object.assign({},state,people);
    case GET_PAGED_LIST:
      //use reducer to take a range of rows from JSON data
      //displaying whole list at once slows browser considerably
      const paged = _.reduce(action.payload.csv,(res,val,key)=>{
        if(key >= action.payload.start && key <= action.payload.end){
          console.log('paging item ', val, 'to ', res);
          res.push(val);
          return res;
        }
        return res;

      },[])
      console.log('reducder paged..',paged, 'type of', typeof paged);
      // return Object.assign({},state,paged);
      return paged;

    case GET_INDIVIDUAL:
      const person = _.mapKeys(action.payload.csv,'ID');
      return Object.assign(
        {},state,{[action.payload.id]:person[action.payload.id]}
      )
    case SEARCH_LIST:
      const searchedList = _.find(action.payload.csv, (item)=>{
        return _.includes(item,action.payload.term)
      })
      return Object.assign({},{[0]:searchedList[0]});
    case FILTER_LIST:
      return ([]);
    case RESET_RESULTS:
      return [];
    default:
      return state;
  }
}
