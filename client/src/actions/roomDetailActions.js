import { error, success } from 'react-notification-system-redux'
import { push } from 'connected-react-router'
import axios from 'axios'

import { FETCH_ROOM_DETAIL_SUCCESS } from './types'

export const fetchRoom = roomId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/rooms/${roomId}`)
    dispatch({ type: FETCH_ROOM_DETAIL_SUCCESS, payload: data })
  } catch (e) {
    dispatch(error({ title: 'แจ้งเตือน', message: e.message }))
  }
}

export const addBooking = room => async (dispatch, getState) => {
  const { auth } = getState()
  if (!auth) {
    return dispatch(push('/sign-in'))
  }
  try {
    await axios.post('/bookings', room)
    dispatch(success({ title: 'แจ้งเตือน', message: 'จองห้องพักสำเร็จแล้ว!' }))
    dispatch(push('/search-room'))
  } catch (e) {
    dispatch(error({ title: 'แจ้งเตือน', message: e.message }))
  }
}
