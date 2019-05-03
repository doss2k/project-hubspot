import * as actionTypes from './actionTypes';
import axios from 'axios'
const CORS_HEADERS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, X-Authentication" };

export const getSuccessRate = () => {
  const request = axios.get('/api/calc/successrate', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_SUCCESS_RATE,
    payload: request
  }
}

export const getDealsInProgress = () => {
  const request = axios.get('/api/calc/dealsinprogress', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.DEALS_IN_PROGRESS,
    payload: request
  }
}

export const getAveragePerDeal = () => {
  const request = axios.get('/api/calc/dealsinprogress', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_AVERAGE_REVENUE_PER_DEAL,
    payload: request
  }
}

export const getTotalRevenueToDate = () => {
  const request = axios.get('/api/calc/totalrevytd', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_TOTAL_REVENUE_TO_DATE,
    payload: request
  }
}

export const getAverageTimeToClose = () => {
  const request = axios.get('/api/calc/avgtimetoclose', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_AVERAGE_TIME_TO_CLOSE_DEAL,
    payload: request
  }
}

export const getTopThreeClients = () => {
  const request = axios.get('/api/calc/topthreeclients', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_TOP_THREE_CLIENTS,
    payload: request
  }
}