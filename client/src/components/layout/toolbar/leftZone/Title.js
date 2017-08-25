import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import flow from 'lodash/fp/flow'
import thru from 'lodash/fp/thru'
import split from 'lodash/fp/split'
import startCase from 'lodash/startCase'

class Title extends PureComponent {
  render() {
    return (
      <a className="navbar-brand">
        {this.props.title}
      </a>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: flow(split('/'), thru(items => items[1]), startCase)(
      state.router.location.pathname
    )
  }
}

export default connect(mapStateToProps)(Title)
