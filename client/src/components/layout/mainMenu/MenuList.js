import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import MenuItem from './MenuItem'

class MenuList extends PureComponent {
  render() {
    const { auth } = this.props
    return (
      <ul className="nav">
        {!auth
          ? <MenuItem
              icon="account_circle"
              path="/sign-in"
              text="สมัครสมาชิก/เข้าสู่ระบบ"
            />
          : null}
        <MenuItem icon="search" path="/search-room" text="ค้นหาห้องพัก" />
        {auth
          ? <MenuItem
              icon="cloud_upload"
              path="/upload-slip"
              text="แจ้งชำระเงิน"
            />
          : null}
        <MenuItem icon="assignment" path="/report" text="รายงาน" />
      </ul>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(MenuList)
