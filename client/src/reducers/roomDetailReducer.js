import { FETCH_ROOM_DETAIL_SUCCESS } from '../actions/types'

const initialState = {
  room: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOM_DETAIL_SUCCESS:
      return { ...state, room: action.payload }

    default:
      return state
  }
}
