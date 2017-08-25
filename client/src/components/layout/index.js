import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MainMenu from './mainMenu'
import Toolbar from './toolbar'
import Notification from '../Notification'
import * as actions from '../../actions'

class Layout extends PureComponent {
  render() {
    const { children, showMenu, closeMenu } = this.props
    return (
      <div className={`${showMenu ? 'nav-open ' : ''}wrapper`}>
        <Notification />
        <MainMenu />
        <div className="main-panel">
          <Toolbar />
          <div
            className="content"
            style={{ marginTop: 30 }}
            onClick={closeMenu}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ layout: { showMenu } }) => {
  return { showMenu }
}

export default withRouter(connect(mapStateToProps, actions)(Layout))
