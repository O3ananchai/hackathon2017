import { FETCH_OWNERS_SUCCESS } from '../actions/types'

const initialState = {
  owners: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OWNERS_SUCCESS:
      return { ...state, owners: action.payload }

    default:
      return state
  }
}
