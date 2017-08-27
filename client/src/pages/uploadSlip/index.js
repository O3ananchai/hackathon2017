import React, { PureComponent } from 'react'

import Card from '../../components/Card'
import UploadSlipForm from './UploadSlipForm'

class UploadSlip extends PureComponent {
  onSubmit = values => {
    console.log(values)
  }

  render() {
    return (
      <div className="container-fluid">
        <Card title="อัพโหลดหลักฐานการโอนเงิน">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <UploadSlipForm onSubmit={this.onSubmit} />
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default UploadSlip
