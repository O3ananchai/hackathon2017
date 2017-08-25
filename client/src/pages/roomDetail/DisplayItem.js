import React, { PureComponent } from 'react'

class DisplayItem extends PureComponent {
  render() {
    const { title, text } = this.props
    return (
      <div className="form-group" style={{ margin: 0 }}>
        <label className="col-sm-2">
          {title} :
        </label>
        <div className="col-sm-10">
          {text}
        </div>
      </div>
    )
  }
}

export default DisplayItem
