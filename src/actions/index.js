import _ from 'lodash';

export const GET_MASTER_LIST = 'GET_MASTER_LIST';
export const GET_FILTERED_LIST = 'GET_FILTERED_LIST';
export const LOAD_CSV = 'LOAD_CSV';

import csv from '../public/data/Employees.csv';

export function getAll(csv) {
  // const request = axios.get(`${ROOT_URL}/api/posts${API_KEY}`);
  return {
    type: GET_MASTER_LIST,
    payload: csv
  };
}
