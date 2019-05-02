import * as actionTypes from '../actions/actionTypes';

export const dashboardReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_SUCCESS_RATE:
      return {
        ...state,
        successRate: action.payload.data
      }

    case actionTypes.DEALS_IN_PROGRESS:
      return {
        ...state,
        dealsInProgress: action.payload.data
      }

    case actionTypes.GET_AVERAGE_REVENUE_PER_DEAL:
      return {
        ...state,
        averageRevenuePerDeal: action.payload.data
      }
    case actionTypes.GET_TOTAL_REVENUE_TO_DATE:
      return {
        ...state,
        totalRevenue: action.payload.data
      }
    case actionTypes.GET_AVERAGE_TIME_TO_CLOSE_DEAL:
      return {
        ...state,
        timeToCloseDeal: action.payload.data
      }
    case actionTypes.GET_TOP_THREE_CLIENTS:
      return {
        ...state,
        topThreeClients: action.payload.data
      }

    default:
      return state;
  }
}

export default dashboardReducer;