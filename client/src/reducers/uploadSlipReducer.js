import mapKeys from 'lodash/mapKeys'

import { FETCH_NO_SLIP_BOOKINGS_SUCCESS } from '../actions/types'

const initialState = {
  noSlipBookings: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NO_SLIP_BOOKINGS_SUCCESS:
      return { ...state, noSlipBookings: mapKeys(action.payload, '_id') }

    default:
      return state
  }
}
