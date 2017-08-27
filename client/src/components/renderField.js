import React, { PureComponent } from 'react'
import Select from 'react-select'

import DatePicker from './DatePicker'
import FileInput from './FileInput'

class renderField extends PureComponent {
  renderInput() {
    const { input, label, type, meta, description, ...rest } = this.props
    switch (type) {
      case 'select':
        return (
          <Select
            {...rest}
            {...input}
            onBlur={() => input.onBlur(input.value.value)}
          />
        )

      case 'date':
        return <DatePicker date={input.value} onDateChange={input.onChange} />

      case 'fileInput':
        return <FileInput {...input} description={description} />

      default:
        return (
          <input
            {...rest}
            {...input}
            placeholder={label}
            type={type}
            className="form-control"
          />
        )
    }
  }

  render() {
    const { label, meta: { touched, error, warning } } = this.props
    return (
      <div
        className={`form-group label-floating ${touched &&
          error &&
          'has-error'}`}
      >
        <label className="control-label">
          {label}
        </label>
        {this.renderInput()}
        {touched &&
          ((error &&
            <span style={{ color: 'red' }}>
              {error}
            </span>) ||
            (warning &&
              <span>
                {warning}
              </span>))}
      </div>
    )
  }
}

export default renderField
