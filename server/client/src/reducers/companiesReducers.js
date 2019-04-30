import * as actionTypes from '../actions/actionTypes';

export const companiesReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_COMPANIES:
      return {
        ...state,
        companies: action.payload.data
      }

    case actionTypes.CREATE_COMPANY:
      return {
        ...state,
        companyCreated: action.payload.data
      }

    case actionTypes.GET_COMPANY_BY_ID:
      return {
        ...state,
        company: action.payload.data
      }

    default:
      return state;
  }
}

export default companiesReducer;