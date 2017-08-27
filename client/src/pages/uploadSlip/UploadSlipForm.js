import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/lib/Button'

import renderField from '../../components/renderField'

class UploadSlipForm extends PureComponent {
  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="bookingId"
          component={renderField}
          options={[{ value: '1', label: '1' }]}
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

export default reduxForm({ form: 'uploadSlip', validate })(UploadSlipForm)
