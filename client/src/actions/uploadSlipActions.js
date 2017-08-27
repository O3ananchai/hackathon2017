import { error } from 'react-notification-system-redux'
import axios from 'axios'

import { FETCH_NO_SLIP_BOOKINGS_SUCCESS } from './types'

export const fetchNoSlipBookings = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/bookings')
    dispatch({ type: FETCH_NO_SLIP_BOOKINGS_SUCCESS, payload: data })
  } catch (e) {
    dispatch(error({ title: 'แจ้งเตือน', message: e.message }))
  }
}
