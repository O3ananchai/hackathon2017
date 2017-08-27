import { error, success } from 'react-notification-system-redux'
import axios from 'axios'

import { FETCH_BOOKINGS_SUCCESS, FETCH_OWNERS_SUCCESS } from './types'

export const fetchOwners = () => async dispatch => {
  try {
    const { data } = await axios.get(`/api/owners`)
    dispatch({ type: FETCH_OWNERS_SUCCESS, payload: data })
  } catch (e) {
    dispatch(error({ title: 'แจ้งเตือน', message: e.message }))
  }
}

export const fetchBookings = ownerId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/bookings?ownerId=${ownerId}`)
    dispatch({ type: FETCH_BOOKINGS_SUCCESS, payload: data })
    dispatch(
      success({
        title: 'แจ้งเตือน',
        message: `พบรายการทั้งสิ้น ${data.length} รายการ`
      })
    )
  } catch (e) {
    dispatch(error({ title: 'แจ้งเตือน', message: e.message }))
  }
}
