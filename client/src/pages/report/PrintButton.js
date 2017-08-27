import { error } from 'react-notification-system-redux'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { openReport } from '../../helpers'

class PrintButton extends PureComponent {
  openReport = () => {
    const { owner, dispatch } = this.props
    if (!owner) {
      dispatch(error({ title: 'แจ้งเตือน', message: 'กรุณาเลือกเจ้าของก่อน' }))
    } else {
      openReport(`bookings?ownerId=${owner.value}`)
    }
  }

  render() {
    return (
      <button className="btn btn-primary pull-right" onClick={this.openReport}>
        พิมพ์รายงาน
      </button>
    )
  }
}

const mapStateToProps = ({ report: { visibilityFilter: { owner } } }) => ({
  owner
})

export default connect(mapStateToProps)(PrintButton)
