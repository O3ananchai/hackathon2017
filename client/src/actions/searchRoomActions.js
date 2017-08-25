import { success, error } from 'react-notification-system-redux'
import axios from './axios'

import { FETCH_ROOMS_SUCCESS } from './types'

export const fetchRooms = () => async dispatch => {
  try {
    const { data } = await axios.get('/rooms')
    dispatch({ type: FETCH_ROOMS_SUCCESS, payload: data })
  } catch (e) {
    dispatch(error({ title: 'แจ้งเตือน', message: e.message }))
  }
}
