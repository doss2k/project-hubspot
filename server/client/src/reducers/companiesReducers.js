import * as actionTypes from '../actions/actionTypes';
// let state = {
//   companies: null
// }

const initialState = {}
let data = [];
export const companiesReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_ALL_COMPANIES:
      if (action.payload.data.companyName) {
        const newCompany = action.payload.data;
        data.push(newCompany)
      } else {
        data = action.payload.data
      }

      return {
        ...state,
        companies: [...data]
      }

    case actionTypes.CREATE_COMPANY:
      return {
        ...state,
        companyName: action.payload.data
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

    default:
      return state;
  }
}

export default companiesReducer;