import * as actionTypes from './actionTypes';
import * as companies from '../static/sampleData/companies.json';


export const getAllCompanies = () => {
  return {
    type: actionTypes.GET_ALL_COMPANIES,
    payload: companies
  }
}