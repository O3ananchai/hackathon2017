import {
  FETCH_OWNERS_SUCCESS,
  FETCH_BOOKINGS_SUCCESS,
  CLOSE_SLIP_MODAL,
  FETCH_BOOKING_SUCCESS
} from '../actions/types'

const initialState = {
  owners: [],
  bookings: [],
  showSlipModal: false,
  slip: null,
  visibilityFilter: { owner: null }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OWNERS_SUCCESS:
      return { ...state, owners: action.payload }

    case FETCH_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookings: action.payload.data,
        visibilityFilter: { owner: action.payload.owner }
      }

    case FETCH_BOOKING_SUCCESS:
      return {
        ...state,
        slip: action.payload,
        showSlipModal: true
      }

    case CLOSE_SLIP_MODAL:
      return { ...state, showSlipModal: false }

    default:
      return state
  }
}
