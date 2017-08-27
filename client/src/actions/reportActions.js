import { error, success } from 'react-notification-system-redux'
import axios from 'axios'

import {
  FETCH_BOOKINGS_SUCCESS,
  FETCH_OWNERS_SUCCESS,
  FETCH_BOOKING_SUCCESS,
  CLOSE_SLIP_MODAL
} from './types'

export const fetchOwners = () => async dispatch => {
  try {
    const { data } = await axios.get(`/api/owners`)
    dispatch({ type: FETCH_OWNERS_SUCCESS, payload: data })
  } catch (e) {
    dispatch(error({ title: 'แจ้งเตือน', message: e.message }))
  }
}

export const fetchBookings = owner => async dispatch => {
  try {
    const { data } = await axios.get(`/api/bookings?ownerId=${owner.value}`)
    dispatch({ type: FETCH_BOOKINGS_SUCCESS, payload: { data, owner } })
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

export const fetchBooking = bookingId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/bookings/${bookingId}`)
    dispatch({ type: FETCH_BOOKING_SUCCESS, payload: data.slip })
  } catch (e) {
    dispatch(error({ title: 'แจ้งเตือน', message: e.message }))
  }
}

export const closeSlipModal = () => ({ type: CLOSE_SLIP_MODAL })
