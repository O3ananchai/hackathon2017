import React, { PureComponent } from 'react'

import MenuItem from './MenuItem'

class MenuList extends PureComponent {
  render() {
    return (
      <ul className="nav">
        <MenuItem icon="assignment" path="/search-room" text="ค้นหาห้องพัก" />
        <MenuItem icon="assignment" path="/upload-slip" text="แจ้งชำระเงิน" />
        <MenuItem icon="assignment" path="/report" text="รายงาน" />
      </ul>
    )
  }
}

export default MenuList
