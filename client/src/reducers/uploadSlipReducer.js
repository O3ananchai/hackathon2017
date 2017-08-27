import mapKeys from 'lodash/mapKeys'
import omit from 'lodash/omit'

import {
  FETCH_NO_SLIP_BOOKINGS_SUCCESS,
  UPLOAD_SLIP_SUCCESS
} from '../actions/types'

const initialState = {
  noSlipBookings: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NO_SLIP_BOOKINGS_SUCCESS:
      return { ...state, noSlipBookings: mapKeys(action.payload, '_id') }

    case UPLOAD_SLIP_SUCCESS:
      return {
        ...state,
        noSlipBookings: omit(state.noSlipBookings, action.payload)
      }

    default:
      return state
  }
}
