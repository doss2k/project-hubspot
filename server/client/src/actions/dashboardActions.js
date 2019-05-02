import * as actionTypes from './actionTypes';
import axios from 'axios'
const CORS_HEADERS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, X-Authentication" };

export const getSuccessRate = () => {
  const request = axios.get('http://localhost:8000/api/calc/successrate', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_ALL_DEALS,
    payload: request
  }
}

export const getDealsInProgress = () => {
  const request = axios.get('http://localhost:8000/api/calc/dealsinprogress', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_ALL_DEALS,
    payload: request
  }
}
export const getAveragePerDeal = () => {
  const request = axios.get('http://localhost:8000/api/calc/dealsinprogress', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_ALL_DEALS,
    payload: request
  }
}

export const getTotalRevenueToDate = () => {
  const request = axios.get('http://localhost:8000/api/calc/totalrevytd', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_ALL_DEALS,
    payload: request
  }
}

export const getAverageTimeToClose = () => {
  const request = axios.get('http://localhost/api/calc/avgtimetoclose', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_ALL_DEALS,
    payload: request
  }
}

export const getTopThreeClients = () => {
  const request = axios.get('http://localhost/api/calc/topthreeclients', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_ALL_DEALS,
    payload: request
  }
}