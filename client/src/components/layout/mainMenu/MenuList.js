import React, { PureComponent } from 'react'

import MenuItem from './MenuItem'

class MenuList extends PureComponent {
  render() {
    return (
      <ul className="nav">
        <MenuItem icon="assignment" path="/search-room" />
      </ul>
    )
  }
}

export default MenuList
