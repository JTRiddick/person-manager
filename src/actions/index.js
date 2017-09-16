import _ from 'lodash';

export const GET_MASTER_LIST = 'GET_MASTER_LIST';
export const GET_PAGED_LIST = 'GET_PAGED_LIST';
export const GET_FILTERED_LIST = 'GET_FILTERED_LIST';
export const RESET_RESULTS = 'RESET_RESULTS';
export const SORT_LIST = 'SORT_LIST';
export const SEARCH_LIST = 'SEARCH_LIST';
export const FILTER_LIST = 'FILTER_LIST';
export const GET_INDIVIDUAL = 'GET_INDIVIDUAL';
export const LOAD_CSV = 'LOAD_CSV';
export const SET_RANGE = 'SET_RANGE';
export const TOGGLE_SEARCH_FORM = 'TOGGLE_SEARCH_FORM';
export const TOGGLE_COL = 'TOGGLE_COL';
export const TOGGLE_PAGE_CONTROL = 'TOGGLE_PAGE_CONTROL';
export const TOGGLE_ALL_ROWS = 'TOGGLE_ALL_ROWS';



import csv from '../public/data/Employees.csv';

export function getAll() {
  return {
    type: GET_MASTER_LIST,
    payload: csv
  };
}

export function getPage(start,end){
  return{
    type: GET_PAGED_LIST,
    payload: {csv,start,end}
  }
}

export function getOne(id){
  return{
    type: GET_INDIVIDUAL,
    payload: {csv,id}
  }
}

export function toggleAllRows(){
  return{
    type: TOGGLE_ALL_ROWS
  }
}

export function filterList(attributes){

}

export function searchList(term,cb=()=>{console.log('search callback fired')}){
  cb();//this method returns a single result, use callback to send us to that view
  return{
    type: SEARCH_LIST,
    payload: {csv, term}
  }
}

export function sortList(category){

}

export function setRange(min,max){
  return{
    type: SET_RANGE,
    payload: {min,max}
  }
}

export function resetResults(cb=()=>{console.log('reset callback fired')}){
  cb();
  return{
    type: RESET_RESULTS
  }
}
