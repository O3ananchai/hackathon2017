import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Card from '../../components/Card'

class SignIn extends PureComponent {
  render() {
    if (this.props.auth) {
      return <Redirect to="/search-room" />
    }
    return (
      <div className="container-fluid">
        <Card title="สมัครสมาชิก/เข้าสู่ระบบ">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <a
                href="/api/auth/facebook"
                className="btn btn-block btn-social btn-facebook"
              >
                <span className="fa fa-facebook" /> Sign in with Facebook
              </a>
              <a
                href="/api/auth/google"
                className="btn btn-block btn-social btn-google"
              >
                <span className="fa fa-google" /> Sign in with Google
              </a>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(SignIn)
