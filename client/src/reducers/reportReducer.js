import { FETCH_OWNERS_SUCCESS, FETCH_BOOKINGS_SUCCESS } from '../actions/types'

const initialState = {
  owners: [],
  bookings: [],
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

    default:
      return state
  }
}
