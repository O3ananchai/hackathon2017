import mapKeys from 'lodash/mapKeys'
import omit from 'lodash/omit'
import { FETCH_ROOMS_SUCCESS, ADD_BOOKING_SUCCESS } from '../actions/types'

const initialState = {
  rooms: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOMS_SUCCESS:
      return { ...state, rooms: mapKeys(action.payload, '_id') }

    case ADD_BOOKING_SUCCESS:
      return { ...state, rooms: omit(state.rooms, action.payload) }

    default:
      return state
  }
}
