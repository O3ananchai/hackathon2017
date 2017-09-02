import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import flow from 'lodash/fp/flow'
import split from 'lodash/fp/split'
import thru from 'lodash/fp/thru'

import * as actions from '../../../actions'

class MenuItem extends PureComponent {
  render() {
    const { path, text, icon, currentPath, closeMenu } = this.props
    return (
      <li className={path === currentPath ? 'active' : ''}>
        <Link to={path} onClick={closeMenu}>
          <i className="material-icons">{icon}</i>
          <p>{text}</p>
        </Link>
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentPath: flow(split('/'), thru(items => `/${items[1]}`))(
      state.router.location.pathname
    )
  }
}

export default connect(mapStateToProps, actions)(MenuItem)
