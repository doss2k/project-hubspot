import * as actionTypes from '../actions/actionTypes';

const initialState = {}
export const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_COMPANIES:
      return {
        ...state,
        companies: action.payload.data
      }

    case actionTypes.CREATE_COMPANY:
      return {
        ...state,
        createCompany: action.payload.data
      }

    case actionTypes.GET_COMPANY_BY_ID:
      return {
        ...state,
        company: action.payload.data
      }

    case actionTypes.DELETE_COMPANY_BY_ID:
      return {
        ...state,
        companyDeleted: action.payload.data
      }

    case actionTypes.SORT_COMPANIES:
      return {
        ...state,
        companiesSorted: action.payload.data
      }

    case actionTypes.EDIT_COMPANY:
      return {
        ...state,
        companyEdited: action.payload.data
      }

    default:
      return state;
  }
}

export default companiesReducer;