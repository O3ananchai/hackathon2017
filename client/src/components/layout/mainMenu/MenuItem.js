import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import flow from 'lodash/fp/flow'
import startCase from 'lodash/fp/startCase'
import split from 'lodash/fp/split'
import thru from 'lodash/fp/thru'

class MenuItem extends PureComponent {
  render() {
    const { path, text, icon, currentPath } = this.props
    return (
      <li className={path === currentPath ? 'active' : ''}>
        <Link to={path}>
          <i className="material-icons">
            {icon}
          </i>
          <p>
            {text}
          </p>
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

export default connect(mapStateToProps)(MenuItem)
