import * as actionTypes from './actionTypes';
import * as deals from '../static/sampleData/deals.json';


export const getAllDeals = () => {
  return {
    type: actionTypes.GET_ALL_DEALS,
    payload: deals.default
  }
}