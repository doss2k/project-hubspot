import * as actionTypes from '../actions/actionTypes'
import { normalize, schema } from 'normalizr'

export const dealsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_DEALS:
      const deal = new schema.Entity('deals', {}, { idAttribute: 'dealId' })
      const normalizedDeals = normalize(action.payload.data, [deal]).entities
        .deals

      return {
        ...state,
        deals: normalizedDeals
      }

    case actionTypes.GET_ALL_DEALS_DASHBOARD:
      return {
        ...state,
        dealsDashboard: action.payload.data
      }

    case actionTypes.GET_DEAL_POSITION:
      const stage = new schema.Entity('stages')
      const normalizedStages = normalize(action.payload.data, [stage]).entities
        .stages

      return {
        ...state,
        stages: normalizedStages
      }

    case actionTypes.SET_DEAL_POSITION:
      return {
        ...state,
        deals: { ...action.payload.deals },
        stages: { ...action.payload.stages }
      }

    case actionTypes.GET_DEAL_BY_ID:
      return {
        ...state,
        deal: action.payload.data
      }

    case actionTypes.CREATE_DEAL:
      const [dealCreated] = action.payload.data
      return {
        ...state,
        dealCreated
      }

    case actionTypes.DELETE_DEAL_BY_ID:
      return {
        ...state,
        dealDeleted: action.payload.data
      }

    default:
      return state
  }
}

export default dealsReducer
