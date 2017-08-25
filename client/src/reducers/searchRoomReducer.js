import mapKeys from 'lodash/mapKeys'
import { FETCH_ROOMS_SUCCESS } from '../actions/types'

const initialState = {
  rooms: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOMS_SUCCESS:
      return { ...state, rooms: mapKeys(action.payload, '_id') }

    default:
      return state
  }
}
