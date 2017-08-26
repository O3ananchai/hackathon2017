import React, { PureComponent } from 'react'

import Card from '../../components/Card'

class SignIn extends PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <Card title="สมัครสมาชิก/เข้าสู่ระบบ">
          <div className="row">
            <div className="col-md-12">
              <a href="/auth/google">Sign in with google</a>
              <br />
              <a href="/auth/facebook">Sign in with facebook</a>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default SignIn
