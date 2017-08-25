import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as notifications } from 'react-notification-system-redux'

import layout from './layoutReducer'
import searchRoom from './searchRoomReducer'
import roomDetail from './roomDetailReducer'

export default combineReducers({
  notifications,
  form,
  layout,
  searchRoom,
  roomDetail
})
