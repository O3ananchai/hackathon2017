import React, { PureComponent } from 'react'

import Card from '../../components/Card'

class UploadSlip extends PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <Card title="อัพโหลดหลักฐานการโอนเงิน">
          <div className="row">
            <div className="col-md-12">Upload</div>
          </div>
        </Card>
      </div>
    )
  }
}

export default UploadSlip
