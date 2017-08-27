import React, { PureComponent } from 'react'

import Card from '../../components/Card'

class SignIn extends PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <Card title="สมัครสมาชิก/เข้าสู่ระบบ">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <a
                href="/auth/facebook"
                className="btn btn-block btn-social btn-facebook"
              >
                <span className="fa fa-facebook" /> Sign in with Facebook
              </a>
              <a
                href="/auth/google"
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

export default SignIn
