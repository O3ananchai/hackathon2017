import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/lib/Button'

import renderField from '../../components/renderField'

class PriceSearchForm extends PureComponent {
  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="price"
          component={renderField}
          label="ช่วงราคา"
          type="select"
        />
        <Button bsStyle="primary" disabled={submitting} type="submit" />
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.price) {
    errors.price = 'กรุณาระบุช่วงราคา'
  }
  return errors
}

export default reduxForm({ form: 'priceSearch', validate })(PriceSearchForm)
