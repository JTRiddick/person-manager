import _ from 'lodash';

export const GET_MASTER_LIST = 'GET_MASTER_LIST';
export const GET_PAGED_LIST = 'GET_PAGED_LIST';
export const GET_FILTERED_LIST = 'GET_FILTERED_LIST';
export const SORT_LIST = 'SORT_LIST';
export const GET_INDIVIDUAL = 'GET_INDIVIDUAL';
export const LOAD_CSV = 'LOAD_CSV';
export const SET_RANGE = 'SET_RANGE';
export const TOGGLE_COL = 'TOGGLE_COL';

import csv from '../public/data/Employees.csv';

export function getAll() {
  return {
    type: GET_MASTER_LIST,
    payload: csv
  };
}

export function getPage(start=0,end=25){
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

export function filterList(attributes=[]){

}

export function setRange(min,max){
  return{
    type: SET_RANGE,
    payload: {min,max}
  }
}
