import { success, error } from 'react-notification-system-redux'
import split from 'lodash/split'
import axios from './axios'

import { FETCH_ROOMS_SUCCESS } from './types'

export const fetchRooms = ({ price }) => async dispatch => {
  const [startPrice, endPrice] = split(price, '#')
  try {
    const { data } = await axios.get(
      `/rooms?startPrice=${startPrice}&endPrice=${endPrice}`
    )
    dispatch({ type: FETCH_ROOMS_SUCCESS, payload: data })
    dispatch(success({ title: 'แจ้งเตือน', message: 'ค้นหาข้อมูลเรียบร้อย' }))
  } catch (e) {
    dispatch(error({ title: 'แจ้งเตือน', message: e.message }))
  }
}
