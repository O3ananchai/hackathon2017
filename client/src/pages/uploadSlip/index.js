import React, { PureComponent } from 'react'

import Card from '../../components/Card'
import UploadSlipForm from './UploadSlipForm'

class UploadSlip extends PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <Card title="อัพโหลดหลักฐานการโอนเงิน">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <UploadSlipForm />
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default UploadSlip
