import _ from 'lodash';
import {GET_MASTER_LIST,GET_INDIVIDUAL} from '../actions';

export default function(state = {},action){
  switch(action.type){
    case GET_MASTER_LIST:
      const people = _.mapKeys(action.payload,'ID');
      return Object.assign({},state,people);
    case GET_INDIVIDUAL:
      const person = _.mapKeys(action.payload.csv,'ID');
      return Object.assign({},state,{[action.payload.id]:person[action.payload.id]})
    default:
      return state;
  }
}
