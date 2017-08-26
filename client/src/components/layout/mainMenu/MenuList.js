import React, { PureComponent } from 'react'

import MenuItem from './MenuItem'

class MenuList extends PureComponent {
  render() {
    return (
      <ul className="nav">
        <MenuItem
          icon="account_circle"
          path="/sign-in"
          text="สมัครสมาชิก/เข้าสู่ระบบ"
        />
        <MenuItem icon="search" path="/search-room" text="ค้นหาห้องพัก" />
        <MenuItem icon="cloud_upload" path="/upload-slip" text="แจ้งชำระเงิน" />
        <MenuItem icon="assignment" path="/report" text="รายงาน" />
      </ul>
    )
  }
}

export default MenuList
