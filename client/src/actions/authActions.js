import axios from './axios'

import { FETCH_USER_SUCCESS } from './types'

export const fetchUser = () => async dispatch => {
  const { data } = await axios.get('/current-user')
  dispatch({ type: FETCH_USER_SUCCESS, payload: data })
}
