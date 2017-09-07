import _ from 'lodash';
import {GET_MASTER_LIST,
  GET_INDIVIDUAL,
  GET_PAGED_LIST,
  GET_FILTERED_LIST} from '../actions';

export default function(state = {},action){
  switch(action.type){
    case GET_MASTER_LIST:
      const people = _.mapKeys(action.payload,'ID');
      return Object.assign({},state,people);
    case GET_PAGED_LIST:
      //use reducer to take a range of rows from JSON data
      //displaying whole list at once slows browser considerably
      const paged = _.reduce(action.payload.csv,(res={},val,key)=>{
        // console.log('list reducer key val', key, val);
        if(key >= action.payload.start && key <= action.payload.end){
          console.log('something starts...', res, val,key);
          // if(!res){res={}}
          res.push(val);
          // console.log('new res,',res);
          return res;
        }
        return res;
      },[])
      console.log('paged... ', paged);
      // const peoplePaged = _.mapKeys(paged,'ID');
      // console.log('paged list??? ',peoplePaged);
      return Object.assign({},state,paged);
    case GET_FILTERED_LIST:
      const filteredList = action.payload.csv;
      return Object.assign({},state,filteredList);
    case GET_INDIVIDUAL:
      const person = _.mapKeys(action.payload.csv,'ID');
      return Object.assign(
        {},state,{[action.payload.id]:person[action.payload.id]}
      )
    default:
      return state;
  }
}
