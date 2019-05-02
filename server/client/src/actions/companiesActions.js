import * as actionTypes from './actionTypes';
import axios from 'axios'
const CORS_HEADERS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, X-Authentication" };

export const getAllCompanies = () => {
  const request = axios.get('/api/companies', {
    headers: CORS_HEADERS
  })
  return {
    type: actionTypes.GET_ALL_COMPANIES,
    payload: request
  }
}

export const getCompanyById = (companyId) => {
  const request = axios.get(`/api/companies/${companyId}`, {
    headers: CORS_HEADERS
  })

  return {
    type: actionTypes.GET_COMPANY_BY_ID,
    payload: request
  }
}

export const createCompany = (formData) => {
  const request = axios({
    method: 'post',
    url: '/api/companies',
    headers: CORS_HEADERS,
    data: formData
  })
  return {
    type: actionTypes.GET_ALL_COMPANIES,
    payload: request
  }
}

export const deleteCompanyById = (companyId) => {
  const request = axios.delete(`/api/companies/${companyId}`, {
    headers: CORS_HEADERS
  });
  return {
    type: actionTypes.DELETE_COMPANY_BY_ID,
    payload: request
  }
}

export const sortCompanies = (field, sort) => {
  const request = axios.get(`/api/companies?field=${field}&sort=${sort}`, {
    headers: CORS_HEADERS
  });
  return {
    type: actionTypes.GET_ALL_COMPANIES,
    payload: request
  }
}

export const editCompany = (companyId, companyData) => {
  const request = axios({
    method: 'put',
    url: `/api/companies/${companyId}`,
    headers: CORS_HEADERS,
    data: companyData
  });
  return {
    type: actionTypes.EDIT_COMPANY,
    payload: request
  }
}

