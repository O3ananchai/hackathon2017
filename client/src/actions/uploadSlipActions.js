import { success, error } from 'react-notification-system-redux'
import axios from 'axios'
import { reset } from 'redux-form'

import { FETCH_NO_SLIP_BOOKINGS_SUCCESS, UPLOAD_SLIP_SUCCESS } from './types'

export const fetchNoSlipBookings = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/bookings')
    dispatch({ type: FETCH_NO_SLIP_BOOKINGS_SUCCESS, payload: data })
  } catch (e) {
    dispatch(error({ title: 'แจ้งเตือน', message: e.message }))
  }
}

export const uploadSlip = values => async dispatch => {
  try {
    await axios.put('/api/bookings', values)
    dispatch({ type: UPLOAD_SLIP_SUCCESS, payload: values.bookingId })
    dispatch(
      success({
        title: 'แจ้งเตือน',
        message: 'อัพโหลดหลักฐานการโอนเงินเรียบร้อย!'
      })
    )
    dispatch(reset('uploadSlip'))
  } catch (e) {
    dispatch(error({ title: 'แจ้งเตือน', message: e.message }))
  }
}
