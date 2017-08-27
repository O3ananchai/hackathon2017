import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Card from '../../components/Card'
import UploadSlipForm from './UploadSlipForm'
import * as actions from '../../actions'

class UploadSlip extends PureComponent {
  onSubmit = values => {
    this.props.uploadSlip(values)
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

export default connect(null, actions)(UploadSlip)
