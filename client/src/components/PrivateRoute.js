import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

class PrivateRoute extends PureComponent {
  render() {
    const { component: Component, auth, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={props =>
          auth
            ? <Component {...props} />
            : <Redirect
                to={{ pathname: '/sign-in', state: { from: props.location } }}
              />}
      />
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

export default withRouter(connect(mapStateToProps)(PrivateRoute))
