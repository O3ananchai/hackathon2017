import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/lib/Button'

import searchOptions from './searchOptions'
import renderField from '../../components/renderField'

class PriceSearchForm extends PureComponent {
  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className="col-md-3">
          <Field
            name="price"
            component={renderField}
            options={searchOptions}
            label="ช่วงราคา"
            type="select"
          />
        </div>
        <div className="col-md-6">
          <Button
            style={{ marginTop: 23 }}
            bsStyle="primary"
            disabled={submitting}
            type="submit"
          >
            ค้นหา
          </Button>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.price) {
    errors.price = 'กรุณาระบุช่วงราคาที่ต้องการค้นหา'
  }
  return errors
}

export default reduxForm({ form: 'priceSearch', validate })(PriceSearchForm)
