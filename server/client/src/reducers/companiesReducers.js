import * as actionTypes from '../actions/actionTypes';

export const companiesReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_COMPANIES:
      return {
        ...state,
        companies: action.payload.data
      }

    default:
      return state;
  }
}

export default companiesReducer;