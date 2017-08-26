import React, { PureComponent } from 'react'

import Card from '../../components/Card'

class SignIn extends PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <Card title="สมัครสมาชิก/เข้าสู่ระบบ">
          <div className="row">
            <div className="col-md-12">SignIn</div>
          </div>
        </Card>
      </div>
    )
  }
}

export default SignIn
