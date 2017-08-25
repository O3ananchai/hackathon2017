import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'
import App from './App'
import store from './store'

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-select/dist/react-select.css'
import './resources/css/material-dashboard.css'
import 'react-bootstrap-table/css/react-bootstrap-table.css'
import './resources/css/index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
