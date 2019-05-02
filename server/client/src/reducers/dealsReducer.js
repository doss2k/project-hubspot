import * as actionTypes from '../actions/actionTypes';

export const dealsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_DEALS:
      // Need to normalize before sending to component
      return {
        ...state,
        deals: action.payload.data
      }
    case actionTypes.GET_DEAL_POSITION:
      return {
        ...state,
        stages: action.payload.data
      }

    case actionTypes.GET_DEAL_BY_ID:
      return {
        ...state,
        deal: action.payload.data
      }

    case actionTypes.CREATE_DEAL:
      return {
        ...state,
        dealCreated: action.payload.data
      }

    case actionTypes.DELETE_DEAL_BY_ID:
      return {
        ...state,
        dealDeleted: action.payload.data
      }

    default:
      return state;
  }
}

export default dealsReducer;