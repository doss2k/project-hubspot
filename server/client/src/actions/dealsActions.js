import * as actionTypes from './actionTypes';
import axios from 'axios'
const CORS_HEADERS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, X-Authentication" };

export const getAllDeals = () => {
  const request = axios.get('http://localhost:8000/api/deals', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_ALL_DEALS,
    payload: request
  }
}

export const getDealById = (dealId) => {
  const request = axios.get(`http://localhost:8000/api/deals${dealId}`, {
    headers: CORS_HEADERS
  })

  return {
    type: actionTypes.GET_DEAL_BY_ID,
    payload: request
  }
}