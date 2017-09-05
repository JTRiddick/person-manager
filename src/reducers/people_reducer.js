import _ from 'lodash';
import {GET_MASTER_LIST} from '../actions';

export default function(state = {},action){
  switch(action.type){
    case GET_MASTER_LIST:
      const people = _.mapKeys(action.payload.data,'ID');
      return Object.assign({},state,people);
    default:
      return state;
  }
}
