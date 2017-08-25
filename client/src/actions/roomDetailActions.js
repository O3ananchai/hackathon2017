import { error } from 'react-notification-system-redux'
import axios from './axios'

import { FETCH_ROOM_DETAIL_SUCCESS } from './types'

export const fetchRoom = roomId => async dispatch => {
  try {
    const { data } = await axios.get(`/room/${roomId}`)
    dispatch({ type: FETCH_ROOM_DETAIL_SUCCESS, payload: data })
  } catch (e) {
    dispatch(error({ title: 'แจ้งเตือน', message: e.message }))
  }
}
