import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/lib/Button'
import map from 'lodash/map'

import renderField from '../../components/renderField'
import * as actions from '../../actions'

class UploadSlipForm extends PureComponent {
  componentDidMount() {
    this.props.fetchNoSlipBookings()
  }

  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="bookingId"
          component={renderField}
          options={this.props.noSlipBookingOptions}
          label="รายการจองที่ยังไม่ได้ชำระเงิน"
          type="select"
        />
        <Field
          name="slip"
          component={renderField}
          description="วางไฟล์ที่นี่"
          label="อัพโหลดหลักฐานการโอนเงิน"
          type="fileInput"
        />
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <Button bsStyle="primary" disabled={submitting} type="submit">
              อัพโหลด
            </Button>
          </div>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.bookingId) {
    errors.bookingId = 'กรุณาเลือกรายการจอง'
  }
  if (!values.slip) {
    errors.slip = 'ยังไม่ได้เลือกไฟล์'
  }
  return errors
}

const mapStateToProps = ({ uploadSlip: { noSlipBookings } }) => ({
  noSlipBookingOptions: map(noSlipBookings, noSlipBooking => ({
    value: noSlipBooking._id,
    label: `ชื่อเจ้าของ: ${noSlipBooking.owner.name} ที่อยู่ห้องพัก: ${noSlipBooking.room
      .address}`
  }))
})

export default connect(mapStateToProps, actions)(
  reduxForm({ form: 'uploadSlip', validate })(UploadSlipForm)
)
