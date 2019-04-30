import * as actionTypes from './actionTypes';
import axios from 'axios'
const CORS_HEADERS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, X-Authentication" };

export const getAllCompanies = () => {
  const request = axios.get('http://localhost:8000/api/companies', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_ALL_COMPANIES,
    payload: request
  }
}