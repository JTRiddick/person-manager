import _ from 'lodash';

export const GET_MASTER_LIST = 'GET_MASTER_LIST';
export const GET_PAGED_LIST = 'GET_PAGED_LIST';
export const GET_FILTERED_LIST = 'GET_FILTERED_LIST';
export const GET_INDIVIDUAL = 'GET_INDIVIDUAL';
export const LOAD_CSV = 'LOAD_CSV';

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
